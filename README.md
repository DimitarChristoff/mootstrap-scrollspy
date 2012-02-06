Twitter ScrollSpy port to Mootools
==================================

How to use
----------

Read the source code.

```javascript

    new moostrapScrollspy("navmenu");

    new moostrapScrollspy('navbar3', {
        navElementParse: function(el) {
            // match any div that contains a h2 with matching text
            var text = el.get("text").clean();
            var target = document.getElement("h2:contains('" + text + "') ! div");
            return target;
        },
        onActive: function(el) {
            // do something to element that has come into view
            el.retrieve("navMonitor").fade(0, 1);
        }
    });

```

Demo
----

[http://jsfiddle.net/dimitar/mc9yc/](http://jsfiddle.net/dimitar/mc9yc/)