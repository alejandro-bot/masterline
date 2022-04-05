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
            @click="backRos()"
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
              <h1 class="text-center">VISTA DE R.O</h1>
            </strong>
          </div>
          <h6 class="card-title text-center">R.O. NÚMERO Y TIPO DE ENVÍO</h6>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-5 mt-5 mb-3"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Modo De Transporte"
                  :value="showRoDisabled.type_of_transport.name"
                  disabled
                />
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-5 mt-5 mb-3"
                  color="rgb(213, 14, 151)"
                  label-placeholder="R.O"
                  v-model="showRoDisabled.ro"
                  disabled
                />
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-5 mt-5 mb-3"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Tipo De Embarque"
                  v-model="showRoDisabled.type_send.name"
                  disabled
                />
              </div>
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card
          class="con-vs-cards"
          v-if="
            showRoDisabled.carrier ||
            showRoDisabled.vehicle ||
            showRoDisabled.driver ||
            showRoDisabled.plaque
          "
        >
          <h6 class="card-title text-center">DETALLES DEL TRANSPORTADOR</h6>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-input
                class="ml-5 mr-5 mt-3 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Transportadora"
                v-model="showRoDisabled.carrier"
                v-if="showRoDisabled.carrier"
                disabled
              />
              <vs-input
                class="ml-5 mr-5 mt-3 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Típo de Vehículo"
                v-model="showRoDisabled.vehicle"
                v-if="showRoDisabled.vehicle"
                disabled
              />
              <vs-input
                class="ml-5 mr-5 mt-3 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Conductor"
                v-model="showRoDisabled.driver"
                v-if="showRoDisabled.driver"
                disabled
              />
              <vs-input
                class="ml-5 mr-5 mt-3 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Placa"
                v-model="showRoDisabled.plaque"
                v-if="showRoDisabled.plaque"
                disabled
              />
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card class="con-vs-cards">
          <h6 class="card-title text-center">PLANIFICACIÓN DE EMBARQUE</h6>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="selectExample ml-0 mr-5 mt-3 mb-0"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Puerto De Origen"
                  v-model="showRoDisabled.starting_place"
                  disabled
                />
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-5 mt-5 mb-3"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Puerto De Destino"
                  v-model="showRoDisabled.destination_place"
                  disabled
                />
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-5 mt-5 mb-3"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Emisión HBL"
                  v-model="showRoDisabled.issue.name"
                  disabled
                />
              </div>
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-5 mt-0 mb-3"
                  label="ETD"
                  v-model="showRoDisabled.etd"
                  disabled
                />
              </div>
              <vs-input
                class="ml-0 mr-5 mt-0 mb-3"
                label="ETA"
                v-model="showRoDisabled.eta"
                disabled
              />
              <vs-input
                class="ml-0 mr-4 mt-2 mb-0"
                color="rgb(213, 14, 151)"
                label-placeholder="Número HBL"
                v-model="showRoDisabled.num_hbl"
                disabled
              />
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card class="con-vs-cards">
          <h6 class="card-title text-center">DETALLES DE LA CARGA</h6>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-5 mt-5 mb-3"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Tipo Carga"
                  v-model="showRoDisabled.type_of_load.name"
                  disabled
                />
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-5 mt-5 mb-3"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Cantidad"
                  v-model="showRoDisabled.quantity"
                  disabled
                />
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-4 mt-2 mb-0"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Numero De Contenedor"
                  v-model="showRoDisabled.container_number"
                  disabled
                />
              </div>
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-input
                class="ml-0 mr-5 mt-5 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Tipo de Contenedor"
                v-model="showRoDisabled.kind_of_container"
                disabled
              />
              <vs-input
                class="ml-0 mr-5 mt-5 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Peso Bruto"
                v-model="showRoDisabled.weight"
                disabled
              />
              <vs-input
                class="ml-0 mr-4 mt-2 mb-0"
                color="rgb(213, 14, 151)"
                label-placeholder="Volumen"
                v-model="showRoDisabled.volume"
                disabled
              />
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card class="con-vs-cards">
          <h6 class="card-title text-center">ASIGNACIONES</h6>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-4 mt-2 mb-0"
                  color="rgb(213, 14, 151)"
                  label="Nombre Sucursal"
                  v-model="showRoDisabled.branch_office.name"
                  disabled
                />
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-4 mt-2 mb-0"
                  color="rgb(213, 14, 151)"
                  label="Nombre Usuario"
                  disabled
                  v-model="showRoDisabled.user.full_name"
                />
              </div>
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-4 mt-2 mb-0"
                  color="rgb(213, 14, 151)"
                  label="Comercial"
                  v-model="showRoDisabled.commercial"
                  disabled
                />
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-4 mt-2 mb-0"
                  color="rgb(213, 14, 151)"
                  label="Codigo Seguimiento Cliente"
                  disabled
                  v-model="showRoDisabled.customer_tracking_code"
                />
              </div>
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
                  <vs-tr v-for="(item, index) in showRoDisabled.email_clients" :key="index">
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
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-input
                class="ml-5 mr-5 mt-5 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="ASIGNACIÓN DE LA OPERACIÓN"
                style="width: 50%"
                v-model="showRoDisabled.process"
                disabled
              />
              <vs-input
                class="mt-5 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Asunto Correo"
                v-model="showRoDisabled.subjet"
                style="width: 50%"
                disabled
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-textarea
                class="mt-3 mb-3"
                counter="100"
                label="¡Gracias por tu confianza!¡Esta nueva asignación es importante para nosotros!"
                width="1140px"
                :counter-danger.sync="counterDanger"
                v-model="showRoDisabled.message"
                disabled
              />
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
      showRoDisabled: {},
    };
  },
  created() {
    this.showRoId();
  },
  methods: {
    backRos() {
      this.$router.push("/panel/show-ro");
    },
    showRoId() {
      let url = dominio.url + "/api/mostrar-ro/" + this.id;
      axios.get(url).then((res) => {
        this.showRoDisabled = res.data.showRoDisabled;
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
