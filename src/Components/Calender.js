var Calendar = require('tui-calendar'); /* CommonJS */
require("tui-calendar/dist/tui-calendar.css");
var calendar = new Calendar('#calendar', {
    defaultView: 'month',
    taskView: true,
    template: {
        monthDayname: function(dayname) {
            return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
        }
    }

});
export default calendar;