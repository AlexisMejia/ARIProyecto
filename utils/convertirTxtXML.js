
const fs = require('fs')
const xmlcsv = require("xml-csv");
const transform = require('camaro')
const json2csv = require('json2csv').parse

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

async function xmlToTxt(file){
    try {
        console.log(file);
    const template = {
        data: [ "//cliente",{
            documento: 'documento',
            primer_nombre: 'primer-nombre',
            apellido: 'apellido',
            credit_card: "credit-card",
            tipo: "tipo",
            telefono: "telefono"
        }]

    }

    var result = await transform.transform(file, template);
    console.log(result);
    var csv = json2csv(result.data)
    console.log(csv);
        return "";
    } catch (error) {
        console.log(error);
        return ""
    }
    
    
}

function JsonToTxt(file){
    
    var data  = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(file)); 

    var a       = document.createElement('a'); 
      a.href      = 'data:' + data; 
      a.download  = 'data.txt'; 
      a.innerHTML = 'download .txt file of json'; 
}

function TxtToJson(file){
    const obj = JSON.parse(file);
}

function XmlToJson(file){

}

function JsonToXml(file){

}

module.exports.convertFunctions = {
    txtToXML,xmlToTxt,JsonToTxt,TxtToJson,XmlToJson,JsonToXml
}