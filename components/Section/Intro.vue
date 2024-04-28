<template>
  <div :class="$style.intro_container">
    <div :class="$style.catch_copy_wrapper">
      <h3>
        YOU <br :class="$style.mobile_br">CAN <br :class="$style.tablet_br">DO IT !
      </h3>
      <p :class="$style.lead">
        英語とトレーニングの<span>密月関係</span>
      </p>
      <p :class="$style.text">
        Hey, guys! 英語を話している時ってなんだかテンションが上りませんか？<br>
        バイブス高めでトレーニングをすれば、あなたのベストなパフォーマンスが出せます！<br>
        英語と運動に自信がなくたってOK!<br>
        優しくて盛り上げな上手な外国人トレーナーがしっかりサポートします。<br>
        さぁ、ENGBODYで英語でパーソナルトレーニングを受けましょう。
      </p>
    </div>
  </div>
</template>

<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;

.intro_container {
  width     : 100%;
  margin-top: calc(var(--sp-medium) * -2.5);
  padding   : 0 var(--sp-large);
}

.catch_copy_wrapper {
  width     : 100%;
  text-align: center;

  h3 {
    font-size  : 108px;
    font-weight: bold;
    font-style : italic;
    color      : var(--pink);
    line-height: var(--line-height-tight);

    @include mediaScreen('desktop') {
      font-size: 56px;
    }
  }

  .lead {
    font-size    : 32px;
    font-weight  : bold;
    margin-bottom: var(--sp-medium);

    @include mediaScreen('desktop') {
      font-size: 16px;
    }

    span {
      color: var(--pink);
    }
  }

  .text {
    font-size: 16px;

    @include mediaScreen('desktop') {
      font-size: 15px;
    }

    @include mediaScreen('mobile') {
      text-align: left;
    }
  }
}

.tablet_br {
  display: none;

  @include mediaScreen('tablet') {
    display: block;
  }
}

.mobile_br {
  display: none;

  @include mediaScreen('mobile') {
    display: block;
  }
}
</style>