import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./layout/shell/shell').then((m) => m.Shell),
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home',
            },
            {
                path: 'home',
                loadComponent: () =>
                    import('./features/home/home').then((m) => m.Home),
            },
            {
                path: 'stack',
                loadComponent: () =>
                    import('./features/stack/stack').then((m) => m.Stack),
            },
            {
                path: 'queue',
                loadComponent: () =>
                    import('./features/queue/queue').then((m) => m.Queue),
            },
            {
                path: 'linked-list',
                loadComponent: () =>
                    import('./features/linked-list/linked-list').then(
                        (m) => m.LinkedList
                    ),
            },
            {
                path: 'trees/binary-tree',
                loadComponent: () =>
                    import('./features/trees/binary-tree/binary-tree')
                        .then(m => m.BinaryTree)
            },
            {
                path: 'trees/binary-search-tree',
                loadComponent: () =>
                    import('./features/trees/binary-search-tree/binary-search-tree')
                        .then(m => m.BinarySearchTree)
            },
            {
                path: 'about',
                loadComponent: () =>
                    import('./features/about/about')
                        .then(m => m.About)
            }
        ],
    },
];