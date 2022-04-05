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
                        <h6 class="card-title text-center">R.O. Abiertos</h6>
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
                          v-if="showUserAuth[0].rol_id == 2"
                          class="ml-5 mt-5 mb-3"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >{{ roOpenMaritimeAndInlad }}</span
                        >
                        <span
                          v-if="
                            showUserAuth[0].rol_id == 1 ||
                            showUserAuth[0].rol_id == 9
                          "
                          class="ml-5 mt-5 mb-3"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >{{ countRoAdmin }}</span
                        >
                        <span
                          v-if="showUserAuth[0].rol_id == 3"
                          class="ml-5 mt-5 mb-3"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >{{ roOpenAir }}</span
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
                          v-if="
                            showUserAuth[0].rol_id == 1 ||
                            showUserAuth[0].rol_id == 9
                          "
                          class="ml-5 mb-3"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >{{ roPendingAdmin }}</span
                        >
                        <span
                          v-if="showUserAuth[0].rol_id == 2"
                          class="ml-5 mb-3"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >{{ roPendingMaritimeAndInlad }}</span
                        >
                        <span
                          v-if="showUserAuth[0].rol_id == 3"
                          class="ml-5 mb-3"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >{{ roPendingAir }}</span
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
                        <h6 class="card-title text-center">R.O. Cerrados</h6>
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
                          v-if="
                            showUserAuth[0].rol_id == 1 ||
                            showUserAuth[0].rol_id == 9
                          "
                          class="ml-5 mb-3"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >{{ roCloseAdmin }}</span
                        >
                        <span
                          v-if="showUserAuth[0].rol_id == 2"
                          class="ml-5 mb-3"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >{{ roClosedMaritimeAndInlad }}</span
                        >
                        <span
                          v-if="showUserAuth[0].rol_id == 3"
                          class="ml-5 mb-3"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >{{ roClosedAir }}</span
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
              <vs-tab label="Primera Linea" v-if="showUserAuth[0].rol_id == 1">
                <div class="con-tab-ejemplo">
                  <vs-table :data="userFirstLine">
                    <template slot="header"> </template>
                    <template slot="thead">
                      <vs-th> # </vs-th>
                      <vs-th> División </vs-th>
                      <vs-th> Sucursal </vs-th>
                      <vs-th> Estado </vs-th>
                      <vs-th> Perfil </vs-th>
                      <vs-th> Nombres </vs-th>
                      <vs-th> Apellidos </vs-th>
                      <vs-th> Correo </vs-th>
                      <vs-th> Operación </vs-th>
                      <vs-th> R.O Abiertos </vs-th>
                      <vs-th> R.O Cerrados </vs-th>
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
                        <vs-td :data="data[indextr].email">
                          {{ data[indextr].email }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameOperation">
                          {{ data[indextr].nameOperation }}
                        </vs-td>
                        <vs-td>
                          {{ data[indextr].ro }}
                        </vs-td>
                        <vs-td>
                          {{ data[indextr].roClose }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-tab>
              <vs-tab
                label="Segunda Linea"
                v-if="
                  showUserAuth[0].rol_id == 9 || showUserAuth[0].rol_id == 1
                "
              >
                <div class="con-tab-ejemplo">
                  <vs-table
                    :data="userSecondLine"
                    v-if="showUserAuth[0].rol_id == 1"
                  >
                    <template slot="header"> </template>
                    <template slot="thead">
                      <vs-th> # </vs-th>
                      <vs-th> División </vs-th>
                      <vs-th> Sucursal </vs-th>
                      <vs-th> Estado </vs-th>
                      <vs-th> Perfil </vs-th>
                      <vs-th> Nombres </vs-th>
                      <vs-th> Apellidos </vs-th>
                      <vs-th> Correo </vs-th>
                      <vs-th> Operación </vs-th>
                      <vs-th> R.O Abiertos </vs-th>
                      <vs-th> R.O Cerrados </vs-th>
                    </template>
                    <template
                      slot-scope="{ data }"
                      v-if="showUserAuth[0].rol_id == 1"
                    >
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
                        <vs-td :data="data[indextr].email">
                          {{ data[indextr].email }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameOperation">
                          {{ data[indextr].nameOperation }}
                        </vs-td>
                       <vs-td>
                          {{ data[indextr].ro }}
                        </vs-td>
                        <vs-td>
                          {{ data[indextr].roClose }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                  <vs-table
                    :data="userSecondLines"
                    v-if="showUserAuth[0].rol_id == 9"
                  >
                    <template slot="header"> </template>
                    <template slot="thead">
                      <vs-th> # </vs-th>
                      <vs-th> División </vs-th>
                      <vs-th> Sucursal </vs-th>
                      <vs-th> Estado </vs-th>
                      <vs-th> Perfil </vs-th>
                      <vs-th> Nombres </vs-th>
                      <vs-th> Apellidos </vs-th>
                      <vs-th> Correo </vs-th>
                      <vs-th> Operación </vs-th>
                      <vs-th> R.O Abiertos </vs-th>
                      <vs-th> R.O Cerrados </vs-th>
                    </template>

                    <template
                      slot-scope="{ data }"
                      v-if="showUserAuth[0].rol_id == 9"
                    >
                      <vs-tr
                        :key="indextr"
                        v-for="(tr, indextr) in userSecondLines"
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
                        <vs-td :data="data[indextr].email">
                          {{ data[indextr].email }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameOperation">
                          {{ data[indextr].nameOperation }}
                        </vs-td>
                        <vs-td>
                          {{ data[indextr].ro }}
                        </vs-td>
                        <vs-td>
                          {{ data[indextr].roClose }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-tab>
              <vs-tab label="Tercera Linea" v-if="showUserAuth[0].rol_id == 1">
                <div class="con-tab-ejemplo">
                  <vs-table :data="userThirdLine">
                    <template slot="header"> </template>
                    <template slot="thead">
                      <vs-th> # </vs-th>
                      <vs-th> División </vs-th>
                      <vs-th> Sucursal </vs-th>
                      <vs-th> Estado </vs-th>
                      <vs-th> Perfil </vs-th>
                      <vs-th> Nombres </vs-th>
                      <vs-th> Apellidos </vs-th>
                      <vs-th> Correo </vs-th>
                      <vs-th> Operación </vs-th>
                      <vs-th> R.O Abiertos </vs-th>
                      <vs-th> R.O Cerrados </vs-th>
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
                        <vs-td :data="data[indextr].email">
                          {{ data[indextr].email }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameOperation">
                          {{ data[indextr].nameOperation }}
                        </vs-td>
                       <vs-td>
                          {{ data[indextr].ro }}
                        </vs-td>
                        <vs-td>
                          {{ data[indextr].roClose }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-tab>
              <vs-tab label="Tercera Linea" v-if="showUserAuth[0].rol_id == 9">
                <div class="con-tab-ejemplo">
                  <vs-table :data="userThirdLines">
                    <template slot="header"> </template>
                    <template slot="thead">
                      <vs-th> # </vs-th>
                      <vs-th> División </vs-th>
                      <vs-th> Sucursal </vs-th>
                      <vs-th> Estado </vs-th>
                      <vs-th> Perfil </vs-th>
                      <vs-th> Nombres </vs-th>
                      <vs-th> Apellidos </vs-th>
                      <vs-th> Correo </vs-th>
                      <vs-th> Operación </vs-th>
                      <vs-th> R.O Abiertos </vs-th>
                      <vs-th> R.O Cerrados </vs-th>
                    </template>
                    <template slot-scope="{ data }">
                      <vs-tr
                        :key="indextr"
                        v-for="(tr, indextr) in userThirdLines"
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
                        <vs-td :data="data[indextr].email">
                          {{ data[indextr].email }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameOperation">
                          {{ data[indextr].nameOperation }}
                        </vs-td>
                        <vs-td>
                          {{ data[indextr].ro }}
                        </vs-td>
                        <vs-td>
                          {{ data[indextr].roClose }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-tab>
              <vs-tab label="Tercera Linea" v-if="showUserAuth[0].rol_id == 2">
                <div class="con-tab-ejemplo">
                  <vs-table :data="userThirdLinesAreaMaritime">
                    <template slot="header"> </template>
                    <template slot="thead">
                      <vs-th> # </vs-th>
                      <vs-th> División </vs-th>
                      <vs-th> Sucursal </vs-th>
                      <vs-th> Estado </vs-th>
                      <vs-th> Perfil </vs-th>
                      <vs-th> Nombres </vs-th>
                      <vs-th> Apellidos </vs-th>
                      <vs-th> Correo </vs-th>
                      <vs-th> Operación </vs-th>
                      <vs-th> R.O Abiertos </vs-th>
                      <vs-th> R.O Cerrados </vs-th>
                    </template>
                    <template slot-scope="{ data }">
                      <vs-tr
                        :key="indextr"
                        v-for="(tr, indextr) in userThirdLinesAreaMaritime"
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
                        <vs-td :data="data[indextr].email">
                          {{ data[indextr].email }}
                        </vs-td>
                        <vs-td :data="data[indextr].nameOperation">
                          {{ data[indextr].nameOperation }}
                        </vs-td>
                        <vs-td>
                          {{ data[indextr].ro }}
                        </vs-td>
                        <vs-td>
                          {{ data[indextr].roClose }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-tab>
              <vs-tab label="Tercera Linea" v-if="showUserAuth[0].rol_id == 3">
                <div class="con-tab-ejemplo">
                  <vs-table :data="userThirdLinesAreaAir">
                    <template slot="header"> </template>
                    <template slot="thead">
                      <vs-th> # </vs-th>
                      <vs-th> División </vs-th>
                      <vs-th> Sucursal </vs-th>
                      <vs-th> Estado </vs-th>
                      <vs-th> Perfil </vs-th>
                      <vs-th> Nombres </vs-th>
                      <vs-th> Apellidos </vs-th>
                      <vs-th> Correo </vs-th>
                      <vs-th> Operación </vs-th>
                      <vs-th> R.O Abiertos </vs-th>
                      <vs-th> R.O Cerrados </vs-th>
                    </template>
                    <template slot-scope="{ data }">
                      <vs-tr
                        :key="indextr"
                        v-for="(tr, indextr) in userThirdLinesAreaAir"
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
                        <vs-td :data="data[indextr].email">
                          {{ data[indextr].email }}
                        </vs-td>

                        <vs-td :data="data[indextr].nameOperation">
                          {{ data[indextr].nameOperation }}
                        </vs-td>
                        <vs-td>
                          {{ data[indextr].ro }}
                        </vs-td>
                        <vs-td>
                          {{ data[indextr].roClose }}
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
  </div>
</template>
<script>
import { dominio } from "../dominio.js";
export default {
  created() {
    this.showLineUsers();
    this.showUser();
  },
  data() {
    return {
      colorx: "#ff5000",
      userFirstLine: {},
      userSecondLine: {},
      userSecondLines: {},
      userThirdLines: {},
      userThirdLine: {},
      userThirdLinesAreaMaritime: {},
      userThirdLinesAreaAir: {},
      activePrompt: false,
      roPendingAdmin: {},
      roCloseAdmin: {},
      user: {},
      countRoAdmin: {},
      rosUserId: {},
      showUserAuth: [],
      roOpenMaritimeAndInlad: [],
      roPendingMaritimeAndInlad: [],
      roClosedMaritimeAndInlad: [],
      roOpenAir: [],
      roPendingAir: [],
      roClosedAir: [],
      OpenRoDirector: [],
      OpenRoBossOperations: [],
      OpenRoMaritime: [],
      OpenRoAir: [],
      OpenRoSalesM: [],
      OpenRoInland: [],
      openRoAirOperation: [],
      openRoMaritimeOperation: [],
      openRoSalesEx: [],
      openRoSalesM: [],
      closeRoDirector: [],
      closeRoBossOperations: [],
      closeRoMaritime: [],
      closeRoAir: [],
      closeRoSales: [],
      closeRoSalesMm: [],
      closeRoInland: [],
      closeRoAirOperation: [],
      closeRoMaritimeOperation: [],
      closeRoSalesEx: [],
      closeRoSalesM: [],
    };
  },
  methods: {
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
        this.countRoAdmin = res.data.countRoAdmin;
        this.roPendingAdmin = res.data.roPendingAdmin;
        this.roCloseAdmin = res.data.roCloseAdmin;
        this.rosUserId = res.data.rosUserId;
        this.roPendingUserId = res.data.roPendingUserId;
        this.roCloseUserId = res.data.roCloseUserId;
        this.userSecondLines = res.data.userSecondLines;
        this.userThirdLines = res.data.userThirdLines;
        this.userThirdLinesAreaMaritime = res.data.userThirdLinesAreaMaritime;
        this.userThirdLinesAreaAir = res.data.userThirdLinesAreaAir;
        this.roOpenMaritimeAndInlad = res.data.roOpenMaritimeAndInlad;
        this.roPendingMaritimeAndInlad = res.data.roPendingMaritimeAndInlad;
        this.roClosedMaritimeAndInlad = res.data.roClosedMaritimeAndInlad;
        this.roOpenAir = res.data.roOpenAir;
        this.roPendingAir = res.data.roPendingAir;
        this.roClosedAir = res.data.roClosedAir;
        this.OpenRoDirector = res.data.OpenRoDirector;
        this.OpenRoBossOperations = res.data.OpenRoBossOperations;
        this.OpenRoMaritime = res.data.OpenRoMaritime;
        this.OpenRoAir = res.data.OpenRoAir;
        this.OpenRoSalesM = res.data.OpenRoSalesM;
        this.OpenRoInland = res.data.OpenRoInland;
        this.openRoAirOperation = res.data.openRoAirOperation;
        this.openRoMaritimeOperation = res.data.openRoMaritimeOperation;
        this.openRoSalesEx = res.data.openRoSalesEx;
        this.openRoSalesM = res.data.openRoSalesM;
        this.closeRoDirector = res.data.closeRoDirector;
        this.closeRoBossOperations = res.data.closeRoBossOperations;
        this.closeRoMaritime = res.data.closeRoMaritime;
        this.closeRoAir = res.data.closeRoAir;
        this.closeRoSales = res.data.closeRoSales;
        this.closeRoSalesMm = res.data.closeRoSalesMm;
        this.closeRoInland = res.data.closeRoInland;
        this.closeRoAirOperation = res.data.closeRoAirOperation;
        this.closeRoMaritimeOperation = res.data.closeRoMaritimeOperation;
        this.closeRoSalesEx = res.data.closeRoSalesEx;
        this.closeRoSalesM = res.data.closeRoSalesM;
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
