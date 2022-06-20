var btn = document.getElementById("btn_submit");
var file = document.getElementById("formFile");
var option = document.getElementById("formSelect");
var delimitador = document.getElementById("llave");
var clave = document.getElementById("clave");
var dnl = document.getElementById("donwloadfile");
var origen = document.getElementById("originf");
var resultadof = document.getElementById("resultf");


btn.addEventListener("click", handleSubmit);


function handleSubmit(e) {
    e.preventDefault();
    var fetchjson = {


    };
    if (file.value.split(".")[1] == 'txt' ||
        file.value.split(".")[1] == 'xml' || file.value.split(".")[1] == 'json') {

        if (file.value.split(".")[1] != option.options[option.selectedIndex].text) {
            console.log(clave.value.length);
            if (clave.value.length == 16) {
                fetchjson.tipo = file.value.split(".")[1];
                fetchjson.convertir_a = option.options[option.selectedIndex].text;

                fetchjson.clave = clave.value;
                fetchjson.delimitador = delimitador.value;
                var myFile = file.files[0];
                var reader = new FileReader();
                reader.readAsText(myFile);
                reader.onload = function () {
                    var strfile = reader.result;
                    origen.value = reader.result;
                    fetchjson.file = strfile;
                    console.log(fetchjson);
                    var re = /[0-9]{16}/g;
                    var s = strfile;
                    var m;
                    let newstrfile = strfile;
                    do {
                        m = re.exec(s);
                        if (m) {
                            console.log(m);
                            var aux = strfile.substr(m.index, 16);
                            console.log(aux);
                            var aux_cifrado = cifrado(aux, clave.value);
                            console.log(aux_cifrado);
                            var descifrado = decifrado(aux_cifrado, clave.value);
                            console.log(descifrado);
                            newstrfile = newstrfile.replace(aux, (macth) => {
                                return aux_cifrado;
                            })
                        }
                    } while (m)

                    fetchjson.file = newstrfile

                    request(fetchjson);

                }
            } else {
                alert("la llave deben ser 16 numeros enteros sin espacios");
            }



        } else {
            alert("valores iguales a convertir, ingrese un valor diferente");
        }

    } else {
        alert("Favor adjuntar la información solicitada para convertir los archivos");
    }


}

function request(data) {
    var url = '/';


    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:'))
        .then(response => {

            console.log(response);
            var re = /[0-9]{16}/g;
            var s = response.result;
            var m;
            let newstrfile = response.result;
            do {
                m = re.exec(s);
                if (m) {
                    console.log(m);
                    var aux = response.result.substr(m.index, 16);
                    console.log(aux);

                    var descifrado = decifrado(aux, clave.value);
                    console.log(descifrado);
                    newstrfile = newstrfile.replace(aux, (macth) => {
                        return descifrado;
                    })
                }
            } while (m)

            resultadof.value = newstrfile.toString();
            if (response.tipo == "xml") {
                dnl.classList.remove("d-none");
                dnl.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(newstrfile))
                dnl.setAttribute('download', "resultado.xml");
            }

            if (response.tipo == "txt") {
                dnl.classList.remove("d-none");
                dnl.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(newstrfile))
                dnl.setAttribute('download', "resultado.txt");
            }

            if (response.tipo == "json") {
                dnl.classList.remove("d-none");
                dnl.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(newstrfile))
                dnl.setAttribute('download', "resultado.json");
            }

        });
}

