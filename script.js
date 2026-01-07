let input = document.querySelector('input')
let addTask = document.querySelector('#addTask')
let tasksDiv = document.querySelector('#tasksDiv')
let showAllBtn = document.getElementById('showAll')
let showCompletedBtn = document.getElementById('showCompleted')


let tasks = []

function displayAllTasks() {
    tasksDiv.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        
    let task = document.createElement('div')
    let taskText = document.createElement('h1')
    taskText.textContent = tasks[i].text
    task.appendChild(taskText)

    let buttonsDiv = document.createElement('div')
    let complete = document.createElement('span')
    complete.textContent = '✅'
    complete.classList.add('cursor-pointer')
    complete.addEventListener('click', () => {
        taskText.classList.toggle('completed')
        tasks[i].completed = true
    })

    let del = document.createElement('span')
    del.textContent = '🗑️'
    del.classList.add('cursor-pointer')
    del.addEventListener('click', () => {
        tasksDiv.removeChild(task)
        tasks.splice(i, 1)
    })

    buttonsDiv.appendChild(complete)
    buttonsDiv.appendChild(del)
    task.appendChild(buttonsDiv)

    task.classList.add('shadow-xl')
    task.classList.add('rounded-2xl')
    task.classList.add('px-7')
    task.classList.add('py-3')
    task.classList.add('flex')
    task.classList.add('justify-between')
    task.classList.add('space-x-10')
    tasksDiv.appendChild(task)
    }
}

function displayCompleted() {
     tasksDiv.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
     if (tasks[i].completed)    {
        let task = document.createElement('div')
        let taskText = document.createElement('h1')
        taskText.textContent = tasks[i].text
        task.appendChild(taskText)

        let buttonsDiv = document.createElement('div')
        let complete = document.createElement('span')
        complete.textContent = '✅'
        complete.classList.add('cursor-pointer')
        complete.addEventListener('click', () => {
            taskText.classList.toggle('completed')
        })

        let del = document.createElement('span')
        del.textContent = '🗑️'
        del.classList.add('cursor-pointer')
        del.addEventListener('click', () => {
            tasksDiv.removeChild(task)
        })

        buttonsDiv.appendChild(complete)
        buttonsDiv.appendChild(del)
        task.appendChild(buttonsDiv)

        task.classList.add('shadow-xl')
        task.classList.add('rounded-2xl')
        task.classList.add('px-7')
        task.classList.add('py-3')
        task.classList.add('flex')
        task.classList.add('justify-between')
        task.classList.add('space-x-10')
        tasksDiv.appendChild(task)
     }
    
    }
}

addTask.addEventListener('click', () => {
    if (input.value.length === 0) {
        alert("Task is empty!")
        return
    }

    let taskObj = {
        text: input.value,
        completed: false
    }

    tasks.push(taskObj)

    // let task = document.createElement('div')
    // let taskText = document.createElement('h1')
    // taskText.textContent = input.value
    // task.appendChild(taskText)

    // let buttonsDiv = document.createElement('div')
    // let complete = document.createElement('span')
    // complete.textContent = '✅'
    // complete.classList.add('cursor-pointer')
    // complete.addEventListener('click', () => {
    //     taskText.classList.toggle('completed')
    // })

    // let del = document.createElement('span')
    // del.textContent = '🗑️'
    // del.classList.add('cursor-pointer')
    // del.addEventListener('click', () => {
    //     tasksDiv.removeChild(task)
    // })

    // buttonsDiv.appendChild(complete)
    // buttonsDiv.appendChild(del)
    // task.appendChild(buttonsDiv)

    // task.classList.add('shadow-xl')
    // task.classList.add('rounded-2xl')
    // task.classList.add('px-7')
    // task.classList.add('py-3')
    // task.classList.add('flex')
    // task.classList.add('justify-between')
    // task.classList.add('space-x-10')
    // tasksDiv.appendChild(task)
    // input.value = ''

    displayAllTasks()

})

showAllBtn.addEventListener('click', () => {
    displayAllTasks();
})

showCompletedBtn.addEventListener('click', () => {
    displayCompleted();
})