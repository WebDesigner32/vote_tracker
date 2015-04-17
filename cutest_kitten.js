(function(){

var randomKittens = [];

function kittenChartVotes(kitten1Votes, kitten2Votes) {

  var data = [
    {
        value: kitten1Votes,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: kitten2Votes,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    ];
 var options = {
 //Boolean - Whether we should show a stroke on each segment
       segmentShowStroke : true,

       //String - The colour of each segment stroke
       segmentStrokeColor : "#fff",

       //Number - The width of each segment stroke
       segmentStrokeWidth : 2,

       //Number - The percentage of the chart that we cut out of the middle
       percentageInnerCutout : 50, // This is 0 for Pie charts

       //Number - Amount of animation steps
       animationSteps : 100,

       //String - Animation easing effect
       animationEasing : "easeOutBounce",

       //Boolean - Whether we animate the rotation of the Doughnut
       animateRotate : true,

       //Boolean - Whether we animate scaling the Doughnut from the centre
       animateScale : false,

       //String - A legend template
       legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

};

var ctx = document.getElementById("kittenChart").getContext("2d");
var myDoughnutChart = new Chart(ctx).Doughnut(data,options);
}

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
   var $kittenDiv = $('#kittens').empty();

   var num = Math.floor(Math.random() * imgAr.length);
   var num2 = Math.floor(Math.random() * imgAr.length);

  while(num === num2) {
    num2 = Math.floor(Math.random() * imgAr.length);
   }

   var kitten1 = imgAr[num];
   var kitten2 = imgAr[num2];

   var img1 = $('<img>').attr({
    id: 'imgOne',
    src: kitten1.imgUrl
   });

   var img2 = $('<img>').attr({
    id: 'imgTwo',
    src: kitten2.imgUrl
   });


   $kittenDiv.append(img1, img2);

   var $kitten1image = $('#imgOne');
   var $kitten2image = $('#imgTwo');

   $('#imgOne').on('click', function() {
      $(this).css("border", "5px solid yellow");

      kitten1.votes++;

      kitten1.timesShown++;
      kitten2.timesShown++;

      setTimeout(getTwoKittens, 500, randomKittens);

      kittenChartVotes(kitten1.votes, kitten2.votes);


   });
   $('#imgTwo').on("click", function() {
    $(this).css("border", "5px solid yellow");

      kitten2.votes++;

      kitten1.timesShown++;
      kitten2.timesShown++;

      setTimeout(getTwoKittens, 500, randomKittens);

      kittenChartVotes(kitten1.votes, kitten2.votes);
   })
 };

generateKittenObjs(14);

getTwoKittens(randomKittens);

}());
