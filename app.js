var addbtn1 = document.querySelector(".btn1");
var inp = document.querySelector(".box");
var box = document.querySelector(".result");

var res = document.querySelector(".reset");
var arr = [];

function remove(i){
    arr.splice(i,1);
    console.log(arr)
    display()
}


function display(){
    box.innerHTML = ""
    for(let i=0;i<arr.length;i++){
    console.log(arr[i])
    box.innerHTML += `<div class="item">${arr[i]}<span><img class="tick" src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png" onclick="remove(${i})"/></span></div>`
}
}

function addtoarray(){
    arr.push(inp.value)
    display()
}


addbtn1.onclick = function name(){
    console.log(inp.value);
    addtoarray()
}

res.onclick = function reset(){
    arr = []
    display()
}