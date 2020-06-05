// Implementation of an ArrayList 

class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(value) {
        this.data[this.length] = value;
        this.length++;

    }
    pop() {
        const popped = this.data[this.length - 1]  
        delete this.data[this.length - 1];
        this.length--;
        return popped;
    }
    get(index) {
        return this.data[index];
    }
    delete(index) {
        const a = this.data[index];
        this._collapseTo(index);
        return a;
    }
    _collapseTo(index) {
        for(let i = index; i < this.length; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    
  }

const list = new ArrayList;

list.push(152)
list.push(15)
list.push(30)

console.log(list.get(1))

list.pop()
list.delete(0)