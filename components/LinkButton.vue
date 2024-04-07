<script setup lang="ts">

</script>

<template>
  <div>
    <button>
      無料カウンセリングを受ける
    </button>    
  </div>
</template>

<style lang = "scss" module>

button {
  background-color: var(--pink);
  font-size       : var(--fs-button);
  color           : white;
  padding         : calc(var(--sp-small) * 3) calc(var(--sp-small) * 5.5);
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
