import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Homeview.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  {
    path: "/contato",
    name: "contato",
    component: () => import("@/views/ContatoView.vue"),
  },
  {
    path: "/servcesterm",
    name: "servcesterm",
    component: () => import("@/views/TermoServicos.vue"),
  },
  {
    path: "/privacidade",
    name: "privacidade",
    component: () => import("@/views/PrivacidadeView.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
