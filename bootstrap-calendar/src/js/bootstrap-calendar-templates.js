this["CalendarTemplates"] = this["CalendarTemplates"] || {};

this["CalendarTemplates"]["src/templates/calendar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

this["CalendarTemplates"]["src/templates/eventModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    <span>Select person:</span>\r\n                    ";
  stack1 = self.invokePartial(partials.selectPartial, 'selectPartial', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.PERSON_NAME)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ":</span>\r\n                <input class=\"person\" />\r\n                ";
  return buffer;
  }

  buffer += "<div id=\"calendarEventModal\" class=\"modal fade\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.CLOSE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></button>\r\n                <h4 class=\"modal-title\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.MODAL_TITLE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span class=\"modalTitleDate\"></span></h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.MODAL_BODY)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n\r\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.enable_dropdown), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                <br />\r\n                <span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EVENT_NAME)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ":</span>\r\n                <input class=\"eventName\" />\r\n\r\n                <br/>\r\n                Time from:\r\n                <input class=\"timeFrom\" />\r\n\r\n                Time to:\r\n                <input class=\"timeTo\" />\r\n\r\n                <input type=\"hidden\" class=\"eventId\" />\r\n                <input type=\"hidden\" class=\"eventDay\" />\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary add-event\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.ADD)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n                <button type=\"button\" class=\"btn btn-primary edit-event\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EDIT)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.CLOSE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n            </div>\r\n        </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->";
  return buffer;
  });

this["CalendarTemplates"]["src/templates/events"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <tr>\r\n                <td>\r\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </td>\r\n                <td>\r\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.year)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (depth0 && depth0.month)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (depth0 && depth0.day)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </td>\r\n                <td>\r\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.person)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </td>\r\n                <td>\r\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.eventName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </td>\r\n               <td>\r\n                   <a href=\"#\" class=\"edit-event2\" data-eventid=\""
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Edit</a>\r\n               </td>\r\n              <td>\r\n                  <a href=\"#\" class=\"remove-event2\" data-eventid=\""
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Remove</a>\r\n              </td>\r\n            </tr>\r\n            ";
  return buffer;
  }

  buffer += "<div class=\"event-list \">\r\n  <hr />\r\n    <h3>Event list</h3>\r\n    <table class=\"table  table-hover table-striped table-responsive\">\r\n        <thead>\r\n            <tr>\r\n                <th>\r\n                    Id\r\n                </th>\r\n                <th>\r\n                    Date\r\n                </th>\r\n                <th>\r\n                    Person name\r\n                </th>\r\n                <th>\r\n                    Event name\r\n                </th>\r\n                <th></th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tbody>\r\n    </table>\r\n</div>";
  return buffer;
  });

this["CalendarTemplates"]["src/templates/panel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"calendar-panel text-center\">\r\n\r\n    <button class=\"btn btn-default panel-add-event\" style=\"display:none\">Add event</button>\r\n    <button class=\"btn btn-default panel-edit-event\" style=\"display:none\">Edit event</button>\r\n    <button class=\"btn btn-default panel-remove-event\" style=\"display:none\">Remove event</button>\r\n\r\n\r\n    <button class=\"btn btn-default save-events\">Save events</button>\r\n    <button class=\"btn btn-default reload-events\">Reload events</button>\r\n    <button class=\"btn btn-default clear-events\">Clear events</button>\r\n\r\n    <br/>\r\n\r\n    <button class=\"btn btn-primary prev-year\">Previous year</button>\r\n    <button class=\"btn btn-primary prev-month\">Previous month</button>\r\n\r\n    <h2 style=\"display:inline-block\">\r\n        <span class=\"label label-primary label-lg currentYearMonth\">";
  if (helper = helpers.currentYearMonth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.currentYearMonth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n    </h2>\r\n\r\n    <button class=\"btn btn-primary next-month\">Next month</button>\r\n    <button class=\"btn btn-primary next-year\">Next year</button>\r\n\r\n</div>\r\n\r\n<div class=\"calendar-loader\"></div>";
  return buffer;
  });

this["CalendarTemplates"]["src/templates/selectPartial"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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

  buffer += "<select class=\"person\">\r\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.people), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</select>";
  return buffer;
  });