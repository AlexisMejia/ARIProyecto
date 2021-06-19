


var btn = document.getElementById("btn_submit");
var file = document.getElementById("formFile");
var option = document.getElementById("formSelect");
var llave = document.getElementById("llave");
var clave = document.getElementById("clave");
btn.addEventListener("click", handleSubmit);


function handleSubmit(e){
    e.preventDefault();
    var fetchjson = {
        

    };
    if(file.value.split(".")[1] == 'txt' || 
     file.value.split(".")[1] == 'xml' || file.value.split(".")[1] == 'json'){
        
        if(file.value.split(".")[1] != option.options[option.selectedIndex].text ){

            fetchjson.tipo = file.value.split(".")[1];
            fetchjson.convertir_a = option.options[option.selectedIndex].text;
            fetchjson.file = file.files[0];
            fetchjson.clave = clave.value;
            console.log(fetchjson);
            request(fetchjson);
        }else{
            alert("valores iguales a convertir, ingrese un valor diferente");
        }

    }else{
        alert("El archivo no es del tipo correcto");
    }

    
}

function request(data){
    var url = '/';
    
    
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {

        console.log('Success:', response)
        alert("succes");
    });
}

