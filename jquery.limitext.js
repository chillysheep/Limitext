/*!
* jQuery Limitext Plugin
* Examples at: http://limitext.jbaldwin.me
* View project on GitHub at: https://github.com/chillysheep/Limitext
*/

(function(a){a.fn.limitext=function(b){var c={output:a(".lt-output"),limit:250};var b=a.extend(c,b);return this.each(function(){var c=b.limit;var d=b.output;var e=a(this);e.val()!==0?d.html(c-e.val().length):d.html(c);e.on("input keyup propertychange",function(){if(c<e.val().length){e.val(e.val().substr(0,c))}else{d.html(c-e.val().length)}})})}})(jQuery)