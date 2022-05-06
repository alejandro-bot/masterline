<template>
  <div>
    <vs-row vs-w="12">
      <vs-col
       class="p-2"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="3"
        vs-sm="3"
        vs-xs="12"
      >
        <vs-card
          class="con-vs-cards"
          style="height: 430px !important"
          v-if="showUserAuth[0].permissions[0].name == 'VER GESTIÓN DIARIA'"
        >
          <div slot="header">
            <img src="http://backend-masterline.test/images/Terrestre.png" alt="" style="width: -webkit-fill-available; border-radius: 10px;">
            <vs-row style="background: #ff6600; margin-top: -1px">
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <span
                  class="material-icons ml-5"
                  style="
                    width: 25px;
                    height: 25px;
                    display: block;
                    color: white;
                  "
                >
                  signal_cellular_alt
                </span>
                <h6>GESTIÓN DIARIA</h6>
              </vs-col>
            </vs-row>
          </div>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                <span class="material-icons"> event_available </span>
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6"
              >
                R.O Gestionados
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                {{ dailyManagement }}
              </vs-col>
            </vs-col>
          </vs-row>
          <vs-row class="mt-3">
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-col
                class="pl-5 ml-1"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                <span class="material-icons"> free_cancellation </span>
              </vs-col>
              <vs-col
                class="pr-3"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6"
              >
                R.O Sin Gestión
              </vs-col>
              <vs-col
                class=""
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                {{ recordsWithoutManagement }}
              </vs-col>
            </vs-col>
          </vs-row>
          <div>
            <div class="con-example-images"></div>
          </div>
        </vs-card>
      </vs-col>
      <vs-col
       class="p-2"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="3"
        vs-sm="3"
        vs-xs="12"
      >
        <vs-card
          class="con-vs-cards"
          style="height: 430px !important"
          v-if="showUserAuth[0].permissions[1].name == 'VER RESUMEN GENERAL'"
        >
          <div slot="header">
            <img src="http://backend-masterline.test/images/avion.jpeg" alt="" style="width: -webkit-fill-available; border-radius: 10px;">
            <vs-row style="background: #ff6600; margin-top: -1px">
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <span
                  class="material-icons ml-5"
                  style="
                    width: 25px;
                    height: 25px;
                    display: block;
                    color: white;
                  "
                >
                  add_chart
                </span>
                <h6>RESUMEN GENERAL</h6>
              </vs-col>
            </vs-row>
          </div>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                <span class="material-icons"> takeout_dining </span>
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6"
              >
                R.O Abiertos
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                {{ OpenRecords }}
              </vs-col>
            </vs-col>
          </vs-row>
          <vs-row class="mt-3">
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-col
                class="mr-3 ml-1"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                <span class="material-icons"> inventory </span>
              </vs-col>
              <vs-col
                class="mr-2"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6"
              >
                R.O Cerrados
              </vs-col>
              <vs-col
                class="mr-1"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                {{ closedRecords }}
              </vs-col>
            </vs-col>
          </vs-row>
          <div>
            <div class="con-example-images"></div>
          </div>
        </vs-card>
      </vs-col>
      <vs-col
       class="p-2"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="3"
        vs-sm="3"
        vs-xs="12"
      >
        <vs-card
          class="con-vs-cards"
          style="height: 430px !important"
          v-if="showUserAuth[0].permissions[2].name == 'VER SIN SEGUIMIENTO'"
        >
          <div slot="header">
            <img src="http://backend-masterline.test/images/maritimo.png" alt="" style="width: -webkit-fill-available; border-radius: 10px;">
            <vs-row style="background: #ff6600; margin-top: -1px">
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <span
                  class="material-icons ml-5"
                  style="
                    width: 25px;
                    height: 25px;
                    display: block;
                    color: white;
                  "
                >
                  equalizer
                </span>
                <h6>SIN SEGUIMIENTO</h6>
              </vs-col>
            </vs-row>
          </div>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <span class="material-icons"> error_outline </span>
                <span style="margin-left: 20px">Registro más Antiguo</span>
                <span style="margin-left: 5px">{{
                  registerRoFirst[0].ro
                }}</span>
              </vs-col>
            </vs-col>
          </vs-row>
          <vs-row class="mt-3">
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-col
                class=""
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <span class="material-icons" style="margin-left: -230px;"> date_range </span>
              </vs-col>
            </vs-col>
          </vs-row>
                <p class="nose"> Ultima Gestión </p>
                <p class="moviles">
                  {{ registerRoLast[0].created_at }}
                </p>
          <div>
            <div class="con-example-images"></div>
          </div>
        </vs-card>
      </vs-col>
      <vs-col
       class="p-2"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="3"
        vs-sm="3"
        vs-xs="12"
      >
        <vs-card
          class="con-vs-cards"
          style="height: 430px !important"
          v-if="showUserAuth[0].permissions[3].name == 'VER TIPO DE EMBARQUE'"
        >
          <div slot="header">
            <img src="http://backend-masterline.test/images/Conteiner.png" alt="" style="width: -webkit-fill-available; border-radius: 10px;">
            <vs-row style="background: #ff6600; margin-top: -1px">
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <span
                  class="material-icons ml-5"
                  style="
                    width: 25px;
                    height: 25px;
                    display: block;
                    color: white;
                  "
                >
                  donut_large
                </span>
                <h6>TIPO DE EMBARQUE</h6>
              </vs-col>
            </vs-row>
          </div>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-col
                v-if="
                  showUserAuth[0].rol_id == 6 ||
                  showUserAuth[0].rol_id == 5 ||
                  showUserAuth[0].rol_id == 2 ||
                  showUserAuth[0].rol_id == 4 ||
                  showUserAuth[0].rol_id == 8 ||
                  showUserAuth[0].rol_id == 7 ||
                  showUserAuth[0].rol_id == 3
                "
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                <span class="material-icons"> file_download </span>
              </vs-col>
              <vs-col
                class="ml-1"
                v-if="
                  showUserAuth[0].rol_id == 9 ||
                  showUserAuth[0].rol_id == 1 ||
                  showUserAuth[0].rol_id == 10
                "
                vs-type="flex"
                vs-justify="left"
                vs-align="center"
                vs-w="3"
              >
                <span class="material-icons"> directions_boat_filled </span>
              </vs-col>
              <vs-col
                v-if="
                  showUserAuth[0].rol_id == 6 ||
                  showUserAuth[0].rol_id == 5 ||
                  showUserAuth[0].rol_id == 2 ||
                  showUserAuth[0].rol_id == 4 ||
                  showUserAuth[0].rol_id == 8 ||
                  showUserAuth[0].rol_id == 7 ||
                  showUserAuth[0].rol_id == 3
                "
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6"
              >
                Importación
              </vs-col>
              <vs-col
                v-if="
                  showUserAuth[0].rol_id == 9 ||
                  showUserAuth[0].rol_id == 1 ||
                  showUserAuth[0].rol_id == 10
                "
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6"
              >
                Maritimo
              </vs-col>
              <vs-col
                v-if="
                  showUserAuth[0].rol_id == 6 ||
                  showUserAuth[0].rol_id == 5 ||
                  showUserAuth[0].rol_id == 2 ||
                  showUserAuth[0].rol_id == 4 ||
                  showUserAuth[0].rol_id == 8 ||
                  showUserAuth[0].rol_id == 7 ||
                  showUserAuth[0].rol_id == 3
                "
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                {{ imports }}
              </vs-col>
              <vs-col
                v-if="
                  showUserAuth[0].rol_id == 9 ||
                  showUserAuth[0].rol_id == 1 ||
                  showUserAuth[0].rol_id == 10
                "
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                {{ shoRoEdnaMaritime }}
              </vs-col>
            </vs-col>
          </vs-row>
          <vs-row class="mt-3">
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-col
                v-if="
                  showUserAuth[0].rol_id == 6 ||
                  showUserAuth[0].rol_id == 5 ||
                  showUserAuth[0].rol_id == 2 ||
                  showUserAuth[0].rol_id == 4 ||
                  showUserAuth[0].rol_id == 8 ||
                  showUserAuth[0].rol_id == 7 ||
                  showUserAuth[0].rol_id == 3
                "
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="4"
              >
                <span class="material-icons"> file_upload </span>
              </vs-col>
              <vs-col
                v-if="
                  showUserAuth[0].rol_id == 9 ||
                  showUserAuth[0].rol_id == 1 ||
                  showUserAuth[0].rol_id == 10
                "
                class="ml-1"
                vs-type="flex"
                vs-justify="left"
                vs-align="center"
                vs-w="3"
              >
                <span class="material-icons"> local_shipping </span>
              </vs-col>
              <vs-col
                v-if="
                  showUserAuth[0].rol_id == 6 ||
                  showUserAuth[0].rol_id == 5 ||
                  showUserAuth[0].rol_id == 2 ||
                  showUserAuth[0].rol_id == 4 ||
                  showUserAuth[0].rol_id == 8 ||
                  showUserAuth[0].rol_id == 7 ||
                  showUserAuth[0].rol_id == 3
                "
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="8"
              >
                Exportación
              </vs-col>
              <vs-col
                v-if="
                  showUserAuth[0].rol_id == 9 ||
                  showUserAuth[0].rol_id == 1 ||
                  showUserAuth[0].rol_id == 10
                "
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6"
              >
                Terretre
              </vs-col>
              <vs-col
                v-if="
                  showUserAuth[0].rol_id == 9 ||
                  showUserAuth[0].rol_id == 1 ||
                  showUserAuth[0].rol_id == 10
                "
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                {{ shoRoEdnaInland }}
              </vs-col>
              <vs-col
                v-if="
                  showUserAuth[0].rol_id == 6 ||
                  showUserAuth[0].rol_id == 5 ||
                  showUserAuth[0].rol_id == 2 ||
                  showUserAuth[0].rol_id == 4 ||
                  showUserAuth[0].rol_id == 8 ||
                  showUserAuth[0].rol_id == 7 ||
                  showUserAuth[0].rol_id == 3
                "
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="4"
              >
                {{ exports }}
              </vs-col>
            </vs-col>
            <vs-col
              v-if="
                showUserAuth[0].rol_id == 9 ||
                showUserAuth[0].rol_id == 1 ||
                showUserAuth[0].rol_id == 10
              "
              class="ml-1 mt-4"
              vs-type="flex"
              vs-justify="left"
              vs-align="center"
              vs-w="4"
            >
              <span class="material-icons"> local_airport </span>
            </vs-col>
            <vs-col
              v-if="
                showUserAuth[0].rol_id == 9 ||
                showUserAuth[0].rol_id == 1 ||
                showUserAuth[0].rol_id == 10
              "
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="4"
            >
              Aereo
            </vs-col>
            <vs-col
              v-if="
                showUserAuth[0].rol_id == 9 ||
                showUserAuth[0].rol_id == 1 ||
                showUserAuth[0].rol_id == 10
              "
              class="ml-4"
              vs-type="flex"
              vs-justify="right"
              vs-align="center"
              vs-w="2"
            >
              {{ shoRoEdnaAir }}
            </vs-col>
          </vs-row>
          <vs-row class="mt-3" v-if="showUserAuth[0].rol_id == 4">
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-col
                class=""
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                <span class="material-icons"> local_shipping </span>
              </vs-col>
              <vs-col
                v-if="showUserAuth[0].rol_id == 4"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6"
              >
                Importacíon OTM
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                {{ importsOtm }}
              </vs-col>
            </vs-col>
          </vs-row>
          <div>
            <div class="con-example-images"></div>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
    <graphic
      class="mt-5 mb-3"
      v-if="
        grafica1View &&
        showUserAuth[0].permissions[4].name == 'VER GRAFICA REGISTROS'
      "
      titulo="Cantidad De Registros Últimos 6 Meses"
      :arrayData="dataValues"
      :labels="labels"
      type="line"
      :key="grafica1Key"
    />
    <vs-row
      class="mt-5"
      vs-justify="center"
      v-if="showUserAuth[0].permissions[5].name == 'VER RO ABIERTOS INICIO'"
    >
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">R.O ABIERTOS ASIGNADOS</h6>
          </div>
          <div>
            <vs-table search pagination :data="roOfUser" :max-items="tantos">
              <template slot="header">
                <select v-model="tantos" class="seleccionableBuscador">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
              </template>
              <template slot="thead">
                <vs-th sort-key="ro"> R.O </vs-th>
                <vs-th sort-key="create_date"> Ultíma Gestión </vs-th>
                <vs-th sort-key="starting_place"> Puerto Origen </vs-th>
                <vs-th sort-key="destination_place"> Puerto Destino </vs-th>
                <vs-th sort-key="etd"> ETD </vs-th>
                <vs-th sort-key="eta"> ETA </vs-th>
                <vs-th sort-key="process_name"> Proceso </vs-th>
                <vs-th sort-key="name"> Tipo </vs-th>
                <vs-th> Acción </vs-th>
              </template>

              <template slot-scope="{ data }">
                <vs-tr v-for="(item, index) in data" :key="index">
                  <vs-td
                    :data="item.ro"
                    v-if="
                      item.processes_ro_pivot[0].procesess.process_name !=
                      'CIERRE DE LA OPERACIÓN'
                    "
                  >
                    {{ item.ro }}
                  </vs-td>
                  <vs-td
                    :data="item.created_at"
                    v-if="
                      item.processes_ro_pivot[0].procesess.process_name !=
                      'CIERRE DE LA OPERACIÓN'
                    "
                  >
                    {{ item.processes_ro_pivot[0].procesess.create_date }}
                  </vs-td>
                  <vs-td
                    :data="item.starting_place"
                    v-if="
                      item.processes_ro_pivot[0].procesess.process_name !=
                      'CIERRE DE LA OPERACIÓN'
                    "
                  >
                    {{ item.starting_place }}
                  </vs-td>
                  <vs-td
                    :data="item.destination_place"
                    v-if="
                      item.processes_ro_pivot[0].procesess.process_name !=
                      'CIERRE DE LA OPERACIÓN'
                    "
                  >
                    {{ item.destination_place }}
                  </vs-td>
                  <vs-td
                    :data="item.etd"
                    v-if="
                      item.processes_ro_pivot[0].procesess.process_name !=
                      'CIERRE DE LA OPERACIÓN'
                    "
                  >
                    {{ item.etd }}
                  </vs-td>
                  <vs-td
                    :data="item.eta"
                    v-if="
                      item.processes_ro_pivot[0].procesess.process_name !=
                      'CIERRE DE LA OPERACIÓN'
                    "
                  >
                    {{ item.eta }}
                  </vs-td>
                  <vs-td
                    v-if="
                      item.processes_ro_pivot[0].procesess.process_name !=
                      'CIERRE DE LA OPERACIÓN'
                    "
                    :data="item.processes_ro_pivot[0].procesess.process_name"
                  >
                    {{ item.processes_ro_pivot[0].procesess.process_name }}
                  </vs-td>
                  <vs-td
                    :data="item.type_send.name"
                    v-if="
                      item.processes_ro_pivot[0].procesess.process_name !=
                      'CIERRE DE LA OPERACIÓN'
                    "
                  >
                    {{ item.type_send.name }}
                  </vs-td>
                  <vs-td
                    :data="item.type_send.name"
                    v-if="
                      item.processes_ro_pivot[0].procesess.process_name !=
                      'CIERRE DE LA OPERACIÓN'
                    "
                  >
                    <router-link
                      :to="'/panel/update-ro/' + item.id"
                      v-if="
                        showUserAuth[0].permissions[9].name ==
                          'BOTON EDITAR RO' ||
                        showUserAuth[0].permissions[8].name == 'BOTON EDITAR RO'
                      "
                    >
                      <vs-button
                        class="mr-1 ml-1"
                        radius
                        color="success"
                        type="border"
                        icon="edit"
                      ></vs-button>
                    </router-link>
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
import Graphic from "./Graphic.vue";
import { dominio } from "../dominio.js";
export default {
  components: { Graphic },
  data() {
    return {
      grafica1View: false,
      grafica1Key: 1,
      labels: [],
      dataValues: [],
      dailyManagement: [],
      recordsWithoutManagement: [],
      OpenRecords: [],
      closedRecords: [],
      imports: [],
      exports: [],
      oldestRecord: [],
      roOfUser: [],
      showUserAuth: [],
      registerRoFirst: [],
      registerRoLast: [],
      importsOtm: [],
      shoRoEdnaMaritime: [],
      shoRoEdnaAir: [],
      shoRoEdnaInland: [],
      tantos: 5,
    };
  },
  created() {
    this.showUserTipification();
    this.showUser();
  },
  methods: {
    showUserTipification() {
      let url = dominio.url + "/api/consultar-tipificacion-ultimos-5-meses";
      axios.get(url).then((res) => {
        this.labels = res.data.labels;
        this.dataValues.push(res.data.dataValues);
        this.grafica1View = true;
        this.grafica1Key++;
        this.dailyManagement = res.data.dailyManagement;
        this.recordsWithoutManagement = res.data.recordsWithoutManagement;
        this.OpenRecords = res.data.OpenRecords;
        this.closedRecords = res.data.closedRecords;
        this.imports = res.data.imports;
        this.exports = res.data.exports;
        this.oldestRecord = res.data.oldestRecord;
        this.roOfUser = res.data.roOfUser;
        this.registerRoFirst = res.data.registerRoFirst;
        this.registerRoLast = res.data.registerRoLast;
        this.importsOtm = res.data.importsOtm;
        this.shoRoEdnaMaritime = res.data.shoRoEdnaMaritime;
        this.shoRoEdnaAir = res.data.shoRoEdnaAir;
        this.shoRoEdnaInland = res.data.shoRoEdnaInland;
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
.con-vs-cards {
  width: 100%;
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
.con-example-images {
  max-height: 300px;
  overflow: auto;
  width: 293px;
  margin-top: 0px;
}
.vs-card--header {
  padding: 0px !important;
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
.vs-image--img {
  background-repeat: no-repeat;
  padding-bottom: 110px !important;
}
.vs-images--ul {
  width: auto !important;
}
.moviles
 {

    margin-left: 246px;
    margin-top: -17px !important;
 }
 .nose
 {
   margin-top: -20px !important;
   margin-left:97px;
 }
@media only screen and (max-width: 3600px) and (min-width: 1201px) {
  .botones {
    width: 170px !important;
  }
}
@media only screen and (max-width: 1600px) and (min-width: 821px) {
  .botones {
    width: 130px !important;
  }
}
@media only screen and (max-width : 900px) {
 .desaparecer-movil
 {
   display: none;
 }
 .moviles
 {
    margin-left: 228px !important;
    margin-top: -17px !important;
 }
 .nose
 {
   margin-top: -20px !important;
  margin-left:77px;
 }
}

.buttonColor {
  background: #ff6600 !important;
}
.seleccionableBuscador {
  background: #2c2c2c;
  color: white;
  width: 70px;
  height: 35px;
  border-radius: 5px;
  padding: 0.3rem !important;
  padding-left: 6px !important;
  font-size: 17px;
  border: 1px solid transparent;
  margin-left: 10px;
  margin-top: 0px;
  border-radius: 20px;
  margin-top: 0px !important;
}

</style>
