Twitter ScrollSpy port to Mootools
==================================

This is a port of the Twitter Scrollspy to MooTools, originaly written by Arian Stolwijk.
It extends it further and makes it more flexible, allowing you to set the dependencies
between trigger element and target element in whichever way you like, as well as provide
an Event API that can help with scripting of effects on the trigger or on the target
element.

How to use
----------

Read the source code.

```javascript

    new moostrapScrollspy("navmenu");

    new moostrapScrollspy('navbar3', {
        mask: "a",  // on links only.
        navElementParse: function(el) {
            // match any div that contains a h2 with matching text
            var text = el.get("text").clean();
            var target = document.getElement("h2:contains('" + text + "') ! div");
            return target;
        },
        onActive: function(el) {
            // add a custom class to parent Element of link
            el.getParent().addClass("funky");
            // do something to element that comes into view...
            el.retrieve("navMonitor").tween("backgroundColor", ["#cccccc", "#ffffff"]);
        },
        onInactive: function(el) {
            // undo custom class
            el.getParent().removeClass("funky");
        }
    });

```

Demo
----

[http://jsfiddle.net/dimitar/mc9yc/](http://jsfiddle.net/dimitar/mc9yc/)