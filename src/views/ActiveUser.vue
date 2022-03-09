<template>
  <div>
    <vs-button
      class="mb-5 buttonColor"
      @click="backUsers()"
      color="primary"
      type="relief"
      icon="person_add"
      >Usuarios</vs-button
    >
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h3>Usuarios Activos e Inactivos</h3>
          </div>
          <vs-table>
            <template slot="header"> </template>
            <template slot="thead">
              <vs-th sort-key="id">Usuario #</vs-th>
              <vs-th sort-key="username"> Nombre Completo </vs-th>
              <vs-th sort-key="chargeName"> Cargo </vs-th>
              <vs-th sort-key="id"> Area </vs-th>
              <vs-th sort-key="id"> Estado </vs-th>
            </template>

            <template>
              <vs-tr :key="index" v-for="(item, index) in usersActives">
                <vs-td :data="item.id">
                  {{ item.id }}
                </vs-td>
                <vs-td :data="item.full_name">
                  {{ item.full_name }}
                </vs-td>
                <vs-td :data="item.chargeName">
                  {{ item.chargeName }}
                </vs-td>
                <vs-td :data="item.operationName">
                  {{ item.operationName }}
                </vs-td>
                <vs-td
                  :data="item.statusName"
                  >
                  {{ item.statusName }}
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
      usersActives: {},
    };
  },
  created() {
    this.showUserActives();
  },
  methods: {
    showUserActives() {
      let url = dominio.url + "/api/mostrar-usuarios-activos";
      axios.get(url).then((res) => {
        this.usersActives = res.data.usersActives;
      });
    },
    backUsers() {
      this.$router.push("/panel/users");
    },
  },
  activeUser(id) {
    let url = dominio.url + "/api/activar-usuario/" + id;
    axios.post(url, this.formActive).then((res) => {
      if (res.data.code == 200) {
        toastr.success(res.data.message);
        this.showUser();
      }
      if (res.data.code == 500) {
        toastr.error(res.data.message);
      }
    });
  },
  inactiveUser(id) {
    let url = dominio.url + "/api/inactivar-usuario/" + id;
    axios.post(url, this.formInactive).then((res) => {
      if (res.data.code == 200) {
        toastr.success(res.data.message);
        this.showUser();
      }
      if (res.data.code == 500) {
        toastr.error(res.data.message);
      }
    });
  },
};
</script>
<style scoped>
.buttonColor
{
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
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}
</style>
