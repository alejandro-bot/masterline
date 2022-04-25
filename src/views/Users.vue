<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
          <vs-button
            class="buttonColor"
            @click="createUser()"
            color="primary"
            type="relief"
            icon="person_add"
            v-if="showUserAuth[0].permissions[19].name == 'BOTON CREAR USUARIO'"
            >Crear Usuario</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="right" vs-align="right" vs-w="12">
          <vs-button
            class="buttonColor"
            @click="userActive()"
            color="primary"
            type="relief"
            icon="person_add"
            v-if="
              showUserAuth[0].permissions[20].name == 'BOTON USUARIOS ACTIVOS'
            "
            >Usuarios Activos</vs-button
          >
        </vs-col>
      </vs-col>
    </vs-row>

    <vs-row vs-justify="center">
      <vs-col
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="12"
        class="mt-5"
      >
        <vs-card class="con-vs-cards">
          <div slot="header" class=""></div>
          <vs-table search pagination :data="users" :max-items="tantos">
            <template slot="header">
              <h3>Usuarios</h3>
              <select v-model="tantos" class="seleccionable">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </template>
            <template slot="thead">
              <vs-th sort-key="identification"> Cedula </vs-th>
              <vs-th sort-key="last_name"> Nombre Completo </vs-th>
              <vs-th sort-key="chargeName"> Cargo </vs-th>
              <vs-th sort-key="operationName"> Area </vs-th>
              <vs-th> Acciones </vs-th>
            </template>

            <template slot-scope="{ data }">
              <vs-tr v-for="(item, index) in data" :key="index">
                <vs-td :data="item.identification">
                  {{ item.identification }}
                </vs-td>
                <vs-td :data="item.last_name">
                  {{ item.first_name }} {{ item.last_name }}
                </vs-td>
                <vs-td :data="item.id">
                  {{ item.chargeName }}
                </vs-td>
                <vs-td :data="item.id">
                  {{ item.operationName }}
                </vs-td>

                <vs-td :data="item.id">
                  <vs-row>
                    <vs-col
                      vs-type="flex"
                      vs-justify="center"
                      vs-align="center"
                      vs-w="12"
                    >
                      <vs-button
                        class="mr-1 ml-1"
                        radius
                        color="warning"
                        type="border"
                        icon="lock_open"
                        v-if="
                          item.status_id == 1 &&
                          showUserAuth[0].permissions[21].name ==
                            'BOTON INACTIVAR USUARIO'
                        "
                        @click="inactiveUser(item.id)"
                      ></vs-button>
                      <vs-button
                        class="mr-1 ml-1"
                        radius
                        color="danger"
                        type="gradient"
                        icon="lock"
                        v-if="
                          item.status_id == 2 &&
                          showUserAuth[0].permissions[21].name ==
                            'BOTON INACTIVAR USUARIO'
                        "
                        @click="activeUser(item.id)"
                      ></vs-button>
                      <router-link
                        :to="'/panel/edit-user/' + item.id"
                        v-if="
                          showUserAuth[0].permissions[22].name ==
                          'BOTON EDITAR USUARIO'
                        "
                      >
                        <vs-button
                          class="mr-1 ml-1"
                          radius
                          color="success"
                          type="border"
                          icon="edit"
                        ></vs-button>
                      </router-link>
                      <vs-button
                        v-if="
                          showUserAuth[0].permissions[23].name ==
                          'BOTON VER USUARIO'
                        "
                        class="mr-1 ml-1"
                        @click="openModal(item)"
                        radius
                        color="primary"
                        type="border"
                        icon="visibility"
                      ></vs-button>
                    </vs-col>
                  </vs-row>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </vs-card>
      </vs-col>
    </vs-row>
    <!-- campos del modal ver usuarios -->
    <vs-prompt
      :title="
        'Nombre de usuario' + ' ' + data.first_name + ' ' + data.last_name
      "
      accept-text="Aceptar"
      cancel-text="Cancelar"
      @cancel="val = ''"
      @accept="acceptAlert"
      @close="close"
      :active.sync="activePrompt"
    >
      <div class="con-exemple-prompt mt-5">
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="12"
          >
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Nombres"
              :value="data.first_name"
              disabled
            />
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Apellidos"
              v-model="data.last_name"
              disabled
            />
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="12"
          >
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Cedula"
              v-model="data.identification"
              disabled
            />
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Cargo"
              v-model="data.chargeName"
              disabled
            />
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Correo Electronico"
              v-model="data.email"
              disabled
            />
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="12"
          >
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Genero"
              v-model="data.genderName"
              disabled
            />
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Fecha De Nacimiento"
              v-model="data.date_of_birth"
              disabled
            />
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Celular De Contacto"
              v-model="data.contact_cell_phone"
              disabled
            />
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="12"
          >
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Contraseña Usuario"
              v-model="data.password"
              disabled
            />
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Contraseña Email"
              v-model="data.email_password"
              disabled
            />
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Url Vcard"
              v-model="data.url_vcard"
              disabled
            />
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="12"
          >
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Estado"
              v-model="data.statusName"
              disabled
            />
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Nombre Jefe"
              v-model="data.supervisor_id"
              disabled
            />
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Operación"
              v-model="data.operationName"
              disabled
            />
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="12"
          >
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Sucursal"
              v-model="data.branchOfficeName"
              disabled
            />
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Perfil"
              v-model="data.rolName"
              disabled
            />
            <vs-input
              class="ml-2 mr-2 mb-5 mt-5"
              color="rgb(213, 14, 151)"
              label-placeholder="Division"
              v-model="data.branchDivisionName"
              disabled
            />
          </vs-col>
        </vs-row>
      </div>
    </vs-prompt>
    <!-- campos del modal ver usuarios -->
  </div>
</template>
<script>
import { dominio } from "../dominio.js";
export default {
  data() {
    return {
      descriptionItems: [3, 5, 15],
      users: {},
      tantos: 5,
      data: {},
      formInactive: {
        status_id: 2,
      },
      activePrompt: false,
      showUserAuth: [],
    };
  },
  created() {
    this.showUser();
    this.showUserAuthentificated();
  },
  methods: {
    openModal(objeto) {
      this.activePrompt = true;
      this.data = objeto;
    },
    createUser() {
      this.$router.push("/panel/create-user");
    },
    showUser() {
      let url = dominio.url + "/api/mostrar-usuarios";
      axios.get(url).then((res) => {
        this.users = res.data.users;
        console.log("ssdsd", this.data);
      });
    },
    activeUser(id) {
      let url = dominio.url + "/api/activar-usuario/" + id;
      axios.post(url, this.formActive).then((res) => {
        if (res.data.code == 200) {
          toastr.success(res.data.message);
          this.showUser();
        }
        if (res.data.code == 500) {
          toastr.error(res.data.message);
        }
      });
    },
    inactiveUser(id) {
      let url = dominio.url + "/api/inactivar-usuario/" + id;
      axios.post(url, this.formInactive).then((res) => {
        if (res.data.code == 200) {
          toastr.success(res.data.message);
          this.showUser();
        }
        if (res.data.code == 500) {
          toastr.error(res.data.message);
        }
      });
    },
    userActive() {
      this.$router.push("/panel/active-user");
    },
    acceptAlert(color) {
      this.$vs.notify({
        color: "success",
        title: "Dialogo",
        text: "Cerrado",
      });
    },
    close() {
      this.$vs.notify({
        color: "danger",
        title: "Dialogo",
        text: "Cerrado",
      });
    },
    showUserAuthentificated() {
      let url = dominio.url + "/api/mostar-usuario-autentificado";
      axios.get(url).then((res) => {
        this.showUserAuth = res.data.showUserAuth;
      });
    },
  },
};
</script>
<style>
.vs-dialog {
  max-width: 850px !important;
}
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
.seleccionable {
  background: #10163a;
  color: white;
  width: 70px;
  height: 35px;
  border-radius: 5px;
  padding: 0.3rem !important;
  padding-left: 6px !important;
  font-size: 17px;
  border: 1px solid transparent;
  margin-left: 10px;
}
</style>
