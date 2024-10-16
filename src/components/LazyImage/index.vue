<template>
  <div ref="container">
    <div
      :class="[$style.LoadingImageWrapper]"
      :style="{
        /* 对于宽高比为 16:9 的 div 元素，高度应为宽度的 9/16 */
        'padding-bottom': 100 * aspectRatio + '%',
        opacity: isLoaded ? 1 : 0,
      }"
    >
      <img
        :crossOrigin="crossOrigin"
        :src="url"
        :srcset="srcset"
        @load="handleLoad"
        :alt="alt"
        :class="$style.LoadedImage"
      />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref, watch } from "vue";

export default {
  name: "LazyLoadImg",
  props: {
    src: {
      type: String,
      default: "",
    },
    srcset: {
      type: String,
      default: undefined,
    },
    alt: {
      type: String,
      default: "",
    },
    aspectRatio: {
      type: Number,
      default: 1,
    },
    crossOrigin: {
      type: String,
      default: "no-cors",
    },

    fill: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const container = ref(null);
    const isLoaded = ref(false);
    const url = ref(null);
    let observer;

    function loadImage() {
      url.value = props.src;
    }

    watch(
      () => props.src,
      () => {
        isLoaded.value = false;
        loadImage();
      }
    );

    function handleLoad(e) {
      isLoaded.value = true;
      emit("load", e);
    }

    function unobserve() {
      observer && observer.disconnect(container.value);
      observer = null;
    }

    // 监听滚动事件并检查图片是否在可视范围内
    onMounted(() => {
      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((item) => {
            // 获取当前正在观察的元素
            if (item.isIntersecting) {
              loadImage();
              unobserve();
            }
          });
        });
        observer.observe(container.value);
      } else {
        loadImage();
      }
    });

    onUnmounted(() => {
      unobserve();
    });

    return {
      url,
      container,
      isLoaded,
      handleLoad,
    };
  },
};
</script>

<style module lang="less">
.LoadingImageWrapper {
  position: relative;
  width: 100%;
  height: 0;
  transition: 0.3s all ease-in-out;
  /* background-color: #2e2e2e; */
  border-radius: 4px;
}

.Watermark {
  width: 30%;
  position: absolute;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  bottom: 2.5%;
  right: 4%;
}

.LoadedImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
}

.LoadingImageBlock {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 6px;
  overflow: hidden;
}
</style>
