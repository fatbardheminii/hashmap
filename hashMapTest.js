import HashMap from "./hashMap.js";

const test = new HashMap();
test.loadFactor = 0.75;

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("HashMap after initial population:");
console.log("Capacity:", test.getCapacity());
console.log("Length:", test.length());
console.log("Keys:", test.keys());
console.log("Values:", test.values());
console.log("Entries:", test.entries());

test.set("apple", "green");
test.set("banana", "blue");

test.set("moon", "silver");

console.log("HashMap after resizing:");
console.log("Capacity:", test.getCapacity());
console.log("Length:", test.length());
console.log("Keys:", test.keys());
console.log("Values:", test.values());
console.log("Entries:", test.entries());

console.log("Get key 'apple':", test.get("apple"));
console.log("Has key 'banana':", test.has("banana"));
console.log("Remove key 'carrot':", test.remove("carrot"));
console.log("Get key 'carrot' after removal:", test.get("carrot"));
console.log("Length after removing key 'carrot':", test.length());
test.clear();
console.log("Length after clearing:", test.length());
console.log("Keys after clearing:", test.keys());
console.log("Values after clearing:", test.values());
console.log("Entries after clearing:", test.entries());
