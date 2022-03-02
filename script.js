//writing libraries to store functional code

//how to incorporate and use a library in website code
//$ is the calling action in jQuery

var sound = new Howl({
      //src: ['dogbark.mp3']
      src: ['short.mp3']
    });

//$(".myGrid2 div").scroll(myFunction)

//function myFunction() {
//  sound.play();
//}


$(".myGrid3 div").each(function(index, element){
  element = $(element);
  index += 1;
  element.css("grid-row", index);

  if(index % 2 == 0){
    element.attr("data-aos", "fade-right");
  }
  else {
    element.attr("data-aos", "fade-left");
  }

  element.click(function(){
    sound.play();
  });

});



//Initializing the animation on scroll library
AOS.init(); //can use data-aos in html doc =but not sustainable for more panels
