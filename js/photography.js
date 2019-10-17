
//dynamically get pictures number
var imagesNumber = $('.col-md-4').length;
function slideInImages(className) {
  $("." + className).slideDown("slow");
}

console.log(imagesNumber)
var i = 0;
function startSlidingInImages() {
  setTimeout(function() {
    var temp = "image-" + (i + 1);
    slideInImages(temp);
    i++;
    if (i < imagesNumber) {
      startSlidingInImages();
    }
  }, 500);
}

startSlidingInImages();
