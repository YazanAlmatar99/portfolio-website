// console.log("this is the photography.html page");
// $(".image-1").slideDown("slow", function() {
//   $(".image-2").slideDown();
// });

function slideInImages(className) {
  $("." + className).slideDown("slow");
}
for (i = 0; i < 6; i++) {
    var temp = "image-" + (i + 1)
    slideInImages(temp)
  setTimeout(slideInImages(temp),function(){
  },1000)
}
