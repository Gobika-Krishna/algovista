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
        ],
    },
];