<template>
  <div>
    <vs-button
      class="buttonColor"
      color="primary"
      type="relief"
      icon="inventory"
      @click="returnRo()"
      >Volver Ro</vs-button
    >
    <vs-row class="mt-5">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <vs-card class="con-vs-cards">
              <div slot="header">
                <h3 class="text-center mb-3 mt-5">Asignar R.O</h3>
              </div>
              <div>
                <vs-row vs-w="12">
                  <vs-col
                    vs-type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-lg="6"
                    vs-sm="6"
                    vs-xs="12"
                  >
                    <select
                      class="mt-5 mb-5 seleccionable ml-1 mr-1"
                      v-model="formAssign.user_id"
                      style="width: 100%"
                    >
                      <option value="">Comercial</option>
                      <option
                        :key="index"
                        :value="item.id"
                        v-for="(item, index) in users"
                      >
                        {{ item.first_name }} {{ item.last_name }}
                      </option>
                    </select>
                  </vs-col>

                  <vs-col
                    vs-type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-lg="6"
                    vs-sm="6"
                    vs-xs="12"
                  >
                    <select
                      class="mt-5 mb-5 seleccionable ml-1 mr-1"
                      v-model="formAssign.branch_office_id"
                      style="width: 100%"
                    >
                      <option value="">Sucursal</option>
                      <option
                        :key="index"
                        :value="item.id"
                        v-for="(item, index) in branchOffices"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </vs-col>
                  <vs-col
                    vs-type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-lg="12"
                    vs-sm="12"
                    vs-xs="12"
                  >
                    <vs-button
                      @click="assignRo()"
                      color="#ff5000"
                      type="relief"
                      icon="add"
                      >Asignar R.O</vs-button
                    >
                  </vs-col>
                </vs-row>
              </div>
            </vs-card>
          </vs-col>
        </vs-row>
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
      users: [],
      branchOffices: [],
      formAssign: {
        user_id: "",
        branch_office_id: "",
      },
    };
  },
  created() {
    this.showUser();
    this.showBranchOffices();
  },
  methods: {
    returnRo() {
      this.$router.push("/panel/show-ro");
    },
    showUser() {
      let url = dominio.url + "/api/mostrar-usuarios-comerciales";
      axios.get(url).then((res) => {
        this.users = res.data.users;
      });
    },
    showBranchOffices() {
      let url = dominio.url + "/api/mostrar-sucursales";
      axios.get(url).then((res) => {
        this.branchOffices = res.data.branchOffices;
      });
    },
    assignRo() {
      let url = dominio.url + "/api/assignar-ro/" + this.id;
      axios
        .post(url, this.formAssign)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.$router.push("/panel/show-ro");
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
.buttonColor {
  background: #ff5000 !important;
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
</style>
