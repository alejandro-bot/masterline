<template>
  <div>
    <h4 class="card-title titleStyle">
      <strong>ADMINISTRACIÓN DE PERFILES</strong>
    </h4>
    <p class="subtitleStyle">
      Modulo para creación y administración de perfiles sobre el sistema. Los
      perfiles podrán ser editado en su nivel de acceso en cualquier momento, es
      importante no eliminar perfiles que tengan asociados usuarios vigentes ya
      que los dejará inoperantes.
    </p>
    <vs-button @click="createRol()" color="primary" type="relief"  icon="person_add">Crear Usuario</vs-button>
    <vs-row vs-justify="center" class="mt-5">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card>
          <div slot="header">
            <h3>Roles</h3>
          </div>
          <div>
            <vs-table
              class="mt-5"
              :max-items="descriptionItems[0]"
              pagination
              :data="users"
              description
              :description-items="descriptionItems"
              description-title="Registries"
              description-connector="of"
              description-body="Pages"
            >
              <template slot="header">
                <h3>Users</h3>
              </template>
              <template slot="thead">
                <vs-th> Email </vs-th>
                <vs-th> Name </vs-th>
                <vs-th> Website </vs-th>
                <vs-th> Nro </vs-th>
              </template>

              <template slot-scope="{ data }">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].email">
                    {{ data[indextr].email }}
                  </vs-td>

                  <vs-td :data="data[indextr].username">
                    {{ data[indextr].username }}
                  </vs-td>

                  <vs-td :data="data[indextr].id">
                    {{ data[indextr].website }}
                  </vs-td>

                  <vs-td :data="data[indextr].id">
                    {{ data[indextr].id }}
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
export default {
  data() {
    return {
      descriptionItems: [3, 5, 15],
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          website: "hildegard.org",
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          website: "anastasia.net",
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          website: "ramiro.info",
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          website: "kale.biz",
        },
        {
          id: 5,
          name: "Chelsey Dietrich",
          username: "Kamren",
          email: "Lucio_Hettinger@annie.ca",
          website: "demarco.info",
        },
        {
          id: 6,
          name: "Mrs. Dennis Schulist",
          username: "Leopoldo_Corkery",
          email: "Karley_Dach@jasper.info",
          website: "ola.org",
        },
      ],
    };
  },
  computed: {

  },
  methods: {
    createRol(){
      this.$router.push('/panel/create-rol');
    }
  },
};
</script>

<style>
.titleStyle {
  font-size: 90%;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  border-radius: 3px;
  font-weight: 100;
  margin-bottom: 8px;
  background: linear-gradient(
    0.25turn,
    #ffff00,
    #ff9900,
    #ff6600,
    #ff3300,
    #990066
  );
  color: #ffffff;
}
.subtitleStyle {
  text-align: left;
  font-size: 80%;
  margin-bottom: 20px;
  line-height: 1;
  color: #000000;
}
</style>

