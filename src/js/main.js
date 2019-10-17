var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function() {
	modal.classList.add('modal_active');
	// console.log('');
});
button.addEventListener('click', function() {
	setTimeout(second_passed, 5000);
});	
close.addEventListener('click', function() {
	modal.classList.remove('modal_active');
});
function second_passed() {
	modal.classList.remove('modal_active');
};

new WOW().init();
$(document).ready(function() {
	// Валидация форм
	$('#brif-form').validate({
		rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 15,
			},
			email: {
				required: true,
				email: true,
			},
			phone: {
				required: true,
			},
		},
		messages: {
			username: {
				required: "Укажите имя",
				minlength: jQuery.validator.format("Осталось {0} буквы"),
				maxlength: jQuery.validator.format("Не длинее 15-ти букв"),
			}, 
			phone: {
				required: "Введите номер телефона",
			},
			
			email: {
				required: "Введите email",
				email: "Введите действующий email",
			},
		},
		errorClass: "invalid",
		errorElement: "div",
	});
	$('#offer-form').validate({
		rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 15,
			},
			email: {
				required: true,
				email: true,
			},
			phone: {
				required: true,
			},
		},
		messages: {
			username: {
				required: "Укажите имя",
				minlength: jQuery.validator.format("Осталось {0} буквы"),
				maxlength: jQuery.validator.format("Не длинее 15-ти букв"),
			}, 
			phone: {
				required: "Введите номер телефона",
			},
			
			email: {
				required: "Введите email",
				email: "Введите действующий email",
			},
		},
		errorClass: "invalid",
		errorElement: "div",
	});
	$('#modal-form').validate({
		rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 15,
			},
			email: {
				required: true,
				email: true,
			},
			phone: {
				required: true,
			},
		},
		messages: {
			username: {
				required: "Укажите имя",
				minlength: jQuery.validator.format("Осталось {0} буквы"),
				maxlength: jQuery.validator.format("Не длинее 15-ти букв"),
			}, 
			phone: {
				required: "Введите номер телефона",
			},
			
			email: {
				required: "Введите email",
				email: "Введите действующий email",
			},
		},
		errorClass: "invalid",
		errorElement: "div",
	});
	// Маска для телефона
	$('.phone').mask('+7 (999) 999-99-99');

	var reviews = $('.reviews');
	var reviewsTop = reviews.offset().top;
	$(window).bind('scroll', function () {
		var windowTop = $(this).scrollTop();
		if (windowTop > reviewsTop) {
			$('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae8566515bab5baa33009152692c3122625879a333b551a1c6bdbff4df7e8992a&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"></script>')
			console.log('Докрутили');
			$(window).unbind('scroll')
		}
	});




	$('#offer-form').on('submit', function name(event) {
		event.preventDefault();

		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize(),
			success: function (response) {
				console.log('Прибыли данные: ' + response);
				$('#offer-form')[0].reset();
				// modal.classList.add('modal_active');
				$(".success").text(response);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.error(jqXHR + " " + textStatus);
			}
		});
	})
	// слайдер
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.arrows__left'),
		nextArrow: $('.arrows__right'),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
				},
				{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
				},
		]
	});
});
