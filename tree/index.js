class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST { // binary search tree
    constructor(){
        this.root = null
    } 
    left(rightValue,leftValue){
        if(!rightValue || !leftValue) return undefined
        let newRightNode = new Node(rightValue)
        let newLeftNode = new Node(leftValue)
        this.bottom.right = newRightNode
        this.bottom.left = newLeftNode
        // this.bottom = newNode
    }
    right(value){
        if(!value) return undefined
        let newNode = new Node(value)
        this.bottom.right = newNode
        this.bottom = newNode
    }
    
 }

 let myTree = new BST()
 
//  myTree.left(2,2)
//  myTree.right(3)
 console.log(myTree)