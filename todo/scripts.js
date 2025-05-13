let tasks=[];

function addTask(){
    let todoName= document.getElementById('taskArea').value;
    let todoDate=document.getElementById('dateArea').value;
    if(todoName&&todoDate){
        tasks.push({name: todoName, date:todoDate});
        console.log(tasks);
        displayTasks();
    }
}

function displayTasks(){
    let todoListHTML = ``;
    for(let i=0;i<tasks.length;i++){
        // console.log(tasks[i].name);
        // console.log(tasks[i].date);
        let taskName=tasks[i].name;
        let taskDate=tasks[i].date;

        document.querySelector('.todo-section #title').innerHTML=`<p>${taskName}</p>`;
        document.querySelector('.todo-section #date').innerHTML=`<p>${taskDate}</p>`;
        document.querySelector('.todo-section #action-button').innerHTML=`<button id="delete" onclick="deleteTodo()">Delete</button>`;

        // const html=`<p>${taskName}</p><br>`;
        // todoListHTML+=html;
    }
}
function deleteTodo(){
    console.log("deletee");
}
    
    
    
    
    
    /*let i,j=0;
    // let todoList=[['complete calculator', 2025-13-5],['finish todo',2025-13-5]];
    let todoName= document.getElementById('textArea').value;
    let todoDate=document.getElementById('dateArea').value;
    let todoListHTML = ``;
    for(i=0;i<10;i++){
        while(j!=2){
            todoList[i,j]=todoName;
            j++;
            todoList[i,j]=todoDate;
            const html=`<p>${todoList}</p><br>`;
            todoListHTML+=html;
    
        }
    }
    console.log(todoListHTML);

    /*
    todoList.push(todoName);
    console.log(todoList);
    /*document.getElementById('title').innerHTML=todoName;
    document.getElementById('date').innerHTML=todoDate;
    document.getElementById('action-button').innerHTML='<button id="delete" onclick="deleteTodo()">Delete</button>';`


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
    }*/

//     todoName.value='';
//     console.log(abc)