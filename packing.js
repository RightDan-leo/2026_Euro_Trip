const PACKING_LIST = [
  {
    category: '📄 证件与文件',
    items: [
      { id: 'p1', text: '护照 (有效期6个月以上)' },
      { id: 'p2', text: '申根签证复印件' },
      { id: 'p3', text: 'Eric Clapton 演唱会门票打印件' },
      { id: 'p4', text: '酒店预订单打印件' },
      { id: 'p5', text: '航班行程单打印件 (HU781, OS371/KL1838, KL1975, HU782)' },
      { id: 'p6', text: '旅游保险英文保单' }
    ]
  },
  {
    category: '💶 资金',
    items: [
      { id: 'm1', text: 'Visa / Mastercard 信用卡' },
      { id: 'm2', text: '欧元零钱 (建议准备小额面值)' },
      { id: 'm3', text: '少量人民币 (国内备用)' }
    ]
  },
  {
    category: '🔌 电子设备',
    items: [
      { id: 'e1', text: '手机及快充充电器' },
      { id: 'e2', text: '欧标转换插头 (两圆孔)' },
      { id: 'e3', text: '大容量充电宝及数据线' },
      { id: 'e4', text: '降噪耳机' },
      { id: 'e5', text: '📷 相机及备用电池/储存卡' },
      { id: 'e6', text: '📹 Action 运动相机 (记录沿途风景/晨跑第一视角)' },
      { id: 'e7', text: '📶 移动 WiFi / 随身路由器 (确保随时在线)' }
    ]
  },
  {
    category: '🧴 洗护用品',
    items: [
      { id: 't1', text: '洗漱包 (牙刷/牙膏/毛巾)' },
      { id: 't2', text: '旅行装护肤品/防晒霜' },
      { id: 't3', text: '便携雨伞 (阿姆斯特丹常雨)' },
      { id: 't4', text: '剃须刀 / 脱毛用品' },
      { id: 't5', text: '个人常备药品 (肠胃药/创可贴/感冒药)' },
      { id: 't6', text: '💊 褪黑素 Melatonin (倒时差极度依赖，头几晚必吃)' }
    ]
  },
  {
    category: '👕 衣物配件',
    items: [
      { id: 'c1', text: '换洗衣物 (洋葱式穿搭：防风防水外套+薄毛衣+短袖。强烈建议带20寸登机箱免托运)' },
      { id: 'c5', text: '🏃 运动速干衣 / 轻便跑鞋 (晨跑打卡必备)' },
      { id: 'c1_2', text: '轻便折叠雨伞 (应对阿姆斯特丹春季阵雨)' },
      { id: 'c2', text: '舒适的平底鞋 (每天暴走必修课)' },
      { id: 'c3', text: '墨镜' },
      { id: 'c4', text: '睡衣 / 内衣裤' }
    ]
  }
];

function init() {
  renderPackingList();
  initTheme();
}

function renderPackingList() {
  const container = document.getElementById('packingSection');
  if (!container) return;

  const saved = JSON.parse(localStorage.getItem('euro_packing_todos') || '{}');
  
  let totalItems = 0;
  PACKING_LIST.forEach(cat => totalItems += cat.items.length);

  const updateProgress = () => {
    const checkedBoxes = container.querySelectorAll('input[type="checkbox"]:checked');
    const checkedCount = checkedBoxes.length;
    const pct = Math.round((checkedCount / totalItems) * 100) || 0;
    
    const progressEl = container.querySelector('.todo-progress');
    const fillEl = container.querySelector('.todo-progress-fill');
    
    if (progressEl) progressEl.textContent = `${checkedCount}/${totalItems} 已打包`;
    if (fillEl) fillEl.style.width = `${pct}%`;
  };

  let html = `
    <div class="todo-header">
      <div class="todo-title">🎒 行李打包总进度</div>
      <div class="todo-progress">0/${totalItems} 已打包</div>
    </div>
    <div class="todo-progress-bar"><div class="todo-progress-fill"></div></div>
    <div class="todo-list">
  `;

  PACKING_LIST.forEach(cat => {
    html += `<div class="category-title">${cat.category}</div>`;
    cat.items.forEach(t => {
      const isChecked = saved[t.id] ? 'checked' : '';
      html += `
        <label class="todo-item ${isChecked ? 'checked' : ''}">
          <input type="checkbox" data-id="${t.id}" ${isChecked}>
          <span class="todo-text">${t.text}</span>
        </label>
      `;
    });
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

      const currentSaved = JSON.parse(localStorage.getItem('euro_packing_todos') || '{}');
      currentSaved[id] = checked;
      localStorage.setItem('euro_packing_todos', JSON.stringify(currentSaved));
      
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

init();
