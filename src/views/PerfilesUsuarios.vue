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
            >Crear Rol</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="right" vs-align="right" vs-w="12">
          <vs-button
            class="buttonColor"
            @click="createPermission(openModalPermission())"
            color="primary"
            type="relief"
            icon="person_add"
            v-if="showUserAuth[0].permissions[49].name == 'BOTON CREAR PERMISO'"
            >Crear Permisos</vs-button
          >
        </vs-col>
      </vs-col>
    </vs-row>

    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h3>Roles</h3>
          </div>
          <div>
            <vs-table>
              <template slot="header"> </template>
              <template slot="thead">
                <vs-th> Nombre Rol</vs-th>
                <vs-th> Acciones</vs-th>
              </template>

              <template>
                <vs-tr :key="index" v-for="(item, index) in roles">
                  <vs-td :data="item.name">
                    {{ item.name }}
                  </vs-td>
                  <vs-td>
                    <vs-col
                      vs-type="flex"
                      vs-justify="left"
                      vs-align="center"
                      vs-w="12"
                    >
                      <router-link :to="'/panel/edit-permissions-rol/' + item.id" v-if="showUserAuth[0].permissions[50].name == 'BOTON VER PERMISOS'">
                        <vs-button
                          class="mr-3"
                          radius
                          color="success"
                          type="border"
                          icon="visibility"
                        ></vs-button>
                      </router-link>
                      <router-link :to="'/panel/permissions-user/' + item.id" v-if="showUserAuth[0].permissions[51].name == 'BOTON ASGINAR PERMISOS'">
                        <vs-button
                          class="ml-1"
                          radius
                          color="primary"
                          type="border"
                          icon="add"
                        ></vs-button>
                      </router-link>
                    </vs-col>
                  </vs-td>
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
      roles: {},
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
      let url = dominio.url + "/api/mostrar-roles";
      axios.get(url).then((res) => {
        this.roles = res.data.roles;
        this.showPermissions = res.data.showPermissions;
        this.userPermissions = res.data.userPermissions;
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
}

</style>

