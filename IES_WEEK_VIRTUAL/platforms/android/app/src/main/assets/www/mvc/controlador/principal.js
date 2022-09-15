document.getElementById('nbbarra').style.backgroundColor="#D9233C";
document.getElementById('tbbarra').style.backgroundColor="#D9233C";
document.getElementById('btsalir').style.marginLeft="auto";
 $('#lunes').click(lunes);
 function lunes(){
    window.location.href='../vista/lunes.html';
 }
 $('#btsalir').click(btsalir);
 function btsalir(){
    navigator.app.exitApp();
 } 
