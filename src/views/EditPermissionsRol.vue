<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
          <vs-button
            class="buttonColor"
            @click="returnHome()"
            color="primary"
            type="relief"
            icon="home"
            >Regresar Inicio</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="right" vs-align="right" vs-w="12">
          <vs-button
            class="buttonColor"
            @click="retunRoles()"
            color="primary"
            type="relief"
            icon="home"
            >Regresar Roles</vs-button
          >
        </vs-col>
      </vs-col>
    </vs-row>
    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h3 class="card-title text-center">Editar Permisos De Perfil</h3>
          </div>
          <div>
            <vs-table>
              <template slot="header">
              </template>
              <template slot="thead">
                <vs-th> Nombre Del Modulo </vs-th>
                <vs-th> Nombre Del Permiso </vs-th>
              </template>
              <template slot-scope="{ data }">
                <vs-tr :key="indextr" v-for="(tr, indextr) in showPermissionsRoleId.permissions">
                  <vs-td :data="data[indextr]">
                    {{ tr.title }}
                  </vs-td>
                  <vs-td :data="data[indextr]">
                    {{ tr.name }}
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
      showPermissionsRoleId: [],
      id: this.$route.params && this.$route.params.id,
    };
  },
  created() {
    this.showPermissionsRol();
  },
  methods: {
    showPermissionsRol() {
      let url = dominio.url + "/api/mostrar-permisos-rol/" + this.id;
      axios.get(url).then((res) => {
        this.showPermissionsRoleId = res.data.showPermissionsRoleId;
      });
    },
    returnHome() {
      this.$router.push('/panel');
    },
    retunRoles() {
      this.$router.push('/panel/perfiles-usuarios');
    }
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
