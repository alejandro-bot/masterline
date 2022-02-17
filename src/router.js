import Vue from 'vue'
import Router from 'vue-router'
// Vuex Store
import store from './store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  scmoduleBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      // =============================================================================
      // Panel Modular
      // =============================================================================
      path: '/panel/',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('./views/Home.vue'),
        },
        {
          path: 'perfiles-usuarios',
          name: 'perfiles-usuarios',
          component: () => import('./views/PerfilesUsuarios.vue'),
          meta: {
						module: 'perfiles-usuarios'
					}
        },
        {
          path: 'create-rol',
          name: 'create-rol',
          component: () => import('./views/Rol.vue'),
          meta: {
						module: 'create-rol'
					}
        },
      ],
      meta: {
				requiresAuth: true,
			}
    },
    {
      // =============================================================================
      // Panel Publico
      // =============================================================================
      path: '/',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [

        {
          path: '',
          name: 'page-login',
          component: () => import('@/views/pages/Login.vue')
        },
        {
          path: 'pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue')
        },
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = "none";
  }
})

router.beforeEach((to, from, next) => {
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = "block";
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!store.getters.loggedIn) {
			next({ name: 'page-login' })
			// next()
		} else {
			if (store.state.user.module == to.meta.module) {
				next()
			} else {
        next()
        // next({ name: 'page-error-404' })
			}
		}
	} else {
		next() // make sure to always call next()!
	}
})

export default router
