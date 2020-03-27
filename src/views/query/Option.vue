<template>
  <div class="option">
    <h3>{{title}}</h3>
    <ul>
      <filters v-for="option of options" :key="option.value"
               :checked="option.value in checkedMap"
               :name="option.name" :toggle="toggle" :value="option.value" />
    </ul>
  </div>
</template>

<script>
import Filters from "@/views/query/Filter";

export default {
  name: "Option",
  components: {
    Filters
  },
  props: {
    title: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    checkedMap: {
      type: Object,
      required: true
    },
    update: {
      type: Function,
      required: true
    }
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.checkedMap);
  },
  methods: {
    toggle(val) {
      const newCheckedMap = {...this.checkedMap};
      console.log(newCheckedMap);
      if (val in this.checkedMap) {
        delete newCheckedMap[val];
      } else {
        newCheckedMap[val] = true;
      }
      this.update(newCheckedMap);
    }
  }
};
</script>

<style scoped>
  .bottom-dialog-content .option h3 {
    margin: 0;
    height: 28px;
    padding: 0 0 0 6%;
    font-size: 13px;
    line-height: 27px;
    color: #666;
    background-color: #f5f5f5;
    font-weight: normal;
  }

  .bottom-dialog-content .option ul {
    list-style: none;
    overflow: hidden;
    padding: 4% 4% 0;
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
