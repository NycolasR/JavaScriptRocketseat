var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

// to return the JSON as a string, we use the JSON.parse() method
// in case the JSON doesn't return a acceptable value, it'll return an empty list.
var todos = JSON.parse(localStorage.getItem('list_todos')) || [] 

function renderTodos() {
    listElement.innerHTML = ''

    for(todo of todos) {
        var todoElement = document.createElement('li') // create a list item
        var todoText = document.createTextNode(todo) // set the todo as a text for the list item

        var linkElement = document.createElement('a') // create a link for the list item
        linkElement.setAttribute('href', '#') // an empty href

        var position = todos.indexOf(todo) // find the index of the todo on the list
        // for each link, the onclick action will be remove the todo at todos' position
        linkElement.setAttribute('onclick', `deleteTodo(${position})`)

        var linkText = document.createTextNode('Excluir') // the text for every link
        linkElement.appendChild(linkText) // the link element will have the text referenced before

        todoElement.appendChild(todoText) // the todo element will have the text from the todoText
        todoElement.appendChild(linkElement) // it'll also have the link right next to the text

        listElement.appendChild(todoElement) // the todoElement is a list item
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    inputElement.value = ''
    inputElement.focus()
    
    // see if the todo at the textfield's already on the list
    if(todos.indexOf(todoText) == -1) {
        todos.push(todoText)
        renderTodos()
        saveToStorage()
    } else {
        alert("This TODO's already on the list.")
    }
}

buttonElement.onclick = addTodo

function deleteTodo(position) {
    todos.splice(position, 1) 
    // remove a certain number of elements of the array based on the position
    // (position, number_of_elements) -> from the position, it will remove number_of_elements
    renderTodos()
    saveToStorage()
}

function saveToStorage() {
    // making a basic persistance of the list of todos on the navigator
    // the key of the list will be "list_todos"
    // the todos list has to be a string, so we use the JSON.stringify() method to return the list as a string
    localStorage.setItem('list_todos', JSON.stringify(todos))
}