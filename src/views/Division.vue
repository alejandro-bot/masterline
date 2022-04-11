<template>
  <div>
    <vs-button
      class="buttonColor mb-5"
      color="primary"
      type="relief"
      icon="group_add"
      @click="openModal()"
      v-if="showUserAuth[0].permissions[26].name == 'BOTON CREAR DIVISION'"
      >Crear División</vs-button
    >
    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Cargos</h6>
          </div>
          <div>
            <vs-table>
              <template slot="header"> </template>
              <template slot="thead">
                <vs-th> Nombre </vs-th>
                <vs-th> Acción </vs-th>
              </template>

              <template>
                <vs-tr :key="index" v-for="(item, index) in branchDivisions">
                  <vs-td> {{ item.name }} </vs-td>
                  <vs-td>
                    <vs-row>
                      <vs-col
                        vs-type="flex"
                        vs-justify="left"
                        vs-align="left"
                        vs-w="12"
                      >
                        <router-link :to="'/panel/update-division/' + item.id" v-if="showUserAuth[0].permissions[27].name == 'BOTON EDITAR DIVISION'">
                          <vs-button
                            class="mr-1 ml-1"
                            radius
                            color="success"
                            type="border"
                            icon="edit"
                          ></vs-button>
                        </router-link>
                        <vs-button
                          class="mr-1 ml-1"
                          radius
                          color="danger"
                          type="border"
                          icon="delete_outline"
                          v-if="showUserAuth[0].permissions[28].name == 'BOTON ELIMINAR DIVISION'"
                          @click="deleteDivision(item.id)"
                        ></vs-button>
                      </vs-col>
                    </vs-row>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-prompt
      :title="'Nombre De La División'"
      accept-text="Aceptar"
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
            <div class="centerx colors-example">
              <vs-input
                class="ml-1 mr-1"
                color="rgb(213, 14, 151)"
                label-placeholder="Nombre"
                v-model="formDivision.name"
              />
            </div>
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
      formDivision: {
        name: "",
      },
      branchDivisions: {},
      showUserAuth: [],
    };
  },
  created() {
    this.showDivision();
    this.showUserAuthentificated();
  },
  methods: {
    openModal() {
      this.activePrompt = true;
    },
    acceptAlert(color) {
      let url = dominio.url + "/api/crear-division";
      axios
        .post(url, this.formDivision)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.formDivision.name = "";
            this.showDivision();
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
    showDivision() {
      let url = dominio.url + "/api/mostrar-divisiones";
      axios.get(url).then((res) => {
        this.branchDivisions = res.data.branchDivisions;
      });
    },
    deleteDivision(id) {
      let url = dominio.url + "/api/eliminar-division/" + id;
      axios
        .post(url)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.showDivision();
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
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
.vs-dialog {
  max-width: 450px !important;
}
</style>
