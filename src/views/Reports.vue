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
            <h6 class="card-title text-center">Reporte Trazabilidad R.O</h6>
          </div>
          <div>
            <form
              action="http://backend-masterline.test/api/descargar-excel-ro"
              method="post"
            >
              <input type="hidden" :value="csrf" />
              <vs-row vs-w="12">
                <vs-col
                  class="mobil"
                  vs-justify="center"
                  vs-align="center"
                  vs-lg="1"
                  vs-sm="1"
                  vs-xs="1"
                >
                </vs-col>
                <vs-col
                  class="mobil"
                  vs-justify="center"
                  vs-align="center"
                  vs-lg="1"
                  vs-sm="1"
                  vs-xs="1"
                >
                </vs-col>
                <vs-col
                  class="mobil"
                  vs-justify="center"
                  vs-align="center"
                  vs-lg="3"
                  vs-sm="3"
                  vs-xs="12"
                >
                  <select
                    name="type_of_transport_id"
                    class="seleccionablesssss escritorio movil"
                  >
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
                  class="mobil"
                  vs-justify="center"
                  vs-align="center"
                  vs-lg="3"
                  vs-sm="3"
                  vs-xs="12"
                >
                  <input
                    class="escritorio movil inputss"
                    type="text"
                    name="ro"
                    placeholder="Escribir ......."
                  />
                </vs-col>
                <vs-col
                  class="mobil"
                  vs-justify="center"
                  vs-align="center"
                  vs-lg="4"
                  vs-sm="4"
                  vs-xs="12"
                >
                  <button type="submit" class="boton_reporte botonCuadrar">
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
              <input type="hidden" name="user_id" :value="showUserAuth[0].id" />

              <vs-row vs-w="12">
                <vs-col
                  vs-type="flex"
                  vs-justify="right"
                  vs-align="right"
                  vs-lg="6"
                  vs-sm="6"
                  vs-xs="12"
                >
                  <select
                    name="type_of_transport_id"
                    class="seleccionablesssss nuevo movilNuevo"
                  >
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
                  vs-type="flex"
                  vs-justify="left"
                  vs-align="left"
                  vs-lg="6"
                  vs-sm="6"
                  vs-xs="12"
                >
                  <button type="submit" class="boton_reporte botonCuadrar2">
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
            <h6 class="card-title text-center">Reporte Correos Enviados R.O</h6>
          </div>
          <div>
            <form
              action="http://backend-masterline.test/api/descargar-excel-email-ro"
              method="post"
            >
              <input type="hidden" :value="csrf" />

              <vs-row vs-w="12">
                <vs-col
                  class="mobil"
                  vs-justify="center"
                  vs-align="center"
                  vs-lg="1"
                  vs-sm="1"
                  vs-xs="1"
                >
                </vs-col>
                <vs-col
                  class="mobil"
                  vs-justify="center"
                  vs-align="center"
                  vs-lg="1"
                  vs-sm="1"
                  vs-xs="1"
                >
                </vs-col>
                <vs-col
                  class="mobil"
                  vs-justify="center"
                  vs-align="center"
                  vs-lg="3"
                  vs-sm="3"
                  vs-xs="12"
                >
                  <select
                    name="type_of_transport_id"
                    class="seleccionablesssss movil escritorio"
                  >
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
                  class="mobil"
                  vs-justify="center"
                  vs-align="center"
                  vs-lg="3"
                  vs-sm="3"
                  vs-xs="12"
                >
                  <input
                    class="movil escritorio inputss"
                    type="text"
                    name="ro"
                    placeholder="Escribir.........."
                    style="border-radius: 5px; border: 1px solid transparent"
                  />
                </vs-col>
                <vs-col
                  class="mobil"
                  vs-justify="center"
                  vs-align="center"
                  vs-lg="4"
                  vs-sm="4"
                  vs-xs="12"
                >
                  <button type="submit" class="boton_reporte botonCuadrar">
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
            <h6 class="card-title text-center">Reporte R.O Con Imagenes</h6>
          </div>
          <div>
            <vs-row vs-w="12">
              <vs-col
                class="mobil"
                vs-justify="center"
                vs-align="center"
                vs-lg="1"
                vs-sm="1"
                vs-xs="1"
              ></vs-col>
              <vs-col
                class="mobil"
                vs-justify="center"
                vs-align="center"
                vs-lg="1"
                vs-sm="1"
                vs-xs="1"
              ></vs-col>
              <vs-col
                class="mobil"
                vs-justify="center"
                vs-align="center"
                vs-lg="1"
                vs-sm="1"
                vs-xs="1"
              ></vs-col>
              <vs-col
                class="mobil"
                vs-justify="center"
                vs-align="center"
                vs-lg="4"
                vs-sm="4"
                vs-xs="12"
              >
                <vs-input
                  class="escritorio movil"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Escribir.............."
                  v-model="formRoImage.ro"
                />
              </vs-col>
              <vs-col
                class="mobil"
                vs-justify="center"
                vs-align="center"
                vs-lg="5"
                vs-sm="5"
                vs-xs="12"
              >
                <vs-button
                  class="buttonColor botonCuadrarLupa"
                  color="primary"
                  type="relief"
                  icon="search"
                  @click="searchRo()"
                ></vs-button>
              </vs-col>
            </vs-row>
          </div>
          <vs-table class="mt-5">
            <template slot="header"> </template>
            <template slot="thead">
              <vs-th> R.O </vs-th>
              <vs-th> Ultima Tipificación </vs-th>
              <vs-th> Origen </vs-th>
              <vs-th> Destino </vs-th>
              <vs-th> Proceso </vs-th>
              <vs-th> Acciones </vs-th>
            </template>
            <template>
              <vs-tr v-for="(item, index) in searchRoImages" :key="index">
                <vs-td>
                  {{ item.ro }}
                </vs-td>
                <vs-td>
                  {{ item.lastTipification }}
                </vs-td>
                <vs-td>
                  {{ item.origin }}
                </vs-td>
                <vs-td>
                  {{ item.final }}
                </vs-td>
                <vs-td>
                  {{ item.process }}
                </vs-td>
                <vs-td>
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
                        vs-w="6"
                      >
                        <vs-button
                          @click="popupActivo4 = true"
                          color="primary"
                          type="border"
                          radius
                          icon="visibility"
                        ></vs-button>
                      </vs-col>
                      <vs-col
                        vs-type="flex"
                        vs-justify="left"
                        vs-align="center"
                        vs-w="6"
                      >
                        <form
                          action="http://backend-masterline.test/api/generar-pdf-trazabilidad"
                          method="post"
                          target="print_popup"
                        >
                          <input type="hidden" :value="csrf" />
                          <input type="hidden" name="id" :value="item.id" />
                          <button
                            type="submit"
                            style="
                              background: transparent;
                              color: #ff5000 !important;
                              border-radius: 30px;
                              width: 38px;
                              height: 38px;
                              border: 1px solid #ff5000 !important;
                              cursor: pointer;
                            "
                          >
                            <span
                              class="material-icons"
                              style="font-size: 20px"
                            >
                              file_download
                            </span>
                          </button>
                        </form>
                      </vs-col>
                    </vs-col>
                  </vs-row>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
          <vs-popup fullscreen title="R.O" :active.sync="popupActivo4">
            <vs-table class="mt-5">
              <template slot="header"> </template>
              <template slot="thead">
                <vs-th> R.O </vs-th>
                <vs-th> Fecha Envio </vs-th>
                <vs-th> Origen </vs-th>
                <vs-th> Destino </vs-th>
                <vs-th> Proceso </vs-th>
                <vs-th> Traza </vs-th>
                <vs-th> Asunto </vs-th>
                <vs-th> Imagenes </vs-th>
              </template>
              <template>
                <vs-tr v-for="(item, index) in process" :key="index">
                  <vs-td>
                    <h6 style="width: 150px !important">{{ item.ro }}</h6>
                  </vs-td>
                  <vs-td>
                    <h6 style="width: 150px !important">
                      {{ item.lastTipification }}
                    </h6>
                  </vs-td>
                  <vs-td>
                    <h6 style="width: 150px !important">{{ item.origin }}</h6>
                  </vs-td>
                  <vs-td>
                    <h6 style="width: 150px !important">{{ item.final }}</h6>
                  </vs-td>
                  <vs-td>
                    <h6 style="width: 250px !important">{{ item.process }}</h6>
                  </vs-td>
                  <vs-td>
                    <html
                      v-html="item.traza"
                      style="background: #262c49 !important; width: 200px"
                    ></html>
                  </vs-td>
                  <vs-td>
                    <h6 style="width: 250px !important">{{ item.subject }}</h6>
                  </vs-td>
                  <vs-td
                    v-for="(item2, index2) in item.imagesEmail"
                    :key="index2"
                  >
                    <vs-images>
                      <vs-image v-html="item2.cut_images_ros" />
                    </vs-images>
                  </vs-td>
                  <vs-td>
                    <vs-button
                      class="buttonColor2"
                      color="primary"
                      type="relief"
                      icon="visibility"
                      :href="
                        'http://backend-masterline.test/trazabilidad-ro/' +
                        item.url
                      "
                    >
                    </vs-button>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </vs-popup>
        </vs-card>
      </vs-col>
    </vs-row>
    <template>
      <div>
        <vs-row
          class="mt-5"
          vs-justify="center"
          v-if="
            showUserAuth[0].rol_id == 1 ||
            showUserAuth[0].rol_id == 7 ||
            showUserAuth[0].rol_id == 8 ||
            showUserAuth[0].rol_id == 9 ||
            showUserAuth[0].rol_id == 10
          "
        >
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <vs-card class="con-vs-cards">
              <div slot="header">
                <h6 class="card-title text-center">
                  R.O Por Tipo De Transporte
                </h6>
              </div>
              <div>
                <vs-row vs-w="12">
                  <vs-col
                    class="mobil"
                    vs-type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-lg="4"
                    vs-sm="4"
                    vs-xs="12"
                  >
                    <vs-card class="con-vs-cards" actionable>
                      <h3 class="text-center">Aéreo</h3>
                      <div
                        class="text-center"
                        @click="airRos = true"
                        style="cursor: pointer"
                      >
                        <span
                          class="material-icons"
                          style="font-size: 100px; cursor: pointer"
                        >
                          flight
                        </span>
                      </div>
                    </vs-card>
                  </vs-col>
                  <vs-col
                    class="mobil"
                    vs-type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-lg="4"
                    vs-sm="4"
                    vs-xs="12"
                  >
                    <vs-card class="con-vs-cards" actionable>
                      <h3 class="text-center">Maritimo</h3>
                      <div
                        class="text-center"
                        @click="maritimeRos = true"
                        style="cursor: pointer"
                      >
                        <span class="material-icons" style="font-size: 100px">
                          directions_boat
                        </span>
                      </div>
                    </vs-card>
                  </vs-col>
                  <vs-col
                    class="mobil"
                    vs-type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-lg="4"
                    vs-sm="4"
                    vs-xs="12"
                  >
                    <vs-card class="con-vs-cards" actionable>
                      <h3 class="text-center">Terrestre</h3>
                      <div
                        class="text-center"
                        @click="inlandRos = true"
                        style="cursor: pointer"
                      >
                        <span class="material-icons" style="font-size: 100px">
                          local_shipping
                        </span>
                      </div>
                    </vs-card>
                  </vs-col>
                </vs-row>
              </div>
            </vs-card>
          </vs-col>
        </vs-row>
        <vs-popup
          class="popups"
          fullscreen
          title="R.O Aéreos"
          :active.sync="airRos"
        >
          <vs-table search pagination :data="rosAirs" :max-items="tantos">
            <template slot="header">
              <select v-model="tantos" class="seleccionableBuscador">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </template>
            <template slot="thead">
              <vs-th sort-key="ro"> R.O </vs-th>
              <vs-th sort-key="dateRegister"> Fecha de Registro </vs-th>
              <vs-th sort-key="origin"> Puerto De Origen </vs-th>
              <vs-th sort-key="final"> Puerto Destino </vs-th>
              <vs-th sort-key="etd"> ETD </vs-th>
              <vs-th sort-key="eta"> ETA </vs-th>
              <vs-th sort-key="typeOfLoad"> Tipo De Carga </vs-th>
              <vs-th sort-key="container_number"> Numero De Contenedor </vs-th>
              <vs-th sort-key="kind_of_container"> Tipo Contenedor </vs-th>
              <vs-th sort-key="quantity"> Cantidad </vs-th>
              <vs-th sort-key="weight"> Peso </vs-th>
              <vs-th sort-key="volume"> Volumen </vs-th>
              <vs-th sort-key="num_hbl"> Numero HBL </vs-th>
              <vs-th sort-key="issue"> Emisión </vs-th>
              <vs-th sort-key="process"> Proceso </vs-th>
              <vs-th sort-key="tracing"> Seguimiento </vs-th>
              <vs-th sort-key="user"> Usuario </vs-th>
              <vs-th sort-key="type"> Tipo </vs-th>
            </template>
            <template slot-scope="{ data }">
              <vs-tr v-for="(item, index) in data" :key="index">
                <vs-td :data="item.ro"> {{ item.ro }} </vs-td>
                <vs-td :data="item.dateRegister">
                  {{ item.dateRegister }}
                </vs-td>
                <vs-td :data="item.origin"> {{ item.origin }} </vs-td>
                <vs-td :data="item.final"> {{ item.final }} </vs-td>
                <vs-td :data="item.etd"> {{ item.etd }} </vs-td>
                <vs-td :data="item.eta"> {{ item.eta }} </vs-td>
                <vs-td :data="item.typeOfLoad"> {{ item.typeOfLoad }} </vs-td>
                <vs-td :data="item.container_number">
                  {{ item.container_number }}
                </vs-td>
                <vs-td :data="item.kind_of_container">
                  {{ item.kind_of_container }}
                </vs-td>
                <vs-td :data="item.quantity"> {{ item.quantity }} </vs-td>
                <vs-td :data="item.weight"> {{ item.weight }} </vs-td>
                <vs-td :data="item.volume"> {{ item.volume }} </vs-td>
                <vs-td :data="item.num_hbl"> {{ item.num_hbl }} </vs-td>
                <vs-td :data="item.issue"> {{ item.issue }} </vs-td>
                <vs-td :data="item.process"> {{ item.process }} </vs-td>
                <vs-td :data="item.tracing">
                  <html
                    v-html="item.tracing"
                    style="background: #262c49 !important; width: 200px"
                  ></html>
                </vs-td>
                <vs-td :data="item.user"> {{ item.user }} </vs-td>
                <vs-td :data="item.type"> {{ item.type }} </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </vs-popup>
        <vs-popup fullscreen title="R.O Maritimos" :active.sync="maritimeRos">
          <vs-table search pagination :data="rosMaritime" :max-items="tantos">
            <template slot="header">
              <select v-model="tantos" class="seleccionableBuscador">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </template>
            <template slot="thead">
              <vs-th sort-key="ro"> R.O </vs-th>
              <vs-th sort-key="dateRegister"> Fecha de Registro </vs-th>
              <vs-th sort-key="origin"> Puerto De Origen </vs-th>
              <vs-th sort-key="final"> Puerto Destino </vs-th>
              <vs-th sort-key="etd"> ETD </vs-th>
              <vs-th sort-key="eta"> ETA </vs-th>
              <vs-th sort-key="typeOfLoad"> Tipo De Carga </vs-th>
              <vs-th sort-key="container_number"> Numero De Contenedor </vs-th>
              <vs-th sort-key="kind_of_container"> Tipo Contenedor </vs-th>
              <vs-th sort-key="quantity"> Cantidad </vs-th>
              <vs-th sort-key="weight"> Peso </vs-th>
              <vs-th sort-key="volume"> Volumen </vs-th>
              <vs-th sort-key="num_hbl"> Numero HBL </vs-th>
              <vs-th sort-key="issue"> Emisión </vs-th>
              <vs-th sort-key="process"> Proceso </vs-th>
              <vs-th sort-key="tracing"> Seguimiento </vs-th>
              <vs-th sort-key="user"> Usuario </vs-th>
              <vs-th sort-key="type"> Tipo </vs-th>
            </template>
            <template slot-scope="{ data }">
              <vs-tr v-for="(item, index) in data" :key="index">
                <vs-td :data="item.ro"> {{ item.ro }} </vs-td>
                <vs-td :data="item.dateRegister">
                  {{ item.dateRegister }}
                </vs-td>
                <vs-td :data="item.origin"> {{ item.origin }} </vs-td>
                <vs-td :data="item.final"> {{ item.final }} </vs-td>
                <vs-td :data="item.etd"> {{ item.etd }} </vs-td>
                <vs-td :data="item.eta"> {{ item.eta }} </vs-td>
                <vs-td :data="item.typeOfLoad"> {{ item.typeOfLoad }} </vs-td>
                <vs-td :data="item.container_number">
                  {{ item.container_number }}
                </vs-td>
                <vs-td :data="item.kind_of_container">
                  {{ item.kind_of_container }}
                </vs-td>
                <vs-td :data="item.quantity"> {{ item.quantity }} </vs-td>
                <vs-td :data="item.weight"> {{ item.weight }} </vs-td>
                <vs-td :data="item.volume"> {{ item.volume }} </vs-td>
                <vs-td :data="item.num_hbl"> {{ item.num_hbl }} </vs-td>
                <vs-td :data="item.issue"> {{ item.issue }} </vs-td>
                <vs-td :data="item.process"> {{ item.process }} </vs-td>
                <vs-td :data="item.tracing">
                  <html
                    v-html="item.tracing"
                    style="background: #262c49 !important; width: 200px"
                  ></html>
                </vs-td>
                <vs-td :data="item.user"> {{ item.user }} </vs-td>
                <vs-td :data="item.type"> {{ item.type }} </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </vs-popup>
        <vs-popup fullscreen title="R.O Terrestres" :active.sync="inlandRos">
          <vs-table search pagination :data="rosInland" :max-items="tantos">
            <template slot="header">
              <select v-model="tantos" class="seleccionableBuscador">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </template>
            <template slot="thead">
              <vs-th sort-key="ro"> R.O </vs-th>
              <vs-th sort-key="dateRegister"> Fecha de Registro </vs-th>
              <vs-th sort-key="origin"> Puerto De Origen </vs-th>
              <vs-th sort-key="final"> Puerto Destino </vs-th>
              <vs-th sort-key="etd"> ETD </vs-th>
              <vs-th sort-key="eta"> ETA </vs-th>
              <vs-th sort-key="typeOfLoad"> Tipo De Carga </vs-th>
              <vs-th sort-key="container_number"> Numero De Contenedor </vs-th>
              <vs-th sort-key="kind_of_container"> Tipo Contenedor </vs-th>
              <vs-th sort-key="quantity"> Cantidad </vs-th>
              <vs-th sort-key="weight"> Peso </vs-th>
              <vs-th sort-key="volume"> Volumen </vs-th>
              <vs-th sort-key="num_hbl"> Numero HBL </vs-th>
              <vs-th sort-key="issue"> Emisión </vs-th>
              <vs-th sort-key="process"> Proceso </vs-th>
              <vs-th sort-key="tracing"> Seguimiento </vs-th>
              <vs-th sort-key="user"> Usuario </vs-th>
              <vs-th sort-key="type"> Tipo </vs-th>
            </template>
            <template slot-scope="{ data }">
              <vs-tr v-for="(item, index) in data" :key="index">
                <vs-td :data="item.ro"> {{ item.ro }} </vs-td>
                <vs-td :data="item.dateRegister">
                  {{ item.dateRegister }}
                </vs-td>
                <vs-td :data="item.origin"> {{ item.origin }} </vs-td>
                <vs-td :data="item.final"> {{ item.final }} </vs-td>
                <vs-td :data="item.etd"> {{ item.etd }} </vs-td>
                <vs-td :data="item.eta"> {{ item.eta }} </vs-td>
                <vs-td :data="item.typeOfLoad"> {{ item.typeOfLoad }} </vs-td>
                <vs-td :data="item.container_number">
                  {{ item.container_number }}
                </vs-td>
                <vs-td :data="item.kind_of_container">
                  {{ item.kind_of_container }}
                </vs-td>
                <vs-td :data="item.quantity"> {{ item.quantity }} </vs-td>
                <vs-td :data="item.weight"> {{ item.weight }} </vs-td>
                <vs-td :data="item.volume"> {{ item.volume }} </vs-td>
                <vs-td :data="item.num_hbl"> {{ item.num_hbl }} </vs-td>
                <vs-td :data="item.issue"> {{ item.issue }} </vs-td>
                <vs-td :data="item.process"> {{ item.process }} </vs-td>
                <vs-td :data="item.tracing">
                  <html
                    v-html="item.tracing"
                    style="background: #262c49 !important; width: 200px"
                  ></html>
                </vs-td>
                <vs-td :data="item.user"> {{ item.user }} </vs-td>
                <vs-td :data="item.type"> {{ item.type }} </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </vs-popup>
      </div>
    </template>
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
      formRoImage: {
        ro: "",
      },
      searchRoImages: [],
      process: [],
      popupActivo4: false,
      airRos: false,
      maritimeRos: false,
      inlandRos: false,
      rosAirs: [],
      rosMaritime: [],
      rosInland: [],
      tantos: 5,
    };
  },
  created() {
    this.showTypeOfTransport();
    this.showUser();
    this.airRosCommercial();
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
    searchRo() {
      let url = dominio.url + "/api/buscar-ro-imagenes";
      axios
        .post(url, this.formRoImage)
        .then((res) => {
          if (res.data.code == 200) {
            this.searchRoImages = res.data.searchRoImages;
            this.process = res.data.process;
            toastr.success(res.data.message);
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    airRosCommercial() {
      let url = dominio.url + "/api/mostar-ro-aereos-commercial-auth";
      axios.get(url).then((res) => {
        this.rosAirs = res.data.rosAirs;
        this.rosMaritime = res.data.rosMaritime;
        this.rosInland = res.data.rosInland;
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
[dir] body {
  background: transparent;
  color: white;
}
.buttonColor2 {
  margin-left: -20px;
  background: #ff5000;
  color: white;
}
.seleccionableBuscador {
  background: #10163a;
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
}
.inputss {
  border-radius: 5px;
  border: 1px solid transparent;
  height: 35px;
}
.vs-popup
  {
    border: 1px solid #ff5000;
  }

@media only screen and (min-width: 901px) {
  .escritorio {
    margin-top: 10px;
    width: 100%;
    padding: 5px;
  }
  .mobil {
    padding: 6px;
  }
  .botonCuadrar {
    margin-top: 12px;
    margin-left: 10px;
  }
  .botonCuadrar2 {
    margin-top: -2px;
    margin-left: 10px;
  }
  .nuevo {
    width: 50%;
  }
  .botonCuadrarLupa {
    margin-top: 15px;
    margin-left: -15px !important;
  }
}
@media only screen and (max-width: 900px) {
  .movil {
    width: 100%;
    margin-top: 30px !important;
  }
  .inputss {
    border-radius: 5px;
    border: 1px solid transparent;
    height: 35px;
    width: 330px !important;
    margin-left: 3px;
    padding: 5px;
    margin-bottom: 15px;
  }
  .botonCuadrar {
    width: 98%;
    margin: 10px 0px 10px 5px;
  }
  .botonCuadrar2 {
    width: 98%;
    margin: 10px 0px 10px 5px;
  }
  .movilNuevo {
    margin-bottom: 15px;
    margin-top: -12px;
    width: 100%;
  }
  .botonCuadrarLupa {
    width: 99% !important;
    margin-top: 15px;
    margin-left: 3px;
    margin-bottom: 10px;
  }
}
</style>
