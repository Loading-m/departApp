<template>
  <ul class="list">
    <list-item v-for="item of list" :key="item.trainNumber" :item="item"/>
  </ul>
</template>

<script>
import ListItem from "@/views/query/ListItem";

export default {
  name: "List",
  components: {
    ListItem
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  mounted(){

  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
  .list {
    padding: 89px 0 69px 0;
    margin: 0;
    list-style: none;
    line-height: 1.5;
  }


</style>
