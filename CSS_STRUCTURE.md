# CSS 文件结构说明

## 文件组织

### 1. `app/globals.css`
- 全局样式和基础设置
- 导入字体和动画文件
- Tailwind CSS 配置
- 基础组件样式

### 2. `app/animations.css`
- 所有动画相关的CSS类
- Framer Motion 替代方案
- 过渡效果和关键帧动画
- 悬停和交互效果

## CSS 类命名规范

### 动画类
- `.hero-*` - Hero组件相关动画
- `.sidebar-*` - Sidebar组件相关动画
- `.grid-*` - 网格布局相关动画
- `.hover-*` - 悬停效果
- `.fade-*` - 淡入淡出效果
- `.slide-*` - 滑动效果

### 组件类
- `.main-content` - 主内容区域
- `.sidebar` - 侧边栏
- `.portrait-container` - 肖像容器
- `.text-content` - 文本内容
- `.social-icon` - 社交媒体图标

## 使用说明

### 动画类使用
```css
/* 进入动画 */
.hero-portrait-enter { /* 初始状态 */ }
.hero-portrait-enter-active { /* 激活状态 */ }

/* 网格动画 */
.grid-container { /* 容器初始状态 */ }
.grid-container-visible { /* 容器可见状态 */ }
.grid-item { /* 项目初始状态 */ }
.grid-item-visible { /* 项目可见状态 */ }
```

### 悬停效果
```css
.hover-lift:hover { /* 上浮效果 */ }
.hover-scale:hover { /* 缩放效果 */ }
.button-press:active { /* 按钮按下效果 */ }
```

## 优势

1. **性能优化** - 移除了Framer Motion，减少JavaScript负担
2. **代码分离** - CSS和JavaScript完全分离
3. **可维护性** - 所有样式集中在CSS文件中
4. **一致性** - 统一的命名规范和结构
5. **可重用性** - 动画类可以在多个组件中重用

## 迁移完成

✅ Hero组件 - 移除Framer Motion，使用CSS动画
✅ Sidebar组件 - 移除Framer Motion，使用CSS动画  
✅ WorksGrid组件 - 移除Framer Motion，使用CSS动画
✅ DiaryList组件 - 移除Framer Motion，使用CSS动画
✅ TutorialsList组件 - 移除Framer Motion，使用CSS动画

所有内联CSS和Framer Motion动画已成功提取到独立的CSS文件中。 
