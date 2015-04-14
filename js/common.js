head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	 function tabsLoad() {
	     var hash = window.location.hash;
	     if (hash) {
	         $('[href="'+hash+'"]').parents(".js-tabs-group").find(".js-tabs-content").hide();
	         $('[data-id="'+hash+'"]').show();
	         $('[href="'+hash+'"]').parents(".js-tabs").find("li").removeClass("is-active");
	         $('[href="'+hash+'"]').parent().addClass("is-active");
	     }
	     else {
	         $('.js-tabs li:first').addClass("is-active");
	         $('.js-tabs').next().show();
	     }
	     
	 }
	tabsLoad();
	// alert(hash);
	 $('.js-tabs a').on("click",function (e) {
	     var content = $(this).attr("href");
	     $(this).parents(".js-tabs").find("li").removeClass("is-active");
	     $(this).parent().addClass("is-active");
	     $(this).parents(".js-tabs-group").find(".js-tabs-content").hide();
	     $('[data-id="'+content+'"]').show();
	     window.location.hash = this.hash;
	     return false;
	 });

});