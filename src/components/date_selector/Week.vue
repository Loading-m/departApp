<template>
  <tr class="date-table-days">
    <day v-for="(day,index) of days" :key="index" :day="day" :on-select="onSelect" />
  </tr>
</template>

<script>
import Day from "@/components/date_selector/Day";

export default {
  name: "Week",
  components: {
    Day
  },
  props: {
    days: {
      type: Array,
      required: true
    },
    onSelect: {
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
  .date-table-days {
    font-size: 14px;
    color: #8c8c8c;
  }
</style>
