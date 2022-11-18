        let h1 = document.getElementById("h1");
        let h2 = document.getElementById("h2");
        let h3 = document.getElementById("h3");
        let number = document.getElementById("number");
        let number2 = document.getElementById("number2");
        let number3 = document.getElementById("number3");
        let counter = 0;
        let counter2 = 0;
        let counter3 = 0;
        var percent = 70;//遊戲分數答對率接口
        var percent2 = 25;//每局遊戲按完正確按鈕時間接口
        var percent3 = 70;//每局顏色答對率接口
    //console.log(number);
    setInterval(()=>{
    
     
      if(counter == percent){
        clearInterval(number);
      }else{
        counter +=1;
        console.log(counter);
      number.innerHTML = "<h1>"+ counter + "</h1>";
      }
    
      if(counter2 == percent2){
        clearInterval(number2);
      }else{
        counter2 +=1;
        console.log(counter2);
      number2.innerHTML = "<h1>"+ counter2 + "%</h1>";
      }
    
      if(counter3 == percent3){
        clearInterval(number3);
      }else{
        counter3 +=1;
        console.log(counter3);
      number3.innerHTML = "<h1>"+ counter3 + "％</h1>";
      }
      
    },60);
    
    
    h1.style.setProperty('--offset', 440 - (440 * percent)/100);
    h2.style.setProperty('--offset', 440 - (440 * percent2)/100);
    h3.style.setProperty('--offset', 440 - (440 * percent3)/100);
    //h1.style.strokeDashoffset = 440 - (440 * 25)/100;
    
    