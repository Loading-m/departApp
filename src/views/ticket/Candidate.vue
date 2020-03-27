<template>
  <div class="candidate">
    <ul>
      <seat v-for="(ticket,index) of tickets"
            :idx="index"
            :expanded="expandedIndex === index"
            :type="ticket.type" :price-msg="ticket.priceMsg"
            :tickets-left="ticket.ticketsLeft"
            :channels="ticket.channels"
            :key="index"
            :on-toggle="onToggle"
      />
    </ul>
  </div>
</template>

<script>
import Seat from "@/views/ticket/Seat";

export default {
  name: "Candidate",
  components: {
    Seat
  },
  props: {
    tickets: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      expandedIndex: -1
    };
  },
  methods: {
    onToggle(index) {
      if (index === this.expandedIndex) {
        this.expandedIndex = -1;
        return;
      }
      this.expandedIndex = index;
    }
  }
};
</script>

<style scoped>
  .candidate {
    margin: 15px 0;
    border-top: 1px solid #eaeaea;
  }

  .candidate ul {
    list-style: none;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .candidate li {
    background: #fff;
    list-style: none;
    margin: 0;
    padding: 0;
  }


</style>
