(function ( $ ) {

    $.fn.scrollNavigation = function(options) {
        
        var defaults = {
            speed        : 1000
        };
        
        var settings = $.extend( {}, defaults, options );
        
        return this.each( function() {
            var win = $( window );
            var elem = $( this );
            var elem_a = "#"+elem.attr("id")+" a";
            var wh = win.height();
            wh=wh-60;
            elem.css("top",wh+"px");
            
            $(elem_a).click(function(event){
				var link_outerpage = $(this).attr("data-outerpage");
			//	var newWindow = $(this).attr("data-newWindow");
				if(link_outerpage=='true')
				{
//					if (newWindow=='true') {
//						window.open($(this).attr('href'));
//					}
				}
				else{
                event.preventDefault();
					var link_add = $(this).attr("href");
					var pos = $(link_add).offset().top;
					$('html, body').animate({scrollTop: pos}, settings.speed);
				}
            });
            
            win.scroll(function() {
                var topvalue = win.scrollTop();
                if(wh<=topvalue)
                {
                    $(elem).css({"position":"fixed","top":"0px"});
                }
                else{
                    $(elem).css({"position":"absolute","top":wh+"px"});
                }
            });
            
        });
    };
 
}( jQuery ));
