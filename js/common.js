head.ready(function() {

	$(document).on("click", function(){
		
	});

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
		$(this).parents(".js-accord-group").find(".js-accord").removeClass("is-open");
		$(this).parents(".js-accord-group").find(".js-accord-list").slideUp(200);
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

	function number() { 
        var number = $(".js-number");
        number.each(function(){
            var maxNumber = +($(this).attr("data-max-number"));
            var input = $(this).find("input");
            var plus = $(this).find(".js-plus-number");
            var minus = $(this).find(".js-minus-number");
            plus.on("click", function(){
                var val = +(input.val());
                if (val >= maxNumber) {
                    return false
                }
                else {
                    val += 1;
                    input.val(val);
                }
            });
            minus.on("click", function(){
                var val = +(input.val());
                if (val > 1) {
                    val -= 1;
                    input.val(val);
                }
                else {
                    return false;
                }
            });
            input.on('keyup', function(){
		        var value = $(this).val();
		        var re = /[^0-9,]/;
		        if (re.test(value)) {
			        value = value.replace(re, '');
			        $(this).val(value);
			    }
		    });
		    input.on("change", function(){
                var val = +$(this).val();
                if (val > maxNumber) {
                    val = maxNumber;
                    $(this).val(val);
                }
                if (val == '') {
                    val = 1;
                    $(this).val(val);
                }
            });
        });
    }
    number();


	$(".js-del-parent").on("click", function(){
        $(this).closest(".js-parent").remove();
		return false;
	});

	$(".js-toggle-popup").on("click", function(){
		var popup = $(this).attr("href");
		$(".js-popup").fadeOut(300);
		$("."+popup).fadeIn(300);
		$(".js-overlay").fadeIn(300);
		return false;
	});

	$(".js-overlay").on("click", function(event){
		$(".js-popup").fadeOut(300);
		$(this).fadeOut(300);
	});

	$(".js-close-popup").on("click", function(){
		$(".js-popup").fadeOut(300);
		$(".js-overlay").fadeOut(300);
		return false;
	});

	$(".js-select select").on("change", function(){
		var text = $(this).val();
		$(this).parents(".js-select").find(".js-select-text").text(text);
		return false;
	});

});