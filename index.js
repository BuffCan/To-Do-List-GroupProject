let taskInput=document.getElementById("new-task");//Input for new Task
console.log(taskInput);
let addButton=document.querySelector("#add")[0];//get the add button
console.log(addButton);
let incompleteTaskHolder=document.getElementById("incomplete-tasks");//get the list of incomplete Tasks / the UL holding them
console.log(incompleteTaskHolder);
let completedTasksHolder=document.getElementById("completed-tasks");//get the list of complete Tasks / the UL holding them
console.log(completedTasksHolder);



function addTask(){
// create new Element
// create new list Element
// check if input empty
// append all necessary parts and buttons to list item
// append list item to Incomplete List
// call Eventbinding function

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
// get Task
// delete Task
}
function completeTask(){
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
