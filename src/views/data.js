export const APP_TYPE = {
  taobao: "taobao",
};

let id = 0;

export const storeList = [
  {
    source: `【3(zL2r3R9hCTE)/ CA8888`,
    appType: APP_TYPE.taobao,
    title: "小鲜芋蛋黄包",
    des: "乐作小鲜芋蛋黄包不甜腻无反式非猪油",
    image:
      "https://img.alicdn.com/bao/uploaded/i1/3267081831/O1CN01pFnvO51POdqwVErcR_!!3267081831.jpg",
  },
  {
    source: `2(z94O3R9Mkx6)/ CA8888`,
    appType: APP_TYPE.taobao,
    title: "无花果干",
    des: "「自有基地和工厂｜云南去皮无花果干 更软糯 芭劳奈格莱斯多品种」",
    image:
      "https://img.alicdn.com/bao/uploaded/i2/3267081831/O1CN01IduKdh1POe64cvszf_!!3267081831.jpg",
  },
  {
    source: `【淘宝】http://e.tb.cn/h.gJKYpX16pj5Qrno?tk=7S8Y37BH03L CZ0015 「超级好吃 带蜜味的李子 回味很好 个别带有一点点酸 顺丰空运」
点击链接直接打开 或者 淘宝搜索直接打开`,
    appType: APP_TYPE.taobao,
    title: "李子",
    des: "超级好吃 带蜜味的李子 回味很好 个别带有一点点酸",
    image:
      "https://aiad-prod.oss-cn-heyuan.aliyuncs.com/public/39cf25d8cf484e10aee6e261f0866984.webp",
  },
  {
    source: `7(C8G93R9Dtxy)/ CA8888`,
    appType: APP_TYPE.taobao,
    title: "粉钻石榴",
    des: "「乐作 | 蒙自粉钻石榴 老树石榴 皮薄大粒爆汁清甜微酸 口感饱满」",
    image:
      "https://img.alicdn.com/bao/uploaded/i1/3267081831/O1CN01fW3SDa1POeBSQ0hYI_!!3267081831.png",
  },
  {
    source: `0(d69f3Rk0FKW)/ CA8888`,
    appType: APP_TYPE.taobao,
    title: "猕猴桃",
    des: "「乐作｜秦岭翠香猕猴桃 酸甜多汁 果香浓郁 肉质细腻 大部顺丰陆运」",
    image:
      "https://img.alicdn.com/bao/uploaded/i4/3267081831/O1CN01PODLjV1POeBX276bb_!!3267081831.jpg",
  },
].map((v) => ({
  ...v,
  id: id++,
}));
