<template>
  <div class="option">
    <h3>{{title}}</h3>
    <div class="range-slider">
      <div class="slider" ref="range">
        <div
          class="slider-range"
          :style="{left: start + '%',width:end - start + '%'}"

        > <!--左右两个滑块之间的距离-->
        </div>
        <i
          ref="startHandle"
          class="slider-handle"
          :style="{left: start + '%'}"
        >
          <span>{{startText}}</span>
        </i>
        <i
          ref="endHandle"
          class="slider-handle"
          :style="{left: end + '%'}"
        >
          <span>{{endText}}</span>
        </i>
      </div>
    </div>
  </div>
</template>

<script>
import leftPad from 'left-pad';

export default {
  name: "Slider",
  props: {
    title: {
      type: String,
      required: true
    },
    currentStartHours: {
      type: Number,
      required: true
    },
    currentEndHours: {
      type: Number,
      required: true
    },
    onStartChanged: {
      type: Function,
      required: true
    },
    onEndChanged: {
      type: Function,
      required: true
    },
  },
  data() {
    return {
      start: this.currentStartHours / 24 * 100,
      end: this.currentEndHours / 24 * 100,
    };
  },
  mounted() {
    this.startHandle = this.$refs.startHandle;
    this.endHandle = this.$refs.endHandle;
    this.range = this.$refs.range;
    this.getRangeWidth();
    this.startHandle.addEventListener('touchstart', this.onStartTouchBegin, false);
    this.startHandle.addEventListener('touchmove', this.onStartTouchMove, false);
    this.endHandle.addEventListener('touchstart', this.onEndTouchBegin, false);
    this.endHandle.addEventListener('touchmove', this.onEndTouchMove, false);
    window.addEventListener('resize', this.onResize, false);
  },
  destroyed() {
    this.startHandle.addEventListener('touchstart', this.onStartTouchBegin, false);
    this.startHandle.addEventListener('touchmove', this.onStartTouchMove, false);
    this.endHandle.addEventListener('touchstart', this.onEndTouchBegin, false);
    this.endHandle.addEventListener('touchmove', this.onEndTouchMove, false);
    window.removeEventListener('resize', this.onResize, false);
  },
  watch: {
    currentStartHours(val, old) {
      if (val !== old) {
        this.start = val / 24 * 100;
      }
    },
    currentEndHours(val, old) {
      if (val !== old) {
        this.end = val / 24 * 100;
      }
    },
    start(val) {
      if (val > 100) {
        this.start = 100;
      }
      if (val < 0) {
        this.start = 0;
      }
      if (val >= this.end) {
        this.start = this.end - 2 / 24 * 100;
      }
    },
    end(val) {
      if (val > 100) {
        this.end = 100;
      }
      if (val < 0) {
        this.end = 0;
      }
      if (val <= this.start) {
        this.end = this.start + 2 / 24 * 100;
      }
    },
    startsHours(val) {
      this.onStartChanged(val);
    },
    endHours(val) {
      this.onEndChanged(val);
    }
  },
  computed: {
    startsHours() {
      return Math.round(this.start * 24 / 100);
    },
    endHours() {
      return Math.round(this.end * 24 / 100);
    },
    startText() {
      return leftPad(this.startsHours, 2, '0') + ':00';
    },
    endText() {
      return leftPad(this.endHours, 2, '0') + ':00';
    },
    // start() {
    //   return this.currentStartHours / 24 * 100;
    // },
    // end() {
    //   return this.currentEndHours / 24 * 100;
    // }
  },
  methods: {
    getRangeWidth() {
      this.rangeWidth = parseFloat(window.getComputedStyle(this.range).width);
    },
    onResize() {
      this.getRangeWidth();
    },
    onStartTouchBegin(e) {
      const touch = e.targetTouches[0];
      this.lastStartX = touch.pageX;
    },
    onStartTouchMove(e) {
      e.preventDefault();
      const touch = e.targetTouches[0];
      const distance = touch.pageX - this.lastStartX;
      this.lastStartX = touch.pageX;
      this.start = this.start + distance / this.rangeWidth * 100;
    },
    onEndTouchBegin(e) {
      const touch = e.targetTouches[0];
      this.lastEndX = touch.pageX;
    },
    onEndTouchMove(e) {
      e.preventDefault();
      const touch = e.targetTouches[0];
      const distance = touch.pageX - this.lastEndX;
      this.lastEndX = touch.pageX;
      this.end = this.end + distance / this.rangeWidth * 100;
    },
  }
};
</script>

<style scoped>
  .range-slider {
    padding: 50px 0 30px;
  }

  .range-slider .slider {
    position: relative;
    width: 60%;
    height: 1px;
    margin: 0 auto;
    background: #c7ced4;
  }

  .range-slider .slider .slider-range {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    height: 1px;
    background: #3cc;
  }

  .range-slider .slider .slider-handle {
    position: absolute;
    top: 50%;
    margin-top: -13px;
    margin-left: -17px;
    z-index: 1000;
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid #d0d6db;
    cursor: pointer;
    font-style: normal;
  }

  .range-slider .slider .slider-handle span {
    position: absolute;
    top: -23px;
    left: -6px;
    font-size: 15px;
    color: #666;
  }

</style>
