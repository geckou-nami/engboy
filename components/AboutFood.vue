<script setup lang="ts">

</script>

<template>
  <AboutItem
    :justifyContent="'right'"
    :positionLeft="'0'"
  >
    <template #images>
      <img src="assets/images/about-food.jpg" alt="食事例">
    </template>
    <template #subheading>
      Food
    </template>
    <template #heading>
      低糖質レストランを完備！<br>美味しく食べてダイエット
    </template>
    <template #description>
      食事制限って大変ですよね......。でも大丈夫!ENGBODY館内には低糖質レストラン『LCR』を完備しています。Low carb（低糖質）なのにとっても美味しい味に驚くはずです!
      メニューも豊富で飽きさせません。美味しく食べてしっかり痩せる!しかも英語力もアップ!それがENGBODYなのです。
    </template>
  </AboutItem>
</template>

<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;

</style>