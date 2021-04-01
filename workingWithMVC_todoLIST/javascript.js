//Model
//function to load todo if list is found in local storage.
var list = document.querySelector('ul');
function loadTodo() {
    if (localStorage.getItem('todoList')) {
        list.innerHTML = localStorage.getItem('todoList');
    }
}
//save todolist state so user can access it later
function saveElement() {
    localStorage.setItem('todoList', list.innerHTML);
    alert('Your TODO Saved!');
}
//function excluding execute script before the page loads
function onLoadChecked() {
    list.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('checked');
        } else if (event.target.tagName === 'SPAN') {
            var div = event.target.parentNode;
            div.remove();
        }
    }, false);
}
//View
function addElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);

    if (inputValue == '') {
        alert('Type your note');
    } else {
        document.getElementById('list').appendChild(li);
    }

    document.getElementById('toDoEl').value = '';
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('X');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);
}

//Controller
var addButton = document.querySelector('.addBtn');
var saveButton = document.querySelector('.saveBtn');
//on page load loadTodo()
document.addEventListener('DOMContentLoaded', () => {
    loadTodo();
    onLoadChecked();
});
//on click button 'add' newElement()

addButton.addEventListener('click', () => {
    addElement();
});

//on click button 'save' saveElement()

saveButton.addEventListener('click', () => {
    saveElement();
});



// document.body.onload = () => {
//     $C.initialize();
//   }


module.exports = { addButton, saveButton };