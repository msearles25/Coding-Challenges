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
        if(!this.root) {
            this.root = newNode;
            return;
        }
        while(true) {
            if (value < current.value) {
                if(current.left) {
                    current = current.left;
                    continue;
                }
                current.left = newNode;
                return;
                
            } else if(value > current.value){
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