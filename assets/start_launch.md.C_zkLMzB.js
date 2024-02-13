import{_ as a,c as t,o as e,V as d}from"./chunks/framework.gkMttBBc.js";const r="/assets/FA252EE3-25E8-4f47-97EB-BD1C46F2A147_.QStDckEu.png",m=JSON.parse('{"title":"正式使用","description":"","frontmatter":{},"headers":[],"relativePath":"start/launch.md","filePath":"start/launch.md"}'),o={name:"start/launch.md"},h=d('<h1 id="正式使用" tabindex="-1">正式使用 <a class="header-anchor" href="#正式使用" aria-label="Permalink to &quot;正式使用&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>本整合包不提供现成模型！</p></div><p>右侧的标题导航可以帮助你快速找到你需要的内容。</p><h2 id="结构说明" tabindex="-1">结构说明 <a class="header-anchor" href="#结构说明" aria-label="Permalink to &quot;结构说明&quot;">​</a></h2><p>在整合包中，你只需要关注以下几个文件夹：</p><table><thead><tr><th>文件夹</th><th>说明</th></tr></thead><tbody><tr><td><code>exp</code></td><td>工作目录</td></tr><tr><td><code>archieve</code></td><td>训练归档文件夹</td></tr><tr><td><code>models</code></td><td>已训练模型文件夹</td></tr><tr><td><code>dataset_raw</code></td><td>原始数据集文件夹</td></tr><tr><td><code>data</code></td><td>可用于训练的数据集存放位置，完成训练后可删除</td></tr><tr><td><code>tmp</code></td><td>数据处理临时文件夹，完成数据处理后可删除</td></tr></tbody></table><h2 id="启动-webui" tabindex="-1">启动 WebUI <a class="header-anchor" href="#启动-webui" aria-label="Permalink to &quot;启动 WebUI&quot;">​</a></h2><p>整合包目录下面有一个 <code>启动 WebUI.bat</code>，双击即可启动 WebUI。</p><p><img src="'+r+'" alt=""></p><h2 id="推理" tabindex="-1">推理 <a class="header-anchor" href="#推理" aria-label="Permalink to &quot;推理&quot;">​</a></h2><h3 id="搜索位置" tabindex="-1">搜索位置 <a class="header-anchor" href="#搜索位置" aria-label="Permalink to &quot;搜索位置&quot;">​</a></h3><p>选择一个文件夹，WebUI 会搜索该文件夹下的所有模型文件。</p><h3 id="加载模型" tabindex="-1">加载模型 <a class="header-anchor" href="#加载模型" aria-label="Permalink to &quot;加载模型&quot;">​</a></h3><p>选择一个模型文件，点击加载模型。</p><p><code>cuda</code> 代表使用 GPU 进行推理，<code>cpu</code> 代表使用 CPU 进行推理。</p><p>DDSP 推理脚本会自动从搜索位置中读取配置文件</p><h3 id="选择音频" tabindex="-1">选择音频 <a class="header-anchor" href="#选择音频" aria-label="Permalink to &quot;选择音频&quot;">​</a></h3><p>你需要上传一个 <code>.wav</code> 格式的音频文件</p><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><h4 id="f0-预测器" tabindex="-1">F0 预测器 <a class="header-anchor" href="#f0-预测器" aria-label="Permalink to &quot;F0 预测器&quot;">​</a></h4><p>下表取自<a href="https://www.yuque.com/umoubuton/ueupp5" target="_blank" rel="noreferrer">羽毛的文档</a></p><table><thead><tr><th>预测器</th><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>pm</td><td>速度快，占用低</td><td>容易出现哑音</td></tr><tr><td>crepe</td><td>基本不会出现哑音</td><td>显存占用高，自带均值滤波，因此可能会出现跑调</td></tr><tr><td>dio</td><td>-</td><td>可能跑调</td></tr><tr><td>harvest</td><td>低音部分有更好表现</td><td>其他音域就不如别的算法了</td></tr><tr><td>rmvpe</td><td>六边形战士，目前最完美的预测器</td><td>几乎没有缺点（极端长低音可能会出错）</td></tr><tr><td>fcpe</td><td>SVC 开发组自研，目前最快的预测器，且有不输 crepe 的准确度 ~<s>复活赛打赢了</s>~</td><td>-</td></tr></tbody></table><h4 id="采样器" tabindex="-1">采样器 <a class="header-anchor" href="#采样器" aria-label="Permalink to &quot;采样器&quot;">​</a></h4><p>目前暂不明确</p><h4 id="音频变调" tabindex="-1">音频变调 <a class="header-anchor" href="#音频变调" aria-label="Permalink to &quot;音频变调&quot;">​</a></h4><p>也就是所谓的 &quot;调key&quot; ，可以让音频变得更高或更低，从而拟合模型音色</p><h4 id="推理加速" tabindex="-1">推理加速 <a class="header-anchor" href="#推理加速" aria-label="Permalink to &quot;推理加速&quot;">​</a></h4><p>越高越快，质量越差，但是注意与采样步数有一定要求</p><table><thead><tr><th>采样器</th><th>要求</th></tr></thead><tbody><tr><td>通用</td><td>加速和步数都等于1时都可以跑</td></tr><tr><td>dpm-solver</td><td>步数大于等于2倍加速</td></tr><tr><td>pndm</td><td>步数大于加速</td></tr><tr><td>ddim</td><td>没有限制</td></tr><tr><td>unipc</td><td>步数大于等于2倍加速</td></tr></tbody></table><h4 id="采样步数" tabindex="-1">采样步数 <a class="header-anchor" href="#采样步数" aria-label="Permalink to &quot;采样步数&quot;">​</a></h4><p>越高越慢，质量越好，但是注意与推理加速有一定要求，详见上表</p><h4 id="阈值" tabindex="-1">阈值 <a class="header-anchor" href="#阈值" aria-label="Permalink to &quot;阈值&quot;">​</a></h4><p>人声切片的阈值，也就是切片的敏感度，如果有底噪可以调为 -40 或更高</p><h4 id="批量推理" tabindex="-1">批量推理 <a class="header-anchor" href="#批量推理" aria-label="Permalink to &quot;批量推理&quot;">​</a></h4><p>如果你有多个音频需要推理，可以打开这个选项，但是启用后无法在 WebUI 中查看推理结果</p><h2 id="数据处理" tabindex="-1">数据处理 <a class="header-anchor" href="#数据处理" aria-label="Permalink to &quot;数据处理&quot;">​</a></h2><p>目前只提供了全自动数据处理，该数据处理包括了重采样，切片，划分验证集，生成 f0 等操作</p><h2 id="训练" tabindex="-1">训练 <a class="header-anchor" href="#训练" aria-label="Permalink to &quot;训练&quot;">​</a></h2><p>在你确保完成数据处理后，你可以从这里开始训练</p><h3 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-label="Permalink to &quot;参数&quot;">​</a></h3><h4 id="训练设备" tabindex="-1">训练设备 <a class="header-anchor" href="#训练设备" aria-label="Permalink to &quot;训练设备&quot;">​</a></h4><p><code>cuda</code> 代表使用 GPU 进行训练，<code>cpu</code> 代表使用 CPU 进行训练。</p><h4 id="批次大小-batch-size" tabindex="-1">批次大小 (Batch Size) <a class="header-anchor" href="#批次大小-batch-size" aria-label="Permalink to &quot;批次大小 (Batch Size)&quot;">​</a></h4><p>越大越快，但是显存占用也越大</p><h4 id="数据加载器进程数" tabindex="-1">数据加载器进程数 <a class="header-anchor" href="#数据加载器进程数" aria-label="Permalink to &quot;数据加载器进程数&quot;">​</a></h4><p>如果你显卡挺好，可以设为 <code>0</code></p><h4 id="训练精度" tabindex="-1">训练精度 <a class="header-anchor" href="#训练精度" aria-label="Permalink to &quot;训练精度&quot;">​</a></h4><p>选择 <code>fp16</code>、<code>bf16</code> 可以获得更快的速度，但是炸炉概率 up up</p><p>默认选择 <code>fp32</code></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果你选择 <code>CPU</code> 进行训练，请将训练模式改为 <code>fp32</code></p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>目前因为 DDSP 上游问题，选择半精度(fp16)的炸炉(loss: NaN)概率几乎是是 100%，如果你遇到这种问题，可以调一个极小的学习率(lr)来解决</p></div><h4 id="验证间隔-interval-val" tabindex="-1">验证间隔 (interval_val) <a class="header-anchor" href="#验证间隔-interval-val" aria-label="Permalink to &quot;验证间隔 (interval_val)&quot;">​</a></h4><p>每 <code>N</code> 步验证一次，同时保存一次模型</p><p>一般默认就是最好的</p><h4 id="日志输出间隔-interval-log" tabindex="-1">日志输出间隔 (interval_log) <a class="header-anchor" href="#日志输出间隔-interval-log" aria-label="Permalink to &quot;日志输出间隔 (interval_log)&quot;">​</a></h4><p>每 <code>N</code> 步输出一次日志，建议调大点，因为实在是太快辣</p><p>一般默认就是最好的</p><h4 id="强制保存模型间隔-interval-force-save" tabindex="-1">强制保存模型间隔 (interval_force_save) <a class="header-anchor" href="#强制保存模型间隔-interval-force-save" aria-label="Permalink to &quot;强制保存模型间隔 (interval_force_save)&quot;">​</a></h4><p>每 <code>N</code> 步强制保存一次模型</p><p>也就是说满足 当前步数/强制保存模型间隔 的余数为 0 时保存的模型不会被自动删掉</p><p>一般默认就是最好的</p><h4 id="缓存设备" tabindex="-1">缓存设备 <a class="header-anchor" href="#缓存设备" aria-label="Permalink to &quot;缓存设备&quot;">​</a></h4><p>选择 <code>cuda</code> 可以获得更快的速度，但是需要更大显存的显卡</p><p>当选择 <code>cuda</code> 时，数据加载器进程数将自动设置为 0</p><h4 id="缓存所有数据" tabindex="-1">缓存所有数据 <a class="header-anchor" href="#缓存所有数据" aria-label="Permalink to &quot;缓存所有数据&quot;">​</a></h4><p>可以获得更快的速度，但是需要大内存/显存的设备</p><h3 id="归档训练结果" tabindex="-1">归档训练结果 <a class="header-anchor" href="#归档训练结果" aria-label="Permalink to &quot;归档训练结果&quot;">​</a></h3><p>训练完成后，你可以选择归档训练结果，这会将训练结果移动到 <code>archieve</code> 文件夹中</p><p>归档之后回到推理界面点击刷新选项即可看到归档后的模型</p><p>如果还需要恢复，把归档文件放到 <code>exp/cascade</code> 文件夹中即可</p>',70),c=[h];function l(i,n,s,p,u,b){return e(),t("div",null,c)}const f=a(o,[["render",l]]);export{m as __pageData,f as default};
