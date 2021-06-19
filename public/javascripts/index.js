


var btn = document.getElementById("btn_submit");
var file = document.getElementById("formFile");
var option = document.getElementById("formSelect");

btn.addEventListener("click", handleSubmit);


function handleSubmit(e){
    e.preventDefault();
    var fetchjson = {
        

    };
    if(file.value.split(".")[1] == 'txt' || 
     file.value.split(".")[1] == 'xml' || file.value.split(".")[1] == 'json'){
        
        if(file.value.split(".")[1] != option.options[option.selectedIndex].text ){

            fetchjson.tipo = file.value.split(".")[1];
            fetchjson.convertira = option.options[option.selectedIndex].text;
            console.log(fetchjson);

        }else{
            alert("valores iguales a convertir, ingrese un valor diferente");
        }

    }else{
        alert("El archivo no es del tipo correcto");
    }

    
}


