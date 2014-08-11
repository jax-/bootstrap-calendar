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
        var _panelPosition = 'top';
        var _calendarContainer = '';
        var _showEventList = true;

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
                    if (temp == undefined || temp == undefined) {
                        throw new Error('temp is undefined');
                    }
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

        var RemotePersistence = function () {
            // fake
            //todo
            this.saveAll = function () {
                console.log('saved');
            };

            this.readAll = function () {
                $.get('http://localhost/Portal/Events/GetAllEvents', function (data) {
                    console.log(data);
                    _events = data;
                });
            };

            this.clearAll = function () {
                console.log('cleared');
            };

            return this;
        }

        var CalendarEvents = function () {
            return new Object(); //todo
        };
        
        // Tree-like structure based on objects for events
        // eg. ["2014"]["1"]["24"][]
        var _events = new CalendarEvents();

        // Events to-be-saved
        var _unsavedEvents = [];

        // Contains references to all events in flat list
        var _allEvents = [];

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
                        _persistenceType != 'remote') {
                        throw new Error('Invalid persistence type');
                    }

                    switch (_persistenceType) {
                        case 'localStorage':
                            _persistenceModule = new LocalStoragePersistence();
                            break;
                        case 'remote':
                            _persistenceModule = new RemotePersistence();
                            break;
                        default:
                            _persistenceModule = undefined;
                            break;
                    }

                    if (_persistenceModule.readAll != undefined) {
                        _persistenceModule.readAll();
                    }
                }

                // Event list
                if (o.showEventList != undefined) {
                    if (o.showEventList == true ||
                        o.showEventList == false) {
                        _showEventList = o.showEventList;
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

            // Read panel position
            if (o.panel != undefined && (o.panel == 'bottom' || 
                                         o.panel == 'top')) {
                _panelPosition = o.panel;
            }

            // Create elements
            _createContainer();
            _createAddModal();

            _createPanel(_panelPosition);
            _addPanelEvents();

            _createEventList();
            _bindEventListEvents();

            // Render
            if (o.render != undefined) {
                _doRender = o.render;
            }

            if (_doRender) {
                _render();
            }
        };

        var _createContainer = function () {
            $(_selector).append('<div class="calendar-container container"></div>');
            _calendarContainer = _selector + ' .calendar-container';
        };

        var _createAddModal = function () {
            var html = _templates.addModal();

            $('body').append(html);
        };

        var _createPanel = function (position) {
            var html = _templates.panel();

            if (position == 'bottom') {
                $(_calendarContainer).after(html);
            } else {
                $(_calendarContainer).before(html);
            }
        };

        var _addPanelEvents = function () {
            var panelSelector = '.calendar-panel ';

            $(panelSelector + '.prev-month').click(function () {
                _month--;
                if (_month < 0) {
                    _month = 11;
                    _year--;
                }

                _render();
            });

            $(panelSelector + '.next-month').click(function () {
                _month++;
                if (_month > 11) {
                    _month = 0;
                    _year++;
                }

                _render();
            });

            var changeYear = function (value) {
                _year += value;
                _render();
            };

            $(panelSelector + '.prev-year').click(function () {
                changeYear(-1);
            });
            $(panelSelector + '.next-year').click(function () {
                changeYear(1);
            });

            var addNewEvent = function (day) {
                var person = $('#person').val();
                var event = $('#eventName').val();

                _addEvent(_year, _month, day, person, event);
                _render();

                $('#person').val('');
                $('#eventName').val('');
            };

            $(_selector).on('dblclick', '.week-day', function () {
                var day = $(this).data('day');

                var dateStr = year + '-' + month + '-' + day;
                $('#modal-title-date').html(dateStr);
                $('#hidden-event-day').val(day);
                var modal = $('#myModal').modal('show');
            });

            $(_selector).on('click', '.event', function (e) {
                var day = $(this).data('day');
                var eventId = $(this).data('eventid');
                _removeEvent(_year, _month, day, eventId);
                _render();
            });

            $('#myModal .add-event').click(function () {
                var day = $('#hidden-event-day').val();
                addNewEvent(day);

                var modal = $('#myModal').modal('hide');
            });

            $(panelSelector + '.save-events').click(function () {
                _saveEvents();
                alert('events saved');
            });

            $(panelSelector + '.clear-events').click(function () {
                _clearEvents();
                _render();
            });
        };

        var _createEventList = function () {
            $(_selector).append('<div class="event-container container"></div>');
        };

        var _bindEventListEvents = function () {
            $('.event-container').on('click', '.remove-event', function () {
                var eventId = $(this).data('id');
                var events = _allEvents.filter(function (el) {
                    if (el.eventId == eventId) {
                        return el;
                    };
                });

                if (events.length > 0) {
                    var event = events[0];

                    var container = event.container;

                    container.splice(1, event);
                    _allEvents.splice(1, event);
                    _render();
                }

                return false;
            });
        };

        /**
          * Validates and creates objects and array containers
          * for specific year, month and day
          */
        var _initializeEventContainer = function (container, year, month, day) {
            var s = _getStringifiedDate(year, month, day);
            year = s.year;
            month = s.month;
            day = s.day;

            if (container == undefined || !container instanceof Object) {
                container = new CalendarEvents();
            }
            if (container[year] == undefined) {
                container[year] = {};
            }
            if (container[year][month] == undefined) {
                container[year][month] = {};
            }
            if (container[year][month][day] == undefined) {
                container[year][month][day] = [];
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

            var event = {
                eventId: eventId,
                person: person,
                eventName: eventName,
                color: color,
                unsaved: true,
                year: year,
                month: month,
                day: day,
            };

            _initializeEventContainer(_events, year, month, day);

            _events[year][month][day].push(event);
            _unsavedEvents.push(event);

            event.container = _events[year][month][day];
            _allEvents.push(event);
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

        var _getEventsForMonth = function (year, month) {
            var events = [];

            if (_events instanceof Object &&
                _events[year] != undefined &&
                _events[year][month] != undefined) {

                for (var day in _events[year][month]) {
                    var ev = _events[year][month][day];

                    for (var i = 0; i < ev.length; i++)
                    {
                        events.push(ev[i]);
                    }
                }

                return events;
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
                    date_string: _formatDate(year, month, dayValue),
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
        var _render = function (year, month, elementsArr) {
            if (year != undefined && month != undefined) {
                _setYearAndMonth(year, month);
            }

            if (elementsArr == undefined) {
                elementsArr = [ 'calendar', 'events']
            }

            _renderCalendar();
            _renderEventList();
            if (elementsArr.indexOf('calendar') != -1) {
            }
            if (elementsArr.indexOf('events') - 1) {
            }

        };

        var _renderCalendar = function () {
            var container = $(_calendarContainer);

            var currentString = _year;

            if (_month < 9) {
                currentString += " 0" + (_month + 1);
            } else {
                currentString += " " + (_month + 1);
            }

            var eventData = _getDataForMonthAndYear(_year, _month);

            var data = {
                current_year_month: currentString,
                weekdays: _getWeekDays(),
                weeks: eventData,
            };
            var calendarHtml = _templates.calendar(data);
            container.html(calendarHtml);
        };

        var _renderEventList = function () {
            if (_showEventList) {
                var evData = _getEventsForMonth(_year, _month);

                var eventListHtml = _templates.events(evData);

                if (evData.length > 0) {
                    $(_selector + ' .event-container').html(eventListHtml);
                } else {
                    $(_selector + ' .event-container').html('');
                }
            }
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

        var _formatDate = function (year, month, day) {
            if (month < 10) month = "0" + month;
            if (day < 10) day = "0" + day;

            return year + '-' + month + '-' + day;
        };

        var _saveEvents = function () {
            if (_persistenceModule != undefined) {
                _persistenceModule.saveAll();
            }
        };

        var _clearEvents = function () {
            _events = new CalendarEvents();
            _unsavedEvents = new CalendarEvents();
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
            saveEvents: _saveEvents,
            clearEvents: _clearEvents,
        };
    };
    
    // Expose calendar function to environment
    env.Calendar = calendar;
})(window);