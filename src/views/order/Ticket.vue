<template>
  <div class="ticket">
    <div class="label">坐席</div>
    <span class="ticket-type">{{type}}</span>
    <span class="ticket-price">{{price}}</span>
  </div>
</template>

<script>
export default {
  name: "Ticket",
  props: ['price', 'type'],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
  .ticket {
    background: #fff;
    position: relative;
    width: 100%;
    margin-top: 180px;
  }

  .ticket p {
    position: absolute;
    width: 100%;
    text-align: center;
  }
  .ticket-type {
    display: inline-block;
    height: 44px;
    line-height: 44px;
    padding: 0 10px;
  }

  .ticket-price {
    font-size: 18px;
    color: #ff8300;
  }

  .ticket-price::before {
    content: '\FFE5';
    font-size: 14px;
  }

  .ticket .label {
    display: inline-block;
    padding-left: 15px;
    line-height: 44px;
    height: 44px;
    width: 96px;
    min-width: 96px;
    font-size: 14px;
  }

</style>
