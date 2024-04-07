<script setup lang="ts">

</script>

<template>
  <div :class="$style.hero_container">
    <div :class="$style.hero_title_content">
        <h1><span :class="$style.title_anime">Body Make</span></h1>
      
      
        <h1>
          <span :class="$style.title_anime">
            <span :class="$style.pink">&</span>
            English
          </span>
        </h1>
  
      <h2>英会話＆パーソナルトレーニングジム</h2>
      <LinkButton :class="$style.link_button" />
    </div>
    <div :class="$style.hero_image" />
  </div>
</template>

<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;

.hero_container {
  width   : 100%;
  height  : 680px;
  position: relative;

  @include mediaScreen('tablet') {
    height: 500px;
  }

  @include mediaScreen('mobile') {
    height: 410px;
  }
}

.hero_title_content {
  position  : absolute;
  left      : 10%;
  margin-top: calc(var(--sp-larger) * 3);

  h1 {
  font-size  : var(--fs-main-title);
  font-style : italic;
  font-weight: normal;
  line-height: 1;
  line-height: var(--line-height-tight);

    .pink {
      color: var(--pink);
    }
  }

  h2 {
    display: inline-block;
    font-size  : var(--fs-main-lead);
    font-weight: bold;
    margin-top: var(--sp-medium);
    background-color: var(--white);
    line-height: 1;
  }
}

.title_anime {
  background-color: var(--white);
  animation: textOpacity 1.5s forwards;
  opacity: 0;
  position: relative;

  &::after {
      content: '';
      width: 0;
      height: 100%;
      background-color: var(--pink);
      position: absolute;
      top: 0;
      animation: textFadeIn 1.5s forwards;
    }
}

.hero_image {
  position: absolute;
  top: 0;
  right: 0;
  width              : 70%;
  height             : 680px;
  border-radius      : 0 0 0 90px;
  background-image   : url('assets/images/bg_mv.jpg');
  background-size    : cover;
  background-position: center;
  background-repeat  : no-repeat;
  z-index            : -2;

  @include mediaScreen('tablet') {
    height: 500px;
  }

  @include mediaScreen('mobile') {
    height: 410px;
  }
}

.link_button {
  margin-top: var(--sp-small);
}


@keyframes textOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes textFadeIn {
  0% {
    left: 0;
    right: auto;
    width: 0%;
  }
  50% {
    left: 0;
    right: auto;
    width: 100%;
  }
  51% {
    right: 0;
    left: auto;
    width: 100%;
  }
  100% {
    left: auto;
    right: 0;
    width: 0%;
  }
}
</style>