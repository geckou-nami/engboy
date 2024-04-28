<script setup lang="ts">
const props = defineProps({
  btnColor: {
    type: String,
    default: 'var(--pink)'
  },
  textColor: {
    type: String,
    default: 'var(--white)'
  }
  ,textSize: {
    type: String,
    default: 'var(--fs-button)'
  }
});

</script>

<template>
  <div>
    <button 
      :class="$style.button"
      :style="{ 'background-color': btnColor, 'color': textColor, 'font-size': textSize }">
      無料カウンセリングを受ける
    </button>    
  </div>
</template>

<style lang = "scss" module>

.button {
  --button-color  : var(--pink);
  background-color: var(--button-color);
  color           : white;
  padding         : 0.9em 2.5em;
  border-radius   : 50px;
  border          : none;
  cursor          : pointer;
  font-weight     : bold;
  transition      : all 0.4s;

  &:hover {
    opacity: 0.8;
  }
}
</style>
