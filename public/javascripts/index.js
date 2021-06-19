


var btn = document.getElementById("btn_submit");
var file = document.getElementById("formFile");
var option = document.getElementById("formSelect");
var llave = document.getElementById("llave");
var clave = document.getElementById("clave");
var dnl = document.getElementById("donwloadfile");
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
            
            fetchjson.clave = clave.value;

            var myFile = file.files[0];
            var reader = new FileReader();
            reader.readAsText(myFile);
            reader.onload=function(){
                fetchjson.file = reader.result;
                console.log(fetchjson);
                request(fetchjson);
            }
            
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
    .catch(error => console.error('Error:'))
    .then(response => {
        console.log(response);
        if(response.tipo == "xml"){
            dnl.classList.remove("d-none");
            dnl.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(response.result))
            dnl.setAttribute('download', "resultado.xml");
        }

        if(response.tipo == "txt"){
            dnl.classList.remove("d-none");
            dnl.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(response.result))
            dnl.setAttribute('download', "resultado.txt");
        }

        if(response.tipo == "json"){
            dnl.classList.remove("d-none");
            dnl.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(response.result))
            dnl.setAttribute('download', "resultado.json");
        }
        
    });
}

