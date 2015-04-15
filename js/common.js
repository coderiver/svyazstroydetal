head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

// load tabs
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
// tabs action
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

// password strength plugin init
	(function() {
		var options = {};
	   	options.ui = {
			container: ".js-password",
			showVerdictsInsideProgressBar: true,
			viewports: {
	   			progress: ".js-password-progress"
			}
		};
		$('.js-password :password').pwstrength(options);
	})();

// accordeon		
	$(".js-accord-toggle").on("click",function () {
		$(".js-accord-toggle").parent().removeClass("is-open");
		$(".js-accord-list").slideUp(200);
	    $(this).parent().addClass("is-open");
	    $(this).parent().find(".js-accord-list").slideDown(200);
	    return false;
	});

// validation form
	function validate() {
		$('.js-validate').each(function(){
			if ($(this).length > 0) {
				$(this).validate({
					errorClass: 'has-error',
					validClass: 'is-success',
					rules: {
						username: {
							minlength: 2
						},
						any: {
							minlength: 2
						},
						password: {
							minlength: 5
						},
						confirm_password: {
							minlength: 5,
							equalTo: '#password'
						},
						email: {
							email: true
						},
						tel: {
							minlength: 2,
						},
						address: {
							minlength: 2
						},
						message: {
							minlength: 4
						},
						field: {
							required: true
						},
						// fruit: {
						//   required: true
						// }
					}
					// messages: {
					// 	firstname: 'Вас так зовут?',
					// 	lastname: 'У вас такая фамилия?',
					// 	fathername: 'У вас такое отчество?',
					// 	password: {
					// 		required: 'Введите пароль',
					// 		minlength: 'Минимум 5 символов'
					// 	},
					// 	confirm_password: {
					// 		 required: 'Пароли не совпадают',
					// 		 minlength: 'Минимум 5 символов',
					// 		 equalTo: 'Пароли не совпадают'
					// 	},
					// 	email: 'Неверный формат',
					// 	address: 'Это Ваш адрес?',
					// 	any: 'Заполните поле',
					// 	company: 'Заполните поле',
					// 	tel: {
					// 		required: 'Заполните поле',
					// 	},
					// 	message: {
					// 		required: 'Заполните поле',
					// 		minlength: 'Заполните поле'
					// 	}
					// }
				});
			}
		});
	}
		
	validate();


});