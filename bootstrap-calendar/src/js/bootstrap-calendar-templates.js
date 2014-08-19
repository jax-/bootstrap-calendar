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
  
  var buffer = "", stack1, helper, options;
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
    + escapeExpression((helper = helpers.formatEventName || (depth0 && depth0.formatEventName),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.eventName), options) : helperMissing.call(depth0, "formatEventName", (depth0 && depth0.eventName), options)))
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
  


  return "\r\n<div class=\"calendar-alertarea\"></div>\r\n<div class=\"calendar-nav-panel\">\r\n\r\n</div>\r\n<div class=\"calendar-container\"></div>\r\n<div class=\"event-container\"></div>\r\n\r\n<div class=\"calendar-loader\"></div> ";
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
    + ":</span>\r\n                    </div>\r\n                    <div class=\"col-md-7 col-lg-7\">\r\n                        <textarea maxlength=\"500\" rows=\"4\" class=\"eventName form-control\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row row-mar\">\r\n                    <div class=\"col-md-5 col-lg-5\">\r\n                        Time from:\r\n                    </div>\r\n                    <div class=\"col-md-7 col-lg-7\">\r\n                        <input type=\"range\" class=\"timeFrom\" name=\"timeFrom\" step=\"1\" min=\"0\" max=\"24\" value=\"10\">\r\n                        <div class=\"timeFrom-output\"></div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row row-mar\">\r\n                    <div class=\"col-md-5 col-lg-5\">\r\n                        Time to:\r\n                    </div>\r\n\r\n                    <div class=\"col-md-7 col-lg-7\">\r\n                        <input type=\"range\" class=\"timeTo\" name=\"timeTo\" step=\"1\" min=\"0\" max=\"24\" value=\"11\">\r\n                        <div class=\"timeTo-output\"></div>\r\n                    </div>\r\n                </div>\r\n\r\n                <input type=\"hidden\" class=\"eventId\" />\r\n                <input type=\"hidden\" class=\"eventDay\" />\r\n\r\n                <div style=\"clear:both\"></div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary add-event\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.ADD)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n                <button type=\"button\" class=\"btn btn-primary edit-event\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.EDIT)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.RESOURCES)),stack1 == null || stack1 === false ? stack1 : stack1.CLOSE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n            </div>\r\n        </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<script>\r\n    $('.timeFrom').change(function () {\r\n        var out = $('.timeFrom-output');\r\n        var value = $(this).val();\r\n        out.html(format(value));\r\n    });\r\n\r\n    $('.timeTo').change(function () {\r\n        var out = $('.timeTo-output');\r\n        var value = $(this).val();\r\n        out.html(format(value));\r\n    });\r\n\r\n    $(function (){\r\n        $('.timeFrom').trigger('change');\r\n        $('.timeTo').trigger('change');\r\n    });\r\n\r\n    $('.timeTo,.timeFrom').keydown(function () {\r\n        $(this).trigger('change');\r\n    });\r\n\r\n    var format = function (val) {\r\n\r\n        var hour = val;\r\n        if (hour < 10)\r\n            hour = '0' + hour;\r\n\r\n        return hour + ':00';\r\n        \r\n\r\n        //var hour = Math.floor(val / 4);\r\n        //if (hour < 10)\r\n        //    hour = '0' + hour;\r\n\r\n        //var minute = Math.floor((val % 4) * 15);\r\n        //if (minute < 10)\r\n        //    minute = '0' + minute;\r\n\r\n        //return hour + ':' + minute;\r\n    };\r\n\r\n    var validate = function () {\r\n        var timeTo = $('.timeTo');\r\n        var timeFrom = $('.timeFrom');\r\n\r\n        if (timeFrom.val() > timeTo.val()) {\r\n            timeFrom.val(timeTo.val());\r\n            timefrom.trigger('change');\r\n        }\r\n        else if (timeTo.val() < timeFrom.val())\r\n        {\r\n            timeTo.val(timeFrom.val());\r\n            timeTo.trigger('change');\r\n        }\r\n    };\r\n\r\n</script>";
  return buffer;
  });

this["CalendarTemplates"]["events"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\r\n                <th>\r\n                    Id\r\n                </th>\r\n                ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            <tr class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.unsaved), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" >\r\n                <td>\r\n                    <div style=\"background-color: ";
  if (helper = helpers.color) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.color); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "; width:18px; height:18px;\"></div>\r\n                </td>\r\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_id), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <td>\r\n                    "
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.year), (depth0 && depth0.month), (depth0 && depth0.day), options) : helperMissing.call(depth0, "formatDate", (depth0 && depth0.year), (depth0 && depth0.month), (depth0 && depth0.day), options)))
    + "\r\n                </td>\r\n                <td>\r\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.timeFrom)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " - "
    + escapeExpression(((stack1 = (depth0 && depth0.timeTo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
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
function program4(depth0,data) {
  
  
  return "warning";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <td>\r\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.eventId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </td>\r\n                ";
  return buffer;
  }

  buffer += "<div class=\"event-list \">\r\n  <hr />\r\n    <h3>Event list</h3>\r\n    <table class=\"table  table-hover table-striped table-responsive\">\r\n        <thead>\r\n            <tr>\r\n                <th>#</th>\r\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_id), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <th>\r\n                    Date\r\n                </th>\r\n                <th>\r\n                    Time\r\n                </th>\r\n                <th>\r\n                    Person name\r\n                </th>\r\n                <th>\r\n                    Event name\r\n                </th>\r\n                <th></th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </tbody>\r\n    </table>\r\n</div>";
  return buffer;
  });

this["CalendarTemplates"]["navpanel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"calendar-panel calendar-nav-panel text-right\">\r\n    <button class=\"btn btn-nav btn-default prev-year btn-lg\"><<</button>\r\n    <button class=\"btn btn-nav btn-default prev-month btn-lg\"><</button>\r\n\r\n    <h2 style=\"display:inline-block; padding: 0 0; margin: 0 0;\">\r\n        <span class=\"label label-primary label-lg currentYearMonth\">";
  if (helper = helpers.currentYearMonth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.currentYearMonth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n    </h2>\r\n\r\n    <button class=\"btn btn-nav btn-default next-month btn-lg\">></button>\r\n    <button class=\"btn btn-nav btn-default next-year btn-lg\">>></button>\r\n</div>\r\n";
  return buffer;
  });

this["CalendarTemplates"]["panel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"calendar-panel text-center\">\r\n\r\n    <!--<button class=\"btn btn-primary load-people\">Load people</button>-->\r\n\r\n    <div class=\"pull-right\">\r\n        <button class=\"btn btn-default panel-add-event\" style=\"display:none\">Add event</button>\r\n        <button class=\"btn btn-default panel-edit-event\" style=\"display:none\">Edit event</button>\r\n        <button class=\"btn btn-default panel-remove-event\" style=\"display:none\">Remove event</button>\r\n\r\n\r\n        <button class=\"btn btn-default save-events\" style=\"margin-right:10px;\">Save events</button>\r\n        <label for=\"event-autosave\">Autosave</label>\r\n        <input type=\"checkbox\" id=\"event-autosave\" class=\"event-autosave\" />\r\n    </div>\r\n    <div style=\"clear:both\">\r\n\r\n</div>  ";
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