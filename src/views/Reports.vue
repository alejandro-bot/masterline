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
                class="mt-0"
                vs-type="flex"
                vs-justify="left"
                vs-align="center"
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
                  v-if="formTypeTransport.type_of_transport_id && formTypeTransport.ro"
                  @click="showReportRos()"
                ></vs-button>
              </vs-col>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
    <div class="centerx">
      <vs-popup fullscreen title="Seguimiento R.O" :active.sync="popupActivo4">
        <vs-table>
          <template slot="header"> </template>
          <template slot="thead">
            <vs-th> R.O</vs-th>
            <vs-th> Fecha De Registro </vs-th>
            <vs-th> Puerto De Origen </vs-th>
            <vs-th> Puerto Destino </vs-th>
            <vs-th> ETD </vs-th>
            <vs-th> ETA </vs-th>
            <vs-th> Tipo De Carga </vs-th>
            <vs-th> Numero De Contenedor </vs-th>
            <vs-th> Tipo De Contenedor </vs-th>
            <vs-th> Cantidad </vs-th>
            <vs-th> Peso </vs-th>
            <vs-th> Volumen </vs-th>
            <vs-th> Numero De HBL </vs-th>
            <vs-th> Emisión </vs-th>
            <vs-th> Proceso </vs-th>
            <vs-th> Seguimiento </vs-th>
            <vs-th> Usuario </vs-th>
            <vs-th> Tipo </vs-th>
          </template>
          <template>
            <vs-tr :key="index" v-for="(item, index) in showRo">
              <vs-td :data="item.ro">
                {{ item.ro }}
              </vs-td>
              <vs-td :data="item.created_at">
                {{ item.created_at }}
              </vs-td>
              <vs-td :data="item.starting_place">
                {{ item.starting_place }}
              </vs-td>
              <vs-td :data="item.destination_place">
                {{ item.destination_place }}
              </vs-td>
              <vs-td :data="item.etd">
                {{ item.etd }}
              </vs-td>
              <vs-td :data="item.eta">
                {{ item.eta }}
              </vs-td>
              <vs-td :data="item.type_of_load.name">
                {{ item.type_of_load.name }}
              </vs-td>
              <vs-td :data="item.container_number">
                {{ item.container_number }}
              </vs-td>
              <vs-td :data="item.kind_of_container">
                {{ item.kind_of_container }}
              </vs-td>
              <vs-td :data="item.quantity">
                {{ item.quantity }}
              </vs-td>
              <vs-td :data="item.weight">
                {{ item.weight }}
              </vs-td>
              <vs-td :data="item.volume">
                {{ item.volume }}
              </vs-td>
              <vs-td :data="item.num_hbl">
                {{ item.num_hbl }}
              </vs-td>
              <vs-td :data="item.issue.name">
                {{ item.issue.name }}
              </vs-td>
              <vs-td>
                arreglar
              </vs-td>
              <vs-td>
                arreglar
              </vs-td>
              <vs-td :data="item.user.full_name">
                {{ item.user.full_name }}
              </vs-td>
              <vs-td>
                Arreglar
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </vs-popup>
    </div>
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
      typeOfTransport: {},
      popupActivo4: false,
      showRo: {},
    };
  },
  created() {
    this.showTypeOfTransport();
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
    openModal() {
      this.popupActivo4 = true;
    },
    showReportRos() {
      let url = dominio.url + "/api/mostrar-reporte-ros";
      axios.get(url, this.formTypeTransport).then((res) => {
        if (res.data.code == 200) {
          toastr.success(res.data.message);
          this.openModal();
          this.formTypeTransport.type_of_transport_id = '';
          this.formTypeTransport.ro = '';
          this.showRo = res.data.showRo;
        }
        if (res.data.code == 500) {
          toastr.error(res.data.message);
        }
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
