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
        'insertEnd(value: number): void {',
        '  const newNode = {',
        '    value,',
        '    next: null',
        '  };',
        '  if (!this.head) {',
        '    this.head = newNode;',
        '    return;',
        '  }',
        '  let current = this.head;',
        '  while (current.next) {',
        '    current = current.next;',
        '  }',
        '  current.next = newNode;',
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