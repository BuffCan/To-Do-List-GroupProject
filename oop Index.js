class ToDoList{
    constructor(){
        
    }

    add(input){
        let toDo = new ToDo(input);
        toDo.bindEvents();
        this.taskList.appendChild(toDo);
    }
    add(){
        let taskInput=document.getElementById("new-task");
        let toDo = new ToDo(taskInput.value);
        toDo.bindEvents();
        this.taskList.appendChild(toDo);
        taskInput.value = "";
    }
    deleteTodo(ToDo){
        this.taskList.removeChild(ToDo);
    }
    toString(){
        return JSON.stringify(this._taskList);
    }
    save(content, filename, contentType){
        const a = document.createElement('a');
        const file = new Blob([content], {type: contentType});
        
        a.href= URL.createObjectURL(file);
        a.download = filename;
        a.click();
        
        URL.revokeObjectURL(a.href);
      };
    
}
class ToDo{
    constructor(task){
        this._completion = false;
        this._editing = false;

        // let taskInput=document.getElementById("new-task");
        this._myLi = document.createElement("li");
        let myBtn = document.createElement("button");
        let myLabel = document.createElement("label");
        let myInput = document.createElement("input");
        let mySecondBtn = document.createElement("button");
        let myThirdBtn = document.createElement("button");
        
        myBtn.innerText = 'Done';
        myBtn.className = 'done';
    
        myLabel.innerText = task;
        myInput.type = 'text';
    
        mySecondBtn.innerText = 'Edit';
        mySecondBtn.className = 'edit';
    
        myThirdBtn.innerText = 'Delete';
        myThirdBtn.className = 'delete';
    
        this._myLi.appendChild(myBtn);
        this._myLi.appendChild(myLabel);
        this._myLi.appendChild(myInput);
        this._myLi.appendChild(mySecondBtn);
        this._myLi.appendChild(myThirdBtn);
        
        myBtn.onclick=completeTodo;
        mySecondBtn.onclick=editTodo;
        myThirdBtn.onclick= deleteTodo;

        // taskInput.value="";
        // this.taskList.push(myLi);
    }
    editTodo(){
        let toDo = this;
        if(toDo._editing === true){
            if(toDo._myLi.children[2].value !== "" && toDo._myLi.children[2].value !== " " && toDo._myLi.children[2].value !== null){
                toDo._myLi.children[1].innerText = toDo._myLi.children[2].value;
                toDo._myLi.chidren[3].innerText = "Edit";
                toDo._myLi.chidren[4].style.display = "inline-block";
                toDo._editing = false;
            }

        } else{
            toDo._myLi.children[2].value = toDo._myLi.children[1].innerText;
            toDo._myLi.chidren[3].innerText = "Save";
            toDo._myLi.chidren[4].style.display = "none";
            toDo._editing = true;

        }

    }
    completeTodo(){
        let toDo = this;
        if(toDo._completion === true){
                toDo._editing = false;
                toDo._myLi.classList.remove("complete");
        } else{
            toDo._editing = true;
            toDo._myLi.classList.add("complete");

        }

    
    }
    bindEvents(){
        this._myLi.children[0].addEventListener("click", this._myLi.completeTodo());
        this._myLi.children[3].addEventListener("click", this._myLi.editTodo());
        this._myLi.children[4].addEventListener("click", this.parentNode.deleteTodo(this._myLi));
    }

}
let addButton=document.getElementById("add");//get the add button
addButton.addEventListener('click', add());
console.log(addButton);
let incompleteTaskHolder=document.getElementById("incomplete-tasks");//get the list of incomplete Tasks / the UL holding them
console.log(incompleteTaskHolder);
let completedTasksHolder=document.getElementById("complete-tasks");//get the list of complete Tasks / the UL holding them
console.log(completedTasksHolder);

taskInput.value="";

let toDoList = new ToDoList();
toDoList.add("Pet The Cats");
toDoList.add("Wash the dishes");
toDoList.add("Buy Groceries");
toDoList.children[0].completeTodo();
toDoList.children[1].editTodo();

document.querySelector(".save").addEventListener('click', () => {
    //Call To String Method of Task List and save it in variable to be put into Save instead of test	
        
        save(toDoList.toString(), 'my-new-file.txt', 'text/plain');
      });
