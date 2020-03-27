<template>
  <li class="city-li" @click="onSelect(name)">
    {{name}}
  </li>
</template>

<script>
export default {
  name: "CityItem",
  props: {
    name: {
      type: String,
      required: true
    },
    onSelect: {
      type: Function,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
  .city-li {
    display: block;
    height: 44px;
    line-height: 44px;
    padding-left: 25px;
    border-bottom: 1px solid #e3e6e9;
    margin-left: 15px;
  }
</style>
