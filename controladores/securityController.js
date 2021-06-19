
const convertidor = require("../utils/convertirTxtXML");


async function handleXMl(req,res){
    
    //txt to xml
    if(req.body.tipo == "txt" && req.body.convertir_a == "xml"){
        return convertidor.convertFunctions.txtToXML(req.body.file);
    }

    //txt to json
    if(req.body.tipo == "txt" && req.body.convertir_a == "json"){
        return convertidor.convertFunctions.TxtToJson(req.body.file);
    }

    //xml to txt
    if(req.body.tipo == "xml" && req.body.convertir_a == "txt"){
        return convertidor.convertFunctions.xmlToTxt(req.body.file);
    }

    //xml to json
    if(req.body.tipo == "xml" && req.body.convertir_a == "json"){
        return convertidor.convertFunctions.XmlToJson(req.body.file);
    }

    //json to txt
    //json to xml






}

module.exports.handlexml = handleXMl;