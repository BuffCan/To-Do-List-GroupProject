function addTask(){
// create new Element
// create new list Element
// check if input empty
// append all necessary parts and buttons to list item
// append list item to Incomplete List

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
// get Task
// delete Task
}
function completeTask(){
	// move task from list incomplete to list complete
	let listItem = this.parentNode;
	let containsClass = listItem.classList.contains("complete");
	if (containsClass){
	  incompleteTaskHolder.appendChild(listItem);
	  bindEventsToTasks(listItem);
	
	 // completedTasksHolder.removeChild(listItem);
	}
	else{
		completedTasksHolder.appendChild(listItem);
		bindEventsToTasks(listItem);
	}
// move task from list incomplete to list complete
//maybe remove edit button
// change Done button so we can switch back to incomplete

}
function completeToIncomplete(){
    // move Task from complete to incomplete
    // recreate edit button
    //rechange Done button
}
function bindEventsToTasks(){
//  use hole list and iterateover it to bind all onclickfunctions
// to their buttons and stuff so we dont have to do it in all the
// other functions
}