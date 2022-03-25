<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="left" vs-align="right" vs-w="12">
          <!-- <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="zoom_out"
            @click="deatilOperation()"
            >Detalle</vs-button
          > pendiente realiozar filtro -->
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="home"
            @click="returnHome()"
            >Volver Inicio</vs-button
          >
        </vs-col>
      </vs-col>
    </vs-row>
    <vs-row class="mt-5" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Contador De Procesos</h6>
          </div>
          <div>
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                <vs-row vs-justify="center">
                  <vs-col
                    type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-w="11"
                  >
                    <vs-card class="con-vs-cards">
                      <div slot="header">
                        <h6 class="card-title text-center">
                          Colaboradores Asignados
                        </h6>
                      </div>
                      <div>
                        <span
                          class="material-icons mb-0 mt-5"
                          style="
                            font-size: 70px;
                            color: #ff5000;
                            border-radius: 10px;
                          "
                        >
                          people</span
                        >
                        <span
                          class="ml-5 mb-3"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >{{ user }}</span
                        >
                      </div>
                    </vs-card>
                  </vs-col>
                </vs-row>
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                <vs-row vs-justify="center">
                  <vs-col
                    type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-w="11"
                  >
                    <vs-card class="con-vs-cards">
                      <div slot="header">
                        <h6 class="card-title text-center">
                          R.O. Abiertos Hoy
                        </h6>
                      </div>
                      <div>
                        <span
                          class="material-icons mt-5"
                          style="
                            font-size: 70px;
                            color: #ff5000;
                            border-radius: 10px;
                          "
                        >
                          inventory
                        </span>
                        <span
                          class="ml-5 mt-5 mb-3"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >{{ ro }}</span
                        >
                      </div>
                    </vs-card>
                  </vs-col>
                </vs-row>
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                <vs-row vs-justify="center">
                  <vs-col
                    type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-w="11"
                  >
                    <vs-card class="con-vs-cards">
                      <div slot="header">
                        <h6 class="card-title text-center">
                          R.O. Pendientes Hoy
                        </h6>
                      </div>
                      <div>
                        <span
                          class="material-icons mt-5"
                          style="
                            font-size: 70px;
                            color: #ff5000;
                            border-radius: 10px;
                          "
                        >
                          watch_later
                        </span>
                        <span
                          class="ml-5 mb-3"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >{{ roPending }}</span
                        >
                      </div>
                    </vs-card>
                  </vs-col>
                </vs-row>
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                <vs-row vs-justify="center">
                  <vs-col
                    type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-w="11"
                  >
                    <vs-card class="con-vs-cards">
                      <div slot="header">
                        <h6 class="card-title text-center">
                          R.O. Cerrados Hoy
                        </h6>
                      </div>
                      <div>
                        <span
                          class="material-icons mt-5"
                          style="
                            font-size: 70px;
                            color: #ff5000;
                            border-radius: 10px;
                          "
                        >
                          archive
                        </span>
                        <span
                          class="ml-5 mb-3"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >{{ roClose }}</span
                        >
                      </div>
                    </vs-card>
                  </vs-col>
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
            <vs-tabs :color="colorx">
              <vs-tab label="Primera Linea">
                <div class="con-tab-ejemplo">
                  <vs-table :data="userFirstLine">
                    <template slot="header"> </template>
                    <template slot="thead">
                      <vs-th> # </vs-th>
                      <vs-th> División </vs-th>
                      <vs-th> Sucursal </vs-th>
                      <vs-th> Genero </vs-th>
                      <vs-th> Estado </vs-th>
                      <vs-th> Perfil </vs-th>
                      <vs-th> Nombres </vs-th>
                      <vs-th> Apellidos </vs-th>
                      <vs-th> Identidficación </vs-th>
                      <vs-th> Correo </vs-th>
                      <vs-th> Fecha Nacimiento </vs-th>
                      <vs-th> Numero De Contacto </vs-th>
                      <vs-th> Id House </vs-th>
                      <vs-th> Operación </vs-th>
                      <vs-th>Acciones</vs-th>
                    </template>

                    <template slot-scope="{ data }">
                      <vs-tr
                        :key="indextr"
                        v-for="(tr, indextr) in userFirstLine"
                      >
                        <vs-td :data="data[indextr].id">
                          {{ data[indextr].id }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameDivision">
                          {{ data[indextr].nameDivision }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameBranchOffice">
                          {{ data[indextr].nameBranchOffice }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameGender">
                          {{ data[indextr].nameGender }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameStatus">
                          {{ data[indextr].nameStatus }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameRol">
                          {{ data[indextr].nameRol }}
                        </vs-td>
                        <vs-td :data="data[indextr].first_name">
                          {{ data[indextr].first_name }}
                        </vs-td>
                        <vs-td :data="data[indextr].last_name">
                          {{ data[indextr].last_name }}
                        </vs-td>
                        <vs-td :data="data[indextr].identification">
                          {{ data[indextr].identification }}
                        </vs-td>
                        <vs-td :data="data[indextr].email">
                          {{ data[indextr].email }}
                        </vs-td>
                        <vs-td :data="data[indextr].date_of_birth">
                          {{ data[indextr].date_of_birth }}
                        </vs-td>
                        <vs-td :data="data[indextr].contact_cell_phone">
                          {{ data[indextr].contact_cell_phone }}
                        </vs-td>
                        <vs-td :data="data[indextr].id_house_bl_person">
                          {{ data[indextr].id_house_bl_person }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameOperation">
                          {{ data[indextr].nameOperation }}
                        </vs-td>
                        <vs-td :data="data[indextr].id">
                          <vs-button
                            class="mr-1 ml-1"
                            @click="openModal(data[indextr].id)"
                            radius
                            color="primary"
                            type="border"
                            icon="visibility"
                          ></vs-button
                        ></vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-tab>
              <vs-tab label="Segunda Linea">
                <div class="con-tab-ejemplo">
                  <vs-table :data="userSecondLine">
                    <template slot="header"> </template>
                    <template slot="thead">
                      <vs-th> # </vs-th>
                      <vs-th> División </vs-th>
                      <vs-th> Sucursal </vs-th>
                      <vs-th> Genero </vs-th>
                      <vs-th> Estado </vs-th>
                      <vs-th> Perfil </vs-th>
                      <vs-th> Cargo </vs-th>
                      <vs-th> Nombres </vs-th>
                      <vs-th> Apellidos </vs-th>
                      <vs-th> Nombre COmpleto </vs-th>
                      <vs-th> Identidficación </vs-th>
                      <vs-th> Correo </vs-th>
                      <vs-th> Fecha Nacimiento </vs-th>
                      <vs-th> Numero De Contacto </vs-th>
                      <vs-th> Id House </vs-th>
                      <vs-th> Operación </vs-th>
                      <vs-th>Acciones</vs-th>
                    </template>

                    <template slot-scope="{ data }">
                      <vs-tr
                        :key="indextr"
                        v-for="(tr, indextr) in userSecondLine"
                      >
                        <vs-td :data="data[indextr].id">
                          {{ data[indextr].id }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameDivision">
                          {{ data[indextr].nameDivision }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameBranchOffice">
                          {{ data[indextr].nameBranchOffice }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameGender">
                          {{ data[indextr].nameGender }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameStatus">
                          {{ data[indextr].nameStatus }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameRol">
                          {{ data[indextr].nameRol }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameCharge">
                          {{ data[indextr].nameCharge }}
                        </vs-td>
                        <vs-td :data="data[indextr].first_name">
                          {{ data[indextr].first_name }}
                        </vs-td>
                        <vs-td :data="data[indextr].last_name">
                          {{ data[indextr].last_name }}
                        </vs-td>
                        <vs-td :data="data[indextr].full_name">
                          {{ data[indextr].full_name }}
                        </vs-td>
                        <vs-td :data="data[indextr].identification">
                          {{ data[indextr].identification }}
                        </vs-td>
                        <vs-td :data="data[indextr].email">
                          {{ data[indextr].email }}
                        </vs-td>
                        <vs-td :data="data[indextr].date_of_birth">
                          {{ data[indextr].date_of_birth }}
                        </vs-td>
                        <vs-td :data="data[indextr].contact_cell_phone">
                          {{ data[indextr].contact_cell_phone }}
                        </vs-td>
                        <vs-td :data="data[indextr].id_house_bl_person">
                          {{ data[indextr].id_house_bl_person }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameOperation">
                          {{ data[indextr].nameOperation }}
                        </vs-td>
                        <vs-td>
                          <vs-button
                            class="mr-1 ml-1"

                            radius
                            color="primary"
                            type="border"
                            icon="visibility"
                          ></vs-button>
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-tab>
              <vs-tab label="Tercera Linea">
                <div class="con-tab-ejemplo">
                  <vs-table :data="userThirdLine">
                    <template slot="header"> </template>
                    <template slot="thead">
                      <vs-th> # </vs-th>
                      <vs-th> División </vs-th>
                      <vs-th> Sucursal </vs-th>
                      <vs-th> Genero </vs-th>
                      <vs-th> Estado </vs-th>
                      <vs-th> Perfil </vs-th>
                      <vs-th> Cargo </vs-th>
                      <vs-th> Nombres </vs-th>
                      <vs-th> Apellidos </vs-th>
                      <vs-th> Nombre COmpleto </vs-th>
                      <vs-th> Identidficación </vs-th>
                      <vs-th> Correo </vs-th>
                      <vs-th> Fecha Nacimiento </vs-th>
                      <vs-th> Numero De Contacto </vs-th>
                      <vs-th> Id House </vs-th>
                      <vs-th> Operación </vs-th>
                      <vs-th>Acciones</vs-th>
                    </template>

                    <template slot-scope="{ data }">
                      <vs-tr
                        :key="indextr"
                        v-for="(tr, indextr) in userThirdLine"
                      >
                        <vs-td :data="data[indextr].id">
                          {{ data[indextr].id }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameDivision">
                          {{ data[indextr].nameDivision }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameBranchOffice">
                          {{ data[indextr].nameBranchOffice }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameGender">
                          {{ data[indextr].nameGender }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameStatus">
                          {{ data[indextr].nameStatus }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameRol">
                          {{ data[indextr].nameRol }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameCharge">
                          {{ data[indextr].nameCharge }}
                        </vs-td>
                        <vs-td :data="data[indextr].first_name">
                          {{ data[indextr].first_name }}
                        </vs-td>
                        <vs-td :data="data[indextr].last_name">
                          {{ data[indextr].last_name }}
                        </vs-td>
                        <vs-td :data="data[indextr].full_name">
                          {{ data[indextr].full_name }}
                        </vs-td>
                        <vs-td :data="data[indextr].identification">
                          {{ data[indextr].identification }}
                        </vs-td>
                        <vs-td :data="data[indextr].email">
                          {{ data[indextr].email }}
                        </vs-td>
                        <vs-td :data="data[indextr].date_of_birth">
                          {{ data[indextr].date_of_birth }}
                        </vs-td>
                        <vs-td :data="data[indextr].contact_cell_phone">
                          {{ data[indextr].contact_cell_phone }}
                        </vs-td>
                        <vs-td :data="data[indextr].id_house_bl_person">
                          {{ data[indextr].id_house_bl_person }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameOperation">
                          {{ data[indextr].nameOperation }}
                        </vs-td>
                        <vs-td>
                          <vs-button
                            class="mr-1 ml-1"

                            radius
                            color="primary"
                            type="border"
                            icon="visibility"
                          ></vs-button>
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-tab>
            </vs-tabs>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-prompt
      :title="'Actividad del usuario Hoy'"
      accept-text="Aceptar"
      cancel-text="Cancelar"
      @cancel="val = ''"
      @accept="acceptAlert"
      @close="close"
      :active.sync="activePrompt"
    >
      <div class="con-exemple-prompt mt-5">
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
              <vs-row vs-justify="center">
                <vs-col
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="11"
                >
                  <span>abiertos</span>
                  <div>
                    <span
                      class="material-icons mt-5"
                      style="
                        font-size: 70px;
                        color: #ff5000;
                        border-radius: 10px;
                      "
                    >
                      inventory
                    </span>
                    <span
                      class="ml-5 mt-5 mb-3"
                      style="
                        margin-top: -50px !important;
                        display: block;
                        margin-left: 150px !important;
                        font-size: 20px;
                      "
                      >{{ rosUserId }}</span
                    >
                  </div>
                </vs-col>
              </vs-row>
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="3"
            >
              <vs-row vs-justify="center">
                <vs-col
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="11"
                >
                <span>Pendientes</span>
                  <div>
                    <span
                      class="material-icons mt-5"
                      style="
                        font-size: 70px;
                        color: #ff5000;
                        border-radius: 10px;
                      "
                    >
                      watch_later
                    </span>
                    <span
                      class="ml-5 mb-3"
                      style="
                        margin-top: -50px !important;
                        display: block;
                        margin-left: 150px !important;
                        font-size: 20px;
                      "
                      >{{ roPendingUserId }}</span
                    >
                  </div>
                </vs-col>
              </vs-row>
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="3"
            >
              <vs-row vs-justify="center">
                <vs-col
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="11"
                >
                <span>Cerrados</span>

                  <div>
                    <span
                      class="material-icons mt-5"
                      style="
                        font-size: 70px;
                        color: #ff5000;
                        border-radius: 10px;
                      "
                    >
                      archive
                    </span>
                    <span
                      class="ml-5 mb-3"
                      style="
                        margin-top: -50px !important;
                        display: block;
                        margin-left: 150px !important;
                        font-size: 20px;
                      "
                      >{{ roCloseUserId }}</span
                    >
                  </div>
                </vs-col>
              </vs-row>
            </vs-col>
          </vs-col>
        </vs-row>
      </div>
    </vs-prompt>
  </div>
</template>
<script>
import { dominio } from "../dominio.js";
export default {
  created() {
    this.showLineUsers();
  },
  data() {
    return {
      colorx: "#ff5000",
      userFirstLine: {},
      userSecondLine: {},
      userThirdLine: {},
      activePrompt: false,
      roPending: {},
      roClose: {},
      user: {},
      ro: {},
      rosUserId: {}
    };
  },
  methods: {
    openModal(id) {
      this.activePrompt = true;
      this.data = id;
    },
    deatilOperation() {
      this.$router.push("/panel/show-detail-operation");
    },
    returnHome() {
      this.$router.push("/panel");
    },
    showLineUsers() {
      let url = dominio.url + "/api/mostrar-usuarios-lineas";
      axios.get(url).then((res) => {
        this.userFirstLine = res.data.userFirstLine;
        this.userSecondLine = res.data.userSecondLine;
        this.userThirdLine = res.data.userThirdLine;
        this.user = res.data.user;
        this.ro = res.data.ro;
        this.roPending = res.data.roPending;
        this.roClose = res.data.roClose;
        this.rosUserId = res.data.rosUserId;
        this.roPendingUserId = res.data.roPendingUserId;
        this.roCloseUserId = res.data.roCloseUserId;
      });
    },
    acceptAlert(color) {
      this.$vs.notify({
        color: "success",
        title: "Dialogo",
        text: "Cerrado",
      });
    },
    close() {
      this.$vs.notify({
        color: "danger",
        title: "Dialogo",
        text: "Cerrado",
      });
    },
  },
};
</script>
<style>
.vs-dialog {
  max-width: 850px !important;
}
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
  border: 1px solid#ff5000;
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
