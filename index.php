<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Bug Masters, LLC Murray, KY | Home</title>
    <link rel="shortcut icon" type="image/png" href="assets/images/favicon.png"/>
	<meta name="description" content="" />
  	<meta name="keywords" content="" />
	<meta name="robots" content="" />

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    
    <!-- Swiper CSS -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css">

    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    
   
  </head>
  <body>
	  
    <div class="container">
		<?php include 'template/header.html'; ?>
	
	   <?php include 'template/nav.html'; ?>
	   
	   <!-- Slider -->
	   <div class="row">
		   <div class="col">
			   <div class="swiper-container">
				    <!-- Additional required wrapper -->
				    <div class="swiper-wrapper">
				        <!-- Slides -->
				        <div class="swiper-slide sl-one">
					        <h2 class="sl-white-banner">Locally Owned and Operated</h2>
					        <p class="sl-red-banner">Offering the best service for the best price since 2007</p>
				        </div>
				        <div class="swiper-slide sl-two">
					        <h2 class="sl-white-banner"> What's <span class="red-text">Bugging</span> You?</h2>
					        <a href="http://bugmastersmurray.com/site/pest-library/"><button class="btn banner-btn">Check Our Pest Library</button></a>
					    </div>
				        <div class="swiper-slide sl-three">
					        <h2 class="sl-white-banner">Termites can do irreparable damage to your home</h2>
					        <p class="sl-red-banner">Bug Masters can help. Call today for your free termite inspection.</p>
				        </div>
				    </div>
				    <!-- If we need pagination -->
				    <div class="swiper-pagination"></div>

				</div>		   
			</div>
	   </div>
	
	   <!-- Begin Body Content-->
	   <div class="row justify-content-center home-main">
		   <div class="col">
				<h1 class="text-center">Welcome to Bug Masters, <small>LLC</small></h1>

				<p>Bug Masters, LLC was founded in 2007 in Murray, KY. We are owned and operated by Johnny Hutching and Shane Cox. We provide quality termite and pest control services. At Bug Masters, we understand how important it is to keep ants, spiders, rodents, bed bugs and other common pests from your home or business.</p>

				<p>With over thirty-seven years of combined experience, we know how to inspect your home, property or place of business thoroughly, evaluate what we find and pinpoint exactly what we need to do to keep you pest free and worry free.</p>

				<p>We pride ourselves in providing quality service at a quality price. We have personally experienced the emphasis placed on managers, salespersons, and even the technicians to get every penny they can from you, and at Bug Masters, we try not to push you into a product or service that you don't need or want. Our unique and progressive approach of "Targeting Your Bugs, Not Your Wallet" is how we really feel!</p>

				<p>Bug Masters is putting honesty and integrity back into the pest control industry!</p>
		   </div>
	   </div>
    	   		   	   
	   <?php include 'template/footer.php'; ?>


    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    
    <!-- Swiper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/js/swiper.min.js"></script>
    
     <!-- Font Awesome CDN -->
    <script src="https://use.fontawesome.com/3b1017770a.js"></script>
    
	<script>
		var mySwiper = new Swiper ('.swiper-container', {
			mode: 'horizontal',
			loop: true,
			autoplay: {
				delay: 6000,
  			},
			autoplayDisableOnInteraction: false,
			speed: 500,
			
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
    		},
			
		});
	</script>  
  </body>
</html>