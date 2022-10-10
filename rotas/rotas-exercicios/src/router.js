import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio";
// import Usuario from "./components/usuario/Usuario";
// import UsuarioLista from "./components/usuario/UsuarioLista";
// import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe";
// import UsuarioEditar from "./components/usuario/UsuarioEditar";
import Menu from "./components/template/Menu";

Vue.use(Router);

// Comentamos o import acima e fazemos um import dinâmico
// O webpackChunkName cria um arquivo agrupado chamado usuario.js unindo esses componentes
// Sem utilizar o webpackChunkName ele criará um arquivo para cada componente
const Usuario = () => import(/*webpackChunkName: "usuario"*/"./components/usuario/Usuario");
const UsuarioLista = () => import(/*webpackChunkName: "usuario"*/"./components/usuario/UsuarioLista");
const UsuarioDetalhe = () => import(/*webpackChunkName: "usuario"*/"./components/usuario/UsuarioDetalhe");
const UsuarioEditar = () => import(/*webpackChunkName: "usuario"*/"./components/usuario/UsuarioEditar");

const router = new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      // component: Inicio,
      components: {
        default: Inicio,
        menu: Menu,
      },
      name: "inicio",
    },
    {
      path: "/usuario",
      component: Usuario,
      props: true,
      children: [
        { path: "", component: UsuarioLista },
        {
          path: ":id",
          component: UsuarioDetalhe,
          props: true,
          beforeEnter: (to, from, next) => {
            // DE FORMA LOCAL PARA ESSA ROTA
            console.log("antes da rota -> usuario detalhe");
            next();
          },
        },
        {
          path: ":id/editar",
          component: UsuarioEditar,
          props: true,
          name: "editarUsuario",
        },
      ],
    },
    {
      path: "/redirecionar",
      redirect: "/usuario",
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

router.beforeEach((to, from, next) => {
  // DE FORMA GLOBAL
  console.log("antes das rotas -> global");
  // Sem o next ele não navegará
  next();
  // Ou abortar com false
  // next(false)
  // Pode redirecionar para uma rota específica
  // Ele não sairá de /usuario
  // if (to.path !== "/usuario") {
  //   next("/usuario");
  // } else {
  //   next();
  // }
});

export default router;
