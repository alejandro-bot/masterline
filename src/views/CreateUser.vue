<template>
  <div>
    <vs-button
      class="mb-5 buttonColor"
      @click="backUsers()"
      color="primary"
      type="relief"
      icon="person_add"
      >Usuarios</vs-button
    >
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header" class="mt-3">
            <strong>
              <h1
                class="text-center mt-5"
                style="font-size: 20px; font-weight: 700"
              >
                CREACIÓN DE USUARIO
              </h1>
            </strong>
          </div>

          <vs-row vs-w="12">
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="escritorio movil"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Nombres"
                  v-model="formUser.first_name"
                  @keypress="errors.first_name = ''"
                />
                <div class="mt-2" v-if="errors.first_name">
                  <span class="errors">{{ errors.first_name[0] }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <vs-input
                class="escritorio movil"
                color="rgb(213, 14, 151)"
                label-placeholder="Apellidos"
                v-model="formUser.last_name"
                @keypress="errors.last_name = ''"
              />
              <div class="mt-2" v-if="errors.last_name">
                <span class="errors">{{ errors.last_name[0] }}</span>
              </div>
            </vs-col>
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <vs-input
                class="escritorio movil"
                color="rgb(213, 14, 151)"
                label-placeholder="Correo Electronico"
                v-model="formUser.email"
                @keypress="errors.email = ''"
              />
              <div class="mt-0" v-if="errors.email">
                <span class="errors">{{ errors.email[0] }}</span>
              </div>
            </vs-col>
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <vs-input
                class="escritorio movil"
                color="rgb(213, 14, 151)"
                label-placeholder="Cedula"
                v-model="formUser.identification"
                type="number"
                @keypress="errors.identification = ''"
              />
              <div class="mt-2" v-if="errors.identification">
                <span class="errors">{{ errors.identification[0] }}</span>
              </div>
            </vs-col>
          </vs-row>

          <vs-row vs-w="12">
            <vs-col
              class="mobil"
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6 style="margin-bottom: -14px; margin-left: 10px">Divisón</h6>
                <select
                  class="mb-5 mt-5 escritorio movil seleccionable"
                  v-model="formUser.branch_division_id"
                >
                  <option value="">Seleccione</option>
                  <option
                    :key="index"
                    :value="item.id"
                    v-for="(item, index) in branchDivisions"
                  >
                    {{ item.name }}
                  </option>
                </select>
                <div class="mt-2" v-if="errors.branch_division_id">
                  <span class="errors">{{ errors.branch_division_id[0] }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              class="mobil"
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6 style="margin-bottom: -14px; margin-left: 10px">Cargo</h6>
                <select
                  class="mb-5 mt-5 escritorio movil seleccionable"
                  v-model="formUser.position_id"
                  @change="errors.position_id = ''"
                >
                  <option value="">Seleccione</option>
                  <option
                    :key="item.id"
                    :value="item.id"
                    v-for="item in charges"
                  >
                    {{ item.name }}
                  </option>
                </select>
                <div class="mt-2" v-if="errors.position_id">
                  <span class="errors">{{ errors.position_id[0] }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              class="mobil"
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6 style="margin-bottom: -14px; margin-left: 10px">
                  Sucursal
                </h6>
                <select
                  class="mb-5 mt-5 escritorio movil seleccionable"
                  v-model="formUser.branch_office_id"
                  @change="
                    errors.branch_office_id = '';
                    supervisor();
                  "
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
                <div class="mt-2" v-if="errors.branch_office_id">
                  <span class="errors">{{ errors.branch_office_id[0] }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              class="mobil"
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6 style="margin-bottom: -14px; margin-left: 10px">
                  Nombre jefe
                </h6>
                <select
                  class="mb-5 mt-5 escritorio movil seleccionable"
                  v-model="formUser.supervisor_id"
                  @change="errors.supervisor_id = ''"
                >
                  <option value="">Seleccione</option>
                  <option
                    :key="index"
                    :value="item.id"
                    v-for="(item, index) in user"
                  >
                    {{ item.first_name }} {{ item.last_name }}
                  </option>
                </select>
                <div class="mt-2" v-if="errors.supervisor_id">
                  <span class="errors">{{ errors.supervisor_id[0] }}</span>
                </div>
              </div>
            </vs-col>
          </vs-row>

          <vs-row vs-w="12">
            <vs-col
              class="mobil"
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6
                  style="
                    margin-bottom: -6px;
                    margin-top: -10px;
                    margin-left: 10px;
                  "
                >
                  Genero
                </h6>
                <select
                  class="movil escritorio seleccionable mt-5"
                  v-model="formUser.gender_id"
                  @change="errors.gender_id = ''"
                >
                  <option value="">Seleccione</option>
                  <option
                    :key="item.id"
                    :value="item.id"
                    v-for="item in genders"
                  >
                    {{ item.name }}
                  </option>
                </select>
                <div class="mt-2" v-if="errors.gender_id">
                  <span class="errors">{{ errors.gender_id[0] }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              class="mobil"
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6 class="tituloEscritorio">Fecha de Nacimiento</h6>
                <vs-input
                  class="movil escritorio"
                  color="rgb(213, 14, 151)"
                  v-model="formUser.date_of_birth"
                  type="date"
                  @change="errors.date_of_birth = ''"
                />
                <div class="mt-2" v-if="errors.date_of_birth">
                  <span class="errors">{{ errors.date_of_birth[0] }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              class="mobil"
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="movil escritorio"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Celular de Contacto"
                  v-model="formUser.contact_cell_phone"
                  type="number"
                  @keypress="errors.contact_cell_phone = ''"
                />
                <div class="mt-2" v-if="errors.contact_cell_phone">
                  <span class="errors">{{ errors.contact_cell_phone[0] }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              class="mobil"
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="movil escritorio"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Contraseña Usuario"
                  v-model="formUser.password"
                  type="password"
                  @keypress="errors.password = ''"
                />
                <div class="mt-2" v-if="errors.password">
                  <span class="errors">{{ errors.password[0] }}</span>
                </div>
              </div>
            </vs-col>
          </vs-row>

          <vs-row vs-w="12">
            <vs-col
              class="mobil"
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <vs-input
                class="movil escritorio"
                color="rgb(213, 14, 151)"
                label-placeholder="Contraseña Correo Electronico"
                v-model="formUser.email_password"
                type="password"
                @keypress="errors.email_password = ''"
              />
              <div class="mt-2" v-if="errors.email_password">
                <span class="errors">{{ errors.email_password[0] }}</span>
              </div>
            </vs-col>
            <vs-col
              class="mobil"
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="movil escritorio"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Url Vcard"
                  v-model="formUser.url_vcard"
                  @keypress="errors.url_vcard = ''"
                />
                <div class="mt-2" v-if="errors.url_vcard">
                  <span class="errors">{{ errors.url_vcard[0] }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              class="mobil"
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6 class="loMismo">Estado</h6>
                <select
                  class="movil escritorio seleccionable"
                  v-model="formUser.status_id"
                  @change="errors.status_id = ''"
                >
                  <option value="">Seleccione</option>
                  <option
                    :key="index"
                    :value="item.id"
                    v-for="(item, index) in status"
                  >
                    {{ item.name }}
                  </option>
                </select>
                <div class="mt-2" v-if="errors.status_id">
                  <span class="errors">{{ errors.status_id[0] }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              class="mobil mb-5"
              vs-justify="center"
              vs-align="center"
              vs-lg="3"
              vs-sm="3"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6 class="loMismo">Operación</h6>
                <select
                  class="movil escritorio seleccionable"
                  v-model="formUser.operation_id"
                  @change="errors.operation_id = ''"
                >
                  <option value="">Seleccione</option>
                  <option
                    :key="index"
                    :value="item.id"
                    v-for="(item, index) in operations"
                  >
                    {{ item.name }}
                  </option>
                </select>
                <div class="mt-2" v-if="errors.operation_id">
                  <span class="errors">{{ errors.operation_id[0] }}</span>
                </div>
              </div>
            </vs-col>
            <vs-col
              class="mobil mt-5 mb-5"
              vs-justify="center"
              vs-align="center"
              vs-lg="12"
              vs-sm="12"
              vs-xs="12"
              style="text-align: -webkit-center"
            >
              <vs-button
                @click="CreateUser()"
                color="#ff5000"
                type="relief"
                icon="person_add"
                >Crear Usuario</vs-button
              >
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
      genders: {},
      charges: {},
      status: {},
      branchDivisions: {},
      operations: {},
      branchOffices: {},
      roles: {},
      formUser: {
        first_name: "",
        last_name: "",
        identification: "",
        position_id: "",
        email: "",
        gender_id: "",
        date_of_birth: "",
        contact_cell_phone: "",
        password: "",
        email_password: "",
        url_vcard: "",
        status_id: "",
        supervisor_id: "",
        branch_office_id: "",
        name: "",
        branch_division_id: "",
      },
      user: {},
    };
  },
  created() {
    this.showGenders();
    this.showCharges();
    this.showStatus();
    this.showOperations();
    this.showBranchOffices();
    this.showRoles();
    this.showBranchDivisions();
  },
  methods: {
    CreateUser() {
      let url = dominio.url + "/api/crear-usuario";
      axios
        .post(url, this.formUser)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.$router.push("/panel/users");
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    showGenders() {
      let url = dominio.url + "/api/mostrar-generos";
      axios.get(url).then((res) => {
        this.genders = res.data.genders;
      });
    },
    showBoss() {
      let url = dominio.url + "/api/consultar-supervisor";
      axios
        .get(url, {
          params: {
            branch_division_id: this.formUser.branch_division_id,
            position_id: this.formUser.position_id,
            branch_office_id: this.formUser.branch_office_id,
          },
        })
        .then((res) => {
          this.user = res.data.user;
        });
    },
    showCharges() {
      let url = dominio.url + "/api/mostrar-cargos";
      axios.get(url).then((res) => {
        this.charges = res.data.charges;
      });
    },
    showStatus() {
      let url = dominio.url + "/api/mostrar-estados";
      axios.get(url).then((res) => {
        this.status = res.data.status;
      });
    },
    showOperations() {
      let url = dominio.url + "/api/mostrar-operaciones";
      axios.get(url).then((res) => {
        this.operations = res.data.operations;
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
    showBranchDivisions() {
      let url = dominio.url + "/api/mostrar-divisiones";
      axios.get(url).then((res) => {
        this.branchDivisions = res.data.branchDivisions;
      });
    },
    backUsers() {
      this.$router.push("/panel/users");
    },
    supervisor() {
      if (
        this.formUser.branch_division_id &&
        this.formUser.position_id &&
        this.formUser.branch_office_id
      ) {
        this.showBoss();
      } else {
        toastr.error("Debe Escoger División, Cargo y Sucursal");
      }
    },
  },
};
</script>
<style>
.errors {
  color: red;
  text-align: right;
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
  border: 1px solid #ff5000;
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

@media only screen and (min-width: 901px) {
  .escritorio {
    margin-top: 10px;
    width: 100%;
    padding: 5px;
  }
  .mobil {
    padding: 6px;
  }
  .tituloEscritorio {
    margin-bottom: -6px;
    margin-top: -10px;
    margin-left: 10px;
  }
  .loMismo {
    margin-top: -5px;
    margin-bottom: -5px;
    margin-left: 10px;
  }
}
@media only screen and (max-width: 900px) {
  .movil {
    width: 100%;
    margin-top: 30px !important;
  }
  .mobil {
    margin-bottom: -10px;
    margin-top: 10px;
  }

  .tituloEscritorio {
    margin-top: 13px;
    margin-left: 11px;
    margin-bottom: -14px;
  }
  .loMismo {
    margin-top: 15px;
    margin-bottom: -13px;
    margin-left: 10px;
  }
}
</style>
