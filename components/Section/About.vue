<script setup lang="ts">

</script>

<template>
  <div :class="$style.about_container">
    <div :class="$style.about_wrapper">
      <div>
        <img :class="$style.about_image" src="assets/images/about-training.jpg" alt="トレーニング風景">
      </div>
      <div :class="$style.about_text_contents">
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

    <!-- <div :class="$style.about_wrapper">
      <div :class="$style.about_text_contents">
        <h3><span>Food</span></h3>
        <h4 :class="$style.about_heading">
          低糖質レストランを完備！<br>美味しく食べてダイエット
        </h4>
        <p :class="$style.about_description">
          食事制限って大変ですよね......。でも大丈夫!ENGBODY館内には低糖質レストラン『LCR』を完備しています。Low carb（低糖質）なのにとっても美味しい味に驚くはずです!
          メニューも豊富で飽きさせません。美味しく食べてしっかり痩せる!しかも英語力もアップ!それがENGBODYなのです。
        </p>
      </div>
      <div>
        <img :class="$style.about_food_image" src="assets/images/about-food.jpg" alt="食事例">
      </div>
    </div> -->
  </div>
</template>

<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;

.about_wrapper {
  position: relative;
  margin-block: var(--sp-larger);

  /* @include mediaScreen("desktop") {
    display: flex;
    justify-content: space-between;
  } */
}

.about_image {
  width: 70%;
  position: relative;
  top:0;
  left:0;

  > img {
    width: 100%;
  }

  @include mediaScreen("desktop") {
    width: 100%;
  }
}

/* .about_food_image {
  width: 70%;
  position: absolute;
  top:0;
  right:0;

  > img {
    width: 100%;
  }
} */

.about_text_contents {
  width           : 555px;
  background-color: var(--white);
  box-shadow      : 0 0 20px rgba(0, 0, 0, 0.1);
  padding         : calc(var(--sp-medium) * 2);
  border-radius: 10px;
  position: absolute;
  top: 20%;
  right: 0;
  margin-right: var(--sp-medium);

  @include mediaScreen("desktop") {
    width: 100%;
    position: relative;
    top:0;
    right: auto;
    margin: -20px 30px;
  }

  h3 {
    font-size: var(--fs-about-title);
    color    : var(--pink);
  }

  span {
    color: var(--green);
  }
}

.about_heading {
  font-size   : var(--fs-about-heading);
  line-height : var(--line-height-narrow);
  margin-block: var(--sp-medium);
}

.about_description {
  font-size: var(--fs-medium);
}
</style>