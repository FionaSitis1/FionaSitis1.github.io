import { Component } from '@angular/core';
import { Blog } from '../../blog';

@Component({
  selector: 'app-ch7',
  templateUrl: './ch7.component.html',
  styleUrls: ['./ch7.component.css']
})
export class Ch7Component {
  blog = BLOG7;
}
export const BLOG7: Blog = {
  paragraphs: [
    '拿着薛凯琪临时颁发的酒店房卡，刘恋带着一个电脑和一个塑料袋推门而入。半分钟前，薛凯琪正在从最大尺寸的RIMOWA旅行箱里取出一些装了药丸和胶囊的瓶瓶罐罐。剔透的瓶子上贴着一些小字，人体器官或是身体部位，助眠或是安神或是止痛。',
    '洗过澡后一身干净清爽的Alpha身着刚换的长袖长裤，扣子一路扣到最上的一颗。发尾还在滴水，刘恋正准备随便找个地方坐坐。',
    '刘恋想，那就坐在这个床上的薛凯琪旁边吧，还能看看这个抱着笔记本电脑的薛凯琪在干什么。',
    '“就这么穿着外裤坐在我的床上了？”',
    '“这是睡裤。睡裤。姐。”',
    '同样洗过澡后一身干净清爽的Omega穿着浴袍，拖鞋挂在穿着卡通长袜的脚上，推了推黑框眼镜说，那也不行，你路过了走廊。',
    '刘恋想还嘴。',
    '“我有洁癖。”她亲爱的甲方已经不打算和她理论而开始回邮件了，“你坐那边。电脑可以放桌上。”',
    '说得还像是为了我好一样。但是好吧。我喜欢你，你赢。',
    '在到达酒店的回程途中，副驾驶座的薛凯琪收到临时添加的展出艺术工作者名单，接着对她说：待会儿你来我房间，我有一些临时的想法想和你聊一聊。这语气很厉害，像是刚刚在车上的那一场安静的飞机失事从未发生。',
    '“你是真的——”',
    '有的人是夜间动物，有的是日间动物，而刘恋现在开始感叹起来了：幸好，她和她的暗恋对象都是夜间动物，不然她真保不准自己这爱情朝圣之旅走不走得下去。',
    '“也太爱岗敬业了吧。”',
    '路过单人沙发匹配的圆形茶几，刘恋瞟了眼贴着小字的瓶瓶罐罐们。',
    '刘恋问薛凯琪，这个真的会有用吗？',
    '“什么？”',
    '“安神胶囊。”',
    '刘恋知道这个，因为每个有点生理问题的Alpha或Omega都知道这个——还是那一件事。他们都会去找医生，医生只会开一堆红蓝相间但屁用没有的安神胶囊给他们。',
    '屁用没有。',
    '因为安神胶囊在缓解发情问题上丝毫不起作用。医生给他们开这个，纯粹是出于不想被人投诉丢掉饭碗。',
    '而薛凯琪回答她说，当然有用啦。',
    '“我经常失眠。”薛凯琪说，“但是，并不是每一次失眠都是因为生理问题。”',
    '刘恋难以置信：所以除了洗过标你还折腾了别的？',
    '“我的膝盖有一些旧伤，不能够久跪。”薛凯琪说，“有的时候白天站得太久，晚上会疼，疼得太厉害的话到天亮才能睡着。”',
    '髌骨软化症。薛凯琪说着，曲腿又打直给她看膝盖的关节处，乍一看什么都没有，但是里头帮助减少骨头摩擦的软骨实际上早就所剩无几。薛凯琪注意到刘恋有点难看的表情，拍拍这颗湿润的脑袋说，刚刚在车上那个姿势是我自己的选择，跟你没有关系。',
    '早就说了，这只传说中的多栖神奇动物，装置艺术家，兼服装设计师，兼摄影模特，兼博物馆董事会成员，兼秀场股东，每天要干的事多得两只手加两只脚加起来都数不过来。',
    '人们睡觉，薛凯琪在前往下一个展览场地的飞机上。人们醒来，薛凯琪在等候红绿灯的间隙带着耳机旁听会议。人们休假，薛凯琪在闲暇时间浏览今年时装秀的报道并且保存喜欢的裙子款式。',
    '刘恋在薛凯琪指定的座位上坐下，开机，电脑屏幕亮起，穿着卡通长袜的薛凯琪走过来。',
    '屏幕依旧停留在上一次还未关闭的PPT上，刘恋清了清嗓子顺口解释，“针对咱们这个项目，我做了些数据分析，在对未来相应主题的定位上应该会派得上长久的用途。”',
    '一整页的调研只为证明一件事。根据古往今来对人性的参悟和分析来看，人类是一种喜爱戏剧性的生物。像什么战争、森林大火、核泄漏事件、饥荒、某地区酸雨含量超标、泥石流，往往都是热门阅读量的榜首。',
    '薛凯琪听着刘恋的解说。在这个人们称为地球的游乐场里，足够刺激的娱乐项目才碰得动人脑子里那根神经，毕竟二十一世纪绝大部分人的脑子和心都跟冰河时代的化石那么硬。',
    '刘恋继续解释。你说奇怪不奇怪？到最后，你甚至很难去区分，这些人到底是对连环车祸感兴趣，还是真的很热爱这个玩意儿。想把一群人聚集起来，你只需要告诉他们你这儿有什么过于血腥的未播片段就够了，他们就会围过来。',
    '薛凯琪听着。',
    '你说得都没错。',
    '“我的结论很简单。”刘恋说，“人们喜欢惨事，喜欢大型新闻。”',
    '可是我不喜欢那样。',
    '甲方忠实走狗笑得有点邪里邪气，“不过，这一套太简单，太容易搞懂，也太没挑战性了。我认为没什么意思。”',
    '一直望着电子屏幕的薛凯琪闻言，若有所思地眨眨眼。',
    '“我不怎么喜欢这样，我知道你也不喜欢这样。做这么个调查也只是我好奇事情是否真是这样。扩展知识面，说不定哪天能管用呢？”',
    '刘恋告诉薛凯琪，这是她送给她的一个小礼物，毕竟她这甲方走狗是花了毕生的运气才能和她这爱光正能量长颈鹿合作这么一次，这次之后她俩不知道啥时候才能再干点大事了。',
    '薛凯琪扫了刘恋一眼，没说话。',
    '刘恋顺其自然地点击关闭，打开另一个文件夹。',
    '刘恋听见这只沉默了好一阵的神奇动物惊喜地叫了一声。',
    '“一样的！”',
    '啊？',
    '“电脑呀！”',
    '刘恋看了看自己的电脑又看了看薛凯琪的手机。不是她们电脑的型号或是开机语言或是输入法的种类，薛凯琪指的是内容，也就是装在她们脑子里的那一堆奇奇怪怪：国际家具展，米兰设计周，巴黎装饰博览会，迪拜摩天大楼完工远景，格莱美颁奖现场演出，Superbowl中场十五分钟的截图……等等。还真是一样的，甚至包括一天前刚刚存进来的St. Vincent的吉他照片。',
    '薛凯琪脑袋放在刘恋的肩膀上去看电脑屏幕，“你一直都是这样的吗？”',
    '“嗯。”刘恋手脚一动不动，低头回答，“遇到喜欢的艺术品或者设计我就会存下来。”',
    '卡通长袜在她视线范围内晃了晃。',
    '“咱俩真的好有缘分哦，刘恋。”',
    '说完这句话的薛凯琪沉思琢磨，刘恋侧过头去。她们在近距离对视。刘恋说，你别不说话这么看着我，很吓人，像是领导要突然开除员工。薛凯琪听了笑个不停，从她的肩头撤走了自己的下巴，接着对她说，我想再交给你一个小任务。',
    '“我给你一首歌，你听了之后再告诉我你的感想。”出题家薛凯琪说。',
    '歌？',
    '“这个。”薛凯琪打开Youtube说，“Cranberries的Dreams。很多年前王菲也有翻唱过。但不管是原曲还是Cover我都很爱。你要认真听，认真回答。这是我的一份工作，对我很重要。”',
    '行，我这就听。刘恋回答。怎么都行。刘恋心想，无论你出什么花样我都行，什么主题什么立意什么要求我都干给你看，在为恋爱对象开动脑筋方面，我是真的相当在行，你不满意我可以不收合作劳务费。',
    '对这个态度很满意的薛凯琪打算点击播放。',
    '“等一下。”刘恋打开塑料袋说，“你先让我吃个夜宵，我好饿。”',
    '刘恋所说的夜宵指的是这一桶可以单手操作的速食产品。拿起来时，里头的东西摇得响，像碎了的石头在产生化合反应。刘恋一边往里面倒冷水，一边告诉薛凯琪，她为了买袋子里的这两件东西特意下了趟楼，毕竟酒店从来都只供应它们俩的其中之一。',
    '“用九百瓦的微波炉打热三分三十五秒，状态刚刚好。”',
    '坐在床上，薛凯琪蜷缩着腿，远远地望着刘恋的侧脸，还有那个在加了料包的油水里搅啊撇的白色塑料叉子。',
    '薛凯琪问，这样弄一下就好了？',
    '“那不然呢？”',
    '一碗泡面，现代社会人的生活必需品，也曾是薛凯琪的老朋友。',
    '十八岁开始兼职模特，二十三岁实现经济独立，曾经，忙得昼夜不分不可开交时，她只来得及注意哪种颜色的视觉冲击更能体现出一座当代雕塑的立意，或是怎样布置的现场能引起观众的共鸣，或是什么材质的吊灯可以更全面地照射到每一个展品——但是不够，不够，不够，做得还不够好。她要注意的东西太多，要思考的问题太复杂，这些搞脑子的艺术哲思没给她时间去留意今天吃下去的番茄产自深圳哪个农场。',
    '冷冻干燥的杂蔬。',
    '真空包装的咖喱。',
    '一冲即溶的咖啡。',
    '不够。不够。不够。时间永远不够。',
    '所以，给公益组织的宣传广告必须要在周一完成审核。',
    '周二前确定音乐节为女同性恋群体发声的舞台灯光是粉紫红白。',
    '与她名下品牌Spiritunus加大码服装设计的设计师Zoom Meeting是周三上午八点……',
    '云云。',
    '每到一个地方，有效期超过一百年的茶包，能活一百岁的泡面。只需要一台微波炉，一瓶水，就可以开饭了。',
    '刘恋继续拿着塑料叉子搅啊搅。方便面的油脂浮于表面，旋涡的中心，一个黄白相间的不明物体在上下浮沉。',
    '同一个厂商制造的速食产品，长命到大部分目前还是婴儿的人都不在人世之后。有时候，半夜睡不着觉时薛凯琪曾侧躺着，盯着这么一小袋价值三块钱的实用产品想：真的，你想想，万一哪天俄罗斯或美国疯了，朝香港投掷一颗核弹，国家级总统或主席躲在地下时吃的也是同样包装的产品，和酒店提供的廉价速食一样的东西。',
    '刘恋端着泡面在薛凯琪身边坐下。',
    '现在，真正引起薛凯琪兴趣的不是这个。',
    '“我不是在问你泡面。”薛凯琪说。',
    '薛凯琪盯着刘恋，因为刘恋正用叉子戳起那个黄白相间的不明物体。',
    '“我问的是这个。”薛凯琪说。',
    '一个黄白相间的不明物体。',
    '一个荷包蛋。',
    '用九百瓦的微波炉打热三分三十五秒，状态刚刚好，外层凝结成固体，内部还呈松软的半湿润状态，哪儿不对吗？',
    '“你真的不尝一下吗？我特意多打了一个给你。”刘恋说，“为了让仙女体验一下社畜的凡间生活。”',
    '将信将疑的薛凯琪握着刘恋的手，把叉子上被汤汁浸透的荷包蛋递到嘴边。',
    '“周五我可以请个假么？”薛凯琪一边吃，刘恋一边说，“我得飞一趟旧金山。”',
    '从现在到周五，一二三四，四天。',
    '刘恋向薛凯琪解释，周五是于文文的女朋友张天爱的生日，为了能和甲方当长期合同工连体婴儿，她已经连续鸽了唐诗逸赵梦于文文这几个女Alpha四次，如果连这次她都再不见人影，她是真会被唐诗逸一拳揍死。',
    '薛凯琪听着，不点头也不摇头，沉思冥想。',
    '“我就露个脸，周六一早就回来。”刘恋说，“可以么？”',
    '薛凯琪依旧在沉思冥想，而刘恋歪着头看向薛凯琪，然后模仿善良好心的长颈鹿软声软气地问：你想问的是不是“是不是我们周末就见不到，我们就得各自忙，我们回来的时候就跟不上对方的进度，没办法赶在开会前核对一下思路”？',
    '不怎么开心的薛凯琪向刘恋解释：我不是想让你加班，但是我的确是特别爱前面辛苦，后面舒服。',
    '“好的。”刘恋说，“工作日周一见面之前，您会收到一份PPT文件，内容包含根据您今晚提供的更新信息做出的三种方案。我的手机为您二十四小时开启，我们可以通过Zoom Meeting或Facetime或任何你爱的形式聊个小天。念长期合作，我就不收您加班费了。”',
    '刘恋问薛凯琪这样的安排她是否开心了。',
    '好耶。',
    '收获心仪答案后，薛凯琪心满意足地打算去忙别的：你好好休息，慢慢吃。',
    '就这么被丢下的刘恋没有生气，“我只是想静静地享受一下十分钟。”刘恋还在悠闲咀嚼，“我觉得一天最幸福的时候就只有吃饭——”',
    '“好好好。”戴着黑框眼镜的薛凯琪哈哈大笑，“你吃吃吃别讲了。”',
    '刘恋眯起眼睛微笑，脑细胞过于活跃的薛凯琪忽然问道，“你有看过疯狂动物城吗？”',
    '刘恋不说有，也不说没有，只是问，怎么了。',
    '有的时候，我觉得你有点像狐狸。薛凯琪告诉刘恋。你专心的时候会很像搞破坏的坏蛋。',
    '“我倒是想做这种坏女人，真的。”刘恋大笑，“不过很遗憾，我已经有了个标配形象。从很早以前起，公司的人就觉得我像小熊猫。”',
    '固执的薛凯琪听了之后表示犹豫，“真的吗？”薛凯琪开动想象力思考，“可我并不觉得。”',
    '刘恋耸肩。But姐，大家好像都是这么觉得的。',
    '薛凯琪沉思。',
    '小狐狸。',
    '好，狐狸吧，那就小狐狸吧。小狐狸。',
    '薛凯琪捂着嘴笑起来。',
    '“你又放弃了。好乖哦。现在这个groove很好嘛！”',
    '是的，虽然你有一点坏，有一点邪恶，有一点偷偷摸摸的小心思，但是我很大方，就不跟你计较这么多啦。',
    '很棒。吃掉刘恋碗里那个荷包蛋后，薛凯琪心满意足。',
    '毕竟星河遍布的夜空还是很美的，疯狂动物城还是很好看的，小动物还是很可爱的。不是吗？',
    '原本，如果和工作上谈得很投机的伙伴分开个几天，薛凯琪会在稍稍惋惜之后转身投入下一次会议，或是下一份报表，或是下一个要见的重要角色。人们来来往往，世界车水马龙，而薛凯琪勤勤恳恳，将爱光正能量和艺术福音从一个地方运送到下一个地方，地球的每一个角落。',
    '一条语音送进来，回复她的消息说，你的语气听起来倒是不怎么快乐。',
    '其实对于她这样长期滞留单身、婚姻状态一筹莫展的人而言，这才是常态。',
    '三分钟前，她才刚刚回复完刘恋发来的海边的于文文集团大合照，她说，你们看起来好快乐！',
    '每一天，把爱光正能量和艺术福音运送到地球的下一个角落，像经营全球连锁公司。全世界都遍布着她的小家。每到一个地方，和新认识的“胖头鱼”或是“卖玉米的”或是“老王他女儿”待一阵子，然后去下一个地方发放爱光正能量和艺术福音，周而复始。',
    '刘恋问她，你不快乐吗？',
    '快乐呀。',
    '薛凯琪听着刘恋带笑的声音，想起在平流层安详镇定地行驶的飞机。',
    '“你不爽我快乐？”',
    '“怎么会呢。”',
    '与其说是飞机，不如说是流星吧！想想，哪儿会有这么勤奋刻苦努力耗不光油的飞机啊？直到现在飞了一辈子都还没停过——毕竟一年三百六十五天，送爱心的圣诞老人只工作一天，而她薛凯琪可真是每天都在工作。',
    '刘恋顺其自然：我的存在就是为了让你快乐。',
    '脑袋很灵光的刘恋为了能让她高兴声音轻快：你的语气听起来倒是不怎么快乐。',
    '孤单的流星飞呀飞。在流星上一边进修爱光正能量一边眺望陆地，薛凯琪仍然希望能有所不同。',
    '在车上补觉薛凯琪醒来，车停在目的地大门的转角处，司机告诉她到了。',
    '她还在希望能有所不同。',
    '近一个月以来，行程和计划已经出现过无数次的突发情况，但直到下车，看清楚这位新来的艺术家的五官外貌，薛凯琪的心情原本都还是不错的。',
    '薛凯琪开始怀疑：是我漏看了临时更换的展出艺术工作者名单上有Robert这个英文名吗？',
    '她的心情原本不错。因为和她搅在一起的甲方忠实走狗刘恋是可爱的。虽说自打她们相遇以来，她们的工作总在变动，她们的生活也一团乱麻，但是至少到目前为止，她是快乐的。',
    '是我没注意到Edith给我的语音留言吗？',
    '没有任何人任何征兆提醒，惊吓变魔术一样地闪现到她跟前。',
    'Robert Fan。',
    '薛凯琪就这样又和Robert Fan遇上了。人生中的第二次。二十多年前他们第一次相遇时确实引发了点她人生里头的大地震，留给她的遗赠是腺体上的一道疤和呛鼻的烟熏味。在她分手后抑郁症爆发急着找死时，救了她的方大同心疼她，想逗她开心，想告诉她事情还不算太糟：真的，幸好你没脑子一抽就跑去给他怀孕。',
    '他。',
    '“Robert。”',
    '方大同安慰她说，我一直都相信你，你是个很棒的人，你能挺过来，未来你一定能看清楚的。',
    '是的。如今，年过四十的薛凯琪深谙其道。心如明镜的等级已经登峰造极，她已经能把这些个极具迷惑性的高手天才整得通透——可不是嘛，很多时候，如果只用眼睛去看东西，一不小心就会欺骗了自己。',
    '面前，在公司打工的兼职生向薛凯琪介绍，“这位是Robert，以前是个编曲家。”',
    '哦，他可不只是个编曲家。',
    '薛凯琪和他对视。',
    '他还是个画家、编剧、作家，大脑活跃程度和她不相上下的那种。当然了，他们才不会告诉她这个人编完曲后有一天突然在中国大陆境内被人抓到吸毒，拘留出来后不得不来美国避难，在旧金山开过很长一段时间的观光巴士。',
    '名叫Robert的画家双臂在胸前交叉，很瘦。',
    '她在他的眼睛里看到一个想引起轰动的人，在社会上激起水花就行，形式无所谓。她知道，载体难不倒这颗聪明的脑袋，形式上他样样沾边，油画、音乐、戏剧、电影、书本。',
    'Robert握住薛凯琪的手，“好久不见，阿Fi。”',
    '她知道，平时，他总是展着笑颜假装无害，披着人皮来得到他们想要的尊重和名声，给性高潮起了个好听的名儿叫作爱情。',
    '事后，薛凯琪再去回想，既不是因为她漏看了临时更换的展出艺术工作者名单上有Robert这个英文名，也不是她没有注意到助理Edith给她的语音留言。她想起来了，一天前，Edith一边吃饭一边向发语音她抱怨：Fi，你说，为什么呢？',
    '怎么啦？',
    '“又来了一个，还是那套。”Edith说，“非要整点宣传效应，说是没人看展那不如回家和朋友喝酒或是玩人兽杂交。”',
    '几万年来一成不变，当披着人皮的欲望得不到满足时，转眼就会变成凶残至极疯狂野蛮的一坨屎。',
    '欲望。需求。不论是性欲这类生理需求，还是那点成为名人的社会需求。',
    '你经常都能看见，坐成一圈的品牌方一起绞尽脑汁，到底要怎样包装真相，加点兴奋，加点夸张以求一次噱头。到底该如何为一个正常Omega的胸或是Alpha的腺体编点恐怖新闻吸引起人的注意。制造点痛苦，一点不够，那就发掘更多。一整个房间的人手拉着手，像最后的晚餐里上帝的孩子们一起向耶稣祈祷：',
    '主，求求你，来点惨事吧！',
    '我们不要看一个Alpha一个Omega坐下来理智又恩爱地解决婚姻问题，我们要看Alpha把这个Omega强奸了再标记，Omega意外怀孕再被抛弃！我们不要看没有波澜的和好和拥抱，我们要看他们发怒然后互扇耳光，脱掉裤子干到没力气来下一发！',
    '薛凯琪注视Robert的眼睛。在遥远的青葱岁月，她迷恋过这双眼睛，这个大脑。这颗性感的脑子总知道一些稀奇古怪的东西，让她心动，脉搏都加速。',
    '不过现在，她的心脏依然在动，不过是那种没什么动静地动，你懂的。',
    'Robert有迷人的嗓音、随便一画就生出一幅作品的手。Robert能随便解构任何文学作品，在搞懂一个作家这方面，连伍尔芙和王尔德这类搞脑子的传奇角色对他而言都不在话下。他把书本上的词汇一个个剪下，贴满一面墙，告诉她：我已经搞懂了语言的奥义，艺术的奥义。',
    '少不更事，薛凯琪又怎能不为这一套着迷。',
    '一面墙，密密麻麻的字。太密了，你不眨眼地去看，会觉得这帮蚂蚁们，也就是伍尔芙和王尔德的惯用词们，像是在爬，在动。',
    '“其实伍尔芙没什么神奇的。”那时候，薛凯琪是真把他的话听得很认真，“她干的事就是把仙来客、蝴蝶、紫罗兰、风、星星，这类漂亮的词堆在一起——你听，With Stars in her eyes and veils in her hair, with cyclamen and wild violets——都是些什么没意义的闲屁啊。”',
    '伍尔芙没什么了不起的。',
    '“就这个。”Robert嗤之一笑，“我也行，现代社会有了搜索引擎，收集词汇并且运用。只要有足够的样本，足够的分析，把一堆词拼成个故事，我能干得比这好一千倍。”',
    'Robert无所不知。Robert比AI来得更聪明，脑子转得更快，说的话更浪漫。',
    '人们不喜欢圆满的结局，而Robert知道人们不喜欢圆满的结局。人们喜欢惨事，而Robert知道人们喜欢惨事。',
    '他们握手。Robert握住薛凯琪的手，而薛凯琪想放开Robert的手。',
    '薛凯琪把手抽出来，回答他，“好久不见。”',
    '在青葱岁月，在Robert和她完成标记之前，Robert给她讲的最后一个故事是关于Elizabeth Siddall的。伊丽莎白西达尔。英格兰南部的女孩。',
    '没听说过吧？',
    '可一说到拉斐尔前派画家，John Everett Millais，以及他的作品奥菲利亚，你就会一拍大腿说：我知道这个！',
    '薛凯琪松开了Robert的手，而Robert却笑容不减，可那表情有点艺术家忧郁气质，“我听说你去洗了标。”那语气像是在问为什么要洗掉它。',
    '薛凯琪依然友好地向他微笑了一下，“过去的事，大家就不要再继续反复地讲了，好不好？咱们还有工作需要处理。”',
    '可Robert只温柔地说：我能闻到我的味道，在你身上。你情绪起伏时会有烟熏的味道，你也能闻到，不是吗。你现在就有情绪上的起伏，不是吗。',
    'Robert说：你的语气听起来倒是不怎么快乐。',
    '聪明的Robert阅读了奥菲利亚的故事：也就是以求真实和还原，名为Siddall的模特躺在冰冷的浴缸里供画家画画，以还原奥菲利亚之死的场景。有一天，保暖的油灯熄灭，模特差点冻死，而画家浑然不知。',
    '薛凯琪想起名叫Eric的Alpha，想起那头黑熊一样体型庞大的Alpha。',
    'Robert认为，所以说，如果Siddall，这个名叫西达尔的模特就这么死去，Millais会成名得更快，更早。',
    '毕竟人们喜欢惨事，这桩惨事一定卖得出去。',
    '想过这么些形形色色的Alpha，薛凯琪又想起那个和她一起跪在地上装小黄人的Alpha。',
    '所有的人都满心希望来个谁帮自己成名。如果需要某个在身边的人一命呜呼来搞点新闻，他们也会毫不犹豫地说：快点呀！快点去死吧——因为确实，这才是观众想看的——未婚先孕的单亲妈妈Omega，或是患了睾丸癌和艾滋知道自己必死无疑于是到处传染梅毒的Alpha，要么就是因为没有性冲动的乐趣而四处约炮把BDSM当命来玩的Beta。',
    '奥特曼需要东京被怪兽踩平、全日本的人全都死翘翘才会变身。',
    '那就快点全都死翘翘啊！我们要看奥特曼，而不是那个长得跟我们差不多的人类！',
    '人们喜欢惨事，喜欢大型新闻。',
    '“我比起伍尔芙和王尔德，缺的只是一个机会，一个契机，一个新闻。”',
    '薛凯琪又想起那个在飞机上乱发情的Alpha，想起那个把项圈摘下来咬在嘴巴里的Alpha，想起那个问她会不会进去得太深的Alpha。',
    '“说白了，如果有这么个模特为我死心塌地，我早就成了。”',
    '薛凯琪不接话，Robert也不继续揪着信息素和标记念叨。他告诉薛凯琪，他有了新的顿悟，他从其他人口中了解了她的现状，于是他觉得她会喜欢这个新的顿悟，他已经打算把这个当做下一场展出的主题。通过他的学习和研究和考察得知，要敲开当代社会人们心灵的不是别的，就是她进修多年的爱光正能量，是属于她的课题。',
    '“大爱。”',
    '听到这个词的薛凯琪看向Robert的眼睛，也就是这住着一个想引起轰动的人的双眼，“我听说了，你在这方面是最在行的行家。我相信，我们的合作会很愉快。我们会打造一个无与伦比的爱的传奇，让整个地球的人都搞懂爱是什么。”',
    '就像很多年前那样，Robert又给她讲了莫奈，Claude Monet的故事。他说人们会喜欢这样的故事，也就是Monet在战争期间留在故乡作画的故事。他说这样的故事完美地契合了当代社会人们的需求。',
    '一份无私的爱。',
    '“就是那种献身自我的爱，你可以把它当做美国队长为一个八岁小孩去送死的爱。”',
    'Robert告诉她，别担心故事是什么，好的文笔可以把一些普通的事整得很动人，看看那些搞新闻自媒体的吧，你就知道了。',
    '极有艺术天赋的Robert有迷人的嗓音、随便一画就生出一幅作品的手。脑袋很好使的Robert能随便解构任何文学作品。悟透了一切的Robert轻而易举就能通过拼贴词汇成为比伍尔芙和王尔德更全面的文学究极体。可是现在，你明白搞脑子的聪明有多可怕了，你明白人的胸腔里真的住着一颗心有多重要了。',
    '这个出生在地球上就是为了跟她人生唱反调的Robert还在说话。薛凯琪想起奇怪的Alpha，自称甲方走狗的Alpha。刘恋。唉，为什么呢，为什么偏偏是今天她的好伙伴申请了带薪休假呢，唉。',
    '现在，你明白心里真的有善良和爱有多重要了。',
    '这原是薛凯琪最爱的部分，和仰望蓝天的美国西海岸艺术家们聊聊星星轨迹，聊聊大海能带来点怎样的创作灵感，聊聊长得像熊猫的一朵云。',
    '从早到晚拼命工作的薛凯琪累了，想提早回酒店去搞心理医生常说的冥想那一套了。',
    '包在震动，有电话打进来。',
    '电话那头，Edith问薛凯琪，“Dior在布鲁克林时装展的人事调动名单你看了吗？”',
    '什么？',
    '“我刚刚发给你了，是中午才收到的。还有，你先前发给我的那首歌，Dreams，梦中人为主题的那个……赶工的RFP可能要再改几版。连我都看不下去，就不必给你过目咯？”',
    '真是雪上加霜。',
    '薛凯琪微笑着问Edith，到底谁是谁的助理啊。',
    '“那谁叫你工作排这么满呢？哦！对了对了，LACMA那边也许还是得需要你跑一趟。晚上闭馆之后他们打算开始让工人们开工拉好封锁线，以便于下周着手布置现场了。”',
    '哦，真是雪上加霜再加霜。',
    '刘恋发来消息问她，听起来不怎么快乐的语气是为什么，发生了什么吗。',
    '没什么。',
    '下午五点，Robert带着助理扬长而去。',
    '好吧。好吧。Dior，RFP，LACMA。',
    'Edith问她，忙不忙得过来，会不会太累太辛苦啦。',
    '不会。薛凯琪回答。没关系，没有什么东西能伤害我，别担心。',
    '挂了电话，薛凯琪抬头望去，想找找看天上有没有挂着个形如荷包蛋的太阳。不过天空是灰色的。',
  ]
};