<template>
  <div>
    <vs-button class="buttonColor" @click="regresar()" color="primary" type="relief" icon="home"
      >Regresar</vs-button
    >
    <vs-row class="mt-5 text-center" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h3>Creación de Perfiles</h3>
          </div>
          <div>
            <vs-row vs-justify="center" class="mt-5">
              <vs-input
                icon="add"
                label-placeholder="Crear Perfil"
                v-model="name"
                @keypress="errors.name = ''"
              />
            </vs-row>
            <div class="mt-3" v-if="errors.name">
              <span class="errors">{{ errors.name[0] }}</span>
            </div>
            <vs-row vs-justify="center" class="mt-5 mb-3">
              <vs-button @click="CreateRol()" color="#ff6600" type="relief" icon="person_add"
                >Crear Perfil</vs-button
              >
            </vs-row>
          </div>
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
      errors: {
        name: ''
      },
      name: "",
    };
  },
  methods: {
    CreateRol() {
      let url = dominio.url + "/api/crear-rol";
      axios
        .post(url, {
          name: this.name,
        })
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.$router.push("/panel/");
          }
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    regresar() {
      this.$router.push("/panel/perfiles-usuarios");
    },
  },
};
</script>
<style>
.icons-example {
  margin: 15px;
  width: 50px;
}
.vs-input {
  margin: 0px;
  width: 80%;
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
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    border: 1px solid #ff6600;
}
.buttonColor {
  background: #ff6600 !important;
}
</style>

