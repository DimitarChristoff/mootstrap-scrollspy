Twitter ScrollSpy port to Mootools
==================================

![Screenshot](https://github.com/DimitarChristoff/mootstrap-scrollspy/raw/master/scrollSpy.png)

This is a port of the Twitter Scrollspy to MooTools, originaly written by Arian Stolwijk.
It extends it further and makes it more flexible, allowing you to set the dependencies
between trigger element and target element in whichever way you like, as well as provide
an Event API that can help with scripting of effects on the trigger or on the target
element.

You can also check this [demo](http://jsfiddle.net/dimitar/Q5WHx/show/), running on the actual
bootstrap fluid responsive markup - make sure you downside your browser but not too much so the
menu does not collapse.

Practical demo: including inside the single page doc page Backbone Patterns:
[modified with scollspy](http://fragged.org/backbone-patterns/) vs [original](http://ricostacruz.com/backbone-patterns/)

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

    // code from backbone patterns example, adjusted for their dom
    new moostrapScrollspy("toc", {
        onActive: function(el) {
            var parent = el.getParent("nav") || el.getParent("h2");
            parent.addClass("active");
        },
        onInactive: function(el) {
            var parent = el.getParent("nav") || el.getParent("h2");
            parent.removeClass("active");
        }
    });
```

Demo
----

[http://jsfiddle.net/dimitar/mc9yc/](http://jsfiddle.net/dimitar/mc9yc/)
