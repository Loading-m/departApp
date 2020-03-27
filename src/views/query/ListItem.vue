<template>
  <li class="list-item">
    <router-link :to="url">
      <span class="item-time">
        <em>{{$attrs.item.dTime}}</em>
        <br />
        <em class="em-light">{{$attrs.item.aTime}}</em> <i class="time-after">{{$attrs.item.dayAfter}}</i>
      </span>
      <span class="item-stations">
        <em>
          <i class="train-station train-start">始</i>
          {{$attrs.item.dStation}}
        </em>
        <br />
        <em class="em-light">
          <i class="train-station train-end">终</i>
          {{$attrs.item.aStation}}
        </em>
      </span>
      <span class="item-train">
        <em>{{$attrs.item.trainNumber}}</em>
        <br />
        <em class="em-light">{{$attrs.item.time}}</em>
      </span>
      <span class="item-ticket">
        <em>{{$attrs.item.priceMsg}}</em>
        <br />
        <em class="em-light-orange">可抢票</em>
      </span>
    </router-link>
  </li>
</template>

<script>
import URI from 'urijs';

export default {
  name: "ListItem",
  data() {
    return {
      url: ''
    };
  },
  mounted() {
    this.url = new URI('/ticket').setSearch('aStation', this.$attrs.item.aStation).setSearch('dStation', this.$attrs.item.dStation).setSearch('trainNumber', this.$attrs.item.trainNumber).setSearch('date', this.$store.state.query.departDate).toString();
  },
  methods: {}
};
</script>

<style scoped>
  .list-item {
    overflow: hidden;
    padding: 10px 10px 10px 0;
    border-bottom: 1px solid #ececec;
    list-style: none;
    margin: 0;
  }

  .list-item a {
    display: block;
    color: #333;
  }

  .list-item a::after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    font-size: 0;
    content: '';
  }

  .list-item em,
  .list-item i {
    font-style: normal;
  }

  .item-time {
    float: left;
    width: 18%;
  }

  .item-stations {
    float: left;
    width: 33%;
  }

  .item-train {
    float: left;
    width: 21%;
  }

  .item-ticket {
    float: left;
    width: 28%;
    text-align: right;
    color: #f90;
  }

  .em-light {
    color: #666;
    font-size: 14px;
  }

  .em-light-orange {
    color: #f90;
    font-size: 14px;
  }

  .train-station {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 5px;
    border-radius: 10px;
    border: 1px solid #3cc;
    font-size: 12px;
    color: #3cc;
    text-align: center;
    font-family: '宋体';
  }

  .train-start {
    border: 1px solid #3cc;
    color: #3cc;
  }

  .train-end {
    border: 1px solid #39c381;
    color: #39c381;
  }

  .time-after {
    color: red;
    position: absolute;
  }
</style>
