<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="inventory"
            @click="createRo()"
            >Crear R.O</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="right" vs-align="right" vs-w="12">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="dangerous"
            @click="showRoDelete()"
            >R.O Eliminados</vs-button
          >
        </vs-col>
      </vs-col>
    </vs-row>

    <vs-row vs-justify="center">
      <vs-col
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="12"
        class="mt-5"
      >
        <vs-card class="con-vs-cards">
          <div slot="header" class=""></div>
          <vs-table max-items="12" pagination :data="total">
            <template slot="header">
              <h3 class="mb-5">R.O Creados Por:</h3>
            </template>
            <template slot="thead">
              <vs-th> # </vs-th>
              <vs-th> R.O </vs-th>
              <vs-th> Ultima Tipificación </vs-th>
              <vs-th> Origen </vs-th>
              <vs-th> Destino </vs-th>
              <vs-th class="justify-content-center"> Acciones </vs-th>
            </template>
            <template>
              <vs-tr :key="index" v-for="(item, index) in showRo">
                <vs-td :data="item.id">
                  {{ item.id }}
                </vs-td>
                <vs-td :data="item.ro">
                  {{ item.ro }}
                </vs-td>
                <vs-td :data="item.process">
                  {{ item.created_at }}
                </vs-td>
                <vs-td :data="item.starting_place">
                  {{ item.starting_place }}
                </vs-td>
                <vs-td :data="item.destination_place">
                  {{ item.destination_place }}
                </vs-td>
                <vs-td :data="item.id">
                  <vs-row>
                    <vs-col
                      vs-type="flex"
                      vs-justify="center"
                      vs-align="center"
                      vs-w="12"
                    >
                      <router-link :to="'/panel/show-ro/' + item.id">
                        <vs-button
                          class="mr-1 ml-1"
                          radius
                          color="primary"
                          type="border"
                          icon="visibility"
                        ></vs-button>
                      </router-link>
                      <router-link :to="'/panel/update-ro/' + item.id">
                        <vs-button
                          class="mr-1 ml-1"
                          radius
                          color="success"
                          type="border"
                          icon="edit"
                        ></vs-button>
                      </router-link>
                      <vs-button
                        class="mr-1 ml-1"
                        radius
                        color="danger"
                        type="border"
                        icon="delete_outline"
                        @click="deleteRo(item.id)"
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
      showRo: {},
      total: 0,
    };
  },
  created() {
    this.showRos();
  },
  methods: {
    showRos() {
      let url = dominio.url + "/api/mostrar-ros";
      axios.get(url).then((res) => {
        this.showRo = res.data.showRo;
        this.total = res.data.total;
      });
    },
    createRo() {
      this.$router.push("/panel/create-ro");
    },
    deleteRo(id) {
      let url = dominio.url + "/api/eliminar-ro/" + id;
      axios.post(url).then((res) => {
        if (res.data.code == 200) {
          toastr.success(res.data.message);
          this.showRos();
        }
        if (res.data.code == 500) {
          toastr.error(res.data.message);
        }
      });
    },
    showRoDelete() {
       this.$router.push("/panel/deletes-ro");
    }
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
  border: #ff5000;
}
</style>
