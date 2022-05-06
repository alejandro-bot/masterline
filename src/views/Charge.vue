<template>
  <div>
    <vs-button
      class="buttonColor mb-5"
      color="primary"
      type="relief"
      icon="badge"
      @click="openModal()"
      v-if="showUserAuth[0].permissions[30].name == 'BOTON CREAR CARGOS'"
      >Crear Cargo</vs-button
    >
    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Cargos</h6>
          </div>
          <div>
            <vs-table search pagination :data="charges" :max-items="tantos">
              <template slot="header">
                <select v-model="tantos" class="seleccionableBuscador">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
              </template>
              <template slot="thead">
                <vs-th sort-key="name"> Nombre </vs-th>
                <vs-th sort-key="nameDivision"> Division </vs-th>
                <vs-th> Acción </vs-th>
              </template>

              <template slot-scope="{ data }">
                <vs-tr v-for="(item, index) in data" :key="index">
                  <vs-td :data="item.name"> {{ item.name }} </vs-td>
                  <vs-td :data="item.nameDivision">
                    {{ item.nameDivision }}
                  </vs-td>
                  <vs-td>
                    <vs-row>
                      <vs-col
                        vs-type="flex"
                        vs-justify="left"
                        vs-align="left"
                        vs-w="12"
                      >
                        <router-link
                          :to="'/panel/update-charge/' + item.id"
                          v-if="
                            showUserAuth[0].permissions[31].name ==
                            'BOTON EDITAR CARGOS'
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
                          class="mr-1 ml-1"
                          radius
                          color="danger"
                          type="border"
                          icon="delete_outline"
                          v-if="
                            showUserAuth[0].permissions[32].name ==
                            'BOTON ELIMINAR CARGOS'
                          "
                          @click="deleteCharge(item.id)"
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
      :title="'Nombre Del Cargo'"
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
                v-model="formCharge.name"
              />
            </div>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="12"
          >
            <div class="centerx colors-example">
              <h6
                style="
                  margin-bottom: -10px;
                  margin-top: 10px;
                  margin-left: 20px;
                "
              >
                División
              </h6>
              <select
                class="ml-5 mr-5 mt-5 mb-3 seleccionable"
                v-model="formCharge.division_id"
              >
                <option value="">Seleccione</option>
                <option
                  :key="index"
                  :value="item.id"
                  v-for="(item, index) in branchDivisions"
                >
                  {{ item.name }}
                </option>
              </select>
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
      branchDivisions: {},
      formCharge: {
        name: "",
        division_id: "",
      },
      charges: {},
      showUserAuth: [],
      tantos: 5,
    };
  },
  created() {
    this.showDivision();
    this.showcharges();
    this.showUserAuthentificated();
  },
  methods: {
    openModal() {
      this.activePrompt = true;
    },
    acceptAlert(color) {
      let url = dominio.url + "/api/crear-cargo";
      axios
        .post(url, this.formCharge)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.formCharge.name = "";
            this.formCharge.division_id = "";
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
    showDivision() {
      let url = dominio.url + "/api/mostrar-divisiones";
      axios.get(url).then((res) => {
        this.branchDivisions = res.data.branchDivisions;
      });
    },
    showcharges() {
      let url = dominio.url + "/api/mostrar-cargos";
      axios.get(url).then((res) => {
        this.charges = res.data.charges;
      });
    },
    deleteCharge(id) {
      let url = dominio.url + "/api/eliminar-cargo/" + id;
      axios
        .post(url)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.showcharges();
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
  background: #ff6600 !important;
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
.vs-button-primary.vs-button-filled {
  background: #ff6600 !important;
}
.seleccionable {
  background: #10163a;
  color: white;
  width: 200px;
  height: 35px;
  border-radius: 5px;
  padding: 0.3rem !important;
  padding-left: 6px !important;
  font-size: 17px;
  border: 1px solid transparent;
}
.seleccionableBuscador {
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
