<template>
  <div class="date-selector" v-if="show">
    <headers title="日期选择" :on-back="onBack" />
    <div class="date-selector-tables">
      <month v-for="month of monthSequence" :starting-time-in-month="month" :key="month" :on-select="onSelect" />
    </div>
  </div>
</template>

<script>
import Headers from "@/components/header/Header";
import Month from "@/components/date_selector/Month";

export default {
  name: "DateSelector",
  components: {
    Month,
    Headers
  },
  props: {
    show: {
      type: Boolean,
      required: true
    },
    onSelect: {
      type: Function,
    },
    onBack: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      monthSequence: []
    };
  },
  mounted() {
    const now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    now.setDate(1);
    this.monthSequence = [now.getTime()];
    now.setMonth(now.getMonth() + 1);
    this.monthSequence.push(now.getTime());
    now.setMonth(now.getMonth() + 1);
    this.monthSequence.push(now.getTime());
  },
  methods: {}
};
</script>

<style scoped>
  .date-selector {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    min-height: 100%;
    margin-bottom: 70px;
    z-index: 1000;
  }

  .date-selector-tables {
    padding: 15px 10px 15px 10px;
    background: #f3f3f3;
  }


</style>
