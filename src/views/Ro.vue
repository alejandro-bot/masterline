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
              <h1
                class="text-center mt-5"
                style="font-size: 20px; font-weight: 700"
              >
                CREACION DE R.O
              </h1>
            </strong>
          </div>
          <h6 class="card-title text-center">R.O. NÚMERO Y TIPO DE ENVÍO</h6>

          <vs-row vs-w="12">
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6 style="margin-bottom: 0px">Tipo De Transporte</h6>
                <select
                  class="seleccionable escritorio movil mt-2"
                  label="Modo De Transporte*"
                  v-model="formRo.type_of_transport_id"
                  @change="
                    showIssue(formRo.type_of_transport_id);
                    showTypeOfLoads(formRo.type_of_transport_id);
                    showTypeSend(formRo.type_of_transport_id);
                    errors.type_of_transport_id = '';
                  "
                  style="width: 100%"
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
                <div class="mt-2 text-left" v-if="errors.type_of_transport_id">
                  <span class="errors">{{
                    errors.type_of_transport_id[0]
                  }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="escritorio movil mt-5"
                  color="rgb(213, 14, 151)"
                  label-placeholder="RO-AAAA-/00-0000 *"
                  v-model="formRo.ro"
                  @keypress="errors.ro = ''"
                />
                <div class="mt-3 ml-1 text-left" v-if="errors.ro">
                  <span class="errors">{{ errors.ro[0] }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6 style="margin-bottom: 0px">Tipo De Envio</h6>
                <select
                  class="movil escritorio seleccionable mt-2"
                  label="Tipo De Embarque *"
                  v-model="formRo.type_id"
                  @change="errors.type_id = ''"
                  style="width: 100%"
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
                <div class="mt-1 text-left" v-if="errors.type_id">
                  <span class="errors">{{ errors.type_id[0] }}</span>
                </div>
              </div>
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card class="con-vs-cards">
          <div slot="header"></div>
          <h6 class="card-title text-center">¿ R.O. CON MAS DE UN HBL ?</h6>
          <vs-row>
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <div class="centerx colors-example text-center">
                <select
                  class="seleccionable movil escritorio escritorioEspecial"
                  label="Modo De Transporte*"
                  v-model="formRo.is_parent"
                >
                  <option value="">Seleccione</option>
                  <option value="1">Si</option>
                  <option value="0">No</option>
                </select>
              </div>
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card class="con-vs-cards" v-if="formRo.type_of_transport_id == 3">
          <h6 class="card-title text-center">DETALLES DEL TRANSPORTADOR</h6>
          <vs-row vs-w="12">
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="6"
              vs-sm="6"
              vs-xs="12"
            >
              <vs-input
                class="movil escritorio"
                color="rgb(213, 14, 151)"
                label-placeholder="Transportadora"
                v-model="formRo.carrier"
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="6"
              vs-sm="6"
              vs-xs="12"
            >
              <vs-input
                class="movil escritorio"
                color="rgb(213, 14, 151)"
                label-placeholder="Típo de Vehículo"
                v-model="formRo.vehicle"
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="6"
              vs-sm="6"
              vs-xs="12"
            >
              <vs-input
                class="movil escritorio"
                color="rgb(213, 14, 151)"
                label-placeholder="Conductor"
                v-model="formRo.driver"
              />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="6"
              vs-sm="6"
              vs-xs="12"
            >
              <vs-input
                class="movil escritorio"
                color="rgb(213, 14, 151)"
                label-placeholder="Placa"
                v-model="formRo.plaque"
              />
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card class="con-vs-cards">
          <h6 class="card-title text-center">PLANIFICACIÓN DE EMBARQUE</h6>

          <vs-row vs-w="12">
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="movil escritorio"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Puerto De Origen *"
                  v-model="formRo.starting_place"
                  @keypress="errors.starting_place = ''"
                />
                <div class="mt-1 mr-3 text-center" v-if="errors.starting_place">
                  <span class="errors">{{ errors.starting_place[0] }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="movil escritorio"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Puerto De Destino *"
                  v-model="formRo.destination_place"
                  @keypress="errors.destination_place = ''"
                />
                <div class="mt-1 text-left" v-if="errors.destination_place">
                  <span class="errors">{{ errors.destination_place[0] }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6 class="emsionMovil">Emisión HBL *</h6>
                <select
                  class="movil escritorio seleccionable"
                  label="Tipo De Embarque *"
                  v-model="formRo.issue_id"
                  @change="errors.issue_id = ''"
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
                <div class="mt-1 ml-0 text-left" v-if="errors.issue_id">
                  <span class="errors">{{ errors.issue_id[0] }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="movil escritorio"
                  label="ETD"
                  v-model="formRo.etd"
                  type="date"
                />
              </div>
            </vs-col>
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                class="movil escritorio"
                label="ETA"
                v-model="formRo.eta"
                type="date"
              />
            </vs-col>
            <vs-col
              class="mt-3"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                class="movil escritorio mt-5"
                color="rgb(213, 14, 151)"
                label-placeholder="Número HBL"
                v-model="formRo.num_hbl"
              />
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card class="con-vs-cards">
          <h6 class="card-title text-center">DETALLES DE LA CARGA</h6>

          <vs-row vs-w="12">
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6 style="margin-top: -10px">Tipo Carga</h6>
                <select
                  class="movil escritorio seleccionable acomodarEscritorio"
                  v-model="formRo.type_of_load_id"
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
            </vs-col>
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="movil escritorio"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Cantidad"
                  v-model="formRo.quantity"
                />
              </div>
            </vs-col>
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="movil escritorio"
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
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                class="movil escritorio"
                color="rgb(213, 14, 151)"
                label-placeholder="Tipo de Contenedor"
                v-if="
                  formRo.type_of_transport_id == 1 ||
                  formRo.type_of_transport_id == 3 ||
                  formRo.type_of_transport_id == 0
                "
                v-model="formRo.kind_of_container"
              />
            </vs-col>
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                class="movil escritorio"
                color="rgb(213, 14, 151)"
                label-placeholder="Peso Bruto"
                v-model="formRo.weight"
              />
            </vs-col>
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <vs-input
                class="movil escritorio"
                color="rgb(213, 14, 151)"
                label-placeholder="Volumen"
                v-model="formRo.volume"
              />
            </vs-col>
          </vs-row>

          <vs-row>
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
            </vs-col>
          </vs-row>
        </vs-card>
        <vs-card class="con-vs-cards">
          <h6 class="card-title text-center">ASIGNACIONES</h6>

          <vs-row vs-w="12">
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6
                  style="
                    margin-bottom: -10px;
                    margin-top: 8px;
                    margin-left: 5px;
                  "
                >
                  Sucursal *
                </h6>
                <select
                  class="escritorio movil seleccionable"
                  v-model="formRo.branch_office_id"
                  @change="errors.branch_office_id = ''"
                >
                  <option value="">Seleccione</option>
                  <option
                    :key="index"
                    :value="item.id"
                    v-for="(item, index) in branchOffices"
                  >
                    {{ item.name }}
                  </option>
                </select>
                <div class="mt-1 ml-1 text-left" v-if="errors.branch_office_id">
                  <span class="errors">{{ errors.branch_office_id[0] }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              class="mb-3"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="escritorio movil mt-0 mb-3"
                  color="rgb(213, 14, 151)"
                  label="Nombre Usuario"
                  disabled
                  v-model="userName"
                />
              </div>
            </vs-col>
            <vs-col
              class="mt-1"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6 style="margin-top: 0px; margin-bottom: -13px">
                  Grupo De Correos
                </h6>
                <select
                  class="escritorio movil seleccionable mt-5"
                  v-model="formRo.groupEmails"
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
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6 style="margin-bottom: 0px">Comercial *</h6>
                <select
                  class="escritorio movil seleccionable"
                  v-model="formRo.commercial"
                  @change="errors.commercial = ''"
                >
                  <option value="">Seleccione</option>
                  <option
                    :key="index"
                    :value="item.id"
                    v-for="(item, index) in users"
                  >
                    {{ item.first_name }} {{ item.last_name }}
                  </option>
                </select>
                <div class="mt-1 ml-1 text-left" v-if="errors.commercial">
                  <span class="errors">{{ errors.commercial[0] }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="10"
            >
              <vs-input
                class="escritorio movil mt-5 escritorioEmail"
                color="rgb(213, 14, 151)"
                label-placeholder="Correos Electronicos Cliente"
                v-model="formRo.client_emails_id"
              />

              <vs-button
                class="mt-1 botonEmail"
                @click="addEmail()"
                color="primary"
                type="border"
                icon="add"
              ></vs-button>
            </vs-col>

            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="movil escritorio mt-5"
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

          <vs-row vs-w="12">
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="6"
              vs-sm="6"
              vs-xs="12"
            >
              <vs-input
                class="movil escritorio"
                color="rgb(213, 14, 151)"
                label-placeholder="Proceso Actual"
                v-model="formRo.process_name"
                disabled
              />
            </vs-col>
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="6"
              vs-sm="6"
              vs-xs="12"
            >
              <vs-input
                class="movil escritorio"
                color="rgb(213, 14, 151)"
                label-placeholder="Asunto Correo *"
                v-model="formRo.subjet"
                @keypress="errors.subjet = ''"
                disabled
              />
              <div class="mt-0" v-if="errors.subjet" style="margin-left: 210px">
                <span class="errors">{{ errors.subjet[0] }}</span>
              </div>
            </vs-col>
            <vs-col
            class="p-2"
              vs-justify="center"
              vs-align="center"
              vs-lg="12"
              vs-sm="12"
              vs-xs="12"
            >
              <vs-textarea
                class="movil escritorio"
                counter="100"
                label="¡Hola!... ¡Es un gusto saludarte! Iniciamos el seguimiento de tu nuevo embarque... Estamos muy contentos de tenerte como cliente, te comparto mis datos para que puedas contactarme cuando lo necesites. ¡Muchas gracias por trabajar con Masterline!"
                :counter-danger.sync="counterDanger"
                v-model="formRo.message"
                disabled
              />
            </vs-col>
            <div class="container">
              <div class="row" style="text-align: -webkit-center">
                <div class="col-sm-12">
                  <vs-button
                    class="movil"
                    @click="createRo()"
                    color="#ff6600"
                    type="relief"
                    icon="add"
                    >Crear R.O</vs-button
                  >
                </div>
              </div>
            </div>
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
        is_parent: "",
      },
      counterDanger: false,
      emails: [],
      listNameGroups: {},
      activePrompt: false,
    };
  },
  created() {
    this.showRo();
    this.showBranchOffices();
    this.showRoles();
    this.showUser();
    this.showTypeOfTransport();
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
    showTypeSend(id) {
      let url = dominio.url + "/api/mostrar-tipos-envio/" + id;
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
      let url = dominio.url + "/api/mostrar-usuarios-comerciales";
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
  background: #ff6600 !important;
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
[dir] .theme-dark .vs-con-textarea {
    background: #2c2c2c;
}
@media only screen and (min-width: 901px) {
  .escritorio {
    margin-top: 10px;
    width: 100%;
    padding: 5px;
  }
  .emsionMovil {
    margin-top: -10px;
    margin-left: 4px;
  }
  .acomodarEscritorio {
    margin-left: 5px;
    width: 98% !important;
  }
  .escritorioEmail {
    width: 90% !important;
  }
  .botonEmail {
    margin-left: 89%;
    margin-top: -43px !important;
  }
  .escritorioEspecial
  {
    width: 33%;
  }
}
@media only screen and (max-width: 900px) {
  .movil {
    width: 100%;
    margin-top: 20px;
  }
  .emsionMovil {
    margin-top: 15px;
    margin-left: 4px;
  }
  .escritorioEmail {
    margin-top: 30px !important;
    width: 293px;
  }
  .botonEmail {
    margin-left: 105%;
    margin-top: -39px !important;
  }
}
</style>
