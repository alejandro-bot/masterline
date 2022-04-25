<template>
  <div>
    <vs-button
      class="buttonColor"
      color="primary"
      type="relief"
      icon="home"
      @click="returnHome()"
      >Volver a Inicio</vs-button
    >
    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h3 class="text-center card-title">
              Cambio de Correo y Contraseña
            </h3>
          </div>
          <div>
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <vs-col
                  vs-type="flex"
                  vs-justify="right"
                  vs-align="center"
                  vs-w="4"
                >
                  <vs-input
                    class="mt-2 mr-3"
                    label="Correo Electronico"
                    icon="email"
                    v-model="formUser.email"
                    style="width: 80% !important"
                  />
                </vs-col>
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="4"
                >
                  <vs-input
                    class="mt-2 ml-3"
                    label="Contraseña Sistema"
                    icon="settings"
                    v-model="formUser.passwordSystem"
                    style="width: 80% !important"
                    type="password"
                  />
                </vs-col>
                <vs-col
                  vs-type="flex"
                  vs-justify="left"
                  vs-align="center"
                  vs-w="4"
                >
                  <input type="hidden" v-model="formUser.id">
                  <vs-input
                    class="mt-2 ml-3"
                    label="Contraseña Correo Electronico"
                    icon="settings"
                    v-model="formUser.passwordEmail"
                    style="width: 80% !important"
                    type="password"
                  />
                </vs-col>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col
                class="mt-5 mb-5"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <vs-button
                  class="buttonColor mt-5"
                  color="primary"
                  type="relief"
                  icon="check"
                  @click="updateEmailUser()"
                  >Actualizar</vs-button
                >
              </vs-col>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import { dominio } from "/src/dominio.js";
export default {
  data() {
    return {
      showUserAuth: {},
      formUser: {
        email: "",
        id: "",
        passwordSystem: "",
        passwordEmail: "",
      },
    };
  },
  created() {
    this.showUser();
  },
  methods: {
    returnHome() {
      this.$router.push("/panel");
    },
    showUser() {
      let url = dominio.url + "/api/mostar-usuario-autentificado";
      axios.get(url).then((res) => {
        this.showUserAuth = res.data.showUserAuth;
        this.formUser.email = res.data.showUserAuth[0].email;
        this.formUser.id = res.data.showUserAuth[0].id;
        this.formUser.passwordSystem = res.data.showUserAuth[0].password;
        this.formUser.passwordEmail = res.data.showUserAuth[0].email_password;
      });
    },
    updateEmailUser() {
      let url = dominio.url + "/api/cambiar-correo-contraseñas-usuario";
      axios
        .post(url, this.formUser)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.$router.push('/panel');
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
<style>
.buttonColor {
  background: #ff5000 !important;
}
.con-vs-cards {
  width: 100%;
  height: auto;
  background: transparent !important;
  border-radius: 8px;
  margin-bottom: 20px;
  display: block;
  -webkit-box-shadow: 0 4px 25px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 4px 25px 0 rgb(0 0 0) !important;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  border: 1px solid #ff6600;
}
.card-title {
  margin-bottom: 15px;
  margin-top: 15px;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: left;
  font-size: 17px;
  font-weight: 700;
}
</style>
