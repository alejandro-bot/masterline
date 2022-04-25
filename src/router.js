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
            home: true,
          }
        },
        {
          path: 'create-rol',
          name: 'create-rol',
          component: () => import('./views/Rol.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('./views/Users.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'create-user',
          name: 'create-user',
          component: () => import('./views/CreateUser.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'edit-user//:id',
          name: 'edit-user',
          component: () => import('./views/EditUser.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'active-user',
          name: 'active-user',
          component: () => import('./views/ActiveUser.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'create-ro',
          name: 'create-ro',
          component: () => import('./views/Ro.vue'),
          meta: {
            home: true,
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
          }
        },
        {
          path: 'show-ro//:id',
          name: 'show-ro-id',
          component: () => import('./views/ShowRoDisabled.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'update-ro//:id',
          name: 'update-ro',
          component: () => import('./views/UpdateRo.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'assign-ro//:id',
          name: 'assign-ro',
          component: () => import('./views/AssignRo.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'assign-ro-sun//:id',
          name: 'assign-ro-sun',
          component: () => import('./views/AssignRoSun.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'typing-template',
          name: 'typing-template',
          component: () => import('./views/TypingTemplate.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'create-template',
          name: 'create-template',
          component: () => import('./views/CreateTemplate.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'update-template//:id',
          name: 'update-template',
          component: () => import('./views/UpdateTemplate.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'create-group-email',
          name: 'create-group-email',
          component: () => import('./views/CreateGroupEmail.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'store-group-email//:id',
          name: 'store-group-email',
          component: () => import('./views/StoreGroupEmail.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'show-group-email//:id',
          name: 'show-group-email',
          component: () => import('./views/ShowGroupEmail.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'list-ro-sun//:id',
          name: 'list-ro-sun',
          component: () => import('./views/ListRoSun.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'show-ro-sun//:id',
          name: 'show-ro-sun',
          component: () => import('./views/ShowRoSun.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'deletes-ro',
          name: 'deletes-ro',
          component: () => import('./views/ShowRoDelete.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'resume-team',
          name: 'resume-team',
          component: () => import('./views/ResumeTeam.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'show-detail-operation',
          name: 'show-detail-operation',
          component: () => import('./views/ShowDeatilOperation.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'charge',
          name: 'charge',
          component: () => import('./views/Charge.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'update-charge//:id',
          name: 'update-charge',
          component: () => import('./views/UpdateCharge.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'division',
          name: 'division',
          component: () => import('./views/Division.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'reports',
          name: 'reports',
          component: () => import('./views/Reports.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'update-division//:id',
          name: 'update-division',
          component: () => import('./views/UpdateDivision.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'job-dependencies',
          name: 'job-dependencies',
          component: () => import('./views/JobDependencies.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'update-dependency//:id',
          name: 'update-dependency',
          component: () => import('./views/UpdateDependency.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'update-ro-sun//:id',
          name: 'update-ro-sun',
          component: () => import('./views/UpdateRoSun.vue'),
          meta: {
            home: true,
          }
        },
        {
          path: 'edit-permissions-rol//:id',
          name: 'edit-permissions-rol',
          component: () => import('./views/EditPermissionsRol.vue'),
          meta: {
            home: true,
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
            home: true,
          }
        },
        {
          path: 'changeEmailAndPassword',
          name: 'changeEmailAndPassword',
          component: () => import('./views/changeEmailAndPassword.vue'),
          meta: {
            home: true,
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
  $("#loading-bg").fadeIn( 300 ).delay( 300 ).fadeOut();
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
