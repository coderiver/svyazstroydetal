head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	function tabsLoad() {
	    var hash = window.location.hash;
	    if (hash) {
	        var tabsGroup = $('[href="'+hash+'"]').parents(".js-tabs").attr("data-tabs-group");
	        $("."+tabsGroup).find(".js-tabs-cont").hide();
	        $('[data-id="'+hash+'"]').show();
	        $('[href="'+hash+'"]').parents(".js-tabs").find("a").removeClass("is-active");
	        $('[href="'+hash+'"]').addClass("is-active");
	    }
	     else {
	        $('.js-tabs a:first').addClass("is-active");
	        $('.js-tabs-cont:first').show();
	    }
	     
	}
	tabsLoad();
	$('.js-tabs a').on("click",function (e) {
	    var content = $(this).attr("href");
	    var tabsGroup = $('[href="'+content+'"]').parents(".js-tabs").attr("data-tabs-group");
	   
	    $(this).parents(".js-tabs").find("a").removeClass("is-active");
	    $(this).addClass("is-active");

	    $("."+tabsGroup).find(".js-tabs-cont").hide();
	    $('[data-id="'+content+'"]').fadeIn(500);

	    window.location.hash = this.hash;
	    return false;
	});

	$(".js-accord-toggle").on("click",function () {
		$(".js-accord-toggle").parent().removeClass("is-open");
		$(".js-accord-list").slideUp(200);
	    $(this).parent().addClass("is-open");
	    $(this).parent().find(".js-accord-list").slideDown(200);
	    return false;
	});


});