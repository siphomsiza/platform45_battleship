var blue="#348fe2",blueLight="#5da5e8",blueDark="#1993E4",aqua="#49b6d6",aquaLight="#6dc5de",aquaDark="#3a92ab",green="#00acac",greenLight="#33bdbd",greenDark="#008a8a",orange="#f59c1a",orangeLight="#f7b048",orangeDark="#c47d15",dark="#2d353c",grey="#b6c2c9",purple="#727cb6",purpleLight="#8e96c5",purpleDark="#5b6392",red="#ff5b57",handleLineChart=function(){"use strict";nv.addGraph(function(){for(var e=[],a=[],r=0;100>r;r++)e.push({x:r,y:Math.sin(r/10)}),a.push({x:r,y:.5*Math.cos(r/10)});var t=[{values:e,key:"Sine Wave",color:green},{values:a,key:"Cosine Wave",color:blue}],n=nv.models.lineChart().options({transitionDuration:300,useInteractiveGuideline:!0});return n.xAxis.axisLabel("Time (s)").tickFormat(d3.format(",.1f")),n.yAxis.axisLabel("Voltage (v)").tickFormat(function(e){return null==e?"N/A":d3.format(",.2f")(e)}),d3.select("#nv-line-chart").append("svg").datum(t).call(n),nv.utils.windowResize(n.update),n})},handleBarChart=function(){"use strict";var e=[{key:"Cumulative Return",values:[{label:"A",value:29,color:red},{label:"B",value:15,color:orange},{label:"C",value:32,color:green},{label:"D",value:196,color:aqua},{label:"E",value:44,color:blue},{label:"F",value:98,color:purple},{label:"G",value:13,color:grey},{label:"H",value:5,color:dark}]}];nv.addGraph(function(){var a=nv.models.discreteBarChart().x(function(e){return e.label}).y(function(e){return e.value}).showValues(!0).duration(250);return a.yAxis.axisLabel("Total Sales"),a.xAxis.axisLabel("Product"),d3.select("#nv-bar-chart").append("svg").datum(e).call(a),nv.utils.windowResize(a.update),a})},handlePieAndDonutChart=function(){"use strict";var e=[{label:"One",value:29,color:red},{label:"Two",value:12,color:orange},{label:"Three",value:32,color:green},{label:"Four",value:196,color:aqua},{label:"Five",value:17,color:blue},{label:"Six",value:98,color:purple},{label:"Seven",value:13,color:grey},{label:"Eight",value:5,color:dark}];nv.addGraph(function(){var a=nv.models.pieChart().x(function(e){return e.label}).y(function(e){return e.value}).showLabels(!0).labelThreshold(.05);return d3.select("#nv-pie-chart").append("svg").datum(e).transition().duration(350).call(a),a}),nv.addGraph(function(){var a=nv.models.pieChart().x(function(e){return e.label}).y(function(e){return e.value}).showLabels(!0).labelThreshold(.05).labelType("percent").donut(!0).donutRatio(.35);return d3.select("#nv-donut-chart").append("svg").datum(e).transition().duration(350).call(a),a})},handleStackedAreaChart=function(){"use strict";var e=[{key:"Financials",color:red,values:[[11386836e5,13.356778764352],[11411028e5,13.611196863271],[11437812e5,6.895903006119],[11463696e5,6.9939633271352],[1149048e6,6.7241510257675],[115164e7,5.5611293669516],[11543184e5,5.6086488714041],[11569968e5,5.4962849907033],[11595888e5,6.9193153169279],[11622708e5,7.0016334389777],[11648628e5,6.7865422443273],[11675412e5,9.0006454225383],[11702196e5,9.2233916171431],[11726388e5,8.8929316009479],[11753136e5,10.345937520404],[11779056e5,10.075914677026],[1180584e6,10.089006188111],[1183176e6,10.598330295008],[11858544e5,9.968954653301],[11885328e5,9.7740580198146],[11911248e5,10.558483060626],[11938032e5,9.9314651823603],[11963988e5,9.3997715873769],[11990772e5,8.4086493387262],[12017556e5,8.9698309085926],[12042612e5,8.2778357995396],[1206936e6,8.8585045600123],[1209528e6,8.7013756413322],[12122064e5,7.7933605469443],[12147984e5,7.0236183483064],[12174768e5,6.9873088186829],[12201552e5,6.8031713070097],[12227472e5,6.6869531315723],[12254256e5,6.138256993963],[12280212e5,5.6434994016354],[12306996e5,5.495220262512],[1233378e6,4.6885326869846],[12357972e5,4.4524349883438],[1238472e6,5.6766520778185],[1241064e6,5.7675774480752],[12437424e5,5.7882863168337],[12463344e5,7.2666010034924],[12490128e5,7.519182132226],[12516912e5,7.849651451445],[12542832e5,10.383992037985],[12569616e5,9.0653691861818],[12595572e5,9.6705248324159],[12622356e5,10.856380561349],[1264914e6,11.27452370892],[12673332e5,11.754156529088],[1270008e6,8.2870811422456],[12726e8,8.0210264360699],[12752784e5,7.5375074474865],[12778704e5,8.3419527338039],[12805488e5,9.4197471818443],[12832272e5,8.7321733185797],[12858192e5,9.6627062648126],[12884976e5,10.187962234549],[12910932e5,9.8144201733476],[12937716e5,10.275723361713],[129645e7,16.796066079353],[12988692e5,17.543254984075],[1301544e6,16.673660675084],[1304136e6,17.963944353609],[13068144e5,16.637740867211],[13094064e5,15.84857094609],[13120848e5,14.767303362182],[13147632e5,24.778452182432],[13173552e5,18.370353229999],[13200336e5,15.2531374291],[13226292e5,14.989600840649],[13253076e5,16.052539160125],[1327986e6,16.424390322793],[13304916e5,17.884020741105],[13331664e5,7.1424929577921],[13357584e5,7.8076213051482],[13384368e5,7.2462684949232]]},{key:"Health Care",color:orange,values:[[11386836e5,14.212410956029],[11411028e5,13.973193618249],[11437812e5,15.218233920665],[11463696e5,14.38210972745],[1149048e6,13.894310878491],[115164e7,15.593086090032],[11543184e5,16.244839695188],[11569968e5,16.017088850646],[11595888e5,14.183951830055],[11622708e5,14.148523245697],[11648628e5,13.424326059972],[11675412e5,12.974450435753],[11702196e5,13.23247041802],[11726388e5,13.318762655574],[11753136e5,15.961407746104],[11779056e5,16.287714639805],[1180584e6,16.246590583889],[1183176e6,17.564505594809],[11858544e5,17.872725373165],[11885328e5,18.018998508757],[11911248e5,15.584518016603],[11938032e5,15.480850647181],[11963988e5,15.699120036984],[11990772e5,19.184281817226],[12017556e5,19.691226605207],[12042612e5,18.982314051295],[1206936e6,18.707820309008],[1209528e6,17.459630929761],[12122064e5,16.500616076782],[12147984e5,18.086324003979],[12174768e5,18.929464156258],[12201552e5,18.233728682084],[12227472e5,16.315776297325],[12254256e5,14.63289219025],[12280212e5,14.667835024478],[12306996e5,13.946993947308],[1233378e6,14.394304684397],[12357972e5,13.724462792967],[1238472e6,10.930879035806],[1241064e6,9.8339915513708],[12437424e5,10.053858541872],[12463344e5,11.786998438287],[12490128e5,11.780994901769],[12516912e5,11.305889670276],[12542832e5,10.918452290083],[12569616e5,9.6811395055706],[12595572e5,10.971529744038],[12622356e5,13.330210480209],[1264914e6,14.592637568961],[12673332e5,14.605329141157],[1270008e6,13.936853794037],[12726e8,12.189480759072],[12752784e5,11.676151385046],[12778704e5,13.058852800017],[12805488e5,13.62891543203],[12832272e5,13.811107569918],[12858192e5,13.786494560787],[12884976e5,14.04516285753],[12910932e5,13.697412447288],[12937716e5,13.677681376221],[129645e7,19.961511864531],[12988692e5,21.049198298158],[1301544e6,22.687631094008],[1304136e6,25.469010617433],[13068144e5,24.883799437121],[13094064e5,24.203843814248],[13120848e5,22.138760964038],[13147632e5,16.034636966228],[13173552e5,15.394958944556],[13200336e5,12.625642461969],[13226292e5,12.973735699739],[13253076e5,15.786018336149],[1327986e6,15.227368020134],[13304916e5,15.899752650734],[13331664e5,18.994731295388],[13357584e5,18.450055817702],[13384368e5,17.863719889669]]},{key:"Information Technology",color:dark,values:[[11386836e5,13.242301508051],[11411028e5,12.863536342042],[11437812e5,21.034044171629],[11463696e5,21.419084618803],[1149048e6,21.142678863691],[115164e7,26.568489677529],[11543184e5,24.839144939905],[11569968e5,25.456187462167],[11595888e5,26.350164502826],[11622708e5,26.47833320519],[11648628e5,26.425979547847],[11675412e5,28.191461582256],[11702196e5,28.930307448808],[11726388e5,29.521413891117],[11753136e5,28.188285966466],[11779056e5,27.704619625832],[1180584e6,27.490862424829],[1183176e6,28.770679721286],[11858544e5,29.060480671449],[11885328e5,28.240998844973],[11911248e5,33.004893194127],[11938032e5,34.075180359928],[11963988e5,32.548560664833],[11990772e5,30.629727432728],[12017556e5,28.642858788159],[12042612e5,27.973575227842],[1206936e6,27.393351882726],[1209528e6,28.476095288523],[12122064e5,29.29667866426],[12147984e5,29.222333802896],[12174768e5,28.092966093843],[12201552e5,28.107159262922],[12227472e5,25.482974832098],[12254256e5,21.208115993834],[12280212e5,20.295043095268],[12306996e5,15.925754618401],[1233378e6,17.162864628346],[12357972e5,17.084345773174],[1238472e6,22.246007102281],[1241064e6,24.530543998509],[12437424e5,25.084184918242],[12463344e5,16.606166527358],[12490128e5,17.239620011628],[12516912e5,17.336739127379],[12542832e5,25.478492475753],[12569616e5,23.017152085245],[12595572e5,25.617745423683],[12622356e5,24.061133998642],[1264914e6,23.223933318644],[12673332e5,24.425887263937],[1270008e6,35.501471156693],[12726e8,33.775013878676],[12752784e5,30.417993630285],[12778704e5,30.023598978467],[12805488e5,33.327519522436],[12832272e5,31.963388450371],[12858192e5,30.498967232092],[12884976e5,32.403696817912],[12910932e5,31.47736071922],[12937716e5,31.53259666241],[129645e7,41.760282761548],[12988692e5,45.605771243237],[1301544e6,39.986557966215],[1304136e6,43.846330510051],[13068144e5,39.857316881857],[13094064e5,37.675127768208],[13120848e5,35.775077970313],[13147632e5,48.631009702577],[13173552e5,42.830831754505],[13200336e5,35.611502589362],[13226292e5,35.320136981738],[13253076e5,31.564136901516],[1327986e6,32.074407502433],[13304916e5,35.053013769976],[13331664e5,26.434568573937],[13357584e5,25.305617871002],[13384368e5,24.520919418236]]}];nv.addGraph(function(){var a=nv.models.stackedAreaChart().useInteractiveGuideline(!0).x(function(e){return e[0]}).y(function(e){return e[1]}).controlLabels({stacked:"Stacked"}).showControls(!1).duration(300);return a.xAxis.tickFormat(function(e){return d3.time.format("%x")(new Date(e))}),a.yAxis.tickFormat(d3.format(",.4f")),d3.select("#nv-stacked-area-chart").append("svg").datum(e).transition().duration(1e3).call(a).each("start",function(){setTimeout(function(){d3.selectAll("#nv-stacked-area-chart *").each(function(){this.__transition__&&(this.__transition__.duration=1)})},0)}),nv.utils.windowResize(a.update),a})},handleStackedBarChart=function(){"use strict";var e=[{key:"Stream 1",color:red,values:[{x:1,y:10},{x:2,y:15},{x:3,y:16},{x:4,y:20},{x:5,y:57},{x:6,y:42},{x:7,y:12},{x:8,y:65},{x:9,y:34},{x:10,y:52},{x:11,y:23},{x:12,y:12},{x:13,y:22},{x:14,y:22},{x:15,y:48},{x:16,y:54},{x:17,y:32},{x:18,y:13},{x:19,y:21},{x:20,y:12}]},{key:"Stream 2",color:orange,values:[{x:1,y:10},{x:2,y:15},{x:3,y:16},{x:4,y:45},{x:5,y:67},{x:6,y:34},{x:7,y:43},{x:8,y:65},{x:9,y:32},{x:10,y:12},{x:11,y:43},{x:12,y:45},{x:13,y:32},{x:14,y:32},{x:15,y:38},{x:16,y:64},{x:17,y:42},{x:18,y:23},{x:19,y:31},{x:20,y:22}]},{key:"Stream 2",color:dark,values:[{x:1,y:20},{x:2,y:25},{x:3,y:26},{x:4,y:30},{x:5,y:57},{x:6,y:52},{x:7,y:22},{x:8,y:75},{x:9,y:44},{x:10,y:62},{x:11,y:35},{x:12,y:15},{x:13,y:25},{x:14,y:25},{x:15,y:45},{x:16,y:55},{x:17,y:35},{x:18,y:15},{x:19,y:25},{x:20,y:15}]}];nv.addGraph({generate:function(){var a=nv.models.multiBarChart().stacked(!0).showControls(!1),r=d3.select("#nv-stacked-bar-chart").append("svg").datum(e);return r.transition().duration(0).call(a),a}})},ChartNvd3=function(){"use strict";return{init:function(){handleLineChart(),handleBarChart(),handlePieAndDonutChart(),handleStackedAreaChart(),handleStackedBarChart()}}}();