<template>
  <div :class="$style.Container">
    <div :class="$style.Page">
      <router-view></router-view>
    </div>

    <Music
      v-if="playStore.activeMusicId"
      :key="playStore.activeMusicId"
      @click="showDetail = true"
    />
    <Footer />
    <Detail
      v-if="playStore.activeMusicId"
      :class="$style.Detail"
      :style="{
        transform: `translateY(${showDetail ? 0 : '105vh'})`,
      }"
      @close="showDetail = false"
    />
  </div>
</template>
<script setup>
import Footer from "./footer.vue";
import Music from "./music.vue";
import Detail from "./detail.vue";
import { usePlayStore } from "@/store/play";
import { ref } from "vue";

const playStore = usePlayStore();

const showDetail = ref(false);
</script>

<style lang="less" module>
.Container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.Page {
  flex: 1;
  height: 0;
  overflow: auto;
}

.Detail {
  top: 0;
  left: 0;
  position: absolute;
  transition: transform 0.5s ease-in-out;
}
</style>
