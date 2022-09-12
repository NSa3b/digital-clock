function Time(){
 
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var period = "";
    if (hour >= 12) {
       period = "PM";
       if(hour>12){
            hour-=12;
          } 
    }
    else {
       period = "AM";
    }
    var currentTime=hour + " : " + minute + " : " + second + "  " + period;
    document.getElementById("clock").innerHTML= currentTime;
  }
  setInterval(Time, 1000);


  function setAlarm(){

   var hours=document.getElementById("hr").value;
   var minutes=document.getElementById("min").value;
   var seconds=document.getElementById("sec").value;
   var totalMill=(hours*60*60*1000)+(minutes*60*1000)+(seconds*1000);

   function alarm(){
        alert("ALARM!");
      }
      setTimeout(alarm,totalMill);
  }

  function clearAlarm(){
      
   document.getElementById("hr").value=0;
   document.getElementById("min").value=0;
   document.getElementById("sec").value=0;

  }

