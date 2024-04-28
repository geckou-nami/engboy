<script setup lang="ts">
const questions = ref([
  {
    question: '見学や体験は可能ですか？',
    answer: '無料カウンセリングの際に見学が可能です。フォームに見学・体験希望の欄がございますので内容をご確認しチェックを入れてください。',
    open: false
  },
  {
    question: '用意するものは何がありますか？',
    answer: 'シューズをご持参ください。ウェアとタオルは無料でレンタルが可能です。',
    open: false
  },
  {
    question: 'シャワールームはありますか？',
    answer: '5つのシャワールームがございます。ボディソープ・シャンプー・リンスなどのアメニティやドライヤーもご用意しております。',
    open: false
  }
]);

const toggle = (index: number) => {
  questions.value[index].open = !questions.value[index].open
}
</script>

<template>
  <div :class="$style.faq_container">
    <div :class="$style.faq_contents">
      <SectionHeading
        :en-heading="`FAQ`"
        :jp-heading="`よくあるご質問`"
        :enColor="'var(--black)'"
        :jpColor="'var(--pink)'"
      />
      <div :class="$style.faq_wrapper">
        <details
          :class="$style.faq"
          v-for="(item, index) in  questions"
          :key="index"
        >
          <summary @click="toggle(index)" :class="$style.question">
            {{ item.question }}
            <span v-if="item.open">
              <span class="material-icons">
                expand_less
              </span>
            </span>
            <span v-else>
              <span class="material-icons">
                expand_more
              </span>
            </span>
          </summary>
          <p
            :class="[$style.answer, item.open ? $style.active : '']"
            v-show="item.open"
          >
          {{ item.answer }}
          </p>
        </details>
      </div>
    </div>
  </div>
</template>

<style lang = "scss" module>

.faq_container {
  width: 100%;
}

.faq_contents {
  max-width     : var(--section-max-width);
  margin        : 0 auto;
  padding-inline: var(--sp-large);
  padding-block : calc(var(--sp-large) * 2);
}

.faq_wrapper {
  margin-block: var(--sp-large);
}

.faq {
  width        : 100%;
  padding      : var(--sp-small);
  margin-bottom: var(--sp-small);
  border-bottom: 1px solid #ccc;
}

.question {
  width        : 100%;
  text-align   : left;
  padding      : var(--sp-small);
  margin-bottom: var(--sp-small);
  padding-left : var(--sp-larger);
  cursor       : pointer;
  position     : relative;
  display: block;

  &::before {
    content  : 'Q';
    display  : block;
    width    : 100%;
    font-size: 26px;
    color    : var(--pink);
    position : absolute;
    left     : 0;
    top      : 0;
  }

  span {
    position: absolute;
    right   : var(--sp-large);
    color  : var(--pink);
  }
}

.answer {
  width        : 100%;
  text-align   : left;
  padding      : var(--sp-small);
  margin-bottom: var(--sp-small);
  padding-left : var(--sp-larger);
  overflow     : hidden;
  height       : 0;
  transition   : all 1s ease;
  position     : relative;

  &::before {
    content  : 'A';
    display  : block;
    font-size: 26px;
    color    : var(--pink);
    position : absolute;
    left     : 0;
    top      : 0;
  }

  &.active {
    height: auto;
  }
}
</style>