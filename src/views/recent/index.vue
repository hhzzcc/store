<template>
  <div :class="$style.Container">
    <div
      v-for="item in recent"
      :key="item.id"
      :class="$style.Item"
      @click="playStore.activeMusic(item.id)"
    >
      <div>
        <div :class="$style.Name">{{ item.name }}</div>
        <div :class="$style.Artistsname">{{ item.artistsname }}</div>
      </div>

      <div :class="$style.End">
        <PlayCircleOutlined :class="$style.Icon" style="margin-right: 8px" />
        <HeartFilled
          :class="[$style.Icon, $style.FavoActive]"
          @click.stop="() => favoStore.favo(item.id)"
          v-if="favoStore.getIsFavo(item.id)"
        />
        <HeartOutlined
          :class="[$style.Icon]"
          @click.stop="() => favoStore.favo(item.id)"
          v-else
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePlayStore } from "@/store/play";
import { useFavoStore } from "@/store/favo";
import { computed } from "vue";
import {
  PlayCircleOutlined,
  HeartFilled,
  HeartOutlined,
} from "@ant-design/icons-vue";

const playStore = usePlayStore();
const favoStore = useFavoStore();

const recent = computed(() => {
  const result = [];
  playStore.recentIds.forEach((recentId) => {
    result.push(playStore.musicData.find((v) => v.id === recentId));
  });
  return result;
});
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

.Name {
  font-size: 14px;
}

.Artistsname {
  font-size: 12px;
  opacity: 0.8;
  margin-top: 4px;
}

.End {
  display: flex;
  align-items: center;
}

.Icon {
  color: var(--primaryTextColor);
}

.FavoActive {
  color: #f56c6c !important;
}
</style>
