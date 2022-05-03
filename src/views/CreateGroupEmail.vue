<template>
  <div>
    <vs-button
      class="buttonColor"
      color="primary"
      type="relief"
      icon="email"
      @click="openModal()"
      v-if="
        showUserAuth[0].permissions[9].name == 'CREAR GRUPO DE CORREOS' ||
        showUserAuth[0].permissions[12].name == 'CREAR GRUPO DE CORREOS'
      "
      >Crear Grupo De Correos</vs-button
    >
    <vs-row class="mt-5" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Grupos De Correos</h6>
          </div>

          <vs-table
            search
            pagination
            :data="listNameGroups"
            :max-items="tantos"
          >
            <template slot="header">
              <select v-model="tantos" class="seleccionableasas">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </template>
            <template slot="thead">
              <vs-th sort-key="name"> Nombre </vs-th>
              <vs-th> Acciones </vs-th>
            </template>

            <template slot-scope="{ data }">
              <vs-tr v-for="(item, index) in data" :key="index">
                <vs-td :data="item.name">
                  {{ item.name }}
                </vs-td>
                <vs-td class="text-center">
                  <vs-row vs-w="12">
                    <vs-col
                      vs-type="flex"
                      vs-justify="center"
                      vs-align="center"
                      vs-lg="12"
                      vs-sm="12"
                      vs-xs="12"
                    >
                      <router-link
                        :to="'/panel/store-group-email/' + item.id"
                        v-if="
                          showUserAuth[0].permissions[10].name ==
                            'BOTON AGREGAR CORREOS' ||
                          showUserAuth[0].permissions[13].name ==
                            'BOTON AGREGAR CORREOS'
                        "
                      >
                        <vs-button
                          radius
                          color="success"
                          type="border"
                          icon="add"
                        ></vs-button>
                      </router-link>
                      <router-link
                        :to="'/panel/show-group-email/' + item.id"
                        v-if="
                          showUserAuth[0].permissions[11].name ==
                            'BOTON VER CORREOS' ||
                          showUserAuth[0].permissions[14].name ==
                            'BOTON VER CORREOS'
                        "
                      >
                        <vs-button
                          radius
                          color="primary"
                          type="border"
                          icon="visibility"
                        ></vs-button>
                      </router-link>
                      <vs-button
                        radius
                        color="danger"
                        type="border"
                        icon="delete_outline"
                        v-if="
                          showUserAuth[0].permissions[12].name ==
                            'BOTON ELIMINAR CORREOS' ||
                          showUserAuth[0].permissions[15].name ==
                            'BOTON ELIMINAR CORREOS'
                        "
                        @click="deleteGroupEmail(item.id)"
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
    <vs-prompt
      :title="'Nombre De Grupo De Correo'"
      accept-text="Guardar"
      cancel-text="Cancelar"
      @cancel="val = ''"
      @accept="acceptAlert"
      @close="close"
      :active.sync="activePrompt"
      color="#ff5000"
    >
      <div class="con-exemple-prompt">
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
              label-placeholder="Nombre Del Grupo"
              v-model="formCreateGroupEmail.name"
            />
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
      activePrompt: false,
      formCreateGroupEmail: {
        name: "",
      },
      listNameGroups: {},
      showUserAuth: [],
      tantos: 5,
    };
  },
  created() {
    this.showMails();
    this.showUser();
  },
  methods: {
    openModal(objeto) {
      this.activePrompt = true;
      this.data = objeto;
    },
    acceptAlert(color) {
      let url = dominio.url + "/api/crear-grupo-correo";
      axios.post(url, this.formCreateGroupEmail).then((res) => {
        if (res.data.code == 200) {
          toastr.success(res.data.message);
          this.formCreateGroupEmail.name = "";
          this.close();
          this.showMails();
        }
        if (res.data.code == 500) {
          toastr.error(res.data.message);
        }
      });
    },
    close() {
      this.$vs.notify({
        color: "danger",
        title: "Dialogo",
        text: "Cerrado",
      });
    },
    showMails() {
      let url = dominio.url + "/api/listar-grupo-correos";
      axios.get(url).then((res) => {
        this.listNameGroups = res.data.listNameGroups;
      });
    },
    deleteGroupEmail(id) {
      let url = dominio.url + "/api/eliminar-nombre-grupo-correo/" + id;
      axios.post(url, this.formCreateGroupEmail).then((res) => {
        if (res.data.code == 200) {
          toastr.success(res.data.message);
          this.close();
          this.showMails();
        }
        if (res.data.code == 500) {
          toastr.error(res.data.message);
        }
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
.seleccionableasas {
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
  margin-top: 0px;
  border-radius: 20px;
}
</style>
