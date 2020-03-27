<template>
  <li class="passenger">
    <i class="delete" @click="onRemove(id)">
      -
    </i>
    <ol class="items">
      <li class="item">
        <label for="name" class="label name">姓名</label>
        <input id="name" type="text" class="input name" placeholder="乘客姓名" :value="name"
               @input="change" />
        <label class="ticket-type" @click="showTicketTypeMenu(id)">
          {{isAdult ? '成人票' : '儿童票'}}
        </label>
      </li>
      <li class="item" v-if="isAdult">
        <label for="licenceNo" class="label licenceNo">身份证</label>
        <input id="licenceNo" type="text" class="input licenceNo" placeholder="证件号码" :value="licenceNo"
               @input="(e) => onUpdate({id: this.id, data:{licenceNo: e.target.value}})" />
      </li>
      <li class="item arrow" v-if="!isAdult">
        <label for="gender" class="label gender">性别</label>
        <input id="gender" type="text" class="input gender" placeholder="请选择"
               @click="showGenderMenu(id)"
               :value="gender === 'male' ? '男' : gender === 'female' ? '女' : ''" readonly />
      </li>
      <li class="item" v-if="!isAdult">
        <label for="birthday" class="label birthday">生日</label>
        <input id="birthday" type="text" class="input birthday" placeholder="生日 （如19961010）" :value="birthday"
               @input="(e) => onUpdate({id: this.id, data:{birthday: e.target.value}})" />
      </li>
      <li class="item arrow" v-if="!isAdult">
        <label for="followAdult" class="label followAdult">同行成人</label>
        <input id="followAdult" type="text" class="input followAdult"
               :value="followAdult.name" readonly @click="showFollowAdultMenu(id)" />
      </li>
    </ol>
  </li>
</template>

<script>
export default {
  name: "Passenger",
  props: ['id', 'name', 'followAdult', 'ticketType', 'licenceNo', 'gender', 'birthday', 'onRemove', 'onUpdate', 'showGenderMenu', 'showFollowAdultMenu', 'showTicketTypeMenu'],
  data() {
    return {};
  },
  computed: {
    isAdult() {
      return this.ticketType === 'adult';
    }
  },
  methods: {
    change(e) {
      let value = e.target.value;
      this.onUpdate({id: this.id, data: {name: value}});
    }
  }
};
</script>

<style scoped>
  .passenger {
    list-style: none;
    padding: 0;
    margin: 0;
    padding-left: 54px;
    position: relative;
  }

  .passenger .delete {
    position: absolute;
    top: 50%;
    left: 15px;
    z-index: 888;
    margin-top: -9px;
    width: 18px;
    height: 18px;
    line-height: 18px;
    border-radius: 10px;
    border: 1px solid red;
    font-size: 12px;
    font-style: normal;
    color: red;
    text-align: center;
    vertical-align: middle;
  }

  .passenger .items {
    list-style: none;
  }

  .passenger .items .item {
    position: relative;
    height: 44px;
    line-height: 44px;
    font-size: 0;
    display: flex;
    border-bottom: 1px solid #dcdfe0;
  }

  .passenger .items .item:last-of-type {
    border-bottom: 0;
  }

  .passenger .items .item label.label {
    display: inline-block;
    width: 60px;
    font-size: 13px;
  }

  .passenger .items .item label.ticket-type {
    width: 70px;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 13px;
    color: #333;
  }

  .passenger .items .item label.ticket-type::after {
    position: absolute;
    content: '';
    width: 11px;
    height: 6px;
    top: 50%;
    right: 15px;
    margin-top: -3px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAMCAYAAABm+U3GAAAAbUlEQVR42p3OwQnAQAhEUUvZErZMu9jSUkJKMA4kCBEZmMNHmMNDiwhz951d7zWtMmBiWNmdBa6I75+xvo8PRopzFB2YgEdcRQsW8Amd4AHnKHYCDzhBGUzwCeUwwTsqwB1vqA4XTlAFLrxQDj+3MTlro/oAUgAAAABJRU5ErkJggg==) no-repeat;
    background-size: 100%;
  }

  .passenger .items .item .input {
    margin: 10px auto;
    height: 24px;
    line-height: 24px;
    border: 0;
    border-left: 1px solid #dcdfe0;
    text-indent: 10px;
    flex: 1;
    order-radius: 0;
    font-size: 15px;
    outline: 0;
  }

  .passenger .items .item .input.name {
    padding-right: 70px;
  }

  .passenger .items .item.arrow::after {
    content: '';
    position: absolute;
    width: 7px;
    height: 14px;
    top: 50%;
    right: 15px;
    margin-top: -7px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWCAYAAAD0OH0aAAAAr0lEQVR42pXTMQrCQBCF4dUiIIJ4hFzDShQsPIZikyIRPMUKeg2vZSO2UYn15j1IYBnIZqb4psn7IQTivPcLWMEshODGMLhAgLs2+HXBn5Em2ECtjRhMYA0fTcTTR1vxerehwBTxmCIeU8STir7xh4AlB0PRFPYMOg08UsEciih4wzU1PkfjFxz4zDQm05hMY4rHlRgf5Zj6cakZk9OMZdDI8ViwgyectL9oBrlmTC1ZJbyS+BCt4QAAAABJRU5ErkJggg==) no-repeat;
    background-size: 100%;
  }
</style>
