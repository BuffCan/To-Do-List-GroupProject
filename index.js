let taskInput=document.getElementById("new-task");//Input for new Task
console.log(taskInput);
let addButton=document.getElementById("add");//get the add button
console.log(addButton);

let incompleteTaskHolder=document.getElementById("incomplete-tasks");//get the list of incomplete Tasks / the UL holding them
console.log(incompleteTaskHolder);
let completedTasksHolder=document.getElementById("completed-tasks");//get the list of complete Tasks / the UL holding them
console.log(completedTasksHolder);



let addTask=function(){
    
    let myLi = document.createElement("li");
    let myBtn = document.createElement("button");
    let myLabel = document.createElement("label");
    let myInput = document.createElement("input");
    let mySecondBtn = document.createElement("button");
    let myThirdBtn = document.createElement("button");

    myBtn.innerText = 'Done';
    myBtn.className = 'done';

    myLabel.innerText = taskInput.value;
    myInput.type = 'text';

    mySecondBtn.innerText = 'Edit';
    mySecondBtn.className = 'edit';

    myThirdBtn.innerText = 'Delete';
    myThirdBtn.className = 'delete';

    myLi.appendChild(myBtn);
    myLi.appendChild(myLabel);
    myLi.appendChild(myInput);
    myLi.appendChild(mySecondBtn);
    myLi.appendChild(myThirdBtn);

    bindEventsToTasks(myLi);

    incompleteTaskHolder.appendChild(myLi);

	taskInput.value="";
}



function editTask(){
// get current Task
// check if edit Flag is active or not
// if yes change value of label  to  value of input
// check if empty
// or other way around
// maybe change edit to save when in edit mode
}

function deleteTask(){

    console.log("Delete Task...")

    let myLi = this.parentNode;
    let myUl = myLi.parentNode;

    myUl.removeChild(myLi);
}


function completeTask(){
// move task from list incomplete to list complete
//maybe remove edit button
// change Done button so we can switch back to incomplete

}
function completeToIncomplete(){
    // move Task from complete to incomplete
    // recreate edit button
    //rechange Done button
}
function bindEventsToTasks(taskListItem){
    //select buttons we want
        let doneButton=taskListItem.querySelector(".done");
        let editButton=taskListItem.querySelector(".edit");
        console.log(editButton);
        let deleteButton=taskListItem.querySelector(".delete");
    
    
                //Bind editTask to edit button.
                editButton.onclick=editTask;
                //Bind deleteTask to delete button.
                deleteButton.onclick=deleteTask;
                //Bind doneFunction to done button.
                doneButton.onclick=completeTask;
                
                
    }

    addButton.addEventListener('click', addTask);

    // Iterate over incomplete list to giva all tasks their functions
        for (let i=0; i<incompleteTaskHolder.children.length;i++){
    
            
            bindEventsToTasks(incompleteTaskHolder.children[i]);
            console.log(incompleteTaskHolder.children[i]);
        }
    
    
    
    
    // iterate over complete list for function binding
        for (let j=0; j<completedTasksHolder.children.length;j++){
        
            bindEventsToTasks(completedTasksHolder.children[j]);
            console.log(completedTasksHolder.children[j]);
        }