const DAYS=[
{id:'day1',pill:'D1 · 4/30',date:'📅 4月30日 周四',theme:'抵达维也纳 · 休整',tags:[{t:'成都',c:'chengdu'},{t:'维也纳',c:'vienna'},{t:'🛏️ 维也纳',c:'stay'}],
items:[
{time:'02:45',ev:'🛫 成都天府机场起飞',loc:'TFU 天府机场',bar:'flight',rows:[['航班','海南航空 HU781（直飞）'],['飞行','约 10 小时'],['到达','维也纳 VIE ~08:00（当地时间）'],['备注','海航每周二/四/日运营']]},
{time:'08:00',ev:'抵达维也纳 VIE 机场',bar:'flight'},
{time:'09:00',ev:'入境 · 取行李 · 前往市区',bar:'transport'},
{time:'10:00',ev:'🏨 入住酒店，休息调整时差',bar:'hotel'},
{time:'下午',ev:'🚶 维也纳轻度游览（视体力）',loc:'市中心',bar:'sight',note:'斯蒂芬大教堂 · Naschmarkt 市场 · 国家歌剧院外观'},
{time:'晚上',ev:'早休，为明天储备体力',bar:'free'},
]},
{id:'day2',pill:'D2 · 5/1',date:'📅 5月1日 周五',theme:'🎨 动森名画朝圣 + 🧴 Le Labo 限定',tags:[{t:'阿姆斯特丹',c:'amsterdam'},{t:'海牙',c:'hague'},{t:'🛏️ 阿姆斯特丹',c:'stay'}],
items:[
{time:'06:00-07:00',ev:'✈️ 维也纳 → 阿姆斯特丹',bar:'flight',rows:[['航班','早班机'],['飞行','约 1 小时 50 分'],['到达','Schiphol 机场 ~08:30-09:30']]},
{time:'09:30',ev:'🚆 Schiphol → Amsterdam Centraal',loc:'机场火车 ~15min',bar:'transport'},
{time:'10:00',ev:'🧴 Le Labo 购买限定香水',bar:'shopping',cls:'lelabo-card',rows:[['香水','Mousse de Chêne 30'],['地址','Reestraat 10, 1016 DN'],['区域','De 9 Straatjes（九条街）'],['营业','~10:00-18:00（请确认）']]},
{time:'10:30',ev:'步行至博物馆广场',bar:'free'},
{time:'11:00-13:00',ev:'🎨 Rijksmuseum 国立博物馆',loc:'Museumstraat 1',bar:'museum',note:'重点：夜巡 + 倒牛奶的女仆 ✦ 可看《夜巡》修复工程'},
{time:'13:00',ev:'🍽️ 博物馆广场午餐',bar:'food'},
{time:'13:30-14:30',ev:'🎨 Van Gogh Museum 梵高博物馆',loc:'博物馆广场（紧邻 Rijksmuseum）',bar:'museum',note:'重点：向日葵'},
{time:'14:45',ev:'🚆 Amsterdam → Den Haag 火车',loc:'Amsterdam Centraal 出发',bar:'transport',note:'约 50 分钟，每 15-30 分钟一班'},
{time:'15:35',ev:'抵达海牙',bar:'transport'},
{time:'15:45-16:45',ev:'🎨 Mauritshuis 莫瑞泰斯皇家美术馆',loc:'Plein 29, Den Haag',bar:'museum',note:'重点：戴珍珠耳环的少女'},
{time:'17:00',ev:'🚆 海牙 → 阿姆斯特丹',bar:'transport'},
{time:'18:00+',ev:'🍽️ 运河区晚餐 · 🏨 入住酒店',bar:'hotel'},
],
arts:[
{n:1,game:'名贵的名画 Amazing Painting',real:'《夜巡》The Night Watch',artist:'伦勃朗 Rembrandt',museum:'📍 Rijksmuseum',st:'✅ 展出'},
{n:2,game:'朴素的名画 Quaint Painting',real:'《倒牛奶的女仆》The Milkmaid',artist:'维米尔 Vermeer',museum:'📍 Rijksmuseum',st:'✅ 展出'},
{n:3,game:'珍贵的名画 Flowery Painting',real:'《向日葵》Sunflowers',artist:'梵高 Van Gogh',museum:'📍 Van Gogh Museum',st:'✅ 展出'},
{n:4,game:'漂亮的名画 Wistful Painting',real:'《戴珍珠耳环的少女》',artist:'维米尔 Vermeer',museum:'📍 Mauritshuis · 海牙',st:'✅ 展出'},
],
warn:'⚠️ Rijksmuseum 和 Van Gogh Museum 必须提前网上预约时段票！'},
{id:'day3',pill:'D3 · 5/2',date:'📅 5月2日 周六',theme:'🎸 Eric Clapton 演唱会之夜',tags:[{t:'阿姆斯特丹',c:'amsterdam'},{t:'布达佩斯',c:'budapest'},{t:'🛏️ 布达佩斯',c:'stay'}],
items:[
{time:'上午',ev:'阿姆斯特丹自由活动',bar:'free'},
{time:'12:00',ev:'退房 · 前往 Schiphol 机场',bar:'transport'},
{time:'14:00-15:00',ev:'✈️ 阿姆斯特丹 → 布达佩斯',bar:'flight',rows:[['飞行','约 2 小时'],['到达','BUD 机场 ~16:30-17:00']]},
{time:'17:30',ev:'🏨 入住布达佩斯酒店',bar:'hotel'},
{time:'18:30',ev:'前往 MVM Dome',bar:'transport'},
{time:'20:00',ev:'🎸 Eric Clapton 演唱会！',bar:'concert',cls:'concert-card',rows:[['场馆','MVM Dome, Budapest'],['开场','20:00'],['购票','funcode.hu 等授权渠道']]},
{time:'~22:30',ev:'演唱会结束 · 返回酒店',bar:'hotel'},
]},
{id:'day4',pill:'D4 · 5/3',date:'📅 5月3日 周日',theme:'🏛️ 布达佩斯白天 + 🚆 晚上回维也纳',tags:[{t:'布达佩斯',c:'budapest'},{t:'维也纳',c:'vienna'},{t:'🛏️ 维也纳',c:'stay'}],
items:[
{time:'09:00',ev:'退房（寄存行李于火车站）',bar:'hotel'},
{time:'09:30-12:00',ev:'🏰 布达城堡 + 渔人堡 + 马加什教堂',loc:'Castle Hill',bar:'sight'},
{time:'12:00',ev:'🍽️ 午餐',bar:'food'},
{time:'13:00-15:00',ev:'♨️ 多瑙河两岸 / 塞切尼温泉',loc:'Széchenyi Thermal Bath',bar:'sight'},
{time:'15:00-16:00',ev:'🏛️ 国会大厦区域',bar:'sight'},
{time:'16:30',ev:'取行李 · 前往 Keleti 火车站',bar:'transport'},
{time:'17:30-18:00',ev:'🚆 火车 → 维也纳',bar:'transport',rows:[['路线','Budapest Keleti → Wien Hbf'],['时长','约 2 小时（Railjet）']]},
{time:'~20:00',ev:'抵达维也纳 Hauptbahnhof',bar:'transport'},
{time:'20:30',ev:'🏨 入住维也纳酒店',bar:'hotel'},
]},
{id:'day5',pill:'D5 · 5/4',date:'📅 5月4日 周一',theme:'🎭 维也纳艺术 + 宫殿 + 咖啡',tags:[{t:'维也纳',c:'vienna'},{t:'🛏️ 维也纳',c:'stay'}],
items:[
{time:'09:00-12:00',ev:'🎨 艺术史博物馆 Kunsthistorisches Museum',loc:'Maria-Theresien-Platz',bar:'museum',note:'重点：雪中猎人 + 夏季（动森名画）'},
{time:'12:00',ev:'🍽️ 午餐',bar:'food'},
{time:'13:00-16:00',ev:'🏰 美泉宫 Schönbrunn Palace',bar:'sight'},
{time:'16:00-17:30',ev:'☕ 市中心漫步 · Café Central / Café Sacher',bar:'food',note:'品尝维也纳咖啡与萨赫蛋糕'},
{time:'18:00+',ev:'🍽️ 晚餐 · 收拾行李（明日回国）',bar:'food'},
],
arts:[
{n:5,game:'厉害的名画 Scenic Painting',real:'《雪中猎人》Hunters in the Snow',artist:'老彼得·勃鲁盖尔',museum:'📍 Kunsthistorisches Museum',st:'✅ 展出'},
{n:6,game:'有趣的名画 Famous Painting',real:'《夏季》Summer',artist:'阿尔钦博托 Arcimboldo',museum:'📍 Kunsthistorisches Museum',st:'✅ 展出'},
]},
{id:'day6',pill:'D6 · 5/5',date:'📅 5月5日 周二',theme:'✈️ 回国',tags:[{t:'维也纳',c:'vienna'},{t:'成都',c:'chengdu'},{t:'🛏️ 飞机上',c:'stay'}],
items:[
{time:'09:00',ev:'退房',bar:'hotel'},
{time:'09:30',ev:'前往维也纳国际机场 VIE',bar:'transport'},
{time:'10:30',ev:'到达机场 · 办理登机',bar:'flight'},
{time:'12:00',ev:'✈️ 起飞回成都！',bar:'flight',rows:[['航班','海南航空（直飞，需确认）'],['到达','成都天府 TFU · 次日凌晨']]},
{time:'次日凌晨',ev:'🛬 抵达成都天府机场 🎉',bar:'flight'},
]}
];

// --- Render ---
function init(){
  // Nav
  const nav=document.getElementById('dayNav');
  nav.innerHTML=DAYS.map((d,i)=>`<button class="day-pill${i===0?' active':''}" data-id="${d.id}">${d.pill}</button>`).join('');
  nav.querySelectorAll('.day-pill').forEach(b=>b.onclick=()=>{
    document.getElementById(b.dataset.id)?.scrollIntoView({behavior:'smooth',block:'start'});
  });

  // Stats
  let html=`<div class="stats"><div class="stat"><div class="stat-n">6</div><div class="stat-l">天行程</div></div><div class="stat"><div class="stat-n">4</div><div class="stat-l">个城市</div></div><div class="stat"><div class="stat-n">6</div><div class="stat-l">幅动森名画</div></div><div class="stat"><div class="stat-n">1</div><div class="stat-l">场演唱会</div></div></div>`;

  DAYS.forEach(d=>{
    const tags=d.tags.map(t=>`<span class="tag tag-${t.c}">${t.t}</span>`).join('');
    html+=`<section id="${d.id}"><div class="day-header"><div class="day-date">${d.date}</div><div class="day-theme">${d.theme}</div><div class="day-tags">${tags}</div></div>`;
    // Items
    d.items.forEach(it=>{
      const extra=it.cls?' '+it.cls:'';
      let body=`<div class="it-time">${it.time}</div><div class="it-event">${it.ev}</div>`;
      if(it.loc) body+=`<div class="it-loc">📍 ${it.loc}</div>`;
      if(it.rows) body+=it.rows.map(r=>`<div class="detail-row"><span class="dl">${r[0]}</span><span class="dv">${r[1]}</span></div>`).join('');
      if(it.note) body+=`<div class="it-note">${it.note}</div>`;
      html+=`<div class="it-card${extra}"><div class="it-bar bar-${it.bar}"></div><div class="it-body">${body}</div></div>`;
    });
    // Warn
    if(d.warn) html+=`<div class="info-box warn">${d.warn}</div>`;
    // Arts
    if(d.arts){
      html+=`<div class="art-section"><h3>🎮 动森名画朝圣</h3>`;
      d.arts.forEach(a=>{
        html+=`<div class="art-item"><div class="art-num">${a.n}</div><div class="art-info"><div class="art-game">🎮 ${a.game}</div><div class="art-real">${a.real}</div><div class="art-artist">${a.artist}</div><div class="art-museum">${a.museum}</div></div><div class="art-status">${a.st}</div></div>`;
      });
      html+=`</div>`;
    }
    html+=`</section>`;
  });

  document.getElementById('main').innerHTML=html;

  // Scroll spy
  const pills=document.querySelectorAll('.day-pill');
  const secs=DAYS.map(d=>document.getElementById(d.id));
  window.addEventListener('scroll',()=>{
    let cur='';
    secs.forEach(s=>{if(s&&s.getBoundingClientRect().top<120) cur=s.id;});
    pills.forEach(p=>{
      p.classList.toggle('active',p.dataset.id===cur);
      if(p.dataset.id===cur) p.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
    });
  },{passive:true});
}
init();
