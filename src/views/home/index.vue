<template>
  <div :class="$style.Container">
    <div :class="$style.Content">
      <div
        v-for="item in playStore.musicData"
        :key="item.id"
        @click="() => playStore.activeMusic(item.id)"
      >
        <div style="position: relative">
          <LazyImage
            :class="$style.Image"
            :aspectRatio="1"
            :src="item.picurl"
          />
          <PlayCircleFilled :class="$style.Icon" />
        </div>
        <div :class="$style.Title">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LazyImage from "@/components/LazyImage/index.vue";
import { PlayCircleFilled } from "@ant-design/icons-vue";
import { usePlayStore } from "@/store/play";

const playStore = usePlayStore();
</script>

<style lang="less" module>
.Container {
  width: 100%;
  padding: 12px;
}

.Content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: min-content;
  grid-gap: 12px;
}

.Image {
  border-radius: 50%;
  overflow: hidden;
}

.Title {
  font-size: 10px;
  color: var(--primaryTextColor);
  margin-top: 8px;
  text-align: center;
}

.Icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
}
</style>
