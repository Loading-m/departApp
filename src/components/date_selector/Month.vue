<template>
  <div>
    <table class="date-table">
      <thead>
      <tr>
        <td colspan="7">
          <h5>
            {{startDay.getFullYear()}}年{{startDay.getMonth()}}月
          </h5>
        </td>
      </tr>
      </thead>
      <tbody>
      <tr class="date-table-weeks">
        <th>周一</th>
        <th>周二</th>
        <th>周三</th>
        <th>周四</th>
        <th>周五</th>
        <th class="weekend">周六</th>
        <th class="weekend">周日</th>
      </tr>
      <week v-for="(week,index) of weeks" :key="index" :days="week" :on-select="onSelect" />
      </tbody>
    </table>
  </div>
</template>

<script>
import Week from "@/components/date_selector/Week";

export default {
  components: {
    Week
  },
  name: "Month",
  props: {
    startingTimeInMonth: {
      type: Number,
      required: true
    },
    onSelect: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      startDay: new Date(this.startingTimeInMonth),
      weeks: []
    };
  },
  mounted() {
    const currentDay = new Date(this.startingTimeInMonth);
    let days = [];
    let startMonth = this.startDay.getMonth();
    while (currentDay.getMonth() === startMonth) {
      let time = currentDay.getTime();
      days.push(time);
      currentDay.setDate(currentDay.getDate() + 1);
    }
    days = new Array(this.startDay.getDay() ? this.startDay.getDay() - 1 : 6).fill(null).concat(days);
    const lastDay = new Date(days[days.length - 1]);
    days = days.concat(new Array(lastDay.getDay() ? 7 - lastDay.getDay() : 0).fill(null));
    for (let row = 0; row < days.length / 7; row++) {
      const week = days.slice(row * 7, (row + 1) * 7);
      this.weeks.push(week);
    }
  },
  methods: {}
};
</script>

<style scoped>
  .date-table {
    width: 100%;
    margin-bottom: 15px;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: left;
  }

  .date-table tr,
  .date-table td,
  .date-table th {
    padding: 0;
    margin: 0;
  }

  .date-table thead td {
    height: 39px;
    background-color: #fff;
  }

  .date-table thead h5 {
    font-size: 18px;
    line-height: 39px;
    text-align: center;
    font-weight: bold;
    padding: 0;
    margin: 0;
    border: 1px solid #cdcdcd;
  }

  .date-table-weeks {
    font-size: 14px;
    height: 23px;
    color: #8c8c8c;
    background-color: #f3f3f3;
    text-align: center;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #cacaca;
  }

  .date-table-weeks th {
    text-align: center;
  }



</style>
