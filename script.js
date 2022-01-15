function  clock(){
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var am = document.getElementById("am");

    var time=new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();

  
    hours.innerHTML= a;
    minutes.innerHTML= b;
    seconds.innerHTML= c;

    if(a>12){
        let pm=a-12;
        if(pm<=9)hours.innerHTML="0"+pm;
        else hours.innerHTML=pm;
        am.innerHTML="PM";
    }
    else if( a==12 && b>0){
            hours.innerHTML=a;
            am.innerHTML="PM"
   }
    
    else{
        if(a<=9)hours.innerHTML="0"+a;
        else hours.innerHTML=a;
        am.innerHTML="AM"
    }
}

setInterval(clock,1000);
function settime(){
    var x=document.getElementById("set-wakeup-time").value;
    console.log(x);
    var hour=new Date().getHours();
     
     if(x==hour)
    {
         document.getElementById("imagecontainer").style.backgroundImage="url(breakfast.png)";
         document.getElementById("textcontainer").innerHTML="Good morning!!";
         document.getElementById("goodcontainer").innerHTML="Good morning!!";
    }
    console.log(hour);
}
function settime2(){
    var x=document.getElementById("set-lunch-time").value;
    console.log(x);
    var hour=new Date().getHours();
     if(hour>12){
         hour=hour%12;
    }
     if(x==hour)
    {
         document.getElementById("imagecontainer").style.backgroundImage="url(lunchimg.png)";
         document.getElementById("textcontainer").innerHTML="Lets have some lunch";
         document.getElementById("goodcontainer").innerHTML="Good afternoon!!";
        
    }
    console.log(hour);
}
function settime3(){
    var x=document.getElementById("set-nap-time").value;
    console.log(x);
    var hour=new Date().getHours();
     if(hour>12){
         hour=hour%12;
    }
     if(x==hour)
    {
        document.getElementById("imagecontainer").style.backgroundImage="url(goodnight.png)";
        document.getElementById("textcontainer").innerHTML="Good Night";
        document.getElementById("goodcontainer").innerHTML="Good Night!!";
        
    }
    console.log(hour);
}
function abc(){
    var x=document.getElementById("set-wakeup-time").value;
    var y=document.getElementById("set-lunch-time").value;
    var z=document.getElementById("set-nap-time").value;
    console.log(x);
    var divitem=document.getElementById("extracontainer");
    divitem.style.display="block";
    var item1=document.getElementById("extra1");
    var item2=document.getElementById("extra2");
    var item3=document.getElementById("extra3");
    if(x=='Default'){
        item1.innerText="Set Wake up Time: Default";
    }
    else if(x==24){
        item1.innerText="Set Wake up Time: " +' 12PM-1AM';
    }
    else if(x==11){
        item1.innerText="Set Wake up Time: " + x+'AM'   +'-' + (++x) +'PM';
    }
    else if(x==12){
        item1.innerText="Set Wake up Time: " +' 12PM-1AM';
    }
    else if(x<11)
    {
    item1.innerText="Set Wake up Time: " + x+'AM'   +'-' + (++x) +'AM';
    }
   
    else if(x>12){
        x=x%12;
        item1.innerText="Set Wake up Time: " + x+'PM'   +'-' + (++x) +'PM';
    }


    if(y=='Default'){
        item2.innerText="Set lunch Time: Default";
    }
    else if(y==24){
        item2.innerText="Set lunch Time: " +' 12PM-1AM';
    }
    else if(y==11){
        item2.innerText="Set lunch Time: " + y+'AM'   +'-' + (++y) +'PM';
    }
    else if(y==12){
        item2.innerText="Set lunch Time: " +' 12PM-1AM';
    }
    else if(y<11)
    {
    item2.innerText="Set lunch Time: " + y+'AM'   +'-' + (++y) +'AM';
    }
    
    else if(y>12){
        y=y%12;
        item2.innerText="Set lunch Time: " + y+'PM'   +'-' + (++y) +'PM';
    }


    if(z=='Default'){
        item3.innerText="Set Sleep Time: Default";
    }
    else if(z==24){
        item3.innerText="Set Sleep Time: " +' 12PM-1AM';
    }
    else if(z==11){
        item3.innerText="Set Sleep Time: " + z+'AM'   +'-' + (++z) +'PM';
    }
    else if(z==12){
        item3.innerText="Set Sleep Time: " +' 12PM-1AM';
    }
    else if(z<11)
    {
    item3.innerText="Set Sleep Time: " + z+'AM'   +'-' + (++z) +'AM';
    }
    
    else if(z>12){
        z=z%12;
        item3.innerText="Set Sleep Time: " + z+'PM'   +'-' + (++z) +'PM';
    }
}