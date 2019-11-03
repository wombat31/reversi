var board = [
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".","B","W",".",".","."],
    [".",".",".","W","B",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."]
]

var gameRun = true;
var whiteTurn = true;

function drawBoard(){
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    //draw the green background
    ctx.beginPath();
    ctx.fillStyle = "darkGreen";
    ctx.fillRect(20,20,400,400);
    ctx.closePath();
    //add the division lines
    
    for(x = 1; x<8; x++){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.lineWidth = 2;
        ctx.moveTo((x*50)+20,20);
        ctx.lineTo((x*50)+20,420);
        //ctx.stroke();
        //ctx.closePath();
        //ctx.beginPath();
        ctx.moveTo(20, (x*50)+20);
        ctx.lineTo(420, (x*50)+20);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        
    }

    //draw circles dependent on colour if they exist
    for (y=0; y<8; y++){
        for (x=0; x<8; x++){
            if(board[y][x] == "B"){
                ctx.save();
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.arc(((x+1)*50)-5,((y+1)*50)-5,15,0,Math.PI*2,false);
                ctx.stroke();
                ctx.fillStyle="black";
                ctx.fill();
                ctx.closePath();
                
                ctx.restore();

            }
            else {
                if(board[y][x] == "W"){
                    ctx.save();
                    ctx.beginPath();
                    ctx.strokeStyle = "white";
                    ctx.arc(((x+1)*50)-5,((y+1)*50)-5,15,0,Math.PI*2,false);
                    ctx.stroke();
                    ctx.fillStyle="white";
                    ctx.fill();
                    ctx.closePath();
                    ctx.restore();
                }
            }
        }
    }
}

function topRowPlaceBuildArrays(column,row){
    arrayEast = [];
    arraySouthEast = [];
    arraySouth = [];
    arraySouthWest = [];
    arrayWest = [];

    for(i=0; i < 7-column; i++){
        arrayEast.push(board[row][column+i+1]);
        arraySouthEast.push(board[row+i+1][column+i+1]);
        
    }
    for(i=0; i < 7-row; i++){
        arraySouth.push(board[row+i+1][column]);
    }
    for(i=0; i < column; i++){
        arraySouthWest.push(board[row+i+1][column-i-1]);
    }

    for(i=0; i < column; i++){
        arrayWest.push(board[row][column-i-1]);
    }
    if(arrayEast[0] == "." && arraySouthEast[0] == "." && arraySouth[0] == "."  && arraySouthWest[0] == "." && arrayWest[0] == "."){
        alert("Invalid Move");
        arrayEast = [];
        arraySouthEast = [];
        arraySouth = [];
        arraySouthWest = [];
        arrayWest = [];
    }
}

function bottomRowPlaceBuildArrays(column,row){
    arrayWest = [];
    arrayNorthWest = [];
    arrayNorth = [];
    arrayNorthEast = [];
    arrayEast = [];

    for(i=0; i < column; i++){
        arrayWest.push(board[row][column-i-1]);
        arrayNorthWest.push(board[row-i-1][column-i-1]);
    }

    for(i=0; i < row; i++){
        arrayNorth.push(board[row-i-1][column]);
    }

    for(i=0; i < 7 - column; i++){
        arrayNorthEast.push(board[row-i-1][column+i+1]);
        arrayEast.push(board[row][column+i+1]);
    }
    if(arrayWest[0] == "." && arrayNorthWest[0] == "." && arrayNorth[0] == "." && arrayNorthEast[0] == "." && arrayEast[0] == "."){
        alert("That is an invalid move");
        arrayWest = [];
        arrayNorthWest = [];
        arrayNorth = [];
        arrayNorthEast = [];
        arrayEast = [];
    }
}


function rightColumnPlaceBuildArrays(column,row){
    arraySouth = [];
    arraySouthWest = [];
    arrayWest = [];
    arrayNorthWest = [];
    arrayNorth = [];

    for (i=0; i < 7-row; i++){
        arraySouth.push(board[row+i+1][column]);
        arraySouthWest.push(board[row+i+1][column-i-1]);
    }

    for(i=0; i < column;i++){
        arrayWest.push(board[row][column-i-1]);
    }

    for(i=0; i < row; i ++){
        arrayNorthWest.push(board[row-i-1][column-i-1]);
        arrayNorth.push(board[row-i-1][column]);
    }
    if(arraySouth[0] == "." && arraySouthWest[0] == "." && arrayWest[0] == "." && arrayNorthWest[0] == "." && arrayNorth[0] == "."){
        alert("Invalid Move");
        arraySouth = [];
        arraySouthWest = [];
        arrayWest = [];
        arrayNorthWest = [];
        arrayNorth = [];
    }
}

function leftColumnPlaceBuildArrays(column,row){
    
    arrayNorth = [];
    arrayNorthEast = [];
    arrayEast = [];
    arraySouthEast = [];
    arraySouth = [];

    for(i=0; i < row; i++){
        arrayNorth.push(board[row-i-1][column]);
        arrayNorthEast.push(board[row-i-1][column+i+1]);
        
    }

    for(i=0; i < 7; i ++){
        arrayEast.push(board[row][column+i+1]);
    }

    for(i=0; i < 7 - row; i++){
        arraySouthEast.push(board[row+i+1][column+i+1]);
        arraySouth.push(board[row+i+1][column]);
    }
    if(arrayNorth[0] == "." && arrayNorthEast[0] == "." && arrayEast[0] == "." && arraySouthEast[0] == "." && arraySouth[0] == "."){
        alert("That is an invalid move!");
        arrayNorth = [];
        arrayNorthEast = [];
        arrayEast = [];
        arraySouthEast = [];
        arraySouth = [];
    }

}

function middlePlaceBuildArrays(column,row){
    
    arrayNorth = [];
    arrayNorthEast = [];
    arrayEast = [];
    arraySouthEast = [];
    arraySouth = [];
    arraySouthWest = [];
    arrayWest = [];
    arrayNorthWest = [];

    //console.log("in middleBuildArray");
    //load north ------> NorthWest arrays
    //north
    for (i=0; i < row; i ++){
        arrayNorth.push(board[row-i-1][column]);
        
    }
    //south
    for(i=0; i < 7-row; i++){
        arraySouth.push(board[row+i+1][column]);
    }
    //east
    for(i=0; i < 7-column; i++){
        arrayEast.push(board[row][column+i+1]);
    }
    //west
    for(i=0; i < column; i++){
        arrayWest.push(board[row][column-i-1]);
    }
    //northEast.southEast.southWest.northWest
    northEastArrayBuildLength = [
        [0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,0],
        [2,2,2,2,2,2,1,0],
        [3,3,3,3,3,2,1,0],
        [4,4,4,4,3,2,1,0],
        [5,5,5,4,3,2,1,0],
        [6,6,5,4,3,2,1,0],
        [7,6,5,4,3,2,1,0]
    ]
    for(i=0;i < northEastArrayBuildLength[row][column]; i++){
        arrayNorthEast.push(board[row-i-1][column+i+1]);
    }
    southEastArrayBuildLength = [
        [7,6,5,4,3,2,1,0],
        [6,6,5,4,3,2,1,0],
        [5,5,5,4,3,2,1,0],
        [4,4,4,4,3,2,1,0],
        [3,3,3,3,3,2,1,0],
        [2,2,2,2,2,2,1,0],
        [1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0]
    ]

    for(i=0; i < southEastArrayBuildLength[row][column];i++){
        arraySouthEast.push(board[row+i+1][column+i+1]);
    }
    southWestArrayBuildLength = [
        [0,1,2,3,4,5,6,7],
        [0,1,2,3,4,5,6,6],
        [0,1,2,3,4,5,5,5],
        [0,1,2,3,4,4,4,4],
        [0,1,2,3,3,3,3,3],
        [0,1,2,2,2,2,2,2],
        [0,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0]
    ]
    
    for(i=0; i < southWestArrayBuildLength[row][column];i++){
        arraySouthWest.push(board[row+i+1][column-i-1]);
    }

    northWestArrayBuildLength =  [
        [0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1],
        [0,1,2,2,2,2,2,2],
        [0,1,2,3,3,3,3,3],
        [0,1,2,3,4,4,4,4],
        [0,1,2,3,4,5,5,5],
        [0,1,2,3,4,5,6,6],
        [0,1,2,3,4,5,6,7]
    ]

    for(i=0; i < northWestArrayBuildLength[row][column];i++){
        arrayNorthWest.push(board[row-i-1][column-i-1]);
    }
    if(arrayNorth[0] == "." && arrayNorthEast[0] == "." && arrayEast[0] == "." && arraySouthEast[0] == "." && arraySouth[0] == "." && arraySouthWest[0] == "." && arrayWest[0] == "." && arrayNorthWest == "."){
        alert("That is an invalid move!");
        arrayNorth = [];
        arrayNorthEast = [];
        arrayEast = [];
        arraySouthEast = [];
        arraySouth = [];
        arraySouthWest = [];
        arrayWest = [];
        arrayNorthWest = [];
    }

}



//add an event listener for canvas clicked
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

myCanvas.addEventListener('click', function(event) {
    
    var rect = myCanvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    /* LOOP FUNCTION MISFIRES AFTER A WHILE
    if(gameRun){
        console.log("before loop x:" + x + " y:" + y);
        for (g=0; g<8; g++){
            for (f=0; f<8; f++){
                if (whiteTurn){
                    //add a loop to check and add new piece
                    if(x>((f*50)+20) && x <((f*50))+70 && y>((g*50)+20) && y <((g*50)+70) && board[g][f]== "."){
                        console.log(board[g][f]);
                        board[g][f] = "W";
                        console.log("x: " + x + " y: " + y);
                        console.log("g: " + g + " f: " + f);
                        drawBoard();
                        whiteTurn = false;
                        document.getElementById('turnIndicator').innerHTML = "Black Turn";
                        
                    }
                } else {
                    //add black tokens
                    if(x>((f*50)+20) && x <((f*50))+70 && y>((g*50)+20) && y <((g*50)+70) && board[f][g]== "."){
                        console.log(board[g][f]);
                        board[g][f] = "B";
                        console.log("x: " + x + " y: " + y);
                        console.log("g: " + g + " f: " + f);
                        drawBoard();
                        whiteTurn = true;
                        document.getElementById('turnIndicator').innerHTML = "White Turn";
                        
                    }
                }
            }
        }
    }*/
    //LONGHAND THE FUNCTION
    
    if(gameRun){
        
        if(whiteTurn){//TOP ROW
            if(x>20 && x< 70 && y > 20 && y < 70 && board[0][0] == "."){
                //board[0][0] = "W";
                allowedMove(0,0,"white");
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            
            }
            else if(x>70 && x< 120 && y > 20 && y < 70 && board[0][1] == "."){
                //board[0][1] = "W";
                allowedMove(0,1,"white");
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>120 && x< 170 && y > 20 && y < 70 && board[0][2] == "."){
                //board[0][2] = "W";
                allowedMove(0,2,"white");
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>170 && x< 220 && y > 20 && y < 70 && board[0][3] == "."){
                //board[0][3] = "W";
                allowedMove(0,3,"white");
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>220 && x< 270 && y > 20 && y < 70 && board[0][4] == "."){
                //board[0][4] = "W";
                allowedMove(0,4,"white");
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>270 && x< 320 && y > 20 && y < 70 && board[0][5] == "."){
                //board[0][5] = "W";
                allowedMove(0,5,"white");
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>320 && x< 370 && y > 20 && y < 70 && board[0][6] == "."){
                //board[0][6] = "W";
                allowedMove(0,6,"white");
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>370 && x< 420 && y > 20 && y < 70 && board[0][7] == "."){
                //board[0][7] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
                allowedMove(0,7,"white");
            }//SECOND ROW

            else if(x>20 && x< 70 && y > 70 && y < 120 && board[1][0] == "."){
                
                allowedMove(1,0,"white");
                //board[1][0] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            
            }
            else if(x>70 && x< 120 && y > 70 && y < 120 && board[1][1] == "."){
                
                allowedMove(1,1,"white");
                //board[1][1] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>120 && x< 170 && y > 70 && y < 120 && board[1][2] == "."){
                allowedMove(1,2,"white");
                //board[1][2] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>170 && x< 220 && y > 70 && y < 120 && board[1][3] == "."){
                allowedMove(1,3,"white");
                //board[1][3] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>220 && x< 270 && y > 70 && y < 120 && board[1][4] == "."){
                allowedMove(1,4,"white");
                //board[1][4] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>270 && x< 320 && y > 70 && y < 120 && board[1][5] == "."){
                allowedMove(1,5,"white");
                //board[1][5] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>320 && x< 370 && y > 70 && y < 120 && board[1][6] == "."){
                allowedMove(1,6,"white");
                //board[1][6] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>370 && x< 420 && y > 70 && y < 120 && board[1][7] == "."){
                allowedMove(1,7,"white");
                //board[1][7] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }//THIRD ROW
            else if(x>20 && x< 70 && y > 120 && y < 170 && board[2][0] == "."){
                
                allowedMove(2,0,"white");
                //board[2][0] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            
            }
            else if(x>70 && x< 120 && y > 120 && y < 170 && board[2][1] == "."){
                allowedMove(2,1,"white");
                //board[2][1] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>120 && x< 170 && y > 120 && y < 170 && board[2][2] == "."){
                allowedMove(2,2,"white");
                //board[2][2] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>170 && x< 220 && y > 120 && y < 170 && board[2][3] == "."){
                allowedMove(2,3,"white");
                //board[2][3] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>220 && x< 270 && y > 120 && y < 170 && board[2][4] == "."){
                allowedMove(2,4,"white");
                //board[2][4] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>270 && x< 320 && y > 120 && y < 170 && board[2][5] == "."){
                allowedMove(2,5,"white");
                //board[2][5] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>320 && x< 370 && y > 120 && y < 170 && board[2][6] == "."){
                allowedMove(2,6,"white");
                //board[2][6] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>370 && x< 420 && y > 120 && y < 170 && board[2][7] == "."){
                allowedMove(2,7,"white");
                //board[2][7] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }//ROW 4
            else if(x>20 && x< 70 && y > 170 && y < 220 && board[3][0] == "."){
                allowedMove(3,0,"white");
                //board[3][0] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            
            }
            else if(x>70 && x< 120 && y > 170 && y < 220 && board[3][1] == "."){
                allowedMove(3,1,"white");
                //board[3][1] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>120 && x< 170 && y > 170 && y < 220 && board[3][2] == "."){
                allowedMove(3,2,"white");
                //board[3][2] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>170 && x< 220 && y > 170 && y < 220 && board[3][3] == "."){
                allowedMove(3,3,"white");
                //board[3][3] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>220 && x< 270 && y > 170 && y < 220 && board[3][4] == "."){
                allowedMove(3,4,"white");
                //board[3][4] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>270 && x< 320 && y > 170 && y < 220 && board[3][5] == "."){
                allowedMove(3,5,"white");
                //board[3][5] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>320 && x< 370 && y > 170 && y < 220 && board[3][6] == "."){
                allowedMove(3,6,"white");
                //board[3][6] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>370 && x< 420 && y > 170 && y < 220 && board[3][7] == "."){
                allowedMove(3,7,"white");
                //board[3][7] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }//ROW 5
            else if(x>20 && x< 70 && y > 220 && y < 270 && board[4][0] == "."){
                allowedMove(4,0,"white");
                //board[4][0] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            
            }
            else if(x>70 && x< 120 && y > 220 && y < 270 && board[4][1] == "."){
                allowedMove(4,1,"white");
                //board[4][1] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>120 && x< 170 && y > 220 && y < 270 && board[4][2] == "."){
                allowedMove(4,2,"white");
                //board[4][2] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>170 && x< 220 && y > 220 && y < 270 && board[4][3] == "."){
                allowedMove(4,3,"white");
                //board[4][3] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>220 && x< 270 && y > 220 && y < 270 && board[4][4] == "."){
                allowedMove(4,4,"white");
                //board[4][4] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>270 && x< 320 && y > 220 && y < 270 && board[4][5] == "."){
                allowedMove(4,5,"white");
                //board[4][5] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>320 && x< 370 && y > 220 && y < 270 && board[4][6] == "."){
                allowedMove(4,6,"white");
                //board[4][6] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>370 && x< 420 && y > 220 && y < 270 && board[4][7] == "."){
                allowedMove(4,7,"white");
                //board[4][7] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }//ROW 6
            else if(x>20 && x< 70 && y > 270 && y < 320 && board[5][0] == "."){
                allowedMove(5,0,"white");
                //board[5][0] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            
            }
            else if(x>70 && x< 120 && y > 270 && y < 320 && board[5][1] == "."){
                allowedMove(5,1,"white");
                //board[5][1] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>120 && x< 170 && y > 270 && y < 320 && board[5][2] == "."){
                allowedMove(5,2,"white");
                //board[5][2] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>170 && x< 220 && y > 270 && y < 320 && board[5][3] == "."){
                allowedMove(5,3,"white");
                //board[5][3] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>220 && x< 270 && y > 270 && y < 320 && board[5][4] == "."){
                allowedMove(5,4,"white");
                //board[5][4] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>270 && x< 320 && y > 270 && y < 320 && board[5][5] == "."){
                allowedMove(5,5,"white");
                //board[5][5] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>320 && x< 370 && y > 270 && y < 320 && board[5][6] == "."){
                allowedMove(5,6,"white");
                //board[5][6] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>370 && x< 420 && y > 270 && y < 320 && board[5][7] == "."){
                allowedMove(5,7,"white");
                //board[5][7] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }//ROW 7
            else if(x>20 && x< 70 && y > 320 && y < 370 && board[6][0] == "."){
                allowedMove(6,0,"white");
                //board[6][0] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            
            }
            else if(x>70 && x< 120 && y > 320 && y < 370 && board[6][1] == "."){
                allowedMove(6,1,"white");
                //board[6][1] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>120 && x< 170 && y > 320 && y < 370 && board[6][2] == "."){
                allowedMove(6,2,"white");
                //board[6][2] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>170 && x< 220 && y > 320 && y < 370 && board[6][3] == "."){
                allowedMove(6,3,"white");
                //board[6][3] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>220 && x< 270 && y > 320 && y < 370 && board[6][4] == "."){
                allowedMove(6,4,"white");
                //board[6][4] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>270 && x< 320 && y > 320 && y < 370 && board[6][5] == "."){
                allowedMove(6,5,"white");
                //board[6][5] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>320 && x< 370 && y > 320 && y < 370 && board[6][6] == "."){
                allowedMove(6,6,"white");
                //board[6][6] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>370 && x< 420 && y > 320 && y < 370 && board[6][7] == "."){
                allowedMove(6,7,"white");
                //board[6][7] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }//ROW 8
            else if(x>20 && x< 70 && y > 370 && y < 420 && board[7][0] == "."){
                allowedMove(7,0,"white");
                //board[7][0] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            
            }
            else if(x>70 && x< 120 && y > 370 && y < 420 && board[7][1] == "."){
                
                allowedMove(7,1,"white");
                //board[7][1] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>120 && x< 170 && y > 370 && y < 420 && board[7][2] == "."){
                allowedMove(7,2,"white");
                //board[7][2] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>170 && x< 220 && y > 370 && y < 420 && board[7][3] == "."){
                allowedMove(7,3,"white");
                //board[7][3] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>220 && x< 270 && y > 370 && y < 420 && board[7][4] == "."){
                allowedMove(7,4,"white");
                //board[7][4] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>270 && x< 320 && y > 370 && y < 420 && board[7][5] == "."){
                allowedMove(7,5,"white");
                //board[7][5] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>320 && x< 370 && y > 370 && y < 420 && board[7][6] == "."){
                allowedMove(7,6,"white");
                //board[7][6] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>370 && x< 420 && y > 370 && y < 420 && board[7][7] == "."){
                allowedMove(7,7,"white");
                //board[7][7] = "W";
                //drawBoard();
                //whiteTurn = false;
                //document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }


        } else {//BLACK TOKENS
            if(x>20 && x< 70 && y > 20 && y < 70 && board[0][0] == "."){
                board[0][0] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>70 && x< 120 && y > 20 && y < 70 && board[0][1] == "."){
                board[0][1] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>120 && x< 170 && y > 20 && y < 70 && board[0][2] == "."){
                board[0][2] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>170 && x< 220 && y > 20 && y < 70 && board[0][3] == "."){
                board[0][3] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>220 && x< 270 && y > 20 && y < 70 && board[0][4] == "."){
                board[0][4] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>270 && x< 320 && y > 20 && y < 70 && board[0][5] == "."){
                board[0][5] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>320 && x< 370 && y > 20 && y < 70 && board[0][6] == "."){
                board[0][6] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>370 && x< 420 && y > 20 && y < 70 && board[0][7] == "."){
                board[0][7] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            //SECOND ROW
            
            else if(x>20 && x< 70 && y > 70 && y < 120 && board[1][0] == "."){
                board[1][0] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            
            }
            else if(x>70 && x< 120 && y > 70 && y < 120 && board[1][1] == "."){
                board[1][1] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>120 && x< 170 && y > 70 && y < 120 && board[1][2] == "."){
                board[1][2] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>170 && x< 220 && y > 70 && y < 120 && board[1][3] == "."){
                board[1][3] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>220 && x< 270 && y > 70 && y < 120 && board[1][4] == "."){
                board[1][4] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>270 && x< 320 && y > 70 && y < 120 && board[1][5] == "."){
                board[1][5] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>320 && x< 370 && y > 70 && y < 120 && board[1][6] == "."){
                board[1][6] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>370 && x< 420 && y > 70 && y < 120 && board[1][7] == "."){
                board[1][7] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }//THIRD ROW
            else if(x>20 && x< 70 && y > 120 && y < 170 && board[2][0] == "."){
                board[2][0] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            
            }
            else if(x>70 && x< 120 && y > 120 && y < 170 && board[2][1] == "."){
                board[2][1] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>120 && x< 170 && y > 120 && y < 170 && board[2][2] == "."){
                board[2][2] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>170 && x< 220 && y > 120 && y < 170 && board[2][3] == "."){
                board[2][3] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>220 && x< 270 && y > 120 && y < 170 && board[2][4] == "."){
                board[2][4] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>270 && x< 320 && y > 120 && y < 170 && board[2][5] == "."){
                board[2][5] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>320 && x< 370 && y > 120 && y < 170 && board[2][6] == "."){
                board[2][6] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>370 && x< 420 && y > 120 && y < 170 && board[2][7] == "."){
                board[2][7] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }//FOURTH ROW
            else if(x>20 && x< 70 && y > 170 && y < 220 && board[3][0] == "."){
                board[3][0] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            
            }
            else if(x>70 && x< 120 && y > 170 && y < 220 && board[3][1] == "."){
                board[3][1] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>120 && x< 170 && y > 170 && y < 220 && board[3][2] == "."){
                board[3][2] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>170 && x< 220 && y > 170 && y < 220 && board[3][3] == "."){
                board[3][3] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>220 && x< 270 && y > 170 && y < 220 && board[3][4] == "."){
                board[3][4] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>270 && x< 320 && y > 170 && y < 220 && board[3][5] == "."){
                board[3][5] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>320 && x< 370 && y > 170 && y < 220 && board[3][6] == "."){
                board[3][6] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>370 && x< 420 && y > 170 && y < 220 && board[3][7] == "."){
                board[3][7] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }//FIFTH ROW
            else if(x>20 && x< 70 && y > 220 && y < 270 && board[4][0] == "."){
                board[4][0] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            
            }
            else if(x>70 && x< 120 && y > 220 && y < 270 && board[4][1] == "."){
                board[4][1] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>120 && x< 170 && y > 220 && y < 270 && board[4][2] == "."){
                board[4][2] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>170 && x< 220 && y > 220 && y < 270 && board[4][3] == "."){
                board[4][3] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>220 && x< 270 && y > 220 && y < 270 && board[4][4] == "."){
                board[4][4] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>270 && x< 320 && y > 220 && y < 270 && board[4][5] == "."){
                board[4][5] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>320 && x< 370 && y > 220 && y < 270 && board[4][6] == "."){
                board[4][6] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>370 && x< 420 && y > 220 && y < 270 && board[4][7] == "."){
                board[4][7] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }//SIXTH ROW
            else if(x>20 && x< 70 && y > 270 && y < 320 && board[5][0] == "."){
                board[5][0] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            
            }
            else if(x>70 && x< 120 && y > 270 && y < 320 && board[5][1] == "."){
                board[5][1] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>120 && x< 170 && y > 270 && y < 320 && board[5][2] == "."){
                board[5][2] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>170 && x< 220 && y > 270 && y < 320 && board[5][3] == "."){
                board[5][3] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>220 && x< 270 && y > 270 && y < 320 && board[5][4] == "."){
                board[5][4] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>270 && x< 320 && y > 270 && y < 320 && board[5][5] == "."){
                board[5][5] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>320 && x< 370 && y > 270 && y < 320 && board[5][6] == "."){
                board[5][6] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>370 && x< 420 && y > 270 && y < 320 && board[5][7] == "."){
                board[5][7] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }//ROW 7
            else if(x>20 && x< 70 && y > 320 && y < 370 && board[6][0] == "."){
                board[6][0] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            
            }
            else if(x>70 && x< 120 && y > 320 && y < 370 && board[6][1] == "."){
                board[6][1] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>120 && x< 170 && y > 320 && y < 370 && board[6][2] == "."){
                board[6][2] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>170 && x< 220 && y > 320 && y < 370 && board[6][3] == "."){
                board[6][3] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>220 && x< 270 && y > 320 && y < 370 && board[6][4] == "."){
                board[6][4] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>270 && x< 320 && y > 320 && y < 370 && board[6][5] == "."){
                board[6][5] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>320 && x< 370 && y > 320 && y < 370 && board[6][6] == "."){
                board[6][6] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>370 && x< 420 && y > 320 && y < 370 && board[6][7] == "."){
                board[6][7] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }//ROW 8
            else if(x>20 && x< 70 && y > 370 && y < 420 && board[7][0] == "."){
                board[7][0] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            
            }
            else if(x>70 && x< 120 && y > 370 && y < 420 && board[7][1] == "."){
                board[7][1] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>120 && x< 170 && y > 370 && y < 420 && board[7][2] == "."){
                board[7][2] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>170 && x< 220 && y > 370 && y < 420 && board[7][3] == "."){
                board[7][3] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>220 && x< 270 && y > 370 && y < 420 && board[7][4] == "."){
                board[7][4] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>270 && x< 320 && y > 370 && y < 420 && board[7][5] == "."){
                board[7][5] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>320 && x< 370 && y > 370 && y < 420 && board[7][6] == "."){
                board[7][6] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>370 && x< 420 && y > 370 && y < 420 && board[7][7] == "."){
                
                board[7][7] = "B";
                drawBoard();
                whiteTurn = true;
                document.getElementById("turnIndicator").innerHTML = "White Turn";
            }


        }
    }
    //console.log("x:" + x + " y:" + y);
}, false);

function allowedMove(row,column,colourTurn){
    if (colourTurn == "white"){
        
        /*THIS WORKS BY CHICKING ADJACENT BLOCKS FOR TOKENS
        if(row == 0 && column == 0 && board[row][column] == "."){//This looks after the 0 , 0 corner
            if(board[row][column+1] != "B"
            || board[row][column+1] != "W"
            || board[row+1][column+1] != "B"
            || board[row+1][column+1] != "W"
            || board[row+1][column] != "B"
            || board[row+1][column] != "W"
        ){
                alert("Not a valid move!");
               
            } else {
                board[row][column] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }

        }*/
        //***************FOUR CORNERS*************/
        if(row == 0 && column == 0 && board[row][column] == "."){//top left corner
            arrayEast = [];
            arraySouthEast = [];
            arraySouth = [];
            for (i = 0; i<=7; i++){
                arrayEast.push(board[column][row + i]);
                arraySouthEast.push(board[row + i][column + i]);
                arraySouth.push(board[row+i][column]);
            }
            if(arrayEast[0] == "." && arraySouthEast[0] == "." && arraySouth[0] == "."){
                alert("Invalid Move");
                
            }
            else {
                //run through arrays to check for possible reversi
            }
        }
        else if(row== 0 && column == 7 && board[row][column] == "."){//top right corner
            arraySouth = [];
            arraySouthWest = [];
            arrayWest = [];
            for (i=0; i<= 7; i++){
                arraySouth.push(board[row+i][column]);
                arraySouthWest.push(board[row + i][column - i]);
                arrayWest.push(board[row][column-1]);
            }
            if(arraySouth[0] == "." && arraySouthWest[0] == "." && arrayWest[0] == "."){
                alert("Invalid Move");
            }
            else {
                //run through arrays to check for possible reversi
            }
        }
        else if(row == 7 && column == 7 && board[row][column] == "."){//bottom right corner
            arrayWest = [];
            arrayNorthWest = [];
            arrayNorth = [];
            for (i=0; i<= 7; i++){
                arrayWest.push(board[row][column-1]);
                arrayNorthWest.push(board[row-1][column-1]);
                arrayNorth.push(board[row-1][column]);
            }
            if(arrayWest[0] == "." && arrayNorthWest[0] == "." && arrayNorth[0] == "."){
                alert("Invalid Move");
            }
            else {
                //run through arrays to check for possible reversi
            }
        }
        else if(row == 7 && column == 0 && board[row][column] == "."){//bottom left
            arrayNorth = [];
            arrayNorthEast = [];
            arrayEast = [];
            for (i=0; i<= 7; i++){
                arrayNorth.push(board[row-i][column]);
                arrayNorthEast.push(board[row-i][column+i]);
                arrayEast.push(board[row][column+i]);
            }
            if(arrayNorth[0] == "." && arrayNorthEast[0] == "." && arrayEast[0] == "."){
                alert("Invalid Move");
            }
            else {
                //run through array to check for possible reversi
            }
        ///////////CHECK THE SIDES////////////
        //TOP SIDE 
        }
        else if(row == 0 && board[row][column] == "." && (column == 1 || column ==2 || column == 3 || column == 4 || column == 5 || column == 6)){
            console.log("you have chosen the top row");
            topRowPlaceBuildArrays(column, row);
           
            console.log(arrayEast);
            console.log(arraySouthEast);
            console.log(arraySouth);
            console.log(arraySouthWest);
            console.log(arrayWest);
        }
        //consider the right column on the board
        else if ((row == 1 || row == 2 || row == 3 || row == 4 || row == 5 || row == 6) && column == 7 && board[row][column] == "."){
            console.log("You have chosen the right column");
            rightColumnPlaceBuildArrays(column, row);
            console.log(arraySouth);
            console.log(arraySouthWest);
            console.log(arrayWest);
            console.log(arrayNorthWest);
            console.log(arrayNorth);
        }

        //consider the bottom row on the board
        else if(row == 7 && (column == 1 || column == 2 || column == 3 || column == 4 || column == 5 || column == 6) && board[row][column] == "."){
            console.log("You have chosen the bottom row");
            bottomRowPlaceBuildArrays(column,row);
            console.log(arrayWest);
            console.log(arrayNorthWest);
            console.log(arrayNorth);
            console.log(arrayNorthEast);
            console.log(arrayEast);
        }
        //consider the left column on the board
        else if((column == 0) && (row == 1 || row == 2 || row == 3 || row == 4 || row == 5 || row == 6) && board[row][column] == "."){
            console.log("You have chosen the left column");
            leftColumnPlaceBuildArrays(column, row);
            console.log(arrayNorth);
            console.log(arrayNorthEast);
            console.log(arrayEast);
            console.log(arraySouthEast);
            console.log(arraySouth);
        }
        //consider the midle of the board
        else if(column != 0 && column != 7 && row != 0 && row != 7){
            console.log("You are in the middle");
            middlePlaceBuildArrays(column, row);
            console.log(arrayNorth);
            console.log(arrayNorthEast);
            console.log(arrayEast);
            console.log(arraySouthEast);
            console.log(arraySouth);
            console.log(arraySouthWest);
            console.log(arrayWest);
            console.log(arrayNorthWest);
        }
    }
}

drawBoard();