<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="waves"
            >Maritimo Seguimiento</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="email"
            >Maritimo Emails</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="local_shipping"
            >Terrestre Seguimiento</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="email"
            >Terrestre Emails</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="local_airport"
            >Aereo Seguimiento</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="email"
            >Aereo Emails</vs-button
          >
        </vs-col>
      </vs-col>
    </vs-row>
    <vs-row class="mt-5">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="home"
            >Maritimo Seguimiento</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="home"
            >Maritimo Emails</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="home"
            >Terrestre Seguimiento</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="home"
            >Terrestre Emails</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="home"
            >Aereo Seguimiento</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-button
            class="buttonColor"
            color="primary"
            type="relief"
            icon="home"
            >Aereo Emails</vs-button
          >
        </vs-col>
      </vs-col>
    </vs-row>
    <vs-row class="mt-5" vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-card class="con-vs-cards">
          <div slot="header">
            <h6 class="card-title text-center">Reportes</h6>
          </div>
          <div>

          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {
  methods: {
    returnHome() {
      this.$router.push("/panel");
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
