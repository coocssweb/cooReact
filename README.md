# 功能描述
模块化封装项目中常用的移动端React 插件，采用 webpack 的形式进行模块化封装。<br/>
PC端测试请在chrome等支持react的浏览器下<br />
浏览器兼容问题？支持所有常见的移动端浏览器。

#目录文件描述
1、webpack.config.js  ==>webpack配置文件<br />
2、server.js          ==>nodejs服务配置文件<br />
3、package.json       ==>包配置信息<br />
4、public文件夹       ==>静态资源文件夹 <br />
5、node_modules文件夹 ==>npm 模块安装目录<br />
6、examples文件夹     ==>模块调用示例目录,子目录与调用components目录一致<br />
7、components文件夹   ==>自己封装的插件目录,<br />
8、components/base    ==>基础对象，通用方法集合，如：获取浏览器前缀方法等.....
#插件功能描述
<h5>1、滑动删除插件：SlideDelete</h5>
<p>滑动删除插件：实现列表的滑后，显示删除按钮，点击删除按钮进行数据删除。<p>
<h5>2、幻灯片组件：Slidr</h5>
<p>幻灯片组件：实现移动端的滑动切换幻灯片功能，支持自定义显示分页信息、切换方向、是否开启3D效果<p>
<h5>3、提示框组件：Tip</h5>
<p>提示框组件：实现移动端的提示框功能，支持自定义提示信息。<p>
<h5>4、Confirm组件：Confirm</h5>
<p>Confirm组件：实现移动端的Confirm框功能，支持自定义确认信息、确认按钮事件。<p>
<h5>5、分页组件：Pager</h5>
<p>Pager组件：实现移动端的分页组件功能，支持自定义点击分页的事件。<p>
<h5>6、加载更多组件：Loadmore</h5>
<p>Loadmore组件：实现移动端点击加载更多，自持自定义点击加载更多按钮后的事件。<p>
<h5>7、滚动加载更多组件：ScrollLoadmore</h5>
<p>ScrollLoadmore组件：实现移动端滚动加载更多，自持自定义加载更多按钮后的事件。<p>
<h5>8、长按后编辑组件：HoldEdit</h5>
<p>HoldEdit组件：实现移动端长按后提示编辑效果，支持自定义长按后松开手指后的事件。<p>
<h5>9、图片剪辑组件：ImageCut</h5>
<p>ImageCut组件：实现移动端图片剪辑功能，支持一个手指拖拽，两个手指放大的功能，点击完成完成头像剪辑。<p>
<h5>10、滑动切换组件，SlideTab</h5>
<p>SlideTab组件：实现移动端的Tab功能，支持点击tab标题进行切换，支持手指滑动切换，支持定义默认显示的Tab<p>
<h5>11、列表水平滑动组件，SlideList</h5>
<p>SlideList组件：实现移动端的列表滑动功能，定义切换动画时间<p>
<h5>12、侧边栏菜单组件，SlidePushMenu</h5>
<p>SlidePushMenu组件：实现移动端的侧边栏按钮滑动展示隐藏功能，支持自定义开启关闭3D切换效果(is3d)。支持定义有效的调度范围（如30度等）<p>
<h5>13、注册组件，SignUp(examples:Login)</h5>
<p>SignUp组件：实现移动端的通过手机号码发送验证码然后注册功能，支持自定义重新发送验证码的时间戳，支持扩展下一步（如需填写密码，可以自行引入react-router进行扩展）,注册过程中的提示信息引用3、提示组件Tip<p>
<h5>14、登录组件，SignIn(examples:Login)</h5>
<p>SignIn组件：实现移动端的登录组件功能，登录过程中的提示信息引用3、提示组件Tip<p>
<h5>15、找回密码组件，FindPwd(examples:Login)</h5>
<p>FindPwd组件：实现移动端的找回密码组件功能，过程中的提示信息引用3、提示组件Tip<p>


#更新日志<br />
2015.09.07  23:04 <br />
tip：添加可自定皮肤，定义自动关闭时间，是否开始关闭按钮。具体参数看propTypes。<br />
confirm ：添加cancel回调接口。具体参数看propTypes。<br />
slideList、slidepushmenu :开启react触屏支持。
