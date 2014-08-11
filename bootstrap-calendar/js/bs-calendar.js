/**
 * @name Bootstrap Calendar
 * @author Jacek Zyœk (jzysk)
 * @version beta
 * @date 2014-08-06
 * @dependencies:
 *     - jquery-1.11.1.min.js or newer
 *     - handlebars-v1.3.0.js or newer
 * @recommended:
 *     - Bootstrap 3 (css + js)
 *     - LESS
 */

(function (env) {

    var calendar = function (options) {
        var _selector = null;
        var _debug = false;
        var _persistenceType = 'localStorage';
        var _persistenceModule = undefined;
        var _year = null;
        var _month = null;
        var _doRender = true;
        var _templates = undefined;

        // Internal types
        var LocalStoragePersistence = function () {
            if (localStorage == undefined) {
                return;
            }

            var _stringify = function (object) {
                var s = "{";
                for (var x in object) {
                    s += '"' + x + '"' + ": " + JSON.stringify(object[x]) + "\n";
                }
                s += "}";
                return s;
            };

            this.saveAll = function () {
                if (_events instanceof Object) {
                    var s = _stringify(_events);
                    localStorage.setItem('events', s);
                } else {
                    localStorage.removeItem('events');
                }
            };
            this.readAll = function () {
                var temp = localStorage.getItem('events');
                try {
                    _events = JSON.parse(temp);
                }
                catch (err) {
                    _events = new CalendarEvents();
                }
            };
            this.clearAll = function () {
                _events = new CalendarEvents();
                localStorage.removeItem('events');
            };

            return this;
        };

        var AjaxPersistence = function () {
            // fake
            //todo
            this.saveAll = function () {
                console.log('saved');
            };

            this.readAll = function () {
                console.log('read');
            };

            this.clearAll = function () {
                console.log('cleared');
            };

            return this;
        }

        var CalendarEvents = function () {
            return new Object(); //todo
        };

        var _events = new CalendarEvents();
        var _unsavedEvents = new CalendarEvents();

        /**
         * Initializes calendar object
         * @constructor
         */
        var _init = function () {
            _templates = CalendarTemplates;


            var o = options;

            // Dependency check
            var error = 'Calendar cannot be initialized. Dependency required: ';

            if (env.Handlebars == undefined) {
                throw new Error(error + 'Handlebars.js');
            }
            if (env.jQuery == undefined) {
                throw new Error(error + 'jQuery.js');
            }

            // Options check
            if (typeof o == 'string') {
                _selector = o;
            }
            else if (typeof o == 'object') {
                _selector = o.selector;
                if (o.debug != undefined) {
                    _debug = o.debug;
                }

                // Initialize persistence module
                if (o.persist != undefined) {
                    _persistenceType = o.persist;

                    if (_persistenceType != 'localStorage' &&
                        _persistenceType != 'ajax') {
                        throw new Error('Invalid persistence type');
                    }

                    switch (_persistenceType) {
                        case 'localStorage':
                            _persistenceModule = new LocalStoragePersistence();
                            break;
                        case 'ajax':
                            _persistenceModule = new AjaxPersistence();
                            break;
                        default:
                            _persistenceModule = undefined;
                            break;
                    }

                    if (_persistenceModule.readAll != undefined) {
                        _persistenceModule.readAll();
                    }
                }
            }
            else {
                throw new Error('Invalid options');
            }

            if (_selector == undefined || _selector == null) {
                throw new Error('Invalid selector');
            }

            if (_debug) {
                for (var i = 0; i < 12; i++) {
                    for (var j = 1; j <= 31; j++) {
                        for (var k = 0; k < 1; k++) {
                            _addEvent(2014, i, j, 'Jan Kowalski', 'Swimming', undefined, i * j * k);
                        }
                    }
                }
            }

            // Validate and set year/month
            if (o.year == undefined || o.month == undefined &&
                typeof o.year != 'number' || typeof o.month != 'number') {
                var currentDate = new Date();
                _year = currentDate.getFullYear();
                _month = currentDate.getMonth();
            } else {
                _setYearAndMonth(o.year, o.month);
            }

            // Create elements
            _createAddModal();

            // Render
            if (o.render != undefined) {
                _doRender = o.render;
            }

            if (_doRender) {
                _render();
            }
        };


        var _createAddModal = function () {
            var html = _templates.AddModal();

            $('body').append(html);
        };

        /**
          * Validates and creates objects and array containers
          * for specific year, month and day
          */
        var _initializeDayForEvents = function (year, month, day) {
            var s = _getStringifiedDate(year, month, day);
            year = s.year;
            month = s.month;
            day = s.day;

            if (_events == undefined || !_events instanceof Object) {
                _events = new CalendarEvents();
            }
            if (_events[year] == undefined) {
                _events[year] = {};
            }
            if (_events[year][month] == undefined) {
                _events[year][month] = {};
            }
            if (_events[year][month][day] == undefined) {
                _events[year][month][day] = [];
            }
        };

        var _anyEvents = function (year, month, day) {
            var s = _getStringifiedDate(year, month, day);
            year = s.year;
            month = s.month;
            day = s.month;

            if (_events instanceof Object &&
                _events[year] != undefined &&
                _events[year][month] != undefined &&
                _events[year][month][day] != undefined &&
                _events[year][month][day].length > 0) {
                return true;
            } else {
                return false;
            }
        }

        /**
          * Adds new event for specific date
          */
        var _addEvent = function (year, month, day, person, eventName, color, eventId) {
            var s = _getStringifiedDate(year, month, day);
            year = s.year;
            month = s.month;
            day = s.day;

            if (color == undefined) {
                color = _getRandomColor();
            }
            if (eventId == undefined) {
                eventId = new Date().getTime();
            }
            _initializeDayForEvents(year, month, day);

            var event = {
                eventId: eventId,
                person: person,
                eventName: eventName,
                color: color,
            };

            _events[year][month][day].push(event);

            //_unsavedEvents[year][month][day].push(event);
        }

        var _removeEvent = function (year, month, day, eventId) {
            var s = _getStringifiedDate(year, month, day);
            year = s.year;
            month = s.month;
            day = s.day;

            if (_anyEvents(year, month, day)) {
                var eventContainer = _events[year][month][day];
                for (var i = 0; i < eventContainer.length; i++) {
                    var event = eventContainer[i];
                    if (event.eventId == eventId) {
                        eventContainer.splice(i, 1);
                    }
                }
            }
        }

        /**
         * Returns text values for week days
         */
        var _getWeekDays = function () {
            return [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        };

        /**
          * Returns array of events for specific date
          * based on global calendar event array
          */
        var _getEventsForDate = function (year, month, day) {
            var s = _getStringifiedDate(year, month, day);
            year = s.year;
            month = s.month;
            day = s.day;

            if (_events instanceof Object &&
                _events[year] != undefined &&
                _events[year][month] != undefined &&
                _events[year][month][day] != undefined) {
                return _events[year][month][day];
            } else {
                return [];
            }
        };

        var _getStringifiedDate = function (year, month, day) {
            if (typeof year != 'string') {
                year = String(year);
                month = String(month);
                day = String(day);
            }

            return {
                year: year,
                month: month,
                day: day,
            };
        }

        /**
         * Generates data for specific year and month and attaches events to days
         */
        var _getDataForMonthAndYear = function (year, month) {
            var date = new Date(year, month);
            var monthValue = date.getMonth();
            var weeks = [];

            var week = {
                days: [],
            };

            var pushed = 0;
            var pushDay = function (_day) {
                pushed++;
                week.days.push(_day);
            };
            var pushWeek = function (_week) {
                weeks.push(week);
                week = {
                    days: [],
                };
            }

            var previousDay = new Date(date);
            previousDay.setDate(previousDay.getDate() - 1);

            var offset = previousDay.getDay();
            
            for (var i = 0; i < offset; i++) {
                pushDay({});
            }


            var dayValue = date.getDate();
            do {
                if (pushed % 7 == 0) {
                    pushWeek(week);
                }

                var day = {
                    date_string: date.toDateString(),
                    bg_color: '#DEDEDE',
                    dayValue: dayValue,
                };
                
                var eventsForDay = _getEventsForDate(year, month, dayValue);
                day.events = eventsForDay;

                pushDay(day);

                dayValue++;
                date = new Date(year, month, dayValue);

                dayValue = date.getDate();
            }
            while (dayValue > 1);

            if (week.days.length > 0) {
                pushWeek(week);
            }

            return weeks;
        };
        
        var _setYearAndMonth = function (year, month) {
            _year = year;
            _month = month;
        }

        /**
         * Renders calendar
         */
        var _render = function (year, month) {
            if (year != undefined && month != undefined) {
                _setYearAndMonth(year, month);
            }

            var cal = $(_selector);
            var currentString = _year;

            if (_month < 9) {
                currentString += " 0" + (_month + 1);
            } else {
                currentString += " " + (_month + 1);
            }

            var data = {
                current_year_month: currentString,
                weekdays: _getWeekDays(),
                weeks: _getDataForMonthAndYear(_year, _month),
            };
            var html = _templates.calendar(data);

            cal.html(html);
        };

        var hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

        /**
          * Returns string with random hexadecimal color value
          * e.g. #A3BC90
          */
        var _getRandomColor = function () {
            var str = '#';

            for (var i = 0; i < 6; i++) {
                var ran = Math.floor(Math.random() * hexValues.length);
                str += hexValues[ran];
            };

            return str;
        };

        // Initialization
        _init();

        /**
         * Public interface
         */
        return {
            render: _render,
            addEvent: _addEvent,
            removeEvent: _removeEvent,
            getEvents: function () {
                return _events;
            },
            saveEvents: function () {
                if (_persistenceModule != undefined) {
                    _persistenceModule.saveAll();
                }
            },
            clearEvents: function () {
                _events = new CalendarEvents();
            },
        };
    };
    
    // Expose calendar function to environment
    env.Calendar = calendar;
})(window);