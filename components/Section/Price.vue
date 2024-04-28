<script setup lang="ts">
const courseContent = [
  {
    title: '週１コース',
    price: '¥20,000',
    admissionFee: '（入会金 ¥10000）',
    rental: 'タオル、ウェア、プロテイン無料',
    restaurant: '使用不可',
    mealGuidance: 'なし'
  },
  {
    title: '週２コース',
    price: '¥40,000',
    admissionFee: '（入会金 ¥10000）',
    rental: 'タオル、ウェア、プロテイン無料',
    restaurant: '使用不可',
    mealGuidance: '無し'
  },
  {
    title: '無制限',
    price: '¥70,000',
    admissionFee: '（入会金 ¥10000）',
    rental: 'タオル、ウェア、プロテイン無料',
    restaurant: '使用可',
    mealGuidance: '有り'
  }
]

const decorationHeight = ref(0);

onMounted(() => {
  const decoration = document.getElementById('decoration');
  if (decoration) {
    decorationHeight.value = decoration.clientHeight;
  }
});
</script>

<template>
  <div :class="$style.price_container">
    <TopDecoration :class="$style.top_decoration"/>
      <div 
        :class="$style.price_contents"
        :style="{ '--decoration-height': decorationHeight + 'px' }" 
      >
        <SectionHeading 
          :en-heading="`Price`"
          :jp-heading="`料金`"
        />
        <div :class="$style.card_wrapper">
          <div
            :class="$style.card"
            v-for="(course, index) in courseContent"
            :key="course.title"  
          >
            <div v-if="index === 1" :class="$style.recommended">
              オススメ！
            </div>
            <h4>{{ course.title }}</h4>
            <p :class="$style.price">{{ course.price }}</p>
            <p :class="$style.admission_fee">{{ course.admissionFee }}</p>
            <dl>
              <dt>レンタル</dt>
              <dd>{{ course.rental }}</dd>
              <dt>レストラン</dt>
              <dd>{{ course.restaurant }}</dd>
              <dt>食事指導</dt>
              <dd>{{ course.mealGuidance }}</dd>
            </dl>
          </div>
        </div>
      </div>
    <BottomDecoration
      id="decoration"
      :class="$style.bottom_decoration"/>
  </div>
</template>

<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;

.price_container {
  width           : 100%;
  background-color: var(--pink);
  position        : relative;
}

.price_contents {
  max-width     : var(--section-max-width);
  margin        : 0 auto;
  padding-inline: var(--sp-large);
  padding-block : var(--sp-large);
  margin-block  : var(--decoration-height);
}

.card_wrapper {
  width                     : 100%;
  display                   : flex;              // カードを横並びにする
  gap                       : var(--sp-medium);
  justify-content           : space-around;
  overflow-x                : auto;              // 横スクロールを有効にする
  -webkit-overflow-scrolling: touch;             // iOSデバイスでのスムーズなスクロール
  scrollbar-width           : thin;              // スクロールバーの幅を薄く設定（Firefoxのみ）
  scrollbar-color           : #ccc #ffffff;  // スクロールバーの色を設定（Firefoxのみ）

  &::-webkit-scrollbar {
    height: 8px;  // Webkitブラウザでのスクロールバーの高さ
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;  // スクロールバーの色
    border-radius   : 10px;  // 角の丸み
  }
}

.card {
  --card-width    : calc(var(--section-max-width) / 3 - var(--sp-medium) * 2);
  width           : var(--card-width);
  background-color: var(--white);
  padding-top     : var(--sp-large);
  padding-inline  : var(--sp-medium);
  border-radius   : 1rem;
  text-align      : center;
  position        : relative;
  flex-shrink     : 0.1;                                                        // カードの圧縮を防止
  margin-top      : var(--sp-large);

  h3 {
    font-size     : 26px;
    color         : var(--pink);
    padding-bottom: var(--sp-medium);
  }
}

.price {
    font-size     : 48px;
    line-height   : var(--line-height-tight);
    padding-bottom: var(--sp-medium);
  }

.admission_fee {
  font-size: 16px;
}

dt {
  font-size  : 18px;
  border-top : solid 1px #ccc;
  padding-top: calc(var(--sp-medium) * 1.2);
}

dd {
  font-size     : 16px;
  font-weight   : bold;
  padding-bottom: calc(var(--sp-medium) * 1.2);
}

.recommended {
  width           : calc(var(--card-width) * 0.75);
  background-color: var(--white);
  color           : var(--pink);
  font-size       : 20px;
  font-weight     : bold;
  border-radius   : 50px;
  border          : solid 2px var(--pink);
  padding         : .2em 4em;
  position        : absolute;
  top             : -5%;
  right           : 0;
  left            : 0;
  margin-inline   : auto;
}

.top_decoration {
  @include topDecoration;
}

.bottom_decoration {
  @include bottomDecoration;
}
</style>