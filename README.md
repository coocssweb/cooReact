## 轻商城

#### 下载代码及编译

```
$ npm install
$ npm start
```

#### 访问
demo页面： http://127.0.0.1:8088/


#### 构建本地环境主程序
```
$ npm build:dev
```


### 前端目录说明

```assets
├── assets
│   └── build/   webpack 配置文件
│   └── config/  项目配置项，区分开发/测试/生产配置
│   └── layout/  页面渲染配置
│   └── src/     源码目录
│       ├── resources  基础资源
│           ├── api api资源
│           ├── scss 样式资源
│           ├── js 基础脚本
```

### 模板渲染配置
```
// title：标题
// keyword: 关键字
// description: 描述
// content: 内容，可为EJS文本
// config
// menus: 配置全局bar
// gLoading: 进入页面是否显示全局loading，默认true
render: ({title, keyword, description, content, config, menus = { display: true, active: 'home' }, gLoading = true})

```
### App内定义的共有模块

#### 权限控制对象：this.$auth
具体对应  resources/js/auth.js;
调用如下：
```
// 强制登录
this.$auth.requireLogin();
// 是否登录
this.$auth.hasLogined();
// 跳转登录
this.$auth.redirectLogin('https://xxxx');
```

静态资源图片

!thumb100
!thumb350
!thumb500
!thumb750
!thumb1920
