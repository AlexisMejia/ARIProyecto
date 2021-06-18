function cifrado() {
    
    var duitest = 258462450;
    var duiarray =[];
    for(var i=0; i<9 ;i++){
        duiarray[i] = duitest % 10;
        duitest = Math.floor(duitest / 10);
    }
    const reversed = duiarray.reverse();
    //document.getElementById("demo").innerHTML = duiarray[0];

    var clave = [5,2,6,7,8,0,3,9,1];
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

    for(var i=0; i < 10; i++){
        for(var j=0; j<10; j++){
            if(duiarray[j] == coder[0][j]){
                var x = coder[0][j];
            }document.getElementById("demo").innerHTML = x;
            
        }
        if(clave[i] == coder[i][0]){
            var y = coder[i][0];
        }
        for(var k=0; k<9; k++){
            duicodiado[k] = coder[x][y];
            
        }        
    }

}