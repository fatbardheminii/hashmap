import LinkedList from "./linked-lists.js";

export default class HashMap {
  constructor() {
    this.tableSize = 16; // Initial size of the hash table
    this.hashTable = new Array(this.tableSize).fill(null); // Initialize the hash table with null values
    this.loadFactor = 0.75; // Load factor threshold for resizing
    this.size = 0; // Tracks the number of key-value pairs
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31; // Prime number used for hashing
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.tableSize; // Hash calculation
    }
    return hashCode;
  }

  // Resize the hash table if the load factor exceeds the declared value
  resize() {
    const newTableSize = this.tableSize * 2; // Double the table size
    const newHashTable = new Array(newTableSize).fill(null); // Create a new hash table

    for (let i = 0; i < this.hashTable.length; i++) {
      const linkedList = this.hashTable[i];
      if (linkedList) {
        let current = linkedList.getHead();
        while (current !== null) {
          const [key, value] = current.value;
          const hashedIndex = this.hashWithNewTableSize(key, newTableSize); // Rehash with new table size

          if (!newHashTable[hashedIndex]) {
            newHashTable[hashedIndex] = new LinkedList(); // Initialize new linked list if not present
          }
          newHashTable[hashedIndex].append([key, value]); // Reinsert key-value pair
          current = current.next;
        }
      }
    }

    this.tableSize = newTableSize; // Update table size
    this.hashTable = newHashTable; // Replace old hash table with new
  }

  getCapacity() {
    return this.hashTable.length; // Return current capacity of hash table
  }

  // Helper function to hash with a new table size
  hashWithNewTableSize(key, newTableSize) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % newTableSize; // Hash calculation with new size
    }
    return hashCode;
  }

  set(key, value) {
    const hashedIndex = this.hash(key);

    if (hashedIndex < 0 || hashedIndex >= this.hashTable.length) {
      throw new Error("Trying to access index out of bound");
    }

    if (!this.hashTable[hashedIndex]) {
      this.hashTable[hashedIndex] = new LinkedList(); // Initialize linked list if not present
    }

    const linkedList = this.hashTable[hashedIndex];
    let current = linkedList.getHead();

    while (current !== null) {
      if (current.value[0] === key) {
        current.value[1] = value; // Update value if key already exists
        return;
      }
      current = current.next;
    }

    linkedList.append([key, value]); // Add new key-value pair
    this.size++;

    // Trigger resize if load factor exceeds threshold
    if (this.size / this.tableSize > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const hashedIndex = this.hash(key);
    const linkedList = this.hashTable[hashedIndex];

    if (!linkedList) {
      return null; // Return null if no linked list at hashed index
    }

    let current = linkedList.getHead();
    while (current !== null) {
      if (current.value[0] === key) {
        return current.value[1]; // Return the value if key is found
      }
      current = current.next;
    }

    return null; // Return null if key not found
  }

  has(key) {
    const hashedIndex = this.hash(key);
    const linkedList = this.hashTable[hashedIndex];

    if (!linkedList) {
      return false; // Return false if no linked list at hashed index
    }

    let current = linkedList.getHead();
    while (current !== null) {
      if (current.value[0] === key) {
        return true; // Return true if key is found
      }
      current = current.next;
    }

    return false; // Return false if key not found
  }

  remove(key) {
    const hashedIndex = this.hash(key);
    const linkedList = this.hashTable[hashedIndex];

    if (!linkedList) {
      return false; // Return false if no linked list at hashed index
    }

    let current = linkedList.getHead();
    let index = 0;

    while (current !== null) {
      if (current.value[0] === key) {
        linkedList.removeAt(index); // Remove the key-value pair
        this.size--;
        return true;
      }

      current = current.next;
      index++;
    }

    return false; // Return false if key not found
  }

  length() {
    let result = 0;

    for (let i = 0; i < this.hashTable.length; i++) {
      const linkedList = this.hashTable[i];

      if (linkedList) {
        let current = linkedList.getHead();
        while (current !== null) {
          result++; // Count each key-value pair
          current = current.next;
        }
      }
    }
    return result; // Return the total count of key-value pairs
  }

  clear() {
    this.hashTable = new Array(this.tableSize).fill(null); // Reinitialize the hash table
    this.size = 0; // Reset size
  }

  keys() {
    let keysArr = [];

    for (let i = 0; i < this.hashTable.length; i++) {
      const linkedList = this.hashTable[i];

      if (linkedList) {
        let current = linkedList.getHead();
        while (current !== null) {
          keysArr.push(current.value[0]); // Collect all keys
          current = current.next;
        }
      }
    }

    return keysArr; // Return array of keys
  }

  values() {
    let valuesArr = [];

    for (let i = 0; i < this.hashTable.length; i++) {
      const linkedList = this.hashTable[i];

      if (linkedList) {
        let current = linkedList.getHead();
        while (current !== null) {
          valuesArr.push(current.value[1]); // Collect all values
          current = current.next;
        }
      }
    }

    return valuesArr; // Return array of values
  }

  entries() {
    let entriesArr = [];

    for (let i = 0; i < this.hashTable.length; i++) {
      const linkedList = this.hashTable[i];

      if (linkedList) {
        let current = linkedList.getHead();
        while (current !== null) {
          entriesArr.push([current.value[0], current.value[1]]); // Collect all key-value pairs
          current = current.next;
        }
      }
    }
    return entriesArr; // Return array of key-value pairs
  }
}
