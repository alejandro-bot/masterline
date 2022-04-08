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

    <vs-row class="mt-5" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h3 class="text-center mt-5 mb-5">Permisos De Este Perfil</h3>
          </div>
          <ul class="centerx mt-3 mb-3">
            <li :key="index" v-for="(item, index) in showPermissions">
              <vs-col
              style="width:33% !important;"
                class="mt-3 mb-3 "
                type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                <h3 class="mt-2">{{ index }}</h3>
                <vs-checkbox
                  :key="index2"
                  v-for="(item2, index2) in item"

                  class="mt-5 mb-2"
                  color="success"
                  :id="'check' + index2"
                  v-model="item.estado"
                  >{{ item2.name }}</vs-checkbox
                >
              </vs-col>
            </li>
          </ul>
          <vs-row class="mt-5 mb-5" vs-justify="center">
            <vs-button
              class="mt-5 mb-5 buttonColor"
              color="primary"
              type="relief"
              @click="assginPermissionsProfile()"
              >Asginar Permisos</vs-button
            >
          </vs-row>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import { dominio } from "../dominio.js";
export default {
  data() {
    return {
      showPermissions: [],
      checkBox1: true,
      id: this.$route.params && this.$route.params.id,
      form: {
        datos: [],
        rol: "",
        id: this.$route.params && this.$route.params.id,
      },
    };
  },
  created() {
    this.showRoles();
  },
  methods: {
     showRoles() {
      let url = dominio.url + "/api/mostrar-roles";
      axios.get(url).then((res) => {
        this.roles = res.data.roles;
        this.showPermissions = res.data.showPermissions;
        this.userPermissions = res.data.userPermissions;
      });
    },
    returnHome() {
      this.$router.push("/panel");
    },
    assginPermissionsProfile() {
      this.form.datos = [];
      for (let index = 0; index < this.showPermissions.length; index++) {
        if (this.showPermissions[index].estado == true) {
          this.form.datos.push(this.showPermissions[index].id);
        }
      }
      let url = dominio.url + "/api/asignar-roles-permisos/" + this.id;
      axios
        .post(url, this.form)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.$router.push("/panel/perfiles-usuarios");
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
  border: 1px solid #ff5000;
}
</style>
