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
        let temp = this.tail
        this.tail.next=null
        this.tail=this.tail.prev
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
    }

}
const list  = new DoubleLinkedList(1);
list.push(2)
list.push(3)
list.pop()
list.pop()
list.pop()
list.unshift(1)
list.push(2)
list.push(3)
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
list.insert(2,33)
// console.log( list)

// list.reverse()
console.log( list)
// console.log(list)
 
 



[{
    "Field A": "ABC",
    "Variable Field A": "66",
    "Variable Field B": "-729"
},
{
    "Field A": "DEF",
    "Variable Field A": "70",
    "Variable Field B": "334"
},
{
    "Field A": "GHI",
    "Variable Field A": "135",
    "Variable Field B": "962"
},
{
    "Field A": "JKL",
    "Variable Field A": "19",
    "Variable Field B": "241"
}]