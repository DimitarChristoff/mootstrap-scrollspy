/*
---

name: mootsrapScrollspy

description: port of twitter scroll spy to mootools

authors: Arian Stolwijk, Dimitar Christoff

license: MIT-style license.

version: 1

requires:
  - Core/Event
  - Core/Element
  - Core/Array
  - Core/Class

provides: mootsrapScrollspy

...
*/
(function() {

    var read = function(option, element){
        return (option) ? (typeOf(option) == 'function' ? option.call(this, element) : element.get(option)) : '';
    };

    var moostrapScrollspy = this.moostrapScrollspy = new Class({

        Implements: [Options,Events],

        options: {
            wrapper: window,
            navElementParse: function(el) {
                // can override that to grab els based on another criteria
                var prop = el.get("href"), target;
                if (prop.slice(0, 1) == '#') target = prop.slice(1);
                return target;
            }
        },

        initialize: function(element, options){
            this.setOptions(options);

            element = this.element = document.id(element);
            this.wrapper = this.options.wrapper;

            var links = this.links = element.getElements('a');
            var elements = this.elements = [];
            var prop = this.options.navElementParse;


            Array.each(links, function(el){
                var target = document.id(read.apply(this, [prop, el]));
                if (target) {
                    elements.push(target);
                    el.store("navMonitor", target);
                }
            });

            this.attach();
        },

        attach: function(){
            if (!this.boundScroll) this.boundScroll = this.scroll.bind(this);
            this.wrapper.addEvent('scroll', this.boundScroll);
        },

        detach: function(){
            if (this.boundScroll) this.wrapper.removeEvent('scroll', this.boundScroll);
        },

        scroll: function(){
            var top = this.wrapper.getScroll().y,
                index;
            this.elements.some(function(el, i){
                if (!el) return false; // skip empty entry
                var y = el.getPosition(this.wrapper == window ? document.body : this.wrapper).y;
                if (y < top) index = i;
                return y >= top;
            }, this);

            if (index != this.active){
                if (this.active != null) {
                    this.links[this.active].removeClass('active');
                    this.fireEvent("inactive", this.links[this.active]);
                }
                this.active = index;
                if (index != null) {
                    this.links[index].addClass('active');
                    this.fireEvent("active", this.links[index]);
                }
            }

        }

    });



})();
