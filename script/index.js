const addBtn=document.getElementById('add-btn');
 let noOfItems=0;
let items=document.querySelector('.property-items');
let output=document.querySelector('.output');
let sendBtn=document.getElementById('send-btn');

addBtn.addEventListener('click', ()=>{
     let key=document.getElementById('key').value;
     let val=document.getElementById('val').value;
     keyVal(key, val, items);
});

function keyVal(key, val, parent) {
      noOfItems++;
    let div=document.createElement('div');
    let a=document.createElement('div');
    let b=document.createElement('div');
    let c=document.createElement('div');
    let d=document.createElement('div');
    div.className="item";
    
    a.innerText=noOfItems;
    b.innerText="DEL";
    c.innerText=key
    d.innerText=val;
b.style.color="red";

div.appendChild(a);
// div.appendChild(b);
div.appendChild(c);
div.appendChild(d);
parent.appendChild(div);
}

let p="https://api.dictionaryapi.dev/api/v2/entries/en/hello"

async function getData(url, perant) {
    try{
     let response=await fetch(url, {
         method: `${ document.getElementById('sel').value}`
     });
     let data=await response.json();
     perant.innerText= JSON.stringify(data,"undefine",4);
    //  console.log(document.getElementById('sel').value);
    }catch(e){
        output.innerText=e;
    }
}

// getData(p, output);


sendBtn.addEventListener('click',()=>{
       let urlPath=document.getElementById('urlp').value;
       getData(urlPath, output);
});