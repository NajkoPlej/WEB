const addButton = document.getElementById('addButton');



addButton.addEventListener('click',() => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');   
    const taskText = taskInput.value;
    
    if (!taskText){
        console.log("Nic sa nestalo")
        return
    }
    

    let newLi = document.createElement('li');
});
