var phoneon = false

var callscreen = false;

function clickhome(){

    document.getElementById("home-button").style.filter = "brightness(60%)";
    setTimeout(() => {document.getElementById("home-button").style.filter="brightness(100%)"}, 100);
    if(callscreen == true){
      setTimeout(() => {document.getElementById("call-screen").style.display="none"}, 400);
      document.getElementById("text-screen").innerHTML="";
      qtdnumbers = 0;
      callscreen = false;
    }
    if(callingscreen == true){
      setTimeout(() => {document.getElementById("calling-screen").style.display="none"}, 400);
      document.getElementById("calling-number-text").innerHTML="";
      callscreen = false;
    }
  }
  
  function telainicial(){
    document.getElementById("tela-ligada").style.display = "flex";
  }
  
  function powerOn(){
      document.getElementById("tela").style.background = "black";
      document.getElementById("apple").style.display = "initial";
      setTimeout(() => {document.getElementById("tela-ligada").style.display="flex"}, 5000);    
  }

   
  const volume = document.getElementById("volume-bar-active");
  const nivelvolume = 50;
  function volumeUp(){
    document.getElementById("volume-bar").style.display = "flex"
    if(nivelvolume == 50){
      document.getElementById("volume-bar-active").style.height="80%";
      
    };
    setTimeout(() => {document.getElementById("volume-bar").style.display="none"}, 2000);
    
  }

  function volumeDown(){
    document.getElementById("volume-bar").style.display = "flex"
    if(nivelvolume == 50){
      document.getElementById("volume-bar-active").style.height="30%"
      nivelvolume = 30;
    }
    
    setTimeout(() => {document.getElementById("volume-bar").style.display="none"}, 2000);
    
  }


  function clickApp(element){
    element.style.transform = "scale(1.3)"
    setTimeout(() => {element.style.transform="scale(1)"}, 250);
  }

//tell-app functions

  function openTell(){
    document.getElementById("call").style.transform = "scale(1.3)"
    setTimeout(() => {document.getElementById("call").style.transform="scale(1)"}, 250);
    setTimeout(() => {document.getElementById("call-screen").style.display="flex"}, 800);
    callscreen = true;
  }

  var permission = true;
  var x = 0;
  var qtdnumbers = 0;
  function clickNumber(element){
    element.style.filter = "brightness(80%)"
    setTimeout(() => {element.style.filter="brightness(100%)"}, 250);
    x = document.activeElement.value;
    console.log(x);
    if(qtdnumbers <= 9){
      permission = true
    }else{
      permission = false;
    }
    if(permission == true){
      if(qtdnumbers == 1){
        
        document.getElementById("text-screen").insertAdjacentText("afterbegin", "(")
      }
      if(qtdnumbers == 3){
        document.getElementById("text-screen").insertAdjacentText("beforeend", ")")
      }
      if(qtdnumbers == 6){
        document.getElementById("text-screen").insertAdjacentText("beforeend", "-")
      }
      document.getElementById("text-screen").insertAdjacentText("beforeend", x);
      
      qtdnumbers += 1;
    }
      
    }
    
    
  


  function erase(){
    console.log("apagou");
    var number = document.getElementById("text-screen");
    var deletebutton = document.getElementById("delete-button");
    
    number.removeChild(number.lastChild);
    deletebutton.style.filter = "brightness(80%)"
    setTimeout(() => {deletebutton.style.filter="brightness(100%)"}, 250);
    if(qtdnumbers >= 0){qtdnumbers -= 1;}
    if(qtdnumbers < 0 ){qtdnumbers = 0}
    
    
  }

  //calling screen
  function clickButton(element){
    element.style.filter = "brightness(80%)"
    setTimeout(() => {element.style.filter="brightness(100%)"}, 250);
  }

  var callingscreen = false;
  function openCalling(){
    var numbercalling = document.getElementById("text-screen").innerText;
    document.getElementById("callbutton").style.filter = "brightness(80%)"
    setTimeout(() => {document.getElementById("callbutton").style.filter="brightness(100%)"}, 250);
    setTimeout(() => {document.getElementById("calling-screen").style.display="flex"}, 800);
    document.getElementById("calling-number-text").insertAdjacentText("beforeend", numbercalling);
    document.getElementById("text-screen").innerHTML="";
    qtdnumbers = 0;
    callingscreen = true;

  }

  


  function endCall(element){
    element.style.filter = "brightness(80%)"
    setTimeout(() => {element.style.filter="brightness(100%)"}, 250);
    setTimeout(() => {document.getElementById("calling-screen").style.display="none"}, 800);
    document.getElementById("text-screen").innerHTML="";
    document.getElementById("calling-number-text").innerHTML="";
    qtdnumbers = 0;
    callingscreen = false;
  }