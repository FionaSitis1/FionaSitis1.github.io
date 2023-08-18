import { Component } from '@angular/core';
import { Blog } from '../../blog';

@Component({
  selector: 'app-ch18',
  templateUrl: './ch18.component.html',
  styleUrls: ['./ch18.component.css']
})
export class Ch18Component {
  blog = BLOG18;
}

export const BLOG18: Blog = {
  paragraphs: [
    '在北京，如果刘恋觉得烦了，想发牢骚在上司背后大做文章，机会可以说是源源不绝。毕竟是自己的地盘，想要发泄或者干脆烂到底简直不要太容易。同城玩儿摇滚乐的好朋友听说刘恋被停职察看了，于是想约她出来，深夜三点的酒吧，或是凌晨接近天亮的烧烤摊。',
    '十年如一日玩吉他却收入堪忧的男Beta告诉刘恋，这还算好的，她现下不过是停职察看，他们几个甚至路都没得选，无数种除了玩吉他的选择中，最糟糕的是去给小区当保安——男Beta一贯的可怕结局。说完，他告诉刘恋，于文文最近接了演出，要回来了，赵梦唐诗逸也来。他问她要不要去看。刘恋一边回手机消息，一边回答说不觉得自己有心情。',
    '飞机于洛杉矶国际机场起飞时，刘恋还在看和薛凯琪的聊天记录。薛凯琪于十分钟前给她发来语音，说一路平安，要好好照顾自己。',
    '刘恋在想，薛凯琪不知道的是，每次乘坐飞机，在起飞和着陆时，她会幻想飞机失事时残骸会如何四溅，是否能插进控制塔台，或者威胁到地勤工作人员的生命。她没对着薛凯琪讲这些，只是因为她能预料到这甜妹会用何等可怕的关爱猫狗语气对她说：刘恋刘恋刘恋，你不可以想这些坏事，你要往好了想，你要想在天上飞是一件好浪漫的事……云云。',
    '这样的语气太可怕，不因为别的，只因为她刘恋受得了假性标记和天然鸡巴激凸，却完全受不了这个。这样的语气如果堆积成山，就会引发她身体方面的各种毛病，其中包括但不局限于：心跳加速、脉搏过快、嘴唇干涸、血液于耳朵或整颗脑袋附近沸腾。',
    '接到停职察看的通知时，刘恋没疯，倒还怪平静的，预料之内。都说了，Jackson，男Beta，这个对世界没有情感方面知觉的男Beta发起疯来和穿普拉达的女王这部电影里的白发魔女有得一比。刘恋没什么动静，而真正疯了的是Wilson。坐在咖啡厅还在骂Robert的男Omega不说话了，把收到的群发邮件反复看反复读，正着看，倒着看，不信邪于是输入Google翻译，翻译成中文看。看完了之后，Wilson不发火也不皱眉，就这么抬起头来盯着她。',
    '刘恋想说恭喜，你现在学会印度圣牛的平静了，步入疯魔的第一步。',
    'Wilson说，“他们他妈的不能这样。”',
    '刘恋觉得Wilson快哭出来了。',
    'Wilson哇的一声开始鬼哭狼嚎，口齿不清地骂说资本主义Jackson人面猪心，两面三刀卑鄙下流就知道动不动搞上下级这一套……最后嗷嗷叫的Wilson稀里糊涂地冒了一句：凭什么是你回北京啊！这不公平！',
    '刘恋被他逗笑了。她拍拍Wilson这男Omega的脑袋安慰：世界上本就没有公平。我回去了你要多保重。',
    '不过，刘恋没想到的是真正疯了的除了Wilson还有一个人。',
    '刘恋习惯在起飞和着陆时幻想飞机失事，也习惯在万丈高空想象，如果一只鸟被吸进涡轮导致机翼螺丝松动，那么也许会造成空难，毕竟门会被机翼碎片击中然后爆开，这样的话，坐在离逃生出口近的位置究竟是好事还是坏事？是否坐在门边的人会死得更早？——不过想归想，刘恋从不对着薛凯琪讲这些。',
    '处理完了鬼哭狼嚎的Wilson，刘恋打算回酒店了。回去，收拾行李，挑一班最早价格最合理的飞机回北京，毕竟因公出差的酒店费只包到明天。以及，刘恋觉得自己得想想，怎么跟长颈鹿女士聊聊呢，该从什么地方开始聊，聊些什么呢，总不能聊北京到香港的距离约为两千公里单程飞行时长为三小时吧！',
    '薛凯琪是在天黑前一脚踢飞她的门闯进来的。',
    '开门时，刘恋还没看清薛凯琪的脸就被撞得差些飞出去。薛凯琪的额头磕到了她的下巴。不管。薛凯琪的骨头撞疼她了。不管。薛凯琪的眼泪又蹭到她身上了。还是不管。最后刘恋不得不开口。',
    '“凯琪。”刘恋叫道。',
    '薛凯琪的双臂像是放大百倍后的甲虫钳子，钢化版本，环抱住她的时候几乎能让她肺部呼吸困难，就这么大的力气。',
    '“Fi。”刘恋嗯嗯地喊疼了两声，然后装可怜，小声叫唤：薛凯琪，我要被勒死啦。',
    '薛凯琪的声音是哭过之后的沙哑。',
    '哭过的薛凯琪问刘恋：“怎么会？”',
    '刘恋笑了：没办法呀。我根本不懂艺术，根本不是艺术的孩子。我开除了一个Omega小工，这样的行为其实不大符合政治正确。我曾经跟各种奇形怪状的人谈恋爱还大拍床照，行为不检点扣分扣到负数。',
    '她这么说了，任谁都会笑，可薛凯琪没反应。埋在她怀抱里的薛凯琪什么都没说，开口说话时反倒有那么点印度圣牛的平静的意思。',
    '薛凯琪说，“为什么？”',
    '刘恋无可奈何，于是补充：大家不喜欢我呀。很多人都觉得，我就是个精致利己利益至上没有心没有底线毫无共情能力满身爹味儿不在乎Omega死活媚Alpha的滥交走狗。',
    '薛凯琪肯抽离开来仰起头看她了，可刘恋却觉得大事不妙。因为薛凯琪正在以同一种印度圣牛的平静目光注视着她，不过在流泪。刘恋也盯着薛凯琪。不过她心里想的是，Wilson可以疯，她接得下来，问题不大；薛凯琪也可以疯，在诊所里那种疯法完全没问题，她接得下来，问题也不大。',
    '但薛凯琪要疯也千万、千万别是印度圣牛的这种疯法。',
    '在接下来连续几天睡不着觉的夜里，刘恋经常会回想薛凯琪问的问题。薛凯琪问她为什么不联系自己，问她为什么所有人都知道了最后才轮到自己。都问到这儿了，刘恋大概听懂了，薛凯琪是在询问她们之间是不是出现了名为信任危机之类的问题，毕竟爱的小岛原住民给她开过一次门，和她合力推过一次巴别塔。她们相信过彼此一次。',
    '刘恋想说话，“我没有故意——”',
    '薛凯琪沉默地看着她，她做不到随口扯谎。',
    '刘恋组织措辞，“我只是……”',
    '我只是不想对任何事情抱有超过安全基础线的期望，毕竟期望越大，失望就越大。我害怕和人的关系变成抛物线，从不盼着别人把我当回事，所以想骂我没有心没有底线毫无共情能力满身爹味儿不在乎Omega死活媚Alpha才能随便。我没想着我的天塌了还得要谁谁谁来替我哭丧，兴许人家还觉得我这点儿破事儿跟连环杀人案比起来根本算不得什么呢？地球上多得是饥荒非洲儿童和失业底层工人，暂且轮不到我这么个身高174看起来很高身体很好还占尽性别优势的Alpha来博你这圣母的同情——刘恋全想到了，不过没说出口，因为印度圣牛版本的薛凯琪太吓人，她怕一不小心就说错话。',
    '薛凯琪沉默地紧盯着她的眼睛，最后只哭着说自己不喜欢这样。',
    '刘恋绝望地笑了。看起来稀里糊涂、实际上很有逻辑的薛凯琪一向如此，看人时眼睛像两颗小小的水晶球，总是什么都读得出来。但她觉得薛凯琪在这件事上看错了。怎么会呢？她怎么可能和薛凯琪产生信任危机这种低级问题。她连命都可以随手送给长颈鹿女士。信任？哈哈。世界上没有人会不相信薛凯琪。',
    '她从没不相信薛凯琪。',
    '刘恋抚摸着薛凯琪留在她肩颈上的牙印。薛凯琪担心她的伤，问她要不要去看医生，薛凯琪担心会给她留疤，而她从头到尾压根就没想到留疤这一出——她简直不能更相信薛凯琪。',
    '她不相信的是她自己。',
    '飞机于北京首都国际机场落地时，刘恋关掉手机的飞行模式，微信消息铺天盖地，不过找不着薛凯琪。刘恋点开来向上滑，最后停在一句薛凯琪的语音消息上。洛杉矶至北京的十三个小时飞行时间里，她听过这条语音不下十遍。',
    '“刘恋。”恋字拉得很长，刘恋想象着薛凯琪发音时舌头缠绵地在口腔里滑，“你回家以后要好好休息，要对自己好一点。”停顿了一秒，把这一秒视作薛凯琪正在组织语言，所以接下来这句话应该会很重要。“你要多爱自己一点。”',
    '一遍结束后，刘恋再点开一次。',
    '“刘恋——你回家以后要好好休息，要对自己好一点——你要多爱自己一点。”',
    '再一次。',
    '“刘恋——你回家以后要好好休息，要对自己好一点——你要多爱——”',
    '“刘恋——你回家以后要好好休息——”',
    '“刘恋——”',
    '“刘恋——”',
    '“刘恋——”',
    '薛凯琪总挂在嘴边的“多爱自己一点”，若是放在平时网上到处乱发心灵鸡汤的营销号那儿，刘恋绝对会逮着这些个躲在屏幕背后敲键盘实际上脑子空空的大垃圾乱骂。这些低能儿唯一干的事情就是发狗屁不通的“爱与自由”，当这个彻底疯狂的ABO世界一边射精一边滥交时，这些他妈的营销号就乘着这样那样的东风P个图发屁话，以为自己特别浪漫特别伟大，压根不明白自己实际上只是坐在黑漆漆的房间里，一边自慰一边靠卖枕头挣钱。',
    '刘恋退出和薛凯琪的聊天界面。托这些傻逼营销号的福，现在更好，离开了薛凯琪本人，如今她更听不进去这句话了。',
    '刘恋受够了这样的屁话并非毫无缘由。她的工作，设计；她的兴趣爱好，创作；她的人生实验课题，爱情。这三者的共同点之一就在于，在这三行，人总能撞上初中没毕业或是在中专学纺织的评论家。这感觉像是苦修了一辈子厨艺的厨房工作者遇见在野鸡大学餐饮科毕业的美食评论家——你花了一辈子去研究如何把莴笋切得和丝绸一样细，每天连续切八个小时，三百六十五天不停歇，而这些他妈的连切蘑菇都无从下手的野种评论家，“爱与自由”的营销号却胆敢写屁话说你的莴笋切得不够人性化。',
    '人，要“爱自己”。刘恋笑出声。营销号们扯这词儿时，语气像极了在批评厨师擀的面不太有嚼劲，仿佛自己的意见是神的旨意。',
    '刘恋——你回家以后要好好休息，要对自己好一点——你要多爱自己一点。',
    '若非是货真价实的薛凯琪在她生命中一闪而过，刘恋估摸着自己大概会恨透“爱自己”这词儿。',
    '微信里频繁出没的人是同城玩儿摇滚乐的好朋友，拖着几十把吉他飞回北京的于文文，操劳她心理和生理状况的赵梦，约她出去吃串喝酒看舞剧的唐诗逸。在北京呆着无所事事的这几天，刘恋时不时会点开与薛凯琪的聊天界面。白天，薛凯琪给她发来一个泡面的短视频，给她展示Edith的厨艺。她没有回，因为看着这碗泡面时，她脑子里想得起的只有和身着浴袍的薛凯琪坐在一起时的快乐——当时的快乐。之所以叫作当时的快乐，是因为如今这样的快乐只会引发她心脏至大脑的痛觉。',
    '深夜，在酒吧里，第一个注意到刘恋时不时就会对着手机发呆揉眼睛的人是赵梦。赵梦把刘恋揽过来，说哎呀，甭理那个他妈的弱智Beta，大不了不干了，咱找个更自由的活儿。',
    '刘恋想起薛凯琪在电话的另一头问：“那你想要过怎样的生活，做些什么呢？”',
    '她的生活。一直以来她的生活都是一张全能六边形的网。工作、兴趣爱好、人生课题，从来都面面俱到。斜杠青年对玩儿平衡这一套不能更在行。',
    '于文文给刘恋出主意，想帮自己的朋友。她问刘恋有没有考虑过自己出来干，单干，自由职业那一套或是出国看看，别去那些个搞阶级斗争形式主义的大厂。',
    '唐诗逸问刘恋和那个叫Robert的Alpha到底发生了什么。刘恋笑了出来，就全说了，甚至干脆把包括Wilson说的“Robert这坨屎旋转爆炸着四处喷射弄脏地球这个湛蓝星球”之类的所有发言都讲了一遍。她是真没想到一个男Alpha居然真能引起三个女Alpha的公愤。',
    '她们不提陈清銮。她们逮着Jackson和Robert一通乱骂。',
    '刘恋抬起头，看头顶五光十色的灯球转着，酒吧斑斓的光照在每一杯酒上。',
    '没人说薛凯琪。她们说这工作真不是人干的，全地球飞来飞去最后就得了个处分。',
    '刘恋知道，都不用于文文和赵梦讲。她太熟悉这个感觉。她太害怕这个感觉。人们管这个感觉叫作“失落”，或是“心碎”。爱情实验家则称它为“爱情之痛”。这种握住一把沙的遗失感老是在她的生活中随机出现，像火灼烧过的钻子，插进脑袋或是心脏开始以非常缓慢的速度旋转搅动。',
    '于文文和唐诗逸走过来抱刘恋，于是她们三个女Alpha的气味混着酒的味道搅在一起。于文文给她递酒，说别不开心啦，犯不着对着一傻逼生气，大不了改天咱几个去把那个他妈的Robert揍一顿。',
    '于文文的手就搁在她的腰上。',
    '刘恋想起的是和薛凯琪的最后一个拥抱，以及和陈清銮的最后一个拥抱。陈清銮曾反戴着鸭舌帽，临走前拥抱了她一回。许多年过去，如今接着轮到薛凯琪。酒店的大堂里，她正在等车，薛凯琪戴着白色鸭舌帽从电梯里出来，绿色的背心，黑色的裤子，活像十五岁的初中生。于是就像当初评价陈清銮像个海盗那样，她笑了，说薛凯琪你简直像个学生。',
    '薛凯琪没理她，嘴里说着“我陪你等”，手圈住她的脖子，把她搂下来。像暂别的爱侣临行前的拥抱那样，像她们做爱时那样亲密无间的肉体碰撞那样，薛凯琪把自己送进她的怀里。她回抱住薛凯琪的两只手在短暂的几秒内有了生命，自作主张脱离了她的控制，妄图于几个瞬间重温过去的时光。',
    '“你要多爱自己一点。”薛凯琪说。',
    '哦——又来了。',
    '“爱自己”。',
    '“爱自己”。',
    '“爱自己”。',
    '当年，和陈清銮正式分居的那一天，说拜拜时她后颈上头被假性标记一万次的腺体连同她的心脏一起痛得她整个人差点歇菜——得亏有了先例，这一次她不痛了。她的心在水泥地上猛撞过了太多次，血管撕裂导致一部分肌肉肿得变形还流血，“离开薛凯琪”这点儿小伤又能算得了什么？',
    '唐诗逸对刘恋说，“下周末咱几个出去一块儿转转就好了。”',
    '刘恋努力克服身体上下所有的痛微微一笑，说：你看看我这精神状况，下周——下辈子吧。',
    '她真的已经彻底回北京了。',
    '彻底离开薛凯琪的第五天，凌晨六点，刘恋从酒吧醉醺醺地回家，像个得了绝症的人那样一头栽倒在床上，微信列表消息就跟外面的夜一样静。这就是北京，这就是她大半辈子的生活，和薛凯琪的环球旅行像极了一次超级玛丽冒险，而如今游戏结束，她又回到了自己的小巢。',
    '酒精在胃里烧，头又晕又痛，刘恋躺着，都快忘记她和薛凯琪实际上有太多遗留问题没有说清楚：她们现在到底算是什么？她们算得上好朋友吗？还是说只是工作伙伴？她们还会再见面吗？她可以约薛凯琪见面吗？薛凯琪什么时候会回香港呢？回去了之后是什么打算？会来大陆吗？工作还会那样忙吗？未来的打算是什么？',
    '她的未来薛凯琪还会在场吗？',
    '手机的屏幕上是她的微信，和薛凯琪的聊天停留在半天前。',
    '兴许压根儿就没有谁会在场。',
    '刘恋睡着，醒来时完全不知道自己身处何处，现在是几点。',
    '话说回来，“多爱自己一点”为什么重要来着？',
    '刘恋听见自己安静着的手机响了起来。',
    '薛凯琪是在Edith端给她一碗加了荷包蛋的泡面时突然醒来的。',
    '她刚刚趴在床上，已经睡着了，手机里微信的聊天界面也跟着熄灭。其实也还是老一套，她常年以来的生活，给公益组织的宣传广告必须要在某个Deadline前完成审核、某个日期之前得要确定音乐节为女同性恋群体发声的舞台灯光、与她名下品牌Spiritunus加大码服装设计的一些Meeting需要她出席……无异于她几十年生活的哪一次工作。',
    '“你醒啦。”Edith说，“我给你热了泡面。”',
    'Edith，一直爱着她的助理大约已经有十年没给她打杂做过泡面。来往的乙方形形色色，不过共通之处是一个个都爱极了跟在她后头做讨好类的打工服务，不求别的，只求她心情好。她成为过很多人不得不完成的任务。这些人随叫随到，不用叫也到，他们的任务就是在她困的时候让她赶紧睡，在她饿的时候让她马上饱，开车当司机载她回家或是把泡面一秒内丢进微波炉里这类事情，他们简直不要太在行。',
    '董事会的许多人在路过她时会感叹，她真是一个被好多人爱着的天使。他们认为，成为别人不得不完成的任务等于被爱。',
    '薛凯琪盯着Edith端给她的东西。她看看里面的东西，又看看Edith，疑惑的眼神像是在问：这是什么？',
    '一个黄白相间的不明物体。',
    '一个荷包蛋。',
    'Edith，薛凯琪的半个监护人，过去的时间里Edith长期做泡面加热员这份兼职。这份兼职还通常在晚上出现。而后来，有了那些个迫不及待为薛凯琪鞍前马后的跑腿工，Edith自然而然退居二线。现在鞍前马后的跑腿工之一刘恋走了，于是这份差事Edith则自己顶上。',
    '用九百瓦的微波炉打热三分三十五秒，状态刚刚好，外层凝结成固体，内部还呈松软的半湿润状态。没什么不对的。',
    '薛凯琪盯着这个荷包蛋，Edith则盯着这个薛凯琪。过了好久好久，Edith意识到薛凯琪在看什么了，于是一巴掌拍上薛凯琪的脑袋，把人打醒。',
    '“看蛋干嘛！现在口味变啦，不喜欢了吗？”Edith说：你以前一直很喜欢的啊——你看，我真是太爱你啦！做泡面都要专程去给你买鸡蛋，其他人都不知道这个。Edith原本是想等薛凯琪吃完再讲工作上的事，手机响了，她去看，是Wilson发来的Dreams进度。她觉得薛凯琪看了应该心情会好点儿。',
    '“你看看这个，我觉得很漂亮。你……哎呀，Fi？怎么了？怎么哭了？”',
    '面对着一碗泡面荷包蛋的薛凯琪哭得很大声。',
    'Edith在薛凯琪床边的小沙发上坐下，细数近来让薛凯琪不开心的一件件事。她打算从头解决起，于是给薛凯琪讲了Robert的事。Edith让薛凯琪别担心了，都犯不着薛凯琪发脾气动手，Robert这个家伙把工夫花在和投资商秘书调情上，把投资人老头搞生气啦，要相信恶人有恶报的嘛！说完，Edith给薛凯琪看了由Wilson接班后传来的Dreams进度，她说挺漂亮的，接着问薛凯琪怎么想这一版方案。',
    'Wilson发来的几版方案的调色板分别是玫瑰红、热带橙、浅藏青……具体还有什么记不得了，总之没有初版的粉配紫。',
    '薛凯琪哭得更大声了。',
    '彻底意识到问题所在的Edith终于讲到了管用的信息。',
    '“你还是更喜欢刘恋的那版吗？”Edith说，“我们可以request他们修改的嘛。”',
    '薛凯琪想笑了。Edith认为“他们”想得出刘恋脑子里的东西。就像全世界的人都觉得她被太多人围着转了一样。他们认为成为别人不得不完成的任务等于被爱，而她这甲方一直都在成为别人不得不完成的任务，等于说她被许多人爱着。这时候，薛凯琪无端想起爱情实验家递给她自己做好的方案时露出了一个微笑，这个幽灵一样如影随形的Alpha幽深的唇膏闪着光，然后对她说——如果想好了，记得留给一点时间，我想要你的时间，小刘一定为您服务啦。',
    '刘恋对她说，“不能是为了取悦人表演。”',
    '在回答Edith之前，她都还没回答刘恋自己想好了与否。',
    '“要为被人永远记住而演。”',
    '其实早在刘恋说出这句话时薛凯琪就想好了。她认为自己在等的就是刘恋。RFP，request for proposal，需求建议书。这份RFP，这个项目在等的就是刘恋。可是她没说，直到现在都没能亲自说出口。',
    '“你知道吗？”薛凯琪一边擦眼泪，一边对Edith说，“我老是在想，我觉得我没有做好。”',
    '其实我可以再多分一点时间给她的。我本来可以再多保护她一点的。我能够想到她很不安，一直在担心。我怎么没有多照顾一下她，多陪她一点？我能做得更好，但是都没有做，然后就让她遭受不好的事情，就这么被赶走了。',
    '薛凯琪一边擦眼泪，Edith就一边心疼地给她递纸巾。Edith问她，那要怎么办，有没有跟刘恋好好聊开过这个，这么憋着不好，她们马上就要回香港，一呆就是很久。薛凯琪没有回答，因为她又开始想另一个刘恋了。她在想这个爱情实验家在听了巴别塔的故事后沉思的模样。她觉得爱情实验家不笑也不说话时太严肃了，氛围不好，她就学她，装思想家哲学家，直到爱情实验家发现她的小动作，然后她们心照不宣地哈哈大笑。',
    '爱情实验家来自远方，而非她的家香港。所思所想和她不太一样的爱情实验家想给她分享不同的视角和心得，于是问她：你知道爱情为什么伟大吗？',
    '住在爱的小岛上很多年，薛凯琪怎能抗拒由“爱”这个字组成的“爱情”一词。',
    '为什么？',
    '同一个爱情实验家应许承诺来了诊所，把手交给了她。她将要跳一次楼，是非常危险的活动，许多人害怕和她一起进行这样的活动。她十分体贴，从不勉强人陪同。仪器搬来，会在电锯惊魂拍摄现场出现的针、针筒、纱布等等一应俱全，这时候换谁都该拍屁股跑路了。不过爱情实验家倒是没有松手。',
    '“因为燃烧欲望产生的力量同样足够让人去推倒心中的巴别塔。”',
    '用针扎进Omega后颈的腺体，这个跟朝Alpha的腺体上抹液态氮没有区别，总之就是用碱烧这类化学反应把人痛得死去活来。说不害怕这样的痛是假的，带上狮子座的勇气也是白搭。薛凯琪第一次做这个治疗是在香港，大医院，需途径重症部门才能到达治疗室。她路过一大帮刚分化的病怏怏的小孩，Omega母亲快死了，Alpha爹不知所踪，于是整个走廊都是臊味醋味和快死了的信息素。薛凯琪记了这样的信息素很久很久，久至后来的每一次治疗都总是想起这样的味道。',
    '爱情实验家不松手，也不拍屁股跑路，盯着她的眼睛亮亮的，像闪烁的星星。',
    '薛凯琪记得自己把牙齿埋进刘恋的肩上时忽然闻到了海的味道，刘恋的血像被打翻的盐罐洒出的盐，沿着她的舌头走。Alpha的腺体近在咫尺，信息素铺天盖地地朝着她爆发来。在咸湿的海底，她闻不见自己，于是在治疗结束之后她向刘恋抱怨：好咸好咸的咸鸭蛋，咸得我被呛到啦！',
    '对于薛凯琪的无端指控，刘恋总是找不着北。',
    '如今，薛凯琪却总是在想抱怨了很多次的咸鸭蛋的味道。她不得不怀疑，如果自己不为此做点什么，是否会错过彻底洗刷记忆的机会，彻底和臊味醋味快死了的信息素说再见的机会。',
    'Edith问薛凯琪，要不要在回香港前去见刘恋一面。',
    '下午，薛凯琪检查微信信息时刘恋还没有回复。她留语音消息给刘恋，问刘恋可不可以跟她voice call聊一聊。北京时间天已经大亮，这条消息于三个小时内依然被置之不理，薛凯琪不得不直接打过去碰运气。接通时，刘恋发出的迷糊呻吟像刚从麻醉中醒来的小猫。',
    '刘恋完全不知道自己说了什么。',
    '这就是宿醉。整个脑袋的每一寸肌肉都伤痕累累，心脏却跳得很快，灵魂像飘在天上，对看到的听到的一无所知。',
    '刘恋心想，自己这次是不是真快喝死了。',
    '“什么河？”',
    '喝死。',
    '“合适。”',
    '喝死。喝。喝水，喝。死。去死的死。',
    '在床上，刘恋翻了个身，原本趴着的身体在床上瘫开，成大字状。最近都是如此，临近天亮遍体鳞伤地回家，睡整整一下午。晚上再出门，听狐朋狗友骂Jackson和Robert是大傻逼。',
    '“你还好吗？”',
    '嗯。',
    '“刘恋，”薛凯琪声音十分平静，“你是喝了多少？”',
    '操。',
    '刘恋把眼睛睁开了。',
    '“我原本是有事情想和你商量。”薛凯琪说，“这边的事情已经稳定下来了，我的机票是下一周直飞香港。回去之后，我有一段时间不会再工作，因为Daddy最近身体不好，Mommy眼睛也需要做手术，我想留在香港多陪陪他们……但是，在这之前，我想先解决一些别的事情。”',
    '刘恋紧盯着天花板，想让它停止旋转，这样她才听得清薛凯琪到底讲了些什么。',
    '别的事情。',
    '“我想，你走得很突然，还没来得及拿回寄放在我这里的东西，我们之间的账也还没有两清。”',
    '寄放在薛凯琪那儿的东西？刘恋眨眨眼。账没有两清？',
    '“你先好好休息。”薛凯琪说，“等你清醒了咱们再讲。”',
    '一天之内，薛凯琪给她发来了大段的语音，每条都长达59秒。薛凯琪问了她接下来这段时间有没有其它的安排，是否有外出旅行或是回成都的家的打算，工作上有没有更多的变动，然后问她住的公寓在哪，是否有一个或多个室友。',
    '刘恋盯着屏幕，正想着自己到底又欠了薛凯琪什么东西，而薛凯琪到底要算什么王母娘娘等级重要的账。',
    '新出现的文字消息将上方的所有语音消息顶开。',
    '我要来北京见你。',

    // Add more paragraphs as needed
  ]
};
