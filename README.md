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

## 部署（Deployment）

静态站点，打包产物在 `dist/`，已包含 `public/_redirects`（SPA 路由回退，保证子路由直访问不 404）。

- 构建：`npm install && npm run build`
- 部署平台：Netlify（免费）
- 生产地址：https://zingy-arithmetic-a13f55.netlify.app
- 站点 ID：`ba1be5fe-bd08-4a60-811b-49f17162b6eb`（团队：leo-yossi）
- 部署方式：Netlify CLI `netlify deploy --prod --dir=dist`（需 Personal Access Token）

> 注意：Netlify 新团队项目默认可见性为 Private（需登录才能访问），需将站点的
> Project visibility 设为 Public（路径：Project configuration › General › Visitor access › Project visibility）。
