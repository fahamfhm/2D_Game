let icon = "male";

var scoreworker = 0;
var score = 0;

function key(event) {

    if (event.which == 13) { //enter 
        document.getElementById("starter").style.visibility = "hidden";

        if (runworker == 0) {
            backgroundworker = setInterval(background, 100);
            runworker = setInterval(run, 100);
            runsound.play();
            distanceworker = setInterval(updatedistance, 100);
            stone_id = stone();
            coin_id = coin();
            coin_id_2 = coin_2();
            moveworker = setInterval(move, 100);
            clearInterval(idleworker);
            clearInterval(scoreworker);

        }

    }
    if (event.which == 38) { //uparrow
        if (jumpworker == 0) {
            clearInterval(runworker);
            clearInterval(idleworker);
            runworker = -1;
            jumpworker = setInterval(jump, 100);

            runsound.pause();
            jumpsound.play();
        }
    }
    if (event.which == 40) { //downarrow
        if (slideworker == 0) {
            clearInterval(runworker);
            clearInterval(idleworker);
            runworker = 0;
            slideworker = setInterval(slide, 100);
            runsound.pause();
            slidesound.play();
        }
    }
    var i = 1;
    if (event.which == 27) { //space


        if (i = 1) {
            clearInterval(runworker);
            runworker = 0;
            runsound.pause();
            clearInterval(jumpworker);
            jumpworker = 0;
            clearInterval(distanceworker);
            distanceworker = 0;
            clearInterval(moveworker);
            moveworker = 0;
            clearInterval(backgroundworker);
            backgroundworker = 0;
            i = i + 1;
            document.getElementById("win").style.visibility = "hidden";
            document.getElementById("end").style.visibility = "hidden";
            document.getElementById("starter").style.visibility = "visible";






        }
    }
}




var runsound = new Audio("audio/run.mp3");
runsound.loop = true;
var jumpsound = new Audio("audio/jump.mp3");
var slidesound = new Audio("audio/jump.mp3");
var deadsound = new Audio("audio/dead.mp3");
var winsound = new Audio("audio/gmae.wav");
var coinsound = new Audio("audio/coin.wav");



function start() {

    idleworker = setInterval(idler, 100);


    document.getElementById("starter").style.visibility = "hidden";




}
var idleworker = 0;
var idle = 0;

function idler() {
    var idleimg = document.getElementById("entity");
    idle = idle + 1;
    if (idle == 10) {
        idle = 1;

    }
    idleimg.src = "ninja_" + icon + "/Idle__00" + idle + ".png";

}


var backgroundworker = 0;
var x = 0;


function background() {
    document.getElementById("background").style.backgroundPositionX = x + "px";
    x = x - 30;
}

var runworker = 0;
var r = 0;

function run() {

    var runimg = document.getElementById("entity");
    r = r + 1;
    if (r == 10) {
        r = 1;
    }
    runimg.src = "ninja_" + icon + "/Run__00" + r + ".png";
}

var distanceworker = 0;
var distance = 0;

function updatedistance() {
    distance = distance + 10;
    document.getElementById("distance").innerHTML = "Distance:" + distance;
    if (distance >= 5000) {
        document.getElementById("win").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = "Your Score is" + score;
        winsound.play();
        runsound.pause();
        clearInterval(runworker);
        runworker = 0;
        clearInterval(jumpworker);
        jumpworker = 0;
        clearInterval(distanceworker);
        distanceworker = 0;
        clearInterval(moveworker);
        moveworker = 0;
        clearInterval(backgroundworker);
        backgroundworker = 0;
        idleworker = setInterval(idler, 100);
    }
}




var jumpworker = 0;
var j = 0;
margin_top = 460;

function jump() {
    var jumpimg = document.getElementById("entity");

    if (j <= 4) { //0-4 image
        margin_top = margin_top - 30;

    }
    if (j >= 5) { //5-9 image
        margin_top = margin_top + 30
    }
    j = j + 1;
    if (j == 10) {
        j = 0;
        clearInterval(jumpworker);
        jumpworker = 0;

        runworker = setInterval(run, 100);
        runsound.play();
        if (backgroundworker == 0) {
            backgroundworker = setInterval(background, 100);
        }
        if (distanceworker == 0) {
            distanceworker = setInterval(updatedistance, 100);
        }
        if (moveworker == 0) {
            moveworker = setInterval(move, 100);
        }
    }

    jumpimg.style.marginTop = margin_top + "px";
    jumpimg.src = "ninja_" + icon + "/Jump__00" + j + ".png";
}

var slideworker = 0;
var s = 0;
margin_top = 460;

function slide() {
    var slideimg = document.getElementById("entity");

    if (s <= 4) { //0-4 image
        margin_top = margin_top + 5;
    }
    if (s >= 5) { //5-9 image
        margin_top = margin_top - 5
    }
    s = s + 1;
    if (s == 10) {
        s = 0;
        clearInterval(slideworker);
        slideworker = 0;

        runworker = setInterval(run, 100);
        runsound.play();
        if (backgroundworker == 0) {
            backgroundworker = setInterval(background, 100);
        }
        if (distanceworker == 0) {
            distanceworker = setInterval(updatedistance, 100);
        }
    }

    slideimg.style.marginTop = margin_top + "px";
    slideimg.src = "ninja_" + icon + "/slide__00" + j + ".png";
}

var stone_id = 0;
var margin_left = 800;

function stone() {
    for (var s = 0; s < 20; s++) {
        var stoneimg = document.createElement("img");
        stoneimg.src = "obstacle/bomp.png";
        stoneimg.className = "stone";
        stoneimg.style.marginLeft = margin_left + "px";
        margin_left = margin_left + 1000;
        stoneimg.id = "a" + s;
        document.getElementById("background").appendChild(stoneimg);
    }
}

var coin_id = 0;
var margin_left_s = 1400;

function coin() {
    for (var s = 0; s < 20; s++) {

        var coinimg = document.createElement("img");
        coinimg.src = "coin/Gold_2.png";
        coinimg.className = "coin";
        coinimg.style.marginLeft = margin_left_s + "px";
        margin_left_s = margin_left_s + 800;
        coinimg.id = "b" + s;
        document.getElementById("background").appendChild(coinimg);


    }


}
var coin_id_2 = 0;
var margin_left_c = 1000;

function coin_2() {
    for (var c = 0; c < 20; c++) {

        var coin_img = document.createElement("img");
        coin_img.src = "coin/Gold_3.png";
        coin_img.className = "coin_2";
        coin_img.style.marginLeft = margin_left_c + "px";
        margin_left_c = margin_left_c + 600;
        coin_img.id = "c" + c;
        document.getElementById("background").appendChild(coin_img);


    }


}





var moveworker = 0;

function move() {

    for (var s = 0; s < 20; s++) {
        var d = document.getElementById("a" + s);
        var z = getComputedStyle(d);
        var p = parseInt(z.marginLeft);
        p = p - 20;
        d.style.marginLeft = p + "px";

        if (p <= 190 & p >= 70) {
            if (margin_top >= 440) {
                clearInterval(runworker);
                runsound.pause();

                clearInterval(jumpworker);
                jumpworker = -1;
                clearInterval(backgroundworker);
                clearInterval(distanceworker);
                clearInterval(moveworker);

                deadworker = setInterval(dead, 100);
                deadsound.play();

            }
        }
    }
    for (var s = 0; s < 20; s++) {

        var b = document.getElementById("b" + s);
        var e = getComputedStyle(b);
        var q = parseInt(e.marginLeft);
        q = q - 20;
        b.style.marginLeft = q + "px";


        if (q <= 200 & q >= 100) {
            if (margin_top <= 400) {
                if (scoreworker == 0) {
                    score = score + 10;
                    coinsound.play();
                    b.style.visibility = "hidden";


                    scoreworker = setInterval(updatescore, 100);
                }

            }
        }
    }
    for (var c = 0; c < 20; c++) {

        var w = document.getElementById("c" + c);
        var g = getComputedStyle(w);
        var o = parseInt(g.marginLeft);
        o = o - 20;
        w.style.marginLeft = o + "px";


        if (o <= 200 & o >= 100) {
            if (margin_top >= 400) {
                if (scoreworker == 0) {
                    score = score + 10;
                    coinsound.play();
                    w.style.visibility = "hidden";


                    scoreworker = setInterval(updatescore, 100);
                }

            }
        }
    }
}





function updatescore() {

    document.getElementById("score").innerHTML = "Score :" + score;
    clearInterval(scoreworker);
    scoreworker = 0;
}


deadworker = 0;
d = 0;

function dead() {
    var deadimg = document.getElementById("entity");
    d = d + 1;
    if (d == 10) {
        d = 9;
        deadimg.style.marginTop = "460px";
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = "Your Score is " + score;
    }
    deadimg.src = "ninja_" + icon + "/Dead__00" + d + ".png";
}

function reload() {
    location.reload();
}

function change(img) {
    var image = img.src.split('/').pop();

    if (image == "male.png") {
        icon = "male";
        img.src = "mode/female.png";
        document.getElementById("entity").src = "ninja_male/Idle__000.png";


    } else {
        icon = "female"
        img.src = "mode/male.png";
        document.getElementById("entity").src = "ninja_female/Idle__000.png";

    }
}

var leveler = document.getElementById("background");
if (localStorage.getItem("level") == null) {

    localStorage.setItem("level", "level1");
}

let localData = localStorage.getItem("level");

if (localData == "level1") {
    level.src = "bgimg/level2.png";
    document.body.classList.remove("level_2");
} else if (localData == "level2") {
    level.src = "bgimg/level1.jpg";
    document.body.classList.add("level_2");
}

level.onclick = function() {
    document.body.classList.toggle("level_2");
    if (document.body.classList.contains("level_2")) {
        level.src = "bgimg/level1.jpg";
        localStorage.setItem("level", "level2");
    } else {
        level.src = "bgimg/level2.png";
        localStorage.setItem("theme", "level1");
    }
}


var setting = document.getElementById("setting");

setting.onclick = function() {

    document.getElementById("panel").style.width = "50%";

}

var close = document.getElementById("close");

close.onclick = function() {

    document.getElementById("panel").style.width = "0";
}

function sound(img) {

    var image_sound = img.src.split('/').pop();

    if (image_sound == "shadedDark15.png") {
        img.src = "icon/shadedDark13.png";

    } else {
        img.src = "icon/shadedDark15.png";

    }
}