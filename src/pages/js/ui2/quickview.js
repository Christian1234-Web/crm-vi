/* ============================================================
 * Pages Quick View : v4.0.0
 * ============================================================
 * Author - Ace
 * Copright 2018
 */
var Quickview = function(element, options) {
    this.$element = pg.queryElement(element);
    this.defaults = {
        notes: '#note-views',
        alerts: '#alerts',
        chat: '#chat',
        notesList: '.list',
        noteEditor: '.quick-note-editor',
        deleteNoteButton: '.delete-note-link',
        deleteNoteConfirmButton: '.btn-remove-notes',
        newNoteButton: '.new-note-link',
        backButton: '.close-note-link'
    }
    this.options = pg.extend(this.defaults,options);
    this.bezierEasing = [.05, .74, .27, .99];
    var _this = this;

    pg.live('.list > ul > li', 'click', function(e) {
        var note = this.querySelector('.note-preview');
        pg.queryElement(_this.options.noteEditor).innerHTML = note.innerHTML;
        pg.toggleClass(pg.queryElement(_this.options.notes), 'push');
    },pg.queryElement(this.options.notes));

    pg.live('.list > ul > li .checkbox', 'click', function(e) {
        e.stopPropagation();
    },pg.queryElement(this.options.notes));

    pg.live(_this.options.backButton, 'click', function(e) {
        var link = pg.queryElement(_this.options.notes).querySelector('.toolbar > li > a')
        pg.removeClass(link, 'active');
        pg.toggleClass(pg.queryElement(_this.options.notes), 'push')
    },pg.queryElement(this.options.notes));
   

    pg.live(this.options.deleteNoteButton, 'click', function(e) {
        e.preventDefault();
        pg.toggleClass(this,'selected');
        var checkboxes = pg.queryElement(_this.options.notes).querySelectorAll('.list > ul > li .checkbox');
        if(!checkboxes.length) return;
        
        var fadeClass = checkboxes[0].style.display === 'none' ? "fadeIn" : "fadeOut";

        checkboxes.forEach(function(checkbox) {
            Velocity.animate(checkbox, fadeClass, { 
                duration: 200,
                complete:function(){                  
                } 
            });
        });

        var deleteConfirm = pg.queryElement(_this.options.deleteNoteConfirmButton)
            Velocity.animate(deleteConfirm, fadeClass, { 
                duration: 200,
                complete:function(){   
                    pg.removeClass(deleteConfirm, 'hide')               
                } 
            });
        
    });

    pg.live(this.options.newNoteButton, 'click', function(e) {
        e.preventDefault();
        pg.queryElement(_this.options.noteEditor).innerHTML = ''
    });

    pg.live(this.options.deleteNoteConfirmButton, 'click', function(e) {
        var checked = pg.queryElement(_this.options.notes).querySelectorAll('input[type=checkbox]:checked')
        for(var i=0; i<checked.length; i++){
            pg.getClosest(checked[i], 'li').remove();
        }
    });

    pg.live('.toolbar > li > a', 'click', function(e) {
        //e.preventDefault();
        var command = this.getAttribute('data-action');
        document.execCommand(command, false, null);
        pg.toggleClass(this, 'active');
    }, pg.queryElement(this.options.notes));

    var toggleEvent = function(e) {
        var elem = this.getAttribute('data-toggle-element');
        pg.toggleClass(pg.queryElement(elem),'open');
        e.preventDefault();
    }
    var toggles = document.querySelectorAll('[data-toggle="quickview"]');
    toggles.forEach(function(toggle) {
        pg.on(toggle, 'click', toggleEvent)
        pg.on(toggle, 'touchstart', toggleEvent)
    });
    

}
