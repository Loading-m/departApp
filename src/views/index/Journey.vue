<template>
  <div class="journey">
    <div class="journey-station" @click="showCitySelector(true)">
      <span class="journey-position-from">{{froms}}</span>
    </div>
    <div class="journey-switch" @click="exchange" ref="exchangeImg">
      <img src="./image/switch.svg" alt="switch-reverse" width="70" height="48" class="journey-switch-reverse">
    </div>
    <div class="journey-station" @click="showCitySelector(false)">
      <span class="journey-position-to">{{to}}</span>
    </div>
  </div>
</template>

<script>
import animations from 'create-keyframe-animation';

export default {
  name: "CityChoice",
  props: {
    froms: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    showCitySelector: {
      type: Function,
      required: true
    },
    exchangeFromsTo: {
      type: Function,
      required: true
    }
  },
  data() {
    return {};
  },
  mounted() {
    let animation = {
      0: {
        transform: `rotate(0deg)`
      },
      100: {
        transform: `rotate(360deg)`
      }
    };
    animations.registerAnimation({
      name: 'rotate',
      animation,
      presets: {
        duration: 500,
        easing: 'ease'
      }
    });
  },
  methods: {
    exchange(e) {
      animations.runAnimation(this.$refs.exchangeImg, 'rotate', () => {
        this.$refs.exchangeImg.style.animation = '';
        this.exchangeFromsTo();
      });
    }
  }
};
</script>

<style scoped lang="scss">
  .journey {
    display: flex;

    .journey-switch {
      width: 70px;
      height: 46px;
      line-height: 46px;
      transition-property: transform;
      transition-duration: 0.3s;

      .journey-switch-reverse {
        transform: rotateZ(180deg);
      }
    }

    .journey-station {
      flex: 1;
      font-size: 18px;
      line-height: 45px;
      height: 45px;
      border-bottom: 1px solid #eaeaea;

      .journey-to {
        text-align: right;
      }

      .journey-input {
        height: 100%;
        color: #000;
        width: 100%;
        margin-left: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        background: #fff;
        padding: 0;
        line-height: 46px;
      }
    }
  }
</style>
