<template>
  <div>
    <vs-button
      class="buttonColor"
      color="primary"
      type="relief"
      icon="home"
      @click="returDependency()"
      >Volver A Dependencia</vs-button
    >
    <vs-row class="mt-5" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Editar Dependencia</h6>
          </div>
          <div>
            <vs-row vs-w="12">
              <vs-col
                class="p-2"
                vs-justify="center"
                vs-align="center"
                vs-lg="6"
                vs-sm="6"
                vs-xs="12"
              >
                <div class="centerx colors-example">
                  <h6 class="tituloSelect">Sucursal</h6>
                  <select
                    class="escritorio movil seleccionable"
                    v-model="showDependencyss.branch_id"
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
              </vs-col>
              <vs-col
                class="p-2"
                vs-justify="center"
                vs-align="center"
                vs-lg="6"
                vs-sm="6"
                vs-xs="12"
              >
                <div class="centerx colors-example">
                  <h6 class="tituloSelect">División</h6>
                  <select
                    class="escritorio movil seleccionable"
                    v-model="showDependencyss.division_id"
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
              <vs-col
                class="p-2"
                vs-justify="center"
                vs-align="center"
                vs-lg="6"
                vs-sm="6"
                vs-xs="12"
              >
                <div class="centerx colors-example">
                  <h6 class="tituloSelect">Cargo</h6>
                  <select
                    class="escritorio movil seleccionable"
                    v-model="showDependencyss.charge_id"
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
              <vs-col
                class="p-2"
                vs-justify="center"
                vs-align="center"
                vs-lg="6"
                vs-sm="6"
                vs-xs="12"
              >
                <div class="centerx colors-example">
                  <h6 class="tituloSelect">Cargo Supervisor</h6>
                  <select
                    class="escritorio movil seleccionable"
                    v-model="showDependencyss.charge_dependence_id"
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
              <vs-col
                class="mt-5 mb-5"
                vs-justify="center"
                vs-align="center"
                vs-lg="12"
                vs-sm="12"
                vs-xs="12"
                style="text-align: -webkit-center"
              >
                <div class="centerx colors-example">
                  <vs-button
                    class="buttonColor botonMovil"
                    color="primary"
                    type="relief"
                    icon="update"
                    @click="updateDependency()"
                    >Actualizar Dependencia</vs-button
                  >
                </div>
              </vs-col>
            </vs-row>
          </div>
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
      id: this.$route.params && this.$route.params.id,
      showDependencyss: {
        id: this.$route.params && this.$route.params.id,
        branch_id: "",
        division_id: "",
        charge_id: "",
        charge_dependence_id: "",
      },
      branchDivisions: {},
      showDependencies: {},
      branchOffices: {},
      charges: {},
    };
  },
  created() {
    this.showBranchDivisions();
    this.showBranchOffices();
    this.showCharges();
    this.showDependency();
    this.showDependendyId();
  },
  methods: {
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
    showDependendyId() {
      let url = dominio.url + "/api/mostrar-dependencia/" + this.id;
      axios.get(url).then((res) => {
        this.showDependencyss = res.data.showDependencyss;
      });
    },
    updateDependency() {
      let url = dominio.url + "/api/actualizar-dependencia/" + this.id;
      axios
        .post(url, this.showDependencyss)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.$router.push("/panel/job-dependencies");
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    returDependency() {
      this.$router.push("/panel/job-dependencies");
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
  border: 1px solid#ff6600;
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
@media only screen and (min-width: 901px) {
  .escritorio {
    margin-top: 10px;
    width: 100%;
    padding: 5px;
  }
  .tituloSelect {
    margin-bottom: -5px;
  }
}
@media only screen and (max-width: 900px) {
  .movil {
    width: 100%;
    margin-top: 30px !important;
  }
  .tituloSelect {
    margin-bottom: -20px;
  }
  .botonMovil {
    width: 96%;
    margin-left: 6px;
  }
}
</style>
