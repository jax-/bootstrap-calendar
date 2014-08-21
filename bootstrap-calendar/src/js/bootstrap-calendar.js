
(function (env) {
    var calendar = function (options) {
        /**********************
         * Resources
         */
        var _resources = {
            CALENDAR: 'Calendar',
            MODAL_TITLE_ADD: 'Adding event for date',
            MODAL_TITLE_EDIT: 'Editing event for date',
            MODAL_BODY: 'Please enter attendee\'s and event\'s name:',
            PERSON_NAME: "Attendee",
            EVENT_NAME: "Event",
            ADD_EVENT: 'Add event',
            EDIT_EVENT: 'Edit event',
            REMOVE_EVENT: 'Remove event',
            CLOSE: 'Close',
            ADD: 'Add',
            EDIT: 'Edit',
            PREVIOUS_YEAR: 'Previous year',
            AUTOSAVE: 'Autosave',
            NEXT_YEAR: 'Next year',
            PREVIOUS_MONTH: 'Previous month',
            NEXT_MONTH: 'Next month',
            SAVE_EVENTS: 'Save events',
            CLEAR_EVENTS: 'Clear events',
            REMOVE: 'Remove',
            TIME_FROM: 'Time from',
            TIME_TO: 'Time to',
            DATE: 'Date',
            TIME: 'Time',
            ACTIONS: 'Actions',
            HEADER_EVENT_NAME: 'Event name',
            HEADER_PERSON_NAME: 'Person name',
            ID: 'Id',
            EVENT_LIST: 'Event list',
            EVENTS_SAVED: 'Events saved',
            EVENT_SAVE_ERROR: 'There was an error while trying to save events',
        };

        var _weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        var _monthStrings = {
            1: 'January',
            2: 'February',
            3: 'March',
            4: 'April',
            5: 'May',
            6: 'June',
            7: 'July',
            8: 'August',
            9: 'September',
            10: 'October',
            11: 'November',
            12: 'December',
        };
        /* ~ Resources
         *****************/

        // Configuration
        var _selector = null;
        var _debug = false;
        var _syncType = 'localStorage';
        var _syncModule = undefined;
        var _year = null;
        var _month = null;
        var _doRender = true;
        var _templates = undefined;
        var _panelPosition = 'top';
        var _calendarContainer = '';
        var _showEventList = true;
        var _modalSelector = '#calendarEventModal';
        var _autosave = false;
        var _useIcons = true;
        var _navAltVersion = false;
        var _tabbedEventList = false;

        // Filters
        var _filterByMonth = true;

        /**********************************************
         * LocalStorage synchronization module
         */
        var LocalStorageSync = function () {
            if (localStorage == undefined) {
                return;
            }

            this.saveAllEvents = function () {
                if (_allEvents instanceof Object) {
                    var copyArr = [];
                    for (var i = 0; i < _allEvents.length; i++) {
                        var ev = _allEvents[i];
                        var copy = {};
                        jQuery.extend(copy, ev);
                        copy.container = undefined;
                        copyArr.push(copy);
                    }

                    var s = JSON.stringify(copyArr);
                    localStorage.setItem('events', s);
                } else {
                    localStorage.removeItem('events');
                }
            };

            this.readAllEvents = function () {
                var temp = localStorage.getItem('events');
                try {
                    if (temp == undefined || temp == undefined) {
                        throw new Error('temp is undefined');
                    }

                    var tempEvents = JSON.parse(temp);

                    for (var i = 0; i < tempEvents.length; i++) {
                        var ev = tempEvents[i];
                        _pushEvent(ev, false);
                    }
                }
                catch (err) {
                    _allEvents = new CalendarEvents();
                }
            };

            this.clearAllEvents = function () {
                _allEvents = new CalendarEvents();
                localStorage.removeItem('events');
            };

            return this;
        };
        /* ~ LocalStorage synchronization module
         *********************************************/

        /******************************************
         * Remote (AJAX) synchronization module
         */
        var RemoteSync = function () {
            var state = 'ready';
            $('.calendar-loader').hide();

            var changeState = function (s) {
                state = s;
                switch (s) {
                    case 'load':
                        $('.calendar-loader').fadeIn(250); //todo
                        break;
                    case 'idle':
                    case 'ready':
                        $('.calendar-loader').fadeOut(500);
                        break;
                }
            }

            this.urls = {
                getAllEvents: '',
            };

            this.setUrls = function (urls) {
                this.urls = urls;
            };
            this.getUrls = function () {
                return this.urls;
            };

            var setUnsaved = function (collection) {
                for (var i = 0; i < collection.length; i++) {
                    var el = collection[i];
                    el.unsaved = false;
                }
            }

            this.saveData = function () {
                var data = {
                    eventsToAdd: _eventsToSave,
                    eventsToRemove: _eventsToRemove,
                    eventsToEdit: _eventsToEdit,
                };

                var dataToSend = JSON.stringify(data);
                changeState('load');
                
                $.ajax({
                    type: 'POST',
                    url: this.urls.saveData,
                    contentType: 'application/json',
                    data: dataToSend,
                    success: function (dt) {
                        console.log('saved');
                        _showAlert(_resources.EVENTS_SAVED, 'success');

                        setUnsaved(_eventsToEdit);
                        setUnsaved(_eventsToSave);

                        _clearEvents(false);
                        _renderEventList();
                    },
                    error: function (err) {
                        _showAlert(_resources.EVENT_SAVE_ERROR, 'danger');
                        console.log(err);
                    },
                    complete: function () {
                        changeState('idle');
                    },
                });
            };

            this.saveAllEvents = function () {
                this.saveData();
            };

            this.readAllPeople = function (async, callback) {
                if (async == undefined) {
                    async = false;
                }

                if (this.urls.getPeople == undefined) return;

                changeState('load');
                $.ajax({
                    type: 'GET',
                    url: this.urls.getPeople,
                    success: function (data) {
                        _setPeople(data);
                    },
                    complete: function () {
                        changeState('idle');
                    },
                })
            };

            this.readAllEvents = function (async, callback) {
                if (async == undefined) {
                    async = false;
                }

                changeState('load');
                $.ajax({
                    type: 'GET',
                    url: this.urls.getEvents,
                    success: function (data) {
                        if (data != undefined && data != null) {
                            for (var i = 0; i < data.length; i++) {
                                var event = data[i];

                                event.month -= 1; //?

                                _pushEvent(event, false);
                            }
                        }

                        if (async && callback != undefined) {
                            callback();
                        }
                        _render();
                    },
                    error: function (err) {
                        console.log(err);
                    },
                    complete: function () {
                        changeState('idle');
                    },
                });
            };

            this.clearAllEvents = function () {
                console.log('This function is not supported');
            };


            return this;
        }
        /* ~ Remote (AJAX) synchronization module
         **********************************************/

        /********************************
         * Event and people containers
         */
        var CalendarEvents = function () {
            return new Array();
        };

        // Events to-be-saved
        var _eventsToSave = [];

        // Events to-be-removed
        var _eventsToRemove = [];

        // Events to-be-edited
        var _eventsToEdit = [];

        // Contains references to all events
        var _allEvents = [];

        // People to be accessed in modal select
        var _people = [];

        /* ~ Event and people containers
        *******************************/

        /*******************************
         * Helper functions 
         */
        var _formatDate2 = function (year, month, day) {
            var tempMonth = month + 1;
            if (tempMonth < 10) {
                tempMonth = "0" + tempMonth;
            }

            if (day == undefined) {
                if (year != undefined && month != undefined) {
                    return year + ' - ' + tempMonth;
                }
            } else {
                if (day < 10) {
                    day = "0" + day;
                }
                return year + '-' + tempMonth + '-' + day;
            }

            return '';
        };

        var _formatMonthYearFriendly = function (year, month) {
            return _monthToString(month, true) + ' ' + year;
        }

        var _formatEventName = function (eventName) {
            if (eventName.length > 20) {
                return eventName.substring(0, 18) + '...';
            } else {
                return eventName;
            }
        }

        var _monthToString = function (number, inc) {
            if (inc) {
                number++;
            }

            var numberString = String(number);

            return _monthStrings[numberString];
        };

        /**
          * Returns string with random hexadecimal color value
          * e.g. #A3BC90
          */
        var hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        var _getRandomColor = function () {
            var str = '#';

            for (var i = 0; i < 6; i++) {
                var ran = Math.round(Math.random() * (hexValues.length - 1));
                str += hexValues[ran];
            };

            return str;
        };

        var _formatDate = function (year, month, day) {
            month += 1;

            if (month < 10) month = "0" + month;
            if (day < 10) day = "0" + day;

            return year + '-' + month + '-' + day;
        };

        /* ~ Helper functions
        **************************************/

        var _initializeTemplating = function () {
            _templates = CalendarTemplates;

            Handlebars.registerPartial('selectPartial', _templates.selectPartial);

            Handlebars.registerHelper('formatDate', _formatDate2);
            Handlebars.registerHelper('formatEventName', _formatEventName);
        };

        /**
         * Initializes calendar object
         * @constructor
         */
        var _init = function () {
            _initializeTemplating();

            var o = options;

            // Dependency check
            var error = 'Calendar cannot be initialized. Dependency required: ';

            if (env.Handlebars == undefined) {
                throw new Error(error + 'Handlebars.js');
            }
            if (env.jQuery == undefined) {
                throw new Error(error + 'jQuery.js');
            }

            var async = false;

            /****************************************************
             * Configuration check and initialization
             */
            if (typeof o == 'string') {
                _selector = o;
            }
            else if (typeof o == 'object') {
                _selector = o.selector;
                if (o.debug != undefined) {
                    _debug = o.debug;
                }

                // Initialize sync module
                if (o.sync != undefined) {

                    var urls = {};
                    if (typeof o.sync == 'string') {
                        _syncType = o.sync;
                    }
                    else if (typeof o.sync == 'object') {
                        if (o.sync.type != undefined &&
                            typeof (o.sync.type == 'string')) {
                            _syncType = o.sync.type;
                        }

                        urls.getEvents = o.sync.getEvents;
                        urls.saveData = o.sync.saveData;
                        urls.getPeople = o.sync.getPeople;
                    }

                    if (_syncType != 'localStorage' &&
                        _syncType != 'remote') {
                        throw new Error('Invalid sync type');
                    }

                    switch (_syncType) {
                        case 'localStorage':
                            _syncModule = new LocalStorageSync();
                            break;
                        case 'remote':
                            _syncModule = new RemoteSync();
                            _syncModule.setUrls(urls);

                            _syncModule.readAllPeople();

                            async = true;
                            break;
                        default:
                            _syncModule = undefined;
                            break;
                    }

                    if (_syncModule.readAllEvents != undefined) {
                        _syncModule.readAllEvents(async);
                    }
                }

                // Event list
                if (o.showEventList != undefined) {
                    if (o.showEventList == true ||
                        o.showEventList == false) {
                        _showEventList = o.showEventList;
                    }
                }

                var _booleanOrFalse = function (source) {
                    if (source == undefined || typeof source != 'boolean')
                        source = false;

                    return source;
                }

                _autosave = _booleanOrFalse(o.autosave);
                _navAltVersion = _booleanOrFalse(o.navAltVersion);
                _tabbedEventList = _booleanOrFalse(o.tabbedEventList);
            }
            else {
                throw new Error('Invalid options');
            }

            if (_selector == undefined || _selector == null) {
                throw new Error('Invalid selector');
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
            _createModal();

            _createPanel(_panelPosition);
            _addPanelEvents();

            _bindEventListEvents();

            // Render
            if (o.render != undefined) {
                _doRender = o.render;
            }

            if (_doRender) {
                _render();
            }
        };

        /****************************************
         * Functions used to prepare DOM containers and event listeners
         */
        var _createContainer = function() {
            var data = {
                RESOURCES: _resources,
                tabbedEventList: _tabbedEventList,
            }
            var html = _templates.calendarContainer(data);

            $(_selector).append(html);
            _calendarContainer = '.calendar-container';
        };

        var _createModal = function () {
            var data = {
                add: true,
                RESOURCES: _resources,
                enable_dropdown: true,
                people: _people,
            };
            var html = _templates.eventModal(data);

            $('body').append(html);
        };

        var _createPanel = function (position) {
            var currentString = _year + ' - ' + (_month + 1);
            var data = {
                currentYearMonth: currentString,
                useIcons: _useIcons,
                autosave: _autosave,
                RESOURCES: _resources,
            };
            var html = _templates.navpanel(data);

            if (position == 'bottom') {
                $(_selector + ' .calendar-panel-bottom').html(html);
            } else {
                $(_selector + ' .calendar-panel-top').html(html);
            }
        };

        var _isAutosave = function () {
            // If autosave was explicitly set to true then don't take autosave checkbox value
            if (_autosave) {
                return true;
            }
            else {
                var checkBox = $('.calendar-panel .event-autosave');

                if (checkBox != undefined && checkBox.length > 0) {
                    return checkBox[0].checked;
                }

                return false;
            }
        };

        var _loadEventToModal = function (modal, event) {
            var dateStr = _formatDate(event.year, event.month, event.day);
            modal.find('.modalTitleDate').html(dateStr);
            modal.find('.eventDay').val(event.day);
            modal.find('.eventId').val(event.eventId);

            modal.find('.person').val(event.personId);

            modal.find('.timeFrom').val(event.timeFrom);
            modal.find('.timeTo').val(event.timeTo);

            var inputName = modal.find('.eventName');
            inputName.attr('value', event.eventName);

        };

        var _setModalState = function (modal, type) {
            var addBtn = modal.find('.add-event');
            var editBtn = modal.find('.edit-event');

            addBtn.hide();
            editBtn.hide();

            if (type == 'edit') {
                editBtn.show();
            } else {
                addBtn.show();
            }
        }

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
                var modal = $(_modalSelector);

                var personInput = modal.find('.person');
                var eventInput = modal.find('.eventName');
                var personId = personInput.val();
                var personName = modal.find('.person option:selected').text();

                var timeFrom = modal.find('.timeFrom');
                var timeTo = modal.find('.timeTo');

                var event = eventInput.val();

                if (event != undefined && event != '') {
                    _addEvent(_year, _month, day, personId, personName, event, undefined, timeFrom.val(), timeTo.val());
                    _render();

                    // clear
                    personInput.val('');
                    eventInput.val('');

                    return true;
                }

                return false;
            };

            var editEvent = function (modal, event) {
                event.eventId = modal.find('.eventId').val();
                event.personId = modal.find('.person').val();
                event.personName = modal.find('.person option:selected').text();
                event.timeFrom = modal.find('.timeFrom').val();
                event.timeTo = modal.find('.timeTo').val();
                event.eventName = modal.find('.eventName').val();
                event.unsaved = true;
                _eventsToEdit.push(event);

                if (_isAutosave()) {
                    _saveEvents();
                }
                return true;
            };

            // Bind event add
            $(_selector).on('click', '.panel-add-event', function () {
                var modal = $(_modalSelector);
                var selectedDay = $(_selector).find('.week-day-div.selected');
                if (selectedDay.length > 0) {
                    var day = $(selectedDay).parent().data('day');
                    var dateStr = _year + '-' + _month + '-' + day;

                    var dd1 = modal.find('.modalTitleDate');
                    dd1.html(dateStr);
                    var dd2 = modal.find('.eventDay');
                    dd2.val(day);

                    _setModalState(modal, 'add');
                    modal.modal('show');
                }
            });

            // Bind event edit
            $(_selector).on('click', '.panel-edit-event', function () {
                var modal = $(_modalSelector);
                var selectedEvent = $(_selector).find('.event.selected');
                if (selectedEvent.length > 0) {
                    var day = $(selectedEvent).data('day');
                    var eventId = $(selectedEvent).data('eventid');

                    var event = _getEventById(eventId);

                    if (event != null) {
                        _loadEventToModal(modal, event);

                        _setModalState(modal, 'edit');
                        modal.modal('show');
                    }
                }
            });

            // Bind event remove
            $(_selector).on('click', '.panel-remove-event', function () {
                var selectedEvent = $(_selector).find('.event.selected');
                if (selectedEvent.length > 0) {
                    var day = $(selectedEvent).data('day');
                    var eventId = $(selectedEvent).data('eventid');
                    if (eventId != undefined) {
                        _removeEvent(eventId);
                        _render();
                    }
                }
            });

            // On day select
            $(_selector).on('click', '.week-day-div', function (e) {
                var isSelected = $(this).hasClass('selected');

                if (isSelected) {
                    _setEventAddEditState('none');
                } else {
                    _setEventAddEditState('add');
                    $(this).addClass('selected');
                }
            });

            // On event select
            $(_selector).on('click', '.event', function (e) {
                e.stopPropagation();

                var isSelected = $(this).hasClass('selected');

                if (isSelected) {
                    _setEventAddEditState('none');
                } else {
                    _setEventAddEditState('edit');
                    $(this).addClass('selected');
                }
            });

            $(_modalSelector + ' .add-event').click(function () {
                var day = $(_modalSelector + ' .eventDay').val();

                var result = addNewEvent(day);

                if (result) {
                    var modal = $(_modalSelector);
                    modal.modal('hide');
                    _setEventAddEditState('none');
                }
            });

            $(_modalSelector + ' .edit-event').click(function () {
                var modal = $(_modalSelector);
                var eventId = modal.find('.eventId').val();
                var event = _getEventById(eventId);

                if (event != null) {
                    var result = editEvent(modal, event);

                    if (result) {
                        modal.modal('hide');
                        _setEventAddEditState('none');
                        _render();
                    }
                }
            });
            
            $(panelSelector + '.save-events').click(function () {
                _saveEvents();
            });

            $(panelSelector + '.clear-events').click(function () {
                _clearEvents(true);
                _render();
            });

            $(panelSelector + '.reload-events').click(function () {
                _clearEvents(true);
                _syncModule.readAll(true, function () {
                    _render();
                });
            });

            $(panelSelector + '.load-people').click(function () {
                if (_syncModule.readAllPeople != undefined) {
                    _syncModule.readAllPeople(true);
                }
            });
        };

        var _setEventAddEditState = function (type) { // type: 'add' or 'edit' or none (deselect)
            var addEventButton = $(_selector + ' ' + '.btn.panel-add-event');
            var editEventButton = $(_selector + ' ' + '.btn.panel-edit-event');
            var removeEventButton = $(_selector + ' .btn.panel-remove-event')

            addEventButton.hide();
            editEventButton.hide();
            removeEventButton.hide();

            // Deselect all events & days
            $(_selector + ' ' + '.event').removeClass('selected');
            $(_selector + ' ' + '.week-day-div').removeClass('selected');

            if (type == 'add') {
                addEventButton.show();
            }
            else if (type == 'edit') {
                editEventButton.show();
                removeEventButton.show();
            }
        }

        var _bindEventListEvents = function () {
            $('.event-container').on('click', '.edit-event2', function () {
                var eventId = $(this).data('eventid');

                var event = _getEventById(eventId);
                var modal = $('#calendarEventModal');
                if (event != null) {
                    _loadEventToModal(modal, event);

                    _setModalState(modal, 'edit');
                    modal.modal('show');
                }

                return false;
            });

            $('.event-container').on('click', '.remove-event2', function () {
                var eventId = $(this).data('eventid');

                if (eventId != undefined) {
                    _removeEvent(eventId);
                    _render();
                }

                return false;
            });
        };
        /* ~ Functions used to prepare DOM containers and event listeners
        /**************************************************/

        /***********************************************
         * Event manipulation functions (push, get, remove, save, clear)
         */

        //  Adds new event for specific date with specific values as argument
        var _addEvent = function (year, month, day, personId, personName, eventName, color, timeFrom, timeTo, eventId) {
            if (color == undefined) {
                color = _getRandomColor();
            }
            if (eventId == undefined) {
                eventId = 't_' + new Date().getTime();
            }

            var event = {
                eventId: eventId,
                personId: personId,
                personName: personName,
                eventName: eventName,
                color: color,
                unsaved: true,
                year: year,
                month: month,
                day: day,
                timeFrom: timeFrom,
                timeTo: timeTo,
            };

            _pushEvent(event, true);

            if (_isAutosave()) {
                _saveEvents();
            }
        }

        /**
          * Adds new event with event object and date as arguments
          */
        var _pushEvent = function (event, unsaved) {
            if (unsaved == undefined) unsaved = false;

            if (typeof event == 'object') {

                if (unsaved) {
                    event.unsaved = true;
                    _eventsToSave.push(event);
                }   

                _allEvents.push(event);
            }
        }

        var _getEventById = function(id) {
            for (var i = 0; i < _allEvents.length; i++) {
                var ev = _allEvents[i];

                if (ev.eventId == id) {
                    return ev;
                }
            }

            return null;
        }

        var _removeEvent = function (eventId) {
            // Find event
            var event = null;
            for (var i = 0; i < _allEvents.length; i++) {
                if (_allEvents[i].eventId == eventId) {
                    event = _allEvents[i];
                    break;
                }
            }

            // Remove from all events
            if (event != null) {
                var indexInAllEvents = _allEvents.indexOf(event);
                
                if (indexInAllEvents != -1) {
                    _eventsToRemove.push(event);
                    _allEvents.splice(indexInAllEvents, 1);
                }
                
            } else {
                // throw error
            }

            if (_isAutosave()) {
                _saveEvents();
            }
        }

        var _saveEvents = function () {
            if (_syncModule != undefined) {
                _syncModule.saveAllEvents();
            }
        };

        var _clearEvents = function (all) {
            if (all == undefined) all = true;

            if (all) {
                _allEvents = new CalendarEvents();
            }
            _eventsToSave = new CalendarEvents();
            _eventsToRemove = new CalendarEvents();
            _eventsToEdit = new CalendarEvents();
        };

        /**
          * Returns array of events for specific date
          * based on global calendar event array
          */
        var _getEventsForDate = function (year, month, day) {
            var events = [];

            for (var i = 0; i < _allEvents.length; i++) {
                var ev = _allEvents[i];

                if (ev.year == year &&
                    ev.month == month &&
                    ev.day == day) {
                    events.push(ev);
                }
            }

            return events;
        };

        var _getEventsForMonth = function (year, month) {
            var events = [];

            for (var i = 0; i < _allEvents.length; i++) {
                var ev = _allEvents[i];

                if (ev.year == year &&
                    ev.month == month) {
                    events.push(ev);
                }
            }

            return events;
        };

        /* ~ Event manipulation functions (push, get, remove, save, clear)
         **********************************************/

        /**
         * Generates data for specific year and month and attaches events to days
         */
        var _getDataForMonthAndYear = function (year, month) {
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            var currentMonth = currentDate.getMonth();
            var currentDay = currentDate.getDate();

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

                // Check if is current date
                if (year == currentYear &&
                    month == currentMonth &&
                    dayValue == currentDay) {
                    day.current = true;
                }
                
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

        /*****************************************
         * Element rendering functions
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

            // Update label
            var currentYearMonth = _formatMonthYearFriendly(_year, _month);
            $('.calendar-panel .currentYearMonth').html(currentYearMonth);

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
                weekdays: _weekDays,
                weeks: eventData,
            };
            var calendarHtml = _templates.calendar(data);
            container.html(calendarHtml);
        };

        var _renderEventList = function () {
            if (_showEventList) {

                var evData = null;
                if (_filterByMonth) {
                    evData = _getEventsForMonth(_year, _month);
                } else {
                    evData = _allEvents;
                }

                var data = {
                    events: evData,
                    useIcons: _useIcons,
                    showId: false,
                    RESOURCES: _resources,
                };

                var eventListHtml = _templates.events(data);

                if (evData.length > 0) {
                    $(_selector + ' .event-container').html(eventListHtml);
                } else {
                    $(_selector + ' .event-container').html('');
                }
            }
        };
        /* ~ Element rendering functions
         ***********************************/

        // Creates and shows alert element with message
        var _showAlert = function (message, type) {
            if (type == undefined) {
                type = 'success';
            }

            var data = {
                alertType: type,
                alertMessage: message,
            }

            var html = _templates.alert(data);

            $(_selector + ' .calendar-alertarea').html(html);
        };

        /****************************************
         * Functions used to load external data
         */
        var _loadWeekDays = function (weekDays) {
            if (weekDays.length != 7) {
                throw new Error('Array should have 7 elements')
            } else {
                _weekDays = weekDays;
            }
        };

        var _loadMonthStrings = function (monthStrings) {
            if (Object.keys(monthStrings).length != 12) {
                throw new Error('Object should have 12 elements');
            } else {
                _monthStrings = monthStrings;
            }
        };

        var _setPeople = function (people) {
            _people = people;
            var data = {
                people: _people,
            };
            var template = _templates.selectPartial(data);

            $(_modalSelector + ' .person').replaceWith(template);
        }

        var _loadResources = function (resourceList, withRender) {
            if (resourceList != undefined && resourceList != null && typeof resourceList == 'Object') {
                for (var prop in resourceList) {
                    //if (typeof prop == 'String') {
                        _resources[prop] = resourceList[prop];
                    //}
                }
            }

            if (withRender) {
                _render();
            }
        };
        /* ~ Functions used to load external data
         ****************************************/

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
                return _allEvents;
            },
            saveEvents: _saveEvents,
            clearEvents: _clearEvents,
            loadWeekStrings: _loadWeekDays,
            loadMonthStrings: _loadMonthStrings,
            setPeople: _setPeople,
            loadResources: _loadResources,
        };
    };
    
    // Expose calendar function to environment
    env.Calendar = calendar;
})(window);