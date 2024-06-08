$(".image").on("click",function(){
    $(this).animate({opacity:0.5}, 50, function() {
    $(this).animate({opacity:1})
  });
});
$(".image").on("click",function(){
    var inner = $(this).attr("id");
    var file = './' + inner + '.mp3';
    var audio = new Audio(file)
    audio.play();
   console.log(inner)
})

