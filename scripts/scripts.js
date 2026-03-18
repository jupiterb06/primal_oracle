pastVideo = document.getElementById('pastVideo');
presentVideo = document.getElementById('presentVideo');
futureVideo = document.getElementById('futureVideo');


// button scripts
$("#shuffleButton").click(function (e) {
   $("#start").addClass("hidden");
   $("h1").addClass("hidden");

   $("#shuffling").removeClass("hidden");
});

$("#stopShuffle").click(function (e) {
   $("#shuffling").addClass("hidden");
   $("#beginReading").removeClass("hidden");
});

$("#beginReading").click(function (e) {
   $("#beginReading").addClass("hidden");
   $("#past").removeClass("hidden");
   $("html").addClass("blackBG");

});

$("#goToPastCard").click(function (e) {
   $("#past").addClass("hidden");
   $("#pastCard").removeClass("hidden");
   //  $("#pastVideo").attr("autoplay","1");
   pastVideo.play();


});


$("#goToPresentCard").click(function (e) {
   $("#present").addClass("hidden");
   $("#presentCard").removeClass("hidden");
   // $("#presentVideo").attr("autoplay","1");
   presentVideo.play();

});


$("#goToFutureCard").click(function (e) {
   $("#future").addClass("hidden");
   $("#futureCard").removeClass("hidden");
   $("#futureVideo").attr("autoplay", "1");
   futureVideo.play();

});


$("#backToStart").click(function (e) {
   location.reload();
});

// video listeners



pastVideo.addEventListener('ended', function () {
   $("#pastCard").addClass("hidden");
   $("#present").removeClass("hidden");
})

presentVideo.addEventListener('ended', function () {
   $("#presentCard").addClass("hidden");
   $("#future").removeClass("hidden");

})

futureVideo.addEventListener('ended', function () {
   $("#futureCard").addClass("hidden");
   $("#recap").removeClass("hidden");
   $("html").removeClass("blackBG");

   $("h1").removeClass("hidden");
})