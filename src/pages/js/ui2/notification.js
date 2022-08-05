/* ============================================================
 * Pages Notifications : v4.0.0
 * ============================================================
 * Author - Ace
 * Copright 2018
 */
var Notification = function(container, options) {
    this.container = typeof container === 'string' ? pg.queryElement(container) : container;
    this.container[this.stringNotification] = this;
    this.init(options);
};

Notification.prototype = {
    defaults: {
        style: 'simple',
        message: null,
        position: 'top-right',
        type: 'info',
        showClose: true,
        timeout: 4000,
        onShown: function() {},
        onClosed: function() {}
    },

    init: function(options) {
        //set defaults
        this.options = pg.extend(this.defaults,options);
        this.notification = document.createElement('div')
        this.notification.className = "pgn push-on-sidebar-open"
        
        if (!this.container.querySelectorAll('.pgn-wrapper[data-position=' + this.options.position + ']').length) {
            this.wrapper = document.createElement('div');
            this.wrapper.className = "pgn-wrapper";
            this.wrapper.dataset.position=this.options.position;
            this.container.append(this.wrapper);
        } else {
            this.wrapper = document.querySelector('.pgn-wrapper[data-position=' + this.options.position + ']');
        }

        this.alert = document.createElement('div');
        pg.addClass(this.alert, 'alert-' + this.options.type)
        pg.addClass(this.alert, 'alert')

        if (this.options.style == 'bar') {
            new BarNotification(this);
        } else if (this.options.style == 'flip') {
            new FlipNotification(this);
        } else if (this.options.style == 'circle') {
            new CircleNotification(this);
        } else if (this.options.style == 'simple') {
            new SimpleNotification(this);
        } else { // default = 'simple'
            new SimpleNotification(this);
        }

        var self = this; 
        // Notification styles
        function SimpleNotification(self) {
            
            pg.addClass(self.notification, 'pgn-simple');

            self.alert.append(self.options.message);
            if (self.options.showClose) {
                var close = document.createElement('button')
                close.setAttribute('type', 'button')
                close.className = 'close'
                close.dataset.dismiss="alert"

                var icon1 = document.createElement('span')
                icon1.setAttribute('aria-hidde', 'true')
                icon1.innerHTML = '&times;'
                var icon2 = document.createElement('span')
                icon2.className = 'sr-only'
                icon2.innerHTML = 'Close'

                close.appendChild(icon1)
                close.appendChild(icon2);

                self.alert.prepend(close);
            }

        }

        function BarNotification(self) {

            pg.addClass(self.notification, 'pgn-bar');
            pg.addClass(self.alert, 'alert-' + self.options.type);

            var container = document.createElement('div')
            container.className = "container"

            container.innerHTML = '<span>' + self.options.message + '</span>';

            if (self.options.showClose) {
                var close = document.createElement('button')
                close.setAttribute('type', 'button')
                close.className = 'close'
                close.dataset.dismiss="alert"
                close.innerHTML = '<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>'
            
                container.append(close)
            }
            self.alert.append(container);

        }

        function CircleNotification(self) {

            pg.addClass(self.notification, 'pgn-circle');

            var table = '<div>';
            if (self.options.thumbnail) {
                table += '<div class="pgn-thumbnail"><div>' + self.options.thumbnail + '</div></div>';
            }

            table += '<div class="pgn-message"><div>';

            if (self.options.title) {
                table += '<p class="bold">' + self.options.title + '</p>';
            }
            table += '<p>' + self.options.message + '</p></div></div>';
            table += '</div>';

            if (self.options.showClose) {
                table += '<button type="button" class="close" data-dismiss="alert">';
                table += '<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>';
                table += '</button>';
            }


            self.alert.innerHTML = table;
            var clearfix = document.createElement('div')
            clearfix.className = 'clearfix'
            // self.alert.parentNode.insertBefore(clearfix, self.alert.nextSibling);

        }

        function FlipNotification(self) {
            pg.addClass(self.notification, 'pgn-flip');
            self.alert.innerHTML = "<span>" + self.options.message + "</span>";
            if (self.options.showClose) {
                var close = document.createElement('button')
                close.setAttribute('type', 'button')
                close.className = 'close'
                close.dataset.dismiss="alert"
                close.innerHTML = '<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>'

                self.alert.prepend(close);
            }
        }

        this.notification.append(this.alert);
        
        function alignWrapperToContainer(){
            var containerPosition = self.container.getBoundingClientRect();
            var containerHeight = self.container.getBoundingClientRect().height;
            var containerWidth = self.container.getBoundingClientRect().width;

            var containerTop = containerPosition.top
            var containerBottom = self.container.parentNode.getBoundingClientRect().height - (containerTop + containerHeight)
            var containerLeft = containerPosition.left
            var containerRight = self.container.parentNode.getBoundingClientRect().width - (containerLeft + containerWidth)

            if(/top/.test(self.options.position)){
            self.wrapper.style.top = containerTop
            }
            if(/bottom/.test(self.options.position)){
            self.wrapper.style.bottom = containerBottom
            }
            if(/left/.test(self.options.position)){
            self.wrapper.style.left = containerLeft
            }
            if(/right/.test(self.options.position)){
            self.wrapper.style.right = containerRight
            }
        }
        if(pg.hasClass('body', 'horizontal-menu')){
            alignWrapperToContainer()
            pg.on(window, 'resize', alignWrapperToContainer)
        }

        // bind to Bootstrap closed event for alerts
        pg.live('.close', 'click', function() {
            self.notification.remove();
            self.options.onClosed();
            // refresh layout after removal
        });

        return this; // enable chaining
    },

    show: function() {
        
        // TODO: add fadeOut animation on show as option
        this.wrapper.prepend(this.notification);

        this.options.onShown();

        if (this.options.timeout != 0) {
            var _this = this;
            // settimeout removes scope. use .bind(this)
            setTimeout(function() {
                Velocity.animate(this.notification, "fadeOut", { 
                    duration: 300,
                    complete:function(){
                        this.notification.remove();
                        _this.options.onClosed();                
                    } 
              });
            }.bind(this), this.options.timeout);
        }

    }

};