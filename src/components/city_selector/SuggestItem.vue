<template>
  <div class="city-suggest-li" @click="onClick(name)">
    {{name}}
  </div>
</template>

<script>
export default {
  name: "SuggestItem",
  props: {
    onClick: {
      type: Function,
      required: true
    },
    name: {
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

<style scoped>
  .city-suggest-li {
    list-style: none;
    padding: 5px 9px 5px 15px;
    border-bottom: 1px solid #e3e6e9;
  }
</style>
