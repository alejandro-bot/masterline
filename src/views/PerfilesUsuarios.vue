<template>
  <div>
    <vs-button
      class="buttonColor"
      @click="createRol()"
      color="primary"
      type="relief"
      icon="person_add"
      >Crear Rol</vs-button
    >
    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h3>Roles</h3>
          </div>
          <div>
            <vs-table>
              <template slot="header"> </template>
              <template slot="thead">
                <vs-th> Nombre Rol</vs-th>
                <vs-th> Acciones</vs-th>
              </template>

              <template>
                <vs-tr :key="index" v-for="(item, index) in roles">
                  <vs-td :data="item.name">
                    {{ item.name }}
                  </vs-td>
                  <vs-td>
                    <vs-button
                      @click="openModal()"
                      radius
                      color="success"
                      type="border"
                      icon="list"
                    ></vs-button>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-prompt
      :title="'Permisos De este Usuario'"
      accept-text="Aceptar"
      cancel-text="Cancelar"
      @cancel="val = ''"
      @accept="acceptAlert"
      @close="close"
      :active.sync="activePrompt"
    >
      <div class="con-exemple-prompt">
        <vs-row>
          <vs-col vs-type="flex" vs-justify="left" vs-align="center" vs-w="12">
            <ul class="centerx">
              <li>
                <vs-checkbox color="success" v-model="checkBox1"
                  >Aqui el nombrel premiso</vs-checkbox
                >
              </li>
            </ul>
          </vs-col>
        </vs-row>
      </div>
    </vs-prompt>
  </div>
</template>
<script>
import { dominio } from "../dominio.js";
export default {
  data() {
    return {
      activePrompt: false,
      roles: {},
      checkBox1: true,
    };
  },
  created() {
    this.showRoles();
  },
  methods: {
    createRol() {
      this.$router.push("/panel/create-rol");
    },
    showRoles() {
      let url = dominio.url + "/api/mostrar-roles";
      axios.get(url).then((res) => {
        this.roles = res.data.roles;
      });
    },
    openModal() {
      this.activePrompt = true;
    },
    acceptAlert(color) {
      this.$vs.notify({
        color: "success",
        title: "Dialogo",
        text: "Cerrado",
      });
    },
    close() {
      this.$vs.notify({
        color: "danger",
        title: "Dialogo",
        text: "Cerrado",
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
}
</style>

