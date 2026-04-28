const TODOS = [
  { id: 't1', text: '预订 4/30 成都→维也纳机票（海航 HU781）' },
  { id: 't2', text: '确认 5/5 维也纳→成都回程航班（海航 HU782）' },
  { id: 't3', text: '已预订 5/1 维也纳→阿姆斯特丹早班机（KL1902 09:30）✅' },
  { id: 't4', text: '已预订 5/2 阿姆斯特丹→布达佩斯下午班机（KLM 14:35）✅' },
  { id: 't5', text: '预购 Rijksmuseum 时段门票' },
  { id: 't6', text: '🚨 抢救预购 Van Gogh Museum 门票（官网无票，速去Klook买套票或TicketSwap捡漏）' },
  { id: 't7', text: '预购 Mauritshuis 门票' },
  { id: 't8', text: '购买 Eric Clapton 演唱会门票（MVM Dome）' },
  { id: 't9', text: '预订 5/3 布达佩斯→维也纳火车票' },
  { id: 't10', text: '预订酒店：维也纳（Wien Mitte 或 Hbf 附近，4/30 & 5/3-5/4 共3晚）' },
  { id: 't11', text: '预订酒店：阿姆斯特丹（中央车站周边，5/1 共1晚）' },
  { id: 't12', text: '预订酒店：布达佩斯（第五区 Deák Ferenc tér，5/2 共1晚）' },
  { id: 't13', text: '确认 Le Labo Amsterdam 5/1 营业时间' },
  { id: 't14', text: '👕 准备中欧温差及风雨衣物（洋葱式穿搭+折叠伞）' },
  { id: 't15', text: '🚨 极重要：提前预购【维也纳美泉宫 Grand Tour】指定时段门票' },
  { id: 't16', text: '☕ 在线预约座位：New York Café (布达佩斯) & Café Central (维也纳)' },
  { id: 't17', text: '♨️ 预购布达佩斯【塞切尼温泉 Fast Track 免排队门票】' },
  { id: 't18', text: '🏛️（若需入内）提前半月抢购【布达佩斯国会大厦内部 Guided Tour】门票' },
  { id: 't19', text: '💳 绑定 Apple Pay / 准备两张带芯片非接触外币信用卡（应对全欧无现金交通卡）' },
  { id: 't20', text: '🧳 终极建议：尽量只带登机箱 (Carry-on) 出行，避免史基浦机场等行李延误时间' }
];

const DAYS=[
{id:'day1',pill:'D1 · 4/30',date:'📅 4月30日 周四',theme:'抵达维也纳 · 休整',weather:'⛅ 天气预估：维也纳 多云转晴，12°C - 18°C (早晚温差大)',tags:[{t:'成都',c:'chengdu'},{t:'维也纳',c:'vienna'},{t:'🛏️ 维也纳',c:'stay'}],
items:[
{time:'02:45',ev:'🛫 成都天府机场起飞',loc:'TFU 天府机场',bar:'flight',rows:[['航班','海南航空 HU781（直飞）'],['飞行','约 10 小时'],['到达','维也纳 VIE ~08:00（当地时间）'],['备注','海航每周二/四/日运营']]},
{time:'08:00',ev:'抵达维也纳 VIE 机场',bar:'flight'},
{time:'09:00',ev:'入境 · 取行李 · 前往市区',bar:'transport'},
{time:'10:00',ev:'🏨 入住酒店，休息调整时差',bar:'hotel'},
{time:'11:30',ev:'☕ 咖啡续命：Gota Coffee Experts',loc:'Mariahilfer Str. 192, Vienna',bar:'food',note:'奥地利顶尖的精品咖啡馆（屡获大奖）。用一杯极品拉花拿铁或手冲唤醒时差！'},
{time:'下午',ev:'🚶 维也纳轻度游览（视体力） 🧲',loc:'市中心',bar:'sight',note:'斯蒂芬大教堂 · 必买：去教堂旁的 Manner 旗舰店买粉色威化饼干冰箱贴！'},
{time:'16:30',ev:'💿 Alt & Neu 唱片店',loc:'Alt & Neu, Vienna',bar:'shopping',note:'打卡目标：购买限量的黑胶唱片店帆布包！'},
{time:'17:00',ev:'💿 淘碟：Rave Up Records',loc:'Hofmühlgasse 1, Vienna',bar:'shopping',note:'离 Alt & Neu 步行仅5分钟。寻找 Isaac Gracie 的维也纳站！'},
{time:'晚上',ev:'早休，为明天储备体力',bar:'free'},
]},
{id:'day2',pill:'D2 · 5/1',date:'📅 5月1日 周五',theme:'🎨 动森名画朝圣 + 🧴 Le Labo 限定',weather:'🌦️ 天气预估：阿姆斯特丹 阵雨/多风，9°C - 15°C (体感较冷，带雨伞与防风外套)',tags:[{t:'阿姆斯特丹',c:'amsterdam'},{t:'海牙',c:'hague'},{t:'🛏️ 阿姆斯特丹',c:'stay'}],
items:[
{time:'09:30',ev:'✈️ 维也纳 → 阿姆斯特丹',bar:'flight',rows:[['航班','荷兰皇家航空 KLM KL1902'],['飞行','约 1 小时 50 分'],['到达','Schiphol 机场 11:20']]},
{time:'11:50',ev:'🚆 Schiphol → Amsterdam Centraal',loc:'机场火车 ~15min',bar:'transport',note:'⚠️ 警报：若有托运行李可能延误40分钟。建议直接用 Apple Pay/信用卡刷闸机进站，省去买票时间！'},
{time:'12:15',ev:'🧳 寄存行李于中央车站',bar:'transport',note:'Tips: 大柜90x60x40cm(可放28寸)，小柜90x40x40cm(登机箱)。强烈建议带登机箱！'},
{time:'12:45',ev:'🧴 Le Labo 购买限定香水',bar:'shopping',cls:'lelabo-card',rows:[['香水','Mousse de Chêne 30'],['地址','Reestraat 10, 1016 DN'],['区域','De 9 Straatjes（九条街）']]},
{time:'13:10',ev:'🕯️ Skins Cosmetics 买蜡烛',loc:'Runstraat 11, Amsterdam',bar:'shopping',note:'目标：Carrière Frères (Tiare味道)。离 Le Labo 步行仅1分钟！'},
{time:'13:20',ev:'☕ 咖啡豆：Bocca Coffee Roasters',loc:'Kerkstraat 96, Amsterdam',bar:'shopping',note:'荷兰顶级精品咖啡！买一包代表阿姆现代风味的浅烘豆。'},
{time:'13:35',ev:'💿 淘碟：Concerto 唱片店',loc:'Utrechtsestraat 52-60',bar:'shopping',note:'淘宝时间尽量压缩，因为下午要连看两个博物馆！'},
{time:'14:15',ev:'🍽️ 简餐 / 战利品寄存',bar:'free',note:'Tips: 强烈建议把重物提去 Rijksmuseum 的免费衣帽间寄存！'},
{time:'14:45-17:15',ev:'🎨 Rijksmuseum 国立博物馆',loc:'Museumstraat 1',bar:'museum',note:'重点：夜巡 + 倒牛奶的女仆'},
{time:'17:45-19:30',ev:'🎨 Van Gogh Museum 梵高博物馆 (夜场)',loc:'Museumplein 6',bar:'museum',note:'重点：向日葵。⚠️ 必须在 17:45-18:15 排队入场！'},
{time:'19:45+',ev:'🍽️ 晚饭大餐 · 🏨 入住酒店 🧲',bar:'hotel',note:'闲逛必买：Delft Blue 蓝瓷小屋或传统服饰 Miffy 兔冰箱贴！'},
],
arts:[
{n:1,game:'名贵的名画 Amazing Painting',real:'《夜巡》The Night Watch',artist:'伦勃朗 Rembrandt',museum:'📍 Rijksmuseum',st:'✅ 展出'},
{n:2,game:'朴素的名画 Quaint Painting',real:'《倒牛奶的女仆》The Milkmaid',artist:'维米尔 Vermeer',museum:'📍 Rijksmuseum',st:'✅ 展出'},
{n:3,game:'珍贵的名画 Flowery Painting',real:'《向日葵》Sunflowers',artist:'梵高 Van Gogh',museum:'📍 Van Gogh Museum',st:'✅ 展出'},
{n:4,game:'漂亮的名画 Wistful Painting',real:'《戴珍珠耳环的少女》',artist:'维米尔 Vermeer',museum:'📍 Mauritshuis · 海牙',st:'✅ 展出'},
],
warn:'⚠️ Rijksmuseum 和 Van Gogh Museum 必须提前网上预约时段票！'},
{id:'day3',pill:'D3 · 5/2',date:'📅 5月2日 周六',theme:'🎸 Eric Clapton 演唱会之夜',weather:'🌤️ 天气预估：布达佩斯 晴间多云，14°C - 22°C (气候宜人，适合傍晚看演出)',tags:[{t:'阿姆斯特丹',c:'amsterdam'},{t:'布达佩斯',c:'budapest'},{t:'🛏️ 布达佩斯',c:'stay'}],
items:[
{time:'07:45',ev:'退房 · 前往中央车站',bar:'hotel'},
{time:'08:15',ev:'🚆 阿姆斯特丹 → 海牙',bar:'transport',rows:[['车程','约 50 分钟（至 Den Haag Centraal）']]},
{time:'09:10',ev:'🧳 海牙火车站寄存行李',loc:'Den Haag Centraal',bar:'transport',note:'⚠️ 警报：NS储物柜不收现金！必须用带非接触支付的信用卡或 Apple Pay 支付。'},
{time:'09:30-10:45',ev:'🎨 Mauritshuis 莫瑞泰斯皇家美术馆 🧲',loc:'Plein 29, Den Haag',bar:'museum',note:'重点：戴珍珠耳环的少女 ✦ 必买：官方精美冰箱贴'},
{time:'11:00',ev:'取行李 · 前往机场',bar:'transport'},
{time:'11:15',ev:'🚆 海牙 → Schiphol 机场',loc:'直达火车 ~30min',bar:'transport'},
{time:'11:45',ev:'机场简餐 · 办理登机',bar:'food'},
{time:'14:35',ev:'✈️ 阿姆斯特丹 → 布达佩斯',bar:'flight',rows:[['航班','荷兰皇家航空 KLM'],['飞行','约 2 小时'],['到达','BUD 机场 ~16:35']]},
{time:'17:30',ev:'🏨 入住布达佩斯酒店并稍作换装',bar:'hotel',note:'⚠️ 交通优化：从机场出门直接刷卡坐 100E 大巴，40分钟直达 Deák Ferenc tér 酒店区。'},
{time:'18:30',ev:'前往 MVM Dome',bar:'transport',note:'⚠️ 避堵预警：千万别打车！直接在 Deák Ferenc tér 坐 M3 蓝线地铁，向南直达 Népliget 站，出站即是。'},
{time:'20:00',ev:'🎸 Eric Clapton 演唱会！',bar:'concert',cls:'concert-card',rows:[['场馆','MVM Dome, Budapest'],['开场','20:00'],['购票','funcode.hu 等授权渠道']]},
{time:'~22:30',ev:'演唱会结束 · 返回酒店',bar:'hotel'},
]},
{id:'day4',pill:'D4 · 5/3',date:'📅 5月3日 周日',theme:'🏛️ 布达佩斯白天 + 🚆 晚上回维也纳',weather:'☀️ 天气预估：布达佩斯 晴朗，15°C - 23°C (阳光充足，适合泡温泉与漫步)',tags:[{t:'布达佩斯',c:'budapest'},{t:'维也纳',c:'vienna'},{t:'🛏️ 维也纳',c:'stay'}],
items:[
{time:'07:00-08:30',ev:'🏃 备选晨跑：玛格丽特岛',loc:'Margaret Island, Budapest',bar:'free',note:'多瑙河中央的跑者圣地，全长 5.3km 塑胶跑道。跑完正好去退房！'},
{time:'09:00',ev:'退房 · 前往火车站寄存行李',bar:'hotel'},
{time:'09:30',ev:'🧳 Keleti 火车站地下层寄存行李',loc:'Budapest Keleti',bar:'transport',note:'Tips: 负一层大柜(~80x50x80cm)可放托运箱，小柜放登机箱。自备少量福林硬币。'},
{time:'10:00-12:00',ev:'♨️ 塞切尼温泉 (早鸟入场)',loc:'Széchenyi Thermal Bath',bar:'sight',note:'⚠️ 交通优化：从 Keleti 别坐地铁！出站坐 72M 路无轨电车，12 分钟直达温泉门口。'},
{time:'12:30',ev:'🍽️ 午餐',bar:'food'},
{time:'13:30-15:30',ev:'🏰 布达城堡 + 渔人堡 + 马加什教堂 🧲',loc:'Castle Hill',bar:'sight',note:'⚠️ 交通优化：泡完温泉门口坐 M1 黄线到 Deák Ferenc tér，原地换乘 16 路小巴直接开上山到渔人堡！'},
{time:'15:45',ev:'🏛️ 国会大厦区域 (外观)',bar:'sight'},
{time:'16:15',ev:'💿 淘碟：Wave Music Shop',loc:'Révay köz 1, Budapest',bar:'shopping',note:'匈牙利最好的独立唱片店，淘宝最后冲刺！'},
{time:'17:00',ev:'前往 Keleti 车站取行李',bar:'transport'},
{time:'17:30-18:00',ev:'🚆 火车 → 维也纳',bar:'transport',rows:[['路线','Budapest Keleti → Wien Hbf'],['时长','约 2 小时（Railjet）']]},
{time:'~20:00',ev:'抵达维也纳 Hauptbahnhof',bar:'transport'},
{time:'20:30',ev:'🏨 入住维也纳酒店',bar:'hotel'},
]},
{id:'day5',pill:'D5 · 5/4',date:'📅 5月4日 周一',theme:'🎭 维也纳艺术 + 宫殿 + 咖啡',weather:'⛅ 天气预估：维也纳 多云，13°C - 20°C (适宜室内看展与喝咖啡)',tags:[{t:'维也纳',c:'vienna'},{t:'🛏️ 维也纳',c:'stay'}],
items:[
{time:'07:00-08:30',ev:'🏃 备选晨跑：维也纳环城大道',loc:'Ringstraße, Vienna',bar:'free',note:'清晨沿着指环路打卡国家歌剧院、国会大厦等宏伟建筑，全长约 5.3km。'},
{time:'09:00-12:00',ev:'🎨 艺术史博物馆 Kunsthistorisches Museum 🧲',loc:'Maria-Theresien-Platz',bar:'museum',note:'重点：动森名画 ✦ 必买：官方出品的《雪中猎人》金属画框冰箱贴！'},
{time:'12:00',ev:'🍽️ 午餐',bar:'food'},
{time:'13:00-16:00',ev:'🏰 美泉宫 Schönbrunn Palace',bar:'sight'},
{time:'16:00-17:30',ev:'☕ 百年咖啡馆 (Café Central / Sacher)',loc:'Vienna City Center',bar:'food',note:'品尝经典蛋糕。强烈建议：结账时买一罐自家独家咖啡豆，极具帝国纪念意义！'},
{time:'17:30',ev:'🛍️ 维也纳终极扫货 (蜡烛 & 咖啡)',bar:'shopping',note:'去 Duft & Kultur 买蜡烛；或者去 Julius Meinl (小红帽旗舰店) 买最顶级的咖啡豆礼盒！'},
{time:'18:00+',ev:'🍽️ 晚餐 · 收拾行李（明日回国）',bar:'food'},
],
arts:[
{n:5,game:'厉害的名画 Scenic Painting',real:'《雪中猎人》Hunters in the Snow',artist:'老彼得·勃鲁盖尔',museum:'📍 Kunsthistorisches Museum',st:'✅ 展出'},
{n:6,game:'有趣的名画 Famous Painting',real:'《夏季》Summer',artist:'阿尔钦博托 Arcimboldo',museum:'📍 Kunsthistorisches Museum',st:'✅ 展出'},
]},
{id:'day6',pill:'D6 · 5/5',date:'📅 5月5日 周二',theme:'✈️ 回国',weather:'🌤️ 天气预估：维也纳 晴间多云，14°C - 21°C',tags:[{t:'维也纳',c:'vienna'},{t:'成都',c:'chengdu'},{t:'🛏️ 飞机上',c:'stay'}],
items:[
{time:'09:00',ev:'退房',bar:'hotel'},
{time:'09:30',ev:'前往维也纳国际机场 VIE',bar:'transport'},
{time:'10:30',ev:'到达机场 · 办理登机',bar:'flight'},
{time:'12:30或13:30',ev:'✈️ 起飞回成都！',bar:'flight',rows:[['建议航班','海南航空 HU782（直飞）'],['到达','成都天府 TFU · 次日凌晨']]},
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
    const weatherHtml = d.weather ? `<div class="day-weather" style="font-size:.85rem; color:var(--text-muted); margin-top:2px;">${d.weather}</div>` : '';
    html+=`<section id="${d.id}"><div class="day-header"><div class="day-date">${d.date}</div><div class="day-theme">${d.theme}</div>${weatherHtml}<div class="day-tags">${tags}</div></div>`;
    // Items
    d.items.forEach(it=>{
      const extra=it.cls?' '+it.cls:'';
      let body=`<div class="it-time">${it.time}</div><div class="it-event">${it.ev}</div>`;
      if(it.loc) {
        const query = encodeURIComponent(it.loc.replace(/📍\s*/,''));
        body+=`<a href="https://www.google.com/maps/search/?api=1&query=${query}" target="_blank" class="it-loc" title="在 Google Maps 中打开">📍 ${it.loc}</a>`;
      }
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

  document.getElementById('main').insertAdjacentHTML('beforeend', html);

  // Scroll spy
  const pills=document.querySelectorAll('.day-pill');
  const secs=DAYS.map(d=>document.getElementById(d.id));
  window.addEventListener('scroll',()=>{
    let cur='';
    secs.forEach(s=>{if(s&&s.getBoundingClientRect().top<150) cur=s.id;});
    pills.forEach(p=>{
      p.classList.toggle('active',p.dataset.id===cur);
      if(p.dataset.id===cur) p.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
    });
  },{passive:true});

  // Render TODOs
  renderTodos();

  // Theme logic
  initTheme();
}

function renderTodos() {
  const container = document.getElementById('todoSection');
  if (!container) return;

  const saved = JSON.parse(localStorage.getItem('euro_todos') || '{}');
  
  const updateProgress = () => {
    const total = TODOS.length;
    const checkedBoxes = container.querySelectorAll('input[type="checkbox"]:checked');
    const checkedCount = checkedBoxes.length;
    const pct = Math.round((checkedCount / total) * 100) || 0;
    container.querySelector('.todo-progress').textContent = `${checkedCount}/${total} 已完成`;
    container.querySelector('.todo-progress-fill').style.width = `${pct}%`;
  };

  let html = `
    <div class="todo-header">
      <div class="todo-title">✅ 出行前准备清单</div>
      <div class="todo-progress">0/${TODOS.length} 已完成</div>
    </div>
    <div class="todo-progress-bar"><div class="todo-progress-fill"></div></div>
    <div class="todo-list">
  `;

  TODOS.forEach(t => {
    const isChecked = saved[t.id] ? 'checked' : '';
    html += `
      <label class="todo-item ${isChecked ? 'checked' : ''}">
        <input type="checkbox" data-id="${t.id}" ${isChecked}>
        <span class="todo-text">${t.text}</span>
      </label>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
  
  updateProgress();

  container.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
      const id = e.target.dataset.id;
      const checked = e.target.checked;
      
      const label = e.target.closest('.todo-item');
      if(checked) label.classList.add('checked');
      else label.classList.remove('checked');

      const currentSaved = JSON.parse(localStorage.getItem('euro_todos') || '{}');
      currentSaved[id] = checked;
      localStorage.setItem('euro_todos', JSON.stringify(currentSaved));
      
      updateProgress();
    }
  });
}

function initTheme() {
  const btn = document.getElementById('themeToggle');
  if(!btn) return;

  const savedTheme = localStorage.getItem('euro_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    btn.textContent = '☀️';
  }

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('euro_theme', 'light');
      btn.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('euro_theme', 'dark');
      btn.textContent = '☀️';
    }
  });
}

function initMap() {
  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  const map = L.map('map').setView([49.5, 12.0], 5);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const pins = [
    // Vienna
    { name: "✈️ 维也纳 VIE 机场", coords: [48.1103, 16.5697] },
    { name: "🚆 维也纳中央车站 (Hauptbahnhof)", coords: [48.1851, 16.3766] },
    { name: "🎨 艺术史博物馆", coords: [48.2038, 16.3618] },
    { name: "🏰 美泉宫", coords: [48.1848, 16.3122] },
    
    // Amsterdam & The Hague
    { name: "✈️ 阿姆斯特丹 Schiphol 机场", coords: [52.3105, 4.7683] },
    { name: "🚆 阿姆斯特丹中央车站", coords: [52.3791, 4.9003] },
    { name: "🎨 Rijksmuseum", coords: [52.3599, 4.8852] },
    { name: "🎨 Van Gogh Museum", coords: [52.3584, 4.8810] },
    { name: "🧴 Le Labo 九条街", coords: [52.3725, 4.8829] },
    { name: "🎨 Mauritshuis (海牙)", coords: [52.0804, 4.3143] },
    
    // Budapest
    { name: "✈️ 布达佩斯 BUD 机场", coords: [47.4369, 19.2556] },
    { name: "🚆 布达佩斯 Keleti 火车站", coords: [47.5004, 19.0830] },
    { name: "🎸 MVM Dome 演唱会馆", coords: [47.4729, 19.1026] },
    { name: "♨️ 塞切尼温泉", coords: [47.5186, 19.0823] },
    { name: "🏰 布达城堡 / 渔人堡", coords: [47.4962, 19.0396] }
  ];

  const markers = [];
  pins.forEach(pin => {
    const marker = L.marker(pin.coords).addTo(map).bindPopup(`<b>${pin.name}</b>`);
    markers.push(marker);
  });

  const group = new L.featureGroup(markers);
  map.fitBounds(group.getBounds(), { padding: [20, 20] });
}

init();
initMap();
