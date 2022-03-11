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
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <div class="centerx colors-example">
                  <vs-select
                    class="mt-0 mb-1 mr-1 ml-1"
                    label="Sucursal"
                    v-model="showDependencyss.branch_id"
                  >
                    <vs-select-item
                      :key="index"
                      :value="item.id"
                      :text="item.name"
                      v-for="(item, index) in branchOffices"
                    />
                  </vs-select>
                </div>
                <div class="centerx colors-example">
                  <vs-select
                    class="mt-0 mb-1 mr-1 ml-1"
                    label="División"
                    v-model="showDependencyss.division_id"
                  >
                    <vs-select-item
                      :key="index"
                      :value="item.id"
                      :text="item.name"
                      v-for="(item, index) in branchDivisions"
                    />
                  </vs-select>
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
                  <vs-select
                    class="mt-0 mb-1 mr-1 ml-1"
                    label="Cargo"
                    v-model="showDependencyss.charge_id"
                  >
                    <vs-select-item
                      :key="index"
                      :value="item.id"
                      :text="item.name"
                      v-for="(item, index) in charges"
                    />
                  </vs-select>
                </div>
                <div class="centerx colors-example">
                  <vs-select
                    class="mt-0 mb-1 mr-1 ml-1"
                    label="Cargo Supervisor"
                    v-model="showDependencyss.charge_dependence_id"
                  >
                    <vs-select-item
                      :key="index"
                      :value="item.id"
                      :text="item.name"
                      v-for="(item, index) in charges"
                    />
                  </vs-select>
                </div>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col
                class="mt-5 mb-3"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <div class="centerx colors-example">
                  <vs-button
                    class="buttonColor"
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
      this.$router.push('/panel/job-dependencies');
    }
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
  border: 1px solid#ff5000;
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
