/**
 * @name Bootstrap Calendar
 * @author Jacek Zysk (jzysk)
 * @version 0.1.0
 * @date 2014-08-11
 */

this["CalendarTemplates"] = this["CalendarTemplates"] || {};

this["CalendarTemplates"]["alert"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"alert alert-";
  if (helper = helpers.alertType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.alertType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " alert-dismissible\" role=\"alert\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\r\n    ";
  if (helper = helpers.alertMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.alertMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n</div>";
  return buffer;
  });

this["CalendarTemplates"]["calendar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\r\n            <th>\r\n                "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\r\n            </th>\r\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <tr class=\"week\">\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.days), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </tr>\r\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <td class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.date_string), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-day=\"";
  if (helper = helpers.dayValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dayValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            <div class=\"week-day-div ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.current), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n                <ul style=\"list-style:none;\">\r\n                    <li><span class=\"date \">";
  if (helper = helpers.date_string) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date_string); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></li>\r\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.events), {hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </ul>\r\n            </div>\r\n        </td>\r\n        ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return " week-day ";
  }

function program7(depth0,data) {
  
  
  return " current ";
  }

function program9(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <li>\r\n                        <span class=\"event\" data-day=\""
    + escapeExpression(((stack1 = (depth1 && depth1.dayValue)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-eventid=\"";
  if (helper = helpers.eventId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"background-color:"
    + escapeExpression(((stack1 = (depth0 && depth0.color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n                            <span>"
    + escapeExpression(((stack1 = (depth0 && depth0.personName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " - "
    + escapeExpression(((stack1 = (depth0 && depth0.eventName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n                        </span>\r\n                    </li>\r\n                    ";
  return buffer;
  }

  buffer += "\r\n<table class=\"table calendar\">\r\n    <thead>\r\n        <tr>\r\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.weekdays), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tr>\r\n    </thead>\r\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.weeks), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</table>";
  return buffer;
  });

this["CalendarTemplates"]["calendarContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\r\n<div class=\"calendar-alertarea\"></div>\r\n<div class=\"calendar-container\"></div>\r\n<div class=\"event-container\"></div>\r\n\r\n<div class=\"calendar-loader\"></div> ";
  });

this["CalendarTemplates"]["eventModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\r\n                            <span>Select person:</span>\r\n                        ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            <span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.PERSON_NAME)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n                        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            ";
  stack1 = self.invokePartial(partials.selectPartial, 'selectPartial', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\r\n                            <input class=\"person form-control\">\r\n                        ";
  }

  buffer += "<div id=\"calendarEventModal\" class=\"modal fade\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.CLOSE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></button>\r\n                <h4 class=\"modal-title\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.MODAL_TITLE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span class=\"modalTitleDate\"></span></h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.MODAL_BODY)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n\r\n                <div class=\"row row-mar\">\r\n                    <div class=\"col-md-5 col-lg-5\">\r\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.enable_dropdown), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    </div>\r\n                    <div class=\"col-md-7 col-lg-7\">\r\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.enable_dropdown), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row row-mar\">\r\n                    <div class=\"col-md-5 col-lg-5\">\r\n                        <span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EVENT_NAME)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ":</span>\r\n                    </div>\r\n                    <div class=\"col-md-7 col-lg-7\">\r\n                        <input class=\"eventName form-control\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row row-mar\">\r\n                    <div class=\"col-md-5 col-lg-5\">\r\n                        Time from:\r\n                    </div>\r\n                    <div class=\"col-md-7 col-lg-7\">\r\n                        <input class=\"timeFrom form-control\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row row-mar\">\r\n                    <div class=\"col-md-5 col-lg-5\">\r\n                        Time to:\r\n                    </div>\r\n\r\n                    <div class=\"col-md-7 col-lg-7\">\r\n                        <input class=\"timeTo form-control\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <input type=\"hidden\" class=\"eventId\" />\r\n                <input type=\"hidden\" class=\"eventDay\" />\r\n\r\n                <div style=\"clear:both\"></div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary add-event\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.ADD)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n                <button type=\"button\" class=\"btn btn-primary edit-event\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EDIT)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.CLOSE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n            </div>\r\n        </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->";
  return buffer;
  });

this["CalendarTemplates"]["events"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <tr class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.unsaved), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" >\r\n                <td>\r\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </td>\r\n                <td>\r\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.year)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (depth0 && depth0.month)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (depth0 && depth0.day)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </td>\r\n                <td>\r\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.personName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </td>\r\n                <td>\r\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.eventName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </td>\r\n               <td>\r\n                   <a href=\"#\" class=\"edit-event2\" data-eventid=\""
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Edit</a>\r\n               </td>\r\n              <td>\r\n                  <a href=\"#\" class=\"remove-event2\" data-eventid=\""
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Remove</a>\r\n              </td>\r\n            </tr>\r\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "warning";
  }

  buffer += "<div class=\"event-list \">\r\n  <hr />\r\n    <h3>Event list</h3>\r\n    <table class=\"table  table-hover table-striped table-responsive\">\r\n        <thead>\r\n            <tr>\r\n                <th>\r\n                    Id\r\n                </th>\r\n                <th>\r\n                    Date\r\n                </th>\r\n                <th>\r\n                    Person name\r\n                </th>\r\n                <th>\r\n                    Event name\r\n                </th>\r\n                <th></th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tbody>\r\n    </table>\r\n</div>";
  return buffer;
  });

this["CalendarTemplates"]["panel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"calendar-panel text-center\">\r\n\r\n    <button class=\"btn btn-default panel-add-event\" style=\"display:none\">Add event</button>\r\n    <button class=\"btn btn-default panel-edit-event\" style=\"display:none\">Edit event</button>\r\n    <button class=\"btn btn-default panel-remove-event\" style=\"display:none\">Remove event</button>\r\n\r\n\r\n    <button class=\"btn btn-default save-events\">Save events</button>\r\n    <label for=\"event-autosave\">Autosave</label>\r\n    <input type=\"checkbox\" id=\"event-autosave\" class=\"event-autosave\" />\r\n\r\n    <br/>\r\n\r\n    <button class=\"btn btn-primary prev-year\">Previous year</button>\r\n    <button class=\"btn btn-primary prev-month\">Previous month</button>  \r\n\r\n    <h2 style=\"display:inline-block\">\r\n        <span class=\"label label-primary label-lg currentYearMonth\">";
  if (helper = helpers.currentYearMonth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.currentYearMonth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n    </h2>\r\n\r\n    <button class=\"btn btn-primary next-month\">Next month</button>\r\n    <button class=\"btn btn-primary next-year\">Next year</button>\r\n\r\n    <button class=\"btn btn-primary load-people\">Load people</button>\r\n</div>";
  return buffer;
  });

this["CalendarTemplates"]["selectPartial"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <option value=\"";
  if (helper = helpers.personId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.personId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.personName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.personName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\r\n    ";
  return buffer;
  }

  buffer += "<select class=\"person form-control\">\r\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.people), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</select>";
  return buffer;
  });

(function (env) {
    var calendar = function (options) {
        Array.prototype.insert = function (index, item) {
            this.splice(index, 0, item);
        };

        var _defaultResources = {
            MODAL_TITLE: 'Event modal',
            MODAL_BODY: 'Please insert attendee and event names',
            PERSON_NAME: "Attendee's name",
            EVENT_NAME: "Event's name",
            ADD_EVENT_TITLE: 'Add event',
            EDIT_EVENT_TITLE: 'Edit event',
            CLOSE: 'Close',
            ADD: 'Add',
            EDIT: 'Edit',
            PREVIOUS_YEAR: 'Previous year',
            NEXT_YEAR: 'Next year',
            PREVIOUS_MONTH: 'Previous month',
            NEXT_MONTH: 'Next month',
            AUTOSAVE: 'Autosave',
            SAVE_EVENTS: 'Save events',
            CLEAR_EVENTS: 'Clear events',
            REMOVE: 'Remove',
        };

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

        // Internal types
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

            this.saveData = function () {
                var data = {
                    eventsToAdd: _eventsToSave,
                    eventsToRemove: _eventsToRemove,
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
                        _showAlert("Events have been saved", 'success');

                        // todo
                        for (var i = 0; i < _eventsToSave.length; i++) {
                            var ev = _eventsToSave[i];
                            ev.unsaved = false;
                        }

                        _eventsToSave = [];
                        _eventsToRemove = [];

                        _renderEventList();
                    },
                    error: function (err) {
                        _showAlert("There was an error while trying to save events", 'danger');
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
                        var selectorToReplace = $('#calendarEventModal .person');

                        var dataForTemplate = {
                            people: data,
                        };

                        var template = _templates.selectPartial(dataForTemplate);
                        selectorToReplace.replaceWith(template);
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

        var CalendarEvents = function () {
            return new Array();
        };

        // Events to-be-saved
        var _eventsToSave = [];

        // Events to-be-removed
        var _eventsToRemove = [];

        // Contains references to all events
        var _allEvents = [];

        // People to be accessed in modal select
        var _people = [];

        var _formatDate2 = function (year, month, day) {
            var tempMonth = month + 1;
            if (day == undefined) {
                if (year != undefined && month != undefined) {
                    if (tempMonth < 10) {
                        tempMonth = "0" + tempMonth;
                    }

                    return year + ' - ' + tempMonth;
                }
            } else {
                return year + '-' + tempMonth + '-' + day;
            }

            return '';
        };

        var _initializeTemplating = function () {
            _templates = CalendarTemplates;

            Handlebars.registerPartial('selectPartial', _templates.selectPartial);

            Handlebars.registerHelper('formatDate', _formatDate2);
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

            // Options check
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
                            _addEvent(2014, i, j, 1, 'Jan Kowalski', 'Swimming', undefined, i * j * k);
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

        var _createContainer = function() {
            var html = _templates.calendarContainer();

            $(_selector).append(html);
            _calendarContainer = '.calendar-container';
        };

        var _createModal = function () {
            var data = {
                add: true,
                RESOURCES: _defaultResources,
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
            };

            var html = _templates.panel(data);

            if (position == 'bottom') {
                $(_calendarContainer).after(html);
            } else {
                $(_calendarContainer).before(html);
            }
        };

        var _isAutosave = function () {
            var checkBox = $('.calendar-panel .event-autosave');

            if (checkBox != undefined && checkBox.length > 0) {
                return checkBox[0].checked;
            }

            return false;
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
                var modal = $('#calendarEventModal');

                var personInput = modal.find('.person');
                var eventInput = modal.find('.eventName');
                var person = personInput.val();
                var event = eventInput.val();

                if (event != undefined && event != '') {
                    _addEvent(_year, _month, day, person, 'none', event);
                    _render();

                    // clear
                    personInput.val('');
                    eventInput.val('');

                    return true;
                }

                return false;
            };

            // Bind event add
            $(_selector).on('click', '.panel-add-event', function () {
                var modal = $('#calendarEventModal');
                var selectedDay = $(_selector).find('.week-day-div.selected');
                if (selectedDay.length > 0) {
                    var day = $(selectedDay).parent().data('day');
                    var dateStr = _year + '-' + _month + '-' + day;

                    var dd1 = modal.find('.modalTitleDate');
                    dd1.html(dateStr);
                    var dd2 = modal.find('.eventDay');
                    dd2.val(day);

                    modal.modal('show');
                }
            });

            // Bind event edit
            $(_selector).on('click', '.panel-edit-event', function () {
                var modal = $('#calendarEventModal');

                var selectedEvent = $(_selector).find('.event.selected');
                if (selectedEvent.length > 0) {
                    var day = $(selectedEvent).data('day');
                    var eventId = $(selectedEvent).data('eventid');

                    var dateStr = _year + '-' + _month + '-' + day;

                    modal.find('.modalTitleDate').html(dateStr);
                    modal.find('.eventDay').val(day);
                    modal.find('.eventId').val(eventId);
                    modal.modal('show');
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
                var addEventButton = $(_selector + ' ' + '.btn.panel-add-event');

                if (isSelected) {
                    $(this).removeClass('selected');
                    addEventButton.hide();
                } else {
                    // Deselect all
                    $(_selector + ' ' + '.week-day-div').removeClass('selected');
                    $(this).addClass('selected');
                    addEventButton.show();
                }
            });

            // On event select
            $(_selector).on('click', '.event', function (e) {
                e.stopPropagation();

                var isSelected = $(this).hasClass('selected');
                var editEventButton = $(_selector + ' ' + '.btn.panel-edit-event');
                var removeEventButton = $(_selector + ' .btn.panel-remove-event')

                if (isSelected) {
                    $(this).removeClass('selected');
                    editEventButton.hide();
                    removeEventButton.hide();
                } else {
                    // Deselect all
                    $(_selector + ' ' + '.event').removeClass('selected');
                    $(this).addClass('selected');
                    editEventButton.show();
                    removeEventButton.show();
                }
            });

            $('#calendarEventModal .add-event').click(function () {
                var day = $('#calendarEventModal .eventDay').val();

                var result = addNewEvent(day);

                if (result) {
                    var modal = $('#calendarEventModal');
                    modal.modal('hide');
                }
            });
            
            $(panelSelector + '.save-events').click(function () {
                _saveEvents();
            });

            $(panelSelector + '.clear-events').click(function () {
                _clearEvents();
                _render();
            });

            $(panelSelector + '.reload-events').click(function () {
                _clearEvents();
                _syncModule.readAll(true, function () {
                    _render();
                });
            });

            $(panelSelector + '.load-people').click(function () {
                debugger
                if (_syncModule.readAllPeople != undefined) {
                    _syncModule.readAllPeople(true);
                }
            });
        };

        var _bindEventListEvents = function () {
            $('.event-container').on('click', '.edit-event2', function () {
                var eventId = $(this).data('eventid');

                if (eventId != undefined) {
                    var modal = $('#calendarEventModal');

                    modal.find('.eventId').val(eventId);
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

        /**
          * Adds new event for specific date with specific values as argument
          */
        var _addEvent = function (year, month, day, personId, personName, eventName, color, eventId) {
            if (color == undefined) {
                color = _getRandomColor();
            }
            if (eventId == undefined) {
                eventId = new Date().getTime();
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

                // Check if is current date (can be optimized)
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

            // Update label
            var currentYearMonth = _formatDate2(_year, _month);
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

        var hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

        /**
          * Returns string with random hexadecimal color value
          * e.g. #A3BC90
          */
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

        var _saveEvents = function () {
            if (_syncModule != undefined) {
                _syncModule.saveAllEvents();
            }
        };

        var _clearEvents = function () {
            _allEvents = new CalendarEvents();
            _eventsToSave = new CalendarEvents();
            _eventsToRemove = new CalendarEvents();
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
                return _allEvents;
            },
            saveEvents: _saveEvents,
            clearEvents: _clearEvents,
        };
    };
    
    // Expose calendar function to environment
    env.Calendar = calendar;
})(window);