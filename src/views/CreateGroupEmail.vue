<template>
  <div>
    <vs-button
      class="buttonColor"
      color="primary"
      type="relief"
      icon="email"
      @click="openModal()"
      >Crear Grupo De Correos</vs-button
    >
    <vs-row class="mt-5" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Grupos De Correos</h6>
          </div>
          <vs-table>
            <template slot="header"> </template>
            <template slot="thead">
              <vs-th> Nombre </vs-th>
              <vs-th> Acciones </vs-th>
            </template>
            <template>
              <vs-tr :key="index" v-for="(item, index) in listNameGroups">
                <vs-td :data="item.id">
                  {{ item.name }}
                </vs-td>
                <vs-td :data="item.id" class="text-center">
                  <vs-row>
                    <vs-col
                      vs-type="flex"
                      vs-justify="right"
                      vs-align="right"
                      vs-w="12"
                    >
                    </vs-col>
                    <router-link :to="'/panel/store-group-email/' + item.id">
                      <vs-button
                        class="mr-1 ml-1"
                        radius
                        color="success"
                        type="border"
                        icon="add"
                      ></vs-button>
                    </router-link>
                    <router-link :to="'/panel/show-group-email/' + item.id">
                      <vs-button
                        class="mr-1 ml-1"
                        radius
                        color="primary"
                        type="border"
                        icon="visibility"
                      ></vs-button>
                    </router-link>
                    <vs-button
                      class="mr-1 ml-1"
                      radius
                      color="danger"
                      type="border"
                      icon="delete_outline"
                      @click="deleteGroupEmail(item.id)"
                    ></vs-button>
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
    };
  },
  created() {
    this.showMails();
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
          this.formCreateGroupEmail.name = '';
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
