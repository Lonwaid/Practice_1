<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Ремонт квартир</title>
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/slick.css">
	<link rel="stylesheet" href="css/animate.css">
	<!-- <link rel="stylesheet" href="css/owl.carousel.min.css"> -->
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	
	<nav class="navbar">

		<div class="container">

			<div class="navbar-block">

				<div class="navbar__logo">
					
					<img src="img/logo.png" alt="Логотип">

				</div>
				<!-- /.navbar__logo -->
				<div class="navbar__info">
					
					<div class="navbar__contacts">
						
						<span class="navbar__address">Калуга, Москва, МО</span>
						
						<a href="tel:+7(495)42-251-31" class="navbar__phone">+7 (495) 42-251-31</a>

					</div>
					<button class="button navbar__button" id="button">Перезвоните мне</button>

				</div>
				<!-- /.navbar__info -->
			</div>
			<!-- /.navbar-block -->
		</div>
		<!-- /.container -->
	</nav>
	<!-- /.navbar -->
	<main>
		
		<section class="hero">

			<div class="container">

				<div class="hero-block">

					<div class="hero-text wow fadeInLeft">
						
						<h1 class="hero-text__title">
							
							Спасибо за заявку

						</h1>

						<span class="hero-text__subtitle">
							
							мы перезвоним через 15 минут

						</span>

						<ul class="hero-list hero-list_margin">

							<li class="hero-list__item hero-list__item_item1">

								<div class="hero-list__image">

									<img src="img/hero/icon_clock.png" alt="">

								</div>

								<span class="hero-list__text hero-list__text_margin-t-2">Точно соблюдаем сроки</span>

							</li>

							<li class="hero-list__item hero-list__item_item2">

								<div class="hero-list__image">
									<img src="img/hero/icon_calc.png" alt="">

								</div>

								<span class="hero-list__text hero-list__text_margin-t-4">Рассчитаем смету на работы<br> и материалы в день обращения</span>

							</li>

							<li class="hero-list__item hero-list__item_item3">

								<div class="hero-list__image">
									<img src="img/hero/icon_palette.png" alt="palette">

								</div>

								<span class="hero-list__text hero-list__text_margin-t-4">Предложим более 100 вариантов исполнения дизайна Вашего жилья</span>
							</li>
						</ul>

					</div>
					<!-- /.hero-text -->
					<div class="hero-image hero-image_sizes wow fadeInRight">
						
						<img class="hero-image__image"src="img/hero/hero_image.png" alt="План квартиры">

					</div>
					<!-- /.hero-image -->
				</div>
				<!-- /.hero-block -->
			</div>
			<!-- /.container -->
		</section>
		<!-- /.hero -->

	</main>

	<footer class="footer">

		<div class="map" id="map">
			
			<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae8566515bab5baa33009152692c3122625879a333b551a1c6bdbff4df7e8992a&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"></script>

		</div>
		<!-- /#map.map -->
		<div class="container">

			<div class="contacts-block">

				<div class="contacts">
					
					<h3 class="contacts__title">

						Приезжайте к нам в гости! Проконсультируем Вас по&nbsp;всем вопросам ремонта</h3>	

					<ul class="contacts-list contacts-list__footer">

							<li class="contacts-list__item">

								<span class="contacts-list__icon">
									
									<img src="img/footer/icon_map-placeholder.png" alt="placeholder">
								</span>

								<span class="contacts-list__text">
									
									г. Москва<br> <b>ул. Ленинга, д. 10, корпус 2, оф. 308</b>

								</span>
							</li>
							<!-- /.contacts-list__item -->
							<li class="contacts-list__item">

								<span class="contacts-list__icon">
									
									<img src="img/footer/icon_clock.png" alt="clock">
								</span>
								<span class="contacts-list__text">
									
									Режим работы:<br> <b>с 9:00 до 18:00</b>

								</span>
							</li>
							<!-- /.contacts-list__item -->
							<li class="contacts-list__item">

								<span class="contacts-list__icon">
									
									<img src="img/footer/icon_phone-call-button.png" alt="call-button">

								</span>

								<span class="contacts-list__text">
									
									Телефон:<br>
									 <a href="tel:+7(495)42-251-31"><b>+ 7 (495) 42-251-31</b></a>
								</span>
							</li>
							<!-- /.contacts-list__item -->
						</ul>
						<!-- /.contacts-list -->	

				</div>
				<!-- /.contacts -->
			</div>
			<!-- /.contacts-block -->
		</div>
		<!-- /.container -->
	</footer>
	<!-- /.footer section -->

	
	
	<!-- <script src="js/main.js"></script> -->
	<script
		src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous">
  </script>
  <script src="js/modal.js"></script>
  <!-- <script src="js/owl.carousel.min.js"></script> -->
  <script src="js/slick.min.js"></script>
  <script src="js/wow.min.js"></script>
  <script src="js/jquery.validate.min.js"></script>
  <script src="js/jquery.maskedinput.min.js"></script>
  <script>
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
  </script>
  <!-- script>
  	$(document).ready(function(){
  		$(".owl-carousel").owlCarousel();
  		 	loop:true,
    		margin:10,
    		nav:true,
    		// responsive:{
      //   	0:{
      //       items:1
      //   	},
      //   	600:{
      //       items:3
      //   	},
      //   	1000:{
      //       items:5
      //   	}
    		// }
		});
  </script>  -->
   
</body>
</html>