<template>
  <div
    :class="$style.Container"
    :style="{
      backgroundColor,
    }"
  >
    <div :class="$style.Mask"></div>
    <div :class="$style.Header">
      <CloseOutlined :class="$style.Close" @click="emits('close')" />
    </div>
    <div
      :class="$style.Pan"
      :style="{
        animationPlayState: playStore.isPlaying ? 'running' : 'paused',
      }"
    >
      <LazyImage :aspectRatio="1" :src="playStore.getActiveMusic.cur.picurl" />
    </div>

    <div :class="$style.Info">
      <div>
        <div :class="$style.Name">{{ playStore.getActiveMusic.cur.name }}</div>
        <div :class="$style.Artistsname">
          {{ playStore.getActiveMusic.cur.artistsname }}
        </div>
      </div>
      <div>
        <HeartFilled
          :class="[$style.Favo, $style.FavoActive]"
          @click="() => favoStore.favo(playStore.getActiveMusic.cur.id)"
          v-if="favoStore.getIsFavo(playStore.getActiveMusic.cur.id)"
        />
        <HeartOutlined
          :class="[$style.Favo]"
          @click="() => favoStore.favo(playStore.getActiveMusic.cur.id)"
          v-else
        />
        <!-- <DownloadOutlined
          :class="[$style.Download]"
          style="margin-left: 12px"
          @click="() => handleDownload(playStore.getActiveMusic.cur.url)"
        /> -->
      </div>
    </div>
    <div :class="$style.Bars">
      <StepBackwardOutlined
        :class="playStore.getActiveMusic.pre.id ? null : $style.Disabled"
        @click="
          () => {
            playStore.activeMusic(playStore.getActiveMusic.pre.id);
          }
        "
      />

      <PauseCircleFilled
        style="font-size: 48px"
        v-if="playStore.isPlaying"
        @click="() => playStore.playMusic()"
      />
      <PlayCircleFilled
        style="font-size: 48px"
        v-else
        @click="() => playStore.playMusic()"
      />

      <StepForwardOutlined
        :class="playStore.getActiveMusic.nex.id ? null : $style.Disabled"
        @click="
          () => {
            playStore.activeMusic(playStore.getActiveMusic.nex.id);
          }
        "
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineEmits } from "vue";
import { usePlayStore } from "@/store/play";
import { useFavoStore } from "@/store/favo";
import { watch } from "vue";
import LazyImage from "@/components/LazyImage/index.vue";
import {
  StepBackwardOutlined,
  PlayCircleFilled,
  PauseCircleFilled,
  StepForwardOutlined,
  HeartOutlined,
  DownloadOutlined,
  HeartFilled,
  CloseOutlined,
} from "@ant-design/icons-vue";

const playStore = usePlayStore();
const favoStore = useFavoStore();
const emits = defineEmits(["close"]);

function getDominantColor(imageSrc) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "Anonymous"; // 避免跨域问题
    image.src = imageSrc;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // 设置 canvas 尺寸为图片尺寸
      canvas.width = image.width;
      canvas.height = image.height;

      // 将图片绘制到 canvas 上
      ctx.drawImage(image, 0, 0);

      // 获取图片的像素数据
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      let totalR = 0,
        totalG = 0,
        totalB = 0;
      let count = 0;

      // 遍历每个像素（每4个值分别代表 R、G、B、A）
      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const a = pixels[i + 3];

        // 忽略透明像素
        if (a === 0) continue;

        // 累加 RGB 值
        totalR += r;
        totalG += g;
        totalB += b;

        count++;
      }

      // 计算 RGB 平均值
      const avgR = Math.round(totalR / count);
      const avgG = Math.round(totalG / count);
      const avgB = Math.round(totalB / count);

      // 返回加权平均的颜色
      resolve(`rgb(${avgR},${avgG},${avgB})`);
    };

    image.onerror = (err) => reject(err);
  });
}
const backgroundColor = ref("");

// function handleDownload(url) {
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = "download.mp3"; // 指定文件名，默认为 'download'
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
// }

watch(
  () => playStore.activeMusicId,
  async (v) => {
    if (v !== null) {
      backgroundColor.value = await getDominantColor(
        playStore.getActiveMusic.cur.picurl
      );
    }
  },
  {
    immediate: true,
  }
);

onMounted(async () => {});
</script>

<style lang="less" module>
.Container {
  height: 100%;
  width: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.Header {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 24px 24px 0 0;
  position: relative;
  z-index: 10;
}

.Mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  pointer-events: none;
  z-index: 9;
}

.Name,
.Artistsname,
.Favo,
.Close,
.Download {
  color: rgba(255, 255, 255, 0.7);
}

.Name {
  font-size: 14px;
  font-weight: bold;
}

.Favo,
.Close,
.Download {
  font-size: 24px;
}

.FavoActive {
  color: #f56c6c !important;
}

.Artistsname {
  font-size: 12px;
  margin-top: 4px;
}

.Info {
  width: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 120px;
  position: relative;
  z-index: 10;
}

.Bars {
  width: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  margin-top: 10px;

  :global {
    .anticon {
      color: rgba(255, 255, 255, 0.7);
      font-size: 32px;
    }
  }
}

.Disabled {
  color: rgba(255, 255, 255, 0.2) !important;
  pointer-events: none;
}

.Pan {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 10px solid #000;
  overflow: auto;
  animation: rotate 5s linear infinite;
  margin-top: 120px;
  position: relative;
  z-index: 10;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
