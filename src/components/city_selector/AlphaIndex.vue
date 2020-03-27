<template>
  <div class="city-index-item" @click="onClick(alpha)">
    {{alpha}}
  </div>
</template>

<script>
export default {
  name: "AlphaIndex",
  props: {
    alpha: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  mounted() {

  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
  .city-index-item {
    flex: 1;
    display: block;
    text-decoration: none;
    font-size: 10px;
    color: #1ba9ba;
    font-style: normal;
  }
</style>
