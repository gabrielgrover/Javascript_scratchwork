'use strict';

module.exports = (Node) => {
   
  let push = (head, data) => {
    let next_node = new Node(data);
    if(!head) return next_node;
    next_node.next = head;
    return next_node;
  };
  
  let buildOneTwoThree = generate_list(3, [2,1])
  
  let length = head => head ? length(head.next) + 1 : 0;
  
  let count = (head, data) => head ? (head.data === data ? 1 : 0) + count(head.next, data) : 0;
  
  let getNth = (node, index) => {
    if(index < 0 || index > length(node) - 1 || !node) throw 'provided index is out of range or you gave an empty list';
    if(index === 0) return node;
    return getNth(node.next, index - 1);
  };
  
  let insertNth = (head, index, data) => {
    if(index > length(head)) throw 'index out of range';
    if(index === 0) return push(head, data);
    head.next = insertNth(head.next, index - 1, data);
    
    return head;
  };
  
  let sortedInsert = (head, data) => {
    if(head.data < data) {
      head.next = push(head.next, data);  
      return head;
    }else {
      return sortedInsert(head.next, data);   
    }
  };
   
  function generate_list(tail_data, args) {
    if(args.length === 0) return tail_data;
    let head;
    tail_data instanceof Node ? head = tail_data : head = new Node(tail_data);
    let data = args[0];
    args.shift();
    return generate_list(push(head,data), args);
  }
  
   return {push: push, buildOneTwoThree: buildOneTwoThree, generate_list:generate_list, length: length, count: count, getNth: getNth, insertNth: insertNth, sortedInsert: sortedInsert};  
}

