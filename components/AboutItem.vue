<script setup lang="ts">
const props = defineProps<{
  justifyContent: string
  positionLeft: string
}>();

</script>

<template>
  <div
    :class="$style.about_item_wrapper"
    :style="{'--justify-content': justifyContent}"
  >
    <div :class="$style.item_image">
      <slot name="images"/>
    </div>
    <div
      :class="$style.item_content"
      :style="{'--position-left': positionLeft}"
    >
      <h3>
        <slot name="subheading"/>
      </h3>
      <h4 :class="$style.item_heading">
        <slot name="heading"/>
      </h4>
      <p :class="$style.item_description">
        <slot name="description"/>
      </p>
    </div>
  </div>
</template>

<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;

.about_item_wrapper {
  display        : flex;
  justify-content: var(--justify-content);
  margin-block   : var(--sp-larger);
  position       : relative;

  @include mediaScreen("desktop") {
    display       : flex;
    flex-direction: column;
    align-items   : center;
  }
}

.item_image {
  width: 70%;

  > img {
    width: 100%;
  }

  @include mediaScreen("desktop") {
    width: 100%;
  }
}

.item_content {
  width           : 555px;
  background-color: var(--white);
  box-shadow      : 0 0 20px rgba(0, 0, 0, 0.1);
  padding         : calc(var(--sp-medium) * 2);
  border-radius   : 10px;
  position        : absolute;
  bottom          : -5%;
  right           : 0;
  left            : var(--position-left);
  margin-inline    : var(--sp-medium);

  @include mediaScreen("desktop") {
    width   : 95%;
    position: relative;
    top     : 0;
    margin  : -20px 30px;
  }

  h3 {
    font-size: var(--fs-about-title);
    color    : var(--pink);
  }

  span {
    color: var(--green);
  }
}

.item_heading {
  font-size   : var(--fs-about-heading);
  line-height : var(--line-height-narrow);
  margin-block: var(--sp-medium);
}

.item_description {
  font-size: var(--fs-medium);
}
</style>