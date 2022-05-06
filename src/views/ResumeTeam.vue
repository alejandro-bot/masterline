<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="left" vs-align="right" vs-w="12">
        <vs-button
          class="buttonColor"
          color="primary"
          type="relief"
          icon="home"
          @click="returnHome()"
          >Volver Inicio</vs-button
        >
      </vs-col>
    </vs-row>

    <vs-row class="mt-5" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Contador De Procesos</h6>
          </div>
          <div>
            <vs-row vs-w="12">
              <vs-col
                class="p-2"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-lg="3"
                vs-sm="3"
                vs-xs="12"
              >
                <vs-card class="con-vs-cards3">
                  <div slot="header">
                    <h6 class="card-title text-center">
                      Colaboradores Asignados
                    </h6>
                  </div>
                  <div>
                    <span
                      class="material-icons mb-0 mt-5"
                      style="
                        font-size: 70px;
                        color: #ffffff;
                        border-radius: 10px;
                        margin-left: 175px;
                        margin-top: 18px !important;
                      "
                    >
                      people</span
                    >
                    <span
                      class="ml-5 mb-3"
                      style="
                        margin-top: -69px !important;
                        display: block;
                        margin-left: 100px !important;
                        font-size: 45px;
                        font-weight: 400;
                        color: #ffffff;
                      "
                      >{{ user }}</span
                    >
                  </div>
                </vs-card>
              </vs-col>
              <vs-col
                class="p-2"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-lg="3"
                vs-sm="3"
                vs-xs="12"
              >
                <vs-card class="con-vs-cards3">
                  <div slot="header">
                    <h6 class="card-title text-center">R.O. Abiertos</h6>
                  </div>
                  <div>
                    <span
                      class="material-icons mt-5"
                      style="
                        font-size: 60px;
                        color: #ffffff;
                        border-radius: 10px;
                        margin-left: 175px;
                      "
                    >
                      inventory
                    </span>
                    <span
                      v-if="showUserAuth[0].rol_id == 2"
                      class="ml-5 mt-5 mb-3"
                      style="
                        margin-top: -66px !important;
                        display: block;
                        margin-left: 100px !important;
                        font-size: 45px;
                        font-weight: 400;
                        color: white;
                      "
                      >{{ roOpenMaritimeAndInlad }}</span
                    >
                    <span
                      v-if="
                        showUserAuth[0].rol_id == 1 ||
                        showUserAuth[0].rol_id == 9 ||
                        showUserAuth[0].rol_id == 10
                      "
                      class="ml-5 mt-5 mb-3"
                      style="
                        margin-top: -66px !important;
                        display: block;
                        margin-left: 100px !important;
                        font-size: 45px;
                        font-weight: 400;
                        color: white;
                      "
                      >{{ countRoAdmin }}</span
                    >
                    <span
                      v-if="showUserAuth[0].rol_id == 3"
                      class="ml-5 mt-5 mb-3"
                      style="
                        margin-top: -50px !important;
                        display: block;
                        margin-left: 150px !important;
                        font-size: 20px;
                      "
                      >{{ roOpenAir }}</span
                    >
                  </div>
                </vs-card>
              </vs-col>
              <vs-col
                class="p-2"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-lg="3"
                vs-sm="3"
                vs-xs="12"
              >
                <vs-card class="con-vs-cards3">
                  <div slot="header">
                    <h6 class="card-title text-center">R.O. Pendientes Hoy</h6>
                  </div>
                  <div>
                    <span
                      class="material-icons mt-5"
                      style="
                        font-size: 60px;
                        color: #ffffff;
                        border-radius: 10px;
                        margin-left: 175px;
                      "
                    >
                      watch_later
                    </span>
                    <span
                      v-if="
                        showUserAuth[0].rol_id == 1 ||
                        showUserAuth[0].rol_id == 9 ||
                        showUserAuth[0].rol_id == 10
                      "
                      class="ml-5 mb-3"
                      style="
                        margin-top: -66px !important;
                        display: block;
                        margin-left: 100px !important;
                        font-size: 45px;
                        font-weight: 400;
                        color: white;
                      "
                      >{{ roPendingAdmin }}</span
                    >
                    <span
                      v-if="showUserAuth[0].rol_id == 2"
                      class="ml-5 mb-3"
                      style="
                        margin-top: -66px !important;
                        display: block;
                        margin-left: 100px !important;
                        font-size: 45px;
                        font-weight: 400;
                        color: white;
                      "
                      >{{ roPendingMaritimeAndInlad }}</span
                    >
                    <span
                      v-if="showUserAuth[0].rol_id == 3"
                      class="ml-5 mb-3"
                      style="
                        margin-top: -66px !important;
                        display: block;
                        margin-left: 100px !important;
                        font-size: 45px;
                        font-weight: 400;
                        color: white;
                      "
                      >{{ roPendingAir }}</span
                    >
                  </div>
                </vs-card>
              </vs-col>
              <vs-col
                class="p-2"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-lg="3"
                vs-sm="3"
                vs-xs="12"
              >
                <vs-card class="con-vs-cards3">
                  <div slot="header">
                    <h6 class="card-title text-center">R.O. Cerrados</h6>
                  </div>
                  <div>
                    <span
                      class="material-icons mt-5"
                      style="
                        font-size: 60px;
                        color: rgb(255, 255, 255);
                        border-radius: 10px;
                        margin-left: 175px;
                      "
                    >
                      archive
                    </span>
                    <span
                      v-if="
                        showUserAuth[0].rol_id == 1 ||
                        showUserAuth[0].rol_id == 9 ||
                        showUserAuth[0].rol_id == 10
                      "
                      class="ml-5 mb-3"
                      style="
                        margin-top: -66px !important;
                        display: block;
                        margin-left: 100px !important;
                        font-size: 45px;
                        font-weight: 400;
                        color: white;
                      "
                      >{{ roCloseAdmin }}</span
                    >
                    <span
                      v-if="showUserAuth[0].rol_id == 2"
                      class="ml-5 mb-3"
                      style="
                        margin-top: -50px !important;
                        display: block;
                        margin-left: 150px !important;
                        font-size: 20px;
                      "
                      >{{ roClosedMaritimeAndInlad }}</span
                    >
                    <span
                      v-if="showUserAuth[0].rol_id == 3"
                      class="ml-5 mb-3"
                      style="
                        margin-top: -50px !important;
                        display: block;
                        margin-left: 150px !important;
                        font-size: 20px;
                      "
                      >{{ roClosedAir }}</span
                    >
                  </div>
                </vs-card>
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
              <vs-tab
                label="Primera Linea"
                v-if="
                  showUserAuth[0].rol_id == 1 || showUserAuth[0].rol_id == 10
                "
              >
                <div class="con-tab-ejemplo">
                  <vs-table
                    :data="userFirstLine"
                    search
                    pagination
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
                      <vs-th sort-key="id"> # </vs-th>
                      <vs-th sort-key="nameDivision"> División </vs-th>
                      <vs-th sort-key="nameBranchOffice"> Sucursal </vs-th>
                      <vs-th sort-key="nameStatus"> Estado </vs-th>
                      <vs-th sort-key="nameRol"> Perfil </vs-th>
                      <vs-th sort-key="first_name"> Nombres </vs-th>
                      <vs-th sort-key="last_name"> Apellidos </vs-th>
                      <vs-th sort-key="email"> Correo </vs-th>
                      <vs-th sort-key="nameOperation"> Operación </vs-th>
                      <vs-th sort-key="ro"> R.O Abiertos </vs-th>
                      <vs-th sort-key="roClose"> R.O Cerrados </vs-th>
                    </template>
                    <template slot-scope="{ data }">
                      <vs-tr v-for="(item, index) in data" :key="index">
                        <vs-td :data="item.id" style="max-width: 200px;">
                          {{ item.id }}
                        </vs-td>
                        <vs-td :data="item.nameDivision" style="max-width: 200px;">
                          {{ item.nameDivision }}
                        </vs-td>
                        <vs-td :data="item.nameBranchOffice" style="max-width: 200px;">
                          {{ item.nameBranchOffice }}
                        </vs-td>
                        <vs-td :data="item.nameStatus" style="max-width: 200px;">
                          {{ item.nameStatus }}
                        </vs-td>
                        <vs-td :data="item.nameRol" style="max-width: 200px;">
                          {{ item.nameRol }}
                        </vs-td>
                        <vs-td :data="item.first_name" style="max-width: 200px;">
                          {{ item.first_name }}
                        </vs-td>
                        <vs-td :data="item.last_name" style="max-width: 200px;">
                          {{ item.last_name }}
                        </vs-td>
                        <vs-td :data="item.email" style="max-width: 200px;">
                          {{ item.email }}
                        </vs-td>
                        <vs-td :data="item.nameOperation" style="max-width: 200px;">
                          {{ item.nameOperation }}
                        </vs-td>
                        <vs-td>
                          {{ item.ro }}
                        </vs-td>
                        <vs-td>
                          {{ item.roClose }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-tab>
              <vs-tab
                label="Segunda Linea"
                v-if="
                  showUserAuth[0].rol_id == 1 ||
                  showUserAuth[0].rol_id == 9 ||
                  showUserAuth[0].rol_id == 10
                "
              >
                <div class="con-tab-ejemplo">
                  <vs-table
                    :data="userSecondLine"
                    v-if="
                      showUserAuth[0].rol_id == 1 ||
                      showUserAuth[0].rol_id == 10
                    "
                    search
                    pagination
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
                      <vs-th sort-key="id"> # </vs-th>
                      <vs-th sort-key="nameDivision"> División </vs-th>
                      <vs-th sort-key="nameBranchOffice"> Sucursal </vs-th>
                      <vs-th sort-key="nameStatus"> Estado </vs-th>
                      <vs-th sort-key="nameRol"> Perfil </vs-th>
                      <vs-th sort-key="first_name"> Nombres </vs-th>
                      <vs-th sort-key="last_name"> Apellidos </vs-th>
                      <vs-th sort-key="email"> Correo </vs-th>
                      <vs-th sort-key="nameOperation"> Operación </vs-th>
                      <vs-th sort-key="ro"> R.O Abiertos </vs-th>
                      <vs-th sort-key="roClose"> R.O Cerrados </vs-th>
                    </template>
                    <template
                      slot-scope="{ data }"
                      v-if="
                        showUserAuth[0].rol_id == 1 ||
                        showUserAuth[0].rol_id == 10
                      "
                    >
                      <vs-tr v-for="(item, index) in data" :key="index">
                        <vs-td :data="item.id" style="width: 100px;">
                          {{ item.id }}
                        </vs-td>
                        <vs-td :data="item.nameDivision" style="width: 300px;">
                          {{ item.nameDivision }}
                        </vs-td>
                        <vs-td :data="item.nameBranchOffice" style="width: 300px;">
                          {{ item.nameBranchOffice }}
                        </vs-td>
                        <vs-td :data="item.nameStatus" style="width: 300px;">
                          {{ item.nameStatus }}
                        </vs-td>
                        <vs-td :data="item.nameRol" style="width: 300px;">
                          {{ item.nameRol }}
                        </vs-td>
                        <vs-td :data="item.first_name" style="width: 300px;">
                          {{ item.first_name }}
                        </vs-td>
                        <vs-td :data="item.last_name" style="width: 300px;">
                          {{ item.last_name }}
                        </vs-td>
                        <vs-td :data="item.email" style="width: 300px;">
                          {{ item.email }}
                        </vs-td>
                        <vs-td :data="item.nameOperation" style="width: 300px;">
                          {{ item.nameOperation }}
                        </vs-td>
                        <vs-td>
                          {{ item.ro }}
                        </vs-td>
                        <vs-td>
                          {{ item.roClose }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                  <vs-table
                    :data="userSecondLine"
                    pagination
                    search
                    :max-items="tantos"
                    v-if="showUserAuth[0].rol_id == 9"
                  >
                    <template slot="header">
                      <select v-model="tantos" class="seleccionableBuscador">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                      </select>
                    </template>
                    <template slot="thead">
                      <vs-th sort-key="id"> # </vs-th>
                      <vs-th sort-key="nameDivision"> División </vs-th>
                      <vs-th sort-key="nameBranchOffice"> Sucursal </vs-th>
                      <vs-th sort-key="nameStatus"> Estado </vs-th>
                      <vs-th sort-key="nameRol"> Perfil </vs-th>
                      <vs-th sort-key="first_name"> Nombres </vs-th>
                      <vs-th sort-key="last_name"> Apellidos </vs-th>
                      <vs-th sort-key="email"> Correo </vs-th>
                      <vs-th sort-key="nameOperation"> Operación </vs-th>
                      <vs-th sort-key="ro"> R.O Abiertos </vs-th>
                      <vs-th sort-key="roClose"> R.O Cerrados </vs-th>
                    </template>

                    <template
                      slot-scope="{ data }"
                      v-if="showUserAuth[0].rol_id == 9"
                    >
                      <vs-tr v-for="(item, index) in data" :key="index">
                        <vs-td :data="item.id" style="width: 200px;">
                          {{ item.id }}
                        </vs-td>
                        <vs-td :data="item.nameDivision" style="width: 200px;">
                          {{ item.nameDivision }}
                        </vs-td>
                        <vs-td :data="item.nameBranchOffice" style="width: 200px;">
                          {{ item.nameBranchOffice }}
                        </vs-td>
                        <vs-td :data="item.nameStatus" style="width: 200px;">
                          {{ item.nameStatus }}
                        </vs-td>
                        <vs-td :data="item.nameRol" style="width: 200px;">
                          {{ item.nameRol }}
                        </vs-td>
                        <vs-td :data="item.first_name" style="width: 200px;">
                          {{ item.first_name }}
                        </vs-td>
                        <vs-td :data="item.last_name" style="width: 200px;">
                          {{ item.last_name }}
                        </vs-td>
                        <vs-td :data="item.email" style="width: 200px;">
                          {{ item.email }}
                        </vs-td>
                        <vs-td :data="item.nameOperation" style="width: 200px;">
                          {{ item.nameOperation }}
                        </vs-td>
                        <vs-td style="width: 200px;">
                          {{ item.ro }}
                        </vs-td>
                        <vs-td style="width: 200px;">
                          {{ item.roClose }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-tab>
              <vs-tab
                label="Tercera Linea"
                v-if="
                  showUserAuth[0].rol_id == 1 || showUserAuth[0].rol_id == 10
                "
              >
                <div class="con-tab-ejemplo">
                  <vs-table
                    :data="userThirdLine"
                    pagination
                    search
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
                      <vs-th sort-key="id"> # </vs-th>
                      <vs-th sort-key="nameDivision"> División </vs-th>
                      <vs-th sort-key="nameBranchOffice"> Sucursal </vs-th>
                      <vs-th sort-key="nameStatus"> Estado </vs-th>
                      <vs-th sort-key="nameRol"> Perfil </vs-th>
                      <vs-th sort-key="first_name"> Nombres </vs-th>
                      <vs-th sort-key="last_name"> Apellidos </vs-th>
                      <vs-th sort-key="email"> Correo </vs-th>
                      <vs-th sort-key="nameOperation"> Operación </vs-th>
                      <vs-th sort-key="ro"> R.O Abiertos </vs-th>
                      <vs-th sort-key="roClose"> R.O Cerrados </vs-th>
                    </template>
                    <template slot-scope="{ data }">
                      <vs-tr v-for="(item, index) in data" :key="index">
                        <vs-td :data="item.id" style="width: 200px;">
                          {{ item.id }}
                        </vs-td>
                        <vs-td :data="item.nameDivision" style="width: 200px;">
                          {{ item.nameDivision }}
                        </vs-td>
                        <vs-td :data="item.nameBranchOffice" style="width: 200px;">
                          {{ item.nameBranchOffice }}
                        </vs-td>
                        <vs-td :data="item.nameStatus" style="width: 200px;">
                          {{ item.nameStatus }}
                        </vs-td>
                        <vs-td :data="item.nameRol" style="width: 200px;">
                          {{ item.nameRol }}
                        </vs-td>
                        <vs-td :data="item.first_name" style="width: 200px;">
                          {{ item.first_name }}
                        </vs-td>
                        <vs-td :data="item.last_name" style="width: 200px;">
                          {{ item.last_name }}
                        </vs-td>
                        <vs-td :data="item.email" style="width: 200px;">
                          {{ item.email }}
                        </vs-td>
                        <vs-td :data="item.nameOperation" style="width: 200px;">
                          {{ item.nameOperation }}
                        </vs-td>
                        <vs-td style="width: 200px;">
                          {{ item.ro }}
                        </vs-td>
                        <vs-td style="width: 200px;">
                          {{ item.roClose }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-tab>
              <vs-tab label="Tercera Linea" v-if="showUserAuth[0].rol_id == 9">
                <div class="con-tab-ejemplo">
                  <vs-table :data="userThirdLines" pagination search>
                    <template slot="header">
                      <select v-model="tantos" class="seleccionableBuscador">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                      </select>
                    </template>
                    <template slot="thead">
                      <vs-th sort-key="id"> # </vs-th>
                      <vs-th sort-key="nameDivision"> División </vs-th>
                      <vs-th sort-key="nameBranchOffice"> Sucursal </vs-th>
                      <vs-th sort-key="nameStatus"> Estado </vs-th>
                      <vs-th sort-key="nameRol"> Perfil </vs-th>
                      <vs-th sort-key="first_name"> Nombres </vs-th>
                      <vs-th sort-key="last_name"> Apellidos </vs-th>
                      <vs-th sort-key="email"> Correo </vs-th>
                      <vs-th sort-key="nameOperation"> Operación </vs-th>
                      <vs-th sort-key="ro"> R.O Abiertos </vs-th>
                      <vs-th sort-key="roClose"> R.O Cerrados </vs-th>
                    </template>
                    <template slot-scope="{ data }">
                      <vs-tr v-for="(item, index) in data" :key="index">
                        <vs-td :data="item.id" style="width: 200px;">
                          {{ item.id }}
                        </vs-td>
                        <vs-td :data="item.nameDivision" style="width: 200px;">
                          {{ item.nameDivision }}
                        </vs-td>
                        <vs-td :data="item.nameBranchOffice" style="width: 200px;">
                          {{ item.nameBranchOffice }}
                        </vs-td>
                        <vs-td :data="item.nameStatus" style="width: 200px;">
                          {{ item.nameStatus }}
                        </vs-td>
                        <vs-td :data="item.nameRol" style="width: 200px;">
                          {{ item.nameRol }}
                        </vs-td>
                        <vs-td :data="item.first_name" style="width: 200px;">
                          {{ item.first_name }}
                        </vs-td>
                        <vs-td :data="item.last_name" style="width: 200px;">
                          {{ item.last_name }}
                        </vs-td>
                        <vs-td :data="item.email" style="width: 200px;">
                          {{ item.email }}
                        </vs-td>
                        <vs-td :data="item.nameOperation" style="width: 200px;">
                          {{ item.nameOperation }}
                        </vs-td>
                        <vs-td style="width: 200px;">
                          {{ item.ro }}
                        </vs-td>
                        <vs-td style="width: 200px;">
                          {{ item.roClose }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-tab>
              <vs-tab label="Tercera Linea" v-if="showUserAuth[0].rol_id == 2">
                <div class="con-tab-ejemplo">
                  <vs-table
                    :data="userThirdLinesAreaMaritime"
                    pagination
                    search
                  >
                    <template slot="header">
                      <select v-model="tantos" class="seleccionableBuscador">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                      </select>
                    </template>
                    <template slot="thead">
                      <vs-th sort-key="id"> # </vs-th>
                      <vs-th sort-key="nameDivision"> División </vs-th>
                      <vs-th sort-key="nameBranchOffice"> Sucursal </vs-th>
                      <vs-th sort-key="nameStatus"> Estado </vs-th>
                      <vs-th sort-key="nameRol"> Perfil </vs-th>
                      <vs-th sort-key="first_name"> Nombres </vs-th>
                      <vs-th sort-key="last_name"> Apellidos </vs-th>
                      <vs-th sort-key="email"> Correo </vs-th>
                      <vs-th sort-key="nameOperation"> Operación </vs-th>
                      <vs-th sort-key="ro"> R.O Abiertos </vs-th>
                      <vs-th sort-key="roClose"> R.O Cerrados </vs-th>
                    </template>
                    <template slot-scope="{ data }">
                      <vs-tr v-for="(item, index) in data" :key="index">
                        <vs-td :data="item.id" style="width: 200px;">
                          {{ item.id }}
                        </vs-td>
                        <vs-td :data="item.nameDivision" style="width: 200px;">
                          {{ item.nameDivision }}
                        </vs-td>
                        <vs-td :data="item.nameBranchOffice" style="width: 200px;">
                          {{ item.nameBranchOffice }}
                        </vs-td>
                        <vs-td :data="item.nameStatus" style="width: 200px;">
                          {{ item.nameStatus }}
                        </vs-td>
                        <vs-td :data="item.nameRol" style="width: 200px;">
                          {{ item.nameRol }}
                        </vs-td>
                        <vs-td :data="item.first_name" style="width: 200px;">
                          {{ item.first_name }}
                        </vs-td>
                        <vs-td :data="item.last_name" style="width: 200px;">
                          {{ item.last_name }}
                        </vs-td>
                        <vs-td :data="item.email" style="width: 200px;">
                          {{ item.email }}
                        </vs-td>
                        <vs-td :data="item.nameOperation" style="width: 200px;">
                          {{ item.nameOperation }}
                        </vs-td>
                        <vs-td style="width: 200px;">
                          {{ item.ro }}
                        </vs-td>
                        <vs-td style="width: 200px;">
                          {{ item.roClose }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </div>
              </vs-tab>
              <vs-tab label="Tercera Linea" v-if="showUserAuth[0].rol_id == 3">
                <div class="con-tab-ejemplo">
                  <vs-table :data="userThirdLinesAreaAir" pagination search>
                    <template slot="header">
                      <select v-model="tantos" class="seleccionableBuscador">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                      </select>
                    </template>
                    <template slot="thead">
                      <vs-th sort-key="id"> # </vs-th>
                      <vs-th sort-key="nameDivision"> División </vs-th>
                      <vs-th sort-key="nameBranchOffice"> Sucursal </vs-th>
                      <vs-th sort-key="nameStatus"> Estado </vs-th>
                      <vs-th sort-key="nameRol"> Perfil </vs-th>
                      <vs-th sort-key="first_name"> Nombres </vs-th>
                      <vs-th sort-key="last_name"> Apellidos </vs-th>
                      <vs-th sort-key="email"> Correo </vs-th>
                      <vs-th sort-key="nameOperation"> Operación </vs-th>
                      <vs-th sort-key="ro"> R.O Abiertos </vs-th>
                      <vs-th sort-key="roClose"> R.O Cerrados </vs-th>
                    </template>
                    <template slot-scope="{ data }">
                      <vs-tr v-for="(item, index) in data" :key="index">
                        <vs-td :data="item.id" style="width: 200px;">
                          {{ item.id }}
                        </vs-td>
                        <vs-td :data="item.nameDivision" style="width: 200px;">
                          {{ item.nameDivision }}
                        </vs-td>
                        <vs-td :data="item.nameBranchOffice" style="width: 200px;">
                          {{ item.nameBranchOffice }}
                        </vs-td>
                        <vs-td :data="item.nameStatus" style="width: 200px;">
                          {{ item.nameStatus }}
                        </vs-td>
                        <vs-td :data="item.nameRol" style="width: 200px;">
                          {{ item.nameRol }}
                        </vs-td>
                        <vs-td :data="item.first_name" style="width: 200px;">
                          {{ item.first_name }}
                        </vs-td>
                        <vs-td :data="item.last_name" style="width: 200px;">
                          {{ item.last_name }}
                        </vs-td>
                        <vs-td :data="item.email" style="width: 200px;">
                          {{ item.email }}
                        </vs-td>
                        <vs-td :data="item.nameOperation" style="width: 200px;">
                          {{ item.nameOperation }}
                        </vs-td>
                        <vs-td>
                          {{ item.ro }}
                        </vs-td>
                        <vs-td>
                          {{ item.roClose }}
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
import { dominio } from "../dominio.js";
export default {
  created() {
    this.showLineUsers();
    this.showUser();
  },
  data() {
    return {
      colorx: "#ff6600",
      userFirstLine: {},
      userSecondLine: {},
      userSecondLines: {},
      userThirdLines: {},
      userThirdLine: {},
      userThirdLinesAreaMaritime: {},
      userThirdLinesAreaAir: {},
      activePrompt: false,
      roPendingAdmin: {},
      roCloseAdmin: {},
      user: {},
      countRoAdmin: {},
      rosUserId: {},
      showUserAuth: [],
      roOpenMaritimeAndInlad: [],
      roPendingMaritimeAndInlad: [],
      roClosedMaritimeAndInlad: [],
      roOpenAir: [],
      roPendingAir: [],
      roClosedAir: [],
      OpenRoDirector: [],
      OpenRoBossOperations: [],
      OpenRoMaritime: [],
      OpenRoAir: [],
      OpenRoSalesM: [],
      OpenRoInland: [],
      openRoAirOperation: [],
      openRoMaritimeOperation: [],
      openRoSalesEx: [],
      openRoSalesM: [],
      closeRoDirector: [],
      closeRoBossOperations: [],
      closeRoMaritime: [],
      closeRoAir: [],
      closeRoSales: [],
      closeRoSalesMm: [],
      closeRoInland: [],
      closeRoAirOperation: [],
      closeRoMaritimeOperation: [],
      closeRoSalesEx: [],
      closeRoSalesM: [],
      tantos: 5,
    };
  },
  methods: {
    deatilOperation() {
      this.$router.push("/panel/show-detail-operation");
    },
    returnHome() {
      this.$router.push("/panel");
    },
    showLineUsers() {
      let url = dominio.url + "/api/mostrar-usuarios-lineas";
      axios.get(url).then((res) => {
        this.userFirstLine = res.data.userFirstLine;
        this.userSecondLine = res.data.userSecondLine;
        this.userThirdLine = res.data.userThirdLine;
        this.user = res.data.user;
        this.countRoAdmin = res.data.countRoAdmin;
        this.roPendingAdmin = res.data.roPendingAdmin;
        this.roCloseAdmin = res.data.roCloseAdmin;
        this.rosUserId = res.data.rosUserId;
        this.roPendingUserId = res.data.roPendingUserId;
        this.roCloseUserId = res.data.roCloseUserId;
        this.userSecondLines = res.data.userSecondLines;
        this.userThirdLines = res.data.userThirdLines;
        this.userThirdLinesAreaMaritime = res.data.userThirdLinesAreaMaritime;
        this.userThirdLinesAreaAir = res.data.userThirdLinesAreaAir;
        this.roOpenMaritimeAndInlad = res.data.roOpenMaritimeAndInlad;
        this.roPendingMaritimeAndInlad = res.data.roPendingMaritimeAndInlad;
        this.roClosedMaritimeAndInlad = res.data.roClosedMaritimeAndInlad;
        this.roOpenAir = res.data.roOpenAir;
        this.roPendingAir = res.data.roPendingAir;
        this.roClosedAir = res.data.roClosedAir;
        this.OpenRoDirector = res.data.OpenRoDirector;
        this.OpenRoBossOperations = res.data.OpenRoBossOperations;
        this.OpenRoMaritime = res.data.OpenRoMaritime;
        this.OpenRoAir = res.data.OpenRoAir;
        this.OpenRoSalesM = res.data.OpenRoSalesM;
        this.OpenRoInland = res.data.OpenRoInland;
        this.openRoAirOperation = res.data.openRoAirOperation;
        this.openRoMaritimeOperation = res.data.openRoMaritimeOperation;
        this.openRoSalesEx = res.data.openRoSalesEx;
        this.openRoSalesM = res.data.openRoSalesM;
        this.closeRoDirector = res.data.closeRoDirector;
        this.closeRoBossOperations = res.data.closeRoBossOperations;
        this.closeRoMaritime = res.data.closeRoMaritime;
        this.closeRoAir = res.data.closeRoAir;
        this.closeRoSales = res.data.closeRoSales;
        this.closeRoSalesMm = res.data.closeRoSalesMm;
        this.closeRoInland = res.data.closeRoInland;
        this.closeRoAirOperation = res.data.closeRoAirOperation;
        this.closeRoMaritimeOperation = res.data.closeRoMaritimeOperation;
        this.closeRoSalesEx = res.data.closeRoSalesEx;
        this.closeRoSalesM = res.data.closeRoSalesM;
      });
    },
    showUser() {
      let url = dominio.url + "/api/mostar-usuario-autentificado";
      axios.get(url).then((res) => {
        this.showUserAuth = res.data.showUserAuth;
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
  border: 1px solid#ff6600;
}
.con-vs-cards3 {
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
  border: 1px solid #2c2c2c;
}
.card-title {
  margin-bottom: -14px;
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
