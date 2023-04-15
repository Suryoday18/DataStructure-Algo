//LIFO -> Last In First Out
// In Array type, this can be achieved by push and pop methods
//but in Linked List, first we vertically align the elements like left to right -> top to bottom
// In both the cases, we achieve O(1) POP or PUSH

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value){
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }
    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.top = newNode
        }
        else{
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(this.length === 0) return undefined
        let temp = this.top
        this.top = this.top.next
        temp.next = null

        this.length--
        return temp
    }
}

let myStack = new Stack(11)
myStack.push(7)
myStack.push(23)
// myStack.pop()
console.log(myStack.pop());