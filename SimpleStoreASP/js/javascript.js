function vacio(elem){

    valor = elem.value;
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
    elem.style.border="2px solid red";
    document.getElementById(elem.id+"_sp").innerHTML = '[ERROR CAMPO VACIO] El campo '+ elem.id +' debe tener un valor.';
    } else {  
    elem.style.border="inherit";
    document.getElementById(elem.id+"_sp").innerHTML = '';
    }
}

function validar_email(elem){

    valor = elem.value;

    valor = elem.value;
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
    elem.style.border="2px solid red";
    document.getElementById(elem.id+"_sp").innerHTML = '[ERROR CAMPO VACIO] El campo '+ elem.id +' debe tener un valor.';
    } else if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)) || /^\s+$/.test(valor)) {
    elem.style.border="2px solid red";
    document.getElementById(elem.id+"_sp").innerHTML = '[ERROR CORREO] El campo '+ elem.id +' es erróneo.';
    } else {  
    elem.style.border="inherit";
    document.getElementById(elem.id+"_sp").innerHTML = '';
    }
}

function is_number(elem){

    valor = elem.value;

    if( valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
    elem.style.border="2px solid red";
    document.getElementById(elem.id+"_sp").innerHTML = '[ERROR CAMPO VACIO] El campo '+ elem.id +' debe tener un valor.';
    }else if( isNaN(valor) || valor < 5 || /\s/.test(valor)) {
    elem.style.border="2px solid red";
    document.getElementById(elem.id+"_sp").innerHTML = '[ERROR PRICE] El campo '+ elem.id +' debe ser un número,mayor a $5 y sin espacios.';
    } else {  
    elem.style.border="inherit";
    document.getElementById(elem.id+"_sp").innerHTML = '';
    }
}

function is_phonenumber(elem){

    valor = elem.value;

    if( valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
    elem.style.border="2px solid red";
    document.getElementById(elem.id+"_sp").innerHTML = '[ERROR CAMPO VACIO] El campo '+ elem.id +' debe tener un valor.';
    }else if( isNaN(valor) || !(/^([0-9]+){10}$/.test(valor)) || /\s/.test(valor) || valor.length > 10) {
    elem.style.border="2px solid red";
    document.getElementById(elem.id+"_sp").innerHTML = '[ERROR PHONE] El campo '+ elem.id +' debe ser un número telefónico de 10 dígitos y sin espacios.';
    } else {  
    elem.style.border="inherit";
    document.getElementById(elem.id+"_sp").innerHTML = '';
    }
}



window.onload = function(event) {
        

        document.getElementById("orderId").addEventListener("blur", function(elem){
        input = elem.target;
        vacio(input);
    });

        document.getElementById("orderName").addEventListener("blur", function(elem){
        input = elem.target;
        vacio(input);
    });
         document.getElementById("orderPrice").addEventListener("blur", function(elem){
        input = elem.target;
        is_number(input);
    });
        document.getElementById("customerName").addEventListener("blur", function(elem){
        input = elem.target;
        vacio(input);
    });

        document.getElementById("customerMail").addEventListener("blur", function(elem){
        input = elem.target;
        validar_email(input);
    });

    document.getElementById("customerPhone").addEventListener("blur", function(elem){
        input = elem.target;
        is_phonenumber(input);
    });
};