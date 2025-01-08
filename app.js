const list = [];
let input = prompt("What would you like to do?");
while (true) {
  if (input.toLowerCase() === "new") {
    let items = prompt("Enter new todo");
    list.push(items);
  } else if (input.toLowerCase() === "list") {
    if (list.length) {
      console.log(`***************`);
      for (let i = 0; i < list.length; i++) {
        console.log(`${i}: ${list[i]}`);
      }
      console.log(`***************`);
    } else {
      console.log("Your Todo List is Empty");
      input = prompt("Your Todo List is Empty\nWhat would you like to do?");
      continue;
    }
  } else if (input.toLowerCase() === "delete") {
    if (list.length) {
      let index = parseInt(prompt("Enter index of todo to delete"));
      while (Number.isNaN(index)) {
        index = prompt("Enter index of todo to delete");
      }
      if (index <= list.length && index.length >= 0) {
        list.splice(index, 1);
      } else {
        console.log("Index doesn't exist");
        input = prompt("Index doesn't exist\nWhat would you like to do?");
      }
    } else {
      console.log("Your Todo List is Empty\nNothing to delete");
      input = prompt(
        "Your Todo List is Empty\nNothing to delete\nWhat would you like to do?"
      );
      continue;
    }
  } else if (input.toLowerCase() === "quit") {
    console.log("You Quit This App");
    break;
  }
  input = prompt("What would you like to do?");
}
