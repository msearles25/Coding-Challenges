class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    } 
}
class Tree {
    constructor() {
        this.root = null;
    }
    toObject() {
        return this.root;
    }
    add(value) {
        const newNode = new Node(value);
        let current = this.root;
        // No head/root, create it and then return.
        if(!this.root) {
            this.root = newNode;
            return;
        }
        // if there is a head, then start a loop as many times as needed.
        while(true) {
            // if the value is less than the current nodes value, then go
            // left on the tree.
            if (value < current.value) {
                if(current.left) {
                    current = current.left;
                    continue;
                }
                current.left = newNode;
                return;
                
            } 
            // otherwise, if it is larger than the current nodes value
            // go right on the tree.
            else {
                if(current.right) {
                    current = current.right;
                    continue;
                }
                current.right = newNode
                return;
            }
        }
    }
}

const nums = [3,7,4,6,5];
const tree = new Tree();
nums.map(num => tree.add(num));

console.log(tree);