<template>
  <div>
    <vs-row class="mb-5">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="home"
            @click="backRosSun()"
            >Regresar</vs-button
          >
        </vs-col>
      </vs-col>
    </vs-row>
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <strong>
              <h1 class="text-center" style="font-size: 20px; font-weight: 700">
                VISTA DE R.O HIJO
              </h1>
            </strong>
          </div>
          <h6 class="card-title text-center">R.O. NÚMERO Y TIPO DE ENVÍO</h6>

          <vs-row vs-w="12">
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                class="ml-0 mr-5 mt-5 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Modo De Transporte"
                :value="showSunId.type_of_transport.name"
                disabled
                style="width: 100%"
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                class="ml-0 mr-5 mt-5 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="R.O"
                :value="showSunId.ro"
                disabled
                style="width: 100%"
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                class="ml-0 mr-5 mt-5 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Tipo De Embarque"
                :value="showSunId.type_send.name"
                disabled
                style="width: 100%"
              />
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card
          class="con-vs-cards"
          v-if="
            showSunId.carrier ||
            showSunId.vehicle ||
            showSunId.driver ||
            showSunId.plaque
          "
        >
          <h6 class="card-title text-center">DETALLES DEL TRANSPORTADOR</h6>

          <vs-row vs-w="12">
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="6"
              vs-sm="6"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label-placeholder="Transportadora"
                :value="showSunId.carrier"
                style="width: 100%; margin-top: 30px; padding: 5px"
                disabled
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="6"
              vs-sm="6"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label-placeholder="Típo de Vehículo"
                :value="showSunId.vehicle"
                style="width: 100%; margin-top: 30px; padding: 5px"
                disabled
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="6"
              vs-sm="6"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label-placeholder="Conductor"
                :value="showSunId.driver"
                style="width: 100%; margin-top: 30px; padding: 5px"
                disabled
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="6"
              vs-sm="6"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label-placeholder="Placa"
                :value="showSunId.plaque"
                style="width: 100%; margin-top: 30px; padding: 5px"
                disabled
              />
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card class="con-vs-cards">
          <h6 class="card-title text-center">PLANIFICACIÓN DE EMBARQUE</h6>

          <vs-row vs-w="12">
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label-placeholder="Puerto De Origen"
                :value="showSunId.starting_place"
                disabled
                style="width: 100%; margin-top: 20px; padding: 5px"
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label-placeholder="Puerto De Destino"
                :value="showSunId.destination_place"
                disabled
                style="width: 100%; margin-top: 20px; padding: 5px"
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label-placeholder="Emisión HBL"
                :value="showSunId.issue.name"
                disabled
                style="width: 100%; margin-top: 20px; padding: 5px"
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                label="ETD"
                :value="showSunId.etd"
                disabled
                style="width: 100%; margin-top: 20px; padding: 5px"
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                label="ETA"
                :value="showSunId.eta"
                disabled
                style="width: 100%; margin-top: 20px; padding: 5px"
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label-placeholder="Número HBL"
                :value="showSunId.num_hbl"
                disabled
                style="width: 100%; margin-top: 40px; padding: 5px"
              />
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card class="con-vs-cards">
          <h6 class="card-title text-center">DETALLES DE LA CARGA</h6>

          <vs-row vs-w="12">
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label-placeholder="Tipo Carga"
                :value="showSunId.type_of_load.name"
                style="width: 100%; margin-top: 20px; padding: 5px"
                disabled
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label-placeholder="Cantidad"
                :value="showSunId.quantity"
                style="width: 100%; margin-top: 20px; padding: 5px"
                disabled
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label-placeholder="Numero De Contenedor"
                :value="showSunId.container_number"
                style="width: 100%; margin-top: 20px; padding: 5px"
                disabled
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label-placeholder="Tipo de Contenedor"
                :value="showSunId.kind_of_container"
                style="width: 100%; margin-top: 20px; padding: 5px"
                disabled
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label-placeholder="Peso Bruto"
                :value="showSunId.weight"
                style="width: 100%; margin-top: 20px; padding: 5px"
                disabled
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label-placeholder="Volumen"
                :value="showSunId.volume"
                style="width: 100%; margin-top: 20px; padding: 5px"
                disabled
              />
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card class="con-vs-cards">
          <h6 class="card-title text-center">ASIGNACIONES</h6>

          <vs-row vs-w="12">
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label="Nombre Sucursal"
                :value="showSunId.branch_office.name"
                disabled
                style="width: 100%; margin-top: 10px; padding: 5px"
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label="Nombre Usuario"
                :value="
                  showSunId.user.first_name + ' ' + showSunId.user.last_name
                "
                disabled
                style="width: 100%; margin-top: 10px; padding: 5px"
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label="Comercial"
                :value="user.first_name + ' ' + user.last_name"
                disabled
                style="width: 100%; margin-top: 10px; padding: 5px"
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label="Codigo Seguimiento Cliente"
                :value="showSunId.customer_tracking_code"
                disabled
                style="width: 100%; margin-top: 10px; padding: 5px"
              />
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card class="con-vs-cards">
          <h6 class="card-title text-center">GRUPO DE CORREOS</h6>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-table style="width: 96%">
                <template slot="thead">
                  <vs-th> Correo Electronico </vs-th>
                </template>
                <template>
                  <vs-tr
                    v-for="(item, index) in showSunId.email_clients"
                    :key="index"
                  >
                    <vs-td :data="item">
                      {{ item.name }}
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card class="con-vs-cards">
          <h6 class="card-title text-center">PRIMERA INTERACCIÓN</h6>

          <vs-row vs-w="12">
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="6"
              vs-sm="6"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label-placeholder="ASIGNACIÓN DE LA OPERACIÓN"
                style="width: 100%; margin-top: 10px; padding: 5px"
                disabled
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="6"
              vs-sm="6"
              vs-xs="12"
            >
              <vs-input
                color="rgb(213, 14, 151)"
                label-placeholder="Asunto Correo"
                :value="showSunId.subjet"
                style="width: 100%; margin-top: 10px; padding: 5px"
                disabled
              />
            </vs-col>
            <vs-col
              class="mt-5"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="12"
              vs-sm="12"
              vs-xs="12"
            >
              <vs-textarea
                counter="100"
                label="¡Gracias por tu confianza!¡Esta nueva asignación es importante para nosotros!"
                width="1140px"
                disabled
              />
            </vs-col>
          </vs-row>

          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
            </vs-col>
          </vs-row>
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
      showSunId: {},
      user: {},
    };
  },
  created() {
    this.showRosunId();
  },
  methods: {
    showRosunId() {
      let url = dominio.url + "/api/mostrar-ro-hijo/" + this.id;
      axios.get(url).then((res) => {
        this.showSunId = res.data.showSunId;
        this.user = res.data.user;
      });
    },
    backRosSun() {
      this.$router.push("/panel/show-ro");
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
