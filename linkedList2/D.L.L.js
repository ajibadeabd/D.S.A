class Node {
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
} 

class DoubleLinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head= newNode
        this.tail=this.head
        this.length=1

    }
    push(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev=this.tail
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
        return this
    }
    pop(){
          if(this.length==0) return undefined
          if(this.length==1) {
            this.length--
            this.head = null
            this.tail = null
            return 
          }
        let temp = this.tail
        this.tail=this.tail.prev
        this.tail.next=null
        temp.prev=null
        this.length--
        if(!this.length) {
            this.head=null
        }
        return temp
    }
    unshift(value){
        const newNode = new Node(value)

        if(this.length==0){
            this.head = newNode
            this.tail = newNode
        }else{
            let temp = this.head
            temp.prev = newNode
            newNode.next = temp
            this.head = newNode
        }
           this.length++
           return this
    }
    shift(){
        if(!this.head) return undefined
        let temp = this.head
        if(this.length==1){
            this.head = null 
            this.tail = null 
        }else{
            this.head = this.head.next
            this.head.prev =  null
        }
        temp.next = null
        this.length--
        return temp
    }
    get(index){
        if(this.length==0 || index>=this.length || index<0 ) return undefined
        let temp = this.head
        if(index<(this.length/2)){
            for(let i = 0; i<index;i++){
                temp=temp.next
            }
        }else{
            temp = this.tail
            for(let i = this.length-1; i>index;i--){
                temp=temp.prev
            }
        }
        return temp
    }
    set(index,value){
        if(this.length==0 || index>=this.length || index<0 ) return undefined

        let node = this.get(index)
        if(!node) return false
        node.value=value
        return true
    }
    insert(index,value){
        if(index == 0 ) return this.unshift(value)
        if(index ===this.length) return this.push(value)
        if(index>this.length || index<0 ) return false
        let before = this.get(index-1)
        if(!before) return undefined
        const newNode = new Node(value)
        const after  =  before.next
        newNode.next =  after
        newNode.prev = before

        after.prev = newNode
        before.next = newNode
        this.length++
    }
    remove(index){
        if(this.length==0 || index>=this.length || index<0 ) return undefined
        if(index == 0) return this.shift(index)
        if(index == this.length-1) return this.pop(index)
        let prevItem = this.get(index)
                 let  before = prevItem.prev
                 let  next = prevItem.next
                 before.next = next
                 next.prev = before
        this.length--
        prevItem.next  = null
        prevItem.prev  = null
        return prevItem

    }
    reverse(){
        // let temp = this.head
        // this.head = this.tail
        // this.tail = temp 
        // let prev = null
        // let next= temp.next 
        // for(let i=0;i<this.length;i++){
        //     next = temp.next
        //     prev = temp.prev
        //     temp.next=prev // this is where the pointer is been reset 
        //     temp.next=prev // this is where the pointer is been reset 
        //     prev=temp
        //     temp=next
        //     }
        //     return this

var temp = null;
var current = this.head;
  
        /*
         * swap next and prev for all nodes of doubly linked list
         */
        while (current != null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
  
        /*
         * Before changing head, check for the cases like empty list and list with only
         * one node
         */
        if (temp != null) {
            this.head = temp.prev;
        }
    }
}
const list  = new DoubleLinkedList(1);
list.push(2)
list.push(3)
list.pop()
list.pop()
list.pop()
// list.unshift(1)
// list.push(2)
// list.push(3)
// list.push(4)
// list.push(5)

// list.unshift(2)
// list.unshift(3)
// list.unshift(4)
// list.shift()
// list.get(2)
// list.set(0,2)
// list.push(4)
// list.set(0,2)
// list.shift()
// list.unshift(11)
// list.pop()
list.insert(0,33)
list.insert(1,3)
list.insert(2,44)
// list.remove(0)
// list.reverse()
console.log( list)

// list.reverse()
// console.log( list)
// console.log(list)
  