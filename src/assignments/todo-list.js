import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import inquirer from 'inquirer';
let todos = [];
function main() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'operation',
            message: 'What would you like to do?',
            choices: ['Add todo', 'List todos', 'Complete todo', 'Exit'],
        }
    ]).then((answers) => {
        switch (answers.operation) {
            case 'Add todo':
                addTodo();
                break;
            case 'List todos':
                listTodos();
                break;
            case 'Complete todo':
                completeTodo();
                break;
            case 'Exit':
                process.exit();
        }
    });
}
function addTodo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the todo:',
        }
    ]).then((answers) => {
        todos.push({ title: answers.title, completed: false });
        main();
    });
}
function listTodos() {
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo.title} [${todo.completed ? 'x' : ' '}]`);
    });
    main();
}
function completeTodo() {
    inquirer.prompt([
        {
            type: 'input',
        }
    ]);
}
