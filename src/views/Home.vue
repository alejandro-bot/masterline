<template>
  <div>
    <vs-row>
      <vs-col
        class="mt-5 mb-3 ml-3 mr-1"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="12"
      >
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <vs-card class="con-vs-cards mr-5">
            <div slot="header">
              <vs-images>
                <vs-image
                  class="con-example-images"
                  src="http://31.220.21.104/_activos/dashboard/img01.jpg"
                />
              </vs-images>
              <vs-row style="background: #ff6600; margin-top: -1px">
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <h6>GESTIÓN DIARIA</h6>
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
                  Registros Gestionados
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
                  Registros Sin Gestión
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
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <vs-card class="con-vs-cards mr-2">
            <div slot="header">
              <vs-images>
                <vs-image
                  class="con-example-images"
                  src="http://31.220.21.104/_activos/dashboard/img02.jpg"
                />
              </vs-images>
              <vs-row style="background: #ff6600; margin-top: -1px">
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <h6>RESUMEN GENERAL</h6>
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
                  Registros Abiertos
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
                  Registros Cerrados
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
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <vs-card class="con-vs-cards ml-2">
            <div slot="header">
              <vs-images>
                <vs-image
                  class="con-example-images"
                  src="http://31.220.21.104/_activos/dashboard/img03.jpg"
                />
              </vs-images>
              <vs-row style="background: #ff6600; margin-top: -1px">
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <h6>TIPO DE EMBARQUE</h6>
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
                  <span class="material-icons"> file_download </span>
                </vs-col>
                <vs-col
                  v-if="showUserAuth[0].rol_id == 6 || showUserAuth[0].rol_id == 5 || showUserAuth[0].rol_id == 2"
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="6"
                >
                  Importación
                </vs-col>
                <vs-col
                  v-if="showUserAuth[0].rol_id == 4"
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="6"
                >
                  Importación
                </vs-col>
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="3"
                >
                  {{ imports }}
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
                  vs-w="3"
                >
                  <span class="material-icons"> file_upload </span>
                </vs-col>
                <vs-col
                  v-if="showUserAuth[0].rol_id == 6 || showUserAuth[0].rol_id == 5 || showUserAuth[0].rol_id == 2"
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="6"
                >
                  Exportación
                </vs-col>
                <vs-col
                  v-if="showUserAuth[0].rol_id == 4"
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="6"
                >
                  Exportación
                </vs-col>
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="3"
                >
                  {{ exports }}
                </vs-col>
              </vs-col>
            </vs-row>
            <vs-row class="mt-3"  v-if="showUserAuth[0].rol_id == 4">
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
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <vs-card class="con-vs-cards ml-5">
            <div slot="header">
              <vs-images>
                <vs-image
                  class="con-example-images"
                  src="http://31.220.21.104/_activos/dashboard/img04.jpg"
                />
              </vs-images>
              <vs-row style="background: #ff6600; margin-top: -1px">
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <h6>SIN SEGUIMIENTO</h6>
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
                  vs-justify="left"
                  vs-align="center"
                  vs-w="12"
                >
                  <span class="material-icons"> error_outline </span>
                  <span style="margin-left:20px;">Registro más Antiguo</span>
                  <span style="margin-left:5px;">{{ registerRoFirst[0].ro }}</span>
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
                  <span class="material-icons"> date_range </span>
                  <span style="margin-left:20px;"> Ultima Gestión </span>
                  <span style="margin-left:5px;"> {{ registerRoLast[0].created_at }} </span>
                </vs-col>
              </vs-col>
            </vs-row>
            <div>
              <div class="con-example-images"></div>
            </div>
          </vs-card>
        </vs-col>
      </vs-col>
    </vs-row>
    <graphic
      class="mt-5 mb-3"
      v-if="grafica1View"
      titulo="Cantidad Tipificaciones Últimos 5 Meses"
      :arrayData="dataValues"
      :labels="labels"
      type="line"
      :key="grafica1Key"
    />
    <vs-row class="mt-5" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">CASOS ABIERTOS ASIGNADOS</h6>
          </div>
          <div>
            <vs-table :data="roOfUser">
              <template slot="header"> </template>
              <template slot="thead">
                <vs-th> R.O </vs-th>
                <vs-th> Ultíma Gestión </vs-th>
                <vs-th> Puerto Origen </vs-th>
                <vs-th> Puerto Destino </vs-th>
                <vs-th> ETD </vs-th>
                <vs-th> ETA </vs-th>
                <vs-th> Proceso </vs-th>
                <vs-th> Tipo </vs-th>
              </template>

              <template slot-scope="{ data }">
                <vs-tr :key="indextr" v-for="(tr, indextr) in roOfUser">
                  <vs-td :data="data[indextr].ro">
                    {{ data[indextr].ro }}
                  </vs-td>

                  <vs-td :data="data[indextr].created_at">
                    {{ data[indextr].processes_ro_pivot[0].procesess.create_date }}
                  </vs-td>
                  <vs-td :data="data[indextr].starting_place">
                    {{ data[indextr].starting_place }}
                  </vs-td>
                  <vs-td :data="data[indextr].destination_place">
                    {{ data[indextr].destination_place }}
                  </vs-td>
                  <vs-td :data="data[indextr].etd">
                    {{ data[indextr].etd }}
                  </vs-td>
                  <vs-td :data="data[indextr].eta">
                    {{ data[indextr].eta }}
                  </vs-td>
                  <vs-td :data="data[indextr].processes_ro_pivot[0].procesess.process_name">
                    {{ data[indextr].processes_ro_pivot[0].procesess.process_name }}
                  </vs-td>
                  <vs-td :data="data[indextr].type_send.name">
                    {{ data[indextr].type_send.name }}
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
      importsOtm: []
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
.vs-image--img
{
  background-repeat: no-repeat;
  padding-bottom: 57% !important;
}
.vs-images--ul
{
  width: auto !important;
}
</style>
