
const fs = require('fs')
const xmlcsv = require("xml-csv");


function txtToXML(file){
    console.log(file);
    const fileContents = file;
    csvData = fileContents.split('\n').map(row => row.trim())

    let headings = csvData[0].split(';')

    let xml = ``
    xml += '<clientes>\n'
    for(let i = 1; i < csvData.length; i++) {
        let details = csvData[i].split(';')
        xml += "<cliente>\n"
            for(let j = 0; j < headings.length; j++) {
                xml += `    <${headings[j]}>${details[j]}</${headings[j]}>\n`;
            }
        xml += "</cliente>\n\n"
    }
    xml += '</clientes>\n'
    console.log(xml);
    return xml;
}

function xmlToTxt(file){
    var result;
    xmlcsv({
        source: file,
        rootXMLElement: "cliente",
        headerMap: [
            ['documento', 'documento', 'string'],
            ['primer-nombre', 'primero-nombre', 'string'],
            ['apellido', 'apellido', 'string'],
            ['credit-card', 'credit-card', 'string'],
            ['tipo', 'tipo', 'string'],
            ['telefono', 'telefono', 'string'],
        ]
    }).pipe(result);;
    console.log(fs.createWriteStream());
}

function JsonToTxt(file){
    
    var data  = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(file)); 

    var a       = document.createElement('a'); 
      a.href      = 'data:' + data; 
      a.download  = 'data.txt'; 
      a.innerHTML = 'download .txt file of json'; 
}

function TxtToJson(file){
    // fs npm package
    const fs = require("fs");
    csv = fs.readFileSync("file")


    var array = csv.toString().split("\r");
    let result = [];
    let headers = array[0].split(", ")

    for (let i = 1; i < array.length - 1; i++) {
        let obj = {}
        let str = array[i]
        let s = ''

        let flag = 0
        for (let ch of str) {
            if (ch === '"' && flag === 0) {
                flag = 1
            }
            else 
                if (ch === '"' && flag == 1) flag = 0
                if (ch === ', ' && flag === 0) ch = '|'
                if (ch !== '"') s += ch
        }


        let properties = s.split("|")

        for (let j in headers) {
            if (properties[j].includes(", ")) {
                obj[headers[j]] = properties[j]
                .split(", ").map(item => item.trim())
            }
            else obj[headers[j]] = properties[j]
        }

        result.push(obj)
    }

    let json = JSON.stringify(result);
    fs.writeFileSync('cliente.json', json);

}

function XmlToJson(file){

}

function JsonToXml(file){

}

module.exports.convertFunctions = {
    txtToXML,xmlToTxt,JsonToTxt,TxtToJson,XmlToJson,JsonToXml
}