


function txtToXML(file){

}

function xmlToTxt(file){

}

function JsonToTxt(file){
    const myObj = { name: "John", age: 31, city: "New York" };
    const myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);

    // Retrieving data:
    let text = localStorage.getItem("testJSON");
    let obj = JSON.parse(text);
}

function TxtToJson(file){

}

function XmlToJson(file){

}

function JsonToXml(file){

}

module.exports.convertFunctions = {
    txtToXML,xmlToTxt,JsonToTxt,TxtToJson,XmlToJson,JsonToXml
}