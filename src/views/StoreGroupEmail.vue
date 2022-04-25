<template>
  <div>
    <vs-button
      class="buttonColor"
      color="primary"
      type="relief"
      icon="email"
      @click="backGroupEmails()"
      >Volver Grupo De Correos</vs-button
    >
    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Creación Grupo De Correos</h6>
          </div>
          <div>
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <select
                  class="ml-5 mr-5 mt-5 mb-3 seleccionable"
                  v-model="formGroupEmail.typeCopy"
                >
                  <option value="">Seleccione </option>
                  <option value="CC">CC</option>
                  <option value="CCO">CCO</option>
                </select>
                <vs-input
                  class="ml-0 mr-5 mt-5 mb-3"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Nombre Del Contacto"
                  v-model="formGroupEmail.name"
                />
                <vs-input
                  class="ml-0 mr-4 mt-2 mb-0"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Correo Electronico"
                  v-model="formGroupEmail.email"
                />
              </vs-col>
              <vs-col
                class="mt-3"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <vs-row vs-justify="center" class="mt-5 mb-5">
                  <vs-button
                    class="buttonColor"
                    color="success"
                    type="relief"
                    icon="add"
                    @click="createGroupEmails()"
                    >Agregar Al Grupo</vs-button
                  >
                </vs-row>
              </vs-col>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Correos De Este Grupo</h6>
          </div>
          <div>
            <vs-table>
              <template slot="header"> </template>
              <template slot="thead">
                <vs-th> Tipo De Copia </vs-th>
                <vs-th> Correo Electronico </vs-th>
                <vs-th> Nombre Del Contacto </vs-th>
                <vs-th> Acciones </vs-th>
              </template>

              <template>
                <vs-tr v-for="(item, index) in showGroupEmail" :key="index">
                  <vs-td>
                    {{ item.typeCopy }}
                  </vs-td>
                  <vs-td>
                    {{ item.name }}
                  </vs-td>
                  <vs-td>
                    {{ item.email }}
                  </vs-td>
                  <vs-td>
                    <vs-button
                      class="mr-1 ml-1"
                      radius
                      color="danger"
                      type="border"
                      icon="delete_outline"
                      @click="deleteEmail(item.id)"
                    ></vs-button>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
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
      formGroupEmail: {
        typeCopy: "",
        name: "",
        email: "",
        id: this.$route.params && this.$route.params.id,
      },
      id: this.$route.params && this.$route.params.id,
      showGroupEmail: {},
    };
  },
  created() {
    this.showGroupEmails();
  },
  methods: {
    backGroupEmails() {
      this.$router.push("/panel/create-group-email");
    },
    createGroupEmails() {
      let url = dominio.url + "/api/crear-grupo-correos";
      axios
        .post(url, this.formGroupEmail)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.formGroupEmail.typeCopy = "";
            this.formGroupEmail.name = "";
            this.formGroupEmail.email = "";
            this.showGroupEmails();
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    showGroupEmails() {
      let url = dominio.url + "/api/mostrar-grupo-correos/" + this.formGroupEmail.id;
      axios.get(url).then((res) => {
        this.showGroupEmail = res.data.showGroupEmail;
      });
    },
    deleteEmail(id) {
      let url = dominio.url + "/api/eliminar-correo-del-grupo/" + id;
      axios
        .post(url)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.showGroupEmails();
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
