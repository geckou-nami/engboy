
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('Carousel', Carousel)
  nuxtApp.provide('Slide', Slide)
  nuxtApp.provide('Pagination', Pagination)
  nuxtApp.provide('Navigation', Navigation)
})
