


function txtToXML(file){

}

function xmlToTxt(file){

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