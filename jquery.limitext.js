/*!
* jQuery Limitext Plugin
* Examples at: http://chillysheep.github.com/Limitext/
* View project on GitHub at: https://github.com/chillysheep/Limitext
*/

(function( $ ) {
  $.fn.limitext = function(options) {
    var defaults = {
      output : $('.lt-output'),
      limit : 250
    }
    var options = $.extend(defaults,  options);
    return this.each(function() {
       var charlimit = options.limit;
       var output = options.output;
       var _this = $(this);
       
       (_this.val() !== 0) ? output.html(charlimit - _this.val().length) : output.html(charlimit);

       _this.on('input keyup propertychange', function(){
        if (charlimit < _this.val().length) {
          _this.val(_this.val().substr(0, charlimit));
        }
        else {
          output.html(charlimit - _this.val().length);   
          }
       });
    });         
  };
})( jQuery ); 