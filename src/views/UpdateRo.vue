<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="left" vs-align="center" vs-w="12">
        <vs-button
          class="buttonColor mb-5"
          color="primary"
          type="relief"
          icon="reply"
          @click="backRo()"
          >Regresar A R.O</vs-button
        >
      </vs-col>
    </vs-row>
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <strong>
              <h1 class="text-center">SEGUIMIENTO DE R.O</h1>
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
                <vs-select
                  class="selectExample ml-0 mr-5 mt-0 mb-3"
                  label="Modo De Transporte"
                  v-model="showRoDisabled.type_of_transport_id"
                  @change="
                    showIssue(showRoDisabled.type_of_transport_id);
                    showTypeOfLoads(showRoDisabled.type_of_transport_id);
                    errors.type_of_transport_id = '';
                  "
                >
                  <vs-select-item :value="''" :text="'Seleccione'" />
                  <vs-select-item
                    :key="index"
                    :value="item.id"
                    :text="item.name"
                    v-for="(item, index) in typeOfTransport"
                  />
                </vs-select>
                <div class="mt-2 text-left" v-if="errors.type_of_transport_id">
                  <span class="errors">{{
                    errors.type_of_transport_id[0]
                  }}</span>
                </div>
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-5 mt-5 mb-3"
                  color="rgb(213, 14, 151)"
                  label-placeholder="RO-AAAA-/00-0000"
                  v-model="showRoDisabled.ro"
                  @keypress="errors.ro = ''"
                />
                <div class="mt-3 ml-1 text-left" v-if="errors.ro">
                  <span class="errors">{{ errors.ro[0] }}</span>
                </div>
              </div>
              <div class="centerx colors-example">
                <vs-select
                  class="selectExample ml-0 mr-4 mt-0 mb-3"
                  label="Tipo De Embarque"
                  v-model="showRoDisabled.type_id"
                  @change="errors.type_id = ''"
                >
                  <vs-select-item :value="''" :text="'Seleccione'" disabled />
                  <vs-select-item
                    :key="index"
                    :value="item.id"
                    :text="item.name"
                    v-for="(item, index) in showTypeSends"
                  />
                </vs-select>
                <div class="mt-1 text-left" v-if="errors.type_id">
                  <span class="errors">{{ errors.type_id[0] }}</span>
                </div>
              </div>
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card
          class="con-vs-cards"
          v-if="showRoDisabled.type_of_transport_id == 3"
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
              />
              <vs-input
                class="ml-5 mr-5 mt-3 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Típo de Vehículo"
                v-model="showRoDisabled.vehicle"
              />
              <vs-input
                class="ml-5 mr-5 mt-3 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Conductor"
                v-model="showRoDisabled.driver"
              />
              <vs-input
                class="ml-5 mr-5 mt-3 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Placa"
                v-model="showRoDisabled.plaque"
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
                  @keypress="errors.starting_place = ''"
                />
                <div class="mt-1 mr-3 text-center" v-if="errors.starting_place">
                  <span class="errors">{{ errors.starting_place[0] }}</span>
                </div>
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-5 mt-5 mb-3"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Puerto De Destino"
                  v-model="showRoDisabled.destination_place"
                  @keypress="errors.destination_place = ''"
                />
                <div class="mt-1 text-left" v-if="errors.destination_place">
                  <span class="errors">{{ errors.destination_place[0] }}</span>
                </div>
              </div>
              <div class="centerx colors-example">
                <vs-select
                  class="selectExample ml-0 mr-4 mt-0 mb-3"
                  label="Emisión"
                  v-model="showRoDisabled.issue_id"
                  @change="errors.issue_id = ''"
                >
                  <vs-select-item :value="''" :text="'Seleccione'" disabled />
                  <vs-select-item
                    :key="index"
                    :value="item.id"
                    :text="item.name"
                    v-for="(item, index) in showIssues"
                  />
                </vs-select>
                <div class="mt-1 ml-0 text-left" v-if="errors.issue_id">
                  <span class="errors">{{ errors.issue_id[0] }}</span>
                </div>
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
                  type="date"
                />
              </div>
              <vs-input
                class="ml-0 mr-5 mt-0 mb-3"
                label="ETA"
                v-model="showRoDisabled.eta"
                type="date"
              />
              <vs-input
                class="ml-0 mr-4 mt-2 mb-0"
                color="rgb(213, 14, 151)"
                label-placeholder="Número HBL"
                v-model="showRoDisabled.num_hbl"
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
                <vs-select
                  class="ml-0 mr-5 mt-0 mb-3"
                  label="Tipo Carga"
                  v-model="showRoDisabled.type_of_load_id"
                >
                  <vs-select-item :value="''" :text="'Seleccione'" disabled />
                  <vs-select-item
                    :key="index"
                    :value="item.id"
                    :text="item.name"
                    v-for="(item, index) in showTypeOfLoad"
                  />
                </vs-select>
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-5 mt-5 mb-3"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Cantidad"
                  v-model="showRoDisabled.quantity"
                />
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-4 mt-2 mb-0"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Numero De Contenedor"
                  v-if="
                    showRoDisabled.type_of_transport_id == 1 ||
                    showRoDisabled.type_of_transport_id == 3 ||
                    showRoDisabled.type_of_transport_id == 0
                  "
                  v-model="showRoDisabled.container_number"
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
                v-if="
                  showRoDisabled.type_of_transport_id == 1 ||
                  showRoDisabled.type_of_transport_id == 3 ||
                  showRoDisabled.type_of_transport_id == 0
                "
                v-model="showRoDisabled.kind_of_container"
              />
              <vs-input
                class="ml-0 mr-5 mt-5 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Peso Bruto"
                v-model="showRoDisabled.weight"
              />
              <vs-input
                class="ml-0 mr-4 mt-2 mb-0"
                color="rgb(213, 14, 151)"
                label-placeholder="Volumen"
                v-model="showRoDisabled.volume"
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
                <vs-select
                  class="ml-0 mr-5 mt-2 mb-0"
                  label="Sucursal"
                  v-model="showRoDisabled.branch_office_id"
                  @change="errors.branch_office_id = ''"
                  disabled
                >
                  <vs-select-item :value="''" :text="'Seleccione'" />
                  <vs-select-item
                    :key="index"
                    :value="item.id"
                    :text="item.name"
                    v-for="(item, index) in branchOffices"
                  />
                </vs-select>
                <div class="mt-1 ml-1 text-left" v-if="errors.branch_office_id">
                  <span class="errors">{{ errors.branch_office_id[0] }}</span>
                </div>
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-5 mr-2 mt-2 mb-0"
                  color="rgb(213, 14, 151)"
                  label="Nombre Usuario"
                  :value="
                    showRoDisabled.user.first_name +
                    ' ' +
                    showRoDisabled.user.last_name
                  "
                  disabled
                />
              </div>
              <div class="centerx colors-example">
                <vs-select
                  class="ml-5 mr-4 mt-2 mb-0"
                  label="Grupo De Correos"
                  v-model="listNameGroups.id"
                >
                  <vs-select-item
                    :key="index"
                    :value="item.id"
                    :text="item.name"
                    v-for="(item, index) in listNameGroups"
                  />
                </vs-select>
              </div>
            </vs-col>

            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <div class="centerx colors-example">
                <vs-select
                  class="ml-0 mr-4 mt-1 mb-4"
                  label="Comercial"
                  v-model="showRoDisabled.user.id"
                  @change="errors.commercial = ''"
                  disabled
                >
                  <vs-select-item :value="''" :text="'Seleccione'" />
                  <vs-select-item
                    :key="index"
                    :value="item.id"
                    :text="item.first_name + ' ' + item.last_name"
                    v-for="(item, index) in users"
                  />
                </vs-select>
                <div class="mt-1 ml-1 text-left" v-if="errors.commercial">
                  <span class="errors">{{ errors.commercial[0] }}</span>
                </div>
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-0 mt-2 mb-0"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Correos Electronicos Cliente"
                  v-model="formRo.addEmails"
                />
              </div>
              <vs-button
                class="ml-0 mr-2 mt-2 mb-0"
                @click="addEmail()"
                color="primary"
                type="border"
                icon="add"
              ></vs-button>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-4 mt-2 mb-0"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Codigo Seguimiento Cliente"
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
                  <vs-th> Acción </vs-th>
                </template>
                <template>
                  <vs-tr
                    v-for="(item, index) in showRoDisabled.email_clients"
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
            <vs-col
              class="mt-3"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-row vs-justify="center" class="mt-0 mb-5">
                <vs-button
                  @click="updateRo(showRoDisabled.id)"
                  color="#ff5000"
                  type="relief"
                  icon="add"
                  >Actualizar R.O</vs-button
                >
              </vs-row>
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card class="con-vs-cards">
          <h6 class="card-title text-center">HISTORICO INTERACCIONES</h6>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-select
                class="selectExample ml-5 mr-5 mt-0 mb-3"
                label="Proceso Actual"
                style="width: 50%"
                :value="showRoDisabled.processes_ro_pivot[0].procesess_id"
                v-model="showRoDisabled.procesess_id"
                @change="addArrayTemplate()"
              >
                <vs-select-item
                  :key="index"
                  :value="item.id"
                  :text="item.process_name"
                  v-for="(item, index) in listProces"
                />
              </vs-select>
              <div class="mt-1 ml-1 text-left" v-if="errors.commercial">
                <span class="errors">{{ errors.commercial[0] }}</span>
              </div>
              <vs-input
                class="mt-5 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Asunto Correo"
                v-model="showRoDisabled.subjet"
                style="width: 50%"
                @keypress="errors.subjet = ''"
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <div class="mt-0" v-if="errors.subjet" style="margin-left: 210px">
                <span class="errors">{{ errors.subjet[0] }}</span>
              </div>
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-textarea
                class="mt-3 mb-5"
                counter="10000"
                width="1140px"
                :counter-danger.sync="counterDanger"
                v-model="showRoDisabled.tracing"
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
                  @click="updateTemplate(showRoDisabled.id)"
                  color="#ff5000"
                  type="relief"
                  icon="autorenew"
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
                      v-for="(item, index) in showRoDisabled.processes_ro_pivot"
                    >
                      <vs-td> {{ item.procesess.create_date }} </vs-td>
                      <vs-td> {{ item.procesess.process_name }} </vs-td>
                      <vs-td style="width: 50%">
                        {{ item.procesess.tracing }}
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
                v-model="showRoDisabled.imageHtml"
                style="background: white; color: black; height: auto"
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
                  v-for="(image, index) in showImagesAttachedId"
                />
              </vs-images>
            </vs-col>
          </vs-row>
          <h6 class="card-title text-center">Historico De Recortes</h6>
          <vs-row>
            <vs-col
              v-for="(image, index) in showCutImage"
              :key="index"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <html class="" v-html="image.cut_images_ros"></html>
            </vs-col>
          </vs-row>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-input v-model="showRoDisabled.id" type="hidden" />
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
      errors: {},
      showTypeSends: {},
      showIssues: {},
      branchOffices: {},
      typeOfTransport: {},
      roles: {},
      userName: {},
      showTypeOfLoad: {},
      users: {},
      formTracking: {
        procesess_id: "",
        subjet: "",
        tracing: "",
      },
      arrayTemplate: [],
      showRoDisabled: {
        ro_id: this.$route.params && this.$route.params.id,
        type_id: "",
        carrier: "",
        vehicle: "",
        driver: "",
        plaque: "",
        starting_place: "",
        destination_place: "",
        issue_id: "",
        etd: "",
        eta: "",
        num_hbl: "",
        type_of_load_id: "",
        quantity: "",
        container_number: "",
        kind_of_container: "",
        weight: "",
        volume: "",
        branch_office_id: "",
        rol_id: "",
        commercial: "",
        client_emails_id: "",
        customer_tracking_code: "",
        process_id: 1,
        subjet: "",
        tracing: "",
        type_of_transport_id: "",
        procesess_id: "",
        subjet: "",
        tracing: "",
        groupEmails: "",
        imageHtml: "",
      },
      id: this.$route.params && this.$route.params.id,
      formRo: {
        ro: this.$route.params && this.$route.params.id,
        type_id: "",
        carrier: "",
        vehicle: "",
        driver: "",
        plaque: "",
        starting_place: "",
        destination_place: "",
        issue_id: "",
        etd: "",
        eta: "",
        num_hbl: "",
        type_of_load_id: "",
        quantity: "",
        container_number: "",
        kind_of_container: "",
        weight: "",
        volume: "",
        branch_office_id: "",
        rol_id: "",
        commercial: "",
        client_emails_id: "",
        customer_tracking_code: "",
        process_id: "",
        subjet: "",
        message: "",
        type_of_transport_id: "",
        addEmails: "",
        process_id: 1,
        subjet: "",
        tracing: "",
      },
      showRo: {},
      counterDanger: false,
      emails: [],
      listProces: {},
      listNameGroups: {},
      showImagesAttachedId: {},
      showCutImage: {},
    };
  },
  created() {
    this.showTypeSend();
    this.showBranchOffices();
    this.showRoles();
    this.showTypeOfTransport();
    this.showRoId();
    this.showIssue();
    this.listProcess();
    this.showMails();
    this.showUser();
    this.showAttachedImages();
    this.showCutImages();
  },
  methods: {
    showUser() {
      let url = dominio.url + "/api/mostrar-usuarios";
      axios.get(url).then((res) => {
        this.users = res.data.users;
        this.userName = res.data.userName;
      });
    },
    uploadImageSuccess(formData, index, fileList) {
      let url = dominio.url + "/api/imagenes-adjuntas-ro/" + this.id;
      axios
        .post(url, formData)
        .then((res) => {
          if (res.data.code == 200) {
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
    backRo() {
      this.$router.push("/panel/show-ro");
    },
    successUpload() {
      this.$vs.notify({
        color: "success",
        title: "Upload Success",
        text: "Lorem ipsum dolor sit amet, consectetur",
      });
    },
    addEmail() {
      let url = dominio.url + "/api/crear-correo-ro-seguimiento";
      axios
        .post(url, this.formRo)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.showRoId();
            this.formRo.addEmails = "";
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    listProcess() {
      let url = dominio.url + "/api/mostrar-procesos";
      axios.get(url).then((res) => {
        this.listProces = res.data.listProces;
      });
    },
    removeEmail(index) {
      let url = dominio.url + "/api/eliminar-correo-ro/" + index;
      this.showRoDisabled.email_clients.id = this.emails;
      axios
        .post(url, this.showRoDisabled)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.showRoId();
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    showIssue(id) {
      let url = dominio.url + "/api/mostrar-emisiones/" + id;
      axios.get(url).then((res) => {
        this.showIssues = res.data.showIssues;
      });
    },
    updateRo(id) {
      let url = dominio.url + "/api/actualizar-ro/" + id;
      axios
        .post(url, this.showRoDisabled)
        .then((res) => {
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
    updateTemplate(id) {
      let url = dominio.url + "/api/actualizar-seguimiento/" + id;
      axios
        .post(url, this.showRoDisabled)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.showRoId();
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    showTypeSend() {
      let url = dominio.url + "/api/mostrar-tipos-envio";
      axios.get(url).then((res) => {
        this.showTypeSends = res.data.showTypeSends;
      });
    },
    showBranchOffices() {
      let url = dominio.url + "/api/mostrar-sucursales";
      axios.get(url).then((res) => {
        this.branchOffices = res.data.branchOffices;
      });
    },
    showTypeOfLoads(id) {
      let url = dominio.url + "/api/mostrar-tipos-carga/" + id;
      axios.get(url).then((res) => {
        this.showTypeOfLoad = res.data.showTypeOfLoad;
      });
    },
    showRoles() {
      let url = dominio.url + "/api/mostrar-roles";
      axios.get(url).then((res) => {
        this.roles = res.data.roles;
      });
    },
    showTypeOfTransport() {
      let url = dominio.url + "/api/mostrar-tipo-transporte";
      axios.get(url).then((res) => {
        this.typeOfTransport = res.data.typeOfTransport;
      });
    },
    showRoId() {
      let url = dominio.url + "/api/mostrar-ro/" + this.id;
      axios.get(url).then((res) => {
        this.showRoDisabled = res.data.showRoDisabled;
        this.showRoDisabled.procesess_id = res.data.showRoDisabled.procesess_id;
      });
    },
    addArrayTemplate() {
      this.formTracking.tracing = "";
      if (this.formTracking.procesess_id) {
        var data = this.listProces.find(
          (ele) => ele.id == this.formTracking.procesess_id
        );
        this.formTracking.tracing = data.tracing;
      }
    },
    showMails() {
      let url = dominio.url + "/api/listar-grupo-correos";
      axios.get(url).then((res) => {
        this.listNameGroups = res.data.listNameGroups;
      });
    },
    showAttachedImages() {
      let url = dominio.url + "/api/mostrar-imagenes-adjuntas/" + this.id;
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
</style>
