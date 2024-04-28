<script setup lang="ts">

const isHidden = ref(true);

// スクロールイベントをハンドリングする関数
function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  isHidden.value = scrollTop === 0;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // コンポーネントマウント時に一度チェック
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'auto' })
}
</script>

<template>
  <div>
    <SectionHeader
      :class="$style.header"
      :isTransparent="isHidden"
    />
    <SectionHero />
    <SectionIntro />
    <SectionAbout />
    <SectionTrainer />
    <SectionStudio />
    <SectionPrice />
    <SectionFaq />
    <SectionFooter />
    <button
      :class="[$style.page_top_bottom, isHidden ? $style.hidden : '']"
      @click="scrollToTop"
    >
      <span class="material-icons">
        expand_less
      </span>
    </button>
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

.page_top_bottom{
  position        : fixed;
  bottom          : var(--sp-medium);
  right           : var(--sp-medium);
  width           : calc(var(--sp-small) * 10);
  aspect-ratio    : 1/1;
  border-radius   : 50%;
  background-color: var(--white);
  color           : var(--pink);
  cursor          : pointer;
  box-shadow      : 0 0 10px rgba(0, 0, 0, 0.1);
  opacity         : 1;
  transition      : all 1s ease-in 1s;

  &.hidden {
    opacity: 0;
    display: none;
  }
}
</style>

<style>
.material-icons {
  font-size: 2.5rem;
}
</style>