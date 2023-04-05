var cont1=document.getElementsByClassName("container1");
for (const container1 of cont1 ) {
    container1.style.display = 'none';
}
var cont2=document.getElementsByClassName("container2");
for (const container2 of cont2 ) {
    container2.style.display = 'none';
}
var cont3=document.getElementsByClassName("container3");
for (const container3 of cont3 ) {
    container3.style.display = 'none';
}
var cont4=document.getElementsByClassName("container4");
for (const container4 of cont4 ) {
    container4.style.display = 'none';
}
var cont5=document.getElementsByClassName("container5");
for (const container5 of cont5 ) {
    container5.style.display = 'none';
}
var cont6=document.getElementsByClassName("container6");
for (const container6 of cont6 ) {
    container6.style.display = 'none';
}
document.getElementById("swipeimg").style.display='none'

function temperature(){
document.getElementById("swipeimg").style.display='block'
var cont1=document.getElementsByClassName("container1");
     for (const container1 of cont1 ) {
         container1.style.display = 'block';
     }
var cont2=document.getElementsByClassName("container2");
for (const container2 of cont2 ) {
    container2.style.display = 'none';
}
var cont3=document.getElementsByClassName("container3");
for (const container3 of cont3 ) {
    container3.style.display = 'none';
}
var cont4=document.getElementsByClassName("container4");
for (const container4 of cont4 ) {
    container4.style.display = 'none';
}
var cont5=document.getElementsByClassName("container5");
for (const container5 of cont5 ) {
    container5.style.display = 'none';
}
var cont6=document.getElementsByClassName("container6");
for (const container6 of cont6 ) {
    container6.style.display = 'none';
}
}

function length(){
    document.getElementById("swipeimg").style.display='block'
    var cont1=document.getElementsByClassName("container1");
    for (const container1 of cont1 ) {
        container1.style.display = 'none';
    }
var cont2=document.getElementsByClassName("container2");
    for (const container2 of cont2 ) {
    container2.style.display= 'block';
}
var cont3=document.getElementsByClassName("container3");
for (const container3 of cont3 ) {
    container3.style.display = 'none';
}
var cont4=document.getElementsByClassName("container4");
for (const container4 of cont4 ) {
    container4.style.display = 'none';
}
var cont5=document.getElementsByClassName("container5");
for (const container5 of cont5 ) {
    container5.style.display = 'none';
}
var cont6=document.getElementsByClassName("container6");
for (const container6 of cont6 ) {
    container6.style.display = 'none';
}
}

function weight(){
    document.getElementById("swipeimg").style.display='block'
    var cont3=document.getElementsByClassName("container3");
    for (const container3 of cont3 ) {
        container3.style.display = 'block';
    }
var cont1=document.getElementsByClassName("container1");
for (const container1 of cont1 ) {
    container1.style.display = 'none';
}
var cont2=document.getElementsByClassName("container2");
for (const container2 of cont2 ) {
    container2.style.display = 'none';
}
var cont4=document.getElementsByClassName("container4");
for (const container4 of cont4 ) {
    container4.style.display = 'none';
}
var cont5=document.getElementsByClassName("container5");
for (const container5 of cont5 ) {
    container5.style.display = 'none';
}
var cont6=document.getElementsByClassName("container6");
for (const container6 of cont6 ) {
    container6.style.display = 'none';
}
}

function area(){
    document.getElementById("swipeimg").style.display='block'
    var cont4=document.getElementsByClassName("container4");
    for (let container4 of cont4 ) {
    container4.style.display = 'block';
}
var cont1=document.getElementsByClassName("container1");
for (const container1 of cont1 ) {
    container1.style.display = 'none';
}
var cont3=document.getElementsByClassName("container3");
for (const container3 of cont3 ) {
    container3.style.display = 'none';
}
var cont2=document.getElementsByClassName("container2");
for (const container2 of cont2 ) {
    container2.style.display = 'none';
}
var cont5=document.getElementsByClassName("container5");
for (const container5 of cont5 ) {
    container5.style.display = 'none';
}
var cont6=document.getElementsByClassName("container6");
for (const container6 of cont6 ) {
    container6.style.display = 'none';
}
}

function volume(){
    document.getElementById("swipeimg").style.display='block'
    var cont5=document.getElementsByClassName("container5");
    for (const container5 of cont5 ) {
    container5.style.display = 'block';
}
var cont1=document.getElementsByClassName("container1");
for (const container1 of cont1 ) {
    container1.style.display = 'none';
}
var cont3=document.getElementsByClassName("container3");
for (const container3 of cont3 ) {
    container3.style.display = 'none';
}
var cont4=document.getElementsByClassName("container4");
for (const container4 of cont4 ) {
    container4.style.display = 'none';
}
var cont2=document.getElementsByClassName("container2");
for (const container2 of cont2 ) {
    container2.style.display = 'none';
}
var cont6=document.getElementsByClassName("container6");
for (const container6 of cont6 ) {
    container6.style.display = 'none';
}
}

function currency(){
    document.getElementById("swipeimg").style.display='block'
    var cont6=document.getElementsByClassName("container6");
    for (let container6 of cont6 ) {
    container6.style.display = 'block';
}
var cont1=document.getElementsByClassName("container1");
for (const container1 of cont1 ) {
    container1.style.display = 'none';
}
var cont3=document.getElementsByClassName("container3");
for (const container3 of cont3 ) {
    container3.style.display = 'none';
}
var cont4=document.getElementsByClassName("container4");
for (const container4 of cont4 ) {
    container4.style.display = 'none';
}
var cont5=document.getElementsByClassName("container5");
for (const container5 of cont5 ) {
    container5.style.display = 'none';
}
var cont2=document.getElementsByClassName("container2");
for (const container2 of cont2 ) {
    container2.style.display = 'none';
}
}

function temp1(){
var a=document.getElementById("inputnumber").value;
var b=document.getElementById("degrees");
var c=document.getElementById("degrees1");
var d=document.getElementById("displayvalue");
if(c.value=="celsius"){
    if(b.value=="celsius")
    {
        d.value=a;
    }
    if(b.value=="fahrenheit")
    {
        var e=(parseFloat(a-32)*5/9);
        d.value=e;
    }
    if(b.value=="kelvin")
    {
       var e=(parseFloat(a-273.15));
       d.value=e;
    }
}
else  if(c.value=="fahrenheit")
{
    if(b.value=="celsius")
    {
        var e=(parseFloat((a*9/5)+32));
        d.value=e;
    }
    if(b.value=="fahrenheit")
    {
        d.value=a;
    }
    if(b.value=="kelvin")
    {
       var e=(parseFloat((a-273.15)*9/5)+32);
       d.value=e;
    }
}
else if(c.value=="kelvin")
{
    if(b.value=="celsius")
    {
        var e=(parseFloat(a+273.15));
        d.value=e;
    }
    if(b.value=="fahrenheit")
    {
        var e=(parseFloat((a-32)*5/9)+273.15);
        d.value=e;
    }
    if(b.value=="kelvin")
    {
       d.value=a;
    }
}
}


function lengths1(){
    var a=document.getElementById("inputnumber1").value;
    var b=document.getElementById("length");
    var c=document.getElementById("length1");
    var d=document.getElementById("displayvalue1");
    if(c.value=="kilometer"){
        if(b.value=="kilometer"){
            d.value=a;
        }
        if(b.value=="hectameter"){
            var e=(parseFloat(a/10));
            d.value=e;
        }
        if(b.value=="decameter"){
            var e=(parseFloat(a/100));
            d.value=e;
        }
        if(b.value=="meter"){
            var e=(parseFloat(a/1000));
            d.value=e;
        }
        if(b.value=="decimeter"){
            var e=(parseFloat(a/10000));
            d.value=e;
        }
        if(b.value=="centimeter"){
            var e=(parseFloat(a/100000));
            d.value=e;
        }
        if(b.value=="millimeter"){
            var e=(parseFloat(a/1000000));
            d.value=e;
        }
    }
   else if(c.value=="hectameter"){
        if(b.value=="kilometer"){
            var e=(parseFloat(a*10));
            d.value=a;
        }
        if(b.value=="hectameter"){
            d.value=a;
        }
        if(b.value=="decameter"){
            var e=(parseFloat(a/10));
            d.value=e;
        }
        if(b.value=="meter"){
            var e=(parseFloat(a/100));
            d.value=e;
        }
        if(b.value=="decimeter"){
            var e=(parseFloat(a/1000));
            d.value=e;
        }
        if(b.value=="centimeter"){
            var e=(parseFloat(a/10000));
            d.value=e;
        }
        if(b.value=="millimeter"){
            var e=(parseFloat(a/100000));
            d.value=e;
        }
    }
    else if(c.value=="decameter"){
        if(b.value=="kilogram"){
            var e=(parseFloat(a*100));
            d.value=a;
        }
        if(b.value=="hectameter"){
            var e=(parseFloat(a*10));
            d.value=e;
        }
        if(b.value=="decameter"){
            d.value=a;
        }
        if(b.value=="meter"){
            var e=(parseFloat(a/10));
            d.value=e;
        }
        if(b.value=="decimeter"){
            var e=(parseFloat(a/100));
            d.value=e;
        }
        if(b.value=="centimeter"){
            var e=(parseFloat(a/1000));
            d.value=e;
        }
        if(b.value=="millimeter"){
            var e=(parseFloat(a/10000));
            d.value=e;
        }
    }
    else if(c.value=="meter"){
        if(b.value=="kilometer"){
            var e=(parseFloat(a*1000));
            d.value=a;
        }
        if(b.value=="hectameter"){
            var e=(parseFloat(a*100));
            d.value=e;
        }
        if(b.value=="decameter"){
            var e=(parseFloat(a*10));
            d.value=e;
        }
        if(b.value=="meter"){
            d.value=a;
        }
        if(b.value=="decimeter"){
            var e=(parseFloat(a/10));
            d.value=e;
        }
        if(b.value=="centimeter"){
            var e=(parseFloat(a/100));
            d.value=e;
        }
        if(b.value=="millimeter"){
            var e=(parseFloat(a/1000));
            d.value=e;
        }
    }
    else if(c.value=="decimeter"){
        if(b.value=="kilometer"){
            var e=(parseFloat(a*10000));
            d.value=a;
        }
        if(b.value=="hectameter"){
            var e=(parseFloat(a*1000));
            d.value=e;
        }
        if(b.value=="decameter"){
            var e=(parseFloat(a*100));
            d.value=e;
        }
        if(b.value=="meter"){
            var e=(parseFloat(a*10));
            d.value=e;
        }
        if(b.value=="decimeter"){
            d.value=a;
        }
        if(b.value=="centimeter"){
            var e=(parseFloat(a/10));
            d.value=e;
        }
        if(b.value=="millimeter"){
            var e=(parseFloat(a/100));
            d.value=e;
        }
    }
    else if(c.value=="centimeter"){
        if(b.value=="kilometer"){
            var e=(parseFloat(a*100000));
            d.value=a;
        }
        if(b.value=="hectameter"){
            var e=(parseFloat(a*10000));
            d.value=e;
        }
        if(b.value=="decameter"){
            var e=(parseFloat(a*1000));
            d.value=e;
        }
        if(b.value=="meter"){
            var e=(parseFloat(a*100));
            d.value=e;
        }
        if(b.value=="decimeter"){
            var e=(parseFloat(a*10));
            d.value=e;
        }
        if(b.value=="centimeter"){
            d.value=a;
        }
        if(b.value=="millimeter"){
            var e=(parseFloat(a/10));
            d.value=e;
        }
    }
    else if(c.value=="millimeter"){
        if(b.value=="kilometer"){
            var e=(parseFloat(a*1000000));
            d.value=e;
        }
        if(b.value=="hectameter"){
            var e=(parseFloat(a*100000));
            d.value=e;
        }
        if(b.value=="decameter"){
            var e=(parseFloat(a*10000));
            d.value=e;
        }
        if(b.value=="meter"){
            var e=(parseFloat(a*1000));
            d.value=e;
        }
        if(b.value=="decimeter"){
            var e=(parseFloat(a*100));
            d.value=e;
        }
        if(b.value=="centimeter"){
            var e=(parseFloat(a*10));
            d.value=e;
        }
        if(b.value=="millimeter"){
            d.value=a;
        }
    }
}

function weights1(){
        var a=document.getElementById("inputnumber2").value;
        var b=document.getElementById("weight");
        var c=document.getElementById("weight1");
        var d=document.getElementById("displayvalue2");
        if(c.value=="kilogram"){
            if(b.value=="kilogram"){
                d.value=a;
            }
            if(b.value=="hectagram"){
                var e=(parseFloat(a/10));
                d.value=e;
            }
            if(b.value=="decagram"){
                var e=(parseFloat(a/100));
                d.value=e;
            }
            if(b.value=="gram"){
                var e=(parseFloat(a/1000));
                d.value=e;
            }
            if(b.value=="decigram"){
                var e=(parseFloat(a/10000));
                d.value=e;
            }
            if(b.value=="centigram"){
                var e=(parseFloat(a/100000));
                d.value=e;
            }
            if(b.value=="milligram"){
                var e=(parseFloat(a/1000000));
                d.value=e;
            }
        }
       else if(c.value=="hectagram"){
            if(b.value=="kilogram"){
                var e=(parseFloat(a*10));
                d.value=a;
            }
            if(b.value=="hectagram"){
                d.value=a;
            }
            if(b.value=="decagram"){
                var e=(parseFloat(a/10));
                d.value=e;
            }
            if(b.value=="gram"){
                var e=(parseFloat(a/100));
                d.value=e;
            }
            if(b.value=="decigram"){
                var e=(parseFloat(a/1000));
                d.value=e;
            }
            if(b.value=="centigram"){
                var e=(parseFloat(a/10000));
                d.value=e;
            }
            if(b.value=="milligram"){
                var e=(parseFloat(a/100000));
                d.value=e;
            }
        }
        else if(c.value=="decagram"){
            if(b.value=="kilogram"){
                var e=(parseFloat(a*100));
                d.value=a;
            }
            if(b.value=="hectagram"){
                var e=(parseFloat(a*10));
                d.value=e;
            }
            if(b.value=="decagram"){
                d.value=a;
            }
            if(b.value=="gram"){
                var e=(parseFloat(a/10));
                d.value=e;
            }
            if(b.value=="decigram"){
                var e=(parseFloat(a/100));
                d.value=e;
            }
            if(b.value=="centigram"){
                var e=(parseFloat(a/1000));
                d.value=e;
            }
            if(b.value=="milligram"){
                var e=(parseFloat(a/10000));
                d.value=e;
            }
        }
        else if(c.value=="gram"){
            if(b.value=="kilogram"){
                var e=(parseFloat(a*1000));
                d.value=a;
            }
            if(b.value=="hectagram"){
                var e=(parseFloat(a*100));
                d.value=e;
            }
            if(b.value=="decagram"){
                var e=(parseFloat(a*10));
                d.value=e;
            }
            if(b.value=="gram"){
                d.value=a;
            }
            if(b.value=="decigram"){
                var e=(parseFloat(a/10));
                d.value=e;
            }
            if(b.value=="centigram"){
                var e=(parseFloat(a/100));
                d.value=e;
            }
            if(b.value=="milligram"){
                var e=(parseFloat(a/1000));
                d.value=e;
            }
        }
        else if(c.value=="decigram"){
            if(b.value=="kilogram"){
                var e=(parseFloat(a*10000));
                d.value=a;
            }
            if(b.value=="hectagram"){
                var e=(parseFloat(a*1000));
                d.value=e;
            }
            if(b.value=="decagram"){
                var e=(parseFloat(a*100));
                d.value=e;
            }
            if(b.value=="gram"){
                var e=(parseFloat(a*10));
                d.value=e;
            }
            if(b.value=="decigram"){
                d.value=a;
            }
            if(b.value=="centigram"){
                var e=(parseFloat(a/10));
                d.value=e;
            }
            if(b.value=="milligram"){
                var e=(parseFloat(a/100));
                d.value=e;
            }
        }
        else if(c.value=="centigram"){
            if(b.value=="kilogram"){
                var e=(parseFloat(a*100000));
                d.value=a;
            }
            if(b.value=="hectagram"){
                var e=(parseFloat(a*10000));
                d.value=e;
            }
            if(b.value=="decagram"){
                var e=(parseFloat(a*1000));
                d.value=e;
            }
            if(b.value=="gram"){
                var e=(parseFloat(a*100));
                d.value=e;
            }
            if(b.value=="decigram"){
                var e=(parseFloat(a*10));
                d.value=e;
            }
            if(b.value=="centigram"){
                d.value=a;
            }
            if(b.value=="milligram"){
                var e=(parseFloat(a/10));
                d.value=e;
            }
        }
        else if(c.value=="milligram"){
            if(b.value=="kilogram"){
                var e=(parseFloat(a*1000000));
                d.value=e;
            }
            if(b.value=="hectagram"){
                var e=(parseFloat(a*100000));
                d.value=e;
            }
            if(b.value=="decagram"){
                var e=(parseFloat(a*10000));
                d.value=e;
            }
            if(b.value=="gram"){
                var e=(parseFloat(a*1000));
                d.value=e;
            }
            if(b.value=="decigram"){
                var e=(parseFloat(a*100));
                d.value=e;
            }
            if(b.value=="centigram"){
                var e=(parseFloat(a*10));
                d.value=e;
            }
            if(b.value=="milligram"){
                d.value=a;
            }
        }
}

function areas1(){
    var a=document.getElementById("inputnumber3").value;
    var b=document.getElementById("area");
    var c=document.getElementById("area1");
    var d=document.getElementById("displayvalue3");
    if(c.value=="centimetersq"){
        if(b.value=="metersq"){
            var e=(parseFloat(a*10000));
            d.value=e;
        }
        if(b.value=="centimetersq"){
            d.value=a;
        }
    }
    else if(c.value=="metersq"){
        if(b.value=="centimetersq"){
            var e=(parseFloat(a/10000));
            d.value=e;
        }
        if(b.value=="metersq"){
            d.value=a;
        }
    }
}


function volumes1(){
    var a=document.getElementById("inputnumber4").value;
    var b=document.getElementById("volume");
    var c=document.getElementById("volume1");
    var d=document.getElementById("displayvalue4");
    if(c.value=="centimetercube"){
        if(b.value=="metercube"){
            var e=(parseFloat(a*1000000));
            d.value=e;
        }
        if(b.value=="centimetercube"){
            d.value=a;
        }
    }
    else if(c.value=="metercube"){
        if(b.value=="centimetercube"){
            var e=(parseFloat(a/1000000));
            d.value=e;
        }
        if(b.value=="metercube"){
            d.value=a;
        }
    }
}


function currencies1(){
    var a=document.getElementById("inputnumber5").value;
    var b=document.getElementById("currency");
    var c=document.getElementById("currency1");
    var d=document.getElementById("displayvalue5");
    if(c.value=="inr"){
        if(b.value=="usd"){
            var e=(parseFloat(a*82.1259));
            d.value=e;
        }
        if(b.value=="inr"){
            d.value=a;
        }
    }
    else if(c.value=="usd"){
        if(b.value=="inr"){
            var e=(parseFloat(a/82.1259));
            d.value=e;
        }
        if(b.value=="usd"){
            d.value=a;
        }
    }
}

function clearfunction(){
    var cont1=document.getElementsByClassName("container1");
for (const container1 of cont1 ) {
    container1.style.display = 'none';
}
var cont2=document.getElementsByClassName("container2");
for (const container2 of cont2 ) {
    container2.style.display = 'none';
}
var cont3=document.getElementsByClassName("container3");
for (const container3 of cont3 ) {
    container3.style.display = 'none';
}
var cont4=document.getElementsByClassName("container4");
for (const container4 of cont4 ) {
    container4.style.display = 'none';
}
var cont5=document.getElementsByClassName("container5");
for (const container5 of cont5 ) {
    container5.style.display = 'none';
}
var cont6=document.getElementsByClassName("container6");
for (const container6 of cont6 ) {
    container6.style.display = 'none';
}
document.getElementById("swipeimg").style.display='none'
}
