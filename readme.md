# 之乎者也茶

  
  
## 依赖
导入 jQuery 或者 Zepto  

## 集成
- [Font Awesome 字体库](http://fontawesome.dashgame.com/)
  
## 可选组件
- [SUI ios风格](http://m.sui.taobao.org/)
- [swiper 幻灯片组件](http://www.swiper.com.cn/)
- [WebUploader 上传组件](http://fex.baidu.com/webuploader)
- [jquery-lazyload 图片懒加载](http://www.appelsiini.net/projects/lazyload)
- 其他组件会在这里更新地址
  
  
## 安装
克隆项目后，进入项目根目录运行
```javascript
npm install
```
  
## 工程目录
用于存放开发时的代码
```javascript
./src/
    js/     //支持 es6语法
    sass/   //存放 sass
```
  
  
## 运行目录
部署项目所需的代码部分
```javascript
./dist/
    css/    //编译后的 css
    js/     //编译、压缩后的 js 文件会自动生成在这里
    lib/    //存放第三方依赖文件
    html/  //存放 html 页面
    images/ //存放图片
```
  

## 第三方组件封装

### WebUploader
封装上传组件的 UI交互功能
```javascript
$('#yourContanier').webuploader({
    server: 'url',   //上传后台地址,必填项
    
    // 以下是可选项
    
    size: 80,        //回显缩略图尺寸 默认80
    auto: false,     //自动上传 默认 false
    fileNumLimit: 10, //最多上传限制，默认50
    compress: {

        // 裁切尺寸
        width: 1600,
        height: 1600,

        // 图片质量，只有type为`image/jpeg`的时候才有效。
        quality: 90,

        // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
        allowMagnify: false,

        // 是否允许裁剪。
        crop: false,

        // 是否保留头部meta信息。
        preserveHeaders: true,

        // 如果发现压缩后文件大小比原来还大，则使用原来图片
        // 此属性可能会影响图片自动纠正功能
        noCompressIfLarger: false,

        // 单位字节，如果图片大小小于此值，不会采用压缩。
        compressSize: 0
    },
    
    uploadSuccess: function (file, response) {
        // file {File}File对象
        // response {Object}服务端返回的数据
    },

    uploadError: function (file, reason) {
        // file {File}File对象
        // reason {String}出错的code
    }
})
```

  
### 引用 CDN 资源
项目正式上线时请将公共资源改为 CDN 链接
