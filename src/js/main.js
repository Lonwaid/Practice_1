$(document).ready(function() {
var button = document.querySelector('#button');
var modalForm = document.querySelector('#modal-form');
var modalThanks = document.querySelector('#modal-thanks');
var close = document.querySelector('#close');
var closeThanks = document.querySelector('#close-thanks');

button.addEventListener('click', function() {
	modalForm.classList.add('modal_active');
	// console.log('');
});
// button.addEventListener('click', function() {
// 	setTimeout(second_passed, 5000);
// });	
close.addEventListener('click', function() {
	modalForm.classList.remove('modal_active');
});
closeThanks.addEventListener('click', function() {
	modalThanks.classList.remove('modal_active');
});
// function second_passed() {
// 	modalForm.classList.remove('modal_active');
// };

new WOW().init();

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
	$('#the-modal-form').validate({
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

	var reviews = $('.advantages');
	var reviewsTop = reviews.offset().top;
	$(window).bind('scroll', function () {
		var windowTop = $(this).scrollTop();
		if (windowTop > reviewsTop) {
			$('#map').html('<script async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae8566515bab5baa33009152692c3122625879a333b551a1c6bdbff4df7e8992a&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"></script>');
			$(window).unbind('scroll');
		}
	});

	$('#offer-form').on('submit', function name(event) {
		event.preventDefault();

		const offerName = document.getElementById('offerName'),
		offerPhone = document.getElementById('offerPhone');

			if (offerName.value !== '' && offerPhone.value !== '') {

				$.ajax({
					type: "POST",
					url: "mail.php",
					data: $(this).serialize(),
					success: function (response) {
						console.log('Прибыли данные: ' + response);
						$('#offer-form')[0].reset();
						modalThanks.classList.add('modal_active');

					},
					error: function(jqXHR, textStatus, errorThrown) {
						console.error(jqXHR + " " + textStatus);
					},
				});

			}	else {
				console.log('Введите данные');
			}
	});

	$('#the-modal-form').on('submit', function name(event) {
		event.preventDefault();

		const modalName = document.getElementById('modalName'),
			modalPhone = document.getElementById('modalPhone');

		if (modalName.value !== '' && modalPhone.value !== '') {

			$.ajax({
				type: "POST",
				url: "mail1.php",
				data: $(this).serialize(),
				success: function (response) {
					console.log('Прибыли данные: ' + response);
					$('#the-modal-form')[0].reset();
					modalThanks.classList.add('modal_active');
					modalForm.classList.remove('modal_active');
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.error(jqXHR + " " + textStatus);
				},
			});

		}	else {
			console.log('Введите данные');
		}
	});
	$('#brif-form').on('submit', function name(event) {
		event.preventDefault();

		const inputName = document.getElementById('brifName'),
			inputPhone = document.getElementById('brifPhone'),
			inputEmail = document.getElementById('brifEmail');

		if (inputName.value !== '' && inputPhone.value !== '' && inputEmail.value !== '') {

			$.ajax({
				type: "POST",
				url: "mail2.php",
				data: $(this).serialize(),
				success: function (response) {
					console.log('Прибыли данные: ' + response);
					$('#brif-form')[0].reset();
					modalThanks.classList.add('modal_active');
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.error(jqXHR + " " + textStatus);
				},
			});

		}	else {
			console.log('Введите данные');
		}
	});
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
