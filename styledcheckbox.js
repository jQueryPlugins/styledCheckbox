/**
 * Styled checkbox plugin
 * @author Netanel Edri <netanelweb@gmail.com>
**/

;(function ( $, window, document, undefined ) {
    var pluginName = "styledCheckbox",
    
    defaults = {
        checkedCls : 'styledCheckbox-checked',
        uncheckedCls : 'styledCheckbox-unchecked',
        hideCls : 'styledCheckbox-hide',
        wrapperCls : 'styledCheckbox-control',
        onChange : function(){}
    };

    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function(){
            var that = this , el = that.element , options = that.options;

            that.log('start init','info');

            var wrapperTag = '<div class="' + options.wrapperCls + '"></div>';
            
            if(el.attr('type') === 'checkbox' && el.is(':checkbox')){

                el.addClass(options.hideCls).wrap(wrapperTag).change(function(){

                    that.log('input change checked mode','info');

                    var wrapper = el.parent();

                    if(el.is(':checked')){
                        wrapper.removeClass(options.uncheckedCls).addClass(options.checkedCls);
                    } else {
                        wrapper.removeClass(options.checkedCls).addClass(options.uncheckedCls);
                    }

                });

                if(el.is(':checked')){
                    that.log('input is already checked so add the checked class','info');
                    el.parent().addClass(options.checkedCls);
                }

            } else {
                that.log('The element is not a checkbox','error');
            }

            that.log('finish init','info');
        },
        log : function(msg,type){
            console.log('@styledCheckboxPlugin ' + type + ' : ' + msg);
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );