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

drawBoard();