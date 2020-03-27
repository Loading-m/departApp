<template>
  <li :class="{active}" @click="onPress(value)">
    {{title}}
  </li>
</template>

<script>
export default {
  name: "MenuItem",
  props: ['title', 'onPress', 'value', 'active'],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
  .menu ul li {
    list-style: none;
    text-align: center;
    background: #fff;
    border-bottom: 1px solid #dcdfe0;
    color: #666;
    font-size: 16px;
    line-height: 48px;
    height: 48px;
  }

  .menu ul li.active {
    color: #1ba9ba;
  }
</style>
