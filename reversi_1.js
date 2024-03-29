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
//declare variables
var gameRun = true;
var whiteTurn = true;
//draw the board
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
                allowedMove(0,0,"black");
                //board[0][0] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>70 && x< 120 && y > 20 && y < 70 && board[0][1] == "."){
                allowedMove(0,1,"black");
                //board[0][1] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>120 && x< 170 && y > 20 && y < 70 && board[0][2] == "."){
                allowedMove(0,2,"black");
                //board[0][2] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>170 && x< 220 && y > 20 && y < 70 && board[0][3] == "."){
                allowedMove(0,3,"black");
                //board[0][3] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>220 && x< 270 && y > 20 && y < 70 && board[0][4] == "."){
                allowedMove(0,4,"black");
                //board[0][4] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>270 && x< 320 && y > 20 && y < 70 && board[0][5] == "."){
                allowedMove(0,5,"black");
                //board[0][5] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>320 && x< 370 && y > 20 && y < 70 && board[0][6] == "."){
                allowedMove(0,6,"black");
                //board[0][6] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>370 && x< 420 && y > 20 && y < 70 && board[0][7] == "."){
                allowedMove(0,7,"black");
                //board[0][7] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            //SECOND ROW
            
            else if(x>20 && x< 70 && y > 70 && y < 120 && board[1][0] == "."){
                allowedMove(1,0,"black");
                //board[1][0] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            
            }
            else if(x>70 && x< 120 && y > 70 && y < 120 && board[1][1] == "."){
                allowedMove(1,1,"black");
                //board[1][1] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>120 && x< 170 && y > 70 && y < 120 && board[1][2] == "."){
                allowedMove(1,2,"black");
                //board[1][2] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>170 && x< 220 && y > 70 && y < 120 && board[1][3] == "."){
                allowedMove(1,3,"black");
                //board[1][3] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>220 && x< 270 && y > 70 && y < 120 && board[1][4] == "."){
                allowedMove(1,4,"black");
                //board[1][4] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>270 && x< 320 && y > 70 && y < 120 && board[1][5] == "."){
                allowedMove(1,5,"black");
                //board[1][5] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>320 && x< 370 && y > 70 && y < 120 && board[1][6] == "."){
                allowedMove(1,6,"black");
                //board[1][6] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>370 && x< 420 && y > 70 && y < 120 && board[1][7] == "."){
                allowedMove(1,7,"black");
                //board[1][7] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }//THIRD ROW
            else if(x>20 && x< 70 && y > 120 && y < 170 && board[2][0] == "."){
                allowedMove(2,0,"black");
                //board[2][0] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            
            }
            else if(x>70 && x< 120 && y > 120 && y < 170 && board[2][1] == "."){
                allowedMove(2,1,"black");
                //board[2][1] = "B";
                //();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>120 && x< 170 && y > 120 && y < 170 && board[2][2] == "."){
                allowedMove(2,2,"black");
                //board[2][2] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>170 && x< 220 && y > 120 && y < 170 && board[2][3] == "."){
                allowedMove(2,3,"black");
                //board[2][3] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>220 && x< 270 && y > 120 && y < 170 && board[2][4] == "."){
                allowedMove(2,4,"black");
                //board[2][4] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>270 && x< 320 && y > 120 && y < 170 && board[2][5] == "."){
                allowedMove(2,5,"black");
                //board[2][5] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>320 && x< 370 && y > 120 && y < 170 && board[2][6] == "."){
                allowedMove(2,6,"black");
                //board[2][6] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>370 && x< 420 && y > 120 && y < 170 && board[2][7] == "."){
                allowedMove(2,7,"black");
                //board[2][7] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }//FOURTH ROW
            else if(x>20 && x< 70 && y > 170 && y < 220 && board[3][0] == "."){
                allowedMove(3,0,"black");
                //board[3][0] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            
            }
            else if(x>70 && x< 120 && y > 170 && y < 220 && board[3][1] == "."){
                allowedMove(3,1,"black");
                //board[3][1] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>120 && x< 170 && y > 170 && y < 220 && board[3][2] == "."){
                allowedMove(3,2,"black");
                //board[3][2] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>170 && x< 220 && y > 170 && y < 220 && board[3][3] == "."){
                allowedMove(3,3,"black");
                //board[3][3] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>220 && x< 270 && y > 170 && y < 220 && board[3][4] == "."){
                allowedMove(3,4,"black");
                //board[3][4] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>270 && x< 320 && y > 170 && y < 220 && board[3][5] == "."){
                allowedMove(3,5,"black");
                //board[3][5] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>320 && x< 370 && y > 170 && y < 220 && board[3][6] == "."){
                allowedMove(3,6,"black");
                //board[3][6] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>370 && x< 420 && y > 170 && y < 220 && board[3][7] == "."){
                allowedMove(3,7,"black");
                //board[3][7] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }//FIFTH ROW
            else if(x>20 && x< 70 && y > 220 && y < 270 && board[4][0] == "."){
                allowedMove(4,0,"black");
                //board[4][0] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            
            }
            else if(x>70 && x< 120 && y > 220 && y < 270 && board[4][1] == "."){
                allowedMove(4,1,"black");
                //board[4][1] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>120 && x< 170 && y > 220 && y < 270 && board[4][2] == "."){
                allowedMove(4,2,"black");
                //board[4][2] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>170 && x< 220 && y > 220 && y < 270 && board[4][3] == "."){
                allowedMove(4,3,"black");
                //board[4][3] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>220 && x< 270 && y > 220 && y < 270 && board[4][4] == "."){
                allowedMove(4,4,"black");
                //board[4][4] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>270 && x< 320 && y > 220 && y < 270 && board[4][5] == "."){
                allowedMove(4,5,"black");
                //board[4][5] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>320 && x< 370 && y > 220 && y < 270 && board[4][6] == "."){
                allowedMove(4,6,"black");
                //board[4][6] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>370 && x< 420 && y > 220 && y < 270 && board[4][7] == "."){
                allowedMove(4,7,"black");
                //board[4][7] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }//SIXTH ROW
            else if(x>20 && x< 70 && y > 270 && y < 320 && board[5][0] == "."){
                allowedMove(5,0,"black");
                //board[5][0] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            
            }
            else if(x>70 && x< 120 && y > 270 && y < 320 && board[5][1] == "."){
                allowedMove(5,1,"black");
                //board[5][1] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>120 && x< 170 && y > 270 && y < 320 && board[5][2] == "."){
                allowedMove(5,2,"black");
                //board[5][2] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>170 && x< 220 && y > 270 && y < 320 && board[5][3] == "."){
                allowedMove(5,3,"black");
                //board[5][3] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>220 && x< 270 && y > 270 && y < 320 && board[5][4] == "."){
                allowedMove(5,4,"black");
                //board[5][4] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>270 && x< 320 && y > 270 && y < 320 && board[5][5] == "."){
                allowedMove(5,5,"black");
                //board[5][5] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>320 && x< 370 && y > 270 && y < 320 && board[5][6] == "."){
                allowedMove(5,6,"black");
                //board[5][6] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>370 && x< 420 && y > 270 && y < 320 && board[5][7] == "."){
                allowedMove(5,7,"black");
                //board[5][7] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }//ROW 7
            else if(x>20 && x< 70 && y > 320 && y < 370 && board[6][0] == "."){
                allowedMove(6,0,"black");
                //board[6][0] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            
            }
            else if(x>70 && x< 120 && y > 320 && y < 370 && board[6][1] == "."){
                allowedMove(6,1,"black");
                //board[6][1] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>120 && x< 170 && y > 320 && y < 370 && board[6][2] == "."){
                allowedMove(6,2,"black");
                //board[6][2] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>170 && x< 220 && y > 320 && y < 370 && board[6][3] == "."){
                allowedMove(6,3,"black");
                //board[6][3] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>220 && x< 270 && y > 320 && y < 370 && board[6][4] == "."){
                allowedMove(6,4,"black");
                //board[6][4] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>270 && x< 320 && y > 320 && y < 370 && board[6][5] == "."){
                allowedMove(6,5,"black");
                //board[6][5] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>320 && x< 370 && y > 320 && y < 370 && board[6][6] == "."){
                allowedMove(6,6,"black");
                //board[6][6] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>370 && x< 420 && y > 320 && y < 370 && board[6][7] == "."){
                allowedMove(6,7,"black");
                //board[6][7] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }//ROW 8
            else if(x>20 && x< 70 && y > 370 && y < 420 && board[7][0] == "."){
                allowedMove(7,0,"black");
                //board[7][0] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            
            }
            else if(x>70 && x< 120 && y > 370 && y < 420 && board[7][1] == "."){
                allowedMove(7,1,"black");
                //board[7][1] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>120 && x< 170 && y > 370 && y < 420 && board[7][2] == "."){
                allowedMove(7,2,"black");
                //board[7][2] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>170 && x< 220 && y > 370 && y < 420 && board[7][3] == "."){
                allowedMove(7,3,"black");
                //board[7][3] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>220 && x< 270 && y > 370 && y < 420 && board[7][4] == "."){
                allowedMove(7,4,"black");
                //board[7][4] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>270 && x< 320 && y > 370 && y < 420 && board[7][5] == "."){
                allowedMove(7,5,"black");
                //board[7][5] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>320 && x< 370 && y > 370 && y < 420 && board[7][6] == "."){
                allowedMove(7,6,"black");
                //board[7][6] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }
            else if(x>370 && x< 420 && y > 370 && y < 420 && board[7][7] == "."){
                allowedMove(7,7,"black");
                //board[7][7] = "B";
                //drawBoard();
                //whiteTurn = true;
                //document.getElementById("turnIndicator").innerHTML = "White Turn";
            }


        }
    }
    //console.log("x:" + x + " y:" + y);
}, false);
function allowedMove(row,column,colourTurn){
    //[N,NE,E,SE,S,SW,W,NW]
    arrayBuilder = [
        [[0,0,7,7,7,0,0,0],[0,0,6,6,7,1,1,0],[0,0,5,5,7,2,2,0],[0,0,4,4,7,3,3,0],[0,0,3,3,7,4,4,0],[0,0,2,2,7,5,5,0],[0,0,1,1,7,6,6,0],[0,0,0,0,7,7,7,0]],
        [[1,1,7,6,6,0,0,0],[1,1,6,6,6,1,1,1],[1,1,5,5,6,2,2,1],[1,1,4,4,6,3,3,1],[1,1,3,3,6,4,4,1],[1,1,2,2,6,5,5,1],[1,1,1,1,6,6,6,1],[1,0,0,0,6,6,7,1]],
        [[2,2,7,5,5,0,0,0],[2,2,6,5,5,1,1,1],[2,2,5,5,5,2,2,2],[2,2,4,4,5,3,3,2],[2,2,3,3,5,4,4,2],[2,2,2,2,5,5,5,2],[2,1,1,1,5,5,6,2],[2,0,0,0,5,5,7,2]],
        [[3,3,7,4,4,0,0,0],[3,3,6,4,4,1,1,1],[3,3,5,4,4,2,2,2],[3,3,4,4,4,3,3,3],[3,3,3,4,4,4,4,3],[3,2,2,2,4,4,5,3],[3,1,1,1,4,4,6,3],[3,0,0,0,4,4,7,3]],
        [[4,4,7,3,3,0,0,0],[4,4,6,3,3,1,1,1],[4,4,5,3,3,2,2,2],[4,4,4,3,3,3,3,3],[4,3,3,3,3,3,4,4],[4,2,2,2,3,3,5,4],[4,1,1,1,3,3,6,4],[4,0,0,0,3,3,7,4]],
        [[5,5,7,2,2,0,0,0],[5,5,6,2,2,1,1,1],[5,5,5,2,2,2,2,2],[5,4,4,2,2,2,3,3],[5,3,3,2,2,2,4,4],[5,2,2,2,2,2,5,5],[5,1,1,1,2,2,6,5],[5,0,0,0,2,2,7,5]],
        [[6,6,7,1,1,0,0,0],[6,6,6,1,1,1,1,1],[6,5,5,1,1,1,2,2],[6,4,4,1,1,1,3,3],[6,3,3,1,1,1,4,4],[6,2,2,1,1,1,5,5],[6,1,1,1,1,1,6,6],[6,0,0,0,1,1,7,6]],
        [[7,7,7,0,0,0,0,0],[7,6,6,0,0,0,1,1],[7,5,5,0,0,0,2,2],[7,4,4,0,0,0,3,3],[7,3,3,0,0,0,4,4],[7,2,2,0,0,0,5,5],[7,1,1,0,0,0,6,6],[7,0,0,0,0,0,7,7]]
    ]

    arrayNorth = [];
    arrayNorthEast = [];
    arrayEast = [];
    arraySouthEast = [];
    arraySouth = [];
    arraySouthWest = [];
    arrayWest = [];
    arrayNorthWest = [];

    //build the North Array
    
    for(i = 0; i < arrayBuilder[row][column][0]; i ++){
        arrayNorth.push(board[row - i - 1][column]);
    }
    //build the North East Array
    for(i=0; i < arrayBuilder[row][column][1]; i++){
        arrayNorthEast.push(board[row-i-1][column+i+1]);
    }
    //build the East Array
    for(i=0; i < arrayBuilder[row][column][2]; i++){
        arrayEast.push(board[row][column+i+1]);
    }
    //build the array for SouthEast
    for(i=0; i < arrayBuilder[row][column][3]; i++){
        arraySouthEast.push(board[row+i+1][column+i+1]);
    }
    //build the array for South
    for(i=0; i < arrayBuilder[row][column][4]; i++){
        arraySouth.push(board[row+i+1][column]);
    }
    //build the array for SouthWest
    for(i=0; i < arrayBuilder[row][column][5]; i++){
        arraySouthWest.push(board[row+i+1][column-i-1]);
    }
    //build the array for West
    for(i=0; i < arrayBuilder[row][column][6]; i++){
        arrayWest.push(board[row][column-i-1]);
    }
    //build the array for NorthWest
    for(i=0; i < arrayBuilder[row][column][7]; i++){
        arrayNorthWest.push(board[row-i-1][column-i-1]);
    }
    
    //CHECK THE ARRAYS
    
    //console.log("North : " + arrayNorth);
    //console.log("NorthEast : " + arrayNorthEast);
    //console.log("East : " + arrayEast);
    //console.log("arrayEast : "+ arrayEast[0]);
    //console.log("SouthEast : " + arraySouthEast);
    //console.log("South : " + arraySouth);
    //console.log("SouthWest : " + arraySouthWest);
    //console.log("West : " + arrayWest);
    //console.log("NorthWest : " + arrayNorthWest);
    
    if(colourTurn == "white"){
        //check each array to find out if there is a run of black followed
        //by a white. If there is, change the black tokens to white
       
        //North Array
        if(arrayNorth[0] == "B"){
            
            arrayIndexes = [];
            for(i=0; i < arrayNorth.length; i++){
                
                if(arrayNorth[i] == "W"){
                    arrayIndexes.push(i);
                }
                var turnIndex = Math.min.apply(Math,arrayIndexes);
                
            }
            if(arrayIndexes.length != 0){
                for(i=0; i < turnIndex+1; i++){
                    board[row-i-1][column] = "W";
                }
                board[row][column] = "W";
                whiteTurn = false;
                document.getElementById('turnIndicator').innerHTML = "Black Turn";
            }
        }
        //North East Array
        if(arrayNorthEast[0] == "B"){

            arrayIndexes = [];
            for(i=0; i < arrayNorthEast.length; i++){

                if(arrayNorthEast[i] == "W"){
                    arrayIndexes.push(i);
                }
                var turnIndex = Math.min.apply(Math,arrayIndexes);
                
            }
            if(arrayIndexes.length != 0){
                for(i=0; i < turnIndex+1; i++){
                    board[row-i-1][column+i+1] = "W";
                }
                board[row][column] = "W";
                whiteTurn = false;
                document.getElementById('turnIndicator').innerHTML = "Black Turn";
            }
        }
        //East Array
        if(arrayEast[0] == "B"){
            
            arrayIndexes = [];
            for(i=0; i < arrayEast.length; i++){
                
                if(arrayEast[i] == "W"){
                    arrayIndexes.push(i);
                }
                var turnIndex = Math.min.apply(Math,arrayIndexes);
                
            }
            if(arrayIndexes.length != 0){
                for(i=0; i < turnIndex+1; i++){
                    board[row][column+i+1] = "W";
                }
                board[row][column] = "W";
                whiteTurn = false;
                document.getElementById('turnIndicator').innerHTML = "Black Turn";
            }
        }
        //South East Array
        if(arraySouthEast[0] == "B"){
            
            arrayIndexes = [];
            for(i=0; i < arraySouthEast.length; i++){
                
                if(arraySouthEast[i] == "W"){
                    arrayIndexes.push(i);
                }
                var turnIndex = Math.min.apply(Math,arrayIndexes);
                
            }
            if(arrayIndexes.length != 0){
                for(i=0; i < turnIndex+1; i++){
                    board[row+i+1][column+i+1] = "W";
                }
                board[row][column] = "W";
                whiteTurn = false;
                document.getElementById('turnIndicator').innerHTML = "Black Turn";
            }
        }
        //South Array
        if(arraySouth[0] == "B"){
            
            arrayIndexes = [];
            for(i=0; i < arraySouth.length; i++){
                
                if(arraySouth[i] == "W"){
                    arrayIndexes.push(i);
                }
                var turnIndex = Math.min.apply(Math,arrayIndexes);
                
            }
            if(arrayIndexes.length != 0){
                for(i=0; i < turnIndex+1; i++){
                    board[row+i+1][column] = "W";
                }
                board[row][column] = "W";
                whiteTurn = false;
                document.getElementById('turnIndicator').innerHTML = "Black Turn";
            }
        }
        //South West Array
        if(arraySouthWest[0] == "B"){
            
            arrayIndexes = [];
            for(i=0; i < arraySouthWest.length; i++){
                
                if(arraySouthWest[i] == "W"){
                    arrayIndexes.push(i);
                }
                var turnIndex = Math.min.apply(Math,arrayIndexes);
                
            }
            if(arrayIndexes.length != 0){
                for(i=0; i < turnIndex+1; i++){
                    board[row+i+1][column-i-1] = "W";
                }
                board[row][column] = "W";
                whiteTurn = false;
                document.getElementById('turnIndicator').innerHTML = "Black Turn";
            }
        }
        //West Array
        if(arrayWest[0] == "B"){
            
            arrayIndexes = [];
            for(i=0; i < arrayWest.length; i++){
                
                if(arrayWest[i] == "W"){
                    arrayIndexes.push(i);
                }
                var turnIndex = Math.min.apply(Math,arrayIndexes);
                
            }
            if(arrayIndexes.length != 0){
                for(i=0; i < turnIndex+1; i++){
                    board[row][column-i-1] = "W";
                }
                board[row][column] = "W";
                whiteTurn = false;
                document.getElementById('turnIndicator').innerHTML = "Black Turn";
            }
        }
        //North West Array
        if(arrayNorthWest[0] == "B"){
            
            arrayIndexes = [];
            for(i=0; i < arrayNorthWest.length; i++){
                
                if(arrayNorthWest[i] == "W"){
                    arrayIndexes.push(i);
                }
                var turnIndex = Math.min.apply(Math,arrayIndexes);
                
            }
            if(arrayIndexes.length != 0){
                for(i=0; i < turnIndex+1; i++){
                    board[row-i-1][column-i-1] = "W";
                }
                board[row][column] = "W";
                whiteTurn = false;
                document.getElementById('turnIndicator').innerHTML = "Black Turn";
            }
        }
    }
    /////////////////////////////////////////////////////////////////////////////////
    //DEAL WITH BLACKS
    /////////////////////////////////////////////////////////////////////////////////
    else{
        //North Array
        if(arrayNorth[0] == "W"){
            
            arrayIndexes = [];
            for(i=0; i < arrayNorth.length; i++){
                
                if(arrayNorth[i] == "B"){
                    arrayIndexes.push(i);
                }
                var turnIndex = Math.min.apply(Math,arrayIndexes);
                
            }
            if(arrayIndexes.length != 0){
                for(i=0; i < turnIndex+1; i++){
                    board[row-i-1][column] = "B";
                }
                board[row][column] = "B";
                whiteTurn = true;
                document.getElementById('turnIndicator').innerHTML = "White Turn";
            }
        }
        //North East Array
        if(arrayNorthEast[0] == "W"){

            arrayIndexes = [];
            for(i=0; i < arrayNorthEast.length; i++){

                if(arrayNorthEast[i] == "B"){
                    arrayIndexes.push(i);
                }
                var turnIndex = Math.min.apply(Math,arrayIndexes);
                
            }
            if(arrayIndexes.length != 0){
                for(i=0; i < turnIndex+1; i++){
                    board[row-i-1][column+i+1] = "B";
                }
                board[row][column] = "B";
                whiteTurn = true;
                document.getElementById('turnIndicator').innerHTML = "White Turn";
            }
        }
        //East Array
        if(arrayEast[0] == "W"){
            
            arrayIndexes = [];
            for(i=0; i < arrayEast.length; i++){
                
                if(arrayEast[i] == "B"){
                    arrayIndexes.push(i);
                }
                var turnIndex = Math.min.apply(Math,arrayIndexes);
                
            }
            if(arrayIndexes.length != 0){
                for(i=0; i < turnIndex+1; i++){
                    board[row][column+i+1] = "B";
                }
                board[row][column] = "B";
                whiteTurn = true;
                document.getElementById('turnIndicator').innerHTML = "White Turn";
            }
        }
        //South East Array
        if(arraySouthEast[0] == "W"){
            
            arrayIndexes = [];
            for(i=0; i < arraySouthEast.length; i++){
                
                if(arraySouthEast[i] == "B"){
                    arrayIndexes.push(i);
                }
                var turnIndex = Math.min.apply(Math,arrayIndexes);
                
            }
            if(arrayIndexes.length != 0){
                for(i=0; i < turnIndex+1; i++){
                    board[row+i+1][column+i+1] = "B";
                }
                board[row][column] = "B";
                whiteTurn = true;
                document.getElementById('turnIndicator').innerHTML = "White Turn";
            }
        }
        //South Array
        if(arraySouth[0] == "W"){
            
            arrayIndexes = [];
            for(i=0; i < arraySouth.length; i++){
                
                if(arraySouth[i] == "B"){
                    arrayIndexes.push(i);
                }
                var turnIndex = Math.min.apply(Math,arrayIndexes);
                
            }
            if(arrayIndexes.length != 0){
                for(i=0; i < turnIndex+1; i++){
                    board[row+i+1][column] = "B";
                }
                board[row][column] = "B";
                whiteTurn = true;
                document.getElementById('turnIndicator').innerHTML = "White Turn";
            }
        }
        //South West Array
        if(arraySouthWest[0] == "W"){
            
            arrayIndexes = [];
            for(i=0; i < arraySouthWest.length; i++){
                
                if(arraySouthWest[i] == "B"){
                    arrayIndexes.push(i);
                }
                var turnIndex = Math.min.apply(Math,arrayIndexes);
                
            }
            if(arrayIndexes.length != 0){
                for(i=0; i < turnIndex+1; i++){
                    board[row+i+1][column-i-1] = "B";
                }
                board[row][column] = "B";
                whiteTurn = true;
                document.getElementById('turnIndicator').innerHTML = "White Turn";
            }
        }
        //West Array
        if(arrayWest[0] == "W"){
            
            arrayIndexes = [];
            for(i=0; i < arrayWest.length; i++){
                
                if(arrayWest[i] == "B"){
                    arrayIndexes.push(i);
                }
                var turnIndex = Math.min.apply(Math,arrayIndexes);
                
            }
            if(arrayIndexes.length != 0){
                for(i=0; i < turnIndex+1; i++){
                    board[row][column-i-1] = "B";
                }
                board[row][column] = "B";
                whiteTurn = true;
                document.getElementById('turnIndicator').innerHTML = "White Turn";
            }
        }
        //North West Array
        if(arrayNorthWest[0] == "W"){
            
            arrayIndexes = [];
            for(i=0; i < arrayNorthWest.length; i++){
                
                if(arrayNorthWest[i] == "B"){
                    arrayIndexes.push(i);
                }
                var turnIndex = Math.min.apply(Math,arrayIndexes);
                
            }
            if(arrayIndexes.length != 0){
                for(i=0; i < turnIndex+1; i++){
                    board[row-i-1][column-i-1] = "B";
                }
                board[row][column] = "B";
                whiteTurn = true;
                document.getElementById('turnIndicator').innerHTML = "White Turn";
            }
        }
    }







    

       
    //reset the checking arrays
    arrayNorth = [];
    arrayNorthEast = [];
    arrayEast = [];
    arraySouthEast = [];
    arraySouth = [];
    arraySouthWest = [];
    arrayWest = [];
    arrayNorthWest = [];
    
    drawBoard();
    
}

drawBoard();