Twitter ScrollSpy port to Mootools
==================================

![Screenshot](https://github.com/DimitarChristoff/mootstrap-scrollspy/raw/master/scrollSpy.png)

This is a port of the Twitter Scrollspy to MooTools, originaly written by Arian Stolwijk.
It extends it further and makes it more flexible, allowing you to set the dependencies
between trigger element and target element in whichever way you like, as well as provide
an Event API that can help with scripting of effects on the trigger or on the target
element.



How to use
----------

Read the source code for a full idea, it's self explanatory. Default use case works with
no options at all.

```javascript

    // defaults. use href with #targetid and matching element id="targetid"
    new moostrapScrollspy('navmenu', {
        offset: 30  // makeup for the fixed nav bar at top
    });

    // define a custom element getter
    new moostrapScrollspy('navbar3', {
        mask: 'a.main',  // on child links with class main only.
        navElementParse: function(el) {
            // match any div that contains a h2 with matching text
            var text = el.get('text').clean();
            var target = document.getElement("h2:contains('" + text + "') ! div");
            return target;
        },
        onActive: function(el) {
            // add a custom class to parent Element of link
            el.getParent().addClass('funky');
            // do something to element that comes into view...
            el.retrieve('navMonitor').tween('backgroundColor', ['#cccccc', '#ffffff']);
        },
        onInactive: function(el) {
            // undo custom class
            el.getParent().removeClass('funky');
        }
    });

```

Demo
----

[http://jsfiddle.net/dimitar/mc9yc/](http://jsfiddle.net/dimitar/mc9yc/)
