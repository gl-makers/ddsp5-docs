# 更新日志

:::tip
由于 DDSP 5.0 的底模存在些许问题，我自己炖了一个底模。

底模使用了 97.35h 的高质量数据集，分别来自 galgame，授权数据，开源数据集，以及自己掏钱找人唱的。   

因为自己学业问题没时间进行测试，所以底模的效果并没有经过验证，因此没有放入整合包中。

如果你想加入测试，可以[点击这](https://www.123pan.com/s/BEzKjv-Vkqqv.html)下载模型权重。

使用方法是用这个文件替换掉 整合包目录下的 `pretrained` 文件夹中的 `model_0.pt` 文件，请在覆盖前备份原文件。
:::

:::tip
点击标题左侧的 icon 即可下载对应版本
:::
## [⏬](https://www.123pan.com/s/BEzKjv-ykqqv.html) 2024/2/15 1.0.0 rc8
 - 添加了当 spk 字段缺失时的提醒

## [⏬](https://www.123pan.com/s/BEzKjv-PEqqv.html) 2024/2/15 1.0.0 rc7
 - 支持保存配置

## [⏬](https://www.123pan.com/s/BEzKjv-EEqqv.html) 2024/2/15 1.0.0 rc6
:::warning
此版本 bug 较多，已停止下载
:::
 - 支持在 WebUI 实现训练暂停
 - 启动 tensorboard 后自动打开

## [⏬](https://www.123pan.com/s/BEzKjv-WQqqv.html) 2024/2/14 1.0.0 rc5
 - 支持多说话人训练，推理
 - 训练：增加最大轮数选项 ~~其实是为了凑整~~
 - 数据处理：更新手动数据处理
 - 布局：采用平行布局，更加美观
 - 更换压缩参数，减小体积
 - ~~下一个版本上加功德按钮~~

## [⏬](https://www.123pan.com/s/BEzKjv-V9qqv.html) 2024/2/13 1.0.0 rc4
 - 训练：新增不使用底模选项
 - 数据处理：新增使用设备选项
 - 移除模型

## [⏬](https://www.123pan.com/s/BEzKjv-l9qqv.html) 2024/2/13 1.0.0 rc3
 - 修复了归档后缺工作目录的 bug
 - 此版本自带真寻的模型，绝对不是我不小心打包进去的

## [⏬](https://www.123pan.com/s/BEzKjv-89qqv.html) 2024/2/13 1.0.0 rc2
 - 添加群链接
 - 重打环境，减小体积

## [⏬](https://www.123pan.com/s/BEzKjv-W9qqv.html) 2024/2/13 1.0.0 rc1 
 - 第一个没多少 bug 的版本

---

~~在此之前发了 10 几个不太能跑版本，都没写日志，绝对不是我懒~~