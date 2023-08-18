
/*

*/


// recibe un dato numerico y le asigna un string: "lunes", "martes", etc.

function diasSemana ( diaNumero ) {
    let diasCadena;  
    switch ( diaNumero ) {
        case 0:
            diasCadena = "Domingo";
        break;
        case 1: 
        diasCadena = "Lunes" ;
        break;
        case 2:
            diasCadena = "Martes";
        break;
        case 3:
            diasCadena = "Miercoles";
        break;
        case 4:
            diasCadena = "Jueves";
        break;
        case 5:
            diasCadena = "Viernes";
        break;
        case 6:
            diasCadena = "Sábado";
        break;
        default: 
            diasCadena = "No valido";
        } 
        return diasCadena;
}

// Recibe un dato numerico y le asigan una valor, si es laborable o no.

function diasLaborables ( numeroLaborable ) {
    let diaLaboral;
    
    if ( numeroLaborable >= 1 && numeroLaborable <= 5 ) {
        diaLaboral = "Dia laboral";
    } 
    else {
        diaLaboral = "Fin de semana";
    }
    return diaLaboral;
}

// crea una fecha a partir de un string (dia, mes y año).

function crearFecha ( dia, mes, anio) {
    const fecha = anio + "/" + mes + "/" + dia;
    console.log( fecha );
    return new Date (fecha);
}

function fechaLaborable() {

    let dia = (document.getElementById("dia").value );
    let mes = (document.getElementById("mes").value);
    let anio = (document.getElementById("anio").value);

let fechaUsuario = crearFecha( dia, mes, anio ).getDay(); // getDay, obtiene el dia de la semana en numero.
// console.log( diasSemana(fechaUsuario) + " " + diasLaborables(fechaUsuario));
(document.getElementById("resultado").value = ( diasSemana(fechaUsuario) + " " + diasLaborables(fechaUsuario)));

}