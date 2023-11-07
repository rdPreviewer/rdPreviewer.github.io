

### Props
				
| 属性 | 类型 | 是否必传 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| extend | string | 必传 | - | 文件扩展名 |
|           src | fileUrl &#124; base64Url &#124; Blob &#124; ArrayBuffer |               必传 |               - |                                   文件资源 <br>不同类型文件 可传类型如下：<br>word &#124; execl &#124; pdf &#124; pptx &#124; video ：all<br>image：    all &#124; Array<fileUrl &#124; base64Url ><br>text(文本):  all &#124; string<br>audio:   Array&lt;**[AudioItem](#AudioItem)**&gt; |
| options       | [OptionsProps](#OptionsProps) | 可选 | {} |    各类型预览插件对应的具体配置项     |  





#### AudioItem

<a id="AudioItem"></a>
| 属性 | 类型 | 是否必传 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| url | string | 必传 | - | 音频资源链接 |
|           name | string | 可选 | Audio name | 音频名称 |
| artist | string | 可选 | Audio artist | 音频来源/作者 |
| cover | string | 可选 | - | 音频封面图 | 



#### OptionsProps


<a id="OptionsProps"></a>
| 属性 | 子属性 | 类型 | 是否必传 | 默认值 | 备注 |
| --- | --- | --- | --- | --- | --- |
| wordConf | | WordOptionsProps | 可选 | {} |  |
| execlConf |  | ExeclOptionsProps | 可选 | {} | |
| pptxConf |  | PptxOptionsProps | 可选 | {} |  |
| pdfConf |  | PdfOptionsProps | 可选 | |  |
|  | pagation | boolean | 可选（true &#124; false） | false | 是否开启分页切换 |
|  | rotation | number &#124; string | 可选(0 &#124; 90 &#124; 180 &#124; 270) | 0 | pdf页翻转角度 |
| textConf |  | TextOptionsProps | 可选 |  |  |
|  | disabled | boolean | 可选(true &#124; false) | true | 是否禁止文本编辑 |
|  | dark | boolean | 可选(true &#124; false) | false | 是否暗黑主题色 |
| imageConf |  | ImageOptionsProps | 可选 | {} |  |
| videoConf |  | VideoOptionsProps | 可选 |  |  |
|  | width | string | 可选(百分比 &#124; 像素) | 100% | 视频宽度 |
|  | height | string | 可选(百分比 &#124; 像素) | 200px | 视频高度 |
|  | lang | string | 可选(zh-cn &#124; en) | zh-cn | 中英文 |
|  | poster | string | 可选 | 视频第一帧 | 视频封面图 |
|  | autoplay | boolean | 可选(true &#124; false) | false | 自动播放(一些浏览器会禁止该行为) |
|  | download | boolean | 可选(true &#124; false) | true | 是否开启下载 |
|  | pip | boolean | 可选(true &#124; false) | true | 是否开启画中画 |
|  | screenShot | boolean | 可选(true &#124; false) | true | 是否开启视频截图 |
|  | volume | number | 可选 | 0.3 | 初始音量 |
|  | playbackRate | Array&lt;number&gt; | 可选 | [0.5, 0.75, 1, 1.5, 2, 3] | 播放倍速范围 |
|  | defaultPlaybackRate | number | 可选 | 1 | 初始播放速度 |
|  | loop | boolean | 可选(true &#124; false) | false | 是否循环播放 |
| audioConf |  | AudioOptionsProps | 可选 |  |  |
|  | theme | 十六进制 | 可选 | #31374e | 主题色 |
|  | autoplay | boolean | 可选(true &#124; false) | false | 自动播放(一些浏览器会禁止该行为) |
|  | loop | string | 可选( 'all' &#124; 'one' &#124; 'none'  ) | none | 循环播放 |
|  | volume | number | 可选 | 0.7 |  默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效   |
|  | fixed | boolean | 可选(true &#124; false) | false | 开启吸底模式 |
|  | mini | boolean | 可选(true &#124; false) | false | 开启迷你模式 |
|  | listFolded | boolean | 可选(true &#124; false) | false | 多个音频是列表默认折叠 |



### MPreviewer  Slots

|   name    |     说明   |  
| --- | ---|
| unview | 文件格式不支持预览时渲染的内容 |