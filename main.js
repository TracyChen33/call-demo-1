const divScreen = document.querySelector("#screen");
const btnCreatnumber = document.querySelector("#creatNumber");
const btnCallnumber = document.querySelector("#callNumber");
const spanNewnumber = document.querySelector("#newNumber");
const spanQueue = document.querySelector("#queue");

let queue = [];
let n = 0;
btnCreatnumber.onclick =()=>{
    n+=1;
    queue.push.call(queue,n);
    spanNewnumber.innerText = n;
    spanQueue.innerText = JSON.stringify(queue);
};

btnCallnumber.onclick = () =>{
    if(queue.length===0){
        return;
    }
    const m =queue.shift.call(queue)
    divScreen.innerText = `NO. '${m}' customers' turn `;
    spanQueue.innerText = JSON.stringify(queue);
};



