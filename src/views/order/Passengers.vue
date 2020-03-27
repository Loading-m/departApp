<template>
  <div class="passengers">
    <ul>
      <passenger v-for="passenger of passengers" :key="passenger.id" :id="passenger.id"
                 :name="passenger.name"
                 :follow-adult="passenger.followAdult"
                 :ticket-type="passenger.ticketType"
                 :licence-no="passenger.licenceNo"
                 :gender="passenger.gender"
                 :birthday="passenger.birthday"
                 :on-remove="onRemove"
                 :on-update="onUpdate"
                 :show-gender-menu="showGenderMenu"
                 :show-follow-adult-menu="showFollowAdultMenu"
                 :show-ticket-type-menu="showTicketTypeMenu"
      />
    </ul>
    <section class="add">
      <div class="adult" @click="createAdult">添加成人</div>
      <div class="adult" @click="createChild">添加儿童</div>
    </section>
  </div>
</template>

<script>
import Passenger from "@/views/order/Passenger";

export default {
  name: "Passengers",
  props: ['createAdult', 'createChild', 'passengers', 'onRemove', 'onUpdate', 'showGenderMenu', 'showFollowAdultMenu', 'showTicketTypeMenu'],
  components: {
    Passenger
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
  .passengers {
    background: #fff;
    margin: 10px 0;
  }

  .passengers ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }


  .passengers .add {
    display: flex;
    position: relative;
    border-top: 1px solid #dcdfe0;
    color: #1ba9ba;
  }

  .passengers .add .adult {
    margin: 10px 0;
    height: 28px;
    line-height: 28px;
    text-align: center;
    font-size: 16px;
    flex: 1;
  }

  .passengers .add .child {
    margin: 10px 0;
    height: 28px;
    line-height: 28px;
    text-align: center;
    font-size: 16px;
    flex: 1;
    border-left: 1px solid #dcdfe0;
  }

</style>
