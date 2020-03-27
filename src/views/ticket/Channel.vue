<template>
  <div class="channel">
    <div class="middle">
      <div class="name">{{name}}</div>
      <div class="desc">{{desc}}</div>
    </div>
    <router-link :to="src" class="buy-wrapper">
      <div class="buy">买票</div>
    </router-link>
  </div>
</template>

<script>
import URI from 'urijs';
export default {
  name: "Channel",
  props: {
    name: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    src() {
      return new URI('/order')
        .setSearch('type', this.type)
        .toString();
    },
  },
  methods: {}
};
</script>

<style scoped>
  .candidate li .channel {
    padding: 8px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f7f7f7;
  }

  .candidate li .channel .middle {
    margin-left: 23px;
    flex: 1;
  }

  .candidate li .channel .name {
    font-size: 14px;
    color: #212121;
    line-height: 20px;
  }

  .candidate li .channel .desc {
    margin-top: 2px;
    font-size: 12px;
    color: #9e9e9e;
    line-height: 16px;
  }

  .candidate li .channel .buy-wrapper {
    padding: 0 11px;
    background: rgba(255, 131, 0, 0.04);
    border: 1px solid #ff8300;
    border-radius: 4px;
    height: 28px;
    line-height: 28px;
    box-sizing: border-box;
    margin-top: 5px;
    text-decoration: none;
    display: block;
  }

  .candidate li .channel .buy {
    font-size: 14px;
    color: #ff8300;
    text-align: center;
    line-height: 28px;
  }
</style>
