document.getElementById("c").addEventListener("mouseenter",lightUp)
document.getElementById("c").addEventListener("mouseout",lightDown)
document.getElementById("p").addEventListener("click",timerStart)
var cl
function lightUp()
{
    document.getElementById("l").style.backgroundColor = "red"
}
function lightDown()
{
    document.getElementById("l").style.backgroundColor = "grey"
}
i=0
function timer()
{
i++
document.getElementById("h1").innerText = i
document.getElementById("l").style.backgroundColor = "green"
document.getElementById("c").style.pointerEvents = "none"
if(i==11)
{
    i=0;
    document.getElementById("h1").innerText = 0
    document.getElementById("l").style.backgroundColor = "grey"
    clearInterval(cl)
}
}
function timerStart()
{
    cl = setInterval(timer,1000)
}