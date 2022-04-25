<template>
  <div>
    <vs-button
      class="buttonColor"
      color="primary"
      type="relief"
      icon="reply"
      @click="backTemplates()"
      >Volver A Plantillas</vs-button
    >
    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header" class="mt-3">
            <strong>
              <h1 class="text-center">CREACION DE PLANTILLA</h1>
            </strong>
          </div>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
            >
              <div class="centerx colors-example">
                <h6 style="margin-bottom: -14px; margin-left: 20px">
                  Modo De Transporte
                </h6>
                <select
                  class="ml-5 mr-5 mt-5 mb-3 seleccionable"
                  v-model="formTemplate.type_of_transport_id"
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
                <h6 style="margin-bottom: -14px; margin-left: 20px">
                  Tipo De Embarque
                </h6>
                <select
                  class="ml-5 mr-5 mt-5 mb-3 seleccionable"
                  v-model="formTemplate.type_id"
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
              <div class="centerx colors-example">
                <vs-input
                  class="ml-0 mr-5 mt-5 mb-3"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Proceso"
                  v-model="formTemplate.process_name"
                />
              </div>
            </vs-col>
          </vs-row>
          <vs-row vs-w="12">
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="12"
              vs-sm="12"
              vs-xs="12"
            >
              <wysiwyg
                class="mt-5 mb-5 ml-5 mr-5"
                v-model="formTemplate.tracing"
                style="background: white; color: black; height: auto"
              />
            </vs-col>
          </vs-row>
          <vs-row vs-w="12">
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="12"
              vs-sm="12"
              vs-xs="12"
            >
              <vs-button
                color="#ff5000"
                type="relief"
                icon="send"
                @click="CreateTemplate()"
                >Crear Plantilla</vs-button
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
import "vue-wysiwyg/dist/vueWysiwyg.css";
export default {
  data() {
    return {
      typeOfTransport: {},
      showTypeSends: {},
      textarea: "",
      counterDanger: false,
      formTemplate: {
        type_of_transport_id: "",
        type_id: "",
        process_name: "",
        tracing: "",
      },
    };
  },
  created() {
    this.showtypeOfTransport();
    this.showTypeSend();
  },
  methods: {
    CreateTemplate() {
      let url = dominio.url + "/api/crear-plantilla-tipificacion";
      axios
        .post(url, this.formTemplate)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.$router.push("/panel/typing-template");
          }
          if (res.data.code == 500) {
            toastr.error(res.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    backTemplates() {
      this.$router.push("/panel/typing-template");
    },
    showtypeOfTransport() {
      let url = dominio.url + "/api/mostrar-tipo-transporte";
      axios.get(url).then((res) => {
        this.typeOfTransport = res.data.typeOfTransport;
      });
    },
    showTypeSend() {
      let url = dominio.url + "/api/mostrar-tipos-envio";
      axios.get(url).then((res) => {
        this.showTypeSends = res.data.showTypeSends;
      });
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
</style>
