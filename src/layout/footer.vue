<template>
  <div :class="$style.Container">
    <div
      v-for="item in list"
      :key="item.value"
      :class="[$style.Item, route.name === item.value ? $style.Active : null]"
      @click="
        () =>
          router.push({
            name: item.value,
          })
      "
    >
      <component :is="item.icon" />
      {{ item.label }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  HomeOutlined,
  StarOutlined,
  SaveOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const list = ref([
  {
    label: "歌单",
    value: "home",
    icon: HomeOutlined,
  },
  {
    label: "最近",
    value: "recent",
    icon: SaveOutlined,
  },
  {
    label: "收藏",
    value: "star",
    icon: StarOutlined,
  },
  {
    label: "设置",
    value: "setting",
    icon: SettingOutlined,
  },
]);
</script>

<style lang="less" module>
.Container {
  display: flex;
  align-items: center;
}

.Item {
  width: 25%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--primaryTextColor);

  :global {
    .anticon {
      margin-bottom: 4px;
    }
  }
}

.Active {
  color: var(--primaryTextActiveColor);
}
</style>
