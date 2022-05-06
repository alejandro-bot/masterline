<template>
  <div>
    <vs-button
      class="buttonColor"
      color="primary"
      type="relief"
      icon="home"
      @click="returnCharges()"
      >Volver A Cargos</vs-button
    >
    <vs-row class="mt-5" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Editar Cargo</h6>
          </div>
          <div>
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <vs-row>
                  <vs-col
                    vs-type="flex"
                    vs-justify="right"
                    vs-align="center"
                    vs-lg="6" vs-sm="6" vs-xs="12"
                  >
                    <vs-input
                      class="escritorio2 movil"
                      color="rgb(213, 14, 151)"
                      label-placeholder="Nombre Del Cargo"
                      v-model="showChargeId.name"
                    />
                  </vs-col>
                  <vs-col
                    vs-type="flex"
                    vs-justify="left"
                    vs-align="center"
                   vs-lg="6" vs-sm="6" vs-xs="12"
                  >
                    <select
                      class="escritorio2 movil seleccionable"
                      v-model="showChargeId.division_id"
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
                  </vs-col>
                </vs-row>
              </vs-col>
              <vs-col
                class="mt-5"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <vs-row vs-justify="center" class="mt-0 mb-5">
                  <vs-button
                  class="botonCargo"
                    @click="editCharge(showChargeId.id)"
                    color="#ff6600"
                    type="relief"
                    icon="autorenew"
                    >Actualizar Cargo</vs-button
                  >
                </vs-row>
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
      branchDivisions: {},
      id: this.$route.params && this.$route.params.id,
      showChargeId: {
        id: this.$route.params && this.$route.params.id,
        name: "",
        division_id: "",
        line: "",
      },
      branchDivisions: {},
    };
  },
  created() {
    this.showchargesId();
    this.showDivision();
  },
  methods: {
    returnCharges() {
      this.$router.push("/panel/charge");
    },
    showchargesId() {
      let url = dominio.url + "/api/mostrar-cargos/" + this.id;
      axios.get(url).then((res) => {
        this.showChargeId = res.data.showChargeId;
      });
    },
    showDivision() {
      let url = dominio.url + "/api/mostrar-divisiones";
      axios.get(url).then((res) => {
        this.branchDivisions = res.data.branchDivisions;
      });
    },
    editCharge(id) {
      let url = dominio.url + "/api/editar-cargo/" + id;
      axios
        .post(url, this.showChargeId)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.$router.push("/panel/charge");
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
<style>
.buttonColor {
  background: #ff6600 !important;
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
  .escritorio2 {
    margin-top: 10px;
    width: 60%;
    padding: 5px;
  }
  .mobil {
    padding: 6px;
  }


}
@media only screen and (max-width: 900px) {
  .movil {
    width: 100%;
    margin-top: 30px !important;
  }
  .mobil {
    margin-bottom: -10px;
    margin-top: 10px;
  }
  .botonCargo {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
