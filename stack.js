class stack
{
    constructor()
    {
        this.item = []
    }
    push(shaqeeb)
    {
        this.item.push(shaqeeb);
    }
    pop()
    {
        return this.item.pop();
    }
    peek()
    {
        return this.item[this.item.length -1];
    }
    isEmpty()
    {
        return this.item.length === 0;
    }
    size()
    {
        return this.item.length;
    }
    print()
    {
        console.log(this.item.toString());
    }
}
const newstack = new stack();
console.log(newstack.isEmpty());
newstack.push(20);
newstack.push(10);
newstack.push(30);
console.log(newstack.size());
newstack.print();
console.log(newstack.pop());
console.log(newstack.peek());
newstack.print();