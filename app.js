const list = [];
let input = prompt("What would you like to do?");
while (true) {
  //If inputs new
  if (input.toLowerCase() === "new") {
    let items = prompt("Enter new todo");
    list.push(items);
  }

  //If inputs list
  else if (input.toLowerCase() === "list") {
    //If Available list
    if (list.length) {
      console.log(`***************`);
      for (let i = 0; i < list.length; i++) {
        console.log(`${i}: ${list[i]}`);
      }
      console.log(`***************`);
    }

    //If list doesn't exist
    else {
      console.log("Your Todo List is Empty");
      input = prompt("Your Todo List is Empty\nWhat would you like to do?");
      continue;
    }
  }

  //If inputs delete
  else if (input.toLowerCase() === "delete") {
    //If list exist
    if (list.length) {
      let index = parseInt(prompt("Enter index of todo to delete"));

      //check the user inputs correct index
      while (Number.isNaN(index)) {
        index = prompt("Enter index of todo to delete");
      }

      //check the user index exixt or not
      if (index <= list.length && index.length >= 0) {
        list.splice(index, 1);
      } else {
        console.log("Index doesn't exist");
        input = prompt("Index doesn't exist\nWhat would you like to do?");
      }
    }

    //If list doesn't exist
    else {
      console.log("Your Todo List is Empty\nNothing to delete");
      input = prompt(
        "Your Todo List is Empty\nNothing to delete\nWhat would you like to do?"
      );
      continue;
    }
  }

  //If inputs quit
  else if (input.toLowerCase() === "quit") {
    console.log("You Quit This App");
    break;
  }

  //repeating
  input = prompt("What would you like to do?");
}
