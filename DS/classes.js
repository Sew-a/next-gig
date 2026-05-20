class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log("Stack peek", stack.peek());
console.log("Stack size", stack.size());

// Queue implementation using class

class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.items[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    const elem = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return elem;
  }

  front() {
    return this.items[this.head];
  }

  printQueue() {
    let str = "";
    for (let i = this.head; i < this.tail; i++) {
      str += this.items[i] + " ";
    }
    return str.trim();
  }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Queue front", queue.front());
console.log("Queue dequeue", queue.dequeue());
console.log("Queue elements", queue.printQueue());