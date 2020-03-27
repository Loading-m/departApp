<template>
  <div class="header">
    <div class="header-back" @click="onBack">
      <svg width="42" height="42">
        <polyline points="25,13 16,21 25,29" stroke="#fff" stroke-width="2" fill="none" />
      </svg>
    </div>
    <h1 class="header-title">{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    onBack: {
      type: Function,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
  .header {
    height: 44px;
    line-height: 44px;
    min-width: 240px;
    background: #1ba9ba;
    color: #fff;
    font-size: 18px;
    text-align: center;
    position: relative;
    padding: 0 15px;

    .header-back {
      position: absolute;
      left: 0;
      width: 42px;
      height: 42px;
    }

    .header-title {
      max-width: 216px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      font-size: 100%;
      margin: 0;
    }
  }
</style>
