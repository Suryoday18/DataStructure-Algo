An object {nail: 1000} will pass through the Hash generator function and it will assign the object to any memory.
Two Characterstics of the Hash Generator: 
1. One-way: with the assigned address, you can't get back the object
2. Deterministic: It will assign the same address for the one given object, if {nail: 1000} -> 2 same for {nail: 1000} -> 2
Collissions: Two values in the same spot of the memory 
How to handle this:
Seperate Chaining Methods:
1. Linear Probing: If some item is already there in the given index, move the item to the next one, if item is still there to the next address move the item to next one - open addressing
2. Linked Lists at every one of the addresses, we just mapped the multiple items via linklists to that addresses

Hashtable are basically the collection of arrays into the array.
[[['paint': 1200]], empty, empty, [['nuts': 1200], ['bolts': 1500]], empty, empty, empty] -> by default it's length is 7, we can pass any size to size variable

HashTable randomize the addresses and assign the key value pair on random location - and it gives you easily acess the key so O(1) it follows for searching


