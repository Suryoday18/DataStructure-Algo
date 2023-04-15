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
        let temp = this.head // cause need to return this, assign it to a variable
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
    shift(){
        if(!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return temp
    }
    get(index){
        if(index < 0 || index >= this.length){
            return undefined
        }
        let temp = this.head
        for(let i=0; i<index; i++){
            temp = temp.next
        }
        return temp
    }
    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(value);
        if (index === 0) return this.unshift(value);
        
        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        if(index < 0 || index >= this.length) return undefined
        const before = this.get(index - 1)
        const temp = before.next

        before.next = temp.next // main logic
        temp.next = null // deleting temp
        this.length--  
        return temp
    }
    reverse(){
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next = temp.next
        let prev = null
        for(let i=0; i<this.length; i++){ //iterating through all the node
            next = temp.next
            temp.next = prev // flipping the arrow to previous node
            prev = temp
            temp = next
        }
        return this
    }
}

let myLinkedList = new LinkedList(0) // the new keyword is specifically calling the constructor
myLinkedList.push(2)
myLinkedList.insert(1, 1)
myLinkedList.push(12)
myLinkedList.push(34)
myLinkedList.unShift(6)
myLinkedList.get(2)
console.log(myLinkedList.set(1, 48));
console.log(myLinkedList.remove(1));
console.log(myLinkedList.reverse());