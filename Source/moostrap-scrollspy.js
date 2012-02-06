/*
---

name: mootsrapScrollspy

description: port of twitter scroll spy to mootools

authors: Arian, Dimitar Christoff

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

    var moostrapScrollspy = this.mootsrapScrollspy = new Class({

        initialize: function(element, wrapper){
            element = this.element = document.id(element);
            this.wrapper = wrapper || window;

            var links = this.links = element.getElements('a');
            var elements = this.elements = [];

            links.each(function(el){
                var href = el.get('href'), target;
                if (href.slice(0, 1) == '#') target = document.id(el.get('href').slice(1));
                elements.push(target);
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
                if (this.active != null) this.links[this.active].removeClass('active');
                this.active = index;
                if (index != null) this.links[index].addClass('active');
            }

        }

    });



})();