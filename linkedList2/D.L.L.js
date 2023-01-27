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

    pop(){
        if(!this.head) return undefined
        let temp  =  this.tail 
        if(this.length==1){
            this.head=null
            this.tail=null
        }else{
        this.tail=this.tail.prev
        this.tail.next=null
        temp.prev=null
        }
        this.length--
         return temp
    }
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{

        this.tail.next=newNode
        newNode.prev = this.tail
        this.tail=newNode
       }
        this.length++
        return this
    }
    shift(){
        if(!this.head) return undefined 
        let cur=this.head
        if(this.length===1) {
            this.head=null
            this.tail =null
            
        }else{
        this.head=this.head.next
        this.head.prev=null
        }
        this.length--
        cur.next==null
        return cur
    }
    unshift(value){
        const newNode = new Node(value)
        if(!this.head) {
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head.prev=newNode
            this.head=newNode
        }
        this.length++
        return this
    }
    get(index){
        if(index<0 || this.lenght===0 || this.lenght<(index+1)) return undefined
        if(index==(this.length-1)) return this.tail
        let temp = this.head
        if(index<this.length/2){
           for(let i=0; i<index;i++){
            temp=temp.next
        }
        }else {
        temp = this.tail
        for(let i=this.length-1; i>index;i--){
            temp=temp.prev
        }
        }
        return temp
    }
    insert(index,value){
        if(index<0   || this.lenght<index) return false

        const newNode = new Node(value)
        if(index==0){
           return  this.unshift(value)
        }
        if(index==(this.length)){
           return  this.push(newNode)
        }
        let bef = this.get(index  -1)
        let after = bef.next
        newNode.prev=bef
        bef.next=newNode
        newNode.next=after
        after.prev=newNode

        // after.prev=newNode

        this.length++
    }

    set(index,value){
        let bef = this.get(index )
        if(bef){
            bef.value=value
            return true
        }
        return false
    }

    reverse(){
        let temp = this.head;

        this.head = this.tail; 
        this.tail = temp;
        let prev = null
        let next = temp.next
        // this.tail.next = prev
        // let tail = this.tail;

// console.log(tail)
        for(let i = 0;i<this.length;i++){
            next=temp.next
            temp.next=prev
            prev=temp
            temp=next
             

        }
        // console.log(this.tail)
        return this

    }

}
const list  = new DoubleLinkedList(1);
list.push(2)
list.push(3)
// list.push(4)
// list.set(0,2)
// list.shift()
// list.unshift(11)
// list.pop()
// list.insert(3,33)
// console.log( list)

list.reverse()
console.log( list)
// console.log(list)