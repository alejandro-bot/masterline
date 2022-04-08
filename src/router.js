import Vue from 'vue'
import Router from 'vue-router'
// Vuex Store
import store from './store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  scrol_idBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [{
      // =============================================================================
      // Panel Modular
      // =============================================================================
      path: '/panel/',
      component: () => import('./layouts/main/Main.vue'),
      children: [{
          path: '',
          name: 'home',
          component: () => import('./views/Home.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'perfiles-usuarios',
          name: 'perfiles-usuarios',
          component: () => import('./views/PerfilesUsuarios.vue'),
          meta: {
            rol_id: 1
          }
        },
        {
          path: 'create-rol',
          name: 'create-rol',
          component: () => import('./views/Rol.vue'),
          meta: {
            rol_id: 'create-rol'
          }
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('./views/Users.vue'),
          meta: {
            rol_id: 'users'
          }
        },
        {
          path: 'create-user',
          name: 'create-user',
          component: () => import('./views/CreateUser.vue'),
          meta: {
            rol_id: 'create-user'
          }
        },
        {
          path: 'edit-user//:id',
          name: 'edit-user',
          component: () => import('./views/EditUser.vue'),
          meta: {
            rol_id: 'edit-user'
          }
        },
        {
          path: 'active-user',
          name: 'active-user',
          component: () => import('./views/ActiveUser.vue'),
          meta: {
            rol_id: 'active-user'
          }
        },
        {
          path: 'create-ro',
          name: 'create-ro',
          component: () => import('./views/Ro.vue'),
          meta: {
            home: true,
            rol_id: 'ro'
          }
        },
        {
          path: 'permissions-user//:id',
          name: 'permissions-user',
          component: () => import('./views/PermissionsProfile.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'show-ro',
          name: 'show-ro',
          component: () => import('./views/showRo.vue'),
          meta: {
            home: true,
            rol_id: 'showRo'
          }
        },
        {
          path: 'show-ro//:id',
          name: 'show-ro-id',
          component: () => import('./views/ShowRoDisabled.vue'),
          meta: {
            home: true,
            rol_id: 'show-disabled'
          }
        },
        {
          path: 'update-ro//:id',
          name: 'update-ro',
          component: () => import('./views/UpdateRo.vue'),
          meta: {
            home: true,
            rol_id: 'update-ro'
          }
        },
        {
          path: 'assign-ro//:id',
          name: 'assign-ro',
          component: () => import('./views/AssignRo.vue'),
          meta: {
            rol_id: 'assign-ro'
          }
        },
        {
          path: 'typing-template',
          name: 'typing-template',
          component: () => import('./views/TypingTemplate.vue'),
          meta: {
            rol_id: 9
          }
        },
        {
          path: 'create-template',
          name: 'create-template',
          component: () => import('./views/CreateTemplate.vue'),
          meta: {
            rol_id: 9
          }
        },
        {
          path: 'update-template//:id',
          name: 'update-template',
          component: () => import('./views/UpdateTemplate.vue'),
          meta: {
            rol_id: 9
          }
        },
        {
          path: 'create-group-email',
          name: 'create-group-email',
          component: () => import('./views/CreateGroupEmail.vue'),
          meta: {
            home: true,
            rol_id: 'create-group-email'
          }
        },
        {
          path: 'store-group-email//:id',
          name: 'store-group-email',
          component: () => import('./views/StoreGroupEmail.vue'),
          meta: {
            rol_id: 'store-group-email'
          }
        },
        {
          path: 'show-group-email//:id',
          name: 'show-group-email',
          component: () => import('./views/ShowGroupEmail.vue'),
          meta: {
            rol_id: 'show-group-email'
          }
        },
        {
          path: 'deletes-ro',
          name: 'deletes-ro',
          component: () => import('./views/ShowRoDelete.vue'),
          meta: {
            rol_id: 'deletes-ro'
          }
        },
        {
          path: 'resume-team',
          name: 'resume-team',
          component: () => import('./views/ResumeTeam.vue'),
          meta: {
            rol_id: 9,
            rol_id2: 2,
            rol_id3: 3,
          }
        },
        {
          path: 'show-detail-operation',
          name: 'show-detail-operation',
          component: () => import('./views/ShowDeatilOperation.vue'),
          meta: {
            rol_id: 'show-detail-operation'
          }
        },
        {
          path: 'charge',
          name: 'charge',
          component: () => import('./views/Charge.vue'),
          meta: {
            rol_id: 'charge'
          }
        },
        {
          path: 'update-charge//:id',
          name: 'update-charge',
          component: () => import('./views/UpdateCharge.vue'),
          meta: {
            rol_id: 'update-charge'
          }
        },
        {
          path: 'division',
          name: 'division',
          component: () => import('./views/Division.vue'),
          meta: {
            rol_id: 'division'
          }
        },
        {
          path: 'reports',
          name: 'reports',
          component: () => import('./views/Reports.vue'),
          meta: {
            rol_id: 9,
          }
        },
        {
          path: 'update-division//:id',
          name: 'update-division',
          component: () => import('./views/UpdateDivision.vue'),
          meta: {
            rol_id: 'update-division'
          }
        },
        {
          path: 'job-dependencies',
          name: 'job-dependencies',
          component: () => import('./views/JobDependencies.vue'),
          meta: {
            rol_id: 'job-dependencies'
          }
        },
        {
          path: 'update-dependency//:id',
          name: 'update-dependency',
          component: () => import('./views/UpdateDependency.vue'),
          meta: {
            rol_id: 'update-dependency'
          }
        },
        {
          path: 'edit-permissions-rol//:id',
          name: 'edit-permissions-rol',
          component: () => import('./views/EditPermissionsRol.vue'),
          meta: {
            rol_id: 'update-dependency'
          }
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('./views/Profile.vue'),
          meta: {
            rol_id: 'profile',
            home: true,
          }
        },
        {
          path: 'resume-area',
          name: 'resume-area',
          component: () => import('./views/ResumeArea.vue'),
          meta: {
            rol_id: 9,
            rol_id2: 2,
            rol_id3: 3
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
  $("#loading-bg").fadeOut("slow");
})

// ADMINISTRATOR == 1
router.beforeEach((to, from, next) => {
  $("#loading-bg").css("display", 'block');

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'page-login'
      })
      // next()
    } else {
      if ((store.state.user.permissions == to.meta.rol_id) || (to.meta.home) || (store.state.user.rol_id == 1)) {
        next()
      } else if (store.state.user.rol_id == to.meta.rol_id2) {
        next()
      } else if (store.state.user.rol_id == to.meta.rol_id3) {
        next()
      } else {
        // next()
        next({
          name: 'page-error-404'
        })
      }
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
