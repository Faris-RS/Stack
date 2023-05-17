function createNode(value) {
  return { value, next: null };
}

function createStack() {
  let top = null;

  function push(value) {
    const newNode = createNode(value);
    newNode.next = top;
    top = newNode;
  }

  function pop() {
    if (isEmpty()) {
      return undefined;
    }

    const poppedValue = top.value;
    top = top.next;
    return poppedValue;
  }

  function peek() {
    if (isEmpty()) {
      return undefined;
    }

    return top.value;
  }

  function isEmpty() {
    return top === null;
  }

  return {
    push,
    pop,
    peek,
    isEmpty,
  };
}

// Usage:
const stack = createStack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.isEmpty()); // Output: false
