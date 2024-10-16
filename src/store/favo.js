import { defineStore } from "pinia";

const favoIds = localStorage.getItem("favoIds");
export const useFavoStore = defineStore("favo", {
  state: () => ({
    favoIds: favoIds ? JSON.parse(favoIds) : [],
  }),
  getters: {},
  actions: {
    getIsFavo(id) {
      return this.favoIds.includes(id);
    },

    favo(id) {
      const index = this.favoIds.findIndex((v) => v === id);
      if (index === -1) {
        this.favoIds.unshift(id);
      } else {
        this.favoIds.splice(index, 1);
      }

      localStorage.setItem("favoIds", JSON.stringify(this.favoIds));
    },
  },
});
