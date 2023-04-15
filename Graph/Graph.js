class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){ //creating the key with an empty array
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
            return true
        }
        return false
    } //O(1)
    addEdge(vertex1, vertex2){ //pushing the elements into the keyed array 
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
            return true
        }
        return false
    }//O(1)
    removeEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
        .filter(v => v !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
        .filter(v => v !== vertex1)
            return true
        }
        return false
    }//O(V+E)
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return undefined
        while(this.adjacencyList[vertex].length){//jb tk uska length rhe ya jb tk wo khali n ho jaye
            let temp = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, temp)
        }
        delete this.adjacencyList[vertex]
        return this
    }//O(n)
}

let myGraph = new Graph()
myGraph.addVertex("A")
myGraph.addVertex("B")
myGraph.addVertex("C")
myGraph.addEdge("A", "B")
myGraph.addEdge("B", "C")
myGraph.addEdge("C", "A")
myGraph.removeEdge("C", "B")
myGraph.removeVertex("C")
console.log(myGraph);

