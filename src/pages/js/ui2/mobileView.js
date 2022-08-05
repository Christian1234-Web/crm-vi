/* ============================================================
 * Pages Mobile View : v4.0.0
 * ============================================================
 * Author - Ace
 * Copright 2018
 */
var MobileView = function(element, options) {
    this.element = pg.queryElement(element);
    this.defaults = {
        //Returns Target View & Animation Type
        onNavigate: function(view, animation) {}
    }
    this.options = pg.extend(this.defaults,options);
    var self = this;

    if ( !(this.stringMobileView in element ) ) { // prevent adding event handlers twice
        pg.on(this.element,'click',function(e){
            var el = document.querySelector(this.getAttribute('data-view-port'));
            var toView = this.getAttribute('data-toggle-view');
            if (toView != null) {
                // TODO verify this
                var subviews = el.childNodes.pop().querySelectorAll('.view')
                subviews.forEach(function(el) {
                    el.style.display = "none";
                });

                pg.queryElement(toView).style.display = "block"
            }
            else{
                 toView = el 
            }
            var viewAnimation = this.getAttribute('data-view-animation')
            pg.toggleClass(el,viewAnimation);
            self.options.onNavigate(toView, viewAnimation);
            return false;                
        })
    }
    element[this.stringSideBar] = this;
};
