class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    
	constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

   printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.head === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }
    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    getLength() {
        console.log("Length: " + this.length);
    }
    push(value){
        const newNode = new Node(value)
        if(!this.head){ //incase if linked list is empty
            this.head = newNode
            this.tail = newNode
        }
        else{ // is not empty
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++
        return this
    }
    
}



let myLinkedList = new LinkedList(4);

myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();
console.log("\nLinked List:");
myLinkedList.printList();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/