let x = Math.random()*6;
console.log(x);

if(x<=1)
{
    document.querySelector("body .img1").setAttribute("src","./images/dice1.png");
}
else if(x<=2)
{
    document.querySelector("body .img1").setAttribute("src","./images/dice2.png");
}
else if(x<=3)
{
    document.querySelector("body .img1").setAttribute("src","./images/dice3.png");
}
else if(x<=4)
{
    document.querySelector("body .img1").setAttribute("src","./images/dice4.png");
}
else if(x<=5)
{
    document.querySelector("body .img1").setAttribute("src","./images/dice5.png");
}
else if(x<=6)
{
    document.querySelector("body .img1").setAttribute("src","./images/dice6.png");
}

let y = Math.random()*6;
console.log(y);
if(y<=1)
{
    document.querySelector("body .img2").setAttribute("src","./images/dice1.png");
}
else if(y<=2)
{
    document.querySelector("body .img2").setAttribute("src","./images/dice2.png");
}
else if(y<=3)
{
    document.querySelector("body .img2").setAttribute("src","./images/dice3.png");
}
else if(y<=4)
{
    document.querySelector("body .img2").setAttribute("src","./images/dice4.png");
}
else if(y<=5)
{
    document.querySelector("body .img2").setAttribute("src","./images/dice5.png");
}
else if(y<=6)
{
    document.querySelector("body .img2").setAttribute("src","./images/dice6.png");
}

x = parseInt(x);
y = parseInt(y);


if(x>y)
document.querySelector("h1").textContent="Player 1 Won!!!"
if(x<y)
document.querySelector("h1").textContent="Player 2 Won!!!"
if(x==y)
document.querySelector("h1").textContent="It's A Draw!!!"