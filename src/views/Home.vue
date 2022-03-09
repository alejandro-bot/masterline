<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
      <div>
        <img
          src="http://31.220.21.104/assets/landing_page/assets/images/Maritimo_web.jpeg"
          alt=""
          width="100%"
        />
      </div>
      <div>
        <img
          src="http://31.220.21.104/assets/landing_page/assets/images/Aereo_web.jpeg"
          alt=""
          width="100%"
        />
      </div>
      <div>
        <img
          src="http://31.220.21.104/assets/landing_page/assets/images/Terrestre_web.png"
          alt=""
          width="100%"
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      arrows: true,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      cssEase: "linear",
    };
  },
};
</script>
