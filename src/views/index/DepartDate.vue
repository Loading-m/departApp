<template>
  <div class="depart-date" @click="onClick(true)">
    {{newDate}} <span class="depart-week">{{weekString}}</span>
  </div>
</template>

<script>
import { h0 } from "@/utils/fp";
import dayjs from 'dayjs';

export default {
  name: "DepartDate",
  props: {
    time: {
      type: Number,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      newDate: null,
      week: ['日', '一', '二', '三', '四', '五', '六']
    };
  },
  mounted() {

  },
  watch: {
    h0OfDepart: {
      handler(val) {
        this.newDate = dayjs(val).format('YYYY-MM-DD');
      },
      immediate: true
    }
  },
  computed: {
    h0OfDepart() {
      return h0(this.time);
    },
    weekString() {
      const date = new Date(this.h0OfDepart);
      return '周' + this.week[date.getDay()] + (this.isToday ? '(今天)' : '');
    },
    isToday() {
      return this.h0OfDepart === h0();
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
  .depart-date {
    font-size: 20px;
    line-height: 45px;
    height: 45px;
    background: #fff;
    border-bottom: 1px solid #eaeaea;
    text-align: left;
    color: #333;
  }

  .depart-week {
    color: #888;
    font-size: 15px;
  }

</style>
