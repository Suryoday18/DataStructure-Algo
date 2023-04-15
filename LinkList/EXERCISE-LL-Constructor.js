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
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
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

    pop(){
        if(!this.head) return undefined //when you have no item
        let temp = this.head
        let pre = this.head
        while(temp.next){
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length === 0){ // when you have only one item in the list
            this.head = null
            this.tail = null
        }
        return temp

    }
    unShift(value){
        const newNode = new Node(value)
        if(!this.head){ // if no item present
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

}


function test() {
    let myLinkedList = new LinkedList(7);
    myLinkedList.push(4)
    myLinkedList.pop()
    myLinkedList.pop()
    myLinkedList.pop()
    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
    myLinkedList.printList();
    console.log(myLinkedList, "mylinkedlist");
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/