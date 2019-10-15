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
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.lineWidth = 2;
        ctx.moveTo((x*50)+20,20);
        ctx.lineTo((x*50)+20,420);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(20, (x*50)+20);
        ctx.lineTo(420, (x*50)+20);
        ctx.stroke();
        ctx.closePath();
    }

    //draw circles dependent on colour if they exist
    for (y=0; y<8; y++){
        for (x=0; x<8; x++){
            if(board[y][x] == "B"){
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.arc(((x+1)*50)-5,((y+1)*50)-5,15,0,Math.PI*2,false);
                ctx.stroke();
                ctx.fillStyle="black";
                ctx.fill();
                ctx.closePath();
            }
            else {
                if(board[y][x] == "W"){
                    ctx.beginPath();
                    ctx.strokeStyle = "white";
                    ctx.arc(((x+1)*50)-5,((y+1)*50)-5,15,0,Math.PI*2,false);
                    ctx.stroke();
                    ctx.fillStyle="white";
                    ctx.fill();
                    ctx.closePath();
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
                board[0][0] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            
            }
            else if(x>70 && x< 120 && y > 20 && y < 70 && board[0][1] == "."){
                board[0][1] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>120 && x< 170 && y > 20 && y < 70 && board[0][2] == "."){
                board[0][2] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>170 && x< 220 && y > 20 && y < 70 && board[0][3] == "."){
                board[0][3] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>220 && x< 270 && y > 20 && y < 70 && board[0][4] == "."){
                board[0][4] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>270 && x< 320 && y > 20 && y < 70 && board[0][5] == "."){
                board[0][5] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>320 && x< 370 && y > 20 && y < 70 && board[0][6] == "."){
                board[0][6] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>370 && x< 420 && y > 20 && y < 70 && board[0][7] == "."){
                board[0][7] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }//SECOND ROW

            else if(x>20 && x< 70 && y > 70 && y < 120 && board[1][0] == "."){
                board[1][0] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            
            }
            else if(x>70 && x< 120 && y > 70 && y < 120 && board[1][1] == "."){
                board[1][1] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>120 && x< 170 && y > 70 && y < 120 && board[1][2] == "."){
                board[1][2] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>170 && x< 220 && y > 70 && y < 120 && board[1][3] == "."){
                board[1][3] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>220 && x< 270 && y > 70 && y < 120 && board[1][4] == "."){
                board[1][4] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>270 && x< 320 && y > 70 && y < 120 && board[1][5] == "."){
                board[1][5] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>320 && x< 370 && y > 70 && y < 120 && board[1][6] == "."){
                board[1][6] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>370 && x< 420 && y > 70 && y < 120 && board[1][7] == "."){
                board[1][7] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }//THIRD ROW
            else if(x>20 && x< 70 && y > 120 && y < 170 && board[2][0] == "."){
                board[2][0] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            
            }
            else if(x>70 && x< 120 && y > 120 && y < 170 && board[2][1] == "."){
                board[2][1] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>120 && x< 170 && y > 120 && y < 170 && board[2][2] == "."){
                board[2][2] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>170 && x< 220 && y > 120 && y < 170 && board[2][3] == "."){
                board[2][3] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>220 && x< 270 && y > 120 && y < 170 && board[2][4] == "."){
                board[2][4] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>270 && x< 320 && y > 120 && y < 170 && board[2][5] == "."){
                board[2][5] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>320 && x< 370 && y > 120 && y < 170 && board[2][6] == "."){
                board[2][6] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>370 && x< 420 && y > 120 && y < 170 && board[2][7] == "."){
                board[2][7] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }//ROW 4
            else if(x>20 && x< 70 && y > 170 && y < 220 && board[3][0] == "."){
                board[3][0] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            
            }
            else if(x>70 && x< 120 && y > 170 && y < 220 && board[3][1] == "."){
                board[3][1] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>120 && x< 170 && y > 170 && y < 220 && board[3][2] == "."){
                board[3][2] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>170 && x< 220 && y > 170 && y < 220 && board[3][3] == "."){
                board[3][3] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>220 && x< 270 && y > 170 && y < 220 && board[3][4] == "."){
                board[3][4] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>270 && x< 320 && y > 170 && y < 220 && board[3][5] == "."){
                board[3][5] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>320 && x< 370 && y > 170 && y < 220 && board[3][6] == "."){
                board[3][6] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>370 && x< 420 && y > 170 && y < 220 && board[3][7] == "."){
                board[3][7] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }//ROW 5
            else if(x>20 && x< 70 && y > 220 && y < 270 && board[4][0] == "."){
                board[4][0] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            
            }
            else if(x>70 && x< 120 && y > 220 && y < 270 && board[4][1] == "."){
                board[4][1] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>120 && x< 170 && y > 220 && y < 270 && board[4][2] == "."){
                board[4][2] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>170 && x< 220 && y > 220 && y < 270 && board[4][3] == "."){
                board[4][3] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>220 && x< 270 && y > 220 && y < 270 && board[4][4] == "."){
                board[4][4] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>270 && x< 320 && y > 220 && y < 270 && board[4][5] == "."){
                board[4][5] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>320 && x< 370 && y > 220 && y < 270 && board[4][6] == "."){
                board[4][6] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>370 && x< 420 && y > 220 && y < 270 && board[4][7] == "."){
                board[4][7] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }//ROW 6
            else if(x>20 && x< 70 && y > 270 && y < 320 && board[5][0] == "."){
                board[5][0] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            
            }
            else if(x>70 && x< 120 && y > 270 && y < 320 && board[5][1] == "."){
                board[5][1] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>120 && x< 170 && y > 270 && y < 320 && board[5][2] == "."){
                board[5][2] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>170 && x< 220 && y > 270 && y < 320 && board[5][3] == "."){
                board[5][3] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>220 && x< 270 && y > 270 && y < 320 && board[5][4] == "."){
                board[5][4] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>270 && x< 320 && y > 270 && y < 320 && board[5][5] == "."){
                board[5][5] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>320 && x< 370 && y > 270 && y < 320 && board[5][6] == "."){
                board[5][6] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>370 && x< 420 && y > 270 && y < 320 && board[5][7] == "."){
                board[5][7] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }//ROW 7
            else if(x>20 && x< 70 && y > 320 && y < 370 && board[6][0] == "."){
                board[6][0] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            
            }
            else if(x>70 && x< 120 && y > 320 && y < 370 && board[6][1] == "."){
                board[6][1] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>120 && x< 170 && y > 320 && y < 370 && board[6][2] == "."){
                board[6][2] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>170 && x< 220 && y > 320 && y < 370 && board[6][3] == "."){
                board[6][3] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>220 && x< 270 && y > 320 && y < 370 && board[6][4] == "."){
                board[6][4] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>270 && x< 320 && y > 320 && y < 370 && board[6][5] == "."){
                board[6][5] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>320 && x< 370 && y > 320 && y < 370 && board[6][6] == "."){
                board[6][6] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>370 && x< 420 && y > 320 && y < 370 && board[6][7] == "."){
                board[6][7] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }//ROW 8
            else if(x>20 && x< 70 && y > 370 && y < 420 && board[7][0] == "."){
                board[7][0] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            
            }
            else if(x>70 && x< 120 && y > 370 && y < 420 && board[7][1] == "."){
                board[7][1] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>120 && x< 170 && y > 370 && y < 420 && board[7][2] == "."){
                board[7][2] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>170 && x< 220 && y > 370 && y < 420 && board[7][3] == "."){
                board[7][3] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>220 && x< 270 && y > 370 && y < 420 && board[7][4] == "."){
                board[7][4] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>270 && x< 320 && y > 370 && y < 420 && board[7][5] == "."){
                board[7][5] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>320 && x< 370 && y > 370 && y < 420 && board[7][6] == "."){
                board[7][6] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
            }
            else if(x>370 && x< 420 && y > 370 && y < 420 && board[7][7] == "."){
                board[7][7] = "W";
                drawBoard();
                whiteTurn = false;
                document.getElementById("turnIndicator").innerHTML = "Black Turn";
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

drawBoard();