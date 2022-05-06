<template>
  <div>
    <vs-button
      class="buttonColor mb-5"
      color="primary"
      type="relief"
      icon="home"
      @click="returnHome()"
      >Volver a Inicio</vs-button
    >
    <vs-tabs :color="colorx">
      <vs-tab
        @click="colorx = 'white'"
        icon="directions_boat"
        label=""
        >
        <!-- v-if="showUserAuth[0].permissions[16].name == 'VER RESUMEN AREA MARITIMO' || showUserAuth[0].permissions[39].name == 'VER RESUMEN AREA MARITIMO'" -->

        <div class="con-tab-ejemplo">
          <vs-row vs-justify="center" class="mt-5">
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
              <vs-card class="con-vs-cards">
                <div slot="header"></div>
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
                                Usuarios Activos
                              </h6>
                            </div>
                            <div>
                              <span
                                class="material-icons"
                                style="
                                  font-size: 70px;
                                  color: #ff6600;
                                  border-radius: 10px;
                                "
                              >
                                people</span
                              >
                              <span
                                class="ml-5"
                                style="
                                  margin-top: -50px !important;
                                  display: block;
                                  margin-left: 150px !important;
                                  font-size: 20px;
                                "
                                >90</span
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
                                Notificaciones Área
                              </h6>
                            </div>
                            <div>
                              <span
                                class="material-icons"
                                style="
                                  font-size: 70px;
                                  color: #ff6600;
                                  border-radius: 10px;
                                "
                              >
                                message
                              </span>
                              <span
                                class="ml-5"
                                style="
                                  margin-top: -50px !important;
                                  display: block;
                                  margin-left: 150px !important;
                                  font-size: 20px;
                                "
                                >90</span
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
                                Correos Enviados
                              </h6>
                            </div>
                            <div>
                              <span
                                class="material-icons"
                                style="
                                  font-size: 70px;
                                  color: #ff6600;
                                  border-radius: 10px;
                                "
                              >
                                email
                              </span>
                              <span
                                class="ml-5"
                                style="
                                  margin-top: -50px !important;
                                  display: block;
                                  margin-left: 150px !important;
                                  font-size: 20px;
                                "
                                >90</span
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
                                Seguimientos Realizados
                              </h6>
                            </div>
                            <div>
                              <span
                                class="material-icons"
                                style="
                                  font-size: 70px;
                                  color: #ff6600;
                                  border-radius: 10px;
                                "
                              >
                                edit
                              </span>
                              <span
                                class="ml-5"
                                style="
                                  margin-top: -50px !important;
                                  display: block;
                                  margin-left: 150px !important;
                                  font-size: 20px;
                                "
                                >90</span
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
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="6"
            >
              <vs-row vs-justify="center">
                <vs-col
                  class="mt-3 mb-3"
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <h4>Total Registros Abiertos</h4>
                </vs-col>
                <vs-col
                  class="ml-1 mr-1"
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <vs-card class="con-vs-cards">
                    <div slot="header"></div>
                    <div>
                      <vs-row>
                        <vs-col
                          class="mt-3 mb-3"
                          vs-type="flex"
                          vs-justify="center"
                          vs-align="center"
                          vs-w="12"
                        >
                          <h1>484</h1>
                        </vs-col>
                      </vs-row>
                    </div>
                    <div>
                      <vs-row>
                        <vs-col
                          class="mt-3 mb-3"
                          vs-type="flex"
                          vs-justify="center"
                          vs-align="center"
                          vs-w="12"
                        >
                          <p style="color: gray">29,57% Total Registros DB</p>
                        </vs-col>
                      </vs-row>
                    </div>
                    <div>
                      <vs-row>
                        <vs-col
                          class="mt-3 mb-3"
                          vs-type="flex"
                          vs-justify="center"
                          vs-align="center"
                          vs-w="12"
                        >
                          <h6>Fecha Consulta: 2022-03-15 14:18:55</h6>
                        </vs-col>
                      </vs-row>
                    </div>
                    <div>
                      <vs-row>
                        <vs-col
                          vs-type="flex"
                          vs-justify="center"
                          vs-align="center"
                          vs-w="12"
                        >
                          <apexchart
                            width="444"
                            type="bar"
                            :options="options"
                            :series="series"
                          ></apexchart>
                        </vs-col>
                      </vs-row>
                    </div>
                  </vs-card>
                </vs-col>
              </vs-row>
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="6"
            >
              <vs-row vs-justify="center">
                <vs-col
                  class="mt-3 mb-3"
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <h4>Tipos De Envio</h4>
                </vs-col>
                <vs-col
                  class="ml-1 mr-1"
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <vs-card class="con-vs-cards">
                    <div slot="header"></div>
                    <div>
                      <vs-row>
                        <vs-col
                          vs-type="flex"
                          vs-justify="center"
                          vs-align="center"
                          vs-w="12"
                        >
                          <graphic
                            class="mt-5 mb-3"
                            titulo="Tipos De Envio"
                            :arrayData="TypeSendArray"
                            :labels="TypeSendLabel"
                            type="bar"
                            :key="1"
                            style="width: 500px"
                          />
                        </vs-col>
                      </vs-row>
                    </div>
                    <div>
                      <vs-row>
                        <vs-col
                          class="mt-3 mb-3"
                          vs-type="flex"
                          vs-justify="left"
                          vs-align="center"
                          vs-w="12"
                        >
                          <vs-progress :percent="20" color="primary"
                            >primary</vs-progress
                          >
                        </vs-col>
                        <vs-col
                          class="mt-3 mb-3"
                          vs-type="flex"
                          vs-justify="left"
                          vs-align="center"
                          vs-w="12"
                        >
                          <vs-progress :percent="70" color="warning"
                            >warning</vs-progress
                          >
                        </vs-col>
                      </vs-row>
                    </div>
                  </vs-card>
                </vs-col>
              </vs-row>
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="6"
            >
              <vs-row vs-justify="center">
                <vs-col
                  class="mt-3 mb-5"
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <h4>Cantidad Tipificaciones Últimos 5 Meses</h4>
                </vs-col>
                <vs-col
                  class="ml-1 mr-1"
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <vs-card class="con-vs-cards">
                    <div slot="header"></div>
                    <div>
                      <vs-row>
                        <vs-col
                          vs-type="flex"
                          vs-justify="center"
                          vs-align="center"
                          vs-w="12"
                        >
                          <apexchart
                            type="area"
                            width="500"
                            height="350"
                            :options="chartOptions"
                            :series="series2"
                          ></apexchart>
                        </vs-col>
                      </vs-row>
                    </div>
                  </vs-card>
                </vs-col>
              </vs-row>
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="6"
            >
              <vs-row vs-justify="center">
                <vs-col
                  class="mt-3 mb-5"
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <h4>Rango En Días, Casos Abiertos Sin Seguimiento</h4>
                </vs-col>
                <vs-col
                  class="ml-1 mr-1"
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <vs-card class="con-vs-cards">
                    <div slot="header"></div>
                    <div>
                      <vs-row>
                        <vs-col
                          vs-type="flex"
                          vs-justify="center"
                          vs-align="center"
                          vs-w="12"
                        >
                          <apexchart
                            type="radialBar"
                            height="390"
                            :options="chartOptions1"
                            :series="series3"
                          ></apexchart>
                        </vs-col>
                      </vs-row>
                    </div>
                  </vs-card>
                </vs-col>
              </vs-row>
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-card class="con-vs-cards">
                <div slot="header"></div>
                <div>
                  <vs-table :data="users">
                    <template slot="header"> </template>
                    <template slot="thead">
                      <vs-th> Email </vs-th>
                      <vs-th> Name </vs-th>
                      <vs-th> Website </vs-th>
                      <vs-th> Nro </vs-th>
                    </template>

                    <template slot-scope="{ data }">
                      <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                        <vs-td :data="data[indextr].email">
                          {{ data[indextr].email }}
                        </vs-td>

                        <vs-td :data="data[indextr].username">
                          {{ data[indextr].name }}
                        </vs-td>

                        <vs-td :data="data[indextr].id">
                          {{ data[indextr].id }}
                        </vs-td>

                        <vs-td :data="data[indextr].id">
                          {{ data[indextr].website }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-card>
            </vs-col>
          </vs-row>
        </div>
      </vs-tab>
      <vs-tab
        @click="colorx = 'white'"
        icon="local_shipping"
        label="">
        <!-- v-if="showUserAuth[0].permissions[17].name == 'VER RESUMEN AREA TERRESTRE' || showUserAuth[0].permissions[40].name == 'VER RESUMEN AREA TERRESTRE'" -->
        <div class="con-tab-ejemplo">
          <vs-row vs-justify="center" class="mt-5">
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
              <vs-card class="con-vs-cards">
                <div slot="header"></div>
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
                                Usuarios Activos
                              </h6>
                            </div>
                            <div>
                              <span
                                class="material-icons"
                                style="
                                  font-size: 70px;
                                  color: #ff6600;
                                  border-radius: 10px;
                                "
                              >
                                people</span
                              >
                              <span
                                class="ml-5"
                                style="
                                  margin-top: -50px !important;
                                  display: block;
                                  margin-left: 150px !important;
                                  font-size: 20px;
                                "
                                >90</span
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
                                Notificaciones Área
                              </h6>
                            </div>
                            <div>
                              <span
                                class="material-icons"
                                style="
                                  font-size: 70px;
                                  color: #ff6600;
                                  border-radius: 10px;
                                "
                              >
                                message
                              </span>
                              <span
                                class="ml-5"
                                style="
                                  margin-top: -50px !important;
                                  display: block;
                                  margin-left: 150px !important;
                                  font-size: 20px;
                                "
                                >90</span
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
                                Correos Enviados
                              </h6>
                            </div>
                            <div>
                              <span
                                class="material-icons"
                                style="
                                  font-size: 70px;
                                  color: #ff6600;
                                  border-radius: 10px;
                                "
                              >
                                email
                              </span>
                              <span
                                class="ml-5"
                                style="
                                  margin-top: -50px !important;
                                  display: block;
                                  margin-left: 150px !important;
                                  font-size: 20px;
                                "
                                >90</span
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
                                Seguimientos Realizados
                              </h6>
                            </div>
                            <div>
                              <span
                                class="material-icons"
                                style="
                                  font-size: 70px;
                                  color: #ff6600;
                                  border-radius: 10px;
                                "
                              >
                                edit
                              </span>
                              <span
                                class="ml-5"
                                style="
                                  margin-top: -50px !important;
                                  display: block;
                                  margin-left: 150px !important;
                                  font-size: 20px;
                                "
                                >90</span
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
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="6"
            >
              <vs-row vs-justify="center">
                <vs-col
                  class="ml-1 mr-1"
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <vs-card class="con-vs-cards">
                    <div slot="header">
                      <h3>Hello world !</h3>
                    </div>
                    <div>
                      <span
                        >Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.</span
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
              vs-w="6"
            >
              <vs-row vs-justify="center">
                <vs-col
                  class="ml-1 mr-1"
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <vs-card class="con-vs-cards">
                    <div slot="header">
                      <h3>Hello world !</h3>
                    </div>
                    <div>
                      <span
                        >Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.</span
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
              vs-w="6"
            >
              <vs-row vs-justify="center">
                <vs-col
                  class="ml-1 mr-1"
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <vs-card class="con-vs-cards">
                    <div slot="header">
                      <h3>Hello world !</h3>
                    </div>
                    <div>
                      <span
                        >Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.</span
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
              vs-w="6"
            >
              <vs-row vs-justify="center">
                <vs-col
                  class="ml-1 mr-1"
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <vs-card class="con-vs-cards">
                    <div slot="header">
                      <h3>Hello world !</h3>
                    </div>
                    <div>
                      <span
                        >Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.</span
                      >
                    </div>
                  </vs-card>
                </vs-col>
              </vs-row>
            </vs-col>
          </vs-row>
        </div>
      </vs-tab>
      <vs-tab
        @click="colorx = 'white'"
        label=""
        icon="flight_takeoff"
      >
        <!-- v-if="showUserAuth[0].permissions[41].name == 'VER RESUMEN AREA AEREO'" -->

        <div class="con-tab-ejemplo">
          <vs-row vs-justify="center" class="mt-5">
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
              <vs-card class="con-vs-cards">
                <div slot="header"></div>
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
                                Usuarios Activos
                              </h6>
                            </div>
                            <div>
                              <span
                                class="material-icons"
                                style="
                                  font-size: 70px;
                                  color: #ff6600;
                                  border-radius: 10px;
                                "
                              >
                                people</span
                              >
                              <span
                                class="ml-5"
                                style="
                                  margin-top: -50px !important;
                                  display: block;
                                  margin-left: 150px !important;
                                  font-size: 20px;
                                "
                                >90</span
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
                                Notificaciones Área
                              </h6>
                            </div>
                            <div>
                              <span
                                class="material-icons"
                                style="
                                  font-size: 70px;
                                  color: #ff6600;
                                  border-radius: 10px;
                                "
                              >
                                message
                              </span>
                              <span
                                class="ml-5"
                                style="
                                  margin-top: -50px !important;
                                  display: block;
                                  margin-left: 150px !important;
                                  font-size: 20px;
                                "
                                >90</span
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
                                Correos Enviados
                              </h6>
                            </div>
                            <div>
                              <span
                                class="material-icons"
                                style="
                                  font-size: 70px;
                                  color: #ff6600;
                                  border-radius: 10px;
                                "
                              >
                                email
                              </span>
                              <span
                                class="ml-5"
                                style="
                                  margin-top: -50px !important;
                                  display: block;
                                  margin-left: 150px !important;
                                  font-size: 20px;
                                "
                                >90</span
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
                                Seguimientos Realizados
                              </h6>
                            </div>
                            <div>
                              <span
                                class="material-icons"
                                style="
                                  font-size: 70px;
                                  color: #ff6600;
                                  border-radius: 10px;
                                "
                              >
                                edit
                              </span>
                              <span
                                class="ml-5"
                                style="
                                  margin-top: -50px !important;
                                  display: block;
                                  margin-left: 150px !important;
                                  font-size: 20px;
                                "
                                >90</span
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
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="6"
            >
              <vs-row vs-justify="center">
                <vs-col
                  class="ml-1 mr-1"
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <vs-card class="con-vs-cards">
                    <div slot="header">
                      <h3>Hello world !</h3>
                    </div>
                    <div>
                      <span
                        >Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.</span
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
              vs-w="6"
            >
              <vs-row vs-justify="center">
                <vs-col
                  class="ml-1 mr-1"
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <vs-card class="con-vs-cards">
                    <div slot="header">
                      <h3>Hello world !</h3>
                    </div>
                    <div>
                      <span
                        >Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.</span
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
              vs-w="6"
            >
              <vs-row vs-justify="center">
                <vs-col
                  class="ml-1 mr-1"
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <vs-card class="con-vs-cards">
                    <div slot="header">
                      <h3>Hello world !</h3>
                    </div>
                    <div>
                      <span
                        >Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.</span
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
              vs-w="6"
            >
              <vs-row vs-justify="center">
                <vs-col
                  class="ml-1 mr-1"
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <vs-card class="con-vs-cards">
                    <div slot="header">
                      <h3>Hello world !</h3>
                    </div>
                    <div>
                      <span
                        >{{ openRoUsers[0].rol_2 }}</span
                      >
                    </div>
                  </vs-card>
                </vs-col>
              </vs-row>
            </vs-col>
          </vs-row>
        </div>
      </vs-tab>
    </vs-tabs>

  </div>
</template>
<script>
import Graphic from "./Graphic.vue";
import { dominio } from "../dominio.js";
export default {
  components: { Graphic },
  data() {
    return {
      showUserAuth: [],
      TypeSendArray: [],
      TypeSendLabel: [],
      colorx: "white",
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        },
      },
      series: [
        {
          name: "aqui va otro array de los nombres",
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
      ],
      options1: {},
      nose: [44, 55, 41, 17, 15],
      series2: [
        {
          name: "north",
          data: [
            {
              x: 1996,
              y: 322,
            },
            {
              x: 1997,
              y: 324,
            },
            {
              x: 1998,
              y: 329,
            },
            {
              x: 1999,
              y: 342,
            },
            {
              x: 2000,
              y: 348,
            },
            {
              x: 2001,
              y: 334,
            },
            {
              x: 2002,
              y: 325,
            },
            {
              x: 2003,
              y: 316,
            },
            {
              x: 2004,
              y: 318,
            },
            {
              x: 2005,
              y: 330,
            },
            {
              x: 2006,
              y: 355,
            },
            {
              x: 2007,
              y: 366,
            },
            {
              x: 2008,
              y: 337,
            },
            {
              x: 2009,
              y: 352,
            },
            {
              x: 2010,
              y: 377,
            },
            {
              x: 2011,
              y: 383,
            },
            {
              x: 2012,
              y: 344,
            },
            {
              x: 2013,
              y: 366,
            },
            {
              x: 2014,
              y: 389,
            },
            {
              x: 2015,
              y: 334,
            },
          ],
        },
        {
          name: "south",
          data: [
            {
              x: 1996,
              y: 162,
            },
            {
              x: 1997,
              y: 90,
            },
            {
              x: 1998,
              y: 50,
            },
            {
              x: 1999,
              y: 77,
            },
            {
              x: 2000,
              y: 35,
            },
            {
              x: 2001,
              y: -45,
            },
            {
              x: 2002,
              y: -88,
            },
            {
              x: 2003,
              y: -120,
            },
            {
              x: 2004,
              y: -156,
            },
            {
              x: 2005,
              y: -123,
            },
            {
              x: 2006,
              y: -88,
            },
            {
              x: 2007,
              y: -66,
            },
            {
              x: 2008,
              y: -45,
            },
            {
              x: 2009,
              y: -29,
            },
            {
              x: 2010,
              y: -45,
            },
            {
              x: 2011,
              y: -88,
            },
            {
              x: 2012,
              y: -132,
            },
            {
              x: 2013,
              y: -146,
            },
            {
              x: 2014,
              y: -169,
            },
            {
              x: 2015,
              y: -184,
            },
          ],
        },
      ],
      chartOptions: {
        chart: {
          type: "area",
          height: 350,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },

        title: {
          text: "Area with Negative Values",
          align: "left",
          style: {
            fontSize: "14px",
          },
        },
        xaxis: {
          type: "datetime",
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          tickAmount: 4,
          floating: false,

          labels: {
            style: {
              colors: "#8e8da4",
            },
            offsetY: -7,
            offsetX: 0,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        fill: {
          opacity: 0.5,
        },
        tooltip: {
          x: {
            format: "yyyy",
          },
          fixed: {
            enabled: false,
            position: "topRight",
          },
        },
        grid: {
          yaxis: {
            lines: {
              offsetX: -30,
            },
          },
          padding: {
            left: 20,
          },
        },
      },
      series3: [76, 67, 61, 90],
      chartOptions1: {
        chart: {
          height: 390,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        colors: ["#ff6600", "#ffffff", "rgb(0, 143, 251)", "#0077B5"],
        labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
        legend: {
          show: true,
          floating: true,
          fontSize: "16px",
          position: "right",
          offsetX: 120,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0,
          },
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            vertical: 3,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              },
            },
          },
        ],
      },
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          website: "hildegard.org",
        },
      ],
      openRoUsers: [],
    };
  },
  created() {
    this.graphifTypeSend();
    this.showUserAuthentificated();
    this.graphicOpenRegisters();
  },
  methods: {
    returnHome() {
      this.$router.push("/panel");
    },
    graphifTypeSend() {
      let url = dominio.url + "/api/consultar-tipos-envio-grafica";
      axios.get(url).then((res) => {
        var TypeSendArray = res.data.TypeSendArray;
        var TypeSendLabel = res.data.TypeSendLabel;
        TypeSendLabel.forEach((element) => {
          this.TypeSendLabel.push(element);
        });
        var x = Object.values(TypeSendArray);
        x.forEach((element) => {
          console.log("element", element);
          this.TypeSendArray.push(
            {
              data: [element.EXPORTACIÓN],
            },
            {
              data: [element.IMPORTACIÓN],
            }
          );
        });
      });
    },
    showUserAuthentificated() {
      let url = dominio.url + "/api/mostar-usuario-autentificado";
      axios.get(url).then((res) => {
        this.showUserAuth = res.data.showUserAuth;
      });
    },
    graphicOpenRegisters() {
      let url = dominio.url + "/api/consultar-tipos-envio-grafica-registros-abiertos";
      axios.get(url).then((res) => {
        this.openRoUsers = res.data.openRoUsers;
      });
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
</style>
