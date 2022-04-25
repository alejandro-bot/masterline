<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
          <vs-button
            class="buttonColor"
            @click="createRol()"
            color="primary"
            type="relief"
            icon="person_add"
            v-if="showUserAuth[0].permissions[17].name == 'BOTON CREAR ROL'"
            >Crear Perfil</vs-button
          >
        </vs-col>
        <!-- <vs-col vs-type="flex" vs-justify="right" vs-align="right" vs-w="12">
          <vs-button
            class="buttonColor"
            @click="createPermission(openModalPermission())"
            color="primary"
            type="relief"
            icon="person_add"
            v-if="showUserAuth[0].permissions[49].name == 'BOTON CREAR PERMISO'"
            >Crear Permisos</vs-button
          >
        </vs-col> -->
      </vs-col>
    </vs-row>

    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
          </div>
          <div>
            <vs-table :data="data">
              <template slot="header"> </template>
              <template slot="thead">
                <vs-th> Perfil </vs-th>
                <vs-th :key="index" v-for="(item, index) in showPermissions" class="text-center"> {{ item.name }}</vs-th>
              </template>
              <template>
                <vs-tr :key="index" v-for="(item, index) in data">
                  <vs-td style="display: block; width: 340px">
                    {{ index }}
                  </vs-td>
                  <vs-td :key="index2" v-for="(item2, index2) in item" style="padding: 10px 70px;">
                    <vs-button
                      radius
                      :color="item2 == 'check' ? 'success' : 'danger'"
                      type="filled"
                      :icon="item2"
                      @click="assignPermissions(index,index2,item2)"
                    ></vs-button>
                  </vs-td>
                </vs-tr>
                <vs-tr>
                  <vs-th>  </vs-th>
                  <vs-th :key="index" v-for="(item, index) in showPermissions" class="text-center"> {{ item.name }}</vs-th>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-prompt
      :title="'Crear Permiso'"
      accept-text="Aceptar"
      cancel-text="Cancelar"
      @cancel="val = ''"
      @accept="acceptAlertPermission"
      @close="close"
      :active.sync="activePromptPermission"
    >
      <div class="con-exemple-prompt">
        <vs-row>
          <vs-col vs-type="flex" vs-justify="left" vs-align="center" vs-w="12">
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <vs-input
                    color="rgb(213, 14, 151)"
                    label-placeholder="Nombre"
                    v-model="formPermission.name"
                  />
                </vs-col>
              </vs-col>
            </vs-row>
          </vs-col>
        </vs-row>
      </div>
    </vs-prompt>
  </div>
</template>
<script>
import { dominio } from "../dominio.js";
export default {
  data() {
    return {
      activePromptPermission: false,
      activePrompt: false,
      roles: [],
      checkBox1: true,
      showPermissions: [],
      userPermissions: [],
      form: {
        datos: [],
        rol: "",
      },
      formPermission: {
        name: "",
      },
      showUserAuth: [],
      data: [],
    };
  },
  created() {
    this.showRoles();
    this.showUser();
  },
  methods: {
    createRol() {
      this.$router.push("/panel/create-rol");
    },
    showRoles() {
      let url = dominio.url + "/api/mostrar-roles-permisos";
      axios.get(url).then((res) => {
        this.data = res.data.data;
        this.showPermissions = res.data.showPermissions;
      });
    },
    openModal(id) {
      this.form.rol = id;
      this.activePrompt = true;
    },
    openModalPermission() {
      this.activePromptPermission = true;
    },
    acceptAlert(color) {
      this.form.datos = [];
      for (let index = 0; index < this.showPermissions.length; index++) {
        if (this.showPermissions[index].estado == true) {
          this.form.datos.push(this.showPermissions[index].id);
        }
      }
      let url = dominio.url + "/api/asignar-roles-permisos";
      axios
        .post(url, this.form)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.showDependency();
            this.showcharges();
            this.$vs.notify({
              color: "success",
              title: "Dialogo",
              text: "Cerrado",
            });
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    close() {
      this.$vs.notify({
        color: "danger",
        title: "Dialogo",
        text: "Cerrado",
      });
    },
    assignPermissions(rol,permiso,valor){
      let url = dominio.url + "/api/asignar-permisos-rol";
      axios
        .post(url, {rol:rol,permiso:permiso,valor:valor})
        .then((res) => {
          if (res.data.code == 200) {
            this.data[rol][permiso] = valor=='check' ? 'cancel' : 'check';
            toastr.success(res.data.message);
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    acceptAlertPermission() {
      let url = dominio.url + "/api/crear-permiso";
      axios
        .post(url, this.formPermission)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.showRoles();
            this.formPermission.name = "";
            this.$vs.notify({
              color: "success",
              title: "Dialogo",
              text: "Cerrado",
            });
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    showUser() {
      let url = dominio.url + "/api/mostar-usuario-autentificado";
      axios.get(url).then((res) => {
        this.showUserAuth = res.data.showUserAuth;
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

