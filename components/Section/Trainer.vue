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

const selectedTab = ref('trainers'); // 初期値として 'trainers' を設定

const toggleTab = (tabName: string) => {
  selectedTab.value = tabName;
};

const decorationHeight = ref(0);

onMounted(() => {
  const decoration = document.getElementById('decoration');
  if (decoration) {
    decorationHeight.value = decoration.clientHeight;
  }
});
</script>

<template>
  <div :class="$style.trainer_container">
    <TopDecoration :class="$style.top_decoration"/>
      <div
        :class="$style.trainer_contents"
        :style="{ '--decoration-height': decorationHeight + 'px' }" 
      >
        <SectionHeading
          :en-heading="`Trainer`"
          :jp-heading="`トレーナー`"
        />
        <div :class="$style.tab_button_wrap">
          <button 
            :class="[$style.tab_button, { [$style.active]: selectedTab === 'trainers' }]"
            @click="toggleTab('trainers')"
          >
            トレーナー
          </button>
          <button
            :class="[$style.tab_button, { [$style.active]: selectedTab === 'staffs' }]"
            @click="toggleTab('staffs')"
          >
            スタッフ
          </button>
        </div>
        <!-- トレーナー -->
        <div
          :class="$style.trainer_wrapper"
          v-show="selectedTab === 'trainers'"
        >
          <div 
            v-for="trainer in trainers"
            :key="trainer.text"
            :class="$style.trainer_card"
          >
            <img :src="trainer.img" alt="顔写真">
            <p>{{ trainer.text }}</p>
          </div>
        </div>

      <!-- スタッフ -->
      <div
        :class="$style.staff_wrapper"
        v-show="selectedTab === 'staffs'"
      >
        <div 
          v-for="staff in staffs"
          :key="staff.text"
          :class="$style.trainer_card"
        >
          <img :src="staff.img" alt="顔写真">
          <p>{{ staff.text }}</p>
        </div>
      </div>
    </div>  
    <BottomDecoration
    id="decoration"
      :class="$style.bottom_decoration"
    />
  </div>
</template> 


<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;


.trainer_container {
  width           : 100%;
  height          : 100%;
  background-color: var(--pink);
  position: relative;
}

.trainer_contents {
  max-width     : var(--section-max-width);
  margin-inline : auto;
  padding-inline: var(--sp-large);
  padding-block: var(--sp-large);
  margin-bottom: var(--decoration-height);
}

  // タブ
.tab_button_wrap {
  display        : flex;
  justify-content: space-between;
  gap            : var(--sp-medium);
  margin-block   : var(--sp-);
  padding-block  : var(--sp-medium);
}

.tab_button {
  width         : 100%;
  font-weight   : normal;
  border-radius : 0px;
  padding-bottom: var(--sp-medium);
  color        : var(--white);

  &.active {
    border-bottom: solid 2px var(--white);
    font-weight  : bold;
  }
}

// カード
.trainer_wrapper,
.staff_wrapper {
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

  > img {
    width                  : 100%;
    border-top-left-radius : 1rem;
    border-top-right-radius: 1rem;
  }

  > p {
    padding: var(--sp-medium);
  }
}

.top_decoration {
  position: absolute;
  top:0%;
  transform: translateY(-99%);
}

.bottom_decoration {
  position: absolute;
  bottom:0%;
  transform: translateY(99%);
}
</style>