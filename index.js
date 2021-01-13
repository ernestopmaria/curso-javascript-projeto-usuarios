

var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function(field, index){

    if(field.name =="gender"){
        console.log("sim")
    }else{
        console.log("Não")
    }

    //console.log(index)



});