import './style.css'

const app = document.getElementById('app')
const form = document.createElement('form')
form.classList.add('form')
const task = document.createElement('input')
task.placeholder = "Введите задачу"
const button =  document.createElement('button')
button.type = 'button'
button.textContent = 'Добавить'
form.append(task, button)
app.append(form)

task.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault()
    }
})

button.addEventListener('click', callBack)

function callBack(){
    const taskInfo = task.value
    app.append(getTask(taskInfo))
}

function getTask(taskText){
    const taskT = document.createElement('div')
    taskT.classList.add('taskT')
    const p = document.createElement('p')
    p.textContent = taskText
    const edit = document.createElement('button')
    edit.type = "button"
    edit.textContent = "Изменить"
    edit.addEventListener('click', function(){
        const editedValueTask = prompt('Введите новое имя')
        if (editedValueTask !== null) { 
            p.textContent = editedValueTask
        }
    })
    const done = document.createElement('button')
    done.textContent = "Выполнено"
    done.type = "button"
    done.addEventListener('click', function(){
        taskT.remove()
    })
    taskT.append(p, edit, done)
    return taskT
}