<template>
  <li :class="{'checked' :checked}" @click="toggle(value)">
    {{name}}
  </li>
</template>

<script>
export default {
  name: "Filters",
  props: {
    name: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    },
    toggle: {
      type: Function,
      required: true
    },
    value: {
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
  .bottom-dialog-content .option li {
    list-style: none;
    float: left;
    width: 28.5%;
    height: 27px;
    line-height: 27px;
    margin: 0 2% 4%;
    border: 1px solid #c7ced4;
    border-radius: 4px;
    color: #333;
    text-align: center;
  }

  .bottom-dialog-content .option li.checked {
    background: #3cc;
    border-color: #3cc;
    color: #fff;
  }

  .bottom-modal {
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
  }

  .bottom-dialog {
    position: absolute;
    background: #fff;
    left: 0;
    right: 0;
    top: 10%;
    bottom: 56px;
    overflow: scroll;
  }

  .bottom-dialog-content {
    /*z-index: 1000;*/
  }

  .bottom-dialog-content .title {
    width: 100%;
    position: fixed;
    background: #fff;
    z-index: 1111;
    height: 41px;
    line-height: 41px;
    font-size: 14px;
    color: #3cc;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #ececec;
  }

  .bottom-dialog-content .title span {
    position: absolute;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    left: 6%;
    top: 6px;
  }

  .bottom-dialog-content .title span.disabled {
    color: #d9d9d9;
  }

  .bottom-dialog-content .title span:last-of-type {
    left: auto;
    right: 6%;
  }

  .bottom-dialog-content .options {
    padding-top: 41px;
    overflow: scroll;
  }

</style>
