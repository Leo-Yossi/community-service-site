# 社区网站 / 本地生活服务

一个刻意保持简单的 React + Vite 本地服务展示站。

## 当前结构

- `src/App.tsx`：页面骨架，只负责组合页面区域
- `src/components/`：可复用视觉组件
- `src/data/services.ts`：首页服务内容
- `src/types/`：TypeScript 类型
- `src/styles/index.css`：全局样式

## AI 修改时的推荐方式

1. 改服务文字/标签：优先修改 `src/data/services.ts`
2. 改某个卡片的结构：修改 `src/components/ServiceCard.tsx`
3. 改整页区域顺序：修改 `src/App.tsx`
4. 改整体视觉：修改 `src/styles/index.css`
5. 新增详情页：新增 `src/pages/`，再在 `App.tsx` 中接入路由

暂时不引入数据库、后端、状态管理、页面配置系统。先把真实网站跑起来。
