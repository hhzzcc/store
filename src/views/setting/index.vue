<template>
  <div :class="$style.Container">
    <div
      :class="$style.Item"
      @click="
        () => {
          checkTheme();
          isCheck = !isCheck;
        }
      "
    >
      {{ isCheck ? "白天模式" : "夜间模式" }} <RightOutlined />
    </div>
    <div :class="$style.Item" @click="openModal = true">
      关于作者
      <div style="font-size: 12px">
        小红书：楼口侯斯特<br />
        vx：hhzzcc_lm<br />
        github：hhzzcc<br />
      </div>
    </div>

    <div :class="$style.Qrcode">
      <div style="width: 200px">
        <LazyImage
          src="https://aiad-prod.oss-cn-heyuan.aliyuncs.com/public/783dac4cf0234219876add4eb68bc5f4.jpg"
        />
      </div>
      <div :class="$style.Title">关注微信公众号，一个生活省钱机器人</div>
      <div :class="$style.Title">每天领外卖打车券、网购查券</div>
    </div>

    <Modal v-model:open="openModal" />
  </div>
</template>

<script setup>
import { RightOutlined } from "@ant-design/icons-vue";
import { Modal } from "ant-design-vue";
import { checkTheme } from "@/utils/theme";
import { ref } from "vue";
import LazyImage from "@/components/LazyImage/index.vue";

const isCheck = ref(false);
const openModal = ref(false);
</script>

<style lang="less" module>
.Container {
  width: 100%;
}

.Item {
  width: 100%;
  height: 60px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--primaryTextColor);
  border-bottom: 1px solid var(--primaryBorderColor);
}

.Icon {
  color: var(--primaryTextColor);
}

.Qrcode {
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.Title {
  color: var(--primaryTextColor);
  font-weight: bold;
  margin-top: 12px;
}
</style>
