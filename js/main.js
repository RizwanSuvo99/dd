// bangla function start]
var ba = 0,
    bp = 0,
    b1 = Number(document.getElementById("b1").value),
    b2 = Number(document.getElementById("b2").value),
    b3 = Number(document.getElementById("b3").value);

function br() {
    // bangla average statement
    var i;
    var arr = [b1, b2, b3];
    arr.sort(function (a, b) {
        return b - a;
    });

    for (i = 0; i < arr.length - 1; i++) {
        ba += arr[i];
    }

    ba = ba / 2;
    document.getElementById("ba").innerHTML = ba;

    // bangla point statement
    if (ba >= 80 && ba <= 100) {
        bp = 5;
    } else if (ba >= 70 && ba < 80) {
        bp = 4;
    } else if (ba >= 60 && ba < 70) {
        bp = 3.5;
    } else if (ba >= 50 && ba < 60) {
        bp = 3;
    } else if (ba >= 40 && ba < 50) {
        bp = 2.5;
    } else {
        bp = 0;
    }

    document.getElementById("bp").innerHTML = bp;
    return bp;
}