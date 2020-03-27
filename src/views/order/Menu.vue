<template>
  <div>
    <div class="menu-mask" @click="hideMenu" v-if="show"></div>
    <div class="menu" :class="{'show': show}" >
      <div class="menu-title">
        <ul v-if="options">
          <menu-item v-for="option of options" :key="option.value"  :on-press="onPress" v-bind="option"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "@/views/order/MenuItem";
export default {
  name: "Menu",
  components:{
    MenuItem
  },
  props: ['show', 'options', 'onPress', 'hideMenu'],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
  .menu {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1000;
    bottom: 0;
    transition: all 0.5s;
    transform: translateY(100%);
  }

  .menu.show {
    transform: translateY(-100%);
  }

  .menu-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    opacity: 0;
    z-index: 999;
  }

  .menu-title {
    height: 40px;
    border-radius: 10px 10px 0 0;
    position: relative;
    background: #1ba9ba;
  }

  .menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

</style>
