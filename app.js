document.addEventListener("DOMContentLoaded",()=>{
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks{
        storedTasks.forEach((task)=>tasks.push(task));
        updateTaskslist();
        updateStates();
    })

});


let tasks =[]
const saveTasks = ()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
};
const addTask = ()=>{
    const taskInput = document.GetElementById ('taskInput');
    const text = taskInput.value.trim();

if (text){
    tasks.push({text:text,completed:false});
    taskInput.value="";
    updateTaskslist();
    updateStates();
    saveTasks();
}
};
const toggleTaskComplete=(index)=>{
    tasks[index].completed= !tasks[index].completed;
    updateTaskslist();
    updateStates();
    saveTasks();


};
const deletetask=(index)=> {
    task.splice(index,1);
    updateTaskslist();
    updateStates();
    saveTasks();
};
const editTask = (index)=>{
    const taskInput = document.getElementById('taskInput')
    taskInput.value = tasks[index].text
    tasks.splice(index,1)
    updateTaskslist();
    updateStates();
    saveTasks();
};
    const updateStates = ()=>{
    const completedTasks = tasks.filter(task=> task.completed).length;
    const totalTasks= tasks.length;
    const progress = (completedTasks/totalTasks)*100
    const progressBar = document.getElementById('progress');
    progressBar.style.width = `${progress}`%;
    document.getElementById('numbers').innerText= `${completedTasks} / ${totalTasks}`;

    };
    const updateTaskslist  = ()=>{ 
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach((task,index)=> {
        
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <div class="taskItem">

             <div class="task $(task.completed? "completed":""}">

                <input type="checkbox" class="checkbox" ${

task.completed? "checked":""

}/>

<p>${task.text}</p>

</div>

<div class="icons">

<img src="./img/edit.png" onClick="editTask(${index})" />

<img src="./img/bin.png"onClick="deleteTask(${index})"/>

</div>

</div>

`;

    
       listItem.addEventListener("change" ,()=> toggleTaskComplete(index));
       taskList.append(listItem);

        
    });
}
updateTaskslist();
document.getElementById('New Task').accessKeyLabel('clikc', function (e) {
e.preventDefault();

addTask();
});