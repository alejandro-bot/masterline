<template>
  <div>
    <vs-button
      class="buttonColor"
      color="primary"
      type="relief"
      icon="home"
      @click="returnHome()"
      >Volver a Inicio</vs-button
    >
    <vs-row class="mt-5" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="text-center mt-5" style="font-size: 30px">Perfil</h6>
          </div>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <vs-card actionable class="con-vs-cards-1 ml-2 mr-1 cardx">
                <div slot="header">
                  <h6 class="text-center">
                    <vs-avatar
                      size="150px"
                      src=" showUserAuth[0].profile_picture"
                      style="border: 2px solid #ff5000"
                    />
                  </h6>
                </div>
                <div class="mb-3 mt-0">
                  <h4 class="text-center" style="font-size: 15px">
                    {{ showUserAuth[0].first_name }}
                    {{ showUserAuth[0].last_name }}
                  </h4>
                </div>
                <div>
                  <h4 class="text-center" style="font-size: 15px">
                    {{ showUserAuth[0].date_of_birth }}
                  </h4>
                </div>
                <div class="mt-3">
                  <h4 class="text-center" style="font-size: 15px">
                    {{ showUserAuth[0].contact_cell_phone }}
                  </h4>
                </div>
              </vs-card>
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="6"
            >
              <vs-card actionable class="con-vs-cards-1 ml-2 mr-1 cardx">
                <div>
                  <div class="centerx icons-example">
                    <vs-input
                      class="mt-2 mb-1"
                      icon="account_circle"
                      style="width: 100%"
                      :value="'Cedula' + ': ' + showUserAuth[0].identification"
                      disabled
                    />

                    <vs-input
                      class="mt-1 mb-2"
                      icon="email"
                      style="width: 100%"
                      :value="'Correo' + ': ' + showUserAuth[0].email"
                      disabled
                    />

                    <vs-input
                      class="mt-1"
                      icon="badge"
                      style="width: 100%"
                      :value="'Cargo' + ': ' + showUserAuth[0].nameCharge"
                      disabled
                    />

                    <vs-input
                      class="mt-1"
                      icon="wc"
                      style="width: 100%"
                      :value="'Sexo' + ': ' + showUserAuth[0].nameGender"
                      disabled
                    />

                    <vs-input
                      class="mt-1"
                      icon="supervised_user_circle"
                      style="width: 100%"
                      :value="'Perfil' + ': ' + showUserAuth[0].nameRol"
                      disabled
                    />

                    <vs-input
                      class="mt-1"
                      icon="supervised_user_circle"
                      style="width: 100%; margin-top:-10px; !important"
                      :value="'Perfil' + ': ' + showUserAuth[0].nameOperation"
                      disabled
                    />
                  </div>
                </div>
              </vs-card>
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="6"
            >
              <vs-card actionable class="con-vs-cards-1 ml-2 mr-1 cardx">
                <div slot="header">
                </div>
                <div>
                   <div class="centerx icons-example">
                    <vs-input
                      class="mt-2 mb-1"
                      icon="account_circle"
                      style="width: 100%"
                      :value="'Division' + ': ' + showUserAuth[0].nameDivision"
                      disabled
                    />

                    <vs-input
                      class="mt-2 mb-2"
                      icon="email"
                      style="width: 100%"
                      :value="'Sucursal' + ': ' + showUserAuth[0].nameBranchOffice"
                      disabled
                    />

                    <vs-input
                      class="mt-2"
                      icon="badge"
                      style="width: 100%"
                      :value="'Genero' + ': ' + showUserAuth[0].nameGender"
                      disabled
                    />

                    <vs-input
                      class="mt-2"
                      icon="wc"
                      style="width: 100%"
                      :value="'Operación' + ': ' + showUserAuth[0].nameOperation"
                      disabled
                    />

                    <vs-input
                      class="mt-2"
                      icon="supervised_user_circle"
                      style="width: 100%"
                      :value="'Estado' + ': ' + showUserAuth[0].nameStatus"
                      disabled
                    />

                    <vs-input
                      class="mt-2"
                      icon="supervised_user_circle"
                      style="width: 100%; margin-top:-10px; !important"
                      :value="'Perfil' + ': ' + showUserAuth[0].nameRol"
                      disabled
                    />
                  </div>
                </div>
              </vs-card>
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="6"
            >
              <vs-card actionable class="con-vs-cards-1 ml-2 mr-1 cardx">
                <div slot="header">
                </div>
                <div>
                   <div class="centerx icons-example">
                    <vs-input
                      class="mt-2 mb-1"
                      icon="account_circle"
                      style="width: 100%"
                      :value="'Cargo' + ': ' + showUserAuth[0].nameCharge"
                      disabled
                    />

                    <vs-input
                      class="mt-2 mb-2"
                      icon="email"
                      style="width: 100%"
                      :value="'Nombres' + ': ' + showUserAuth[0].first_name"
                      disabled
                    />

                    <vs-input
                      class="mt-2"
                      icon="badge"
                      style="width: 100%"
                      :value="'Apellidos' + ': ' + showUserAuth[0].last_name"
                      disabled
                    />

                    <vs-input
                      class="mt-2"
                      icon="wc"
                      style="width: 100%"
                      :value="'Nombre Completo' + ': ' + showUserAuth[0].full_name"
                      disabled
                    />

                    <vs-input
                      class="mt-2"
                      icon="supervised_user_circle"
                      style="width: 100%"
                      :value="'Identificación' + ': ' + showUserAuth[0].identification"
                      disabled
                    />

                    <vs-input
                      class="mt-2"
                      icon="supervised_user_circle"
                      style="width: 100%; margin-top:-10px; !important"
                      :value="'Correo Electronico' + ': ' + showUserAuth[0].email"
                      disabled
                    />
                  </div>
                </div>
              </vs-card>
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="6"
            >
              <vs-card actionable class="con-vs-cards-1 ml-2 mr-1 cardx">
                <div slot="header">
                </div>
                <div>
                   <div class="centerx icons-example">
                    <vs-input
                      class="mt-2 mb-1"
                      icon="account_circle"
                      style="width: 100%"
                      :value="'Dia De Nacimiento' + ': ' + showUserAuth[0].date_of_birth"
                      disabled
                    />

                    <vs-input
                      class="mt-2 mb-2"
                      icon="email"
                      style="width: 100%"
                      :value="'Numero De Contacto' + ': ' + showUserAuth[0].contact_cell_phone"
                      disabled
                    />

                    <vs-input
                      class="mt-2"
                      icon="badge"
                      style="width: 100%"
                      :value="'Contraseña' + ': ' + showUserAuth[0].password"
                      disabled
                      type="password"
                    />

                    <vs-input
                      class="mt-2"
                      icon="wc"
                      style="width: 100%"
                      :value="'Contraseña Correo' + ': ' + showUserAuth[0].email_password"
                      disabled
                      type="password"
                    />

                    <vs-input
                      class="mt-2"
                      icon="supervised_user_circle"
                      style="width: 100%"
                      :value="'Id House' + ': ' + showUserAuth[0].id_house_bl_person"
                      disabled
                    />

                    <vs-input
                      class="mt-2"
                      icon="supervised_user_circle"
                      style="width: 100%; margin-top:-10px; !important"
                      :value="'Url Vcard' + ': ' + showUserAuth[0].url_vcard"
                      disabled
                    />
                  </div>
                </div>
              </vs-card>
            </vs-col>
          </vs-row>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import { dominio } from "/src/dominio.js";
export default {
  data() {
    return {
      showUserAuth: {},
    };
  },
  created() {
    this.showUser();
  },
  methods: {
    showUser() {
      let url = dominio.url + "/api/mostar-usuario-autentificado";
      axios.get(url).then((res) => {
        this.showUserAuth = res.data.showUserAuth;
      });
    },
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
.con-vs-cards-1 {
  width: 100%;
  height: auto;
  background: transparent !important;
  border-radius: 8px;
  margin-bottom: 20px;
  display: block;
  transition: all 0.3s ease;
}
</style>
