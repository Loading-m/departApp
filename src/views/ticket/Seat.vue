<template>
  <li>
    <div class="bar" @click="onToggle(idx)">
      <span class="seat">{{type}}</span>
      <span class="price"><i>￥</i>{{priceMsg}}</span>
      <span class="btn">{{expanded ? '收起' : '预订'}}</span>
      <span class="num">{{ticketsLeft}}</span>
    </div>
    <div
      class="channels"
      :style="{height: expanded ? channels.length * 55 +'px' : 0}"
    >
      <channel v-for="channel of channels" :key="channel.name" :type="type" :desc="channel.desc" :name="channel.name" />
    </div>
  </li>
</template>

<script>
import Channel from "@/views/ticket/Channel";

export default {
  name: "Seat",
  components: {
    Channel
  },
  props: {
    idx: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    priceMsg: {
      type: String,
      required: true
    },
    ticketsLeft: {
      type: String,
      required: true
    },
    channels: {
      type: Array,
      required: true
    },
    expanded: {
      type: Boolean,
      required: true
    },
    onToggle: {
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
  .candidate li .bar {
    line-height: 42px;
    padding: 0 15px;
    overflow: hidden;
    border-bottom: 1px solid #eaeaea;
  }

  .candidate li .seat {
    float: left;
    font-size: 17px;
    padding-right: 15px;
    width: 70px;
  }

  .candidate li .price {
    float: left;
    font-size: 18px;
    color: #f90;
  }

  .candidate li .price i {
    font-style: normal;
    font-size: 12px;
    padding: 0 1px;
  }

  .candidate li .btn {
    float: right;
    width: 50px;
    height: 25px;
    line-height: 25px;
    border: 1px solid #f90;
    color: #f90;
    border-radius: 3px;
    text-align: center;
    position: relative;
    top: 7px;
    font-size: 14px;
  }

  .candidate li .num {
    float: right;
    padding-right: 15px;
    font-size: 12px;
  }

  .candidate li .channels {
    height: 0;
    overflow: hidden;
    transition: 0.5s;
  }


</style>
