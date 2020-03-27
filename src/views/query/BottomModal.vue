<template>
  <div class="bottom-modal">
    <div class="bottom-dialog">
      <div class="bottom-dialog-content">
        <div class="title">
          <span class="reset" :class="{'disabled': isResetDisabled}" @click="reset">
            重置
          </span>
          <span class="ok" @click="sure">
            确定
          </span>
        </div>
        <div class="options">
          <options v-for="group in optionGroup" :key="group.title"
                   :checked-map="group.checkedMap"
                   :update="group.update"
                   :options="group.options" :title="group.title" />
          <slider
            title="出发时间"
            :currentStartHours="localDepartTimeStart"
            :currentEndHours="localDepartTimeEnd"
            :onStartChanged="setLocalDepartTimeStart"
            :onEndChanged="setLocalDepartTimeEnd"
          />
          <slider
            title="到达时间"
            :currentStartHours="localArriveTimeStart"
            :currentEndHours="localArriveTimeEnd"
            :onStartChanged="setLocalArriveTimeStart"
            :onEndChanged="setLocalArriveTimeEnd"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Options from "@/views/query/Option";
import Slider from "@/views/query/Slider";

import deepEqual from 'deep-equal';

export default {
  name: "BottomModal",
  components: {
    Options,
    Slider
  },
  props: {
    ticketTypes: {
      type: Array,
      required: true
    },
    checkedTicketTypes: {
      type: Object,
      required: true
    },
    trainTypes: {
      type: Array,
      required: true
    },
    checkedTrainTypes: {
      type: Object,
      required: true
    },
    departTimeStart: {
      type: Number,
      required: true
    },
    departTimeEnd: {
      type: Number,
      required: true
    },
    arriveTimeStart: {
      type: Number,
      required: true
    },
    arriveTimeEnd: {
      type: Number,
      required: true
    },
    toggleIsFiltersVisible: {
      type: Function,
      required: true
    },
    actionCheckedTicketTypes: {
      type: Function,
      required: true
    },
    actionCheckedTrainTypes: {
      type: Function,
      required: true
    },
    actionDepartTimeStart: {
      type: Function,
      required: true
    },
    actionDepartTimeEnd: {
      type: Function,
      required: true
    },
    actionArriveTimeStart: {
      type: Function,
      required: true
    },
    actionArriveTimeEnd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      localDepartTimeStart: this.departTimeStart,
      localDepartTimeEnd: this.departTimeEnd,
      localArriveTimeStart: this.arriveTimeStart,
      localArriveTimeEnd: this.arriveTimeEnd,
      localCheckedTicketTypes: {},
      localCheckedTrainTypes: {},
      optionGroup: [
        {
          title: '坐席类型',
          options: this.ticketTypes,
          checkedMap: {},
          update: this.setLocalCheckedTicketTypes
        },
        {
          title: '车次类型',
          options: this.trainTypes,
          checkedMap: {},
          update: this.setLocalCheckedTrainTypes
        },
      ],
    };
  },
  mounted() {
    this.localCheckedTicketTypes = {...this.checkedTicketTypes};
    this.$set(this.optionGroup[0], 'checkedMap', this.localCheckedTicketTypes);
    this.localCheckedTrainTypes = {...this.checkedTrainTypes};
    this.$set(this.optionGroup[1], 'checkedMap', this.localCheckedTrainTypes);
    this.prevTicketTypes = {...this.localCheckedTicketTypes};
    this.prevTrainTypes = {...this.localCheckedTrainTypes};
    this.prevDepartStart = this.departTimeStart;
    this.prevDepartEnd = this.departTimeEnd;
    this.prevArriveStart = this.arriveTimeStart;
    this.prevArriveEnd = this.arriveTimeEnd;
  },
  computed: {
    isResetDisabled() {
      return Object.keys(this.localCheckedTicketTypes).length === 0 && Object.keys(this.localCheckedTrainTypes).length === 0 && this.localDepartTimeStart === 0 &&
        this.localDepartTimeEnd === 24 && this.localArriveTimeStart === 0 && this.localArriveTimeEnd === 24;
    },
  },
  methods: {
    setLocalCheckedTicketTypes(val) {
      this.localCheckedTicketTypes = val;
      this.optionGroup[0].checkedMap = val;
    },
    setLocalCheckedTrainTypes(val) {
      this.localCheckedTrainTypes = val;
      this.optionGroup[1].checkedMap = val;
    },
    setLocalDepartTimeStart(val) {
      this.localDepartTimeStart = val;
    },
    setLocalDepartTimeEnd(val) {
      this.localDepartTimeEnd = val;
    },
    setLocalArriveTimeStart(val) {
      this.localArriveTimeStart = val;
    },
    setLocalArriveTimeEnd(val) {
      this.localArriveTimeEnd = val;
    },
    sure() {
      if (!(deepEqual(this.localCheckedTicketTypes, this.prevTicketTypes) && deepEqual(this.localCheckedTrainTypes, this.prevTrainTypes) && this.prevDepartStart === this.localDepartTimeStart && this.prevDepartEnd === this.localDepartTimeEnd && this.prevArriveStart === this.localArriveTimeStart && this.prevArriveEnd === this.localArriveTimeEnd)) {
        this.actionCheckedTicketTypes(this.localCheckedTicketTypes);
        this.actionCheckedTrainTypes(this.localCheckedTrainTypes);
        this.actionDepartTimeStart(this.localDepartTimeStart);
        this.actionDepartTimeEnd(this.localDepartTimeEnd);
        this.actionArriveTimeStart(this.localArriveTimeStart);
        this.actionArriveTimeEnd(this.localArriveTimeEnd);
      } else {
        alert('无更改不请求新数据');
      }
      this.toggleIsFiltersVisible();
    },
    reset() {
      if (this.isResetDisabled) {
        return;
      }
      this.setLocalCheckedTicketTypes({});
      this.setLocalCheckedTrainTypes({});
      this.setLocalDepartTimeStart(0);
      this.setLocalDepartTimeEnd(24);
      this.setLocalArriveTimeStart(0);
      this.setLocalArriveTimeEnd(24);
    }
  }
};
</script>

<style scoped>
  .bottom-modal {
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
  }

  .bottom-dialog {
    position: absolute;
    background: #fff;
    left: 0;
    right: 0;
    top: 10%;
    bottom: 56px;
    overflow: scroll;
  }

  .bottom-dialog-content {
    /*z-index: 1000;*/
  }

  .bottom-dialog-content .title {
    width: 100%;
    position: fixed;
    background: #fff;
    z-index: 1111;
    height: 41px;
    line-height: 41px;
    font-size: 14px;
    color: #3cc;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #ececec;
  }

  .bottom-dialog-content .title span {
    position: absolute;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    left: 6%;
    top: 6px;
  }

  .bottom-dialog-content .title span.disabled {
    color: #d9d9d9;
  }

  .bottom-dialog-content .title span:last-of-type {
    left: auto;
    right: 6%;
  }

  .bottom-dialog-content .options {
    padding-top: 41px;
    overflow: scroll;
  }


</style>
