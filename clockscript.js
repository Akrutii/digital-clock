const hourEl = document.getElementById("hour");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("sec");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let a = "AM";

    if(h>12){
        h-=12;
        a="PM";
    }

    if(h<10){
        h="0"+h;
    }

    //if-else condition can akso be wriiten as:
    m=m<10 ? "0" + m : m;
    s=s<10 ? "0" + s : s;

    hourEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    ampmEl.innerText = a;

    //to call this function every sec, we use setTimeout() function
    // to execute a func after the timer expiress,  here the 1st parameter is a function
    // and the 2nd parameter is a sec 1000 i.e-1000ms 
    setTimeout(()=>{
        updateClock()
    },1000) //~1000ms
}

updateClock();
