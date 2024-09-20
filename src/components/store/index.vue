<template>
  <div :class="$style.Container" @click="handleCopy">
    <img src="/images/a.webp" />
    <div>1、点击复制链接<br />2、打开淘宝app下单</div>
  </div>
</template>

<script setup>
import { copyTextToClipboard } from "@/utils/copy";
import { message } from "ant-design-vue";

function handleCopy() {
  copyTextToClipboard(`【淘宝】http://e.tb.cn/h.gJKYpX16pj5Qrno?tk=7S8Y37BH03L CZ0015 「超级好吃 带蜜味的李子 回味很好 个别带有一点点酸 顺丰空运」
点击链接直接打开 或者 淘宝搜索直接打开`);
  message.success("复制成功");
}
</script>

<style lang="less" module>
.Container {
  height: 280px;
  box-shadow: 0 0 3px #ccc;
  border-radius: 6px;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 6px 6px 0 0;
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0 12px;
    color: #333;
    font-size: 12px;
  }
}
</style>
