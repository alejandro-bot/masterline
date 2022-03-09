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
        {
          path: 'users',
          name: 'users',
          component: () => import('./views/Users.vue'),
          meta: {
						module: 'users'
					}
        },
        {
          path: 'create-user',
          name: 'create-user',
          component: () => import('./views/CreateUser.vue'),
          meta: {
						module: 'create-user'
					}
        },
        {
          path: 'edit-user//:id',
          name: 'edit-user',
          component: () => import('./views/EditUser.vue'),
          meta: {
						module: 'edit-user'
					}
        },
        {
          path: 'active-user',
          name: 'active-user',
          component: () => import('./views/ActiveUser.vue'),
          meta: {
						module: 'active-user'
					}
        },
        {
          path: 'create-ro',
          name: 'create-ro',
          component: () => import('./views/Ro.vue'),
          meta: {
						module: 'ro'
					}
        },
        {
          path: 'show-ro',
          name: 'show-ro',
          component: () => import('./views/showRo.vue'),
          meta: {
						module: 'showRo'
					}
        },
        {
          path: 'show-ro//:id',
          name: 'show-ro-id',
          component: () => import('./views/ShowRoDisabled.vue'),
          meta: {
						module: 'show-disabled'
					}
        },
        {
          path: 'update-ro//:id',
          name: 'update-ro',
          component: () => import('./views/UpdateRo.vue'),
          meta: {
						module: 'update-ro'
					}
        },
        {
          path: 'typing-template',
          name: 'typing-template',
          component: () => import('./views/TypingTemplate.vue'),
          meta: {
						module: 'typing-template'
					}
        },
        {
          path: 'create-template',
          name: 'create-template',
          component: () => import('./views/CreateTemplate.vue'),
          meta: {
						module: 'create-template'
					}
        },
        {
          path: 'update-template//:id',
          name: 'update-template',
          component: () => import('./views/UpdateTemplate.vue'),
          meta: {
						module: 'update-template'
					}
        },
        {
          path: 'create-group-email',
          name: 'create-group-email',
          component: () => import('./views/CreateGroupEmail.vue'),
          meta: {
						module: 'create-group-email'
					}
        },
        {
          path: 'store-group-email//:id',
          name: 'store-group-email',
          component: () => import('./views/StoreGroupEmail.vue'),
          meta: {
						module: 'store-group-email'
					}
        },
        {
          path: 'show-group-email//:id',
          name: 'show-group-email',
          component: () => import('./views/ShowGroupEmail.vue'),
          meta: {
						module: 'show-group-email'
					}
        },
        {
          path: 'deletes-ro',
          name: 'deletes-ro',
          component: () => import('./views/ShowRoDelete.vue'),
          meta: {
						module: 'deletes-ro'
					}
        },
        {
          path: 'resume-team',
          name: 'resume-team',
          component: () => import('./views/ResumeTeam.vue'),
          meta: {
						module: 'resume-team'
					}
        },
        {
          path: 'show-detail-operation',
          name: 'show-detail-operation',
          component: () => import('./views/ShowDeatilOperation.vue'),
          meta: {
						module: 'show-detail-operation'
					}
        },
        {
          path: 'charge',
          name: 'charge',
          component: () => import('./views/Charge.vue'),
          meta: {
						module: 'charge'
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
