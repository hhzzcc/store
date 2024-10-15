<template>
  <router-view />
</template>

<style lang="less" module>
html,
body {
  height: 100%;
  background-color: var(--primaryBackgroundColor);
}

body {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  overflow: auto;
}
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  margin: 0;
}
</style>
