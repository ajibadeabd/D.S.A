class Node {
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head= newNode
        this.tail=this.head
        this.length=1

    }
    push(value){
        let newNode  = new Node(value)
        if(!this.head) {this.head = newNode;this.tail=newNode;}
        else{this.tail.next=newNode;this.tail=newNode}
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
        let temp = this.head
        let prev = this.head
        while(temp.next){
            prev=temp
            temp=temp.next
        }
        this.tail=prev
        this.tail.next=null
        this.length--   
        if(!this.length){ this.head=null ;this.tail=null}
        return temp
    }
    unshift(value){
        let newNode  = new Node(value)
        if(!this.head) {this.head = newNode;this.tail=newNode;}
        else{
            newNode.next=this.head
            this.head=newNode
        }
        this.length++
    }
    shift(){
        if(!this.head)return 
        this.head=this.head.next
        if(this.length===1) this.tail=null
        this.length--
    }
    get(index){
        if(!this.head ||  index>(this.length-1) || index<0 || !index) return  undefined
        let temp = this.head;
        let i = 0
        while(i<index){
            temp=temp.next
            i++
        }
        console.log(temp)
        return temp
    }
    insert(index,value){
        let node = this.get(index)
        if(!node) return 


    }

}
const list  = new LinkedList(1);
list.push(2)
list.push(3)
// list.unshift(11)
// list.get()

// list.shift()
list.pop()
list.pop()
list.pop()
list.pop()

// list.push(3)
// // list.push(4)
// // // list.set(0,2)
// // list.unshift(11)
// // list.pop()
// // list.shift()
// // list.shift()
// // list.shift()

// list.get(2)
// // list.set(1,10)
// // list.pop()
// list.remove(1)
// // // list.insert(3,33)
// // console.log( list)

// // list.reverse()
console.log( list)
// // console.log(list)