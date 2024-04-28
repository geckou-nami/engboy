
import AboutTraining from '../AboutTraining.vue';

import AboutTraining from '../AboutTraining.vue';
<template>
  <div :class="$style.about_container">
    <div :class="$style.about_contents">
      <!-- <div :class="$style.about_training_wrapper">
    <div :class="$style.about_raining_image">
      <img src="assets/images/about-training.jpg" alt="トレーニング風景">
    </div>
    <div :class="$style.training_text_contents">
      <h3>Training</h3>
      <h4 :class="$style.about_heading">
        セッションはすべて英語。<br>LAさながらの環境
      </h4>
      <p :class="$style.about_description">
        ネイティブスピーカーによる50分のパーソナルトレーニングはすべて英語です!
        アップテンポの洋楽が流れる空間でテンション高めのトレーナーが英語であなたのトレーニングを盛り上げてくれます。ダイエットでよく使う英語をまとめたオリジナルテキストもあるのでスピーキング学習もバッチリです！
        <br>英語に苦手意識がある方は日本人トレーナーも選べますのでご安心してください。
      </p>
    </div>
  </div>

  <div :class="$style.about_food_wrapper">
    <div :class="$style.about_food_image">
      <img src="assets/images/about-food.jpg" alt="食事例">
    </div>
    <div :class="$style.food_text_contents">
      <h3><span>Food</span></h3>
      <h4 :class="$style.about_heading">
        低糖質レストランを完備！<br>美味しく食べてダイエット
      </h4>
      <p :class="$style.about_description">
        食事制限って大変ですよね......。でも大丈夫!ENGBODY館内には低糖質レストラン『LCR』を完備しています。Low carb（低糖質）なのにとっても美味しい味に驚くはずです!
        メニューも豊富で飽きさせません。美味しく食べてしっかり痩せる!しかも英語力もアップ!それがENGBODYなのです。
      </p>
    </div>
  </div> -->
      <AboutTraining />
      <AboutFood />
      <LinkButton :class="$style.link_button" />
    </div>
  </div>
</template>

<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;

.about_container {
  margin-bottom: calc(var(--sp-large) * 4);
}

.about_contents {
  max-width: var(--about-max-width);
  margin   : 0 auto;
}

.link_button {
  display   : block;
  text-align: center;
}
/* 
.about_training_wrapper,
.about_food_wrapper {
  display        : flex;
  justify-content: left;
  margin-block   : var(--sp-larger);
  position       : relative;

  @include mediaScreen("desktop") {
    display       : flex;
    flex-direction: column;
    align-items   : center;
  }
}

.about_food_wrapper {
  justify-content: right;
}

.about_raining_image,
.about_food_image {
  width: 70%;

  > img {
    width: 100%;
  }

  @include mediaScreen("desktop") {
    width: 100%;
  }
} */
/* 
.training_text_contents,
.food_text_contents {
  width           : 555px;
  background-color: var(--white);
  box-shadow      : 0 0 20px rgba(0, 0, 0, 0.1);
  padding         : calc(var(--sp-medium) * 2);
  border-radius   : 10px;
  position        : absolute;
  bottom          : -5%;
  right           : 0;
  margin-right    : var(--sp-medium);

  @include mediaScreen("desktop") {
    width   : 95%;
    position: relative;
    top     : 0;
    margin  : -20px 30px;
  } */
/* 
  h3 {
    font-size: var(--fs-about-title);
    color    : var(--pink);
  }

  span {
    color: var(--green);
  }
}

.food_text_contents  {
  left       : 0;
  margin-left: var(--sp-medium);

  @include mediaScreen("desktop") {
    width   : 95%;
    position: relative;
    top     : 0;
    margin  : -20px 30px;
  }
}

.about_heading {
  font-size   : var(--fs-about-heading);
  line-height : var(--line-height-narrow);
  margin-block: var(--sp-medium);
}

.about_description {
  font-size: var(--fs-medium);
} */
</style>