<template>
  <div
    class="
      h-screen
      flex
      w-full
      bg-img
      vx-row
      no-gutter
      items-center
      justify-center
    "
    id="page-login"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color" style="background:black; border-radius:10px;">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col hidden lg:block lg:w-1/2">
              <img
                src="@/assets/images/pages/login.jpg"
                alt="login"
                class="mx-auto"
              />
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg" style="border-radius: 0px 10px 10px 0px; background: #0f0f0f;">
              <div class="p-8 login-tabs-container">
                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Iniciar Sesión</h4>
                  <p>Bienvenido de nuevo, inicie sesión en su cuenta.</p>
                </div>

                <div>
                  <vs-input
                    name="email"
                    icon-no-border
                    icon="icon icon-user"
                    icon-pack="feather"
                    label-placeholder=""
                    v-model="email"
                    class="w-full mb-3 mt-5"
                  />

                  <vs-input
                    type="password"
                    name="password"
                    icon-no-border
                    icon="icon icon-lock"
                    icon-pack="feather"
                    label-placeholder=""
                    v-model="password"
                    class="w-full mb-3 mt-5"
                  />
                  <vs-button class="text-center buttonColor" @click="login()">Ingresar</vs-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    axios.defaults.headers.common["Authorization"] = null;
    localStorage.clear();
  },
  data() {
    return {
      email: "",
      password: "",
      checkbox_remember_me: true,
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("retrieveToken", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          if (response.data.ok) {
           window.location.href = "/panel/"
          } else {
            var errors = response.data.data;
            $.each(errors, function (i) {
              toastr.error(errors[i]);
            });
          }
        });
    },
  },
};
</script>

<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook {
      background-color: #1551b1;
    }
    .bg-twitter {
      background-color: #00aaff;
    }
    .bg-google {
      background-color: #4285f4;
    }
    .bg-github {
      background-color: #333;
    }
  }
}
.buttonColor
{
  background: #ff6600 !important;
}
</style>
