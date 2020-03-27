<template>
  <div class="nav">
    <span
      @click="prev"
      class="nav-prev"
      :class="{'nav-disabled':isPrevDisabled}"
    >
      前一天
    </span>
    <span class="nav-current">{{currentString}}</span>
    <span
      @click="next"
      class="nav-next"
      :class="{'nav-disabled':isNextDisabled}"
    >
      后一天
    </span>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

export default {
  name: "index",
  props: {
    date: {
      type: Number,
      required: true
    },
    prev: {
      type: Function,
      required: true
    },
    next: {
      type: Function,
      required: true
    },
    isPrevDisabled: {
      type: Boolean,
      required: true
    },
    isNextDisabled: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    currentString() {
      const d = dayjs(this.date);
      return d.format('M月D日') + d.locale('zh-cn').format('ddd');
    }
  },
  methods: {}
};
</script>

<style scoped>
  .nav {
    z-index: 1;
    min-width: 290px;
    padding: 0 10px 0 15px;
    line-height: 44px;
    height: 44px;
    background: #f8f8f8;
    text-align: center;
    color: #3cc;
  }

  .nav-prev,
  .nav-next {
    float: right;
    margin-top: 13px;
    color: #3cc;
    height: 18px;
    line-height: 18px;
  }

  .nav-prev {
    float: left;
  }

  .nav-date {
    color: #3cc;
    position: relative;
    display: block;
    margin: 0 80px;
  }

  .nav-disabled {
    opacity: 0.3;
  }

</style>
