
function sleep(){
     // console.log("A C T I V A D O");
     document.getElementById("controlAuto").style.display = "none";
     let protector = document.getElementById("protector");
     setTimeout(() => {
          protector.style.backgroundColor = "black";
          protector.style.zIndex = 10;
          protector.style.backgroundImage = "url("+url['win_bg']+")";
          protector.style.backgroundSize = "100%";
          setTimeout(() => {
               protector.innerHTML = "<div id='final' class='final'>Muchas gracias</div>";
               protector.innerHTML += "<div id='co' class='co'>Este dispositivo se autodestruirá en </div><div id='sec' class='sec'>00:09</div>";
               autodestrucc();
          }, 2000);
          musics("test","play",false,0.2);
          // pause();
          // favor();
     }, 270);
}

function autodestrucc(){
     let fel;
     let i = 8;
     fel = setInterval(() => {
          document.getElementById("sec").innerText = "00:0"+i;
          --i;
          if(i == -1){
               document.getElementById("sec").innerText = "Es broma :³";
               clearInterval(fel);
          }
     }, 1000);
}

function favor(){
     setTimeout(() => {
          write("Un momento","protector",100);
     }, 2500);
}

function screenHide(){
     let clearScrean;
     let i = 1;
     clearScrean = setInterval(() => {
             i -= 0.01;
             document.getElementById("protector").style.opacity = i;
             if(document.getElementById("protector").style.opacity <= 0){
                 clearInterval(clearScrean);
             }
         }, 10);
 }

 let inis;
 function dance(a){
     var t = false;
     inis = setInterval(() => {
          bs(a[0]+":"+a[1]+"="+t);
          actor("chinx/37");
          t = !t;
     }, 100);
 }

 function stopDance(a){
     clearInterval(inis);
 }

 function condNext(){
     
     if( control.btnNextAvailable ){
          
          // console.log("ta bien");
          control.reproAuto = false;
          
          next();
     }else{
          // console.log("que raro");
     }
 }

 var controlValue;

 function controlAuto(){
     if(control.reproAuto == true || control.reproAuto == "true"){
          document.getElementById("controlAuto").style.backgroundColor = "orange";
          document.getElementById("controlAuto").innerText = "OFF";
          control.reproAuto = false;
     }else{
          document.getElementById("controlAuto").style.backgroundColor = "greenyellow";
          document.getElementById("controlAuto").innerText = "ON";
          control.reproAuto = true;
          if(control.repro != true){
               next();
          }
     }
 }

 function controlON(){
     document.getElementById("controlAuto").style.backgroundColor = "greenyellow";
     document.getElementById("controlAuto").innerText = "ON";
 }

 function controlOFF(){
     document.getElementById("controlAuto").style.backgroundColor = "orange";
     document.getElementById("controlAuto").innerText = "OFF";
 }

// NEW NEW NEW NEW NEW NEW NEW NEW
// NEW NEW NEW NEW NEW NEW NEW NEW
// NEW NEW NEW NEW NEW NEW NEW NEW
// NEW NEW NEW NEW NEW NEW NEW NEW
// NEW NEW NEW NEW NEW NEW NEW NEW


// let fps = document.getElementById('fps_data');
// let fps_control = document.getElementById('fps_control');

// setInterval(() => {
//      fps.innerHTML = "";
//      Object.entries(control).forEach(e => {
//           const [k,v] = e;
//           fps.innerHTML += k + " : "+ v +"<br>";
//      });
//      fps.innerHTML += "--------------<br>";
//      fps_control.innerHTML = "<span id='ctrl'>"+control.state+"</span>";
//      Object.entries(talking).forEach(e => {
//           const [k,v] = e;
//           fps.innerHTML += k + " : "+ v +"<br>";
//      });
// }, 500);

// document.getElementById('fps_control').addEventListener("click",play);


// NEW NEW NEW NEW NEW NEW NEW NEW
// NEW NEW NEW NEW NEW NEW NEW NEW
// NEW NEW NEW NEW NEW NEW NEW NEW
// NEW NEW NEW NEW NEW NEW NEW NEW

function boxU(a){
     document.getElementById("front").style.flexWrap = "nowrap";
}

function boxD(a){
     document.getElementById("front").style.flexWrap = "wrap";
}

let t;
function changeBG(f){
     clearInterval(t);
     let c = false;
     let o = 0.95
     let bg = document.getElementById("bg");
     bg.style.opacity = 1;
     t = setInterval(() => {
          bg.style.opacity = o;
          if(!c){
               o -= 0.02;
          }else{
               o += 0.02;
          }

          if(o <= 0){
               bg.style.background = "url('"+ url["bg_"+f[0]]+"')";
               if(f[1] == 1 || f[1 == "1"]){
                    bg.style.backgroundSize = "100% 100%";
               }else{
                    bg.style.backgroundSize = (100*f[1])+"% 100%";
               }
               bg.style.backgroundPosition = "-"+((f[2] - 1)*100)+"% 0%";
               c = true;
          }
          if(o >= 1){
               clearInterval(t);
          }
         
     }, 10);
}

function hideBox(v){
     let b = document.getElementById("caja");
     if(v){
          b.style.display = "none";
     }else{
          b.style.display = "flex";
     }
}