var oneClick=0, twoClick=0, threeClick=0, fourClick=0;
var soundfx = document.getElementById('sfx');
var bgm = document.getElementById('bgm');
var bgfx = document.getElementById('bgfx');
$("#bgm_button").click(function () {
    $("#bgm_button").toggleClass('active');
    $("#bgmIcon").toggleClass('fa-volume-xmark');
    $("#bgmIcon").toggleClass('fa-volume-high');
    if (bgm.paused) {
        bgm.play();
        bgfx.play();


    } else {
        bgm.pause();
        bgm.currentTime = 0
        bgfx.pause();
    }
})

$("#one").click(function(){
    if (oneClick < 9){
        $("#one").animate({marginLeft:"-=367px"},500);
        oneClick+=1;
    }
    else{
        $("#one").animate({marginLeft:"0px"},500);
        oneClick = 0;
    }
    soundfx.play();
});
$("#two").click(function(){
    if (twoClick < 9){
        $("#two").animate({marginLeft:"-=367px"},500);
        twoClick+=1;
    }
    else{
        $("#two").animate({marginLeft:"0px"},500);
        twoClick = 0;
    }
    soundfx.play();
});
$("#three").click(function(){
    if (threeClick < 9){
        $("#three").animate({marginLeft:"-=367px"},500);
        threeClick+=1;
    }
    else{
        $("#three").animate({marginLeft:"0px"},500);
        threeClick = 0;
    }
    soundfx.play();
});
$("#four").click(function(){
    if (fourClick < 9){
        $("#four").animate({marginLeft:"-=367px"},500);
        fourClick+=1;
    }
    else{
        $("#four").animate({marginLeft:"0px"},500);
        fourClick = 0;
    }
    soundfx.play();
});