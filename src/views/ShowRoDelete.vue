<template>
  <div>
    <vs-button
      class="buttonColor"
      color="primary"
      type="relief"
      icon="inventory"
      @click="showRos()"
      >Mostrar R.O Activo</vs-button
    >
    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">R.O Eliminados</h6>
          </div>
          <div>
            <vs-table>
              <template slot="header"> </template>
              <template slot="thead">
                <vs-th> # </vs-th>
                <vs-th> R.O </vs-th>
                <vs-th> Ultima Tipificación </vs-th>
                <vs-th> Origen </vs-th>
                <vs-th> Destino </vs-th>
                <vs-th> Acciones </vs-th>
              </template>
              <template>
                <vs-tr :key="index" v-for="(item, index) in showRoInactive">
                  <vs-td> {{ item.id }} </vs-td>
                  <vs-td> {{ item.ro }} </vs-td>
                  <vs-td> {{ item.updated_at }} </vs-td>
                  <vs-td> {{ item.starting_place }} </vs-td>
                  <vs-td> {{ item.destination_place }} </vs-td>
                  <vs-td>
                    <vs-button
                      class="mr-1 ml-1"
                      radius
                      color="danger"
                      type="gradient"
                      icon="lock"
                      @click="activeRo(item.id)"
                    ></vs-button>
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
      showRoInactive: {},
    };
  },
  created() {
    this.showRosIncative();
  },
  methods: {
    showRos() {
      this.$router.push("/panel/show-ro");
    },
    showRosIncative() {
      let url = dominio.url + "/api/mostrar-ros-inactivos";
      axios.get(url).then((res) => {
        this.showRoInactive = res.data.showRoInactive;
      });
    },
    activeRo(id) {
      let url = dominio.url + "/api/activar-ro/" + id;
      axios.post(url, this.formActive).then((res) => {
        if (res.data.code == 200) {
          toastr.success(res.data.message);
          this.showRosIncative();
          this.$router.push("/panel/show-ro");
        }
        if (res.data.code == 500) {
          toastr.error(res.data.message);
        }
      });
    },
  },
};
</script>
<style scoped>
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
