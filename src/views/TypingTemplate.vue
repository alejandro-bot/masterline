<template>
  <div>
    <vs-button
      v-if="this.$store.state.user.permissions.includes('BOTON CREAR PLANTILLA')"
      class="buttonColor"
      color="primary"
      type="relief"
      icon="description"
      @click="createTemplate()"
      >Crear Plantilla</vs-button
    >

    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <strong>
              <h1 class="card-title text-center">PLANTILLAS CARGADAS</h1>
            </strong>
          </div>
          <vs-table>
            <template slot="header">
              <h3 class="mb-5">PLANTILLAS DE TIPIFICACIÓN</h3>
            </template>
            <template slot="thead">
              <vs-th> Proceso </vs-th>
              <vs-th> Operación </vs-th>
              <vs-th> Tipo </vs-th>
              <vs-th> Acciones </vs-th>
            </template>
            <template>
              <vs-tr :key="index" v-for="(item, index) in listProces">
                <vs-td> {{ item.process_name }} </vs-td>
                <vs-td> {{ item.type_of_transport.name }} </vs-td>
                <vs-td> {{ item.type_of_load.name }} </vs-td>
                <vs-td>
                  <vs-row>
                    <vs-col
                      vs-type="flex"
                      vs-justify="left"
                      vs-align="left"
                      vs-w="12"
                    >
                      <router-link
                        :to="'/panel/update-template/' + item.id"
                        v-if="this.$store.state.user.permissions.includes('BOTON EDITAR PLANTILLA')"
                      >
                        <vs-button
                          class="mr-1 ml-1"
                          radius
                          color="success"
                          type="border"
                          icon="edit"
                        ></vs-button>
                      </router-link>
                      <vs-button
                        v-if="this.$store.state.user.permissions.includes('BOTON ELIMINAR PLANTILLAS')"
                        class="mr-1 ml-1"
                        radius
                        color="danger"
                        type="border"
                        icon="delete_outline"
                        @click="deleteTemplate(item.id)"
                      ></vs-button>
                    </vs-col>
                  </vs-row>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
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
      listProces: {},
    };
  },
  created() {
    this.listProcess();
  },
  methods: {
    createTemplate() {
      this.$router.push("/panel/create-template");
    },
    listProcess() {
      let url = dominio.url + "/api/mostrar-procesos";
      axios.get(url).then((res) => {
        this.listProces = res.data.listProces;
      });
    },
    deleteTemplate(id) {
      let url = dominio.url + "/api/eliminar-plantilla/" + id;
      axios
        .post(url)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.listProcess();
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<style>
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
.buttonColor {
  background: #ff5000 !important;
}
</style>
