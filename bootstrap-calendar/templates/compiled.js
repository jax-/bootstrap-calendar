(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['calendar.html'] = template({"1":function(depth0,helpers,partials,data) {
  var functionType="function", escapeExpression=this.escapeExpression;
  return "\r\n                <th>\r\n                    "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\r\n                </th>\r\n                ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\r\n        <tr class=\"week\">\r\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.days), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\r\n        </tr>\r\n        ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "\r\n            <td class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.date_string), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-day=\""
    + escapeExpression(((helper = helpers.dayValue || (depth0 && depth0.dayValue)),(typeof helper === functionType ? helper.call(depth0, {"name":"dayValue","hash":{},"data":data}) : helper)))
    + "\">\r\n                <div class=\"week-day-div\">\r\n                    <ul style=\"list-style:none;\">\r\n                        <li><span class=\"date\">"
    + escapeExpression(((helper = helpers.date_string || (depth0 && depth0.date_string)),(typeof helper === functionType ? helper.call(depth0, {"name":"date_string","hash":{},"data":data}) : helper)))
    + "</span></li>\r\n                        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.events), {"name":"each","hash":{},"fn":this.programWithDepth(7, data, depth0),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\r\n                    </ul>\r\n                </div>\r\n            </td>\r\n            ";
},"5":function(depth0,helpers,partials,data) {
  return " week-day ";
  },"7":function(depth0,helpers,partials,data,depth1) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression;
  return "\r\n                        <li>\r\n                            <span class=\"event\" data-day=\""
    + escapeExpression(((stack1 = (depth1 && depth1.dayValue)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-eventid=\""
    + escapeExpression(((helper = helpers.eventId || (depth0 && depth0.eventId)),(typeof helper === functionType ? helper.call(depth0, {"name":"eventId","hash":{},"data":data}) : helper)))
    + "\" style=\"background-color:"
    + escapeExpression(((stack1 = (depth0 && depth0.color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n                                <b>"
    + escapeExpression(((stack1 = (depth0 && depth0.person)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " - "
    + escapeExpression(((stack1 = (depth0 && depth0.eventName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</b>\r\n                            </span>\r\n                        </li>\r\n                        ";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "﻿<script id=\"calendar-block\" type=\"text/x-handlebars-template\">\r\n    <label class=\"label label-primary\">"
    + escapeExpression(((helper = helpers.current_year_month || (depth0 && depth0.current_year_month)),(typeof helper === functionType ? helper.call(depth0, {"name":"current_year_month","hash":{},"data":data}) : helper)))
    + "</label>\r\n    <table class=\"table calendar\">\r\n        <thead>\r\n            <tr>\r\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.weekdays), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </tr>\r\n        </thead>\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.weeks), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\r\n\r\n    </table>\r\n</script>";
},"useData":true});
})();