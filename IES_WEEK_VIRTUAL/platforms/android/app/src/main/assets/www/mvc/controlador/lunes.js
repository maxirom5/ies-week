document.getElementById('nbbarra').style.backgroundColor="#D9233C";
document.getElementById('tbbarra').style.backgroundColor="#D9233C";
document.getElementById('pcimagenes').align="center"; 
 $('#retornar').click(retornar);
 function retornar(){
    history.back();
 }
  $('#iesLunes').click(iesLunes);
 function iesLunes(){
 alert ("La oferta educativa del IES incluye los niveles:\n" +
 " – Primario\n – Secundario\n – Terciario\n – Universitario");
 }
  $('#iesUbicacion').click(iesUbicacion);
 function iesUbicacion(){
 alert ("Durante esta semana nos encontraremos en el auditorio del Ies");
 }
 $('#imIesLunes').click(imIesLunes);
 function imIesLunes(){
 alert ("La oferta educativa del IES incluye los niveles:\n" +
 " – Primario\n – Secundario\n – Terciario\n – Universitario");
}

