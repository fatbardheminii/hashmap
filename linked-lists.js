import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  tail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.value;
  }

  at(index) {
    if (index < 0 || index >= this.size) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (current === null) {
        return null;
      }
      current = current.next;
    }
    return current.value;
  }

  pop() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
    }
    this.size--;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let counter = 0;
    while (current) {
      if (current.value === value) {
        return counter;
      }
      current = current.next;
      counter++;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let result = "";
    while (current) {
      result += `(${current.value}) ->`;
      current = current.next;
    }
    result += "null";
    return result;
  }

  insertAt(value, index) {
    let newNode = new Node(value);
    let current = this.head;

    if (index < 0 || index > this.size) return null;
    if (index === 0) {
      newNode.next = current;
      this.head = newNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
    this.size++;
  }

  removeAt(index) {
    let current = this.head;
    if (index < 0 || index >= this.size) return null;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
    }
    
    this.size--;
  }
}
