<template>
  <ul class="icon-list">
    <li 
      v-for="(item, index) in iconList" 
      :key="index"
      class="icon-list__item">
      <!-- <svg-icon :icon-class="item"/> -->
      <p class="icon-list__icon-name">{{ item }}</p>
    </li>
  </ul>
</template>
<script>
// import SvgIcon from "@/components/SvgIcon";

export default {
  components: {
    // SvgIcon
  },
  data() {
    return {
      iconList: [
        "404",
        "message",
        "notice"
      ]
    };
  }
};
</script>
<style scoped>
.icon-list {
  font-size: 3em;
  color: #ef3600;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
}
.icon-list__item {
  margin: 1%;
  padding: 0;
  width: 23%;
}
.icon-list__icon-name {
  font-size: 14px;
  margin: 6px;
}
</style>
