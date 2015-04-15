(function(){

var randomKittens = [];


var generateKittenObjs = function(numKittens) {
   for(var i=1; i <= numKittens; i++) {
      var kitten = {
         imgUrl: './kittens/kitten' + i + '.jpg',
         votes: 0,
         timesShown: 0
      };
      randomKittens.push(kitten);
   }
}

 function getTwoKittens(imgAr) {

   // Clears the div for new cat photos.
   var kittenDiv = document.getElementById('kittens');
   kittenDiv.innerHTML = "";

   var num = Math.floor(Math.random() * imgAr.length);
   var num2 = Math.floor(Math.random() * imgAr.length);

  while(num === num2) {
    num2 = Math.floor(Math.random() * imgAr.length);
   }

   var kitten1 = imgAr[num];
   var kitten2 = imgAr[num2];

   var img1 = document.createElement('img');
   img1.setAttribute('id', 'imgOne');
   img1.src = kitten1.imgUrl;

   var img2 = document.createElement('img');
   img2.setAttribute('id', 'imgTwo');
   img2.src = kitten2.imgUrl;


   kittenDiv.appendChild(img1);
   kittenDiv.appendChild(img2);

   var kitten1image = document.getElementById('imgOne');
   var kitten2image = document.getElementById('imgTwo');

   kitten1image.addEventListener('click', function() {
      kitten1image.style.border = "5px solid blue";

      kitten1.votes++;

      kitten1.timesShown++;
      kitten2.timesShown++;

      setTimeout(getTwoKittens, 500, randomKittens);

   });
   kitten2image.addEventListener('click', function() {
      kitten2image.style.border = "5px solid red";

      kitten2.votes++;

      kitten2.timesShown++;
      kitten1.timesShown++;

      setTimeout(getTwoKittens, 500, randomKittens);

    });
 };

generateKittenObjs(14);

getTwoKittens(randomKittens);

}());
