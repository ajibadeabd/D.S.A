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
        return this
    }
    shift(){
        if(!this.head) return undefined
        let temp = this.head
        this.head=this.head.next
        if(this.length===1) this.tail=null
        this.length--
        temp.next=null
        return temp
    }
    get(index){
        if(!this.head ||  index>=this.length || index<0) return  undefined
        let temp = this.head;
        let i = 0
        if(index==this.length-1) return this.tail
        if(index==0) return this.head
        while(i<index){
            temp=temp.next
            i++
        }
        return temp
    }
    set(index,value){
       let get =this.get(index)
       if(!get) return false
       get.value = value
       return true
    }
    insert(index,value){
        if(index==0) return this.unshift(index)
        if(index==this.length) return this.push(index)
        if(index<0 || index>this.length) return false
        let node = this.get(index-1)
        if(!node) return false
        const newNode = new Node(value)
        newNode.next = node.next
        node.next = newNode
        this.length++
        return false
    }
    remove(index){
        if(index<0 || index>=this.length) return undefined
        if(index==0) return this.shift(index)
        if(index==this.length-1) return this.pop(index)
        let getPrevNode = this.get(index-1)
        let temp = getPrevNode.next
        getPrevNode.next = temp.next
        temp.next=null
        this.length--
        return temp
    }
    reverse(){
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let prev = null
        let next= temp.next
        for(let i=0;i<this.length;i++){
        next = temp.next
        temp.next=prev // this is where the pointer is been reset 
        prev=temp
        temp=next
        }
        return this
    }

}
const list  = new LinkedList(1);
list.push(2)
list.push(3)
//list.push(4)
// list.unshift(11)
list.get(0) 

// list.set(2,333)
// list.insert(1,333)
// console.log(list.remove(1),"rfrknfrkj")
list.reverse()
// list.pop()
// list.pop()
// list.pop()

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
console.log( list)

// // list.reverse() 