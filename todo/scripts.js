function addTodo(){
    let todoName= document.getElementById('textArea').value;
    let todoDate=document.getElementById('dateArea').value;
    document.getElementById('title').innerHTML=todoName;
    document.getElementById('date').innerHTML=todoDate;
    document.getElementById('action-button').innerHTML='<button id="delete" onclick="deleteTodo()">Delete</button>';


    `for(let i=0;i<3;i++){
        todoList[i] = [];
        for (let j = 0; j < 4; j++) {
            todoList[i][j] = ""; // or 0 or null
        }
    }
    for (let i = 0; i < todoList.length; i++) {
        for (let j = 0; j < todoList[i].length; j++) {
            console.log(todoList[i][j]);
        }
    }`

//     todoName.value='';
//     console.log(abc)
}
function deleteTodo(){

}