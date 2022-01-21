let taskInput=document.getElementById("new-task");//Input for new Task
console.log(taskInput);
let addButton=document.getElementById("add");//get the add button
console.log(addButton);
let incompleteTaskHolder=document.getElementById("incomplete-tasks");//get the list of incomplete Tasks / the UL holding them
console.log(incompleteTaskHolder);
let completedTasksHolder=document.getElementById("complete-tasks");//get the list of complete Tasks / the UL holding them
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
//parent item of clicked Buttonn ergo Li item
let listItem=this.parentNode;
console.log(listItem);
//the input textField wich content should be saved
let editInput=listItem.querySelector('input');
console.log(editInput);
// The label displaying the to do
let label=listItem.querySelector("label");
console.log(label);
let editButton=listItem.querySelector(".edit");
let doneButton=listItem.querySelector(".done");
//boolean if our list element is in editmode => if edit button has been clicked
// realised that by adding a class if in edit mode ths way can be used to style 
//diffrent look in edit mode easely
let containsClass=listItem.classList.contains("editMode");
console.log(containsClass);
		//check if in edit mode
		if(containsClass){

		//it is so input text has to become  label text because we are saving input text after editing
		//check if input wasn't empty if yes save and contue else do nothing
			if(editInput.value !== "" && editInput.value !== " " && editInput.value !== null){	
				label.innerText=editInput.value;
				//change Button text back to edit
				editButton.innerText = "Edit";
				//making Done Button not displayed as you can logically not finish a task you are editing
				doneButton.style.display = "inline-block";
			}
			listItem.classList.remove("editMode");
		}else{
			//Input value becomes label text so we can edit now
			editInput.value=label.innerText;
			//changing button text so its easier to understand to save
			editButton.innerText = "Save";
			//making Done Button not displayed as you can logically not finish a task you are editing
			doneButton.style.display = "none";
			listItem.classList.add("editMode");
		}

		// toggling the class of the li item to make the flag class work
		//listItem.classList.toggle("editMode");
}

function deleteTask(){

    console.log("Delete Task...")

    let myLi = this.parentNode;
    let myUl = myLi.parentNode;

    myUl.removeChild(myLi);
}


function completeTask(){
	// move task from list incomplete to list complete
	let listItem = this.parentNode;
	let containsClass = listItem.classList.contains("complete");
	if (containsClass){
	  incompleteTaskHolder.appendChild(listItem);
	  //bindEventsToTasks(listItem);
	  listItem.classList.remove("complete");
	
	 // completedTasksHolder.removeChild(listItem);
	}else{
		completedTasksHolder.appendChild(listItem);
		//bindEventsToTasks(listItem);
		listItem.classList.add("complete");
	}
// move task from list incomplete to list complete
//maybe remove edit button
// change Done button so we can switch back to incomplete
//NEED Class Toogle like editmode used complete in html
// call eventbinding function

}
// function completeToIncomplete(){
//     // move Task from complete to incomplete
//     // recreate edit button
//     //rechange Done button
// 	//NEED Class Toogle like editmode used complete in Html
// }
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
const save = (content, filename, contentType) => {
	const a = document.createElement('a');
	const file = new Blob([content], {type: contentType});
	
	a.href= URL.createObjectURL(file);
	a.download = filename;
	a.click();
	
	URL.revokeObjectURL(a.href);
  };
document.querySelector(".save").addEventListener('click', () => {
//Call To String Method of Task List and save it in variable to be put into Save instead of test	
	
	downloadToFile("TEST testTest", 'my-new-file.txt', 'text/plain');
  });

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
