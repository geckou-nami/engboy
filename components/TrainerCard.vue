<script setup lang="ts">
const trainers = [
  {
    img: "/images/trainer01.jpg",
    text: "こんにちは！英語で楽しくトレーニングしましょう。日本語が話せますのでご安心ください。"
  },
  {
    img: "/images/trainer02.jpg",
    text: "Hello! 筋肉をつけすぎずしなやかな体を作ることが得意です！美しさを磨いていきましょう。"
  },
  {
    img: "/images/trainer03.jpg",
    text: "Hi, 負荷や強度の高いトレーニングがしたいならおまかせてください！どんなご要望もできるかぎり叶えますよ！"
  }
]

const staffs = [
  {
    img: "/images/staff01.jpg",
    text: "ENBODYは明るくてとっても楽しいジムです!みなさんのセッションが楽しくなるようしっかりサポートいたします。"
  },
  {
    img: "/images/staff02.jpg",
    text: "Hi, please let me know anytime if you have any questions. We will fully support you!"
  }
]

const props = defineProps<{
  selectedTab: string
}>()

</script>

<template>
  <div :class="$style.card_wrapper">
    <div 
      v-for="trainer in trainers"
      :key="trainer.text"
      :class="$style.trainer_card"
      v-show="selectedTab === 'trainers'"
    >
      <img :src="trainer.img" alt="顔写真">
      <p>{{ trainer.text }}</p>
    </div>
  </div>
  <div :class="$style.card_wrapper">
    <div 
      v-for="staff in staffs"
      :key="staff.text"
      :class="$style.trainer_card"
      v-show="selectedTab === 'staffs'"
    >
      <img :src="staff.img" alt="顔写真">
      <p>{{ staff.text }}</p>
    </div>
  </div>
</template> 


<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;

.card_wrapper {
  display              : grid;
  grid-template-columns: repeat(3, 1fr);
  gap                  : var(--sp-medium);

  @include mediaScreen('mobile') {
    grid-template-columns: 1fr;
  }
}

.trainer_card {
  background-color: var(--white);
  border-radius   : 1rem;
  animation            : fade-in 0.8s ease forwards;
  transform            : translateY(0px);

  > img {
    width                  : 100%;
    border-top-left-radius : 1rem;
    border-top-right-radius: 1rem;
  }

  > p {
    padding: var(--sp-medium);
  }
}

@keyframes fade-in {
  from {
    opacity  : 0;
    transform: translateY(50px);
  }
  to {
    opacity  : 1;
    transform: translateY(0);
  }
}
</style>