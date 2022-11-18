//宣告我們剛剛寫好的取亂數的function
function getRandom(x){
    return Math.floor(Math.random()*x)+1;
};
 //選燈號狀態給當下被選到的燈
function Changeclass_id(bnt_id){
  
  document.getElementById(bnt_id).value = getRandom(2);//紅燈、藍燈隨機選一個
  let value = document.getElementById(bnt_id).value;//放到判斷的容器內
  if(value<2){
    document.getElementById(bnt_id).className = "red_btn";//亮紅燈
    document.getElementById(bnt_id).value = 1;//亮紅燈
    //記錄量幾個紅燈
  }else{
    document.getElementById(bnt_id).className = "blue_btn";//亮藍燈
    document.getElementById(bnt_id).value = 2;//亮藍燈
  }
  
  //console.log("有近來執行")
}



//---------------------------------初始化遊戲設定------------------------//
var count =0;//初始化亮燈次數計數器

  
  
//----------------------------------------開始倒數計時每5秒執行一次---------------//



function Play(){

//初始化所有的燈都先關掉
  for (var i = 1; i<=12; i++) { 
    document.getElementById("bnt_"+i).setAttribute("class","init_btn");//關燈
    document.getElementById("bnt_"+i).value = 0;//0代表設定關燈狀態值
  }
getPowerNum();//開始執行隨機亮燈

  //-----這邊放亂數亮燈的函示--------//
  //產生1~16隨機選取7個數值
function getPowerNum(){
 
 var random=[];//建立一個空陣列
 
 var n = 0;//宣告一個變數用來裝隨機產生的數字
 
 var Run=getRandom(7);//隨機1~7顆燈內選一個數量，得到數字多少迴圈就跑幾次
 
 for(i=0;i<Run;i++){
     //用indexOf判斷該數字之前有沒有出現過
     n = getRandom(12);
     if(random.indexOf(n)!==-1){
     //如果有出現過就重跑一次迴圈
     i-=1;
     continue;
     }
     else{
     //沒出現過的話就寫進陣列裡
     
     random.push(n);
     };
 };
 //回陣列資料。
 
 for (i = 0; i <random.length; i++) {

       switch (random[i]){

         case 1:
         var bnt_id = "bnt_1";
         Changeclass_id(bnt_id);
         console.log('1號燈亮了');
           break;

         case 2:
         var bnt_id = "bnt_2";
         Changeclass_id(bnt_id);
           console.log('2號燈亮了');
           break;

         case 3:
         var bnt_id = "bnt_3";
         Changeclass_id(bnt_id);
           console.log('3號燈亮了');
           break;

         case 4:
         var bnt_id = "bnt_4";
         Changeclass_id(bnt_id);
           console.log('4號燈亮了');
           break;

         case 5:
         var bnt_id = "bnt_5";
         Changeclass_id(bnt_id);
           console.log('5號燈亮了');
           break;

         case 6:
         var bnt_id = "bnt_6";
         Changeclass_id(bnt_id);
           console.log('6號燈亮了');
           break;

         case 7:
         var bnt_id = "bnt_7";
         Changeclass_id(bnt_id);
           console.log('7號燈亮了');
           break;

         case 8:
         var bnt_id = "bnt_8";
         Changeclass_id(bnt_id);
           console.log('8號燈亮了');
           break;

         case 9:
         var bnt_id = "bnt_9";
         Changeclass_id(bnt_id);
           console.log('9號燈亮了');
           break;

         case 10:
         var bnt_id = "bnt_10";
         Changeclass_id(bnt_id);
           console.log('10號燈亮了');
           break;

           case 11:
           var bnt_id = "bnt_11";
         Changeclass_id(bnt_id);
           console.log('11號燈亮了');
           break;

           case 12:
           var bnt_id = "bnt_12";
         Changeclass_id(bnt_id);
           console.log('12號燈亮了');
           break;


         default:
           console.log(random[i]+'有錯誤·');
           break;
       }
       }
 };
//打印陣列
//console.log(getPowerNum());



  //-----------------------------//
  count+=1;//計數器＋1
  
  if(count>=6){//判斷執行亂數亮燈是否五次了，如果五次就要停止執行
    
    alert("本次遊玩分數為：" + Score +"分");
    windows.clearTimeout(timeoutID);//關掉計時器    
    console.log(count+">=5");

  }else{
    console.log(count+"<5");
    timeoutID = window.setTimeout(()=> Play(), 5000);//5秒後執行一次關掉所有的燈
  }
     

}

  








//---------------------------------偵測按鈕被點擊-------------------------------------//

/*解法如下：
$(document).ready(function(){
    $('button').each(function(){

      let id = $(this).attr('id');  
      if(id!=bnt_play){
          $("#"+id).mousedown(function(){
                      
                        $("#"+id).attr("class","btn btn-danger rounded-circle");//滑鼠按下就恢復原本沒亮燈狀態
              
          });
      }     
      
      
    });
});
    */


var Score = 0;//遊戲分數
var down = 0;//初始化偵測布林值用

  $(document).ready(function(){

    //偵測12顆按鈕狀態是否被滑鼠按著、放開
    $('button').each(function(){

      let id = $(this).attr('id');  
      if(id!="bnt_play"){
        console.log(id);
          $("#"+id).mousedown(function(){
                      
                        $("#"+id).attr("class","init_btn");//滑鼠按下就恢復原本沒亮燈狀態
              
          });
          $("#"+id).mouseup(function(){
        
            var down = $("#"+id).val();//取得當下的value值
            console.log(down);
            if(down==1){//0關燈、1亮紅色燈、2亮藍色燈
              Score+=1;
              //alert("目前的分數為:" + Score)
              console.log(Score);
            }else{
                if(down==2){//判斷是藍色才進來判斷分數並扣分
                  if(Score<=0){
                    Score=0;
                    console.log("分數已經為"+Score+"分");
                  }else{
                    Score-=1;
                    //alert("目前的分數為:" + Score)
                    console.log(Score);
            
                  }
                }
                  
              console.log("關燈狀態  down值："+ down);
            }
            down=0;//歸零布林值
            $("#"+id).attr({value : 0 });//這邊要再把當下的按鈕value值改成零
            console.log("布林值："+down);
          });
      }     
      
      
    });


});