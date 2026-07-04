# Stack Module

Why Signals?

Signals provide fine-grained reactivity without unnecessary Observable
boilerplate for local UI state.

Interview Question

Q: Why didn't you use NgRx?

Answer:

The application doesn't require global state management.
Signals are lightweight and ideal for localized interactive state.

:::Why do Standalone Components exist?

They remove unnecessary NgModules, simplify dependency management, improve lazy loading, and reduce boilerplate while keeping components self-contained