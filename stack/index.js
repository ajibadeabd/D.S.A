class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}



class Stack{

    constructor(value){
        let newNode = new Node(value)
        this.top = newNode
        this.length = 1

    }
    pop(){
        if(this.length===0) return undefined
        let temp = this.top
        this.top=temp.next
        temp.next=null
        this.length--
        return temp
    }
    push(value){
        if(!value) return 
        let newNode = new Node(value)
        if(this.length===0){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this
    }
 }

 let myStack = new Stack(1)
 myStack.pop()
 myStack.push(11)
 myStack.push(12)
 myStack.push(13)
 myStack.pop()
 myStack.push(13)

//  myStack.push(13)

 console.log(myStack)