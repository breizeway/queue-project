// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;  // leave
    this.back = null;   // enter
    this.length = 0;
  }

  enqueue(val) {
    //  add something at the back
    //    at back:
    //      1) new thing should be a new node
    //      2) existing back should be newNode.next

    let newNode = new Node(val);

    if (this.length >= 1) this.back.next = newNode;
    else if (this.length === 0) this.front = newNode;

    this.back = newNode;
    return ++this.length;
  }

  dequeue() {

    return --this.length;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;
