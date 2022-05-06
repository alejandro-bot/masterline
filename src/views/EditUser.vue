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
    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">






<h1 class="text-center mt-5 mb-3">Información usuario</h1>
<vs-row vs-w="12">
  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="12" >
    <div class="centerx colors-example">
                <vs-input
                class="movil escritorio"
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
  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="12">
    <div class="centerx colors-example">
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
              </div>
  </vs-col>
  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="12">
    <div class="centerx colors-example">
                <vs-input
                class="movil escritorio"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Cedula"
                  v-model="formUser.identification"
                  type="number"
                  @keypress="errors.identification = ''"
                />
                <div class="mt-2" v-if="errors.identification">
                  <span class="errors">{{ errors.identification[0] }}</span>
                </div>
              </div>
  </vs-col>
  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="12">
    <div class="centerx colors-example">
                <h6 style="margin-bottom: -10px; margin-left: 10px">Cargo</h6>
                <select
                  class="escritorio movil seleccionable"
                  v-model="formUser.position_id"
                  @change="errors.position_id = ''"
                >
                  <option value="">Seleccione</option>
                  <option
                    :key="item.id"
                    :value="item.id"
                    :text="item.name"
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
</vs-row>









<vs-row vs-w="12">
  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="12">
    <div class="centerx colors-example">
                <vs-input
                class="movil escritorio"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Correo Electronico"
                  v-model="formUser.email"
                  @keypress="errors.email = ''"
                />
                <div class="mt-2" v-if="errors.email">
                  <span class="errors">{{ errors.email[0] }}</span>
                </div>
              </div>
  </vs-col>
  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="12">
    <div class="centerx colors-example">
                <h6 class="tituloFinal2">Genero</h6>
                <select
                  class="
                  p-3
                   escritorio movil
                    seleccionable

                  "
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
  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="12">
     <div class="centerx colors-example">
                <h6 class="tituloFinal">Fecha de Nacimiento</h6>
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
  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="12">
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
</vs-row>
















<vs-row vs-w="12">
  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="12">
    <div class="centerx colors-example">
                <vs-input
                class="escritorio movil"
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
  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="12">
     <div class="centerx colors-example">
                <vs-input
                class="escritorio movil"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Contraseña Correo Electronico"
                  v-model="formUser.email_password"
                  type="password"
                  @keypress="errors.email_password = ''"
                />
                <div class="mt-2" v-if="errors.email_password">
                  <span class="errors">{{ errors.email_password[0] }}</span>
                </div>
              </div>
  </vs-col>
  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="12">
    <div class="centerx colors-example">
                <vs-input
                class="escritorio movil"
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
  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="12">
    <h6 class="tituloFinal2">Estado</h6>
                <select
                class="escritorio movil seleccionable"

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
  </vs-col>
</vs-row>









<vs-row vs-w="12">
  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="12" style="margin-top: -25px;">
    <div class="centerx colors-example">
                <vs-select
                  class="selectExample movil escritorio"
                  label="Nombre jefe"
                  v-model="user[0].id"
                  @change="errors.supervisor_id = ''"
                  disabled
                >
                  <vs-select-item
                    :key="index"
                    :value="item.id"
                    :text="item.first_name + ' ' + item.last_name"
                    v-for="(item, index) in user"
                  />
                </vs-select>
                <div class="mt-2" v-if="errors.supervisor_id">
                  <span class="errors">{{ errors.supervisor_id[0] }}</span>
                </div>
              </div>
  </vs-col>
  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="12">
    <div class="centerx colors-example">
                <h6 class="tituloFinal">
                  Operación
                </h6>
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
  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="12">
    <div class="centerx colors-example">
                <h6 class="tituloFinal">
                  Sucursal
                </h6>
                <select
                  class="escritorio movil seleccionable"
                  v-model="formUser.branch_office_id"
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
                <div class="mt-2" v-if="errors.branch_office_id">
                  <span class="errors">{{ errors.branch_office_id[0] }}</span>
                </div>
              </div>
  </vs-col>
     <vs-col class="mobil desaparecer" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="2" vs-xs="12">
    </vs-col>
  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="12">
    <div class="centerx colors-example">
                <h6 class="tituloFinal">Perfil</h6>
                <select
                  class="escritorio3 movil seleccionable"
                  v-model="formUser.rol_id"
                  @change="errors.rol_id = ''"
                >
                  <option value="">Seleccione</option>
                  <option
                    :key="index"
                    :value="item.id"
                    v-for="(item, index) in roles"
                  >
                    {{ item.name }}
                  </option>
                </select>
                <div class="mt-2" v-if="errors.rol_id">
                  <span class="errors">{{ errors.rol_id[0] }}</span>
                </div>
              </div>
  </vs-col>

  <vs-col class="mobil" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="12">
    <div class="centerx colors-example">
                <h6 class="tituloFinal">Divisón</h6>
                <select
                  class="escritorio3 movil seleccionable"
                  v-model="formUser.branch_division_id"
                  @change="errors.branch_division_id = ''"
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
  <vs-col class="mobil mt-3 mb-3" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" style="text-align:-webkit-center;">
     <vs-button
                  class="buttonColor botonGrande"
                  @click="EditUser()"
                  color="success"
                  type="relief"
                  icon="edit"
                  >Editar</vs-button
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
      genders: {},
      charges: {},
      status: {},
      errors: {},
      user: {},
      operations: {},
      branchDivisions: {},
      branchOffices: {},
      roles: {},
      id: this.$route.params && this.$route.params.id,
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
    this.showUser();
    this.showUsers();
  },
  methods: {
    EditUser() {
      let url = dominio.url + "/api/editar-usuario/" + this.id;
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
    showUser() {
      let url = dominio.url + "/api/editar-usuario/" + this.id;
      axios.get(url).then((res) => {
        this.getUser = res.data.getUser;
        this.formUser.first_name = this.getUser.first_name;
        this.formUser.last_name = this.getUser.last_name;
        this.formUser.identification = this.getUser.identification;
        this.formUser.position_id = this.getUser.position_id;
        this.formUser.email = this.getUser.email;
        this.formUser.gender_id = this.getUser.gender_id;
        this.formUser.date_of_birth = this.getUser.date_of_birth;
        this.formUser.contact_cell_phone = this.getUser.contact_cell_phone;
        this.formUser.password = this.getUser.password;
        this.formUser.email_password = this.getUser.email_password;
        this.formUser.url_vcard = this.getUser.url_vcard;
        this.formUser.status_id = this.getUser.status_id;
        this.formUser.supervisor_id = this.getUser.supervisor_id;
        this.formUser.operation_id = this.getUser.operation_id;
        this.formUser.branch_office_id = this.getUser.branch_office_id;
        this.formUser.rol_id = this.getUser.rol_id;
        this.formUser.branch_division_id = this.getUser.branch_division_id;
      });
    },
    showUsers() {
      let url = dominio.url + "/api/editar-usuario/" + this.id;
      axios.get(url).then((res) => {
        this.user = res.data.user;
      });
    },
    backUsers() {
      this.$router.push("/panel/users");
    },
  },
};
</script>
<style>
.widthInput {
  width: 100px;
}
.errors {
  color: red;
  text-align: right;
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
@media only screen and (min-width: 901px) {
  .escritorio {
    margin-top: 10px;
    width: 100%;
    padding: 5px;
  }
  .mobil {
    padding: 6px;
  }
  .tituloFinal
  {
    margin-bottom: -10px;
    margin-left: 10px;
    font-size: .7rem;
    color: #c2c6dc !important;
    margin-top: -3px;
  }
  .tituloFinal2
  {
    margin-bottom: -10px;
    margin-left: 10px;
    font-size: .7rem;
    color: #c2c6dc !important;
    margin-top: -3px;
    margin-bottom: -2px;
  }
  .escritorio3
  {
    width: 368px;
    margin-top: 13px;
    margin-left: 5px;
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
  .tituloFinal
  {
    margin-bottom: -18px;
    margin-left: 10px;
    font-size: .7rem;
    color: #c2c6dc !important;
    margin-top: 3px;
  }
  .tituloFinal2
  {
    margin-bottom: -20px;
    margin-left: 10px;
    font-size: .7rem;
    color: #c2c6dc !important;
    margin-top: 5px;
  }
  .desaparecer
  {
    display: none;
  }
  .botonGrande
  {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
  }
}
</style>
