<template>
  <div :class="$style.Container">
    <div :class="$style.Title">
      这里没有刷单、买排名、买评论，只有我们精心挑选、亲自体验的优质店铺
    </div>

    <div :class="$style.Search">
      <InputSearch
        v-model:value="value"
        placeholder="请输入要搜索的内容，如李子"
        enter-button="搜索"
        size="large"
        @search="onSearch"
        style="width: 50vw; min-width: 350px"
      />
    </div>

    <div :class="$style.Content">
      <Store v-for="item in storeList" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script setup>
import { InputSearch } from "ant-design-vue";
import { ref } from "vue";
import Store from "@/components/store/index.vue";
import { storeList } from "./data";

const value = ref("");

function onSearch() {}
</script>

<style lang="less" module>
.Title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.Search {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.Container {
  padding: 24px 5vw 24px 5vw;
}

.Content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content;
  grid-gap: 12px;
  margin-top: 24px;

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1800px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 2000px) {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
