function addtask(){
    const newtask=document.createElement('li')
    const tasklist=document.getElementById('tasklist')
    tasklist.appendChild(newtask)
    newtask.textContent=document.getElementById('inputtask').value
    document.getElementById('inputtask').value=""
    deletetask(newtask)

}
function deletetask(newtask){
const deletebtn=document.createElement('button')
deletebtn.textContent="Delete"
newtask.appendChild(deletebtn)
deletebtn.onclick=function(){
    newtask.remove()
}
}
function addtask() {
    const newtask = document.createElement('li');
    const tasklist = document.getElementById('tasklist');
    newtask.textContent = document.getElementById('inputtask').value;
    document.getElementById('inputtask').value = "";

    const deletebtn = document.createElement('button');
    deletebtn.textContent = "Delete";
    deletebtn.onclick = function() {
        newtask.remove();
    };

    newtask.appendChild(deletebtn);
    tasklist.appendChild(newtask);
}
