let todo = [];
let req = prompt("please enter your request");

while (true) {

    if (req == "quit") {
        console.log("quiting app");
        break;
    }

    if (req == "list") {

        if (todo.length === 0) {
            console.log("First add some item to view list");
        } else {
            console.log("--------------");
            for (let i = 0; i < todo.length; i++) {
                console.log(i, todo[i]);
            }
            console.log("--------------");
        }

    } else if (req == "add") {

        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");

    } else if (req == "delete") {

        if (todo.length === 0) {
            console.log("No task is added so delete not possible");
        } else {
            let idx = prompt("please enter the task index you want to delete");

            if (idx >= 0 && idx < todo.length) {
                todo.splice(idx, 1);
                console.log("task deleted");
            } else {
                console.log(" you wrote Invalid index please write valid index to delete the task or you can see added task index by seeing list");
            }
        }

    } else {
        console.log("wrong request");
    }

    req = prompt("please enter your request");
}