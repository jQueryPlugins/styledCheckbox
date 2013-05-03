/**
 * Styled checkbox plugin
 * @author Netanel Edri <netanelweb@gmail.com>
**/

;(function ( $, window, document, undefined ) {
    var pluginName = "styledCheckbox",
    
    defaults = {
        checkedCls : 'styledCheckbox-checked',
        uncheckedCls : 'styledCheckbox-unchecked',
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