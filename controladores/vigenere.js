function cifrado() {
    
    var duitest = "4613827503116";
    var duiarray =duitest.split("");
    for (var i=0; i < duiarray.length; i++){
    	duiarray[i] = parseInt(duiarray[i]);
    }
    //document.getElementById("demo").innerHTML = duiarray;

    var clave = [5,2,6,7,8,4,3,9,1];
    
    var coder = [[0,1,2,3,4,5,6,7,8,9],
                 [1,2,3,4,5,6,7,8,9,0],
                 [2,3,4,5,6,7,8,9,0,1],
                 [3,4,5,6,7,8,9,0,1,2],
                 [4,5,6,7,8,9,0,1,2,3],
                 [5,6,7,8,9,0,1,2,3,4],
                 [6,7,8,9,0,1,2,3,4,5],
                 [7,8,9,0,1,2,3,4,5,6],
                 [8,9,0,1,2,3,4,5,6,7],
                 [9,0,1,2,3,4,5,6,7,8]];

    var duicodiado =[];                 

    //var dui = document.getElementById("dui").value;
	for(var i=0; i < 13; i++){
        for(var j=0; j<10; j++){
            if(duiarray[i] == coder[0][j]){
                x = coder[0][j];
                //document.getElementById("demo").innerHTML = x;
                for(var j=0; j<10; j++){
                  if(clave[i] == coder[j][0]){
                      y = coder[j][0];
                      //document.getElementById("demo").innerHTML = y;
                  }
        		}
                duicodiado[i] = coder[x][y];
                //document.getElementById("demo").innerHTML = duicodiado[5];
            }
        }
    }
    //document.getElementById("demo").innerHTML = duicodiado;
}
