<template>
  <div :class="$style.Container">
    <div :class="$style.Start">
      <div :class="$style.Left">
        <div
          :class="$style.Image"
          :style="{
            animationPlayState: playStore.isPlaying ? 'running' : 'paused',
          }"
        >
          <LazyImage
            :aspectRatio="1"
            :src="playStore.getActiveMusic.cur.picurl"
          />
        </div>
        <ArrowUpOutlined :class="$style.UpIcon" />
      </div>

      <div :class="$style.Title" style="margin-left: 12px">
        {{ playStore.getActiveMusic.cur.name }}
      </div>
      <div :class="$style.Title" style="margin: 0 4px">-</div>
      <div :class="$style.Title" style="opacity: 0.7">
        {{ playStore.getActiveMusic.cur.artistsname }}
      </div>
    </div>
    <div @click.stop="() => playStore.playMusic()">
      <PauseCircleFilled :class="$style.Icon" v-if="playStore.isPlaying" />
      <PlayCircleFilled :class="$style.Icon" v-else />
    </div>
  </div>
</template>
<script setup>
import LazyImage from "@/components/LazyImage/index.vue";
import { usePlayStore } from "@/store/play";
import {
  ArrowUpOutlined,
  PauseCircleFilled,
  PlayCircleFilled,
} from "@ant-design/icons-vue";

const playStore = usePlayStore();

import { ref, onMounted, onUnmounted, computed, defineProps } from "vue";
</script>

<style lang="less" module>
.Container {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 24px;
  justify-content: space-between;
}

.Start,
.Left {
  display: flex;
  align-items: center;
  position: relative;
}

.Image {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: auto;
  animation: rotate 5s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.UpIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}

.Icon {
  color: var(--primaryTextColor);
  font-size: 20px;
}

.Title {
  color: var(--primaryTextColor);
  font-size: 12px;
}
</style>
