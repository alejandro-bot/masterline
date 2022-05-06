<template>
  <div>
    <vs-button
      class="buttonColor"
      color="primary"
      type="relief"
      icon="email"
      @click="backGroupEmails()"
      >Volver Grupo De Correos</vs-button
    >
    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Correos De Este Grupo</h6>
          </div>
          <div>
            <vs-table>
              <template slot="header"> </template>
              <template slot="thead">
                <vs-th> Tipo De Copia </vs-th>
                <vs-th> Correo Electronico </vs-th>
                <vs-th> Nombre Del Contacto </vs-th>
              </template>
              <template>
                <vs-tr v-for="(item, index) in showGroupEmail" :key="index">
                  <vs-td>
                    {{ item.typeCopy }}
                  </vs-td>
                  <vs-td>
                    {{ item.name }}
                  </vs-td>
                  <vs-td>
                    {{ item.email }}
                  </vs-td>
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
      showGroupEmail: {},
      id: this.$route.params && this.$route.params.id,
    };
  },
  created() {
    this.showGroupEmails();
  },
  methods: {
    showGroupEmails() {
      let url = dominio.url + "/api/mostrar-grupo-correos/" + this.id;
      axios.get(url).then((res) => {
        this.showGroupEmail = res.data.showGroupEmail;
      });
    },
    backGroupEmails() {
      this.$router.push("/panel/create-group-email");
    },
  },
};
</script>
<style>
.buttonColor {
  background: #ff6600 !important;
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
