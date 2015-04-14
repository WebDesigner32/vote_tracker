(function(){
var url = '/kittens/';

var random_kitties = ["./kittens/kitten1.jpg", "./kittens/kitten2.jpg", "./kittens/kitten3.jpg", "./kittens/kitten4.jpg", "./kittens/kitten5.jpg", "./kittens/kitten6.jpg", "./kittens/kitten7.jpg", "./kittens/kitten8.jpg", "./kittens/kitten9.jpg", "./kittens/kitten10.jpg", "./kittens/kitten11.jpg", "./kittens/kitten12.jpg", "./kittens/kitten13.jpg", "./kittens/kitten14.jpg"];

 function randomImg(imgAr, path) {
   path = path || url;
   var num = Math.floor(Math.random() * imgAr.length);
   var num2 = Math.floor(Math.random() * imgAr.length);

   while(num === num2) {
    num2 = Math.floor(Math.random() * imgAr.length);
   }

   var img1 = document.createElement('img');
   img1.setAttribute('id', 'imgOne');
   var img2 = document.createElement('img');
   img2.setAttribute('id', 'imgTwo');

   img1.src = imgAr[num];
   img2.src = imgAr[num2];

   document.getElementById('kitten1').appendChild(img1);
   document.getElementById('kitten2').appendChild(img2);

   var kitten1 = document.getElementById('imgOne');
   var kitten2 = document.getElementById('imgTwo');

   kitten1.addEventListener('click', function() {
      kitten1.style.border = "5px solid blue";
   });
   kitten2.addEventListener('click', function() {
      kitten2.style.border = "5px solid red";
   });
 };



randomImg(random_kitties, url);

}());
