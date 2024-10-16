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
          import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
      },
      {
        path: "/recent",
        name: "recent",
        component: () =>
          import(/* webpackChunkName: "recent" */ "../views/recent/index.vue"),
      },
      {
        path: "/star",
        name: "star",
        component: () =>
          import(/* webpackChunkName: "star" */ "../views/star/index.vue"),
      },
      {
        path: "/setting",
        name: "setting",
        component: () =>
          import(
            /* webpackChunkName: "setting" */ "../views/setting/index.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
