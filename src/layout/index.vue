<template>
  <div :class="$style.Container">
    <div :class="$style.Page">
      <router-view></router-view>
    </div>

    <Footer />
  </div>
</template>
<script setup>
import Footer from "./footer.vue";
</script>

<style lang="less" module>
.Container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.Page {
  height: calc(100% - 40px);
  overflow: auto;
}
</style>
