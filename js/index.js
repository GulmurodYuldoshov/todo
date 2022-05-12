var elInput = findElement('.js-input');
var elList = findElement('.js-todo-list')
var todos = [];

function createTodoItem(todo) {
    var elLI = createTag('li')
    var elCheckboxInput = createTag('input')
    var elTitle = createTag('p')
    var elDiv = createTag('div')
    var elEditBtn = createTag('button')
    var elDeleteBtn = createTag('button')

    elLI.className = 'd-flex align-items-center px-3 py-2 border-bottom'

    elCheckboxInput.className = 'form-check-input'
    elCheckboxInput.type = 'checkbox'

    elTitle.textContent = todo.title;
    elTitle.className = 'm-0 ms-2'

    elDiv.className = 'ms-auto'

    elEditBtn.textContent = 'Edit'
    elEditBtn.className = 'btn btn-success'
    elDeleteBtn.textContent = 'Delete'
    elDeleteBtn.className = 'btn btn-danger ms-1'

    elDiv.appendChild(elEditBtn)
    elDiv.appendChild(elDeleteBtn)
    elLI.appendChild(elCheckboxInput)
    elLI.appendChild(elTitle)
    elLI.appendChild(elDiv)
    elList.appendChild(elLI)


}

function renderElements(array) {
    elList.innerHTML = null
    for (var i = 0; i < array.length; i++) {
        createTodoItem(array[i])
    }
}


function handAddtodo(evt) {
    if (evt.keyCode === 13) {
        var newTodo = {
            id: 1,
            title: elInput.value,
            isComplated: false
        }
        todos.push(newTodo);
        renderElements(todos)
        elInput.value = null;
    }
}
elInput.addEventListener('keyup', handAddtodo)