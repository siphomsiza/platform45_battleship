describe("Keyboard events feature",function(){"use strict";var h,e,t,i,o,d,n;beforeEach(function(){loadFixtures("timepicker.html"),h=$("#timepicker1"),i=h.timepicker(),n=i.data("timepicker"),e=$("#timepicker2"),o=e.timepicker({template:"modal",showSeconds:!0,minuteStep:30,secondStep:30,defaultTime:!1}),o.data("timepicker"),t=$("#timepicker3"),d=t.timepicker({defaultTime:"23:15:20",showMeridian:!1,showSeconds:!0,template:!1}),d.data("timepicker")}),afterEach(function(){h.data("timepicker").remove(),e.data("timepicker").remove(),t.data("timepicker").remove(),h.remove(),e.remove(),t.remove()}),it("should be able to control element by the arrow keys",function(){n.setTime("11:30 AM"),n.update(),h.trigger("focus"),"hour"!==n.highlightedUnit&&n.highlightHour(),expect(n.highlightedUnit).toBe("hour","hour should be highlighted by default"),h.trigger({type:"keydown",keyCode:38}),expect(n.getTime()).toBe("12:30 PM","1"),h.trigger({type:"keydown",keyCode:40}),expect(n.getTime()).toBe("11:30 AM","2"),expect(n.highlightedUnit).toBe("hour","hour should be highlighted"),h.trigger({type:"keydown",keyCode:39}),expect(n.highlightedUnit).toBe("minute","minute should be highlighted"),h.trigger({type:"keydown",keyCode:38}),expect(n.getTime()).toBe("11:45 AM","3"),expect(n.highlightedUnit).toBe("minute","minute should be highlighted 1"),h.trigger({type:"keydown",keyCode:40}),expect(n.getTime()).toBe("11:30 AM","4"),expect(n.highlightedUnit).toBe("minute","minute should be highlighted 2"),h.trigger({type:"keydown",keyCode:39}),expect(n.highlightedUnit).toBe("meridian","meridian should be highlighted"),h.trigger({type:"keydown",keyCode:38}),expect(n.getTime()).toBe("11:30 PM","5"),expect(n.highlightedUnit).toBe("meridian","meridian should be highlighted"),h.trigger({type:"keydown",keyCode:40}),expect(n.getTime()).toBe("11:30 AM","6"),expect(n.highlightedUnit).toBe("meridian","meridian should be highlighted"),h.trigger({type:"keydown",keyCode:37}),expect(n.highlightedUnit).toBe("minute","minutes should be highlighted"),h.trigger({type:"keydown",keyCode:40}),expect(n.getTime()).toBe("11:15 AM","7"),h.trigger({type:"keydown",keyCode:37}),expect(n.highlightedUnit).toBe("hour","hours should be highlighted"),h.trigger({type:"keydown",keyCode:40}),expect(n.getTime()).toBe("10:15 AM","8"),h.trigger({type:"keydown",keyCode:37}),expect(n.highlightedUnit).toBe("meridian","meridian should be highlighted"),h.trigger({type:"keydown",keyCode:40}),expect(n.getTime()).toBe("10:15 PM","9")}),it("should be able to change time via widget inputs in a dropdown",function(){var t,e=n.$widget.find("input.bootstrap-timepicker-hour"),i=n.$widget.find("input.bootstrap-timepicker-minute"),o=n.$widget.find("input.bootstrap-timepicker-meridian"),d=0;n.setTime("9:30 AM"),n.update(),h.parents("div").find(".add-on").click(),h.timepicker().on("changeTime.timepicker",function(e){d++,t=e.time.value}),expect(n.isOpen).toBe(!0),e.trigger("focus"),e.autotype("{{back}}{{back}}11{{tab}}"),expect(n.hour).toBe(11),expect(d).toBe(1,"incorrect update events thrown"),expect(t).toBe("11:30 AM"),i.autotype("{{back}}{{back}}45{{tab}}"),expect(n.minute).toBe(45),expect(d).toBe(2,"incorrect update events thrown"),expect(t).toBe("11:45 AM"),o.autotype("{{back}}{{back}}pm{{tab}}"),expect(n.meridian).toBe("PM"),expect(d).toBe(3,"incorrect update events thrown"),expect(t).toBe("11:45 PM")}),it("should still be empty if input is empty",function(){h.autotype("{{back}}{{back}}{{back}}{{back}}{{back}}{{back}}{{back}}{{back}}{{tab}}"),expect(h.val()).toBe("")}),it("should allow time to be changed via widget inputs in a modal",function(){}),it("should be 12:00 AM if 00:00 AM is entered",function(){}),it("should validate input",function(){})});