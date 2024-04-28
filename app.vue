<script setup lang="ts">

</script>

<template>
  <div>
    <SectionHeader
      :class="$style.header"
    />
    <SectionHero />
    <SectionIntro />
    <SectionAbout />
    <SectionTrainer />
    <SectionStudio />
    <SectionPrice />
    <SectionFaq />
    <SectionFooter />
  </div>
</template>

<style lang = "scss" module>

.header {
  position: fixed;
  top     : 0;
  left    : 0;
  width   : 100%;
  z-index : var(--z-index-header);
}

</style>