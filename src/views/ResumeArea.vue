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
      <vs-tab @click="colorx = 'white'" icon="directions_boat" label="">
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
                                  color: #ff5000;
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
                                  color: #ff5000;
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
                                  color: #ff5000;
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
                                  color: #ff5000;
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
                    </div>
                    <div>
                      <vs-row>
                        <vs-col
                          class="mt-3 mb-3"
                          vs-type="flex"
                          vs-justify="left"
                          vs-align="center"
                          vs-w="6"
                        >
                          <h4>Total Registros Abiertos</h4>
                        </vs-col>
                        <vs-col
                          vs-type="flex"
                          vs-justify="center"
                          vs-align="center"
                          vs-w="6"
                        >
                         aqui van las graficas
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
                          vs-w="6"
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
                          vs-justify="left"
                          vs-align="center"
                          vs-w="12"
                        >
                       <p style="color:gray;">29,57% Total Registros DB</p>
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
                       <h6>Fecha Consulta: 2022-03-15 14:18:55</h6>
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
      <vs-tab @click="colorx = 'white'" icon="local_shipping" label="">
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
                                  color: #ff5000;
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
                                  color: #ff5000;
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
                                  color: #ff5000;
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
                                  color: #ff5000;
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
      <vs-tab @click="colorx = 'white'" icon="flight_takeoff" label="">
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
                                  color: #ff5000;
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
                                  color: #ff5000;
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
                                  color: #ff5000;
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
                                  color: #ff5000;
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
    </vs-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colorx: "white",
    };
  },
  methods: {
    returnHome() {
      this.$router.push("/panel");
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
</style>
