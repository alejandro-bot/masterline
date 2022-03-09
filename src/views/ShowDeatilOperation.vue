<template>
  <div>
    <vs-button
      class="buttonColor"
      color="primary"
      type="relief"
      icon="reply"
      @click="returnTeamResume()"
      >Regresar</vs-button
    >
    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards cardx">
          <div slot="header">
            <h6 class="card-title text-center">DETALLE PERSONAL A CARGO</h6>
          </div>
          <div>
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <div class="centerx colors-example">
                  <vs-select
                    class="selectExample ml-0 mr-4 mt-0 mb-3"
                    label="Tipo de Reporte"
                  >
                    <vs-select-item :value="''" :text="'Seleccione'" disabled />
                    <vs-select-item />
                  </vs-select>
                </div>
                <div class="centerx colors-example">
                  <vs-select
                    class="selectExample ml-0 mr-5 mt-0 mb-3"
                    label="Línea Grupo"
                  >
                    <vs-select-item :value="''" :text="'Primera Linea'" />
                    <vs-select-item :value="''" :text="'Segunda Linea'" />
                    <vs-select-item :value="''" :text="'Tercera Linea'" />
                  </vs-select>
                </div>
                <div class="centerx colors-example">
                  <vs-select
                    class="selectExample ml-0 mr-5 mt-0 mb-3"
                    label="Operación"
                  >
                    <vs-select-item
                      :key="index"
                      :value="item.id"
                      :text="item.name"
                      v-for="(item, index) in typeOfTransport"
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
                <div class="centerx colors-example mt-5 mb-3">
                  <vs-button
                    class="buttonColor"
                    color="primary"
                    type="relief"
                    icon="search"
                    @click="returnTeamResume()"
                    >Buscar</vs-button
                  >
                </div>
              </vs-col>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Resultados De la Busqueda</h6>
          </div>
          <div>
            <vs-table>
              <template slot="header"> </template>
              <template slot="thead">
                <vs-th> R.O </vs-th>
                <vs-th> Ultima Gestión </vs-th>
                <vs-th> Puerto Origen </vs-th>
                <vs-th> Puerto Destino </vs-th>
                <vs-th> ETD </vs-th>
                <vs-th> ETA </vs-th>
                <vs-th> Tipo </vs-th>
                <vs-th> Sucursal </vs-th>
                <vs-th> Propietario </vs-th>
                <vs-th> Jefe </vs-th>
              </template>

              <template slot-scope="{ data }">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td> hola </vs-td>
                  <vs-td> hola </vs-td>
                  <vs-td> hola </vs-td>
                  <vs-td> hola </vs-td>
                  <vs-td> hola </vs-td>
                  <vs-td> hola </vs-td>
                  <vs-td> hola </vs-td>
                  <vs-td> hola </vs-td>
                  <vs-td> hola </vs-td>
                  <vs-td> hola </vs-td>
                </vs-tr>
              </template>
            </vs-table>
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
      typeOfTransport: {},
    };
  },
  created() {
    this.showTypeOfTransport();
  },
  methods: {
    returnTeamResume() {
      this.$router.push("/panel/resume-team");
    },
    showTypeOfTransport() {
      let url = dominio.url + "/api/mostrar-tipo-transporte";
      axios.get(url).then((res) => {
        this.typeOfTransport = res.data.typeOfTransport;
      });
    },
  },
};
</script>
<style>
.vs-dialog {
  max-width: 850px !important;
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
  border: 1px solid#ff5000;
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
</style>
