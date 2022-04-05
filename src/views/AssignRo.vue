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
                <vs-row>
                  <vs-col
                    vs-type="flex"
                    vs-justify="right"
                    vs-align="center"
                    vs-w="6"
                  >
                    <div class="centerx colors-example">
                      <vs-select class="mr-5"
                      v-model="formAssign.user_id"
                      label="Comercial">
                        <vs-select-item :value="''" :text="'Seleccione'" />
                        <vs-select-item
                          :key="index"
                          :value="item.id"
                          :text="item.first_name + ' ' + item.last_name"
                          v-for="(item, index) in users"
                        />
                      </vs-select>
                    </div>
                  </vs-col>
                  <vs-col
                    vs-type="flex"
                    vs-justify="left"
                    vs-align="center"
                    vs-w="6"
                  >
                    <div class="centerx colors-example">
                      <vs-select class="ml-5"
                        v-model="formAssign.branch_office_id"
                       label="Sucursal">
                        <vs-select-item
                          :key="index"
                          :value="item.id"
                          :text="item.name"
                          v-for="(item, index) in branchOffices"
                        />
                      </vs-select>
                    </div>
                  </vs-col>
                </vs-row>
                <vs-row class="mt-5 mb-3">
                  <vs-col
                    vs-type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-w="12"
                  >
                    <div class="centerx colors-example">
                      <vs-button
                        @click="assignRo()"
                        color="#ff5000"
                        type="relief"
                        icon="add"
                        >Asignar R.O</vs-button
                      >
                    </div>
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
        branch_office_id: ""
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
            this.$router.push('/panel/show-ro')
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
</style>
