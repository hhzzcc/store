<template>
  <div :class="$style.Container" @click="handleCopy">
    <div>
      <img :class="$style.Image" :src="props.item.image" />
      <div :class="$style.Title">{{ props.item.title }}</div>
      <div :class="$style.Des">{{ props.item.des }}</div>
    </div>
    <div :class="$style.Footer" v-if="props.item.appType === APP_TYPE.taobao">
      <img
        src="https://aiad-prod.oss-cn-heyuan.aliyuncs.com/public/92c504e022004a8b91b7cf08e65387dc.ico"
      />
      <div>点击复制链接，打开淘宝app下单</div>
    </div>
  </div>
</template>

<script setup>
import { copyTextToClipboard } from "@/utils/copy";
import { message } from "ant-design-vue";
import { defineProps } from "vue";
import { APP_TYPE } from "../../views/data";

const props = defineProps({
  item: {
    type: Object,
    default: null,
  },
});

function handleCopy() {
  copyTextToClipboard(props.item.source);
  message.success("复制成功");
}
</script>

<style lang="less" module>
.Container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 4px #aaa;
  border-radius: 6px;
  cursor: pointer;

  .Image {
    display: block;
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 6px 6px 0 0;
  }

  .Title {
    font-size: 16px;
    font-weight: bold;
    padding: 8px 12px;
  }

  .Des {
    font-size: 12px;
    font-weight: bold;
    padding: 0 12px 8px 12px;
    color: #666;
  }

  .Footer {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 4px 12px 8px 12px;
    color: #aaa;

    div {
      line-height: 1;
      font-size: 12px;
    }

    img {
      width: 12px;
      height: 12px;
      margin-right: 4px;
      display: block;
    }
  }
}
</style>
