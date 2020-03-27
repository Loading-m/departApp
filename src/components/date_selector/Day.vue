<template>
  <td class="null" v-if="!day" />
  <td :class="classes" v-else @click="onSelect(day)">
    {{dateString}}
  </td>
</template>

<script>
import { h0 } from '@/utils/fp';

export default {
  name: "Day",
  props: {
    day: {
      type: Number
    },
    onSelect: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      classes: []
    };
  },
  mounted() {
    const now = h0();
    if (this.day < now) {
      this.classes.push('disabled');
    }
    if ([6, 0].includes(new Date(this.day).getDay())) {
      this.classes.push('weekend');
    }
  },
  computed: {
    dateString() {
      const now = h0();
      if (now === this.day) {
        return '今天';
      } else {
        return new Date(this.day).getDate();
      }
    }
  },
  methods: {}
};
</script>

<style scoped>
  .date-table-days td {
    background: #fff;
    color: #000;
    border: 2.5px solid #e3e3e3;
    text-align: center;
    margin: 0 2px 2px 0;
    height: 40px;
    width: 40px;
    vertical-align: middle;
  }

  .date-table-days td.null {
    background: #e3e3e3;
  }

  .date-table-days td.disabled {
    color: #a7a7a7;
    background: #f3f3f3 !important;
    cursor: not-allowed;
  }
  .date-table .weekend {
    color: #ff9036;
  }

</style>
