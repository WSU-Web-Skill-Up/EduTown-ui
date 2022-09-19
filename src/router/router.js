import Vue from "vue";
import VueRouter from "vue-router";
import ErrorPage from "@/components/ErrorPage";
import Home from "@/components/Home";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    {
      path: "*",
      component: ErrorPage
    }
  ]
});

export default router;
