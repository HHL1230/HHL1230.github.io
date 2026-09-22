/* Project catalogue. Edit this file to update the portal. */

const SITE = {
  name: { en: "Hao-Hsiang (Shawn) Lee", zh: "李浩祥 Shawn Lee" },
  role: {
    en: "Laboratory Automation & Applied AI",
    zh: "實驗室自動化與應用 AI"
  },
  intro: {
    en: "I build automation that removes manual transcription from analytical laboratory workflows \u2014 instrument data capture, report generation, data-integrity auditing \u2014 and increasingly wrap them in AI-assisted tooling. Below is a categorised index of my work.",
    zh: "我專注於消除分析實驗室流程中的人工轉謄作業：儀器數據擷取、報表自動產出、數據完整性稽核，並逐步以 AI 工具強化這些流程。以下為作品分類索引。"
  },
  links: {
    github: "https://github.com/HHL1230",
    products: "https://hhl1230.github.io/my-products/",
    email: "mailto:REPLACE_WITH_PERSONAL_EMAIL"
  }
};

const CATEGORIES = [
  { id: "lab", en: "Laboratory Automation", zh: "實驗室自動化", icon: "\u2697\uFE0F" },
  { id: "integrity", en: "Data Integrity & Auditing", zh: "數據完整性與稽核", icon: "\uD83D\uDD0E" },
  { id: "ai", en: "AI & Developer Tooling", zh: "AI 與開發工具", icon: "\uD83E\uDD16" },
  { id: "apps", en: "Applications", zh: "應用程式", icon: "\uD83D\uDCF1" },
  { id: "games", en: "Games & Creative", zh: "遊戲與創作", icon: "\uD83C\uDFAE" }
];

/*
 * FIELD REFERENCE
 *
 * status
 *   "public"        -> source is public; `repo` link is shown
 *   "confidential"  -> source withheld under employer confidentiality; no link
 *
 * metrics  (OPTIONAL but HIGH VALUE - see METRICS.md)
 *   Rendered as a highlighted stat line at the top of the card.
 *   This is the single most persuasive element for a recruiter.
 *   Leave as null until you have a real figure. Never invent numbers.
 *   Example: { en: "~25 min -> ~2 min per batch", zh: "每批次約 25 分鐘 -> 約 2 分鐘" }
 *
 * shots    (OPTIONAL)
 *   Array of { src, caption: { en, zh } }. Files live in assets/shots/.
 *   Blur or replace any real sample IDs, client names and file paths first.
 */
const PROJECTS = [
  {
    id: "qc-extractor",
    cat: "lab",
    featured: true,
    title: { en: "QC Extractor", zh: "QC Extractor 儀器報告擷取" },
    tagline: {
      en: "Parses PDF reports from multi-brand analytical instruments into structured data and writes them straight into Excel daily logs.",
      zh: "將多品牌分析儀器產出的 PDF 報告自動解析為結構化數據，一鍵填入 Excel 日報表。"
    },
    highlights: {
      en: [
        "Eliminates manual transcription error between instrument output and QC records",
        "Per-instrument parser modules (GC, GC-MS, ICP-OES, ICP-MS, LC-MS/MS, UV-Vis, LC-FLD)",
        "Keeps an auditable execution log for every extraction run"
      ],
      zh: [
        "消除儀器輸出與 QC 紀錄之間的人工轉謄誤差（Transcription Error）",
        "依儀器別拆分解析模組（GC、GC-MS、ICP-OES、ICP-MS、LC-MS/MS、UV-Vis、LC-FLD）",
        "每次執行皆保留可稽核的執行日誌"
      ]
    },
    stack: ["PowerShell", "iTextSharp", "VBA", "Excel COM"],
    status: "confidential",
    repo: null,
    // TODO: e.g. { en: "~25 min -> ~2 min per batch", zh: "每批次約 25 分鐘 -> 約 2 分鐘" }
    metrics: null,
    shots: []
  },
  {
    id: "aida",
    cat: "integrity",
    featured: true,
    title: { en: "AIDA \u2014 Automated Integrity & Data Auditor", zh: "AIDA 數據完整性稽核系統" },
    tagline: {
      en: "Monitors analyst-generated report files for additions and modifications, and validates instrument timestamps to detect implausible post-processing.",
      zh: "監控分析人員產出報告的新增與異動，並檢核儀器內部時間合理性，偵測不當後製或竄改。"
    },
    highlights: {
      en: [
        "Timestamp-snapshot diffing flags NEW / MODIFIED files across monitored folders",
        "Rule engine validates instrument injection, analysis and calibration times against modification time",
        "Auto-excludes legitimate review actions; emits HTML review reports plus machine-readable JSON"
      ],
      zh: [
        "以時間戳快照比對，標記各監控資料夾的新增（NEW）與修改（MODIFIED）檔案",
        "規則引擎比對儀器進樣／分析／校正時間與檔案修改時間的合理性",
        "自動排除正常審閱行為；輸出 HTML 審閱報告與機器可讀的 JSON 結果"
      ]
    },
    stack: ["Python", "PDF parsing", "HTML reporting"],
    status: "confidential",
    repo: null,
    // TODO: e.g. { en: "~2,000 files/day across 3 scheduled scans", zh: "每日掃描約 2,000 個檔案，分 3 次執行" }
    metrics: null,
    shots: []
  },
  {
    id: "edge-extension-lims",
    cat: "lab",
    featured: true,
    title: { en: "LIMS Auto-Login Edge Extension", zh: "LIMS 自動登入 Edge 擴充功能" },
    tagline: {
      en: "One-click browser extension that automates repetitive daily LIMS navigation and lookup routines.",
      zh: "一鍵完成 LIMS 系統每日例行登入與查詢作業的瀏覽器擴充功能。"
    },
    highlights: {
      en: [
        "Automates login plus multi-step navigation to daily task lists and pending-upload queues",
        "Modular content-script architecture, refactored for maintainability",
        "Credential handling kept out of source control"
      ],
      zh: [
        "自動化登入並串接多步驟導覽：派工清單、待上傳數據編號查詢",
        "模組化 content script 架構，重構以利維護",
        "憑證處理不進入版本控制"
      ]
    },
    stack: ["JavaScript", "Chrome/Edge Extension API", "Manifest V3"],
    status: "confidential",
    repo: null,
    // TODO: e.g. { en: "~10 min of daily clicking removed per analyst", zh: "每位分析人員每日減少約 10 分鐘操作" }
    metrics: null,
    shots: []
  },
  {
    id: "scale-monitor",
    cat: "lab",
    featured: true,
    title: { en: "Scale Monitor", zh: "天平數據傳輸程式" },
    tagline: {
      en: "RS232 bridge that writes balance readings from Mettler Toledo and OHAUS instruments directly into Excel cells.",
      zh: "透過 RS232 介面，將 Mettler Toledo 與 OHAUS 天平數值直接寫入 Excel 儲存格。"
    },
    highlights: {
      en: [
        "Writes via the Excel COM API instead of simulated keystrokes \u2014 immune to IME interference and focus stealing",
        "Debounce mechanism filters the gross/net/tare burst some balances emit per press",
        "Configurable cursor movement; distributed as a single self-contained executable"
      ],
      zh: [
        "採 Excel COM API 直接寫入，取代模擬鍵盤輸入，避免輸入法干擾與視窗焦點被搶",
        "防連發（Debounce）機制過濾部分天平單次傳輸送出的毛重／淨重／皮重冗餘資料",
        "可設定游標移動方向；以單一免安裝執行檔發佈"
      ]
    },
    stack: ["Python", "pySerial", "Excel COM", "PyInstaller"],
    status: "public",
    repo: "https://github.com/HHL1230/scale-monitor",
    demo: "https://hhl1230.github.io/my-products/scale-monitor/",
    metrics: null,
    shots: []
  },
  {
    id: "chemical-screening-records",
    cat: "lab",
    title: { en: "Chemical Screening Record Processor", zh: "Screening 紀錄自動處理" },
    tagline: {
      en: "Automates intake and normalisation of chemical screening records arriving by mail.",
      zh: "自動化處理以郵件收件的化學 Screening 紀錄，進行擷取與標準化。"
    },
    highlights: {
      en: [
        "Per-message processing pipeline with number-range and special-case handling",
        "Normalises sample records into a consistent reporting structure"
      ],
      zh: [
        "逐信處理流程架構，涵蓋編號範圍與特殊案例處理",
        "將樣品紀錄標準化為一致的報表結構"
      ]
    },
    stack: ["PowerShell", "Outlook automation"],
    status: "confidential",
    repo: null
  },
  {
    id: "measurement-record-generator",
    cat: "lab",
    title: { en: "Measurement Record Generator", zh: "測量紀錄產生器" },
    tagline: {
      en: "Batch-creates dissolution-test measurement record workbooks from templates driven by a report-number list.",
      zh: "依 report-no. 清單，從對應範本批次建立溶出試驗測量紀錄表。"
    },
    highlights: {
      en: [
        "Supports 20 record types across two report families",
        "Derives the target year from the report number and auto-creates destination folders",
        "Short-circuits empty ranges for performance"
      ],
      zh: [
        "支援兩大報告系列共 20 種 Record Type",
        "自 report-no. 解析年份並自動建立目標資料夾",
        "無有效資料時即時跳過，提升批次效能"
      ]
    },
    stack: ["VBA", "Excel"],
    status: "confidential",
    repo: null
  },
  {
    id: "fill-fcm-data-sheet",
    cat: "lab",
    title: { en: "Data Sheet Auto-Fill", zh: "自動填數據單" },
    tagline: {
      en: "Rule-driven macro that completes result and analyst/date columns on test data sheets while protecting existing content.",
      zh: "以規則驅動填寫數據單的結果與分析人員／日期欄位，同時保護既有內容。"
    },
    highlights: {
      en: [
        "Decides what to fill from test item, method and worker ID",
        "Handles multiple date formats and test-item keyword variants",
        "Never overwrites pre-existing entries"
      ],
      zh: [
        "依測試項目、方法與工號判斷應填寫的內容",
        "支援多種日期格式與測項關鍵字變體",
        "不覆寫既有填寫內容"
      ]
    },
    stack: ["VBA", "Excel"],
    status: "confidential",
    repo: null
  },
  {
    id: "fcm-task-sheet",
    cat: "lab",
    title: { en: "Task Sheet Generator", zh: "派工單產生器" },
    tagline: {
      en: "Turns a raw job list into two print-ready dispatch sheets for separate analytical teams.",
      zh: "將原始工作清單轉為兩份可直接列印的派工單，分別供不同分析組別使用。"
    },
    highlights: {
      en: [
        "Column pruning, date/method/remark normalisation, duplicate order-number suppression",
        "Inserts check-off columns and applies filters per instrument technique",
        "Configures print layout automatically"
      ],
      zh: [
        "自動刪減欄位、標準化日期／方法／備註、隱藏重複訂單編號",
        "插入勾選欄位並依儀器技術套用篩選",
        "自動設定列印版面"
      ]
    },
    stack: ["VBA", "Excel"],
    status: "confidential",
    repo: null
  },
  {
    id: "fcm-tfda-items-screening-tool",
    cat: "lab",
    title: { en: "Regulatory Test-Item Screening Tool", zh: "TFDA 測項篩選工具" },
    tagline: {
      en: "Filters a regulatory test-item list against internal codes and pastes a cleaned result into the weighing record sheet.",
      zh: "依內部代碼篩選法規測項清單，並將整理後結果貼入「秤重紀錄」工作表。"
    },
    highlights: {
      en: [
        "Opens the source workbook, removes non-matching rows and applies conditional screening",
        "Re-applies borders, fonts and layout for review and printing"
      ],
      zh: [
        "自動開啟來源活頁簿、移除不符代碼的列並執行條件篩選",
        "重新設定邊框、字型與版面，方便審核與列印"
      ]
    },
    stack: ["VBA", "Excel"],
    status: "confidential",
    repo: null
  },
  {
    id: "add-reagent-number",
    cat: "lab",
    title: { en: "Reagent Lot Number Filler", zh: "配製編號填寫工具" },
    tagline: {
      en: "Pulls calibration-curve and spike-solution lot numbers from the shared preparation log into the active report.",
      zh: "自配製紀錄活頁簿擷取檢量線與添加溶液編號，自動填入目前報表。"
    },
    highlights: {
      en: [
        "Opens the source log read-only to avoid lock contention",
        "Validates network path availability before access"
      ],
      zh: [
        "以唯讀方式開啟來源檔，避免鎖檔衝突",
        "存取前先驗證網路磁碟路徑可用性"
      ]
    },
    stack: ["VBA", "Excel"],
    status: "confidential",
    repo: null
  },
  {
    id: "append-control-chart",
    cat: "integrity",
    title: { en: "Control Chart Auto-Plotter", zh: "自動點管制圖工具" },
    tagline: {
      en: "Event-driven macros that append QC/QCR results from daily report sheets to the corresponding control chart workbook.",
      zh: "事件驅動巨集，將日報表中的 QC/QCR 數據自動新增至對應的品管圖活頁簿。"
    },
    highlights: {
      en: [
        "Two variants covering material-migration and dissolution test workflows",
        "Triggers on cell-change events, prompting for analysis date",
        "Supports both append and replace-last-entry modes"
      ],
      zh: [
        "區分材質試驗版與溶出試驗版兩種流程",
        "以儲存格變更事件觸發，並提示輸入分析日期",
        "支援「新增」與「取代最後一筆」兩種模式"
      ]
    },
    stack: ["VBA", "Excel"],
    status: "confidential",
    repo: null
  },
  {
    id: "residue-weight-record",
    cat: "lab",
    title: { en: "Residue Weight Record System", zh: "殘餘重量記錄自動化系統" },
    tagline: {
      en: "Multi-user Excel record system with background sync, overwrite protection and scheduled remote backup.",
      zh: "支援多人協作的 Excel 紀錄系統，具備背景同步、覆蓋保護與定期遠端備份。"
    },
    highlights: {
      en: [
        "Background timer saves every 10 seconds to keep concurrent editors in sync",
        "Intercepts change events and offers undo when an existing value would be overwritten",
        "Automatic backup on a schedule and on workbook close"
      ],
      zh: [
        "背景計時器每 10 秒自動儲存，確保多人編輯即時同步",
        "攔截變更事件，偵測覆寫既有數據時提供還原（Undo）",
        "定期及關檔時自動執行遠端備份"
      ]
    },
    stack: ["VBA", "Excel"],
    status: "confidential",
    repo: null
  },
  {
    id: "fill-area-volume",
    cat: "lab",
    title: { en: "Area / Volume Auto-Fill", zh: "面積體積自動填寫" },
    tagline: {
      en: "Fills contact-area and volume parameters used in migration test calculations.",
      zh: "自動填寫溶出試驗計算所需的接觸面積與體積參數。"
    },
    highlights: {
      en: ["Reduces repetitive parameter entry in test calculation sheets"],
      zh: ["減少試驗計算表中重複的參數輸入作業"]
    },
    stack: ["VBA", "Excel"],
    status: "confidential",
    repo: null
  },
  {
    id: "unsorted-tools",
    cat: "lab",
    title: { en: "Shared VBA Toolkit", zh: "VBA 共用工具集" },
    tagline: {
      en: "A reusable collection of Excel macro modules for form locking, checklist tidying, sign-off workflows and PDF export.",
      zh: "可重複使用的 Excel 巨集模組集合：表單鎖定、待檢清單整理、審核簽核與 PDF 匯出。"
    },
    highlights: {
      en: [
        "Batch form lock/unlock with password protection and post-review PDF export",
        "Checklist normalisation with conditional formatting for expiry reminders",
        "Sign-off workflow automation: unshare, stamp date, lock, relocate file"
      ],
      zh: [
        "表單批次鎖定／解鎖、密碼保護與審核後 PDF 匯出",
        "待檢清單欄位標準化與到期日條件格式提醒",
        "審核流程自動化：解除共用、簽核押日期、鎖定、搬移檔案"
      ]
    },
    stack: ["VBA", "Excel"],
    status: "confidential",
    repo: null
  },
  {
    id: "contract-review",
    cat: "ai",
    featured: true,
    title: { en: "AI Contract Review", zh: "AI 智能合約審核系統" },
    tagline: {
      en: "Edge-deployed LLM tool that flags contract risk and returns concrete, copy-ready revision suggestions.",
      zh: "部署於邊緣運算的 LLM 工具，標示合約風險並提供可直接引用的修改建議。"
    },
    highlights: {
      en: [
        "Reviews jurisdiction, liability caps and payment terms; red/amber/green risk dashboard",
        "Drag-and-drop PDF upload with automatic text extraction",
        "API key and prompt logic stay server-side in edge functions"
      ],
      zh: [
        "針對管轄法院、賠償上限、付款條件審查，以紅／黃／綠燈儀表板呈現風險",
        "支援拖放上傳 PDF 並自動擷取文字",
        "API 金鑰與分析邏輯完全在後端 Edge Function 執行，不外流"
      ]
    },
    stack: ["React", "Vite", "Tailwind CSS", "Cloudflare Pages Functions", "Gemini"],
    status: "confidential",
    repo: null,
    metrics: null,
    shots: []
  },
  {
    id: "cli-dev-sync-tool",
    cat: "ai",
    featured: true,
    title: { en: "CLI Dev Sync Tool", zh: "CLI 開發環境同步工具" },
    tagline: {
      en: "Keeps AI CLI conversation history and global settings in sync across two workstations via git.",
      zh: "以 git 在兩台工作電腦之間同步 AI CLI 的對話紀錄與全域設定。"
    },
    highlights: {
      en: [
        "Auto-pull before launching the CLI, auto commit + push on exit \u2014 context survives machine switches",
        "Separate private data repositories; the tool repo itself stores no history or credentials",
        "Wrapper commands for GitHub Copilot CLI and Antigravity CLI"
      ],
      zh: [
        "啟動 CLI 前自動 pull、關閉後自動 commit + push，換電腦時上下文不中斷",
        "對話資料存於獨立私有 repo，工具本身不存放任何紀錄或憑證",
        "提供 GitHub Copilot CLI 與 Antigravity CLI 的封裝指令"
      ]
    },
    stack: ["PowerShell", "Git"],
    status: "confidential",
    repo: null,
    metrics: null,
    shots: []
  },
  {
    id: "rehabilitation-training-android",
    cat: "apps",
    featured: true,
    title: { en: "Leg Rehabilitation Training", zh: "腿部復健訓練 App" },
    tagline: {
      en: "Android app helping post-arthroplasty seniors log daily rehabilitation exercises, set reminders and share progress with carers.",
      zh: "協助關節置換術後長者記錄每日復健訓練、設定提醒並與照護者分享進度的 Android App。"
    },
    highlights: {
      en: [
        "Designed for users aged 70+: large type, large tap targets, minimal navigation depth",
        "Four exercise types, daily reminders, fully local data storage",
        "Plain-text summary sharing via the Android Sharesheet for messaging apps",
        "Positioned strictly as a logging and reminder aid, not medical advice"
      ],
      zh: [
        "針對 70 歲以上使用者設計：大字級、大點擊區、淺層導覽",
        "四種訓練項目、每日提醒、資料完全儲存於本機",
        "透過 Android Sharesheet 以純文字摘要分享至通訊軟體",
        "定位為紀錄與提醒輔助工具，不提供醫療建議"
      ]
    },
    stack: ["Kotlin", "Jetpack Compose", "Room", "WorkManager"],
    status: "public",
    repo: "https://github.com/HHL1230/rehabilitation-training-android",
    demo: "https://hhl1230.github.io/my-products/rehabilitation-training/",
    metrics: null,
    shots: []
  },
  {
    id: "my-products",
    cat: "apps",
    title: { en: "Product Release Portal", zh: "產品發佈站" },
    tagline: {
      en: "GitHub Pages site distributing my finished tools with per-product download pages and release binaries.",
      zh: "以 GitHub Pages 架設的工具發佈入口，提供各產品專屬下載頁與發行檔。"
    },
    highlights: {
      en: [
        "Per-product landing pages with install guidance for non-technical users",
        "Serves signed release artefacts (EXE, APK) via GitHub Releases"
      ],
      zh: [
        "各產品獨立下載頁，提供非技術使用者的安裝指引",
        "透過 GitHub Releases 發佈執行檔（EXE、APK）"
      ]
    },
    stack: ["HTML", "CSS", "GitHub Pages"],
    status: "public",
    repo: "https://github.com/HHL1230/my-products",
    demo: "https://hhl1230.github.io/my-products/"
  },
  {
    id: "cute-snake-game",
    cat: "games",
    title: { en: "Cute Snake Game", zh: "可愛貪食蛇" },
    tagline: {
      en: "A browser snake game with randomised pastel themes, animal avatars and three difficulty speeds.",
      zh: "瀏覽器貪食蛇遊戲，具隨機粉彩主題、動物頭像與三段速度難度。"
    },
    highlights: {
      en: [
        "HTML5 Canvas rendering on a 40\u00D740 grid",
        "Four randomised colour themes and nine animal avatars",
        "No dependencies \u2014 vanilla JavaScript"
      ],
      zh: [
        "以 HTML5 Canvas 繪製 40\u00D740 格盤面",
        "四種隨機配色主題與九種動物頭像",
        "零相依套件，純原生 JavaScript"
      ]
    },
    stack: ["HTML5 Canvas", "CSS3", "JavaScript"],
    status: "public",
    repo: "https://github.com/HHL1230/cute-snake-game"
  },
  {
    id: "game-star-sprout-advanture",
    cat: "games",
    title: { en: "Star Sprout Adventure", zh: "星芽花園大冒險" },
    tagline: {
      en: "A gentle browser-based 3D rescue-and-collection game for children, with a split-screen two-player mode.",
      zh: "適合兒童的瀏覽器 3D 收集與救援遊戲，並提供雙人同機對戰模式。"
    },
    highlights: {
      en: [
        "Single and two-player competitive modes sharing one garden world",
        "Non-punishing design: collisions freeze and knock back rather than reset progress",
        "Launches via a loopback-only local server to avoid browser file:// module restrictions \u2014 works fully offline"
      ],
      zh: [
        "單人與雙人競賽模式共用同一座花園世界",
        "低挫折設計：碰撞僅短暫凍結與擊退，不會清除已收集進度",
        "以本機 loopback 伺服器啟動，避開瀏覽器 file:// 模組限制，可完全離線遊玩"
      ]
    },
    stack: ["JavaScript", "WebGL / 3D", "HTML5"],
    status: "public",
    repo: "https://github.com/HHL1230/game-star-sprout-advanture"
  },
  {
    id: "moto-duel",
    cat: "games",
    title: { en: "Moto Duel", zh: "MOTO DUEL 越野機車對決" },
    tagline: {
      en: "2D off-road motorcycle racing game with AI opponents, split-screen local multiplayer and procedurally generated audio.",
      zh: "2D 越野機車競速遊戲，支援 AI 對手、雙人同機分割畫面與程序化合成音樂音效。"
    },
    highlights: {
      en: [
        "Off-road physics: rolling terrain, jumps, mid-air rotation and landing-angle evaluation",
        "Three AI difficulty tiers, three-round match format and catch-up assistance",
        "15-achievement progression system persisted across sessions",
        "Procedurally synthesised background music and sound effects"
      ],
      zh: [
        "越野物理：連續起伏地形、跳台、空中翻滾與落地角度判定",
        "三種 AI 難度、三回合制對決與落後方追趕補給",
        "15 項成就系統，跨場次保存進度",
        "程序化合成的背景音樂與音效"
      ]
    },
    stack: ["Python", "pygame-ce"],
    status: "confidential",
    repo: null
  }
];
