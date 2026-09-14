import type { Service } from "../types/service";

export const shop = {
  community: "XX社区 · XX路",
  tags: ["制衣", "改衣", "养生", "租房"],
  wechat: "微信同号",
  phone: "13382783933",
};

export const services: Service[] = [
  {
    id: "making",
    title: "制衣",
    eyebrow: "MAKING",
    tagline: "棉毛衫 · 保暖内衣 · 家居服",
    intro: "需要合身的衣服，也可以慢慢做。按身形和穿着习惯，做一件真正合适的。",
    subItems: [
      {
        id: "cotton",
        title: "棉毛衫",
        eyebrow: "COTTON",
        summary: "按身形制作的棉毛衫，贴身、舒适、耐穿。",
        cases: [
          {
            id: "cotton-1",
            title: "棉毛衫定制",
            note: "根据身高与肩宽调整版型，领口与袖口收口更贴合，穿着不易变形。",
          },
        ],
      },
      {
        id: "thermal",
        title: "保暖内衣",
        eyebrow: "THERMAL",
        summary: "冬季保暖内层，按需定制厚度与长度。",
        cases: [
          {
            id: "thermal-1",
            title: "保暖内衣定制",
            note: "按体型调整腰腹与裤腿长度，保暖同时不影响外层穿着。",
          },
        ],
      },
      {
        id: "loungewear",
        title: "家居服",
        eyebrow: "LOUNGEWEAR",
        summary: "夏季与日常居家服，透气、自在。",
        cases: [
          {
            id: "loungewear-1",
            title: "家居服定制",
            note: "选面料与版型，调整领型与衣长，居家穿着更舒服。",
          },
        ],
      },
    ],
  },
  {
    id: "alteration",
    title: "改衣",
    eyebrow: "ALTERATION",
    tagline: "改领口 · 改袖口 · 改腰 · 改裤脚",
    intro: "衣服不合适，不一定要换新的。很多小问题，改一改就好了。",
    subItems: [
      {
        id: "collar",
        title: "改领口",
        eyebrow: "COLLAR",
        summary: "调整领口的大小与形状。",
        cases: [
          {
            id: "collar-1",
            title: "改领口",
            note: "根据脖子粗细与穿着习惯，调整领口松紧与形状，不勒也不松。",
          },
        ],
      },
      {
        id: "sleeve",
        title: "改袖口",
        eyebrow: "SLEEVE",
        summary: "调整袖长、袖口尺寸。",
        cases: [
          {
            id: "sleeve-1",
            title: "改袖口",
            note: "按手臂长度与袖口松紧需求，调整袖长与袖口大小，利落不堆布。",
          },
        ],
      },
      {
        id: "waist",
        title: "改腰",
        eyebrow: "WAIST",
        summary: "调整衣服的腰围。",
        cases: [
          {
            id: "waist-1",
            title: "改腰",
            note: "根据腰腹尺寸收放腰围，裤腰与裙腰都可处理，穿着更合身。",
          },
        ],
      },
      {
        id: "hem",
        title: "改裤脚",
        eyebrow: "HEM",
        summary: "调整裤长与裤脚。",
        cases: [
          {
            id: "hem-1",
            title: "改裤脚",
            note: "按身高与鞋型确定裤长，处理裤脚卷边或扦边，比例更协调。",
          },
        ],
      },
    ],
  },
  {
    id: "wellness",
    title: "养生",
    eyebrow: "HEALTH",
    tagline: "艾灸 · 针灸 · 正骨 · 按摩",
    intro: "日常调理、身体放松与健康咨询，均需提前预约，循序渐进。",
    subItems: [
      {
        id: "moxibustion",
        title: "艾灸",
        eyebrow: "MOXIBUSTION",
        summary: "了解服务 · 咨询预约",
      },
      {
        id: "acupuncture",
        title: "针灸",
        eyebrow: "ACUPUNCTURE",
        summary: "了解服务 · 咨询预约",
      },
      {
        id: "bone",
        title: "正骨",
        eyebrow: "BONE",
        summary: "了解服务 · 咨询预约",
      },
      {
        id: "massage",
        title: "按摩",
        eyebrow: "MASSAGE",
        summary: "了解服务 · 咨询预约",
      },
    ],
  },
  {
    id: "rental",
    title: "租房",
    eyebrow: "RENTAL",
    tagline: "附近房源 · 线下咨询",
    intro: "本地租房资源与信息咨询。具体房源信息线下沟通，先咨询再约看。",
    subItems: [
      {
        id: "listings",
        title: "附近房源",
        eyebrow: "LISTINGS",
        summary: "附近房源 · 线下咨询",
      },
    ],
  },
];
