<template>
  <div>
    <vs-button
      class="buttonColor mb-5"
      color="primary"
      type="relief"
      icon="people"
      @click="openModal()"
      v-if="showUserAuth[0].permissions[34].name == 'BOTON CREAR DEPENDENCIA'"
      >Crear Dependencia</vs-button
    >
    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Dependencia</h6>
          </div>
          <div>
            <vs-table
              search
              pagination
              :data="showDependencies"
              :max-items="tantos"
            >
              <template slot="header">
                <select v-model="tantos" class="seleccionableBuscador">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
              </template>
              <template slot="thead">
                <vs-th sort-key="name"> Sucursal </vs-th>
                <vs-th sort-key="name"> División </vs-th>
                <vs-th sort-key="name"> Cargo </vs-th>
                <vs-th sort-key="name"> Cargo Supervisor</vs-th>
                <vs-th> Acciones </vs-th>
              </template>

              <template slot-scope="{ data }">
                <vs-tr v-for="(item, index) in data" :key="index">
                  <vs-td :data="item.name">
                    {{ item.nameBranchOffices[0].name }}
                  </vs-td>
                  <vs-td :data="item.name">
                    {{ item.nameBranchDivision[0].name }}
                  </vs-td>
                  <vs-td :data="item.name">
                    {{ item.nameCharge[0].name }}
                  </vs-td>
                  <vs-td :data="item.name">
                    {{ item.nameChargeDepency[0].name }}
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
                          :to="'/panel/update-dependency/' + item.id"
                          v-if="
                            showUserAuth[0].permissions[35].name ==
                            'BOTON EDITAR DEPENDENCIA'
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
                            showUserAuth[0].permissions[36].name ==
                            'BOTON ELIMINAR DEPENDENCIA'
                          "
                          @click="deleteDependency(item.id)"
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
      :title="'Nombre De La Dependencia'"
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
              <h6 style="margin-bottom: -14px; margin-left: 20px">Sucursal</h6>
              <select
                class="ml-5 mr-5 mt-5 mb-3 seleccionable"
                v-model="formCharge.branch_id"
              >
                <option value="">Seleccione</option>
                <option
                  :key="index"
                  :value="item.id"
                  v-for="(item, index) in branchOffices"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="centerx colors-example">
              <h6 style="margin-bottom: -14px; margin-left: 20px">División</h6>
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
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="12"
          >
            <div class="centerx colors-example">
              <h6 style="margin-bottom: -14px; margin-left: 20px">Cargo</h6>
              <select
                class="ml-5 mr-5 mt-5 mb-3 seleccionable"
                v-model="formCharge.charge_id"
              >
                <option value="">Seleccione</option>
                <option
                  :key="index"
                  :value="item.id"
                  v-for="(item, index) in charges"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="centerx colors-example">
              <h6 style="margin-bottom: -14px; margin-left: 20px">
                Cargo Supervisor
              </h6>
              <select
                class="ml-5 mr-5 mt-5 mb-3 seleccionable"
                v-model="formCharge.charge_dependence_id"
              >
                <option value="">Seleccione</option>
                <option
                  :key="index"
                  :value="item.id"
                  v-for="(item, index) in charges"
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
      formCharge: {
        branch_id: "",
        division_id: "",
        charge_id: "",
        charge_dependence_id: "",
      },
      branchDivisions: {},
      branchOffices: {},
      charges: {},
      showDependencies: {},
      showUserAuth: [],
      tantos: 5,
    };
  },
  created() {
    this.showBranchDivisions();
    this.showBranchOffices();
    this.showCharges();
    this.showDependency();
    this.showUserAuthentificated();
  },
  methods: {
    openModal() {
      this.activePrompt = true;
    },
    acceptAlert(color) {
      let url = dominio.url + "/api/crear-dependencia";
      axios
        .post(url, this.formCharge)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.showDependency();
            this.formCharge = "";
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
    showBranchDivisions() {
      let url = dominio.url + "/api/mostrar-divisiones";
      axios.get(url).then((res) => {
        this.branchDivisions = res.data.branchDivisions;
      });
    },
    showDependency() {
      let url = dominio.url + "/api/list-dependencias";
      axios.get(url).then((res) => {
        this.showDependencies = res.data.showDependencies;
      });
    },
    showBranchOffices() {
      let url = dominio.url + "/api/mostrar-sucursales";
      axios.get(url).then((res) => {
        this.branchOffices = res.data.branchOffices;
      });
    },
    showCharges() {
      let url = dominio.url + "/api/mostrar-cargos";
      axios.get(url).then((res) => {
        this.charges = res.data.charges;
      });
    },
    deleteDependency(id) {
      let url = dominio.url + "/api/eliminar-dependencia/" + id;
      axios
        .post(url)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.showDependency();
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
