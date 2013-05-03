/**
 * Styled checkbox jQuery plugin
 * @author Netanel Edri <www.netaneledri.net>
 * @version : 1.0
**/

;(function ( $, window, document, undefined ) {
    
    var pluginName = "styledCheckbox",
    
    defaults = {
        checkedCls : 'styledCheckbox-checked',
        uncheckedCls : 'styledCheckbox-unchecked',
        hideCls : 'styledCheckbox-hide',
        wrapperCls : 'styledCheckbox-wrapper',
        debug : false,
        beforeChange : function(){ return true; },
        afterChange : function(){}
    };

    function Plugin( element, options ) {
        this.element = $(element);
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        init(this);
    }

    function init(that)
    {
        var el = that.element , options = that.options;

        that.log('start init','info');

        var wrapperTag = $("<div></div>",{
            class : options.wrapperCls
        });
        
        if(el.attr('type') === 'checkbox' && el.is(':checkbox')){

            el.addClass(options.hideCls).wrap(wrapperTag);

            var wrapper = el.parent();

            wrapper.click(function(){
                el.click();
            });

            el.bind("change",function(){

                that.log('input change checked mode','info');
                that.log('beforeChange method exec');

                if(options.beforeChange(el.data(pluginName)))
                {
                    if(el.is(':checked')){
                        that.log('change wrapper class to checked','info');
                        wrapper.removeClass(options.uncheckedCls).addClass(options.checkedCls);
                    } else {
                        that.log('change wrapper class to unchcked','info');
                        wrapper.removeClass(options.checkedCls).addClass(options.uncheckedCls);
                    }

                    that.log('afterChange method exec');
                    options.afterChange(el.data(pluginName));
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
    }

    Plugin.prototype = {
        log : function(msg,type){
            if(this.options.debug){
                console.log('@styledCheckboxPlugin ' + (type || 'info') + ' : ' + msg);
            }
        },
        execChecked : function(){
            if(!this.element.is(':checked')){
                this.element.parent().click();
            }
        },
        execUnchecked : function(){
            if(this.element.is(':checked')){
                this.element.parent().click();
            }
        },
        destroy : function(){
            this.element.removeClass(this.options.hideCls).unbind("change").unwrap();
        },
        activate : function(){
            init(this);
        },
        isChecked : function(){
            return this.element.is(':checked');
        },
        isUnchecked : function(){
            return !this.element.is(':checked');
        },
        getValue : function(){
            return this.element.val();
        },
        setValue : function(value){
            this.element.val(value);
            return this;
        },
        getInput : function(){
            return this.element;
        }
    };

    $.fn[pluginName] = function ( param ) {
        if($.isPlainObject(param))
        {
            return this.each(function () {
                if (!$.data(this, pluginName)) {
                    $.data(this, pluginName, new Plugin( this, param ));
                    return $.data(this,pluginName);
                }
            });
        } else {
            if ($.data(this, pluginName)) {
                return this.data(pluginName);
            }
        }
    };

})( jQuery, window, document );