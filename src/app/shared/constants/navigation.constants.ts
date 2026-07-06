export const NAVIGATION = [

    {
        label: 'General',
        section: true
    },

    {
        label: 'Dashboard',
        icon: 'dashboard',
        route: '/home'
    },

    {
        label: 'Data Structures',
        section: true
    },

    {
        label: 'Stack',
        icon: 'layers',
        route: '/stack'
    },

    {
        label: 'Queue',
        icon: 'view_stream',
        route: '/queue'
    },

    {
        label: 'Linked List',
        icon: 'share',
        route: '/linked-list'
    },

    {
        label: 'Trees',
        icon: 'account_tree',
        children: [

            {
                label: 'Binary Tree',
                route: '/trees/binary-tree'
            },

            {
                label: 'Binary Search Tree',
                route: '/trees/binary-search-tree'
            },

            {
                label: 'AVL Tree',
                route: '/trees/avl-tree'
            },

            {
                label: 'Heap',
                route: '/trees/heap'
            }

        ]

    },

    {
        label: 'Graphs',

        icon: 'hub',

        children: [

            {
                label: 'Breadth First Search',
                route: '/graphs/bfs'
            },

            {
                label: 'Depth First Search',
                route: '/graphs/dfs'
            },

            {
                label: 'Dijkstra',
                route: '/graphs/dijkstra'
            },

            {
                label: "Prim's Algorithm",
                route: '/graphs/prims'
            },

            {
                label: "Kruskal's Algorithm",
                route: '/graphs/kruskals'
            }

        ]

    },

    {
        label: 'Developer',
        section: true
    },

    {
        label: 'About Me',
        icon: 'person',
        route: '/about'
    }

];