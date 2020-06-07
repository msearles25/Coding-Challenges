class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new Node(value);
        // let current = this.head;
        if (this.head === null) { 
            this.head = newNode; 
        }
        // keeping track of the tail.
        else {
            this.tail.next = newNode;
        }

        // not keeping track of the tail
        // else {
        //     while (current.next !== null) {
        //         current = current.next;
        //     }
        //     current.next = newNode;
        // }
        this.tail = newNode;
        this.length++;
    }
    pop() {
//         let popped;
//         let current = this.head;
//         while (current.next !== this.tail) {
//             current = current.next;
//         }

//         popped = current.next;
//         current.next = null;
//         this.tail = current;
//         this.length -= 1;
//         return popped.value;

        return this.delete(this.length-1)
    }
    _test(a, b) {
        return a == b;
    }
    _testIndex(search, __, i) {
        return search == i;
    }
    _find(value, test=this._test) {
        let current = this.head
        let i = 0
        
        // while(test(value, count) == false) {
        //     current = current.next;
        //     count += 1;
        // }  

        while(current) {
          if(test(value, current.value, i)) {
            return current;
          }
          current = current.next;
          i++;
        }
        return null;
    }
    get(index) {
        const node = this._find(index, this._testIndex);
      
        if(!node) return null; 
        return node.value;
    }
    delete(index) {
       if(index === 0) {
         const head = this.head;
         if(head) {
           this.head = head.next;
         }
         else {
           this.tail = this.head = null;
         }
         this.length--;
         return head.value;
       }
      
      const node = this._find(index-1, this._testIndex);
      const deleted = node.next;
      
      if(!deleted) return null;
      
      node.next = deleted.next;
      
      if(node.next && !node.next.next) this.tail = node.next;
      this.length--;
      return deleted.value;
    }
  
}

testList = new LinkedList();

testList.push(8)
testList.push(5)
testList.push(4)

console.log(testList.length)

// console.log(testList.tail)
// console.log(testList.length)
console.log(testList.get(4))
console.log('Deleted: ', testList.delete(2))
console.log('After delete: ', testList.length)