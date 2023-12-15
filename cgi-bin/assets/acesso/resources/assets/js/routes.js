/* eslint-disable */

export const routes = [
    { path: '/', name:'404', component: () => import('./redirect.vue') ,meta: { Public: true }},
    { path: '/:code', name:'404', component: () => import('./Login.vue') ,meta: { Public: true }},
];
