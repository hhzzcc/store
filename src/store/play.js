import { defineStore } from "pinia";
import { data } from "@/data/music";

const recentIds = localStorage.getItem("recentIds");

export const usePlayStore = defineStore("play", {
  state: () => ({
    musicData: data,
    activeMusicId: null,
    duration: 0,
    currentTime: 0,
    isPlaying: false,
    recentIds: recentIds ? JSON.parse(recentIds) : [],
  }),
  getters: {
    getActiveMusic: (state) => {
      if (state.activeMusicId === null) return null;
      const index = state.musicData.findIndex(
        (v) => v.id === state.activeMusicId
      );
      return {
        pre: state.musicData[index - 1],
        cur: state.musicData[index],
        nex: state.musicData[index + 1],
      };
    },
  },
  actions: {
    activeMusic(id) {
      this.activeMusicId = id;

      if (this.audio) {
        this.audio.pause(); // 停止播放
        this.currentTime = 0;
        this.isPlaying = false;
        this.duration = 0;

        this.audio.removeEventListener(
          "loadedmetadata",
          this._onLoadedMetadata
        );
        this.audio.removeEventListener("timeupdate", this._onTimeUpdate);
        this.audio.removeEventListener("ended", this._onEnded);
        this.audio = null; // 释放引用
      }

      this.audio = new Audio(this.getActiveMusic.cur.url);
      this.audio.addEventListener("loadedmetadata", this._onLoadedMetadata);
      this.audio.addEventListener("timeupdate", this._onTimeUpdate);
      this.audio.addEventListener("ended", this._onEnded);

      if (!this.recentIds.includes(id)) {
        this.recentIds.unshift(id);
        localStorage.setItem("recentIds", JSON.stringify(this.recentIds));
      }

      setTimeout(() => {
        this.playMusic();
      }, 200);
    },

    playMusic() {
      if (this.isPlaying) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
      this.isPlaying = !this.isPlaying;
    },

    _onLoadedMetadata() {
      this.duration = this.audio.duration;
    },

    _onTimeUpdate() {
      this.currentTime = this.audio.currentTime;
    },

    _onEnded() {
      this.isPlaying = false;
    },
  },
});
