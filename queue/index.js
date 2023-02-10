class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Queue {
    constructor(value){
        let newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }
    dequeue(){
       if(this.length===0) return undefined
       let temp = this.first
       if(this.length===1){
        this.first=null
        this.last = null
       }else{
        this.first = temp.next
        temp.next = null
    }
        this.length--
        return temp
    }
    enqueue(value){
        if(!value) return 
        let newNode = new Node(value)
        if(this.length===0){
            this.first = newNode;
            this.last = newNode;
        }else{
            // newNode.next = this.last
            this.last.next=newNode
            this.last = this.last.next
        }
        this.length++
        return this
    }
 }

 let myQueue = new Queue(1) 
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.dequeue()
myQueue.dequeue()
 console.log(myQueue)