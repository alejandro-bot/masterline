<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="right" vs-align="right" vs-w="12">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="zoom_out"
            @click="deatilOperation()"
            >Detalle</vs-button
          >
        </vs-col>
      </vs-col>
    </vs-row>
    <vs-row class="mt-5" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Contador De Procesos</h6>
          </div>
          <div>
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                <vs-row vs-justify="center">
                  <vs-col
                    type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-w="11"
                  >
                    <vs-card class="con-vs-cards">
                      <div slot="header">
                        <h6 class="card-title text-center">
                          Colaboradores Asignados
                        </h6>
                      </div>
                      <div>
                        <span
                          class="material-icons"
                          style="
                            font-size: 70px;
                            color: #ff5000;
                            border-radius: 10px;
                          "
                        >
                          people</span
                        >
                        <span
                          class="ml-5"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >90</span
                        >
                      </div>
                    </vs-card>
                  </vs-col>
                </vs-row>
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                <vs-row vs-justify="center">
                  <vs-col
                    type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-w="11"
                  >
                    <vs-card class="con-vs-cards">
                      <div slot="header">
                        <h6 class="card-title text-center">R.O. Abiertos</h6>
                      </div>
                      <div>
                        <span
                          class="material-icons"
                          style="
                            font-size: 70px;
                            color: #ff5000;
                            border-radius: 10px;
                          "
                        >
                          inventory
                        </span>
                        <span
                          class="ml-5"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >90</span
                        >
                      </div>
                    </vs-card>
                  </vs-col>
                </vs-row>
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                <vs-row vs-justify="center">
                  <vs-col
                    type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-w="11"
                  >
                    <vs-card class="con-vs-cards">
                      <div slot="header">
                        <h6 class="card-title text-center">R.O. Pendientes</h6>
                      </div>
                      <div>
                        <span
                          class="material-icons"
                          style="
                            font-size: 70px;
                            color: #ff5000;
                            border-radius: 10px;
                          "
                        >
                          watch_later
                        </span>
                        <span
                          class="ml-5"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >90</span
                        >
                      </div>
                    </vs-card>
                  </vs-col>
                </vs-row>
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                <vs-row vs-justify="center">
                  <vs-col
                    type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-w="11"
                  >
                    <vs-card class="con-vs-cards">
                      <div slot="header">
                        <h6 class="card-title text-center">R.O. Cerrados</h6>
                      </div>
                      <div>
                        <span
                          class="material-icons"
                          style="
                            font-size: 70px;
                            color: #ff5000;
                            border-radius: 10px;
                          "
                        >
                          archive
                        </span>
                        <span
                          class="ml-5"
                          style="
                            margin-top: -50px !important;
                            display: block;
                            margin-left: 150px !important;
                            font-size: 20px;
                          "
                          >90</span
                        >
                      </div>
                    </vs-card>
                  </vs-col>
                </vs-row>
              </vs-col>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <vs-tabs :color="colorx">
              <vs-tab label="Primera Linea">
                <div class="con-tab-ejemplo">
                  <vs-table :data="users">
                    <template slot="header">
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
                          {{ data[indextr].name }}
                        </vs-td>

                        <vs-td :data="data[indextr].id">
                          {{ data[indextr].id }}
                        </vs-td>

                        <vs-td :data="data[indextr].id">
                          {{ data[indextr].website }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-tab>
              <vs-tab label="Segunda Linea">
                <div class="con-tab-ejemplo">
                  <vs-table :data="users">
                    <template slot="header">
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
                          {{ data[indextr].name }}
                        </vs-td>

                        <vs-td :data="data[indextr].id">
                          {{ data[indextr].id }}
                        </vs-td>

                        <vs-td :data="data[indextr].id">
                          {{ data[indextr].website }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-tab>
              <vs-tab label="Tercera Linea">
                <div class="con-tab-ejemplo">
                  <vs-table :data="users">
                    <template slot="header">
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
                          {{ data[indextr].name }}
                        </vs-td>

                        <vs-td :data="data[indextr].id">
                          {{ data[indextr].id }}
                        </vs-td>

                        <vs-td :data="data[indextr].id">
                          {{ data[indextr].website }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-tab>
            </vs-tabs>
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
      colorx: "#ff5000",
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
        {
          id: 7,
          name: "Kurtis Weissnat",
          username: "Elwyn.Skiles",
          email: "Telly.Hoeger@billy.biz",
          website: "elvis.io",
        },
        {
          id: 8,
          name: "Nicholas Runolfsdottir V",
          username: "Maxime_Nienow",
          email: "Sherwood@rosamond.me",
          website: "jacynthe.com",
        },
        {
          id: 9,
          name: "Glenna Reichert",
          username: "Delphine",
          email: "Chaim_McDermott@dana.io",
          website: "conrad.com",
        },
        {
          id: 10,
          name: "Clementina DuBuque",
          username: "Moriah.Stanton",
          email: "Rey.Padberg@karina.biz",
          website: "ambrose.net",
        },
      ],
    };
  },
  methods: {
    deatilOperation() {
       this.$router.push("/panel/show-detail-operation");
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
  border: 1px solid#ff5000;
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
