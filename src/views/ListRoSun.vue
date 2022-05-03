<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="home"
            @click="returHome()"
            >Inicio</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="right" vs-align="right" vs-w="12">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="home"
            @click="returnRO()"
            >R.O</vs-button
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
              <h3 class="mb-5 card-title text-center">Lista de R.O Hijos</h3>
          <vs-table
            search
            pagination
            :data="showListRoSuns"
            :max-items="tantos"
          >
            <template slot="header">
              <select v-model="tantos" class="seleccionableBuscador">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </template>
            <template slot="thead">
              <vs-th sort-key="ro"> R.O </vs-th>
              <vs-th sort-key="created_at"> Ultima Tipificación </vs-th>
              <vs-th sort-key="origin"> Origen </vs-th>
              <vs-th sort-key="destiny"> Destino </vs-th>
              <vs-th sort-key="process_name"> Proceso </vs-th>
              <vs-th class="justify-content-center"> Acciones </vs-th>
            </template>
            <template slot-scope="{ data }">
              <vs-tr v-for="(item, index) in data" :key="index">
                <vs-td :data="item.ro">
                  {{ item.ro }}
                </vs-td>
                <vs-td :data="item.created_at">
                  {{ item.created_at }}
                </vs-td>
                <vs-td :data="item.origin">
                  {{ item.origin }}
                </vs-td>
                <vs-td :data="item.destiny">
                  {{ item.destiny }}
                </vs-td>
                <vs-td :data="item.process[0].procesess.process_name">
                  {{ item.process[0].procesess.process_name }}
                </vs-td>
                <vs-td>
                  <vs-row>
                    <vs-col
                      vs-type="flex"
                      vs-justify="center"
                      vs-align="center"
                      vs-w="12"
                    >
                      <router-link :to="'/panel/show-ro-sun/' + item.id">
                        <vs-button
                          class="mr-1 ml-1"
                          radius
                          color="primary"
                          type="border"
                          icon="visibility"
                        ></vs-button>
                      </router-link>
                      <router-link :to="'/panel/update-ro-sun/' + item.id">
                        <vs-button
                          class="mr-1 ml-1"
                          radius
                          color="success"
                          type="border"
                          icon="edit"
                        ></vs-button>
                      </router-link>
                      <router-link :to="'/panel/assign-ro-sun/' + item.id">
                        <vs-button
                          class="mr-1 ml-1"
                          radius
                          color="warning"
                          type="border"
                          icon="person"
                        ></vs-button>
                      </router-link>
                      <vs-button
                        class="mr-1 ml-1"
                        radius
                        color="danger"
                        type="border"
                        icon="delete_outline"
                        @click="deleteRoSun(item.id)"
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
      id: this.$route.params && this.$route.params.id,
      showListRoSuns: [],
      tantos: 5,
    };
  },

  created() {
    this.showListRoSun();
  },
  methods: {
    returHome() {
      this.$router.push("/panel/");
    },
    returnRO() {
      this.$router.push("/panel/show-ro");
    },
    showListRoSun() {
      let url = dominio.url + "/api/mostrar-ro-hijos/" + this.id;
      axios.get(url).then((res) => {
        this.showListRoSuns = res.data.showListRoSuns;
      });
    },
    deleteRoSun(id) {
      let url = dominio.url + "/api/eliminar-ro-hijo/" + id;
      axios.post(url).then((res) => {
        if (res.data.code == 200) {
          toastr.success(res.data.message);
          this.showListRoSun();
        }
        if (res.data.code == 500) {
          toastr.error(res.data.message);
        }
      });
    },
  },
};
</script>
<style>
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
  border: 1px solid #ff5000;
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
.seleccionableBuscador {
  background: #10163a;
  color: white;
  width: 70px;
  height: 35px;
  border-radius: 5px;
  padding: 0.3rem !important;
  padding-left: 6px !important;
  font-size: 17px;
  border: 1px solid transparent;
  margin-left: 10px;
  margin-top: 0px;
  border-radius: 20px;
}
</style>
