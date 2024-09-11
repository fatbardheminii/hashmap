# HashMap Implementation

A simple implementation of a HashMap in JavaScript, utilizing linked lists for collision handling. This project demonstrates fundamental hash map operations and includes testing for various functionalities.

## Features

- **HashMap** class with methods to manage key-value pairs.
- Utilizes **LinkedList** for handling collisions in the hash table.
- Separate testing file to validate functionality.

## Methods

- **`constructor()`**: Initializes the hash map with a default size and load factor.
- **`hash(key)`**: Computes the hash code for a given key.
- **`resize()`**: Expands the hash map and rehashes all entries when the load factor exceeds the threshold.
- **`set(key, value)`**: Adds or updates a key-value pair in the hash map.
- **`get(key)`**: Retrieves the value associated with the given key.
- **`has(key)`**: Checks if the key exists in the hash map.
- **`remove(key)`**: Removes the key-value pair for the given key.
- **`length()`**: Returns the number of key-value pairs in the hash map.
- **`clear()`**: Removes all entries from the hash map.
- **`keys()`**: Returns an array of all keys in the hash map.
- **`values()`**: Returns an array of all values in the hash map.
- **`entries()`**: Returns an array of key-value pairs as `[key, value]` arrays.
- **`getCapacity()`**: Returns current capacity of hash table.

## Testing

- **`hashMapTest.js`**: Contains test cases for verifying the functionality of the HashMap, including methods for setting, getting, and removing entries, as well as ensuring proper resizing.
