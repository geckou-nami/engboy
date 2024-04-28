<script setup lang="ts">
type Props = {
  enHeading: string;
  jpHeading: string;
  enColor  : string;
  jpColor  : string;
}

const props = withDefaults(defineProps<Props>(), {
  enColor: 'var(--white)',
  jpColor: 'var(--white)'
});

</script>

<template>
  <div :class="$style.heading">
    <h2 
      :class="$style.en"
      :style="{ 'color': enColor }"
    >
    {{ enHeading }}
    </h2>
    <h2
      :class="$style.jp"
      :style="{ 'color': jpColor }"  
    >
    {{ jpHeading }}
    </h2>
  </div>
</template>

<style lang = "scss" module>

.heading {
  color: var(--white);
}

.en {
  font-size  : var(--fs-heading-en);
  font-weight: normal;
  line-height: var(--line-height-tight);
}

.jp {
  font-size: var(--fs-heading-jp);
}

</style>