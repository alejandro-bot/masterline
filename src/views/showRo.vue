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
            v-if="
              showUserAuth[0].rol_id == 1 ||
              showUserAuth[0].rol_id == 9 ||
              showUserAuth[0].rol_id == 10 ||
              showUserAuth[0].rol_id == 2 ||
              showUserAuth[0].rol_id == 3
            "
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
              <vs-th> R.O </vs-th>
              <vs-th> Ultima Tipificación </vs-th>
              <vs-th> Origen </vs-th>
              <vs-th> Destino </vs-th>
              <vs-th> Proceso </vs-th>
              <vs-th class="justify-content-center"> Acciones </vs-th>
            </template>
            <template>
              <vs-tr :key="index" v-for="(item, index) in showRo">
                <vs-td
                  :data="item.ro"
                  v-if="
                    item.process[0].process_name != 'CIERRE DE LA OPERACION'
                  "
                >
                  {{ item.ro }}
                </vs-td>
                <vs-td
                  :data="item.process"
                  v-if="
                    item.process[0].process_name != 'CIERRE DE LA OPERACION'
                  "
                >
                  {{ item.process[0].create_date }}
                </vs-td>
                <vs-td
                  :data="item.starting_place"
                  v-if="
                    item.process[0].process_name != 'CIERRE DE LA OPERACION'
                  "
                >
                  {{ item.starting_place }}
                </vs-td>
                <vs-td
                  :data="item.destination_place"
                  v-if="
                    item.process[0].process_name != 'CIERRE DE LA OPERACION'
                  "
                >
                  {{ item.destination_place }}
                </vs-td>
                <vs-td
                  :data="item.destination_place"
                  v-if="
                    item.process[0].process_name != 'CIERRE DE LA OPERACION'
                  "
                >
                  {{ item.process[0].process_name }}
                </vs-td>
                <vs-td
                  :data="item.id"
                  v-if="
                    item.process[0].process_name != 'CIERRE DE LA OPERACION'
                  "
                >
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
                      <router-link :to="'/panel/assign-ro/' + item.id">
                        <vs-button
                          v-if="
                            showUserAuth[0].rol_id == 9 ||
                            showUserAuth[0].rol_id == 2 ||
                            showUserAuth[0].rol_id == 3 ||
                            showUserAuth[0].rol_id == 1
                          "
                          class="mr-1 ml-1"
                          radius
                          color="warning"
                          type="border"
                          icon="person"
                        ></vs-button>
                      </router-link>
                      <vs-button
                        v-if="
                          showUserAuth[0].rol_id == 1 ||
                          showUserAuth[0].rol_id == 9 ||
                          showUserAuth[0].rol_id == 10 ||
                          showUserAuth[0].rol_id == 2 ||
                          showUserAuth[0].rol_id == 3
                        "
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
                <template
                  class="expand-showRo"
                  slot="expand"
                  v-if="item.is_parent == 1"
                >
                  <div class="con-expand-showRo">
                    <vs-tr :key="index" v-for="(item, index) in showRo">
                      <vs-td> 1 </vs-td>
                      <vs-td> xczxczx </vs-td>
                      <vs-td> 17-03-2022 03:03 pm </vs-td>
                      <vs-td> zxcz </vs-td>
                      <vs-td> xczxc </vs-td>
                      <vs-td> Finalizacion de lo que sea</vs-td>
                      <vs-td :data="item.id">
                        <vs-row>
                          <vs-col
                            vs-type="flex"
                            vs-justify="center"
                            vs-align="center"
                            vs-w="12"
                          >
                            <vs-button
                              class="mr-1 ml-1"
                              radius
                              color="primary"
                              type="border"
                              icon="visibility"
                            ></vs-button>
                            <vs-button
                              class="mr-1 ml-1"
                              radius
                              color="success"
                              type="border"
                              icon="edit"
                            ></vs-button>
                            <vs-button
                              class="mr-1 ml-1"
                              radius
                              color="danger"
                              type="border"
                              icon="delete_outline"
                            ></vs-button>
                          </vs-col>
                        </vs-row>
                      </vs-td>
                    </vs-tr>
                  </div>
                </template>
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
      roClosed: [],
      showUserAuth: [],
    };
  },
  created() {
    this.showRos();
    this.showUser();
  },
  methods: {
    showRos() {
      let url = dominio.url + "/api/mostrar-ros";
      axios.get(url).then((res) => {
        this.showRo = res.data.showRo;
        this.total = res.data.total;
        this.roClosed = res.data.roClosed;
      });
    },
    showUser() {
      let url = dominio.url + "/api/mostar-usuario-autentificado";
      axios.get(url).then((res) => {
        this.showUserAuth = res.data.showUserAuth;
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
  border: 1px solid #ff5000;
}
</style>
