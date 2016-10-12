document.getElementById("lc").value="INPUT\nTABLE\nHERE";
document.getElementById("lw").value="INPUT\nWORDS\nHERE";
document.getElementById("c").width=document.body.offsetWidth;
document.getElementById("c").width=document.body.offsetWidth;
document.getElementById("c").height=document.body.offsetWidth;
document.getElementById("c").height=document.body.offsetWidth;
createTable();
searchWords();


document.getElementById("lc").addEventListener("input",createTable,false);
document.getElementById("lc").addEventListener("input",searchWords,false);

function createTable(){
    var lcs = document.getElementById("lc").value.split("\n");
    var lcsMax=0;
    for(var i=0;i<lcs.length;i++){
        if(lcs[i].length>lcsMax){
            lcsMax=lcs[i].length;
        }
    }
    document.getElementById("c").width=lcsMax*16+8;
    document.getElementById("c").width=lcsMax*16+8;
    document.getElementById("c").height=lcs.length*16+8;
    document.getElementById("c").height=lcs.length*16+8;
    var canvas = document.getElementById("c");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "16px Arial";
    for(var i=0;i<lcs.length;i++){
        for(var j=0;j<lcs[i].length;j++){
            ctx.fillText(lcs[i][j],16*j,16+16*i);
        }}
    
    
}

document.getElementById("lw").addEventListener("input",searchWords,false);

function searchWords(){
    var lcs= document.getElementById("lc").value.split("\n");
    var lws= document.getElementById("lw").value.split("\n");
    var canvas = document.getElementById("co");
    var ctx = canvas.getContext("2d");
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = canvas.width;
    console.log("cleared");
    for(var i=0;i<lcs.length;i++){
    for(var j=0;j<lcs[i].length;j++){
    for(var k=0;k<lws.length;k++){
    if(lws[k][0]==lcs[i][j]){//search the first character
                    
                    for(var ir=-1;ir<2;ir++){//go search
                    for(var jr=-1;jr<2;jr++){//8 directions
                    if(lcs[i-1*ir]){if(lcs[i-1*ir][j-1*jr]){//removing error
                                
                                if(lws[k][1]==lcs[i-1*ir][j-1*jr]){//match second letter
                                    var t1=lws[k][0]+lws[k][1];//create a valuable to compare with original word
                                    for(var a=0;a<lws[k].length-2;a++){//go search one of the 8 directions
                                        if(lcs[i-(a+2)*ir]){if(lcs[i-(a+2)*ir][j-(a+2)*jr]){//if the letter exists
                                            t1+=lcs[i-(a+2)*ir][j-(a+2)*jr];//and add it to the valuable
                                        }}
                                    }
                                    if(t1==lws[k]){//if ht evaluable is the same as the word
                                        ctx.moveTo(j*16+8,i*16+8);//draw a line
                                        console.log(j*16+8+","+i*16+8);
                                        ctx.strokeStyle = '#ff0000';
                                        ctx.lineTo((j-(lws[k].length-1)*jr)*16+8,(i-(lws[k].length-1)*ir)*16+8);
                                        ctx.stroke();
                                        console.log("lined");
                                    }
                                }
                                
                    }}
                    }}
        
    }}}}
    
}
