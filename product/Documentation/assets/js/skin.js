/*********************************************************** 
 *
 * skin js 
 * 
 * @package  		 default skin for TRUEWordpress Documentation Builder Plugin
 * @Version			 1.0.1
 * @file	 		 skin.js
 * @author   		 TRUEWordpress Team
 * @Author Link 	 http://truewordpress.com
 * @license	 		 GNU General Public License
 * @license url: 	 http://www.gnu.org/licenses/gpl-3.0.html
 ***********************************************************/

 (function($){
	 $(document).ready(function(){
		// go to top
		$("<a></a>").appendTo("#DB-body").attr({"id": "doc-to-top"}).click(function(e){
			e.preventDefault();
			$("html, body").animate({scrollTop: 0}, 1000);
		});

		// left menu
		if($("#doc-menus").length){
			// first top position of menus seciton
			var defaultTop = $("#DB-body .doc-logo-wrapper").outerHeight();
			
			// go to chapter section when click menu
			$("#doc-menus a[href*=#]:not([href=#])").click(function(e){
				e.preventDefault();

				if(location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || 
					location.hostname == this.hostname) {

					var target = $(this.hash);

					if(target.length) {
						$("html, body").animate({
							scrollTop: target.offset().top
						}, 1000);
						return false;
					}
				}
			});
			
			// scrolling 
			var menu_scroll_init = function(){
				var winScrollTop = $(window).scrollTop();
					
				$("#doc-menus").find("a[href*=#]:not([href=#])").each(function(){
					var formSectionID = $(this).attr("href").split("#");
					var formSectionObj = "";
					if(typeof(formSectionID[1]) == "undefined"){
						formSectionObj = $("#" + formSectionID[0].replace(/[^\w\s]/gi, ""));
					} else {
						formSectionObj = $("#" + formSectionID[1]);
					} 

					if(formSectionObj.length && winScrollTop > formSectionObj.offset().top - 10){
						$("#doc-menus a[href*=#]:not([href=#])").removeClass("actived");
						$(this).addClass("actived");
					} else {
						$(this).removeClass("actived");
					}
				});
				
				if(winScrollTop > $(window).height()){
					$("#doc-to-top").fadeIn(1000);
				} else {
					$("#doc-to-top").fadeOut(1000);
				}

				if(winScrollTop > defaultTop && window.innerWidth > 860){
					$("#doc-menus").addClass("fixed-menus");
				} else {
					$("#doc-menus").removeClass("fixed-menus");
				}
			};
					
			menu_scroll_init();

			$(window).scroll(function(){
				menu_scroll_init();
			});

			///////
		}

	 });
 })(jQuery);