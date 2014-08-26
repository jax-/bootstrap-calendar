/**
 * @name Bootstrap Calendar
 * @author Jacek Zysk (jzysk)
 * @version 0.2.0
 * @date 2014-08-21
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
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\r\n            <th>\r\n                "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\r\n            </th>\r\n            ";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <tr class=\"week\">\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.days), {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </tr>\r\n    ";
  return buffer;
  }
function program4(depth0,data,depth2) {
  
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
  stack1 = helpers.each.call(depth0, (depth0 && depth0.events), {hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth0, depth2),data:data});
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

function program9(depth0,data,depth1,depth3) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <li>\r\n                        <span class=\"event "
    + escapeExpression((helper = helpers.computeTextColorClass || (depth0 && depth0.computeTextColorClass),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.color), options) : helperMissing.call(depth0, "computeTextColorClass", (depth0 && depth0.color), options)))
    + "\" data-day=\""
    + escapeExpression(((stack1 = (depth1 && depth1.dayValue)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-eventid=\"";
  if (helper = helpers.eventId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.eventId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"background-color:"
    + escapeExpression(((stack1 = (depth0 && depth0.color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ";\">\r\n                            <span> ("
    + escapeExpression((helper = helpers.formatTime || (depth0 && depth0.formatTime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.timeFrom), options) : helperMissing.call(depth0, "formatTime", (depth0 && depth0.timeFrom), options)))
    + " - "
    + escapeExpression((helper = helpers.formatTime || (depth0 && depth0.formatTime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.timeTo), options) : helperMissing.call(depth0, "formatTime", (depth0 && depth0.timeTo), options)))
    + ") <br /> ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth3 && depth3.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.hideAttendee), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += escapeExpression((helper = helpers.formatEventName || (depth0 && depth0.formatEventName),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.eventName), options) : helperMissing.call(depth0, "formatEventName", (depth0 && depth0.eventName), options)))
    + "</span>\r\n                        </span>\r\n                    </li>\r\n                    ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " "
    + escapeExpression(((stack1 = (depth0 && depth0.personName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " - ";
  return buffer;
  }

  buffer += "\r\n<table class=\"table calendar\">\r\n    <thead>\r\n        <tr>\r\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.weekdays), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tr>\r\n    </thead>\r\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.weeks), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</table>";
  return buffer;
  });

this["CalendarTemplates"]["calendarContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n<ul class=\"nav nav-tabs nav-calendar\">\r\n    <li class=\"active\"><a id=\"calendar-tab-btn\" href=\"#calendar-tab\" data-toggle=\"tab\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.CALENDAR)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\r\n    <li><a id=\"event-tab-btn\" href=\"#events-tab\" data-toggle=\"tab\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EVENT_LIST)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\r\n</ul>\r\n\r\n<div class=\"tab-content\">\r\n    <div class=\"tab-pane active\" id=\"calendar-tab\">\r\n        <div class=\"calendar-container\"></div>\r\n    </div>\r\n    <div class=\"tab-pane\" id=\"events-tab\">\r\n        <div class=\"event-container\"></div>\r\n    </div>\r\n</div>\r\n\r\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n<div class=\"calendar-container\"></div>\r\n<hr />\r\n<div class=\"event-container\"></div>\r\n";
  }

  buffer += "<div class=\"calendar-alertarea\"></div>\r\n<div class=\"calendar-panel calendar-panel-top\"></div>\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.tabbedEventList), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n<div class=\"calendar-panel calendar-panel-bottom\"></div>\r\n\r\n<div class=\"calendar-loader\"></div> ";
  return buffer;
  });

this["CalendarTemplates"]["eventList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <th>\r\n                    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.ID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </th>\r\n                ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <th>\r\n                    ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.HEADER_PERSON_NAME)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </th>\r\n                ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <th>\r\n                    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.ACTIONS)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </th>\r\n                ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\r\n                <th></th>\r\n                <th></th>\r\n                ";
  }

function program9(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            <tr class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.unsaved), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" >\r\n                <td>\r\n                    <div style=\"background-color: ";
  if (helper = helpers.color) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.color); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "; width:18px; height:18px;\"></div>\r\n                </td>\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.showId), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <td>\r\n                    "
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.year), (depth0 && depth0.month), (depth0 && depth0.day), options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.year), (depth0 && depth0.month), (depth0 && depth0.day), options)))
    + "\r\n                </td>\r\n                <td>\r\n                    "
    + escapeExpression((helper = helpers.formatTime || (depth0 && depth0.formatTime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.timeFrom), options) : helperMissing.call(depth0, "formatTime", (depth0 && depth0.timeFrom), options)))
    + " - "
    + escapeExpression((helper = helpers.formatTime || (depth0 && depth0.formatTime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.timeTo), options) : helperMissing.call(depth0, "formatTime", (depth0 && depth0.timeTo), options)))
    + "\r\n                </td>                \r\n                ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth1 && depth1.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.hideAttendee), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <td>\r\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.eventName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </td>\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth1 && depth1.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.useIcons), {hash:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </tr>\r\n            ";
  return buffer;
  }
function program10(depth0,data) {
  
  
  return "warning";
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <td>\r\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </td>\r\n                ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <td>\r\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.personName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </td>            \r\n                ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <td>\r\n                    <a href=\"#\" class=\"edit-event2\" data-eventid=\""
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\r\n                    <a href=\"#\" class=\"remove-event2\" data-eventid=\""
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"glyphicon glyphicon-remove\"></span></a>\r\n                </td>\r\n                ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <td>\r\n                    <a href=\"#\" class=\"edit-event2\" data-eventid=\""
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EDIT)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n                </td>\r\n                <td>\r\n                    <a href=\"#\" class=\"remove-event2\" data-eventid=\""
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.REMOVE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n                </td>\r\n                ";
  return buffer;
  }

  buffer += "<div class=\"event-list\">\r\n    <h3>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EVENT_LIST)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\r\n    <table class=\"table  table-hover table-striped table-responsive\">\r\n        <thead>\r\n            <tr>\r\n                <th>#</th>\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.showId), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <th>\r\n                    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.DATE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </th>\r\n                <th>\r\n                    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.TIME)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </th>\r\n                ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.hideAttendee), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <th>\r\n                    ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.HEADER_EVENT_NAME)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </th>\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.useIcons), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.events), {hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tbody>\r\n    </table>\r\n</div>";
  return buffer;
  });

this["CalendarTemplates"]["eventModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <div class=\"row row-mar\">\r\n                    <div class=\"col-md-5 col-lg-5\">\r\n                        <b>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.PERSON_NAME)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ":</b>\r\n                    </div>\r\n                    <div class=\"col-md-7 col-lg-7\">\r\n                        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.enable_dropdown), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    </div>\r\n                </div>\r\n                ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            ";
  stack1 = self.invokePartial(partials.selectPartial, 'selectPartial', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\r\n                            <input class=\"personId form-control\"> \r\n                        ";
  }

  buffer += "<div id=\"calendarEventModal\" class=\"modal fade\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.CLOSE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></button>\r\n                <h4 class=\"modal-title\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.MODAL_TITLE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span class=\"modalTitleDate\"></span></h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.MODAL_BODY)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n\r\n                ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.hideAttendee), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                <div class=\"row row-mar\">\r\n                    <div class=\"col-md-5 col-lg-5\">\r\n                        <b>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EVENT_NAME)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ":</b>\r\n                    </div>  \r\n                    <div class=\"col-md-7 col-lg-7\">\r\n                        <textarea maxlength=\"500\" rows=\"4\" class=\"eventName form-control\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row row-mar\">\r\n                    <div class=\"col-md-5 col-lg-5\">\r\n                        <b>\r\n                            "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.TIME_FROM)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ":\r\n                        </b>    \r\n                    </div>\r\n                    <div class=\"col-md-7 col-lg-7\">\r\n                        <input type=\"range\" class=\"timeFrom\" name=\"timeFrom\"  min=\"0\" max=\"";
  if (helper = helpers.timeMaxValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.timeMaxValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"";
  if (helper = helpers.timeFromDefault) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.timeFromDefault); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                        <div class=\"timeFrom-output\"></div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row row-mar\">\r\n                    <div class=\"col-md-5 col-lg-5\">\r\n                        <b>\r\n                            "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.TIME_TO)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ":\r\n                        </b>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-7 col-lg-7\">\r\n                        <input type=\"range\" class=\"timeTo\" name=\"timeTo\" min=\"0\" max=\"";
  if (helper = helpers.timeMaxValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.timeMaxValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"";
  if (helper = helpers.timeToDefault) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.timeToDefault); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                        <div class=\"timeTo-output\"></div>\r\n                    </div>\r\n                </div>\r\n\r\n                <input type=\"hidden\" class=\"eventId\" />\r\n                <input type=\"hidden\" class=\"eventDay\" />\r\n\r\n                <div style=\"clear:both\"></div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary add-event\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.ADD)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n                <button type=\"button\" class=\"btn btn-primary edit-event\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EDIT)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.CLOSE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n            </div>\r\n        </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n";
  return buffer;
  });

this["CalendarTemplates"]["navpanel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "<span class=\"glyphicon glyphicon-plus\"></span>";
  }

function program3(depth0,data) {
  
  
  return "<span class=\"glyphicon glyphicon-pencil\"></span>";
  }

function program5(depth0,data) {
  
  
  return "<span class=\"glyphicon glyphicon-remove\"></span>";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <button class=\"btn btn-primary save-events\" style=\"margin-right:10px;\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.SAVE_EVENTS)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n        <label for=\"event-autosave\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.AUTOSAVE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label>\r\n        <input type=\"checkbox\" id=\"event-autosave\" class=\"event-autosave\" />\r\n        ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <button type=\"button\" class=\"btn btn-nav btn-default prev-year btn-lg\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.PREVIOUS_YEAR)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><<</button>\r\n        <button type=\"button\" class=\"btn btn-nav btn-default prev-month btn-lg\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.PREVIOUS_MONTH)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><</button>\r\n\r\n        <h2 style=\"display:inline-block; padding: 0 0; margin: 0 0;\">\r\n            <span class=\"label label-primary label-lg currentYearMonth\">";
  if (helper = helpers.currentYearMonth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.currentYearMonth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n        </h2>\r\n\r\n        <button type=\"button\" class=\"btn btn-nav btn-default next-month btn-lg\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.NEXT_MONTH)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">></button>\r\n        <button type=\"button\" class=\"btn btn-nav btn-default next-year btn-lg\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.NEXT_YEAR)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">>></button>\r\n        ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <ul class=\"pagination pagination\">\r\n            <li><a class=\"prev-year\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.PREVIOUS_YEAR)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"glyphicon glyphicon-fast-backward\"></span></a></li>\r\n            <li><a class=\"prev-month\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.PREVIOUS_MONTH)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"glyphicon glyphicon-backward\"></span></a></li>\r\n            <li class=\"disabled\"><span class=\"label label-date label-default currentYearMonth\">";
  if (helper = helpers.currentYearMonth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.currentYearMonth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></li>\r\n            <li><a class=\"next-month\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.NEXT_MONTH)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"glyphicon glyphicon-forward\"></span></a></li>\r\n            <li><a class=\"next-year\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.NEXT_YEAR)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"glyphicon glyphicon-fast-forward\"></span></a></li>\r\n        </ul>\r\n        ";
  return buffer;
  }

  buffer += "<div class=\"calendar-panel calendar-nav-panel \">\r\n    <div class=\"pull-left calendar-buttons\">\r\n        <button type=\"button\" class=\"btn btn-primary disabled panel-add-event\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.useIcons), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.ADD_EVENT)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n        <button type=\"button\" class=\"btn btn-primary disabled panel-edit-event\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.useIcons), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EDIT_EVENT)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n        <button type=\"button\" class=\"btn btn-primary disabled panel-remove-event\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.useIcons), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.REMOVE_EVENT)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n\r\n        ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.autosave), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n    <div class=\"pull-right calendar-navigation\">\r\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.navAltVersion), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n\r\n    <div style=\"clear:both;\"></div>\r\n</div>\r\n";
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

  buffer += "<select class=\"personId form-control\">\r\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.people), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</select>";
  return buffer;
  });

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
        var _modalSelector = '#calendarEventModal';
        var _usePerson = undefined;

        var CONFIG = {
            hideAttendee: false,
            useIcons: true,
            showId: false,
            autosave: false,
            navAltVersion: false,
            enable_dropdown: true,
            tabbedEventList: false,
            useNameInSelect: false,
            showEventList: true,
        };

        // Filters
        var _filterByMonth = false;

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
                    if (temp == undefined || temp == null) {
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
                        if (!CONFIG.autosave) {
                            _showAlert(_resources.EVENTS_SAVED, 'success');
                        }

                        setUnsaved(_eventsToEdit);
                        setUnsaved(_eventsToSave);

                        _clearEvents(false);
                        _renderEventList();
                    },
                    error: function (err) {
                        _showAlert(_resources.EVENT_SAVE_ERROR, 'danger');
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
        Array.prototype.contains = function(el) {
            if (this.indexOf(el) != -1) {
                return true;
            } else {
                return false;
            }
        }

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
            Handlebars.registerHelper('formatTime', _formatTime);
            Handlebars.registerHelper('computeTextColorClass', _computeTextColorClass);
        };

        var _computeTextColorClass = function (bg_color) {
            try {
                var hexToDec = function (num) {
                    if (num.length == 1) {
                        switch (num) {
                            case 'A':
                                return 10;
                            case 'B':
                                return 11;
                            case 'C':
                                return 12;
                            case 'D':
                                return 13;
                            case 'E':
                                return 14;
                            case 'F':
                                return 15;
                            default:
                                return parseInt(num);
                        }
                    } else {
                        return 0;
                    }
                }

                // todo: errors
                var r = hexToDec(bg_color[1]) * 16 + hexToDec(bg_color[2]) * 1;
                var g = hexToDec(bg_color[3]) * 16 + hexToDec(bg_color[4]) * 1;
                var b = hexToDec(bg_color[5]) * 16 + hexToDec(bg_color[6]) * 1;

                var sum = r + g + b;

                if (sum < 450) {
                    return 'light';
                } else {
                    return 'dark';
                }
            }
            catch (err) {
                return 'dark';
            }
        }

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

                // Load resources if available
                if (o.resources != undefined && typeof o.resourceList == 'object') {
                    _loadResources(o.resources, false);
                }

                // Use calendar for only one person
                if (typeof o.usePerson == 'object') {
                    _usePerson = o.usePerson;
                    CONFIG.hideAttendee = true;
                }

                // Event list
                if (o.showEventList != undefined) {
                    if (o.showEventList == true ||
                        o.showEventList == false) {
                        CONFIG.showEventList = o.showEventList;
                    }
                }

                var _booleanOrFalse = function (source) {
                    if (source == undefined || typeof source != 'boolean')
                        source = false;

                    return source;
                }

                CONFIG.autosave = _booleanOrFalse(o.autosave);
                CONFIG.navAltVersion = _booleanOrFalse(o.navAltVersion);
                CONFIG.tabbedEventList = _booleanOrFalse(o.tabbedEventList);
                CONFIG.useNameInSelect = _booleanOrFalse(o.useNameInSelect);
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
            _bindEventModalRange();

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
                CONFIG: CONFIG,
            }
            var html = _templates.calendarContainer(data);

            $(_selector).append(html);
            _calendarContainer = '.calendar-container';
        };

        var _createModal = function () {
            var data = {
                RESOURCES: _resources,
                people: _people,
                CONFIG: CONFIG,
            };

            data.add = true;
            data.timeFromDefault = _timeScale * 10;
            data.timeToDefault = _timeScale * 11;
            data.timeMaxValue = _timeScale * 24;

            var html = _templates.eventModal(data);

            $('body').append(html);
        };

        var _createPanel = function (position) {
            //var currentString = _year + ' - ' + (_month + 1);
            var currentYearMonth = _formatMonthYearFriendly(_year, _month);
            var data = {
                currentYearMonth: currentYearMonth,
                CONFIG: CONFIG,
                RESOURCES: _resources,
            };
            var html = _templates.navpanel(data);

            if (position == 'bottom') {
                $(_selector + ' .calendar-panel-bottom').html(html);
            } else {
                $(_selector + ' .calendar-panel-top').html(html);
            }

            // Initialize tooltips
            if ($.fn.tooltip != undefined) {
                if (CONFIG.navAltVersion) {
                    $(_selector + ' .calendar-navigation button.btn-nav').tooltip();
                } else {
                    $(_selector + ' .calendar-navigation .pagination a').tooltip();
                }
            }
        };

        var _isAutosave = function () {
            // If autosave was explicitly set to true then don't take autosave checkbox value
            if (CONFIG.autosave) {
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
            var dateStr = _formatDate2(event.year, event.month, event.day);
            modal.find('.modalTitleDate').html(dateStr);
            modal.find('.eventDay').val(event.day);
            modal.find('.eventId').val(event.eventId);

            modal.find('.eventName').val(event.eventName);

            var personInput = modal.find('select.personId');
            personInput.val(event.personId);
            var inp = modal.find('input.personId');
            if (inp != undefined) {
                inp.val(event.personName);
            }

            var timeFrom = modal.find('.timeFrom');
            timeFrom.val(event.timeFrom);
            timeFrom.trigger('change');

            var timeTo = modal.find('.timeTo');
            timeTo.val(event.timeTo);
            timeTo.trigger('change');

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
            if (CONFIG.tabbedEventList) {
                $(_selector + ' #event-tab-btn').click(function () {
                    var calendarNavigation = $(_selector + ' .calendar-navigation');
                    calendarNavigation.css('visibility', 'hidden');
                });
                $(_selector + ' #calendar-tab-btn').click(function () {
                    var calendarNavigation = $(_selector + ' .calendar-navigation');
                    calendarNavigation.css('visibility', 'visible');
                });
            }

            var panelSelector = '.calendar-panel ';

            var renderOnChange = function () {
                if (_filterByMonth) {
                    _render();
                } else {
                    _render('calendar', 'label');
                }
            };

            $(panelSelector + '.prev-month').click(function () {
                _month--;
                if (_month < 0) {
                    _month = 11;
                    _year--;
                }

                renderOnChange();
            });

            $(panelSelector + '.next-month').click(function () {
                _month++;
                if (_month > 11) {
                    _month = 0;
                    _year++;
                }
                renderOnChange();
            });

            var changeYear = function (value) {
                _year += value;

                renderOnChange();
            };

            $(panelSelector + '.prev-year').click(function () {
                changeYear(-1);
            });
            $(panelSelector + '.next-year').click(function () {
                changeYear(1);
            });
            
            var validateTime = function (timeFrom, timeTo) {
                if (parseInt(timeFrom) > parseInt(timeTo))
                    return false;

                return true;
            }

            var cleanUpModal = function (modal) {
                var personInput = modal.find('.personId');
                var eventInput = modal.find('.eventName');

                // clear
                if (personInput != undefined) {
                    personInput.val('');
                }
                eventInput.val('');

                eventInput.removeClass('input-validation-error');
            }

            var addNewEvent = function (day) {
                var modal = $(_modalSelector);

                var personInput = modal.find('select.personId');
                var eventInput = modal.find('.eventName');
                var personId;
                var personName;
                
                if (CONFIG.hideAttendee) {
                    personId = _usePerson.personId;
                    personName = _usePerson.personName;
                } else {
                    personId = personInput.val();
                    personName = modal.find('.personId option:selected').text();
                }

                var timeFrom = modal.find('.timeFrom');
                var timeTo = modal.find('.timeTo');

                var event = eventInput.val();

                // Validate
                if (personId == undefined || personId == '') {
                    return false;
                }
                if (event == undefined || event == '') {
                    eventInput.addClass('input-validation-error');
                    return false;
                }

                var timeFromVal = timeFrom.val();
                var timeToVal = timeTo.val();
                if (validateTime(timeFromVal, timeToVal)) {
                    _addEvent(_year, _month, day, personId, personName, event, undefined, timeFromVal, timeToVal);
                    _render();

                    cleanUpModal(modal);
                }
                return true;
            };

            var editEvent = function (modal, event) {
                var personId;
                var personName;
                if (CONFIG.hideAttendee) {
                    personId = _usePerson.personId;
                    personName = _usePerson.personName;
                } else {
                    personId = modal.find('select.personId').val();
                    personName = modal.find('select.personId option:selected').text();
                }
                var eventId = modal.find('.eventId').val();
                var eventName = modal.find('.eventName').val();

                // Validate
                if (personId == undefined || personId == '') {
                    return false;
                }
                if (event == undefined || String(event).trim() == '') {
                    eventInput.addClass('input-validation-error');
                    return false;
                }

                var timeFromVal = modal.find('.timeFrom').val();
                var timeToVal = modal.find('.timeTo').val();

                if (validateTime(timeFromVal, timeToVal)) {
                    event.eventId = eventId;
                    event.personId = personId;
                    event.personName = personName;
                    event.timeFrom = timeFromVal;
                    event.timeTo = timeToVal;
                    event.eventName = eventName;
                    event.unsaved = true;
                        
                    _eventsToEdit.push(event);

                    if (_isAutosave()) {
                        _saveEvents();
                    }

                    cleanUpModal(modal);
                    return true;
                }

                return false;
            };

            // Bind event add
            $(_selector).on('click', '.panel-add-event', function () {
                _openAddModal();
            });

            var _openAddModal = function (selectedDay) {
                var modal = $(_modalSelector);

                cleanUpModal(modal);

                if (selectedDay == undefined) {
                    selectedDay = $(_selector).find('.week-day-div.selected');
                } else {
                    selectedDay.addClass('selected');
                }

                if (selectedDay.length > 0) {
                    var day = $(selectedDay).parent().data('day');
                    var dateStr = _formatDate2(_year, _month, day);

                    var dd1 = modal.find('.modalTitleDate');
                    dd1.html(dateStr);
                    var dd2 = modal.find('.eventDay');
                    dd2.val(day);

                    _setModalState(modal, 'add');
                    modal.modal('show');
                }
            };

            var _openEditModal = function (selectedEvent) {
                var modal = $(_modalSelector);

                if (selectedEvent == undefined) {
                    selectedEvent = $(_selector).find('.event.selected');
                } else {
                    selectedEvent.addClass('selected');
                }

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
            };

            // Bind event edit
            $(_selector).on('click', '.panel-edit-event', function () {
                _openEditModal();
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
                        _setEventAddEditState('none');
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
            
            //$(_selector).on('dblclick', '.week-day-div', function (e) {
            //    _openAddModal($(this));
            //});

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

            // Edit on event double click
            $(_selector).on('dblclick', '.event', function (e) {
                _openEditModal($(this));
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
            var disabled = 'disabled';

            addEventButton.addClass(disabled);
            editEventButton.addClass(disabled);
            removeEventButton.addClass(disabled);

            // Deselect all events & days
            $(_selector + ' ' + '.event').removeClass('selected');
            $(_selector + ' ' + '.week-day-div').removeClass('selected');


            if (type == 'add') {
                //addEventButton.show();
                addEventButton.removeClass(disabled);
            }
            else if (type == 'edit') {
                editEventButton.removeClass(disabled);
                removeEventButton.removeClass(disabled);
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
                    _setEventAddEditState('none');
                }

                return false;
            });
        };
        
        var _timeScale = 4;
        var _formatTime = function (val) {
            var hour = Math.floor(val / _timeScale);
            if (hour < 10)
                hour = '0' + hour;

            var minute = Math.floor((val % _timeScale) * 15);
            if (minute < 10)
                minute = '0' + minute;

            return hour + ':' + minute;
        };

        var _bindEventModalRange = function () {
            var validate = function () {
                if (timeFrom.val() > timeTo.val()) {
                    timeFrom.val(timeTo.val());
                    timefrom.trigger('change');
                }
                else if (timeTo.val() < timeFrom.val()) {
                    timeTo.val(timeFrom.val());
                    timeTo.trigger('change');
                }
            };

            var timeFromSelector = _modalSelector + ' .timeFrom';
            var timeToSelector = _modalSelector + ' .timeTo';

            var timeFrom = $(timeFromSelector);
            var timeTo = $(timeToSelector);

            $(timeFrom).change(function () {
                var out = $(_modalSelector + ' .timeFrom-output');
                var value = $(this).val();
                out.html(_formatTime(value));
            });

            $(timeTo).change(function () {
                var out = $(_modalSelector + ' .timeTo-output');
                var value = $(this).val();
                out.html(_formatTime(value));
            });

            $(timeFrom, timeTo).keydown(function () {
                $(this).trigger('change');
            });

            $(timeFrom).trigger('change');
            $(timeTo).trigger('change');
        }

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

        var maybeBoolean = function(defaultValue, value) {
            if (value == undefined || value == null || typeof value != 'boolean') {
                return defaultValue;
            } else {
                return value;
            }
        }

        /**
          * Adds new event with event object and date as arguments
          */
        var _pushEvent = function (event, unsaved, insertAtStart) {
            unsaved = maybeBoolean(false, unsaved);
            insertAtStart = maybeBoolean(true, insertAtStart);

            if (typeof event == 'object') {
                if (unsaved) {
                    event.unsaved = true;
                    _eventsToSave.push(event);
                }   

                if (insertAtStart) {
                    _allEvents.unshift(event);
                } else {
                    _allEvents.push(event);
                }
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
        var _render = function (callback) {
            var args = new Array();
            if (arguments.length == 0) {
                args = ['calendar', 'events', 'label']
            } else {
                for (var i = 0; i < arguments.length; i++) {
                    args.push(arguments[i]);
                }
            }

            // Update label
            if (args.indexOf('label') != -1) {
                _renderLabel();
            }

            // Render calendar
            if (args.indexOf('calendar') - 1) {
                _renderCalendar();
            }

            // Update event list
            if (args.indexOf('events') != -1) {
                _renderEventList();
            }

            if (callback != undefined && typeof callback == 'function') {
                callback();
            }
        };

        var _renderLabel = function () {
            var currentYearMonth = _formatMonthYearFriendly(_year, _month);
            $('.calendar-panel .currentYearMonth').html(currentYearMonth);
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
                CONFIG: CONFIG,
            };
            var calendarHtml = _templates.calendar(data);
            container.html(calendarHtml);
        };

        var _renderEventList = function () {
            if (CONFIG.showEventList) {
                var evData = null;
                if (_filterByMonth) {
                    evData = _getEventsForMonth(_year, _month);
                } else {
                    evData = _allEvents;
                }

                var data = {
                    events: evData,
                    RESOURCES: _resources,
                    CONFIG: CONFIG,
                };

                var eventListHtml = _templates.eventList(data);

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

            $(_modalSelector + ' .personId').replaceWith(template);
        }

        var _loadResources = function (resourceList, withRender) {
            if (resourceList != undefined && resourceList != null && typeof resourceList == 'object') {
                
                // TODO: replace all?
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

        var _renderCallback = null;

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
        };
    };
    
    // Expose calendar function to environment
    env.Calendar = calendar;
})(window);