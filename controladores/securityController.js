
const convertidor = require("../utils/convertirTxtXML");


async function handleXMl(req,res){
    
    //txt to xml
<<<<<<< HEAD
    try {
        if(req.body.tipo == "txt" && req.body.convertir_a == "xml"){
            res.status(200).json({result: convertidor.convertFunctions.txtToXML(req.body.file), 
                tipo: 'xml'});
        }
    
        //xml to txt
        if(req.body.tipo == "xml" && req.body.convertir_a == "txt"){
            res.status(200).json({result: convertidor.convertFunctions.xmlToTxt(req.body.file), 
                tipo: 'txt'});
        }
    
        //txt to json
        if(req.body.tipo == "txt" && req.body.convertir_a == "json"){
            return convertidor.convertFunctions.TxtToJson(req.body.file);
        }
    
        //json to txt
        if(req.body.tipo == "json" && req.body.convertir_a == "txt"){
            return convertidor.convertFunctions.JsonToTxt(req.body.file);
        }
    
        
    
    } catch (error) {
        console.log(error);
        res.status(404).json({result: 'Error'})
    }
   
=======
    if(req.body.tipo == "txt" && req.body.convertir_a == "xml"){
        return convertidor.convertFunctions.txtToXML(req.body.file);
    }

    //xml to txt
    if(req.body.tipo == "xml" && req.body.convertir_a == "txt"){
        return convertidor.convertFunctions.xmlToTxt(req.body.file);
    }

    //txt to json
    if(req.body.tipo == "txt" && req.body.convertir_a == "json"){
        return convertidor.convertFunctions.TxtToJson(req.body.file);
    }

    //json to txt
    if(req.body.tipo == "json" && req.body.convertir_a == "txt"){
        return convertidor.convertFunctions.XmlToJson(req.body.file);
    }


>>>>>>> 2593c0dc0b6a56e8961bcc0520748f9d0e0abb4f





}

module.exports.handlexml = handleXMl;