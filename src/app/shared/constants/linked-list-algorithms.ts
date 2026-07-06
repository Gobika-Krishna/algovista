export const LINKED_LIST_ALGORITHMS = {

    insertFront: [
        'insertFront(value: number): void {',
        '  const newNode = {',
        '    value,',
        '    next: this.head',
        '  };',
        '  this.head = newNode;',
        '}'
    ],

    insertEnd: [
        'insertEnd(value: number): void {',   // 1
        '  const newNode = new ListNode(value);', // 2
        '  if (!this.head) {',                // 3
        '    this.head = newNode;',           // 4
        '    return;',                        // 5
        '  }',
        '  let current = this.head;',         // 7
        '  while (current.next) {',           // 8
        '    current = current.next;',        // 9
        '  }',
        '  current.next = newNode;',          // 11
        '}'
    ],

    deleteFront: [
        'deleteFront(): void {',
        '  if (!this.head) {',
        '    return;',
        '  }',
        '  this.head = this.head.next;',
        '}'
    ],

    deleteEnd: [
        'deleteEnd(): void {',
        '  if (!this.head) {',
        '    return;',
        '  }',
        '  if (!this.head.next) {',
        '    this.head = null;',
        '    return;',
        '  }',
        '  let current = this.head;',
        '  while (current.next?.next) {',
        '    current = current.next;',
        '  }',
        '  current.next = null;',
        '}'
    ],

    search: [
        'search(value: number): void {',
        '  let current = this.head;',
        '  while (current) {',
        '    if (current.value === value) {',
        '      return;',
        '    }',
        '    current = current.next;',
        '  }',
        '}'
    ]

};