<!--
 * @Author: yibin.lin yibin.lin@tcl.com
 * @Date: 2023-09-25 16:37:11
 * @LastEditors: famin.ma famin.ma@tcl.com
 * @LastEditTime: 2023-11-07 19:19:03
 * @FilePath: \rd-utils\docs\guide\start.md
 * @Description:
 *
-->

# 快速开始

安装

```bash
// 切换到tcl制品库仓库
npm config set registry=https://tone.tcl.com/pkg/devops/npm/npm/snapshot/
// 下载
npm install @rd/previewer

// or
npm install [PACKAGE]@[VERSION] --registry=https://tone.tcl.com/pkg/devops/npm/npm/snapshot/
```

引入注册
```javascript
// 引入并注册
import MPreviewer from '@rd/previewer' // ES模块的环境中（如现代浏览器）
// const MPreviewer =require("@rd/previewer").default // Node.js环境
app.use(MPreviewer)

// 按需引入并注册 指定类型文件预览
import { 
    MWord, 
    MExecl, 
    MPdf, 
    MPptx, 
    MText, 
    MImage, 
    MAudio, 
    MVideo
} from '@rd/previewer'
// const { MWord, MExecl, MPdf, MPptx, MText, MImage, MAudio, MVideo} = require("@rd/previewer") 
app.use(MWord).use(MExecl).use(MPdf).use(MPptx).use(MText).use(MImage).use(MAudio).use(MVideo)

// 引入样式文件
import '@rd/previewer/style.css'
// require('@rd/previewer/style.css')
```

使用
```vue
<template>
  <div style="width:100vw;height:600px;border:1px solid;">
    <MPreviewer
      :extend="extend"
      :src="src"
      :options="options"
    >
    </MPreviewer>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";

const extend = ref<string>("pdf");
const src = ref("http://10.117.204.5:5173/pdf.pdf");
const options: any = reactive({ // 可选
   pdfConf: {
    pagation: true,
  },
});
</script>
```

