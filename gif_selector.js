;
window.onload = function() {
  setImage();
}();

function selectImage() {
  var images = imageLibrary();
  var imageIndexToSelect = Math.floor((Math.random() * images.length));
  return images[imageIndexToSelect];
};

function imageLibrary() {
  return [
    './gifs/YES.gif',
    './gifs/absolutely.gif',
    './gifs/for_sure.gif',
    './gifs/fur_sure.gif',
    './gifs/like_a_baus.gif',
    './gifs/shia_laboeuf.gif',
    './gifs/snoop_dog.gif',
    './gifs/yeah_mustafa.gif',
    './gifs/duh.gif',
    './gifs/hell_yeah.html',
    './gifs/intense_yes.gif',
    './gifs/mary_kate_or_ashley.gif',
    './gifs/meryll_yes.gif',
    './gifs/obvi.gif',
    './gifs/begging.gif',
    './gifs/borat.gif',
    './gifs/course.gif',
    './gifs/indeed.gif',
    './gifs/orig_yas_queen.gif',
    './gifs/schumer.gif',
    './gifs/terry_crews.gif',
    './gifs/totally.gif',
    './gifs/twin_peaks_yes.gif',
    './gifs/yas_queen.gif',
    './gifs/yasyasyasyas.gif',
  ];
};

function setImage(){
  var imageElement = document.querySelector('.image-container');
  return imageElement.innerHTML =  '<img src="' + selectImage() + '" width="500"/>';
};
