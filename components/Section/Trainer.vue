<script setup lang="ts">

const selectedTab = ref('trainers'); // 初期値として 'trainers' を設定

const toggleTab = (tabName: string) => {
  selectedTab.value = tabName;
}

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
        <TrainerCard
          :selectedTab="selectedTab"
        />
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
  position        : relative;
}

.trainer_contents {
  max-width     : var(--section-max-width);
  margin-inline : auto;
  padding-inline: var(--sp-large);
  padding-block : var(--sp-large);
  margin-bottom : var(--decoration-height);
}

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
  color         : var(--white);

  &.active {
    border-bottom: solid 2px var(--white);
    font-weight  : bold;
  }
}

.top_decoration {
  @include topDecoration;
}

.bottom_decoration {
  @include bottomDecoration;
}
</style>