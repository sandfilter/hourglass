require.config({
    paths: {
        jquery: '//cdn.bootcss.com/jquery/3.1.0/jquery.min.js'
    }
});
require(['jquery', 'fastclick'], function ($, FastClick) {
    __funcList && __funcList.length && $.map(__funcList, function (t) {
        "function" === typeof t && t()
    });
    
    //FastClick.attach(document.body);
    
   
});

