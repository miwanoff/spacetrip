$(document).ready(function(){
	var offset = 200; // координата сдвига по оси Y
	var duration = 300; //время выполнения
	$('#totop').fadeOut(0);	

 /* Добавить плавный скроллинг ко всем якорным ссылкам*/
  $("a[href^='#']").on('click', function(event) {
    //this.hash - атрибут 'href' ссылки
	if (this.hash !== "") {//проверяем, не пустое ли поле 'href'	   
		
		var hash = this.hash;//сохраняем атрибут
		
		// Используем метод jQuery animate(), чтобы добавить плавный скроллинг
		$('html, body').animate({
		  scrollTop: $(hash).offset().top // устанавливаем новое положение документа по якорю
		}, 900, function(){ //900-число милисикунд - время анимации
		
		window.location.hash = hash; //добавляем нужную локацию к окну браузера
	  });
	}
  });
  $(window).scroll(function() { // если происходит скроллинг
	  $(".slideanim").each(function(){ // для каждого блока с классом slideanim
		var pos = $(this).offset().top; // считываем его координату по оси Y в окне браузера

		var winTop = $(window).scrollTop(); // текущую верхнюю координату окна браузера (верх страницы)

		if (pos < winTop + 500) { //если до верха страницы остается 500px, 
		  $(this).addClass("slide"); //добавляем к блоку класс slide с анимцией
		}
	  });
	  
	  if ($(this).scrollTop() > offset) { 
			$('#totop').css("opacity", "0.8"); // возвращаем прозрачность 
			$('#totop').fadeIn(duration); // функция плавно исчезает
		} else {  
			$('#totop').fadeOut(duration); // функция плавно появляется
		}
		if ($(this).scrollTop() > offset) {
			$('#leaf').removeClass('logo');
			$('#leaf').addClass('logosmall');
		}
		else{
			$('#leaf').removeClass('logosmall');
			$('#leaf').addClass('logo');
	}
	/* Скроллировать фоновые слои с разной скоростью */
		var winTop = $(window).scrollTop();
		$('.jumbotron').css('background-position','center '+ -(winTop*.5)+'px');

		$('.mov_slideInRight').each(function(){// для каждого блока с классом mov_slideInRight
		  var pos = $(this).offset().top;// считываем его координату по оси Y в окне браузера
		  if (pos < winTop + 600) { //если до верха страницы остается 600px,
			$(this).addClass('slideInRight'); //добавляем к блоку класс с анимцией slideInRight
		  }
		});
	});

})
