$(document).ready(function() {
	$('.repair-work #phone').inputmask({"mask": "+7(999) 999-9999"});
	$('.conditions #phone').inputmask({"mask": "+7(999) 999-9999"});
	$('.question #phone').inputmask({"mask": "+7(999) 999-9999"});
	$('.order-form #phone').inputmask({"mask": "+7(999) 999-9999"});
	$('.service-modal .left #phone').inputmask({"mask": "+7(999) 999-9999"});

	$('.owl-carousel').owlCarousel({
      loop:true,
      responsiveClass:true,
      singleItem:true,
      navigation : true, 
          slideSpeed : 300,
          margin: 15,
  })

	$(document).on('click','.photo-mini ul li img',function(){
			self = $(this);
			self.closest('.left').children('img').attr('src', self.attr('src'));
			self.closest('.photo-mini').find('li').removeClass('active');
			self.closest('li').addClass('active');
	});

	$(document).on('click','.completed .slaider .right a',function(event){
		event.preventDefault();
		$(this).closest('.right').children('.hover').css('display', 'inline');
		$(this).closest('.right').children('a').css('display', 'none');
		$(this).closest('.right').find('.dotted').css('display', 'none');
		$(this).closest('.right').children('.opacity').css('display', 'none');
	});

	$(document).on('click','.reviews .slaider .right a',function(event){
		event.preventDefault();
		$(this).closest('.right').children('.hover').css('display', 'inline');
		$(this).closest('.right').children('a').css('display', 'none');
		$(this).closest('.right').find('.dotted').css('display', 'none');
		$(this).closest('.right').children('.opacity').css('display', 'none');
	});

	$('.modal').click( function(event){ 
		event.preventDefault(); 
		$('.overlay').fadeIn(400, 
		 	function(){ 
				$('.order-form') 
					.css('display', 'block') 
					.fadeIn(400);
		});
	});
	$('.closed, .overlay').click( function(){
		$('.order-form')
			.fadeOut(400,  
				function(){
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400); 
				}
			);
	});

	$('.modal-service1').click( function(event){ 
		event.preventDefault();
		$('.overlay').fadeIn(400,
		 	function(){ 
				$('.ser-mod1') 
					.css('display', 'block') 
					.animate({opacity: 1}, 200);
		});
	});
	$('.closed, .overlay').click( function(){ 
		$('.ser-mod1')
			.animate({opacity: 0}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
	$('.modal-service2').click( function(event){ 
		event.preventDefault();
		$('.overlay').fadeIn(400,
		 	function(){ 
				$('.ser-mod2') 
					.css('display', 'block') 
					.animate({opacity: 1}, 200);
		});
	});
	$('.closed, .overlay').click( function(){ 
		$('.ser-mod2')
			.animate({opacity: 0}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
	$('.modal-service3').click( function(event){ 
		event.preventDefault();
		$('.overlay').fadeIn(400,
		 	function(){ 
				$('.ser-mod3') 
					.css('display', 'block') 
					.animate({opacity: 1}, 200);
		});
	});
	$('.closed, .overlay').click( function(){ 
		$('.ser-mod3')
			.animate({opacity: 0}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
	$('.modal-service4').click( function(event){ 
		event.preventDefault();
		$('.overlay').fadeIn(400,
		 	function(){ 
				$('.ser-mod4') 
					.css('display', 'block') 
					.animate({opacity: 1}, 200);
		});
	});
	$('.closed, .overlay').click( function(){ 
		$('.ser-mod4')
			.animate({opacity: 0}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
	$('.modal-service5').click( function(event){ 
		event.preventDefault();
		$('.overlay').fadeIn(400,
		 	function(){ 
				$('.ser-mod5') 
					.css('display', 'block') 
					.animate({opacity: 1}, 200);
		});
	});
	$('.closed, .overlay').click( function(){ 
		$('.ser-mod5')
			.animate({opacity: 0}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
	$('.modal-service6').click( function(event){ 
		event.preventDefault();
		$('.overlay').fadeIn(400,
		 	function(){ 
				$('.ser-mod6') 
					.css('display', 'block') 
					.animate({opacity: 1}, 200);
		});
	});
	$('.closed, .overlay').click( function(){ 
		$('.ser-mod6')
			.animate({opacity: 0}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
	$('.modal-service7').click( function(event){ 
		event.preventDefault();
		$('.overlay').fadeIn(400,
		 	function(){ 
				$('.ser-mod7') 
					.css('display', 'block') 
					.animate({opacity: 1}, 200);
		});
	});
	$('.closed, .overlay').click( function(){ 
		$('.ser-mod7')
			.animate({opacity: 0}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
	$('.modal-service8').click( function(event){ 
		event.preventDefault();
		$('.overlay').fadeIn(400,
		 	function(){ 
				$('.ser-mod8') 
					.css('display', 'block') 
					.animate({opacity: 1}, 200);
		});
	});
	$('.closed, .overlay').click( function(){ 
		$('.ser-mod8')
			.animate({opacity: 0}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
	$('.modal-service9').click( function(event){ 
		event.preventDefault();
		$('.overlay').fadeIn(400,
		 	function(){ 
				$('.ser-mod9') 
					.css('display', 'block') 
					.animate({opacity: 1}, 200);
		});
	});
	$('.closed, .overlay').click( function(){ 
		$('.ser-mod9')
			.animate({opacity: 0}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
	$('.modal-service10').click( function(event){ 
		event.preventDefault();
		$('.overlay').fadeIn(400,
		 	function(){ 
				$('.ser-mod10') 
					.css('display', 'block') 
					.animate({opacity: 1}, 200);
		});
	});
	$('.closed, .overlay').click( function(){ 
		$('.ser-mod10')
			.animate({opacity: 0}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});
	$('.modal-service11').click( function(event){ 
		event.preventDefault();
		$('.overlay').fadeIn(400,
		 	function(){ 
				$('.ser-mod11') 
					.css('display', 'block') 
					.animate({opacity: 1}, 200);
		});
	});
	$('.closed, .overlay').click( function(){ 
		$('.ser-mod11')
			.animate({opacity: 0}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('.overlay').fadeOut(400);
				}
			);
	});

	$("header nav").on("click","a", function (event) {
	   event.preventDefault();
	   var id  = $(this).attr('href'),
	   	top = $(id).offset().top;
	   $('body,html').animate({scrollTop: top}, 1500);
	   self = $(this);
	   self.closest('header nav').find('li').removeClass('active');
	   self.closest('li').addClass('active');
	});

	$('body,html').scroll(function() {
		if($('#special').is(":visible")){
			$('.left').css('display', 'block');
			$('.right').css('display', 'block');
		}
		else{
			$('.left').css('display', 'none');
			$('.right').css('display', 'none');
		}
	});

	$(document).on('submit','.form-order',function(e){
      e.preventDefault();
      form = $(this);
       $.ajax({
                    url: 'ajax.php',
                    data: form.serialize(),
                    type: "post",
                    dataType: "json",
                    success: function (resp) {
                        console.log(resp);
                        form[0].reset();
                        $('.order-form').fadeIn(400).css('display', 'block');
                        $('.order-form .block').css('display', 'none');
                        $('.overlay').fadeIn(400).css('display', 'block');
                        $('.order-form .sucsses').css('display', 'block');
                        setTimeout(function () {
                        	$('.order-form').fadeOut(400).css('display', 'none');
                        	$('.order-form .sucsses').css('display', 'none');
                        	$('.order-form .block').css('display', 'block');
                        	$('.overlay').fadeOut(400).css('display', 'none');
                        },3000);
                                //$('#success').modal('show');
                                //setTimeout(function () {
                                  //  $('#success').modal('hide');
                               // },3000);
                    }
              });
  });
	$(document).on('submit','.form-order-mod',function(e){
      e.preventDefault();
      form = $(this);
       $.ajax({
                    url: 'ajax-mod.php',
                    data: form.serialize(),
                    type: "post",
                    dataType: "json",
                    success: function (resp) {
                        console.log(resp);
                        form[0].reset();
                        $('.service-modal .left .block').css('display', 'none');
                        $('.service-modal .left .sucsses').css('display', 'block');
                        setTimeout(function () {
                        	$('.service-modal .left .sucsses').fadeOut(400).css('display', 'none');
                        	$('.service-modal .left .block').fadeOut(400).css('display', 'block');
                        },3000);
                                //$('#success').modal('show');
                                //setTimeout(function () {
                                  //  $('#success').modal('hide');
                               // },3000);
                    }
              });
  });

	$(document).on('submit','.form-order-small',function(e){
      e.preventDefault();
      form = $(this);
       $.ajax({
                    url: 'ajax-small.php',
                    data: form.serialize(),
                    type: "post",
                    dataType: "json",
                    success: function (resp) {
                        console.log(resp);
                        form[0].reset();
                        $('.order-form').fadeIn(400).css('display', 'block');
                        $('.order-form .block').css('display', 'none');
                        $('.overlay').fadeIn(400).css('display', 'block');
                        $('.order-form .sucsses').css('display', 'block');
                        setTimeout(function () {
                        	$('.order-form').fadeOut(400).css('display', 'none');
                        	$('.order-form .sucsses').css('display', 'none');
                        	$('.order-form .block').css('display', 'block');
                        	$('.overlay').fadeOut(400).css('display', 'none');
                        },3000);
                                //$('#success').modal('show');
                                //setTimeout(function () {
                                  //  $('#success').modal('hide');
                               // },3000);
                    }
              });
  });

	$(document).on('submit','.form-order-big',function(e){
      e.preventDefault();
      form = $(this);
       $.ajax({
                    url: 'ajax-big.php',
                    data: form.serialize(),
                    type: "post",
                    dataType: "json",
                    success: function (resp) {
                        console.log(resp);
                        form[0].reset();
                        $('.order-form').fadeIn(400).css('display', 'block');
                        $('.order-form .block').css('display', 'none');
                        $('.overlay').fadeIn(400).css('display', 'block');
                        $('.order-form .sucsses').css('display', 'block');
                        setTimeout(function () {
                        	$('.order-form').fadeOut(400).css('display', 'none');
                        	$('.order-form .sucsses').css('display', 'none');
                        	$('.order-form .block').css('display', 'block');
                        	$('.overlay').fadeOut(400).css('display', 'none');
                        },3000);
                                //$('#success').modal('show');
                                //setTimeout(function () {
                                  //  $('#success').modal('hide');
                               // },3000);
                    }
              });
  });

	/*$("header").fadeIn(1000);*/
});