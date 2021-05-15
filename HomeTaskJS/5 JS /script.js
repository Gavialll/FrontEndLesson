const getById = (id) => document.querySelector(`#${id}`);
const getByIdClassName = (name) => document.querySelector(`.${name}`);

const input = getById('input');
const btn = getById('btn');
const tasksBlock = getByIdClassName('tasks');

btn.addEventListener('click', function(event){
    addTodo(input.value);
});

function addTodo(value){
    let todo = document.createElement('div');
    todo.style.height  = '50px';
    todo.style.display = 'flex';
    todo.style.justifyContent = 'space-between';
    todo.style.alignItems = 'center';

    let index = document.createElement('span');
    index.innerText = tasksBlock.children.length + 1;
    index.style.width = '5%';

    let todoText = document.createElement('span');
    todoText.innerText = value;
    todoText.style.width = '20%';

    let todoPriority = document.createElement('span');
    todoPriority.innerText = 'Low';
    todoText.style.width = '10%';

    let editBtn = document.createElement('button');
    editBtn.style.border = '1px solid black';
    editBtn.style.height = '50px';
    editBtn.style.width  = '15%';
    editBtn.textContent  = 'Edit';
    editBtn.addEventListener('click', function(event){
           let parent =  event.target.parentNode;
           parent.style.textDecoration = 'line-through';
    });

    let removeBtn = document.createElement('button');
    removeBtn.style.border = '1px solid black';
    removeBtn.style.height = '50px';
    removeBtn.style.width  = '15%';
    removeBtn.textContent  = 'Remove';
    removeBtn.addEventListener('click', function(event){
       let parent =  event.target.parentNode;
       tasksBlock.removeChild(parent);
    });

    let flg = document.createElement("IMG");
        todo.append(flg);

    let flag = document.createElement('button');
    flag.style.border = '1px solid black';
    flag.style.height = '50px';
    flag.style.width  = '15%';
    flag.textContent  = 'flag';
    flag.addEventListener('click', function(event){

        flg.src = "kisspng-blank-map-flag-small-flags-5adcdf78522940.9005917715244245683365.png";
        flg.style.width = '2,5%';
        flg.style.height = '50%'
    });

    todo.append(flg, index, todoText, todoPriority, editBtn, removeBtn ,flag);
    tasksBlock.append(todo);
}







