<template>
  <div>
    <vs-button
      class="buttonColor"
      color="primary"
      type="relief"
      icon="vpn_key"
      @click="returnDivision()"
      >Volver A División</vs-button
    >
    <vs-row class="mt-5" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Editar División</h6>
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
                  <vs-input
                    class="ml-1 mr-1"
                    color="rgb(213, 14, 151)"
                    label-placeholder="Nombre"
                    v-model="showDivisionId.name"
                  />
                </div>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col
                class="mt-5 mb-3"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="12"
              >
                <div class="centerx colors-example">
                  <vs-button
                    @click="updateDivision()"
                    color="#ff6600"
                    type="relief"
                    icon="autorenew"
                    >Actualizar Division</vs-button
                  >
                </div>
              </vs-col>
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
      id: this.$route.params && this.$route.params.id,
      showDivisionId: {
        name: "",
      },
    };
  },
  created() {
    this.showDivision();
  },
  methods: {
    returnDivision() {
      this.$router.push("/panel/division");
    },
    showDivision() {
      let url = dominio.url + "/api/mostrar-division/" + this.id;
      axios.get(url).then((res) => {
        this.showDivisionId = res.data.showDivisionId;
      });
    },
    updateDivision() {
      let url = dominio.url + "/api/actualizar-division/" + this.id;
      axios
        .post(url, this.showDivisionId)
        .then((res) => {
          if (res.data.code == 200) {
            toastr.success(res.data.message);
            this.$router.push("/panel/division");
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
