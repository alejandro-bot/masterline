<template>
  <div>
    <h4 class="card-title titleStyle">
      <strong>CREACIÓN NUEVO PERFIL</strong>
    </h4>
    <p class="subtitleStyle mb-3 mt-3">
      Modulo para creación y administración de perfiles sobre el sistema. Los
      perfiles podrán ser editado en su nivel de acceso en cualquier momento, es
      importante no eliminar perfiles que tengan asociados usuarios vigentes ya
      que los dejará inoperantes.
    </p>
    <vs-button @click="regresar()" color="primary" type="relief" icon="home"
      >Regresar</vs-button
    >
    <vs-row class="mt-5 text-center" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="8">
        <vs-card>
          <div slot="header">
            <h3>Creación de roles</h3>
          </div>
          <div>

              <vs-row vs-justify="center" class="mt-5">
                <vs-input
                  icon="add"
                  label-placeholder="Crear Rol"
                  v-model="name"
                />
              </vs-row>
              <vs-row vs-justify="center" class="mt-5">
                <vs-button @click="CreateRol()" color="success" type="relief">Crear</vs-button>
              </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    CreateRol() {
      let url = "/crear-rol";
      axios
        .post(url, {
          name: this.name,
        })
        .then((res) => {
          console.log(res.data.data);
        });
    },
    regresar() {
      this.$router.push("/panel/perfiles-usuarios");
    },
  },
};
</script>
<style>
.icons-example {
  margin: 15px;
  width: 50px;
}
.vs-input {
  margin: 0px;
  width: 80%;
}
</style>

