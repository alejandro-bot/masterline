<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="left" vs-align="center" vs-w="12">
        <vs-button
          class="buttonColor"
          color="primary"
          type="relief"
          icon="home"
          @click="returnHome()"
          >Incio</vs-button
        >
      </vs-col>
    </vs-row>
    <vs-row class="mt-5" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Reportes Seguimiento Modo De Transporte</h6>
          </div>
          <div>
            <vs-row>
              <vs-col
                class="mt-3"
                vs-type="flex"
                vs-justify="right"
                vs-align="center"
                vs-w="6"
              >
                <vs-select
                  class="selectExample ml-0 mr-5 mt-0 mb-3"
                  label="Modo De Transporte"
                  v-model="formTypeTransport.type_of_transport_id"
                >
                  <vs-select-item :value="''" :text="'Seleccione'" />
                  <vs-select-item
                    :key="index"
                    :value="item.id"
                    :text="item.name"
                    v-for="(item, index) in typeOfTransport"
                  />
                </vs-select>
              </vs-col>
              <vs-col
                class="mt-3"
                vs-type="flex"
                vs-justify="left"
                vs-align="left"
                vs-w="6"
              >
                <vs-input
                  color="rgb(213, 14, 151)"
                  label-placeholder="Numero De R.O"
                  v-model="formTypeTransport.ro"
                />
                <vs-button
                  class="buttonColor mt-4"
                  color="primary"
                  type="relief"
                  icon="search"
                  v-if="formTypeTransport.type_of_transport_id && formTypeTransport.ro && showUserAuth[0].permissions[52].name == 'BOTON GENERAR REPORTE'"
                  @click="downloadRo()"
                ></vs-button>
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
      formTypeTransport: {
        type_of_transport_id: "",
        ro: "",
      },
      showUserAuth: [],
      typeOfTransport: {},
      popupActivo4: false,
    };
  },
  created() {
    this.showTypeOfTransport();
    this.showUser();
  },
  methods: {
    returnHome() {
      this.$router.push("/panel");
    },
    showTypeOfTransport() {
      let url = dominio.url + "/api/mostrar-tipo-transporte";
      axios.get(url).then((res) => {
        this.typeOfTransport = res.data.typeOfTransport;
      });
    },
     downloadRo() {
      let url = dominio.url + "/api/descargar-excel-ro";
      axios
        .get(url)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    showUser() {
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
</style>
