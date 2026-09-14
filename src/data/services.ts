import type { Service } from "../types/service";

export const services: Service[] = [
  {
    id: "making",
    title: "制衣",
    shortDescription: "夏季家居服、棉衣、保暖衣等，可按需求制作。",
    tags: ["家居服", "棉衣", "保暖衣"],
    detailPath: "#",
    icon: "✦",
  },
  {
    id: "alteration",
    title: "改衣",
    shortDescription: "衣服长短、腰围等调整，也处理校服、军训服、工装。",
    tags: ["改腰围", "改长度", "校服", "工装"],
    detailPath: "#",
    icon: "⌁",
  },
  {
    id: "rental",
    title: "租房",
    shortDescription: "本地租房资源与信息咨询，具体房源不公开展示。",
    tags: ["房源咨询", "资源对接", "线下沟通"],
    detailPath: "#contact",
    icon: "⌂",
  },
  {
    id: "wellness",
    title: "养生",
    shortDescription: "艾灸、针灸、正骨、按摩等服务，均需提前预约。",
    tags: ["艾灸", "针灸", "正骨", "按摩"],
    detailPath: "#contact",
    icon: "○",
  },
];