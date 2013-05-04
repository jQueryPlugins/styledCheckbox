styledCheckbox jQuery Plugin
==============
The styledCheckbox is a jQuery plugin that allows you to stylize and customize the regular html checkbox inputs.
The plugin is very easy to use and contains public api methods and many customizing options.

Basic Usage
-------------------------
* include the plugin css file : 

```
<link rel="stylesheet" href="styledCheckbox.css">
```

* include the jQuery library file & plugin file : 

```
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js">
<script src="styledCheckbox.js"></script>
```

* initialize the plugin on all checkboxes or specific one : 

```
$(document).ready(function(){
    $("input[type=checkbox]").styledCheckbox(options);
    $(".checkbox-class").styledCheckbox(options);
    $("#specificCheckboxID").styledCheckbox(options);
});
```

Plugin options
-------------------------
When initializing the plugin on checkbox elements you can customize some options.

<table>
    <tr>
        <th>Option key</th><th>Option description</th><th>Default value</th>
    </tr>
    <tr>
        <td>checkedCls</td><td>The checkbox css class on checked state</td><td>styledCheckbox-checked</td>
    </tr>
    <tr>
        <td>uncheckedCls</td><td>The checkbox css class on unchecked state</td><td>styledCheckbox-unchecked</td>
    </tr>
    <tr>
        <td>hideCls</td><td>The checkbox css class for hide original input</td><td>styledCheckbox-hide</td>
    </tr>
    <tr>
        <td>wrapperCls</td><td>The checkbox wrapper element css class</td><td>styledCheckbox-wrapper</td>
    </tr>
    <tr>
        <td>debug</td><td>Debug mode output plugin logs to the console</td><td>false</td>
    </tr>
    <tr>
        <td>beforeChange</td><td>Method that called before the input changed state</td><td>function(){ return true }</td>
    </tr>
    <tr>
        <td>afterChange</td><td>Method that called after the input changed state</td><td>function(){}</td>
    </tr>
</table>
