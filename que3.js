var second = 00;
var tens = 00;
var OutputSeconds = document.getElementById('second');
var OutputTens = document.getElementById('tens');
var buttonStart = document.getElementById('btn-start');
var buttonStop = document.getElementById('btn-stop');
var buttonReset = document.getElementById('btn-reset');
var Interval;

buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
});

buttonReset.addEventListener('click',() => {
    clearInterval(Interval);
    tens = "00";
    second = "00";
    OutputSeconds.innerHTML = second;
    OutputTens.innerHTML = tens;
});

function startTime(){
    tens++;
    if(tens <= 9){
        OutputTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        OutputTens.innerHTML = tens;
    }

    if(tens > 99){
        second++;
        OutputSeconds.innerHTML = "0" + second;
        tens = 0;
        OutputTens.innerHTML = "0" + tens;
    }

    if(second > 9){
        OutputSeconds.innerHTML = second;
    }
}