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
  './gifs/yeah_mustafa.gif'
  ];
};

function setImage(){
  var imageElement = document.querySelector('.image-container');
  return imageElement.innerHTML =  '<img src="' + selectImage() + '" width="500"/>';
};
