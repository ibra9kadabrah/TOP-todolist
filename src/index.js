const { todo } = require("node:test");

function todoItem(title, describtion, priority) {
    return {title, describtion, priority};
}

const item = todoItem("money", "dont forget", "high");
console.log(item);