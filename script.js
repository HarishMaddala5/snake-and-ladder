var player1 = 0;
var player2 = 0;
function random1(){
    let c=Math.round(Math.random()*10)%6;
    c++;
    document.getElementById('dice1').innerHTML=c;
    player1 += c;
    if(player1>=100){
        alert("Player1 Wins");
        location.reload();      
    }
    else{
    document.getElementById('count1').innerHTML=player1;
    if((player1-c)>=1){
        let pr = "b"+(player1-c);
        if((player1-c)==player2){
            document.getElementById(pr).style.backgroundColor = 'green';
        }
        else{
            if((player1-c)%2==0)
                document.getElementById(pr).style.backgroundColor = 'rgb(145, 18, 225)';
            else    
                document.getElementById(pr).style.backgroundColor = 'rgb(219, 189, 237)';
        }
    }
    let d = "b"+player1;
    document.getElementById(d).style.backgroundColor = 'red';
    if(player1===4){
        player1 = 45;
        document.getElementById("b4").style.backgroundColor = 'rgb(145, 18, 225)';
        document.getElementById("b45").style.backgroundColor = 'red';
        alert("🪜 4 to 45");
    }
    else if(player1===6){
        player1 = 25;
        document.getElementById("b6").style.backgroundColor = 'rgb(145, 18, 225)';
        document.getElementById("b25").style.backgroundColor = 'red';
        alert("🪜 6 to 25");
    }
    else if(player1===40){
        player1 = 77;
        document.getElementById("b40").style.backgroundColor = 'rgb(145, 18, 225)';
        document.getElementById("b77").style.backgroundColor = 'red';
        alert("🪜 40 to 77");
    }    
    else if(player1===47){
        player1 = 66;
        document.getElementById("b47").style.backgroundColor = 'rgb(219, 189, 237)';
        document.getElementById("b66").style.backgroundColor = 'red';
        alert("🪜 47 to 66");
    }    
    else if(player1===50){
        player1 = 93;
        document.getElementById("b50").style.backgroundColor = 'rgb(145, 18, 225)';
        document.getElementById("b93").style.backgroundColor = 'red';
        alert("🪜 50 to 93");
    }   
    else if(player1===68){
        player1 = 87;
        document.getElementById("b68").style.backgroundColor = 'rgb(145, 18, 225)';
        document.getElementById("b87").style.backgroundColor = 'red';
        alert("🪜 68 to 87");
    }    
    else if(player1===61){
        player1 = 98;
        document.getElementById("b61").style.backgroundColor = 'rgb(219, 189, 237)';
        document.getElementById("b98").style.backgroundColor = 'red';
        alert("🪜 61 to 98");
    }    
    else if(player1===99){
        player1 = 10;
        document.getElementById("b99").style.backgroundColor = 'rgb(219, 189, 237)';
        document.getElementById("b10").style.backgroundColor = 'red';
        alert("🐍 99 to 10");
    }         
    else if(player1===95){
        player1 = 76;
        document.getElementById("b95").style.backgroundColor = 'rgb(219, 189, 237)';
        document.getElementById("b76").style.backgroundColor = 'red';
        alert("🐍 95 to 76");
    }     
    else if(player1===91){
        player1 = 51;
        document.getElementById("b91").style.backgroundColor = 'rgb(219, 189, 237)';
        document.getElementById("b51").style.backgroundColor = 'red';
        alert("🐍 91 to 51");
    }    
    else if(player1===62){
        player1 = 22;
        document.getElementById("b62").style.backgroundColor = 'rgb(145, 18, 225)';
        document.getElementById("b22").style.backgroundColor = 'red';
        alert("🐍 62 to 22");
    } 
    else if(player1===52){
        player1 = 11;
        document.getElementById("b52").style.backgroundColor = 'rgb(145, 18, 225)';
        document.getElementById("b11").style.backgroundColor = 'red';
        alert("🐍 52 to 11");
    }     
    else if(player1===57){
        player1 = 24;
        document.getElementById("b57").style.backgroundColor = 'rgb(219, 189, 237)';
        document.getElementById("b24").style.backgroundColor = 'red';
        alert("🐍 57 to 24");
    }      
    else if(player1===43){
        player1 = 17;
        document.getElementById("b43").style.backgroundColor = 'rgb(219, 189, 237)';
        document.getElementById("b17").style.backgroundColor = 'red';
        alert("🐍 43 to 17");
    }  
    else if(player1===32){
        player1 = 5;
        document.getElementById("b32").style.backgroundColor = 'rgb(145, 18, 225)';
        document.getElementById("b5").style.backgroundColor = 'red';
        alert("🐍 32 to 5");
    }    
    document.getElementById('count1').innerHTML=player1;
    document.getElementById('button1').style.pointerEvents = 'none';
    document.getElementById('button2').style.pointerEvents = 'all';
    let text = "Player2 Turn";
    document.getElementById('turntext').innerText = text;
}
}
function random2(){
    let c=Math.round(Math.random()*10)%6;
    c++;
    document.getElementById('dice2').innerHTML=c;
    player2 += c;
    if(player2>=100){
        alert("Player2 Wins");
        location.reload();     
    }
    else{
    document.getElementById('count2').innerHTML=player2;
    if((player2-c)>=1){
        let pr = "b"+(player2-c);
        if((player2-c)==player1){
            document.getElementById(pr).style.backgroundColor = 'red';
        }
        else{
            if((player2-c)%2==0)
                document.getElementById(pr).style.backgroundColor = 'rgb(145, 18, 225)';
            else    
                document.getElementById(pr).style.backgroundColor = 'rgb(219, 189, 237)';
        }
    }
    let d = "b"+player2;
    document.getElementById(d).style.backgroundColor = 'green';
    if(player2===4){
        player2 = 45;
        document.getElementById("b4").style.backgroundColor = 'rgb(145, 18, 225)';
        document.getElementById("b45").style.backgroundColor = 'green';
        alert("🪜 4 to 45");
    }
    else if(player2===6){
        player2 = 25;
        document.getElementById("b6").style.backgroundColor = 'rgb(145, 18, 225)';
        document.getElementById("b25").style.backgroundColor = 'green';
        alert("🪜 6 to 25");
    }
    else if(player2===40){
        player2 = 77;
        document.getElementById("b40").style.backgroundColor = 'rgb(145, 18, 225)';
        document.getElementById("b77").style.backgroundColor = 'green';
        alert("🪜 40 to 77");
    }    
    else if(player2===47){
        player2 = 66;
        document.getElementById("b47").style.backgroundColor = 'rgb(219, 189, 237)';
        document.getElementById("b66").style.backgroundColor = 'green';
        alert("🪜 47 to 66");
    }    
    else if(player2===50){
        player2 = 93;
        document.getElementById("b50").style.backgroundColor = 'rgb(145, 18, 225)';
        document.getElementById("b93").style.backgroundColor = 'green';
        alert("🪜 50 to 93");
    }   
    else if(player2===68){
        player2 = 87;
        document.getElementById("b68").style.backgroundColor = 'rgb(145, 18, 225)';
        document.getElementById("b87").style.backgroundColor = 'green';
        alert("🪜 68 to 87");
    }    
    else if(player2===61){
        player2 = 98;
        document.getElementById("b61").style.backgroundColor = 'rgb(219, 189, 237)';
        document.getElementById("b98").style.backgroundColor = 'green';
        alert("🪜 61 to 98");
    }    
    else if(player2===99){
        player2 = 10;
        document.getElementById("b99").style.backgroundColor = 'rgb(219, 189, 237)';
        document.getElementById("b10").style.backgroundColor = 'green';
        alert("🐍 99 to 10");
    }         
    else if(player2===95){
        player2 = 76;
        document.getElementById("b95").style.backgroundColor = 'rgb(219, 189, 237)';
        document.getElementById("b76").style.backgroundColor = 'green';
        alert("🐍 95 to 76");
    }     
    else if(player2===91){
        player2 = 51;
        document.getElementById("b91").style.backgroundColor = 'rgb(219, 189, 237)';
        document.getElementById("b51").style.backgroundColor = 'green';
        alert("🐍 91 to 51");
    }    
    else if(player2===62){
        player2 = 22;
        document.getElementById("b62").style.backgroundColor = 'rgb(145, 18, 225)';
        document.getElementById("b22").style.backgroundColor = 'green';
        alert("🐍 62 to 22");
    } 
    else if(player2===52){
        player2 = 11;
        document.getElementById("b52").style.backgroundColor = 'rgb(145, 18, 225)';
        document.getElementById("b11").style.backgroundColor = 'green';
        alert("🐍 52 to 11");
    }     
    else if(player2===57){
        player2 = 24;
        document.getElementById("b57").style.backgroundColor = 'rgb(219, 189, 237)';
        document.getElementById("b24").style.backgroundColor = 'green';
        alert("🐍 57 to 24");
    }      
    else if(player2===43){
        player2 = 17;
        document.getElementById("b43").style.backgroundColor = 'rgb(219, 189, 237)';
        document.getElementById("b17").style.backgroundColor = 'green';
        alert("🐍 43 to 17");
    }  
    else if(player2===32){
        player2 = 5;
        document.getElementById("b32").style.backgroundColor = 'rgb(145, 18, 225)';
        document.getElementById("b5").style.backgroundColor = 'green';
        alert("🐍 32 to 5");
    }    
    document.getElementById('count2').innerHTML=player2;
    document.getElementById('button1').style.pointerEvents = 'all';
    document.getElementById('button2').style.pointerEvents = 'none';
    let text = "Player1 Turn";
    document.getElementById('turntext').innerText = text;
}
}
function mousedown1(){
    document.getElementById('button1').style.boxShadow='rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset';
}
function mouseup1(){
    document.getElementById('button1').style.boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px';
}
function mousedown2(){
    document.getElementById('button2').style.boxShadow='rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset';
}
function mouseup2(){
    document.getElementById('button2').style.boxShadow= 'rgba(149, 157, 165, 0.2) 0px 8px 24px';
}
const onConfirmRefresh = function(event) {
    event.preventDefault();
    return event.returnValue = "Are you want to restart the game?";
}
window.addEventListener("beforeunload", onConfirmRefresh, { capture: true });