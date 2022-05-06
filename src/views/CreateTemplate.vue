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
              <h1 class="text-center" style="font-size: 18px; font-weight: 700">
                CREACION DE PLANTILLA
              </h1>
            </strong>
          </div>

          <vs-row vs-w="12">
            <vs-col
              class="p-2"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6 class="tituloSelect">Modo De Transporte</h6>
                <select
                  class="escritorio movil seleccionable"
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
            </vs-col>
            <vs-col
              class="p-2"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <h6 class="tituloSelect">Tipo De Embarque</h6>
                <select
                  class="escritorio movil seleccionable"
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
            </vs-col>
            <vs-col
              class="p-2"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="4"
              vs-xs="12"
            >
              <div class="centerx colors-example">
                <vs-input
                  class="escritorio movil inputRE"
                  color="rgb(213, 14, 151)"
                  label-placeholder="Proceso"
                  v-model="formTemplate.process_name"
                />
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
              <wysiwyg
                class="escritorio movil"
                v-model="formTemplate.tracing"
                style="background: white; color: black; height: auto"
              />
            </vs-col>
            <vs-col
              class="p-2 mt-5"
              vs-justify="center"
              vs-align="center"
              vs-lg="12"
              vs-sm="12"
              vs-xs="12"
              style="text-align: -webkit-center"
            >
              <vs-button
                class="buttonColor botonMovil"
                color="#ff6600"
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
  background: #ff6600 !important;
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
  .tituloSelect {
    margin-bottom: -5px;
  }
  .inputRE {
    margin-bottom: -20px;
    margin-top: 14px !important;
  }
}
@media only screen and (max-width: 900px) {
  .movil {
    width: 100%;
    margin-top: 30px !important;
  }
  .tituloSelect {
    margin-bottom: -20px;
  }
  .botonMovil {
    width: 96%;
    margin-left: 6px;
  }
  .tituloSelect {
    margin-bottom: -21px;
  }
  .inputRE {
    margin-bottom: -20px;
    margin-top: 9px !important;
  }
  .botonMovil {
    width: 98%;
  }
  [dir] .editr--toolbar {
    display: none;
  }
}
</style>
