class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {


    const newNode = new LinkedListNode(val);

    newNode.next = this.head;

    this.head = newNode;

    this.length++;
  }

  addToTail(val) {

    const newNode = new LinkedListNode(val);

    this.length++;

    if(!this.head) {
      this.head = newNode;
      return;
    };


    let curr = this.head;

    while(curr.next){
      curr = curr.next;
    }

    curr.next = newNode;

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

linkedList = new LinkedList();

linkedList.addToHead(1);
linkedList.addToHead(2);
linkedList.addToTail(0);

// console.log(linkedList);

module.exports = LinkedList;
