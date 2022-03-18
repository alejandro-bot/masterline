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
              <h1 class="text-center">CREACION DE R.O</h1>
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
                  v-model="formRo.type_of_transport_id"
                  @change="
                    showIssue(formRo.type_of_transport_id);
                    showTypeOfLoads(formRo.type_of_transport_id);
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
                  v-model="formRo.ro"
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
                  v-model="formRo.type_id"
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
        <vs-card class="con-vs-cards" v-if="formRo.type_of_transport_id == 3">
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
                v-model="formRo.carrier"
              />
              <vs-input
                class="ml-5 mr-5 mt-3 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Típo de Vehículo"
                v-model="formRo.vehicle"
              />
              <vs-input
                class="ml-5 mr-5 mt-3 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Conductor"
                v-model="formRo.driver"
              />
              <vs-input
                class="ml-5 mr-5 mt-3 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Placa"
                v-model="formRo.plaque"
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
                  v-model="formRo.starting_place"
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
                  v-model="formRo.destination_place"
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
                  v-model="formRo.issue_id"
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
                  v-model="formRo.etd"
                  type="date"
                />
              </div>
              <vs-input
                class="ml-0 mr-5 mt-0 mb-3"
                label="ETA"
                v-model="formRo.eta"
                type="date"
              />
              <vs-input
                class="ml-0 mr-4 mt-2 mb-0"
                color="rgb(213, 14, 151)"
                label-placeholder="Número HBL"
                v-model="formRo.num_hbl"
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
                  v-model="formRo.type_of_load_id"
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
                  v-model="formRo.quantity"
                />
              </div>
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-4 mt-2 mb-0"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Numero De Contenedor"
                  v-if="
                    formRo.type_of_transport_id == 1 ||
                    formRo.type_of_transport_id == 3 ||
                    formRo.type_of_transport_id == 0
                  "
                  v-model="formRo.container_number"
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
                  formRo.type_of_transport_id == 1 ||
                  formRo.type_of_transport_id == 3 ||
                  formRo.type_of_transport_id == 0
                "
                v-model="formRo.kind_of_container"
              />
              <vs-input
                class="ml-0 mr-5 mt-5 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Peso Bruto"
                v-model="formRo.weight"
              />
              <vs-input
                class="ml-0 mr-4 mt-2 mb-0"
                color="rgb(213, 14, 151)"
                label-placeholder="Volumen"
                v-model="formRo.volume"
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
                  class="ml-2 mr-5 mt-2 mb-0"
                  label="Sucursal"
                  v-model="formRo.branch_office_id"
                  @change="errors.branch_office_id = ''"
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
                  class="ml-2 mr-5 mt-2 mb-0"
                  color="rgb(213, 14, 151)"
                  label="Nombre Usuario"
                  disabled
                  v-model="userName"
                />
              </div>
              <div class="centerx colors-example">
                <vs-select
                  class="ml-4 mr-5 mt-2 mb-0"
                  label="Grupo De Correos"
                  v-model="formRo.groupEmails"
                >
                  <vs-select-item :value="''" :text="'Seleccione'" />
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
                  v-model="formRo.commercial"
                  @change="errors.commercial = ''"
                >
                  <vs-select-item :value="''" :text="'Seleccione'" />
                  <vs-select-item
                    :key="index"
                    :value="item.id"
                    :text="item.full_name"
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
                  v-model="formRo.client_emails_id"
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
                  v-model="formRo.customer_tracking_code"
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
                  <vs-tr v-for="(item, index) in emails" :key="index">
                    <vs-td :data="item">
                      {{ item }}
                    </vs-td>
                    <vs-td :data="item">
                      <vs-button
                        radius
                        color="danger"
                        type="border"
                        icon="delete_outline"
                        @click="removeEmail(index)"
                      ></vs-button>
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
                class="mr-5 ml-5 mt-5 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Proceso Actual"
                v-model="formRo.process_name"
                style="width: 50%"
                disabled
              />

              <vs-input
                class="mr-5 ml-5 mt-5 mb-3"
                color="rgb(213, 14, 151)"
                label-placeholder="Asunto Correo"
                v-model="formRo.subjet"
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
                class="mt-3 mb-3"
                counter="100"
                label="¡Gracias por tu confianza!¡Esta nueva asignación es importante para nosotros!"
                width="1140px"
                :counter-danger.sync="counterDanger"
                v-model="formRo.message"
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
                  @click="createRo()"
                  color="#ff5000"
                  type="relief"
                  icon="add"
                  >Crear R.O</vs-button
                >
              </vs-row>
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
      errors: {},
      showRos: {},
      showTypeSends: {},
      showIssues: {},
      branchOffices: {},
      typeOfTransport: {},
      roles: {},
      users: {},
      userName: {},
      showTypeOfLoad: {},
      formRo: {
        ro: "",
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
        commercial: "",
        client_emails_id: "",
        customer_tracking_code: "",
        process_name: "ASIGNACIÓN DE LA OPERACIÓN",
        subjet: "",
        message: "",
        type_of_transport_id: "",
        groupEmails: "",
        is_partent: 1
      },
      counterDanger: false,
      emails: [],
      listProces: {
        name_process: "",
      },
      listNameGroups: {},
      activePrompt: false,
    };
  },
  created() {
    this.showRo();
    this.showTypeSend();
    this.showBranchOffices();
    this.showRoles();
    this.showUser();
    this.showTypeOfTransport();
    this.showTemplates();
    this.showMails();
  },
  methods: {
    backRo() {
      this.$router.push("/panel/show-ro");
    },
    addEmail() {
      if (this.formRo.client_emails_id) {
        this.emails.push(this.formRo.client_emails_id);
        this.formRo.client_emails_id = "";
        toastr.success("Se Agregó Con Éxito");
      } else {
        toastr.error("Debe Agregar Minimo Un Correo");
      }
    },
    removeEmail(index) {
      this.emails.splice(index, 1);
      toastr.error("Se Eliminó Con Éxito");
    },
    createRo() {
      let url = dominio.url + "/api/crear-ro";
      this.formRo.arrayEmails = this.emails;
      axios
        .post(url, this.formRo)
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
    showRo() {
      let url = dominio.url + "/api/mostrar-ros";
      axios.get(url).then((res) => {
        this.showRos = res.data.showRos;
      });
    },

    showTemplates() {
      let url = dominio.url + "/api/mostrar-procesos";
      axios.get(url).then((res) => {
        this.listProces = res.data.listProces;
      });
    },

    showTypeSend() {
      let url = dominio.url + "/api/mostrar-tipos-envio";
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
    showRoles() {
      let url = dominio.url + "/api/mostrar-roles";
      axios.get(url).then((res) => {
        this.roles = res.data.roles;
      });
    },
    showUser() {
      let url = dominio.url + "/api/mostrar-usuarios";
      axios.get(url).then((res) => {
        this.users = res.data.users;
        this.userName = res.data.userName;
      });
    },
    showTypeOfTransport() {
      let url = dominio.url + "/api/mostrar-tipo-transporte";
      axios.get(url).then((res) => {
        this.typeOfTransport = res.data.typeOfTransport;
      });
    },
    showMails() {
      let url = dominio.url + "/api/listar-grupo-correos";
      axios.get(url).then((res) => {
        this.listNameGroups = res.data.listNameGroups;
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
</style>
