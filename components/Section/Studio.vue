<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import image1 from '~/assets/images/studio01.jpg';
import image2 from '~/assets/images/studio02.jpg';
import image3 from '~/assets/images/studio03.jpg';

const studioImages = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  }
];
</script>

<template>
  <div :class="$style.studio_container">
    <div :class="$style.studio_contents">
      <SectionHeading
        :en-heading="`Studio`"
        :jp-heading="`スタジオ`"
        :enColor="'var(--black)'"
        :jpColor="'var(--pink)'"
      />
      <Carousel>
        <Slide
          v-for="studioImage in studioImages"
          :key="studioImage.image"
          :class="$style.slide"
        >
          <img :src="studioImage.image"  />
        </Slide>
        <template #addons>
          <Navigation :class="$style.navigation"/>
          <Pagination :class="$style.pagination"/>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style lang = "scss" module>

.studio_container {
  width: 100%;
}

.studio_contents {
  max-width     : var(--section-max-width);
  margin        : 0 auto;
  padding-inline: var(--sp-large);
  padding-block : calc(var(--sp-large) * 2);
}

.slide {
  > img {
    width        : 100%;
    height       : 100%;
    object-fit   : cover;
    padding-block: var(--sp-medium);
  }
}
</style>

<style>
.carousel__prev {
  width           : var(--carousel-button-size);
  height          : var(--carousel-button-size);
  border-radius   : 50px;
  color           : var(--pink);
  background-color: var(--white);
  position        : absolute;
  left            : 0;
  margin          : 0;
  margin-left     : calc(var(--carousel-button-size) * -0.5);
}

.carousel__next {
  width           : var(--carousel-button-size);
  height          : var(--carousel-button-size);
  border-radius   : 50px;
  color           : var(--pink);
  background-color: var(--white);
  position        : absolute;
  right           : 0;
  margin          : 0;
  margin-right    : calc(var(--carousel-button-size) * -0.5);
}

.carousel__pagination-button {
  width           : 6px;
  height          : 6px;
  margin          : 0 5px;
  border-radius   : 50%;
  background-color: #ccc;
  transition      : background-color 0.3s;

  &::after{
    display: none;
  }
}

.carousel__pagination-button--active {
  background-color: var(--pink);
}
</style>