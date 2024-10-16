<template>
  <div :class="$style.Container">
    <div :class="$style.Item" @click="() => checkTheme()">
      {{ isCheck ? "白天模式" : "夜间模式" }} <RightOutlined />
    </div>
  </div>
</template>

<script setup>
import { RightOutlined } from "@ant-design/icons-vue";
import { checkTheme } from "@/utils/theme";
import { ref } from "vue";

const isCheck = ref(false);
</script>

<style lang="less" module>
.Container {
  width: 100%;
}

.Item {
  width: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--primaryTextColor);
  border-bottom: 1px solid var(--primaryBorderColor);
}

.Icon {
  color: var(--primaryTextColor);
}
</style>
