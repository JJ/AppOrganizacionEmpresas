
total = 0;
var context = new Object();
context.name = "Organización Empresas"
var context_menu = new Object();



function leerAsignaturas(json) {
  asig = new Array();
  cod = new Array();
  context.asignatura = new Array();
  total = json.feed.entry.length;
  for(i=0; i<total; i++){
    asig[i] = json.feed.entry[i].gsx$asignatura.$t;
    cod[i] = json.feed.entry[i].gsx$codigoasignatura.$t;
    context.asignatura[i] = {nombre: asig[i], codigo: cod[i]};
  }
}


function leerMenu(json) {
  menu = new Array();
  total = json.feed.entry.length;
  for(i=0; i<total; i++){
    menu[i] = json.feed.entry[i].gsx$menu.$t;
  }
}



/***************************************************/
