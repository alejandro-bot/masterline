<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
          <vs-button
            v-if="
              showUserAuth[0].permissions[5].name == 'CREAR RO' ||
              showUserAuth[0].permissions[6].name == 'CREAR RO'
            "
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
            v-if="showUserAuth[0].permissions[7].name == 'VER RO ELIMINADOS'"
            class="buttonColor"
            color="primary"
            type="relief"
            icon="delete"
            @click="showRoDelete()"
            >Eliminados</vs-button
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
              <h3 class="mb-5 mt-3" style="font-size:15px;">
                R.O Creados Por: <br><br> {{ showUserAuth[0].first_name }}
                {{ showUserAuth[0].last_name }}
              </h3>
          <vs-table search pagination :data="showRo" :max-items="tantos">
            <template slot="header">
              <select v-model="tantos" class="seleccionableBuscador mt-1">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </template>
            <template slot="thead">
              <vs-th sort-key="ro"> R.O </vs-th>
              <vs-th sort-key="create_date"> Ultima Tipificación </vs-th>
              <vs-th sort-key="starting_place"> Origen </vs-th>
              <vs-th sort-key="destination_place"> Destino </vs-th>
              <vs-th sort-key="process_name"> Proceso </vs-th>
              <vs-th class="justify-content-center"> Acciones </vs-th>
            </template>
            <template slot-scope="{ data }">
              <vs-tr v-for="(item, index) in data" :key="index">
                <vs-td
                  :data="item.ro"
                  v-if="
                    item.process[0].process_name != 'CIERRE DE LA OPERACIÓN'
                  "
                >
                  {{ item.ro }}
                </vs-td>
                <vs-td
                  :data="item.create_date"
                  v-if="
                    item.process[0].process_name != 'CIERRE DE LA OPERACIÓN'
                  "
                >
                  {{ item.process[0].create_date }}
                </vs-td>
                <vs-td
                  :data="item.starting_place"
                  v-if="
                    item.process[0].process_name != 'CIERRE DE LA OPERACIÓN'
                  "
                >
                  {{ item.starting_place }}
                </vs-td>
                <vs-td
                  :data="item.destination_place"
                  v-if="
                    item.process[0].process_name != 'CIERRE DE LA OPERACIÓN'
                  "
                >
                  {{ item.destination_place }}
                </vs-td>
                <vs-td
                  :data="item.process_name"
                  v-if="
                    item.process[0].process_name != 'CIERRE DE LA OPERACIÓN'
                  "
                >
                  {{ item.process[0].process_name }}
                </vs-td>
                <vs-td
                  v-if="
                    item.process[0].process_name != 'CIERRE DE LA OPERACIÓN'
                  "
                >
                  <vs-row>
                    <vs-col
                      vs-type="flex"
                      vs-justify="center"
                      vs-align="center"
                      vs-w="12"
                    >
                      <router-link
                        :to="'/panel/show-ro/' + item.id"
                        v-if="
                          showUserAuth[0].permissions[7].name == 'BOTON VER RO' ||
                          showUserAuth[0].permissions[8].name == 'BOTON VER RO'
                        "
                      >
                        <vs-button
                          class="mr-1 ml-1"
                          radius
                          color="primary"
                          type="border"
                          icon="visibility"
                        ></vs-button>
                      </router-link>
                      <router-link
                        :to="'/panel/update-ro/' + item.id"
                        v-if="
                          showUserAuth[0].permissions[7].name == 'BOTON EDITAR RO' ||
                          showUserAuth[0].permissions[8].name == 'BOTON EDITAR RO' ||
                          showUserAuth[0].permissions[9].name == 'BOTON EDITAR RO'
                        "
                      >
                        <vs-button
                          class="mr-1 ml-1"
                          radius
                          color="success"
                          type="border"
                          icon="edit"
                        ></vs-button>
                      </router-link>
                      <router-link
                        :to="'/panel/assign-ro/' + item.id"
                        v-if="
                          showUserAuth[0].permissions[10].name == 'BOTON ASIGNAR RO'"
                      >
                        <vs-button
                          class="mr-1 ml-1"
                          radius
                          color="warning"
                          type="border"
                          icon="person"
                        ></vs-button>
                      </router-link>
                      <vs-button
                        v-if="
                          showUserAuth[0].permissions[11].name == 'BOTON ELIMINAR RO'"
                        class="mr-1 ml-1"
                        radius
                        color="danger"
                        type="border"
                        icon="delete_outline"
                        @click="deleteRo(item.id)"
                      ></vs-button>
                      <vs-button
                        v-if="item.is_parent == 1"
                        class="mr-1 ml-1"
                        radius
                        color="dark"
                        type="border"
                        icon="add"
                        @click="createRoSun(item.id)"
                      ></vs-button>
                      <router-link :to="'/panel/list-ro-sun/' + item.id">
                        <vs-button
                          v-if="item.is_parent == 1"
                          class="mr-1 ml-1"
                          radius
                          color="#ff5000"
                          type="border"
                          icon="child_care"
                          @click="listRosuns(item.id)"
                        ></vs-button>
                      </router-link>
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
      roClosed: [],
      showUserAuth: [],
      tantos: 5,
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
    createRoSun(id) {
      let url = dominio.url + "/api/crear-ro-hijo/" + id;
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
  margin-top: -13px;
  border-radius: 20px;
}
</style>
