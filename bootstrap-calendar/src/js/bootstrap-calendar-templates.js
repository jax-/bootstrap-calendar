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
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["CalendarTemplates"]["calendar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <th>\r\n                ";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </th>\r\n            ";
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
    + ";\">\r\n                            <span> \r\n                                   ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth3 && depth3.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.showTime), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                                   <br /> \r\n                                   ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth3 && depth3.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.hideAttendee), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                                   ";
  stack1 = (helper = helpers.formatEventName || (depth0 && depth0.formatEventName),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.eventName), options) : helperMissing.call(depth0, "formatEventName", (depth0 && depth0.eventName), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                            </span>\r\n                        </span>\r\n                    </li>\r\n                    ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                                   ("
    + escapeExpression((helper = helpers.formatTime || (depth0 && depth0.formatTime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.timeFrom), options) : helperMissing.call(depth0, "formatTime", (depth0 && depth0.timeFrom), options)))
    + " - "
    + escapeExpression((helper = helpers.formatTime || (depth0 && depth0.formatTime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.timeTo), options) : helperMissing.call(depth0, "formatTime", (depth0 && depth0.timeTo), options)))
    + ") \r\n                                   ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \r\n                                   ";
  stack1 = ((stack1 = (depth0 && depth0.personName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " - \r\n                                   ";
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
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n<ul class=\"nav nav-tabs nav-calendar\">\r\n    <li class=\"active\"><a id=\"calendar-tab-btn\" href=\"#calendar-tab\" data-toggle=\"tab\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.CALENDAR)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\r\n    <li><a id=\"event-tab-btn\" href=\"#events-tab\" data-toggle=\"tab\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EVENT_LIST)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\r\n</ul>\r\n\r\n<div class=\"tab-content\">\r\n    <div class=\"tab-pane active\" id=\"calendar-tab\">\r\n        <div class=\"calendar-container\"></div>\r\n    </div>\r\n    <div class=\"tab-pane\" id=\"events-tab\">\r\n        <div class=\"event-container\"></div>\r\n    </div>\r\n</div>\r\n\r\n";
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
  buffer += "\r\n    <h3>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EVENT_LIST)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\r\n    <table class=\"table  table-hover table-striped table-responsive\">\r\n        <thead>\r\n            <tr>\r\n                <th>#</th>\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.showId), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <th>\r\n                    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.DATE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </th>\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.showTime), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.hideAttendee), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <th>\r\n                    ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.HEADER_EVENT_NAME)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </th>\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.allowEdit), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.events), {hash:{},inverse:self.noop,fn:self.programWithDepth(13, program13, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tbody>\r\n    </table>\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <th>\r\n                    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.ID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </th>\r\n                ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <th>\r\n                    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.TIME)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </th>\r\n                ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <th>\r\n                    ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.HEADER_PERSON_NAME)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </th>\r\n                ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.useIcons), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <th>\r\n                    ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.ACTIONS)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </th>\r\n                ";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return "\r\n                <th></th>\r\n                <th></th>\r\n                ";
  }

function program13(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            <tr class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.unsaved), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" >\r\n                <td>\r\n                    <div style=\"background-color: ";
  if (helper = helpers.color) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.color); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "; width:18px; height:18px;\"></div>\r\n                </td>\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth1 && depth1.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.showId), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <td>\r\n                    "
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.year), (depth0 && depth0.month), (depth0 && depth0.day), options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.year), (depth0 && depth0.month), (depth0 && depth0.day), options)))
    + "\r\n                </td>\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth1 && depth1.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.showTime), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth1 && depth1.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.hideAttendee), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <td>\r\n                    ";
  stack1 = ((stack1 = (depth0 && depth0.eventName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </td>\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth1 && depth1.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.allowEdit), {hash:{},inverse:self.noop,fn:self.programWithDepth(22, program22, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </tr>\r\n            ";
  return buffer;
  }
function program14(depth0,data) {
  
  
  return "warning";
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <td>\r\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </td>\r\n                ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                <td>\r\n                    "
    + escapeExpression((helper = helpers.formatTime || (depth0 && depth0.formatTime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.timeFrom), options) : helperMissing.call(depth0, "formatTime", (depth0 && depth0.timeFrom), options)))
    + " - "
    + escapeExpression((helper = helpers.formatTime || (depth0 && depth0.formatTime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.timeTo), options) : helperMissing.call(depth0, "formatTime", (depth0 && depth0.timeTo), options)))
    + "\r\n                </td>                \r\n                ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <td>\r\n                    ";
  stack1 = ((stack1 = (depth0 && depth0.personName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </td>            \r\n                ";
  return buffer;
  }

function program22(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth1 && depth1.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.useIcons), {hash:{},inverse:self.program(25, program25, data),fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  return buffer;
  }
function program23(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <td>\r\n                    <a href=\"#\" class=\"edit-event2\" data-eventid=\""
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\r\n                    <a href=\"#\" class=\"remove-event2\" data-eventid=\""
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"glyphicon glyphicon-remove\"></span></a>\r\n                </td>\r\n                ";
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <td>\r\n                    <a href=\"#\" class=\"edit-event2\" data-eventid=\""
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EDIT)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\r\n                </td>\r\n                <td>\r\n                    <a href=\"#\" class=\"remove-event2\" data-eventid=\""
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.REMOVE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\r\n                </td>\r\n                ";
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <h3 class=\"text-muted\" style=\"padding-left:10px;\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.NO_DATA)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\r\n    ";
  return buffer;
  }

  buffer += "<div class=\"event-list\">\r\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.events)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(27, program27, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["CalendarTemplates"]["eventModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <div class=\"row row-mar\">\r\n                    <div class=\"col-md-5 col-lg-5\">\r\n                        <b>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.PERSON_NAME)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</b>\r\n                    </div>\r\n                    <div class=\"col-md-7 col-lg-7\">\r\n                        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.enable_dropdown), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    </div>\r\n                </div>\r\n                ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        ";
  stack1 = self.invokePartial(partials.selectPartial, 'selectPartial', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\r\n                        <input class=\"personId form-control\">\r\n                        ";
  }

  buffer += "<div id=\"calendarEventModal\" class=\"modal fade\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.CLOSE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></button>\r\n                <h4 class=\"modal-title\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.MODAL_TITLE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <span class=\"modalTitleDate\"></span></h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.MODAL_BODY)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\r\n\r\n                ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.hideAttendee), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                <div class=\"row row-mar\">\r\n                    <div class=\"col-md-5 col-lg-5\">\r\n                        <b>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EVENT_NAME)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</b>\r\n                    </div>  \r\n                    <div class=\"col-md-7 col-lg-7\">\r\n                        <textarea maxlength=\"500\" rows=\"4\" class=\"eventName form-control\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row row-mar\">\r\n                    <div class=\"col-md-5 col-lg-5\">\r\n                        <b>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.DATE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</b>\r\n                    </div>\r\n                    <div class=\"col-md-7 col-lg-7\">\r\n                        <input type=\"text\" data-date-format=\"YYYY-MM-DD\" data-date=\"";
  if (helper = helpers.dateStr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dateStr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"eventDate form-control\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row row-mar\">\r\n                    <div class=\"col-md-5 col-lg-5\">\r\n                        <b>\r\n                            ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.TIME_FROM)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":\r\n                        </b>    \r\n                    </div>\r\n                    <div class=\"col-md-7 col-lg-7\">\r\n                        <input type=\"range\" class=\"timeFrom\" name=\"timeFrom\"  min=\"0\" max=\"";
  if (helper = helpers.timeMaxValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.timeMaxValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"";
  if (helper = helpers.timeFromDefault) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.timeFromDefault); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                        <div class=\"timeFrom-output\"></div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row row-mar\">\r\n                    <div class=\"col-md-5 col-lg-5\">\r\n                        <b>\r\n                            ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.TIME_TO)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":\r\n                        </b>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-7 col-lg-7\">\r\n                        <input type=\"range\" class=\"timeTo\" name=\"timeTo\" min=\"0\" max=\"";
  if (helper = helpers.timeMaxValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.timeMaxValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"";
  if (helper = helpers.timeToDefault) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.timeToDefault); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                        <div class=\"timeTo-output\"></div>\r\n                    </div>\r\n                </div>\r\n\r\n                <input type=\"hidden\" class=\"eventId\" />\r\n                <input type=\"hidden\" class=\"eventDay\" />\r\n\r\n                <div style=\"clear:both\"></div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary add-event\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.ADD)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\r\n                <button type=\"button\" class=\"btn btn-primary edit-event\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EDIT)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.CLOSE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\r\n            </div>\r\n        </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n";
  return buffer;
  });

this["CalendarTemplates"]["navpanel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <div class=\"pull-left calendar-buttons\">\r\n        <button type=\"button\" class=\"btn btn-primary disabled panel-add-event\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.useIcons), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.ADD_EVENT)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\r\n        <button type=\"button\" class=\"btn btn-primary disabled panel-edit-event\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.useIcons), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EDIT_EVENT)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\r\n        <button type=\"button\" class=\"btn btn-primary disabled panel-remove-event\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.useIcons), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.REMOVE_EVENT)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\r\n\r\n        ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.autosave), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "<span class=\"glyphicon glyphicon-plus\"></span>";
  }

function program4(depth0,data) {
  
  
  return "<span class=\"glyphicon glyphicon-pencil\"></span>";
  }

function program6(depth0,data) {
  
  
  return "<span class=\"glyphicon glyphicon-remove\"></span>";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <button class=\"btn btn-primary save-events\" style=\"margin-right:10px;\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.SAVE_EVENTS)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\r\n        <label for=\"event-autosave\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.AUTOSAVE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\r\n        <input type=\"checkbox\" id=\"event-autosave\" class=\"event-autosave\" />\r\n        ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <button type=\"button\" class=\"btn btn-nav btn-default prev-year btn-lg\" title=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.PREVIOUS_YEAR)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><<</button>\r\n        <button type=\"button\" class=\"btn btn-nav btn-default prev-month btn-lg\" title=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.PREVIOUS_MONTH)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><</button>\r\n\r\n        <h2 style=\"display:inline-block; padding: 0 0; margin: 0 0;\">\r\n            <span class=\"label label-primary label-lg currentYearMonth\">";
  if (helper = helpers.currentYearMonth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.currentYearMonth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n        </h2>\r\n\r\n        <button type=\"button\" class=\"btn btn-nav btn-default next-month btn-lg\" title=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.NEXT_MONTH)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">></button>\r\n        <button type=\"button\" class=\"btn btn-nav btn-default next-year btn-lg\" title=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.NEXT_YEAR)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">>></button>\r\n        ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <ul class=\"pagination pagination\">\r\n            <li><a class=\"prev-year\" title=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.PREVIOUS_YEAR)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><span class=\"glyphicon glyphicon-fast-backward\"></span></a></li>\r\n            <li><a class=\"prev-month\" title=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.PREVIOUS_MONTH)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><span class=\"glyphicon glyphicon-backward\"></span></a></li>\r\n            <li class=\"disabled\"><span class=\"label label-date label-default currentYearMonth\">";
  if (helper = helpers.currentYearMonth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.currentYearMonth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></li>\r\n            <li><a class=\"next-month\" title=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.NEXT_MONTH)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><span class=\"glyphicon glyphicon-forward\"></span></a></li>\r\n            <li><a class=\"next-year\" title=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.NEXT_YEAR)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><span class=\"glyphicon glyphicon-fast-forward\"></span></a></li>\r\n        </ul>\r\n        ";
  return buffer;
  }

  buffer += "<div class=\"calendar-panel calendar-nav-panel \">\r\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.showEditBar), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    <div class=\"pull-right calendar-navigation\">\r\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CONFIG)),stack1 == null || stack1 === false ? stack1 : stack1.navAltVersion), {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
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
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\r\n    ";
  return buffer;
  }

  buffer += "<select class=\"personId form-control\">\r\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.people), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</select>";
  return buffer;
  });