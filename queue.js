class Queue {
  constructor() {
    this.items = [];
  }
  enqeue(element) {
    return this.items.push(element);
  }
  dequene() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}
const queue = new Queue();
console.log(queue.isEmpty());
queue.enqeue(10);
queue.enqeue(20);
queue.enqeue(30);
console.log(queue.size());
queue.print();
console.log(queue.dequene());
console.log(queue.peek());
queue.print();
