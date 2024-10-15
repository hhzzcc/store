import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layout/index.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "layout" */ "../views/home/index.vue"),
      },
      {
        path: "/recent",
        name: "recent",
        component: () =>
          import(/* webpackChunkName: "layout" */ "../views/recent/index.vue"),
      },
      {
        path: "/star",
        name: "star",
        component: () =>
          import(/* webpackChunkName: "layout" */ "../views/star/index.vue"),
      },
      {
        path: "my",
        name: "my",
        component: () =>
          import(/* webpackChunkName: "layout" */ "../views/my/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
