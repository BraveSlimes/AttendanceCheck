async function loadFile(file) {
    let text = await file.text();
    let arr = [];
    let newArr = [];
    let outputArr = [];
    var lines = text.split('\n');
    let title="";

    for(var line = 0; line < lines.length; line++){
        if(lines[line].startsWith("[")){
            arr[line] = String(lines[line].substr(1, (lines[line].indexOf(']'))-1));
        }
    }
    
    newArr = new Set(arr);
    outputArr = Array.from(newArr);

    for(let i=0; i < outputArr.length; i++){
        if(outputArr[i] == ""){
            outputArr.splice(i,1);
            i--;
        }else if(outputArr[i] == "Slime Helper"){
            outputArr.splice(i,1);
            i--;
        }else if(outputArr[i] == "방장봇"){
            outputArr.splice(i,1);
            i--;
        }else if(outputArr[i] == undefined){
            outputArr.splice(i,1);
            i--;
        }
    }

    console.log(outputArr);
    document.getElementById('output').textContent = outputArr;
    title = lines[0];
    title = title.replace("--------------- ", "");
    title = title.replace(" ---------------", "");
    title = title.slice(0,-1);
    saveAsFile(outputArr, title+".txt");
}

function saveAsFile(str, filename) {
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:attachment/text,' + encodeURIComponent(str);
    hiddenElement.target = '_blank';
    hiddenElement.download = filename;
    hiddenElement.click();
}