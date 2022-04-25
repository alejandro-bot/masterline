<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="left" vs-align="center" vs-w="12">
        <vs-button
          class="buttonColor mb-5"
          color="primary"
          type="relief"
          icon="reply"
          @click="returRo()"
          >Regresar A R.O</vs-button
        >
      </vs-col>
    </vs-row>
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <strong>
              <h1 class="text-center">SEGUIMIENTO DE R.O HIJO</h1>
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
                <h6 style="margin-bottom: -14px; margin-left: 10px">
                  Modo De Transporte
                </h6>
                <select
                  class="ml-5 mr-5 mt-5 mb-3 seleccionable"
                  v-model="showSunId.type_of_transport_id"
                  @change="
                    showTypeSend(showSunId.type_of_transport_id);
                    showIssue(showSunId.type_of_transport_id);
                    showTypeOfLoads(showSunId.type_of_transport_id);
                  "
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
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-5 mt-5 mb-3"
                  color="rgb(213, 14, 151)"
                  label-placeholder="RO-AAAA-/00-0000"
                  v-model="showSunId.ro"
                />
              </div>
              <div class="centerx colors-example">
                <h6 style="margin-bottom: -14px; margin-left: 10px">
                  Tipo De Embarque
                </h6>
                <select
                  class="ml-5 mr-5 mt-5 mb-3 seleccionable"
                  v-model="showSunId.type_id"
                >
                  <option value="">Seleccione</option>
                  <option
                    :key="index"
                    :value="item.id"
                    v-for="(item, index) in showTypeSends"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card
          class="con-vs-cards"
          v-if="showSunId.type_of_transport_id == 3"
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
                v-model="showSunId.carrier"
              />
              <vs-input
                class="ml-5 mr-5 mt-3 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Típo de Vehículo"
                v-model="showSunId.vehicle"
              />
              <vs-input
                class="ml-5 mr-5 mt-3 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Conductor"
                v-model="showSunId.driver"
              />
              <vs-input
                class="ml-5 mr-5 mt-3 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Placa"
                v-model="showSunId.plaque"
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
                  v-model="showSunId.starting_place"
                />
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-5 mt-5 mb-3"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Puerto De Destino"
                  v-model="showSunId.destination_place"
                />
              </div>
              <div class="centerx colors-example">
                <h6 style="margin-bottom: -14px; margin-left: 10px">
                  Emisión HBL
                </h6>
                <select
                  class="ml-5 mr-5 mt-5 mb-3 seleccionable"
                  v-model="showSunId.issue_id"
                >
                  <option value="">Seleccione</option>
                  <option
                    :key="index"
                    :value="item.id"
                    v-for="(item, index) in showIssues"
                  >
                    {{ item.name }}
                  </option>
                </select>
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
                  class="mt-0 mb-3"
                  label="ETD"
                  type="date"
                  style="margin-left: -35px; margin-right: 15px"
                  v-model="showSunId.etd"
                />
              </div>
              <vs-input
                class="ml-0 mr-5 mt-0 mb-3"
                label="ETA"
                v-model="showSunId.eta"
                type="date"
              />
              <vs-input
                class="mt-2 mb-0"
                color="rgb(213, 14, 151)"
                label-placeholder="Número HBL"
                style="margin-left: 20px; margin-right: -20px"
                v-model="showSunId.num_hbl"
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
                <h6 style="margin-bottom: -14px; margin-left: 10px">
                  Tipo Carga
                </h6>
                <select
                  class="ml-5 mr-5 mt-5 mb-3 seleccionable"
                  style="margin-left: 0px !important"
                  v-model="showSunId.type_of_load_id"
                >
                  <option value="">Seleccione</option>
                  <option
                    :key="index"
                    :value="item.id"
                    v-for="(item, index) in showTypeOfLoad"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-5 mt-5 mb-3"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Cantidad"
                  v-model="showSunId.quantity"
                />
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-4 mt-2 mb-0"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Numero De Contenedor"
                  v-model="showSunId.container_number"
                  v-if="
                    showSunId.type_of_transport_id == 0 ||
                    showSunId.type_of_transport_id == 1 ||
                    showSunId.type_of_transport_id == 3
                  "
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
                v-model="showSunId.kind_of_container"
                v-if="
                  showSunId.type_of_transport_id == 0 ||
                  showSunId.type_of_transport_id == 1 ||
                  showSunId.type_of_transport_id == 3
                "
              />
              <vs-input
                class="ml-0 mr-5 mt-5 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Peso Bruto"
                v-model="showSunId.weight"
              />
              <vs-input
                class="ml-0 mr-4 mt-2 mb-0"
                color="rgb(213, 14, 151)"
                label-placeholder="Volumen"
                v-model="showSunId.volume"
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
                  color="rgb(213, 14, 151)"
                  label-placeholder="Sucursal"
                  v-model="showSunId.branch_office.name"
                  style="margin-top: 22px; margin-left: -10px"
                  disabled
                />
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-5 mr-2 mt-2 mb-0"
                  color="rgb(213, 14, 151)"
                  label="Nombre Usuario"
                  :value="
                    showSunId.user.first_name + ' ' + showSunId.user.last_name
                  "
                  disabled
                />
              </div>
              <div class="centerx colors-example">
                <h6 style="margin-bottom: -14px; margin-left: 10px">
                  Grupo De Correos
                </h6>
                <select
                  class="ml-5 mr-5 mt-5 mb-3 seleccionable"
                  v-model="showSunId.groupEmails"
                >
                  <option value="">Seleccione</option>
                  <option
                    :key="index"
                    :value="item.id"
                    v-for="(item, index) in listNameGroups"
                  >
                    {{ item.name }}
                  </option>
                </select>
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
                  class="ml-0 mr-4 mt-5 mb-4"
                  color="rgb(213, 14, 151)"
                  label="Comercial"
                  :value="user.first_name + ' ' + user.last_name"
                  style="width: 350px; margin-top: 4px !important"
                  disabled
                />
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-0 mt-2 mb-0"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Correos Electronicos Cliente"
                  v-model="showSunId.addEmails"
                />
              </div>
              <vs-button
                class="ml-0 mr-2 mt-2 mb-0"
                color="primary"
                type="border"
                icon="add"
                @click="addEmail()"
              ></vs-button>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-4 mt-2 mb-0"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Codigo Seguimiento Cliente"
                  v-model="showSunId.customer_tracking_code"
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
                  <vs-th> Acción </vs-th>
                </template>
                <template>
                  <vs-tr
                    v-for="(item, index) in showSunId.email_clients"
                    :key="index"
                  >
                    <vs-td :data="item">
                      {{ item.email }}
                    </vs-td>
                    <vs-td :data="item">
                      <vs-button
                        radius
                        color="danger"
                        type="border"
                        icon="delete_outline"
                        @click="removeEmail(item.id)"
                      ></vs-button>
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card class="con-vs-cards">
          <h6 class="card-title text-center">HISTORICO INTERACCIONES</h6>
          <vs-row>
            <h6 style="margin-bottom: -14px; margin-left: 20px">
              Proceso Actual
            </h6>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <select
                class="ml-5 mr-5 mt-5 mb-3 seleccionable"
                style="width: 60%"
                v-model="test_procesess_id"
              >
                <option value="">Seleccione</option>
                <option
                  :key="index"
                  :value="item.id"
                  v-for="(item, index) in listProces"
                >
                  {{ item.process_name }}
                </option>
              </select>
              <vs-input
                class="mt-5 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Asunto Correo"
                style="width: 60%"
                v-model="showSunId.subjet"
              />
            </vs-col>
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
              <wysiwyg
                class="mt-3 mb-3 ml-4 mr-1"
                style="background: white; color: black; height: auto"
                v-model="showSunId.tracing"
              />
            </vs-col>
            <vs-col
              class="mt-3"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-row vs-justify="center" class="mt-0 mb-5">
                <vs-button
                  color="#ff5000"
                  type="relief"
                  icon="autorenew"
                  @click="updateTemplate(showSunId.id)"
                  >Actualizar Seguimiento De R.O</vs-button
                >
              </vs-row>
            </vs-col>
            <vs-row class="mt-5">
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <vs-table style="width: 96%">
                  <template slot="thead">
                    <vs-th> Fecha </vs-th>
                    <vs-th> Proceso </vs-th>
                    <vs-th> Seguimiento </vs-th>
                  </template>
                  <template>
                    <vs-tr
                      :key="index"
                      v-for="(item, index) in showSunId.processes_ro_pivot"
                    >
                      <vs-td style="width: 300px !important">
                        {{ item.procesess.create_date }}
                      </vs-td>
                      <vs-td style="width: 600px !important">
                        {{ item.procesess.process_name }}
                      </vs-td>
                      <vs-td style="width: 50%">
                        <html
                          class="mt-3 mb-3 ml-5 mr-5"
                          v-html="item.tracing"
                        ></html>
                      </vs-td>
                    </vs-tr>
                  </template>
                </vs-table>
              </vs-col>
            </vs-row>
          </vs-row>
        </vs-card>
        <vs-card class="con-vs-cards">
          <h6 class="card-title text-center">MENSAJE PERSONALIZADO</h6>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <wysiwyg
                style="background: white; color: black; height: auto"
                v-model="showSunId.imageHtml"
              />
            </vs-col>
            <vs-col
              class="mt-5 mb-5"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <h2 class="card-title text-center">Adjuntar Imagen(es)</h2>
            </vs-col>
            <vs-col
              class="mt-0 mb-5"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vue-upload-multiple-image
                @upload-success="uploadImageSuccess"
                @edit-image="editImage"
                @mark-is-primary="markIsPrimary"
                @limit-exceeded="limitExceeded"
                @before-remove="beforeRemove"
                id-upload="myIdUpload"
                id-edit="myIdEdit"
                :max-image="20"
                primary-text="Imagen"
                browse-text="Seleccione sus Imagenes"
                drag-text="Subir Imagenes"
                mark-is-primary-text="Imagen Adjunta"
                popup-text="Esta imagen se mostrará por defecto"
                :multiple="true"
                :show-edit="true"
                :show-delete="true"
                :show-add="true"
              ></vue-upload-multiple-image>
            </vs-col>
          </vs-row>
        </vs-card>

        <vs-card class="con-vs-cards">
          <h6 class="card-title text-center">Historico De Imagenes</h6>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-images>
                <vs-image
                  class="images"
                  :key="index"
                  :src="image.images"
                  v-for="(image, index) in showSunId.images_email"
                />
              </vs-images>
            </vs-col>
          </vs-row>
          <h6 class="card-title text-center">Historico De Recortes</h6>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
              v-for="(image, index) in showSunId.cut_images"
              :key="index"
            >
              <html
                class="mt-3 mb-3 ml-5 mr-5"
                v-html="image.cut_images_ros"
              ></html>
            </vs-col>
            <vs-col
              class="mt-3"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-row vs-justify="center" class="mt-0 mb-5">
                <vs-button
                  color="#ff5000"
                  type="relief"
                  icon="add"
                  @click="updateRoSun(showSunId.id)"
                  >Actualizar R.O</vs-button
                >
              </vs-row>
            </vs-col>
          </vs-row>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-input type="hidden" />
  </div>
</template>
<script>
import "vue-wysiwyg/dist/vueWysiwyg.css";
import VueUploadMultipleImage from "vue-upload-multiple-image";
import { dominio } from "../dominio.js";
export default {
  components: {
    VueUploadMultipleImage,
  },
  data() {
    return {
      test_procesess_id: null,
      id: this.$route.params && this.$route.params.id,
      typeOfTransport: {},
      showTypeSends: {},
      showIssues: {},
      showTypeOfLoad: {},
      branchOffices: {},
      listNameGroups: {},
      listProces: {},
      showImagesAttachedId: {},
      showCutImage: {},
      user: {},
      archivos: [],
      showSunId: {
        typeOfTransport: "",
        addEmails: "",
      },
    };
  },
  created() {
    this.showTypeOfTransport();
    this.showRoSun();
    this.showBranchOffices();
    this.showMails();
    this.listProcess();
    this.showAttachedImages();
    this.showCutImages();
  },
  watch: {
    test_procesess_id(val) {
      this.addArrayTemplate();
    },
  },
  methods: {
    showTypeOfTransport() {
      let url = dominio.url + "/api/mostrar-tipo-transporte";
      axios.get(url).then((res) => {
        this.typeOfTransport = res.data.typeOfTransport;
      });
    },
    showRoSun() {
      let url = dominio.url + "/api/mostrar-ro-hijo/" + this.id;
      axios.get(url).then((res) => {
        this.showSunId = res.data.showSunId;
        this.user = res.data.user;
      });
    },
    showTypeSend() {
      let url =
        dominio.url +
        "/api/mostrar-tipos-envio/" +
        this.showSunId.type_of_transport_id;
      axios.get(url).then((res) => {
        this.showTypeSends = res.data.showTypeSends;
      });
    },
    showIssue(id) {
      let url = dominio.url + "/api/mostrar-emisiones/" + id;
      axios.get(url).then((res) => {
        this.showIssues = res.data.showIssues;
      });
    },
    showTypeOfLoads(id) {
      let url = dominio.url + "/api/mostrar-tipos-carga/" + id;
      axios.get(url).then((res) => {
        this.showTypeOfLoad = res.data.showTypeOfLoad;
      });
    },
    showBranchOffices() {
      let url = dominio.url + "/api/mostrar-sucursales";
      axios.get(url).then((res) => {
        this.branchOffices = res.data.branchOffices;
      });
    },
    showMails() {
      let url = dominio.url + "/api/listar-grupo-correos";
      axios.get(url).then((res) => {
        this.listNameGroups = res.data.listNameGroups;
      });
    },
    addEmail() {
      let url = dominio.url + "/api/crear-correo-ro-hijo-seguimiento";
      axios
        .post(url, this.showSunId)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.showRoSun();
            this.showSunId.addEmails = "";
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    removeEmail(index) {
      let url = dominio.url + "/api/eliminar-correo-ro-hijo/" + index;
      this.showSunId.email_clients.id = this.emails;
      axios
        .post(url, this.showSunId)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.showRoSun();
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    addArrayTemplate() {
      this.showSunId.tracing = "";
      if (this.test_procesess_id) {
        var data = this.listProces.find(
          (ele) => ele.id == this.test_procesess_id
        );
        this.showSunId.tracing = data.tracing;
      }
    },
    listProcess() {
      let url = dominio.url + "/api/mostrar-procesos-ro-hijo/" + this.id;
      axios.get(url).then((res) => {
        this.listProces = res.data.listProces;
      });
    },
    updateTemplate(id) {
      let url = dominio.url + "/api/actualizar-seguimiento-hijo/" + id;
      this.showSunId.procesess_id = this.test_procesess_id;
      axios
        .post(url, this.showSunId)
        .then((res) => {
          $("#loading-bg").fadeOut("slow");
          if (res.data.code == 200) {
            this.showRoSun();
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
    uploadImageSuccess(formData, index, fileList) {
      this.archivos = [];
      this.archivos = fileList;
    },
    beforeRemove(index, removeCallBack) {
      toastr.error("Imagen Eliminada Con Éxito");
      removeCallBack();
    },
    editImage(formData, index, fileList) {
      toastr.success("Imagen Editada Con Éxito");
    },
    markIsPrimary(index, fileList) {
      console.log("markIs Primary", index, fileList);
    },
    limitExceeded(amount) {
      toastr.error("Excede El Limite De Imagenes");
      console.log("limitExeeded data", amount);
    },
    showAttachedImages() {
      let url = dominio.url + "/api/mostrar-imagenes-adjuntas-hijos/" + this.id;
      axios.get(url).then((res) => {
        this.showImagesAttachedId = res.data.showImagesAttachedId;
      });
    },
    showCutImages() {
      let url = dominio.url + "/api/mostrar-imagenes-recortes/" + this.id;
      axios.get(url).then((res) => {
        this.showCutImage = res.data.showCutImage;
      });
    },
    updateRoSun(id) {
      $("#loading-bg").css("display", "block");
      let url = dominio.url + "/api/actualizar-ro-hijo/" + id;
      this.showSunId.archivos = this.archivos;
      axios
        .post(url, this.showSunId)
        .then((res) => {
          $("#loading-bg").fadeOut("slow");
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.$router.push("/panel/show-ro");
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    returRo() {
      this.$router.push("/panel/show-ro");
    },
  },
};
</script>

<style>
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
.errors {
  color: red;
  text-align: right;
}
.buttonColor {
  background: #ff5000 !important;
}

.images {
  max-height: auto;
  overflow: auto;
  width: 120px;
}
[dir] body {
  background: transparent;
  color: white;
  -webkit-transition: background-color 0.3s ease;
}
.seleccionable {
  background: #10163a;
  color: white;
  width: 200px;
  height: 35px;
  border-radius: 5px;
  padding: 0.3rem !important;
  padding-left: 6px !important;
  font-size: 17px;
  border: 1px solid transparent;
}
</style>
