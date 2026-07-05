export const QUEUE_ALGORITHMS = {

    create: [
        'create(size){',
        '   queue = new Array(size);',
        '   front = rear = -1;',
        '}'
    ],

    enqueue: [
        'enqueue(value){',
        '   if(isFull()) return;',
        '   if(front==-1) front=0;',
        '   rear++;',
        '   queue[rear]=value;',
        '}'
    ],

    dequeue: [
        'dequeue(){',
        '   if(isEmpty()) return;',
        '   front++;',
        '   if(front>rear){',
        '      front = rear = -1;',
        '   }',
        '}'
    ],

    front: [
        'front(){',
        '   return queue[front];',
        '}'
    ]

};