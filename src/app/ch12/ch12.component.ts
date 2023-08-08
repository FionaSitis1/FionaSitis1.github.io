import { Component } from '@angular/core';
import { Blog } from '../../blog';

@Component({
  selector: 'app-ch12',
  templateUrl: './ch12.component.html',
  styleUrls: ['./ch12.component.css']
})
export class Ch12Component {
  blog = BLOG12;
}

export const BLOG12: Blog = {
  paragraphs: [
    '这肯定是出了点什么状况。',
    '刘恋一边看手机锁屏的时间，一边计算，从机场到市中心的耗时为X。对面翘二郎腿啃炸鸡的赵梦有点不耐烦。',
    '“所以，这就是你扭捏半天非要我从洛杉矶转机还来机场请我吃鸡翅的原因？”赵梦问她，“就想我帮你问你的暗恋对象什么时候回香港？”',
    '不是暗恋。刘恋纠正。只有没见识的幼儿才会整暗恋那一套。',
    '“好，好，好，随你怎么叫吧。嘴长你自己身上，你咋不去问呢？”',
    '刘恋告诉赵梦，长话短说，其实也没什么理由，不过她的确感觉薛凯琪好像有点儿不高兴她，她可不想搞不清楚状况还去招惹薛凯琪。',
    '希望别是出了什么紧急状况。',
    '“啊？不是吧，刘恋，不是吧。啊。”赵梦念着。',
    '除了从机场到市中心的时间，还有工作。Wilson在给她发消息，对着手机发脾气的刘恋没空理赵梦的废话。她只是想谈个恋爱，希望上天别给她出什么紧急状况之类的岔子。',
    '“你是怎么做到连圣母都能气死的啊。”',
    '对，薛凯琪就是这样入侵她的生活的。这个只见过薛凯琪不超过三面的赵梦已经把薛凯琪归类于好人，把她归类于坏人。不为别的，就因为见着薛凯琪的第一面时薛凯琪心情很好、笑容很甜、为人很开朗，薛凯琪知道了赵梦是她的好朋友，于是请赵梦吃了意餐厅里的招牌菜。',
    '“你到底是咋回事儿啊？”',
    '赵梦歪着头扫视刘恋，“这不像你谈恋爱啊，一副扯花瓣的丧样。被夺舍啦？”',
    '她知道，她知道，她正在爱上薛凯琪，早不仅于“喜欢”二字，早已远超图个刺激的层次，早就不只是当初对着陈清銮的那一套自我感动的自我牺牲。',
    '这些事神经大条的赵梦不清楚。',
    '刘恋不想缠着赵梦讲哲学。这可真是对牛弹琴。于是她讲了被上司Jackson骂得狗血淋头的破事，还有陈清銮就在附近一事。她说现在已经不仅是Wilson知道了，就连她公司的清洁工都知道了有个人叫陈清銮。她是真害怕他们灵机一动就去网上搜索这名字。',
    '赵梦说哦哟我们恋子知道要脸皮啦。',
    '刘恋咬牙切齿地微笑，“闭嘴吧你。”',
    '她最怕的压根就不是什么她和陈清銮的老照片害她丢脸，而是她公司里的八卦精。这群闲得无聊、精神活在封建时代脑干不健全的婴儿会把陈清銮的账号翻个底朝天，然后传阅，然后以造谣她是媚A走狗为乐，然后说不定她就会被上司叫办公室里去，不仅因为她在例会上的作为，也因为她才刚刚开除了一个Omega小工，而她的行为并不符合政治正确，再然后，也许那些个床照会传到薛凯琪那儿，更也许，她会被调走，或干脆失业。',
    '“你的学妹，那个Omega，你有向她解释吗，关于为什么你批准她的离职。”Wilson问过她，“当然，如果解释，她会以为自己很重要，还有戏。但如果不解释，她会恨你。”',
    '那就恨我吧。',
    '“你是人家的爱情呢，她需要你。”',
    '不。刘恋哈哈一笑。她需要的是根腺体。',
    '我是流水线上塑胶腺体里的其中一个，她恰好看中了我而已。给她看我的情感往事，她就会去物色另一根。',
    '两只手都在抓头发，连续性失眠的脑袋里刮着飓风。刘恋觉得烦人。这就是失眠，抓头发无法缓解心跳过速。而赵梦又问了她一遍，咋啦，再抓头发要秃啦。',
    '又没什么大不了的。',
    '于是刘恋就干脆朝着赵梦全讲了。',
    '和陈清銮在床上纠缠的她并非薛凯琪和赵梦和Wilson认识的那个她。',
    '如果是她的老朋友，就会记得她长期顶着两个大熊猫一样黑眼圈的时光。那样的造型就是拜上下班长达两小时的通勤所赐，拜爱情所赐。她估摸过，两小时通勤也就罢了，她绝不会继续告诉自己的好朋友们，她打算兼职为自己心爱的Alpha建立淘宝店，考虑联系经销商转行卖泰国佛牌。',
    '他们会觉得她疯了。',
    '如今，赵梦在听完她打心底准备卖佛牌的遭遇后评价：说心里话，真不是学历崇拜，我都觉着你对不起你们北大，养出来这么个白痴。',
    '所有人都会觉得她疯了。',
    '恋爱长跑因假性标记出现点小摩擦时，刘恋想过这码事——在性交这方面，不能怪陈清銮不开心，其实她该建议她爹妈把她生作一个Omega，这么一来说不准她和陈清銮就不会屈从于这个彻底疯狂全面滥交的ABO世界了。她们会是天作之合，她们的爱情会一尘不染地走向永远。',
    '她从没打算清算过这笔账。',
    '现如今，她却要找这个不开心的陈清銮麻烦了。她要建议这个把她们床照当名片到处乱发的姐们儿对她高抬贵手。',
    'Ins消息框里头，陈清銮说可以和她打个视频聊聊天。',
    '夜里，刘恋领着Wilson继续去了市中心举办的“普世和平”慈善会，去接薛凯琪下班。自打她在梦中人策划上整了那么一出之后，Edith干脆把接送薛凯琪的活儿全塞给她了。原本放在平时她大为乐意的一件事，如今她却觉得有点累人。',
    '整个晚上，刘恋不断地数着，数着她和薛凯琪之间隔着的那一切：除了不开心的陈清銮，还有Robert，还有很讨厌她的资本主义走狗。叹气。不止这个，还有薛凯琪患上的Alpha恐惧症，还有她紊乱的发情期。太多了。北京到香港的距离约为两千公里，单程飞行时长为三小时，来回六小时。累人。怎么就这么多呢。',
    '薛凯琪还没下班，刘恋就接到了陈清銮的来电。Wilson被她撵下了车去，而三分钟的视频通话里，陈清銮问她是不是找着了新的下家。',
    '下家？',
    '可以理解，她这样的人，对于“如果有一天你的爱人出轨绿了你”，她的回答是笑嘻嘻的一句“那就绿回去呀！”。每一任与她产生交集又甩手走人的性交伙伴都评价她像一只凭喜好活着的动物，恋爱游戏里那个丧尽天良从不在乎他人死活的坏人。不过，这类阴阳怪气的评价从陈清銮嘴里讲出来就有点儿奇怪了。',
    '陈清銮认为薛凯琪是她的下家，新到手拿来操的真人芭比之类的。',
    '下家。',
    '当时，她思绪飘在天上，听不太懂这个泰国人在装哪儿的地方口音。视频里，陈清銮的胳膊从T恤袖子里伸出来，打理得很光亮的肌肉硬得比她像话。这个老是标记她弄着玩儿的Alpha笑了，看见她开心极了。因为自打认识了薛凯琪，她的朋友圈已经连续几月杳无音讯。这不像她。',
    '陈清銮说还以为她挂了。',
    '多谢担心。',
    '刘恋微微一笑，告诉这个Alpha说，一个医学小知识，发情期紊乱就跟月经痛经一样，痛得让人想死但并不致死。',
    '陈清銮倒没把这个医学小知识学进去。',
    '电影专业的陈清銮曾告诉她，用叙述者的视角去看待一个生命，分手离婚这种东西就会变得像连续剧。童年，前传。生个孩子，续集。以前的以前，她时常能听见陈清銮在电话里对人说什么“淡出”、“快进”、“闪回”……云云。而现在，陈清銮问她，怎么突然想着要删掉那些照片了，那些都是她的过去，她的故事，很精彩也很宝贵。',
    '哇哦。刘恋就要脱口而出。合着我在你这儿是个故事呢！',
    '算了。',
    '行吧。刘恋说。我也有留着前任东西的怪癖，看在这份儿上，咱俩一比一扯平，希望留着床照能让你开心。',
    '坐在副驾驶里头，陈清銮都把电话挂了好一会了之后刘恋还是没动。她看玻璃。她的脸可真平静，就跟印度高速公路上横着走的印度圣牛一样，对前后开得飞快能把她肠子都撞出来的极品飞车毫无反应。',
    '这肯定是出了点什么紧急状况。',
    '刘恋摸了摸脖子后面的腺体。她记得薛凯琪说上面有齿痕，都成疤了。现在，它好像有一点肿，在抱怨她跟陈清銮的对话搞得它不舒服有点痛。她没理它。因为她正在想，还好，还不赖，至少她那人神分离的生殖器没他妈的在和陈清銮视频时自动硬起来。',
    '刘恋是被Wilson从幻想小世界里拉出来的。',
    '她已经三天没睡好觉了，脑子像被开了个洞。现在更好，陈清銮这玩意儿也是实在厉害，就这么来回两句话，她心脏也被开了个洞。',
    '被赶下车的Wilson敲了敲她的车窗。',
    '“他找你。”',
    '哦。',
    'Wilson搞不清状况，压低声音问刘恋，“你俩啥时候关系这么好的？你都不怕甲方发飙吗？”',
    '我草。',
    'Robert向他们打了招呼。',
    '“我只占用你的几分钟。”他看看时间，“阿Fi快来了。”',
    '一开始的时候，刘恋是计划自己该以某种火冒三丈的方式出现在这个人面前，用尽毕生所学只求一次看起来还有点幼稚的胜利。天地良心，如果不是面前老立着个薛凯琪圣母，她早就这么做了。',
    'Robert Fan。',
    '“我喜欢你的理论。”于是这个人终于把话挑明了说，“你很有才华，阿Fi很有眼光。”',
    '刘恋还在不断地想：昨晚我啥时候睡的？我睡觉了吗？心跳过速是否意味着我没睡？而面前这个Robert还在夸她，告诉她，她已经顿悟了市场和人心，在这方面，他们两个Alpha是同类，他们都有照相机一样的记忆力和聪明的头脑。',
    '“阿Fi回香港后，你要不要跟我们合作？”他继续道，“她要消失很长一段时间，但我们的展还会开到巴黎、米兰……我们的概念很容易就能流行起来——”',
    '谁要消失很长一段时间？',
    '刘恋把眼睛闭上了一小会儿。',
    '这个甲方Robert继续说着，说的还是先前跟心地善良的薛凯琪讲过的那个故事，大爱的故事，莫奈的故事，这个怀揣着献身自我的爱的印象派画家在战争期间留在故乡作画的故事。他依然总结说这样的故事完美地契合了当代社会人们的需求。',
    '差不多总是会这样，总有这么一类脑子发达的人喜欢这么做，就是把自己生活中故事汇集出来的歪门邪道说给什么人听，而且还只能是一个不可能反抗他、不可能攻击他的人听。',
    '“阿Fi她很好，但是她太固执太情绪化了。没有办法，Omega激素起伏的通病，你懂的。我得找更稳定的伙伴。”',
    '眼前这个极有艺术天赋的Robert有迷人的嗓音、随便一画就生出一幅作品的手。脑袋很好使的Robert能随便解构任何文学作品。悟透了一切的Robert轻而易举就能通过拼贴词汇成为比伍尔芙和王尔德更全面的文学究极体。倒不难理解Robert会讨人喜欢，满嘴“淡出”、“快进”、“闪回”的创作者陈清銮也曾讨她的喜欢。',
    '“我们应该多了解了解彼此的。”他指指她。比划手势。你和我。',
    '印度圣牛的平静。',
    '我们都是Alpha。你懂我的意思。地球上的另一个Alpha手指在她鼻子面前晃着，像是在朝空气表演拿腺体当呼啦圈甩，转圈。',
    '陈清銮学不进去任何医学小知识。',
    'Robert问她觉得大爱的故事，莫奈的故事听上去如何。他说薛凯琪那个脑子一根筋的Omega死活听不进去。他认为薛凯琪并非真正的慧眼识珠，薛凯琪一点都不懂，扭曲事实才能更具戏剧感染力，夸张到人自己都会忘记真相究竟如何的地步才能动人……总之，他问她这Alpha，这样的故事怎么样？',
    '这样的故事怎么样？',
    '陈清銮问她为什么要删掉她精彩的故事，怪可惜的。',
    '怎么样？',
    '她心上有洞，她人神分离的生殖器，她腺体上红肿的陈清銮的吻痕结痂伤口。痛苦的复制品的复制品的复制品。',
    '刘恋微微一笑，把眼睛睁开了。',
    '刘恋看见Wilson惊恐地看向了自己。',
    '痛苦的复制品的复制品的复制品。',
    '刘恋听见自己说道：首先，先生，您是否对莫奈是个晚年眼疾没得救了的残疾人这一事实一无所知。',
    '她是陈清銮爱情故事的一环。',
    '在遇上薛凯琪这个圣母之前，在还和陈清銮在床上纠缠不清时，她就是这么对着谁都没什么感觉又漠不关心的。别说是莫奈，就连自己的死活她都不怎么在乎。',
    '刘恋看见Robert的嘴张成一个O的形状。',
    '“您不会真以为这么个快死了的瞎子是因为什么大爱才留在花园里的吧？”',
    'Alpha的腺体在成结时会在顶端胀出一圈，像在腺体顶端长出一个手榴弹，堵在Omega的生殖腔里以保证受孕率，通俗易懂地讲，大可把这看作是无害无病变的天然鸡巴激凸。连电影都不敢这么拍。喜剧片。动作片。惊悚片。恐怖片。爱情片。含有这等天然鸡巴激凸内容的片子发行，最后又回到发行商手里，再次发行时，天然鸡巴激凸相关的痛觉元素消失不见。',
    '很多人，他们一生都无法面对这个，看见时会闭上双眼。',
    '刘恋张开手，一边笑一边扶稳眼镜。',
    '“有趣儿吧？大部分人从来没想过这些，你说是不？”',
    '刘恋倒没什么没见过的。',
    '“您失望吗？莫奈压根不关心轰炸机和坦克。这法国秃子只盼着种花。”',
    'Robert并不回答。',
    '她知道，只要多问这类人几个问题，例如莫奈的全名或是除了睡莲还画过点儿啥有趣儿的东西，对方就会自动改变话题，会说自己是学病理学的，除了神经元活性和小白鼠胚胎对这个世界一窍不通。',
    '真正认识过莫奈的人无一不非常失望。',
    '当然啦，把莫奈放在二十一世纪，也不过是个会怕痛的普通人，对天然鸡巴激凸这种东西避之不及，耐痛能力甚至可能还比不过她刘恋。开玩笑，她的见识可不比这个法国秃子来得少。',
    '为了爱情实验能成功哪怕一次，她理解过一切。',
    '平均每十个被假性标记到性功能失调的Alpha里头，五个会自杀。不论是出于那点儿可怜的自尊，还是出于当今医疗水平有限因此性高潮异常无药可医。而剩下的五个呢，通常至少有一个会写点幸存者自传。和陈清銮分手后，刘恋去书店里找了些来看。',
    '性功能失调的Alpha在书里开玩笑，想逗看着他们身上灾难的读者们开怀一笑，于是自我调侃说了些寻死的事。',
    '“我对抑郁症和自杀是行家。”Alpha说，“如果你想死，记得买个保龄球大小的骨灰盒。生物课不会教给你这个。”',
    '他写完这句话后在后面画了个笑脸，说希望看到这儿的读者能开心点儿，就算快死了也记得要开怀一笑。',
    '当时，刘恋自己都惊异的奇迹出现了。',
    '他说这是那些干葬礼规划的人告诉他的。他想死但没死成，因为他带去的盒子太小了。值班的人吼他，说他这Alpha自我感觉太良好了，可乐罐大小的盒子只够装他火化的腺体。',
    '奇迹出现了。她笑了。',
    '她笑了。',
    '刘恋听着。她听见自己真的哭着哭着哈哈哈笑了起来。',
    '开怀一笑时，她无坚不摧。',
    '生物课不会教给你，不论是谁，单纯往子宫里塞手榴弹不会产生任何性快感。不过在她和陈清銮做爱时，她俩都不太在乎这个问题。她们没注意，这类天然鸡巴激凸对她这Alpha而言来得有点儿太变态了。陈清銮吻在她颈后的腺体上时她也没注意，因为拖着手榴弹的腺体在她身体内壁刮来蹭去时，引发的阵痛感让她没忍住，正忙着哭。',
    '为了爱情实验能成功哪怕一次，她接受过另一个人给她的一切。',
    '不教天然鸡巴激凸的生物课只会教你说，网购电动腺体的人全都爱死这个了，这可是上帝的恩赐。',
    '三十年，她就是Alpha这个生物的抵押，没有人敢想象的垃圾回收站。',
    'Wilson求助地看向远处，一边继续咳嗽，而刘恋听见自己继续讲道，“咱都是行内人，就别攀高级整高雅歧视那一套了吧。除了关起来倒腾画，你能要求一个天生喜欢花花草草的白内障对战争和地球做出点儿什么贡献？”',
    '从前，她就是做这种夹枪带棒的恶事的。连保龄球骨灰盒和天然鸡巴激凸都不在话下，没有什么是她干不出来的。不过她通常不会选可能会给自己事业带来问题的对象发病。',
    '刘恋说，“您这么懂流行概念的行家于我并非同一层次的人，您懂我的意思吧？”',
    '当时，刘恋知道自己大概已经变成了什么无意识的火球，或是一道没什么感知能力可言的闪电。就在她这道发疯的闪电就要见着谁都开始乱劈时，Wilson一把拽住了她的衣角。刘恋顺着Wilson求助的眼神看去，看到的是近在跟前的薛凯琪。',
    '盯着面前的两个人，刘恋思考：Robert和薛凯琪肩并肩站着时，身高差异并不明显。',
    '薛凯琪的目光接上她的目光。',
    '刘恋感觉到Wilson拽了拽她的袖口。怎么了？怎么不说了？你们俩讲话呀。',
    '有她的甲方在一旁看着，她这道闪电哪儿都劈不下去了。',
    '薛凯琪对Robert说：刚刚你走的时候没有告诉我你是来找我的好朋友的。',
    '她的甲方也是Robert的甲方。',
    '刘恋记得薛凯琪和她一起吃晚餐时聊过这个。她告诉薛凯琪：如果我是你，我哪天成了这货的甲方。她说得还有点儿一本正经。我保不准会在哪一天受了哪点刺激就提着一箩筐的手榴弹外加自动步枪就从他的一个展出现场走到另外一个展出现场，恐吓但不击毙，让他记住我的报复一辈子。',
    '薛凯琪只大笑。',
    '“那也没见你把你那个Alpha怎么样！”薛凯琪说，“别这样讲，我们刘恋女士还是很善良可爱的啦。”',
    '而对于具体怎么处理Robert这逮着腺体乱啃的凶手，薛凯琪不予置评。',
    '一报还一报。如今的薛凯琪若是存心想让Robert退居三线去当巧克力蛋糕的跑腿工，Robert无法拒绝，不过薛凯琪从不干这样的事。',
    '夜里十一点五十分。',
    '薛凯琪不干这样的事，但Robert这Alpha和她一样心里清楚。',
    '停车场大门还开着。',
    'Robert一溜烟就消失了，连招呼都不再打。而薛凯琪彬彬有礼地打理完第一个Alpha之后进而转去第二个。她在看了刘恋一眼之后说，我不希望你继续在这里留着了，就以你目前的状况，你需要休息。',
    '“你有闻到你身上的味道吗？”薛凯琪问，“你很生气，也很痛。发生什么了这么不开心？”薛凯琪正打量着她，“你衬衫的扣子——最上面三颗，扣错位了。”',
    '薛凯琪倒是看起来心情不错。',
    '于是刘恋就这样解开扣子又扣好。她讪笑着告诉了薛凯琪她和Robert的对话。关于Robert很看得起她。关于他觉得他俩都是Alpha能成好朋友呢。关于他这个笨蛋居然见人就扯莫奈梵高毕加索。哈哈哈哈哈哈哈哈哈。而至于别的，关于陈清銮的那点儿天然鸡巴激凸，刘恋认为还是不说为妙。',
    '刘恋以为这就够开怀一笑的了，可薛凯琪语气平平无奇，“你确实是到哪里跟谁都玩得很开。”',
    '有一小会，刘恋没吭声。一转眼，薛凯琪听见问题从天而降。',
    '“你要回香港了吗？”',
    '什么？',
    '还在沉思的薛凯琪不解。是啊。薛凯琪没懂刘恋怎么突然就跳到了这一茬。于是她说了她的一些行程，关于回家休息的打算，她已经在外面飞行了很久，所以，她觉得应该劳逸结合，给自己一点休息的时间，放个小假，去遍布烧鸭和云吞面的城市吃点好吃的，看看维多利亚港的轮船，而这一次她要消失很长一段时间，因为她想回去看她的——',
    '“没关系，你不用解释。”',
    '突然跳到这一茬的刘恋又跳去了下一茬。刘恋说，Robert请她合作的样子像极了信女一生吃素的许愿。哈哈哈。',
    '母语非中文者薛凯琪并没有立刻搞清楚这个插曲的意思。',
    '表情没多大变化的薛凯琪听刘恋继续讲着，一边讲一边笑，所以不得不一句话里停顿又停顿。不过薛凯琪没笑，或许是因为“Robert”这个单词出现的频率一时间太高了，又或许是因为这个单词用刘恋的声线和语气说出来太奇怪了。',
    'Robert。',
    '云云。',
    '哈哈哈。',
    '薛凯琪看了看女士手表的时间。距离十二点还有五分钟。她挺累的，到现在还没敢找个地儿睡觉纯粹是因为今晚的Alpha含量未免太高了，出现得太多了，让人不得不提防他们在喝的水或吃的饭里动手脚那么多。',
    'Robert。',
    '云云。',
    '哈哈哈。',
    '云云。',
    '刘恋的语速很快。',
    '薛凯琪想起她们玩得够开心时，她喜欢盯着刘恋的嘴巴看。她想看看这张上了发条一样的嘴里能讲出点什么有意思的奇谈怪论。解构主义，或是Frank Gehry，或是随身携带避孕套。她听开心了就笑，笑到眼泪都流出来。她原本希望聪明脑袋不会像绝大部分人那样小觑她心灵的影子。',
    '薛凯琪闻着夜风里剩下的那点烟味，Alpha的味道，一时间分辨不出它是Robert走前留给这里空气的礼物，还是Alpha这生物盘剥她身体的遗迹。',
    '兴许刘恋觉得她已经干完了她人生的所有功课。',
    '一直到现在，也许谁都还没意识到这样的问答令谁的心情急转直下。她们一向心灵相通，不过当人只来得及照顾自己心灵的孩子时，还怎么能顾得上什么急不急转不转下不下的。',
    '刘恋继续说，虽说和Robert这Alpha来几圈环球飞行是有点怪怪的，但既然薛凯琪也要回家了，那她也该向前看。而且是出游，玩嘛！好朋友的周末。带薪旅行。她喜欢这个主意。',
    '正看着手机的薛凯琪听见这句话停了，抬起头来。',
    '啊。',
    'Wilson目瞪口呆地盯着刘恋。',
    '薛凯琪重复道，“好朋友。”',
    '啊。被薛凯琪这样看着，有一秒，刘恋忘记呼吸了。糟糕。',
    '老大。Wilson想说话。老大。别。老大，那货是她她她的那个，他们以前那个过。',
    '糟糕。',
    '刘恋把眼睛睁开了。',
    '不。',
    '不。精神世界醒来的刘恋解释。这是个玩笑，这只是个玩笑。',
    'Wilson想告诉刘恋。今天，短短几个小时内，她最喜欢的这种耍小聪明的方式实在是太可怕了。如果她不高兴参加“工作”这件事，他可以代劳。他可以替她递纸条，记笔记写甲方的话，再把情况反馈给她。他可以干这些，而不是在这里陪着她一起和一看就心情不好的Fiona发生口角，或是玩儿什么他妈爱情意义上的自杀。',
    '薛凯琪向刘恋确认，她和Robert Fan是不是真的已经成了没有血缘关系的兄弟姐妹，Alpha联盟协会之类的。',
    '自此之后，刘恋倒是不会继续把送死的话往无论谁讲的无论什么词儿上接了。于是，薛凯琪将手机屏幕熄灭，像吹掉最后的蜡烛一样。',
    '薛凯琪问刘恋，是不是不懂粤语“讲大话”的精确含义，接着解释，它的意思是表示语言表达不符合现实，夸大说话的内容。问完之后，薛凯琪友好地请教刘恋，她们刚刚的对话作不作数。如果不作数，那么该不该把它算作大话，如果作数，那么她还有些别的问题。',
    '周围安静了。大家都睁着眼睛看着彼此。没人接茬。房子里的人继续又吃又喝，房子外的保安在打瞌睡，可夜晚已经变了样。Wilson看出来刘恋有那么点悔过之心了。他这Omega想拔腿就逃，却都还没想明白为什么。不过对着薛凯琪出的这道送命题，再怎么脑子不清醒，刘恋这Alpha倒是已经回过神来。',
    '横竖皆一死，这没法答。',
    '有时候，人们会忘记薛凯琪是个Omega。是，没有哪个Omega能窝在Alpha的海洋里还有心情跟你讲冷笑话。可是薛凯琪从不发脾气，对什么Alpha啦Beta啦都快乐地笑。是，薛凯琪很少发脾气。因为和人生气，或是要校正一些他人的认知，强迫他人接受自己，这些事都太费劲太有害心理健康了。',
    '薛凯琪左思右想，最后对如何开启这段对话有了决策。',
    '“你觉得我惨吗，刘恋。”',
    '现在这句话表示薛凯琪想要澄清一下，以校正这个Alpha对自己的错误认识。',
    '不不不不不不不不不不不。刘恋听着脑门上的警铃大作。不要啊，不是的，那只是个玩笑！',
    '一般情况下，谁都把薛凯琪看作一个修行得道宁静致远的禅宗圣母。是啊，宁静致远的禅宗圣母笑嘻嘻地来你身边无非是想和你玩儿，图一个乐子。因此，大小事都无法破坏这个禅宗圣母的心情，你绝不可能于这张脸上找到半点敌意。',
    '谁都不去想，禅宗圣母是否每时每刻都能笑得出来，实际上是不一定的。',
    'Wilson一边假装回短信一边往外头走。刘恋没空理他，因为她有更糟的事情需要处理，因为薛凯琪问完一句话后没说话。这就是最恐怖的情况，成天聒噪的薛凯琪闭嘴安静的情况，会真的让她慌张到一个字都挤不出来的情况。',
    '你觉得我快乐吗？',
    '这甚至都算不上一次争执，硬要说，只能是一次有点儿情绪化的自我介绍。刘恋想坐下，想说你你你慢点儿讲，咱可以坐下来好好讲，可是薛凯琪示意她不用了。',
    '“如果十二点过我还没回去睡觉，我真的会死掉。”薛凯琪说，“昨天晚上我只睡了三个小时。”',
    '现在这句话表示薛凯琪有点烦，有点累了，觉得自己没有时间可以分给“吵架”这件事。',
    '同一次对话若是发生在与另一个人之间，干公益的好人薛凯琪可能就放了，过去了，算了，不计较了。世上好人多，但坏人也不少。总有人喜欢从犄角旮旯的地方冲刺到她的脸上，管她叫做圣母，精神层面的妈，或是什么不老少女，就是那种就连保质期一百年的鱼罐头都过期了，而她的皮囊和子宫都还没死的那种少女。',
    '以上情况仅存于对话发生在与另一个人之间的此种可能。',
    '既然来者都已经跑来取代她细水长流地捡树叶、收集牙签的原因了，遵循等量交换公平守则，身体精神兼洁癖的薛凯琪可没大方到管这个Alpha作“另一个人”。',
    '“首先，我讲过，作为朋友，我很爱你，刘恋。”薛凯琪说，“我很容易爱上我的朋友。这个你知道。我爱很多人。”',
    '刘恋记得上一次和薛凯琪聊爱不爱谁谁谁是在纽约，曼哈顿岛。夜风里，她们两粒尘埃望着变幻莫测的都市，望着高楼缝隙间的一角黑色夜空。她们讲悄悄话。她问薛凯琪是否后悔爱过这么个人渣。',
    '薛凯琪说，不后悔。',
    '刘恋呼吸抖了抖。',
    '薛凯琪没恨过Robert Fan。',
    '“但是，我不是每个人都爱的。”薛凯琪说，“也不是每个人都喜欢。”',
    '没错，薛凯琪不乐意干“记仇”这件事，可这也不过是因为恨一个人太痛苦了，会让人对一切好事情眼瞎。目前人类最长寿命为122年，头脑灵光的薛凯琪没有时间去浪费给恨。决定一生都要心怀希望的薛凯琪拒绝把自己当作受害者，总是在感谢受过的伤流过的泪。决定一生都要努力快乐的薛凯琪从不跟任何人讲具体的疼痛，因为那样的痛要具体起来太恐怖了太悲剧了，会吓得人想哭。',
    '实际上她现在朝着刘恋讲的不过是点儿有关她薛凯琪本人的基础事实。',
    '“其次，我一直有讲，爱情的那个爱比较难。”',
    '爱情的爱毁过她的一切。',
    'Robert用爱情标记了她，拿走过她的整个生命。',
    '不知怎的，薛凯琪想起洗标手术结束后的一个晚上，夜里十二点整。方大同说幸好你没脑子一抽就跑去怀孕。脖子上的腺体蒙着纱布，她窝在拔凉的浴缸里，等着皮肤变成触手冰冷的等级，这样割起来的痛觉才有非同凡响的创造性。当时，她在电话扬声器里听到她的好朋友们和Robert吵架，Robert说她这Omega性格太情绪化，不利于荷尔蒙信息素释放，以后生的孩子会有精神方面的隐疾，她太不稳定了，他不喜欢这样。',
    '薛凯琪直视着浴缸冰水镜像里的Omega。她说，什么？',
    '你说稳定？',
    '薛凯琪直视着浴缸冰水镜像里的Omega，毫不畏缩地抡起膀子，利用手臂离心力对着这个Omega的手腕就是一刀，她们的手立马鲜血横流，她脖子上刚开完刀的腺体迸出血，溅出沾有信息素的液体。',
    '刘恋听见面前的Omega问：“所以，我现在想知道，在跟我讲爱是时间的时候，你有认真想到哪一步？”',
    '有的时候，薛凯琪认为自己在过日子时也干兼职，从事电影剪辑。她花了一生去剪辑关于Fiona Sit这位Omega女性的影片内容，其中丰富的元素包括但不限于：家庭分离、校园暴力、讲大话的朋友、甩手不管的初恋、派送错了汤底的外卖……等等，云云，集合了一切普世意义上值得人去死的理由。',
    '虽然不稳定的Fiona Sit动不动就大哭大笑寻死觅活，但好歹总是充满灵感，薛凯琪不恨她。',
    '刘恋向薛凯琪说，我错了，求求你，别生气了，好不好，求求你。',
    '不过，这般叫人难过的电影剪辑兼职也有工时。有的人是夜间动物，有的是日间动物。与阳光开朗的薛凯琪不一样，Fiona Sit女士只在夜里露脸上班。',
    '洗标手术结束之后，脾气大还有洁癖的Fiona Sit很长一段时间都难以接受自己身上的味道。',
    '但凡开口，刘恋只说你别生气了。而对于这张平时很灵活的嘴受不受得了不稳定的夜间动物Fiona Sit，薛凯琪心里的答案始终模棱两可。',
    '要成为龙，首先，你得和恶龙缠斗。要容纳深渊，首先，你得凝视深渊。在浴缸里头鲜血横流的Omega最后都没死成。同一个夜晚，黑色房间里只有Fiona安慰薛凯琪。薛凯琪没笑，她就想逗她笑。她得让她暖和起来，因为她再不暖和起来就要挂了。于是有灵感的Fiona给她讲绕口令逗她笑，痴线蜘蛛条蜘蛛丝痴住支树枝。',
    '只有Fiona和薛凯琪的夜的小屋，当时，薛凯琪并不知道接下来的几十年她都没再放任何人进入。',
    '薛凯琪问刘恋，你是不是觉得刚才你只是讲个玩笑，觉得很奇怪，这个又没什么好发脾气的。',
    '可刘恋不敢回答，只敢用红红的眼睛看薛凯琪。',
    '痴线蜘蛛条蜘蛛丝痴住支树枝。',
    '一分钟的快乐。',
    '开怀一笑时，一分钟的快乐就是一分钟战无不胜的神。',
    '“我是这样的人。”薛凯琪问刘恋，“你会觉得失望吗？”',
    '我是个过度较真的人，对伴侣一点不挑却又挑剔至极的人。我对他不仅挑剔，甚至苛刻严格得变态。他不能像别人那样拿我的伤疤开我的玩笑啦，也不能不在乎我的洁癖穿着外裤上床。我想他非同寻常，却不想他太过危险。我想他自由，却想他留下。我想他容得下我，却不要他顺从于我。我想他喜欢我，可是比起这个，还有别的，我想他爱我。我。这样的我。',
    '和恶龙缠斗的这位战无不胜的神从手术台上爬起来，从浴缸里爬起来，从棺材里爬起来。恐怖的血痕从迷人的花海里一路拖过去，它始终咯咯地笑着，眼泪不断地流。它逮着深渊恶龙就开始发癫，扒倒刺一样把深渊恶龙的皮都扒下来：是啦痴线啦！我还见过更大的痛苦呢！我还见过更深的绝望呢！',
    '数十年，受这位战无不胜的神眷顾的薛凯琪对与恶龙缠斗一事所发生的具体情况只字未提，逢人只说：我是幸运的。',
    '为什么？',
    '薛凯琪只说：因为驯龙高手薛凯琪，你们都没这个经历，哈哈哈哈哈哈哈哈哈哈哈哈……',
    '听的人们始终摸不着头脑。',
    '对于薛凯琪的问题，刘恋闷闷地回答：我从来没有觉得失望过，我从来没有想要你生气过。',
    '我从来没有在你这里不认真过。',
    '薛凯琪看了刘恋一会儿，想了想，她对刘恋说，如果还有下一次，讲话之前要好好考虑清楚，因为我会当真，可以吗？那样的表情太平静，于是刘恋只能吞咽下到嘴边的“可以”，连续点头时整个脑袋像前后晃的不倒翁。',
    '“你有好一点吗？”刘恋小声地问，“还有别的地方我做错了什么吗？”',
    '所有人的好朋友薛凯琪说，薛凯琪是最努力去开心的一个人，我很大方，所以就原谅你吧。',
    '“我还可以来找你吗？”',
    '一直以来都和她玩得很快乐的薛凯琪说，我今天好困了，不想玩了，晚安。',
    '临近夜里十二点的五分钟过去，刘恋在车上坐好了。车子一路驶到酒店、她回到房间里时都没太反应过来。她想先至少洗个澡，不过脚伸进擦得太亮的浴缸里忽然打了个滑，她差点摔倒。不过也有好的一面，好消息是她想起来了。',
    '驯龙高手薛凯琪总是大败象征死亡的深渊恶龙。',
    '你不得不想问：所以那条被爱光正能量的薛凯琪折腾的恶龙，快要死掉的时候，它应该会讲些什么呢？',
    '“恭喜你。”当时，浴缸之战胜负已分，恶龙脸上闪耀着泪光，“你距离毁灭又近了一步。”',
    '你？',
    '刘恋盯着浴缸，沉思冥想。',
    '是刘恋，还是薛凯琪？',
    '天然鸡巴激凸。',
    '洗标手术疤痕。',
    '你会觉得失望吗？',
    '没有看清楚真实面貌的爱情不算爱情。',
    '如果没有第一个人拿命写下福音书，天知道又该上哪儿去找耶稣？',
    '“你一定得看看。”皮肉都被扒得精光的恶龙道，“在爱情这儿牺牲过一次的人们是何等可怕的存在。”',
    '没有弃绝过深渊的复活不算复活。',
  ]
};

