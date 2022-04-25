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
            <h6 class="card-title text-center">
              Reporte Trazabilidad R.O
            </h6>
          </div>
          <div>
            <form
              action="http://backend-masterline.test/api/descargar-excel-ro"
              method="post"
            >
              <input type="hidden" :value="csrf" />
              <vs-row>
                <vs-col
                  class="mt-3"
                  vs-type="flex"
                  vs-justify="right"
                  vs-align="center"
                  vs-w="6"
                  style="margin-left: -72px !important;"
                >
                  <select name="type_of_transport_id" class="seleccionablesssss ml-5">
                    <option value="">Seleccione</option>
                    <option
                      :key="index"
                      :value="item.id"
                      v-for="(item, index) in typeOfTransport"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </vs-col>
                <vs-col
                  class="mt-3"
                  vs-type="flex"
                  vs-justify="left"
                  vs-align="left"
                  vs-w="6"
                >
                  <input class="ml-3" type="text" name="ro"  style="border-radius:5px; border: 1px solid transparent;"/>
                  <button type="submit" class="boton_reporte">
                    <span class="material-icons"> file_download </span>
                  </button>
                </vs-col>
              </vs-row>
            </form>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-row class="mt-5" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">
              Reporte R.O Por Tipo De Embarque
            </h6>
          </div>
          <div>
            <form
              action="http://backend-masterline.test/api/descargar-excel-tipo-embarque"
              method="post"
            >
              <input type="hidden" :value="csrf" />
              <input type="hidden" name="user_id" :value="showUserAuth[0].id">
              <vs-row>
                <vs-col
                  class="mt-3"
                  vs-type="flex"
                  vs-justify="right"
                  vs-align="center"
                  vs-w="6"
                >
                  <select name="type_of_transport_id" class="seleccionablesssss ml-5">
                    <option value="">Seleccione</option>
                    <option
                      :key="index"
                      :value="item.id"
                      v-for="(item, index) in typeOfTransport"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </vs-col>
                <vs-col
                  class="mt-3"
                  vs-type="flex"
                  vs-justify="left"
                  vs-align="left"
                  vs-w="6"
                >
                  <button type="submit" class="boton_reporte">
                    <span class="material-icons"> file_download </span>
                  </button>
                </vs-col>
              </vs-row>
            </form>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
      <vs-row class="mt-5" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">
              Reporte Correos Enviados R.O
            </h6>
          </div>
          <div>
            <form
              action="http://backend-masterline.test/api/descargar-excel-email-ro"
              method="post"
            >
              <input type="hidden" :value="csrf" />
              <vs-row>
                <vs-col
                  class="mt-3"
                  vs-type="flex"
                  vs-justify="right"
                  vs-align="center"
                  vs-w="6"
                  style="margin-left: -72px !important;"
                >
                  <select name="type_of_transport_id" class="seleccionablesssss ml-5">
                    <option value="">Seleccione</option>
                    <option
                      :key="index"
                      :value="item.id"
                      v-for="(item, index) in typeOfTransport"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </vs-col>
                <vs-col
                  class="mt-3"
                  vs-type="flex"
                  vs-justify="left"
                  vs-align="left"
                  vs-w="6"
                >
                  <input class="ml-3" type="text" name="ro"  style="border-radius:5px; border: 1px solid transparent;"/>
                  <button type="submit" class="boton_reporte">
                    <span class="material-icons"> file_download </span>
                  </button>
                </vs-col>
              </vs-row>
            </form>
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
      showUserAuth: [],
      typeOfTransport: [],
      csrf: "Bearer " + this.$store.state.token,
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
.seleccionablesssss {
  background: #10163a;
  color: white;
  width: 200px;
  height: 35px;
  border-radius: 5px;
  padding: 0.3rem !important;
  padding-left: 6px !important;
  font-size: 17px;
}
.boton_reporte {
  background: #ff5000 !important;
  color: white;
  border: 1px solid transparent;
  width: 100px;
  border-radius: 5px;
  margin-left: 20px;
}
</style>
