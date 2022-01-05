$(document).ready(function () {
    // Musique :
    $(".musique").hide();
    $("#musique2").hide();

    var musique = 1;

    $(".musique").mousedown(function () {
        $(".musique").css('transform', 'scale(0.85, 0.85)').css("transition", "0.2s");
    });

    $(".musique").mouseup(function () {
        $(".musique").css('transform', 'scale(1, 1)');

        if (musique == 1) {
            console.log("off");
            musiqueOff();

            musique = 0;
        } else {
            console.log("on");
            musiqueOn();

            musique = 1;
        }
    });

    function musiqueOff() {
        musiqueAudio.pause();

        console.log("musique off ok");
        $("#musique1").hide();
        $("#musique2").show();
    }

    function musiqueOn() {
        musiqueAudio.play();

        console.log("musique on ok");
        $("#musique1").show();
        $("#musique2").hide();
    }

    var musiqueAudio = document.createElement("audio");
    musiqueAudio.setAttribute("src", "musique.mp3");

    // JS :

    window.addEventListener("load", function () {
        document.body.classList.add("bodyCharge");
    })

    document.querySelector("#fleche").addEventListener("click", page2);

    function page2() {
        document.querySelector("#acc1").classList.add("accCache");

        $(".musique").delay(800).fadeIn();
        musiqueAudio.play();
        document.body.classList.add("bodyCharge2");
    }

    document.querySelector("#fleche2").addEventListener("click", debut);

    function debut() {
        document.querySelector("#acc2").classList.add("accCache");
        setTimeout(function () { document.querySelector("#container").remove() }, 1000);

        document.body.classList.add("bodyCharge3");
    }

    // JQUERY :

    // $("#container").hide();
    // debut();

    let numPoeme = 1;

    $(".poeme:not(#p1)").hide();
    showPoem();

    $("#gauche").click(function () {      
        if (numPoeme == 1) {
            numPoeme = 9;
            console.log(numPoeme);
        } else {
            numPoeme -= 1
            console.log(numPoeme);
        }

        stopRecording();
        showPoem();
    });

    $("#droite").click(function () {

        if (numPoeme == 9) {
            numPoeme = 1;
            console.log(numPoeme);
        } else {
            numPoeme += 1
            console.log(numPoeme);
        }

        stopRecording();
        showPoem();
    });

    function stopRecording() {
        rec1.pause();
        rec2.pause();
        rec3.pause();
        rec4.pause();
        rec5.pause();
        rec6.pause();
        rec7.pause();
        rec8.pause();
        rec9.pause();
        rec10.pause();

        rec1.currentTime = 0;
        rec2.currentTime = 0;
        rec3.currentTime = 0;
        rec4.currentTime = 0;
        rec5.currentTime = 0;
        rec6.currentTime = 0;
        rec7.currentTime = 0;
        rec8.currentTime = 0;
        rec9.currentTime = 0;
        rec10.currentTime = 0;
    }

    function showPoem() {
        $(".poeme").fadeOut();
        $("#p" + numPoeme).delay(300).fadeIn();
    }

    // SONS

    //1
    var rec1 = document.createElement("audio");
    rec1.setAttribute("src", "enregistrements/rec1.mp3");

    $("#ecoute1").click(function () {
        rec1.play();
    })

    //2
    var rec2 = document.createElement("audio");
    rec2.setAttribute("src", "enregistrements/rec2.mp3");

    $("#ecoute2").click(function () {
        rec2.play();
    })

    //3
    var rec3 = document.createElement("audio");
    rec3.setAttribute("src", "enregistrements/rec3.mp3");

    $("#ecoute3").click(function () {
        rec3.play();
    })

    //4
    var rec4 = document.createElement("audio");
    rec4.setAttribute("src", "enregistrements/rec4.mp3");

    $("#ecoute4").click(function () {
        rec4.play();
    })

    //5
    var rec5 = document.createElement("audio");
    rec5.setAttribute("src", "enregistrements/rec5.mp3");

    $("#ecoute5").click(function () {
        rec5.play();
    })

    //6
    var rec6 = document.createElement("audio");
    rec6.setAttribute("src", "enregistrements/rec6.mp3");

    $("#ecoute6").click(function () {
        rec6.play();
    })

    //7
    var rec7 = document.createElement("audio");
    rec7.setAttribute("src", "enregistrements/rec7.mp3");

    $("#ecoute7").click(function () {
        rec7.play();
    })

    //8
    var rec8 = document.createElement("audio");
    rec8.setAttribute("src", "enregistrements/rec8.mp3");

    $("#ecoute8").click(function () {
        rec8.play();
    })

    //9
    var rec9 = document.createElement("audio");
    rec9.setAttribute("src", "enregistrements/rec9.mp3");

    $("#ecoute9").click(function () {
        rec9.play();
    })

    //10
    var rec10 = document.createElement("audio");
    rec10.setAttribute("src", "enregistrements/rec10.mp3");

    $("#ecoute10").click(function () {
        rec10.play();
    })
});