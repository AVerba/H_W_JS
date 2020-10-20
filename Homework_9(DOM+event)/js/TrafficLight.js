let countPush = 0;
function Traficlights(){
    countPush++;
  if(countPush == 4){
    countPush = 1;
  }
  SwitchLights();
}

let red = document.getElementById('redL')
let yellow = document.getElementById('yellowL')
let green = document.getElementById('greenL')
const Colours = ["#FF0000","#FFB300","#05FF0D","#7A0000","#7A5C00","#008000"];

function SwitchLights() {
    switch(countPush) {
        case 1:
            red.style.background = Colours[0];
            yellow.style.background = Colours[3];
            green.style.background = Colours[5]; 
        break;
        case 2:
            red.style.background = Colours[3];
            yellow.style.background = Colours[1];
            green.style.background = Colours[5]; 
        break;
        case 3:
            red.style.background = Colours[3];
            yellow.style.background = Colours[4];
            green.style.background = Colours[2]; 
        break;
    }
}
