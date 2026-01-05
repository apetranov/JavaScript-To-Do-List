let input = document.querySelector('input')
let addTask = document.querySelector('#addTask')
let tasksDiv = document.querySelector('#tasksDiv')

let tasks = []

addTask.addEventListener('click', () => {
    if (input.value.length === 0) {
        alert("Task is empty!")
        return
    }

    let task = document.createElement('div')
    let taskText = document.createElement('h1')
    taskText.textContent = input.value
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
    input.value = ''
})

