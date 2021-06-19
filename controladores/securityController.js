
const convertidor = require("../utils/convertirTxtXML");


async function handleXMl(req,res){
    
    //txt to xml
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
            var resultado = await convertidor.convertFunctions.TxtToJson(req.body.file);
            res.status(200).json({result: resultado, 
                tipo: 'json'});
        }
    
        //json to txt
        if(req.body.tipo == "json" && req.body.convertir_a == "txt"){
            res.status(200).json({result: convertidor.convertFunctions.JsonToTxt(req.body.file), 
                tipo: 'txt'});
        }
    
        
    
    } catch (error) {
        console.log(error);
        res.status(404).json({result: 'Error'})
    }
   





}

module.exports.handlexml = handleXMl;