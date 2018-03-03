$( document ).ready(function() {
//     alert( "ready!" );
    
    
    //Pest Library Method: On thumbnail image click, text/image background is replaced on the info column
    
    //mosquito method
    $( "#mosq" ).click(function() {
		$(".library-big-img").css('background-image', 'url(../../assets/images/library/mosquito.jpg)');
		$("h3.lib-info-h3").text("Mosquito");
		$("p.lib-info-p").text("One of the best known summer pests, mosquitoes breed in stagnant water or soft soil and can develop from egg to adult in 10 to 14 days.");
	});
	
	//cbee method
    $( "#cbee" ).click(function() {
		$(".library-big-img").css('background-image', 'url(../../assets/images/library/cbee.jpg)');
		$("h3.lib-info-h3").text("Carpenter Bee");
		$("p.lib-info-p").text("Carpenter bees look like typical bumblebees but often lack yellow stripes. They are solitary bees.");
	});
	
	//bbug method
    $( "#bbug" ).click(function() {
		$(".library-big-img").css('background-image', 'url(../../assets/images/library/bedbug.jpg)');
		$("h3.lib-info-h3").text("Bed Bug");
		$("p.lib-info-p").text("The adult bed bug is oval and flat. They grow to only about a quarter of an inch long. Bed bugs lack wings, so you won`t see them flying around your bedroom. Under cover of darkness, they crawl in search of blood, preferably from a human. Bed bugs use a piercing, sucking proboscis to penetrate the skin of their host. Adults are brown, but appear reddish-brown when engorged with blood. For more information, contact us today.");
	});
	
	//tick method
    $( "#tick" ).click(function() {
		$(".library-big-img").css('background-image', 'url(../../assets/images/library/tick.jpg)');
		$("h3.lib-info-h3").text("Tick");
		$("p.lib-info-p").text("Tick is the common name for the small arachnids in superfamily Ixodoidea that constitute the Acarina. Ticks are ectoparasites (external parasites), living by hematophagy on the blood of mammals, birds, and occasionally reptiles and amphibians.");
	});
	
	//flea method
    $( "#flea" ).click(function() {
		$(".library-big-img").css('background-image', 'url(../../assets/images/library/flea.jpg)');
		$("h3.lib-info-h3").text("Flea");
		$("p.lib-info-p").text("Fleas are parasites that feed on the blood of any warm-blooded body. The most common species is the cat flea, which often feasts on cats, dogs and humans.");
	});
	
	//ant method
    $( "#ant" ).click(function() {
		$(".library-big-img").css('background-image', 'url(../../assets/images/library/ant.jpg)');
		$("h3.lib-info-h3").text("Ant");
		$("p.lib-info-p").text("Ants are social insects of the family Formicidae that belong to the order Hymenoptera. They are easily identified by their elbowed antennae and a distinctive node-like structure that forms a slender waist.");
	});
	
	//Crick method
    $( "#crick" ).click(function() {
		$(".library-big-img").css('background-image', 'url(../../assets/images/library/cricket.jpg)');
		$("h3.lib-info-h3").text("Cricket");
		$("p.lib-info-p").text("House crickets get their common name from the fact that they often enter houses where they can survive indefinitely. Interestingly, they are known for their loud chirping which is caused by rubbing their front wings together to attract females.");
	});
	
	//croach method
    $( "#croach" ).click(function() {
		$(".library-big-img").css('background-image', 'url(../../assets/images/library/cockroach.jpg)');
		$("h3.lib-info-h3").text("Cockroach");
		$("p.lib-info-p").text("Cockroaches are insects of the order Blattaria. There are about 4,500 species of cockroach, of which 30 species are associated with human habitations and about four species are well known as pests.");
	});
	
	//sfish method
    $( "#sfish" ).click(function() {
		$(".library-big-img").css('background-image', 'url(../../assets/images/library/silverfish.jpg)');
		$("h3.lib-info-h3").text("Silverfish");
		$("p.lib-info-p").text("Silverfish are white to brown-grey or bluish-silver in color and are teardrop-shaped insects that measure up to 12-19 mm in length. Three long bristles are on their rears. Most often, homeowners detect silverfish when they find one on the floor or in a sink or bathtub. Their feeding damage also can indicate their presence, along with their tiny pepperlike feces.");
	});
	
	//cant method
    $( "#cant" ).click(function() {
		$(".library-big-img").css('background-image', 'url(../../assets/images/library/cant.jpg)');
		$("h3.lib-info-h3").text("Carpenter Ant");
		$("p.lib-info-p").text("Carpenter ants get their name because they excavate wood in order to build their nests. Their excavation results in smooth tunnels inside the wood. Carpenter ants range in size from one-quarter inch for a worker ant to up to three-quarters inch for a queen.");
	});
	
	//term method
    $( "#term" ).click(function() {
		$(".library-big-img").css('background-image', 'url(../../assets/images/library/termite.jpg)');
		$("h3.lib-info-h3").text("Subterranean Termite");
		$("p.lib-info-p").text("Subterranean termites live in underground colonies or in moist secluded areas aboveground that can contain up to 2 million members. They build distinctive mud tubes to gain access to food sources and to protect themselves from open air.");
	});
	
	//wasp method
    $( "#wasp" ).click(function() {
		$(".library-big-img").css('background-image', 'url(../../assets/images/library/wasp.jpg)');
		$("h3.lib-info-h3").text("Wasp");
		$("p.lib-info-p").text("The appearance of a wasp varies tremendously depending on species. Most have two pair of wings and a pinched waist. They range in colors from black to metallic greens and blues and vary in size from almost microscopic to several centimeters long.");
	});
	
	//horn method
    $( "#horn" ).click(function() {
		$(".library-big-img").css('background-image', 'url(../../assets/images/library/hornet.jpg)');
		$("h3.lib-info-h3").text("Hornet");
		$("p.lib-info-p").text("While hornets are known for their ability to inflict a painful sting, they are very beneficial predators and help to control a variety of insects that could otherwise become pests. However, hornets are social insects, so they will aggressively defend their colony (nest) from any intruders.");
	});
});