<template>
  <div class="submit">
    <input type="button" class="submit-button" @click="getFormData" value="搜索">
  </div>
</template>

<script>
export default {
  name: "Submit",
  props: {
    getFormData: {
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

<style scoped lang="scss">
  .submit {
    padding: 10px 0 17px 0;
  }

  .submit-button {
    background-color: #f90;
    height: 40px;
    line-height: 40px;
    color: #fff;
    border-radius: 6px;
    border: 0;
    padding: 0;
    margin: 0;
    display: block;
    width: 100%;
  }
</style>
