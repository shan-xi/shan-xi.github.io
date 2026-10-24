import { useState } from 'react'

const translations: Record<string, string> = {
  "SOFTWARE ENGINEER": "軟體工程師",
  "About": "關於我",
  "Experience": "工作經歷",
  "Focus": "專業領域",
  "Let’s connect": "聯絡我",
  "OPEN TO BUILDING WHAT’S NEXT": "期待打造下一個可能",
  "Turning complex": "化繁為簡，",
  "problems into ": "複雜問題，成就",
  "reliable": "可靠的",
  "software.": "軟體。",
  "I’m Shan Xi Liao, a software engineer focused on backend systems, e-commerce platforms, and payment solutions that work at scale.": "我是廖善璽，專注於後端系統、電子商務平台與可擴展的支付解決方案。",
  "Explore my work": "探索我的作品",
  "A little about me": "認識我",
  "BASED IN TAIWAN": "目前位於台灣",
  "CURRENT FOCUS": "目前專注",
  "Backend systems": "後端系統",
  "Built for reliability": "以可靠性為核心",
  "years around": "年軟體開發經驗",
  "web applications": "Web 應用程式",
  "ENGINEERING WITH PURPOSE": "以目標驅動工程",
  "SCROLL TO EXPLORE": "向下探索",
  "01 / ABOUT": "01 / 關於我",
  "Curious by nature.": "天生好奇，",
  "Engineer": "工程師",
  " by choice.": "是我的選擇。",
  "I enjoy making complicated systems feel simple — for the people who use them and the teams who maintain them.": "我喜歡將複雜系統化繁為簡，讓使用者更容易操作，也讓維護團隊更容易持續改善。",
  "My journey began with Java and an academic background in logistics management. Over the years, I’ve worked across payment gateways, e-commerce, warehousing, international logistics, and promotional platforms.": "我的職涯從 Java 開始，並結合物流管理的學術背景。多年來，我參與過支付閘道、電子商務、倉儲、國際物流及行銷活動平台等領域。",
  "I’m comfortable moving between architecture and implementation: from traditional web applications to separated frontend/backend systems and distributed services deployed on virtual machines or cloud platforms. I keep learning, currently exploring Go, Docker, cloud infrastructure, and practical AI applications.": "我能在系統架構與實作之間靈活切換，從傳統網站到前後端分離系統，以及部署於虛擬機或雲端的分散式服務。我持續學習，目前也在探索 Go、Docker、雲端基礎設施與 AI 實務應用。",
  "EDUCATION": "學歷",
  "National Dong Hwa University": "國立東華大學",
  "Graduate Institute of Logistics Management": "全球運籌管理研究所",
  "ALSO STUDIED": "另有學歷",
  "Tamkang University": "淡江大學",
  "International Business": "國際企業學系",
  "02 / WHAT I DO": "02 / 專業領域",
  "Where I bring": "我能創造價值的",
  "the most value.": "關鍵所在。",
  "Good engineering is more than writing code. It’s understanding the business, choosing the right trade-offs, and making systems easier to evolve.": "優秀的工程不只是寫程式，更要理解業務、做出合適的取捨，並打造容易持續演進的系統。",
  "Backend engineering": "後端工程",
  "Reliable APIs, service design, performance, and maintainable systems.": "可靠的 API、服務設計、效能與易維護的系統。",
  "Commerce & payments": "商務與支付",
  "E-commerce operations, payment flows, inventory, and integrations.": "電子商務營運、支付流程、庫存及系統整合。",
  "Distributed systems": "分散式系統",
  "Event-driven services, asynchronous processing, and cloud deployment.": "事件驅動服務、非同步處理與雲端部署。",
  "03 / EXPERIENCE": "03 / 工作經歷",
  "A career built": "一路以來，專注於",
  "around ": "解決",
  "solving things.": "實際問題。",
  "Across finance, commerce, logistics, and global shipping, I’ve helped teams deliver software for real operational needs.": "我曾在金融、商務、物流與全球航運等領域，協助團隊打造符合實際營運需求的軟體。",
  "PROJECT": "專案",
  "View related resource ↗": "查看相關資源 ↗",
  "View larger ↗": "放大檢視 ↗",
  "04 / CREDENTIALS": "04 / 證照與學習",
  "Always learning.": "持續學習，",
  "Always building.": "持續打造。",
  "A mix of formal study, professional certifications, and hands-on curiosity keeps my perspective growing.": "透過正式教育、專業證照與實作探索，不斷拓展自己的技術視野。",
  "ML / DL tutorial materials": "機器學習／深度學習教材",
  "Oracle Certified Professional": "Oracle 專業認證",
  "Java SE 11 Developer": "Java SE 11 開發者",
  "AWS Certified": "AWS 認證",
  "Cloud Practitioner": "雲端從業人員",
  "Tested April 2021": "測驗日期：2021 年 4 月",
  "LANGUAGE": "語言",
  "Honorable Mention · 2019–2020 project": "佳作 · 2019–2020 年專案",
  "AI / ML": "人工智慧／機器學習",
  "05 / CONTACT": "05 / 聯絡方式",
  "HAVE A GOOD PROBLEM TO SOLVE?": "有值得一起解決的問題嗎？",
  "Let’s make": "一起打造",
  "something matter.": "真正有意義的軟體。",
  "I’m always happy to connect with engineers and teams who care about building thoughtful, dependable software.": "我很樂意與重視細節、可靠性及軟體品質的工程師與團隊交流。",
  "Find me on GitHub": "在 GitHub 找到我",
  "Designed with care · Built with React": "用心設計 · 以 React 打造",
  "BACK TO TOP ↑": "回到頂端 ↑",
  "Toggle navigation": "切換導覽",
  "Close −": "關閉 −",
  "Menu +": "選單 +",
  "Shan Xi home": "回到首頁",
  "Wallet System": "錢包系統",
  "Payment Gateway System": "支付閘道系統",
  "New E-commerce (EC) Backend Core System": "新一代電子商務後端核心系統",
  "Brand Representation Website: Bloomingville": "品牌形象網站：Bloomingville",
  "Backend Development for 618 Shopping Day": "618 購物節網站後端開發",
  "MyRewards Administration Platform (CMS)": "MyRewards 管理平台（CMS）",
  "MyRewards Backend APIs": "MyRewards 後端 API",
  "Auto Tagging POC": "自動標籤概念驗證",
  "CMS Desktop Application": "CMS 桌面應用程式",
  "Machine Learning Lecturer": "機器學習講師",
  "uDesign Online Shop": "uDesign 線上商店",
  "Warehouse & Logistics System": "倉儲與物流系統",
  "Supplier Administration Website": "供應商管理網站",
  "Global Logistics System": "全球物流系統",
  "Terminals Operating System": "貨櫃碼頭作業系統",
  "Evergreen Logistics Official Website": "長榮物流官方網站",
  "Software Engineer (Java)": "軟體工程師（Java）",
  "Senior Java Backend Engineer": "資深 Java 後端工程師",
  "Software Engineer (Java, Python)": "軟體工程師（Java、Python）",
  "Backend Engineer (PHP)": "後端工程師（PHP）",
  "BTSE was originally a project within Nogle and became an independent company in 2025. Employees working on the project were transferred to BTSE.": "BTSE 最初是 Nogle 旗下的專案，並於 2025 年成為獨立公司；參與該專案的員工也轉任至 BTSE。",
  "Maintained, developed, and tested the wallet system and its blockchain integrations, supporting cryptocurrency deposit and withdrawal operations.": "維護、開發並測試錢包系統及其區塊鏈整合，支援加密貨幣存入與提領作業。",
  "Collaborated with an international engineering team to develop and launch a new payment gateway product, representing the Taiwan development team.": "與國際工程團隊合作開發並推出全新支付閘道產品，代表台灣開發團隊參與協作。",
  "This payment gateway enables merchants to process transactions with customers using a variety of payment methods. It offers flexible integration options, including merchant-hosted and payment-gateway-hosted solutions.": "此支付閘道讓商家能透過多種付款方式處理客戶交易，並提供彈性的整合方式，包括商家託管與支付閘道託管方案。",
  "Responsible for system architecture decisions, guiding colleagues, reviewing code, contributing to development, resolving production issues, discussing requirements, and coordinating delivery schedules.": "負責系統架構決策、同事指導、程式碼審查、功能開發、正式環境問題排除、需求討論及交付時程協調。",
  "The central platform consolidates company data and integrates with POS, the Core Platform Administration Panel, and other business subsystems. It supports inventory management, purchasing workflows, product delivery, warehouse operations, e-commerce order processing, and marketing-data analysis.": "此核心平台整合公司資料，並串接 POS、核心平台管理後台及其他業務子系統，支援庫存管理、採購流程、商品配送、倉儲作業、電商訂單處理與行銷資料分析。",
  "Built backend capabilities for a brand-specific Bloomingville website integrated into the main Store Marais website. The work included planning data flow and improving the efficiency and consistency of data retrieval.": "為整合於 Store Marais 主站中的 Bloomingville 品牌網站開發後端功能，規劃資料流並提升資料擷取效率與一致性。",
  "Developed backend services for a promotional website supporting the e-commerce shop. Visitors could collect coupons, join interactive activities, and participate in gift promotions as part of the 618 shopping campaign.": "為電商促銷網站開發後端服務，讓訪客可於 618 購物節活動中領取優惠券、參與互動活動及抽獎促銷。",
  "Developed MyRewards platform features, backend APIs, a content-management system, and a machine-learning proof of concept across web and desktop environments.": "開發 MyRewards 平台功能、後端 API、內容管理系統，以及可用於網頁與桌面環境的機器學習概念驗證專案。",
  "A content-management hub for the MyRewards app that coordinates data exchange between systems. It uses asynchronous distributed queues to handle long-running tasks without request timeouts, WebSockets to deliver live updates without page refreshes, configurable role-based permissions, and scheduled jobs whose status can be changed at runtime.": "MyRewards App 的內容管理中心，負責協調系統間的資料交換。透過非同步分散式佇列處理長時間任務以避免請求逾時，使用 WebSocket 即時推送進度而無須重新整理頁面，並提供可設定的角色權限與可於執行期間調整狀態的排程工作。",
  "Provided backend APIs for the MyRewards Android, iOS, and web experiences. My main contributions included e-invoice APIs and push-notification APIs, helping users query e-invoices, register mobile devices, and manage notification messages. The backend also supported marketing teams running promotional campaigns through push notifications.": "為 MyRewards Android、iOS 與網站提供後端 API。主要工作包括電子發票與推播通知 API，協助使用者查詢電子發票、註冊行動裝置及管理通知訊息；後端也支援行銷團隊透過推播執行促銷活動。",
  "Explored automatic tagging based on customer consumption details as a Natural Language Processing classification problem. Implemented a Bidirectional LSTM deep-learning model and wrapped prediction and training workflows in a Kivy desktop GUI. Also collected additional website data to improve dataset balance and model accuracy.": "將依據客戶消費明細進行自動標籤視為自然語言處理分類問題，實作雙向 LSTM 深度學習模型，並以 Kivy 桌面 GUI 整合訓練與預測流程；同時蒐集額外網站資料，改善資料集平衡與模型準確度。",
  "A cross-platform desktop application providing Content Management System (CMS) capabilities through a powerful backend API. The desktop workflow includes checking push-message download status, choosing files, and reviewing process results.": "跨平台桌面應用程式，透過後端 API 提供內容管理系統（CMS）功能。桌面操作流程包含檢查推播訊息下載狀態、選擇檔案及檢視處理結果。",
  "Prepared an introduction to classical machine learning and deep learning, enriched with practical coding examples, and shared the material with colleagues.": "整理傳統機器學習與深度學習的入門教材，加入實作程式範例並與同事分享。",
  "Worked on online retail and e-commerce experiences.": "參與線上零售與電子商務產品的開發。",
  "uDesign Online Shop is an e-commerce platform designed to showcase and promote products from talented designers.": "uDesign 線上商店是一個展示並推廣優秀設計師商品的電子商務平台。",
  "Built business applications for warehouse, logistics, and supplier administration.": "開發倉儲、物流及供應商管理相關的商業應用程式。",
  "The warehouse/logistics system is the primary kernel of the e-commerce platform, managing suppliers’ stock and product logistics.": "倉儲／物流系統是電商平台的核心，負責管理供應商庫存與商品物流。",
  "A website that enables suppliers to manage their stock and product information.": "讓供應商管理庫存與商品資訊的網站。",
  "Developed systems and web experiences in the global logistics and shipping domain.": "開發全球物流與航運領域的系統及網站服務。",
  "A system used to manage the full flow of international business.": "用於管理國際業務完整流程的系統。",
  "A system used to manage container status at terminals.": "用於管理貨櫃碼頭貨櫃狀態的系統。",
  "Maintained, upgraded, and troubleshot blockchain nodes, including Vana, Sui, Aptos, AB Foundation Global, Blast, IoTeX, and Moonbeam.": "維護、升級並排除多個區塊鏈節點問題，包括 Vana、Sui、Aptos、AB Foundation Global、Blast、IoTeX 與 Moonbeam。",
  "Adapted wallet integrations to changes in blockchain APIs, data structures, and communication protocols.": "因應區塊鏈 API、資料結構與通訊協定變更，調整錢包整合功能。",
  "Refactored and optimized blockchain integration modules to improve consistency, maintainability, and code reuse across networks.": "重構並最佳化區塊鏈整合模組，提升不同網路間的一致性、可維護性與程式碼重用率。",
  "Designed and implemented wallet segregation for different groups and characteristics, including XRP, GRAM, and SUI.": "依不同群組與特性設計並實作錢包分流，包括 XRP、GRAM 與 SUI。",
  "Developed and maintained token-listing functionality for exchange trading, and implemented token-renaming functionality with related system updates.": "開發並維護交易所上架代幣功能，實作代幣更名及相關系統更新。",
  "Integrated EVM-compatible networks, including Vana and HyperEVM, supporting coin deposits, withdrawals, and trading-related operations.": "整合 Vana、HyperEVM 等 EVM 相容網路，支援幣種存入、提領及交易相關作業。",
  "Implemented Slack low-balance notifications to improve operational monitoring and incident response.": "實作 Slack 餘額不足通知，提升營運監控與事件應變能力。",
  "Automated CI/CD pipelines for core token-related modules, reducing manual deployment work and improving consistency.": "自動化代幣核心模組的 CI/CD 流程，減少手動部署工作並提升一致性。",
  "Optimized SQL queries and database performance for reporting and operational workflows.": "最佳化 SQL 查詢與資料庫效能，以改善報表及營運流程。",
  "Designed and developed RESTful APIs for the administrative portal.": "為管理入口網站設計並開發 RESTful API。",
  "Led the migration from Java 8 to Java 17 and Spring Boot 2 to Spring Boot 3.": "主導從 Java 8 升級至 Java 17，以及從 Spring Boot 2 遷移至 Spring Boot 3。",
  "Integrated Hibernate second-level caching with a Redis cluster to improve data-access and query efficiency.": "整合 Hibernate 第二層快取與 Redis 叢集，提升資料存取與查詢效率。",
  "Built non-blocking server-sent-event notifications using Spring WebFlux and Reactive Kafka for high-concurrency, low-latency delivery.": "使用 Spring WebFlux 與 Reactive Kafka 建立非阻塞的 Server-Sent Events 通知，支援高併發、低延遲傳遞。",
  "Integrated OpenAPI / Swagger to improve API documentation and coordination between frontend and backend teams.": "整合 OpenAPI／Swagger，改善 API 文件品質及前後端團隊協作。",
  "Designed and developed more than 100 APIs for the e-commerce core system.": "為電商核心系統設計並開發超過 100 支 API。",
  "Independently handled the end-to-end project lifecycle: planning, design, development, testing, deployment, and maintenance.": "獨立負責專案完整生命週期，涵蓋規劃、設計、開發、測試、部署與維護。",
  "Used Gunicorn for multi-process request handling and Celery for asynchronous distributed task queues.": "使用 Gunicorn 處理多程序請求，並以 Celery 建立非同步分散式任務佇列。",
  "Delivered server-to-client updates through WebSockets, including task progress and queue results.": "透過 WebSocket 將任務進度與佇列結果即時推送至用戶端。",
  "Implemented flexible account settings with role-based authorization.": "實作彈性的帳號設定與角色型存取控制。",
  "Built a modular Flask structure, a shared data-audit flow using Flask signals, and maintainable Jinja templates.": "建立模組化 Flask 架構，使用 Flask signals 共用資料稽核流程，並維護易於管理的 Jinja 範本。",
  "Implemented multi-threaded request handling through Gunicorn.": "透過 Gunicorn 實作多執行緒請求處理。",
  "Developed e-invoice APIs for querying invoices and registering mobile devices.": "開發電子發票查詢與行動裝置註冊 API。",
  "Created push-notification APIs for users to access and manage their message list.": "建立推播通知 API，讓使用者查閱及管理訊息清單。",
  "Built backend support for marketing push campaigns.": "開發支援行銷推播活動的後端功能。",
  "Implemented scheduled jobs using the Spring Framework.": "使用 Spring Framework 實作排程工作。",
  "Implemented single-item and batch prediction workflows.": "實作單筆與批次預測流程。",
  "Built a GUI for model training and prediction.": "建立模型訓練與預測的圖形化介面。",
  "Collected additional data from websites to help improve dataset balance and classification accuracy.": "從網站蒐集額外資料，以改善資料集平衡與分類準確度。",
  "Introduced a desktop-based content-management workflow.": "導入桌面版內容管理工作流程。",
  "Developed a headless CMS solution using backend APIs for flexible content management.": "使用後端 API 開發 Headless CMS，提供彈性的內容管理方式。",
  "Improved inventory-replenishment job execution time from several hours to approximately half an hour.": "將庫存補貨排程的執行時間從數小時縮短至約半小時。",
  "Maintained the official Evergreen Logistics website and improved its performance.": "維護長榮物流官方網站並改善網站效能。",
  "Maintained the corporate website.": "維護企業官方網站。",
  "Improved performance by modifying the database connection-pool mechanism.": "透過調整資料庫連線池機制改善效能。",
  "BTSE Limited": "彼特思方舟",
  "Nogle Taiwan Limited": "諾傑",
  "Store Marais": "瑪黑家居選物",
  "Cathay Financial Holdings Co., Ltd.": "國泰金融控股股份有限公司",
  "udnFunLife Co., Ltd.": "udnFunLife 聯合多媒體",
  "uitox Global E-commerce Group": "uitox 全球電子商務集團",
  "Evergreen International Corp.": "長榮國際股份有限公司",
  "Developed and helped launch a new payment gateway product with cross-functional teams across multiple countries.": "與多國跨職能團隊合作開發並推出全新支付閘道產品。",
  "Customized existing APIs to meet API specifications and integration requirements for Taiwan BTSE.": "調整既有 API，以符合台灣 BTSE 的 API 規格與整合需求。",
  "Enhanced the backend administration system with a multi-level distribution system using a hierarchical tree structure.": "在後台管理系統中加入以階層樹狀結構呈現的多層級分潤系統。",
  "Refactored merchant pay-in and pay-out APIs to improve maintainability, scalability, and integration flexibility.": "重構商家收款與付款 API，提升可維護性、可擴展性與整合彈性。",
  "Integrated third-party credit-card verification services to strengthen transaction security and fraud prevention.": "整合第三方信用卡驗證服務，強化交易安全與詐欺防範。",
  "Troubleshot and resolved CI/CD pipeline issues to improve deployment reliability.": "排除並解決 CI/CD 流程問題，提升部署可靠性。",
  "Helped merchants integrate payment APIs and resolved technical integration issues.": "協助商家整合支付 API，並排除技術整合問題。",
  "Designed the data flow to make data retrieval more efficient and maintainable.": "設計資料流，讓資料擷取更有效率且易於維護。",
  "Used Redis caching to support data computation and improve response performance.": "使用 Redis 快取支援資料運算並提升回應效能。",
  "Integrated the Notion database API to manage and present campaign content.": "整合 Notion 資料庫 API，以管理並呈現活動內容。",
  "Implemented Redis caching to reduce repeated calls to Notion and keep the campaign website responsive.": "實作 Redis 快取，減少重複呼叫 Notion，維持活動網站的回應速度。",
  "Maintained, developed, and tested backend APIs.": "維護、開發並測試後端 API。",
  "Maintained, developed, and tested stock-processing modules, including inbound, outbound, and data exchange with logistics providers.": "維護、開發並測試庫存處理模組，涵蓋入庫、出庫及與物流業者的資料交換。",
  "Developed inventory functions that let vendors control stock status.": "開發庫存管理功能，讓供應商能控管庫存狀態。",
  "Developed APIs for data exchange with supplier systems.": "開發與供應商系統進行資料交換的 API。",
  "Developed booking, document, vessel-routing, and data-exchange subsystems.": "開發訂艙、文件、船舶航線及資料交換子系統。",
  "Developed PDF and XLS report programs and scheduled jobs.": "開發 PDF、XLS 報表程式及排程工作。",
  "Researched potential side effects of library upgrades, including POI and JFreeChart.": "研究 POI、JFreeChart 等函式庫升級可能造成的影響。",
  "Created a regular-expression-based tool to speed up resolution of IE8 security issues and reduce manual remediation effort.": "建立以正規表示式為基礎的工具，加速處理 IE8 安全性問題並減少人工修正工作。",
  "Developed and tested system functions.": "開發並測試系統功能。",
  "Developed and tested statistical reports.": "開發並測試統計報表。",
  "Improved frontend and backend program performance.": "改善前端與後端程式效能。",
  "Built a cross-border sales module for international commerce.": "建置跨境銷售模組，支援國際商務。",
  "Implemented data exchange with external systems.": "實作與外部系統的資料交換。",
  "Developed a dedicated membership-recruitment webpage.": "開發專屬會員招募網頁。",
  "Created business-logic documentation and coding guidelines.": "建立商業邏輯文件與程式撰寫規範。",
  "Pioneered an administration website for the next generation of the platform.": "為平台下一個世代開發管理網站。",
  "Backend APIs Swagger: push-notification APIs": "後端 API Swagger：推播通知 API",
  "Backend APIs Swagger: e-invoice APIs": "後端 API Swagger：電子發票 API",
  "CMS: data list view from the database": "CMS：資料庫清單檢視",
  "CMS: data detail view from the database": "CMS：資料庫詳細資料檢視",
  "CMS: platform function menu settings": "CMS：平台功能選單設定",
  "CMS: scheduled task settings": "CMS：排程任務設定",
  "CMS: asynchronous queue process results": "CMS：非同步佇列處理結果",
  "CMS: Celery monitor view": "CMS：Celery 監控畫面",
  "CMS: data editor view": "CMS：資料編輯畫面",
  "CMS: queue usage and WebSocket notifications": "CMS：佇列使用情況與 WebSocket 通知",
  "CMS: progress bar using queues and WebSockets": "CMS：透過佇列與 WebSocket 顯示進度列",
  "CMS Desktop App: download push-message status": "CMS 桌面應用程式：推播訊息下載狀態",
  "CMS Desktop App: file chooser": "CMS 桌面應用程式：檔案選擇器",
  "CMS Desktop App: process result": "CMS 桌面應用程式：處理結果",
  "Jan 2025 — Oct 2026": "2025 年 1 月 — 2026 年 10 月",
  "problems into": "將複雜問題，轉化為",
  "by choice.": "是我的選擇。",
  "around": "致力於",
  "TOEIC 785": "TOEIC 785 分",
  "Taiwan AI Academy": "台灣人工智慧學校",
  "Explained machine-learning and deep-learning fundamentals.": "說明機器學習與深度學習的基礎概念。",
  "Shared practical coding skills and examples with colleagues.": "與同事分享實作技巧與程式範例。"
} as const
type Language = 'en' | 'zh-TW'


type Project = { name: string; description: string; stack: string[]; highlights?: string[]; images?: string[]; imageCaptions?: string[]; link?: string }
type Experience = { company: string; role: string; period: string; intro: string; projects: Project[] }

const experiences: Experience[] = [
  {
    company: 'BTSE Limited', role: 'Software Engineer (Java)', period: 'Jan 2025 — Oct 2026',
    intro: 'BTSE was originally a project within Nogle and became an independent company in 2025. Employees working on the project were transferred to BTSE.',
    projects: [{ name: 'Wallet System', description: 'Maintained, developed, and tested the wallet system and its blockchain integrations, supporting cryptocurrency deposit and withdrawal operations.', stack: ['Java', 'REST APIs', 'SQL', 'Blockchain integrations', 'CI/CD'], highlights: ['Maintained, upgraded, and troubleshot blockchain nodes, including Vana, Sui, Aptos, AB Foundation Global, Blast, IoTeX, and Moonbeam.', 'Adapted wallet integrations to changes in blockchain APIs, data structures, and communication protocols.', 'Refactored and optimized blockchain integration modules to improve consistency, maintainability, and code reuse across networks.', 'Designed and implemented wallet segregation for different groups and characteristics, including XRP, GRAM, and SUI.', 'Developed and maintained token-listing functionality for exchange trading, and implemented token-renaming functionality with related system updates.', 'Integrated EVM-compatible networks, including Vana and HyperEVM, supporting coin deposits, withdrawals, and trading-related operations.', 'Implemented Slack low-balance notifications to improve operational monitoring and incident response.', 'Automated CI/CD pipelines for core token-related modules, reducing manual deployment work and improving consistency.', 'Optimized SQL queries and database performance for reporting and operational workflows.', 'Designed and developed RESTful APIs for the administrative portal.'] }],
  },
  {
    company: 'Nogle Taiwan Limited', role: 'Software Engineer (Java)', period: 'May 2024 — Dec 2024',
    intro: 'Collaborated with an international engineering team to develop and launch a new payment gateway product, representing the Taiwan development team.',
    projects: [{ name: 'Payment Gateway System', description: 'This payment gateway enables merchants to process transactions with customers using a variety of payment methods. It offers flexible integration options, including merchant-hosted and payment-gateway-hosted solutions.', stack: ['Java 8 / 11', 'Spring Boot 2', 'Hibernate 5', 'Struts 2', 'MySQL', 'MongoDB', 'Tomcat', 'Jenkins', 'AWS'], highlights: ['Developed and helped launch a new payment gateway product with cross-functional teams across multiple countries.', 'Customized existing APIs to meet API specifications and integration requirements for Taiwan BTSE.', 'Enhanced the backend administration system with a multi-level distribution system using a hierarchical tree structure.', 'Refactored merchant pay-in and pay-out APIs to improve maintainability, scalability, and integration flexibility.', 'Integrated third-party credit-card verification services to strengthen transaction security and fraud prevention.', 'Troubleshot and resolved CI/CD pipeline issues to improve deployment reliability.', 'Helped merchants integrate payment APIs and resolved technical integration issues.'] }],
  },
  {
    company: 'Store Marais', role: 'Senior Java Backend Engineer', period: 'Apr 2023 — Apr 2024',
    intro: 'Responsible for system architecture decisions, guiding colleagues, reviewing code, contributing to development, resolving production issues, discussing requirements, and coordinating delivery schedules.',
    projects: [
      { name: 'New E-commerce (EC) Backend Core System', description: 'The central platform consolidates company data and integrates with POS, the Core Platform Administration Panel, and other business subsystems. It supports inventory management, purchasing workflows, product delivery, warehouse operations, e-commerce order processing, and marketing-data analysis.', stack: ['Java 17', 'Spring Boot 3', 'Spring Framework 6', 'Spring WebFlux', 'Hibernate 6', 'Redis Cluster', 'MySQL', 'MongoDB', 'Kafka', 'Reactive Kafka', 'WebSocket', 'SSE', 'OpenAPI / Swagger 3', 'Quartz', 'Jenkins'], highlights: ['Led the migration from Java 8 to Java 17 and Spring Boot 2 to Spring Boot 3.', 'Integrated Hibernate second-level caching with a Redis cluster to improve data-access and query efficiency.', 'Built non-blocking server-sent-event notifications using Spring WebFlux and Reactive Kafka for high-concurrency, low-latency delivery.', 'Integrated OpenAPI / Swagger to improve API documentation and coordination between frontend and backend teams.', 'Designed and developed more than 100 APIs for the e-commerce core system.'] },
      { name: 'Brand Representation Website: Bloomingville', link: 'https://www.storemarais.com/bloomingville', description: 'Built backend capabilities for a brand-specific Bloomingville website integrated into the main Store Marais website. The work included planning data flow and improving the efficiency and consistency of data retrieval.', stack: ['Java 8', 'Play Framework 1', 'Redis Cluster', 'MySQL', 'MongoDB', 'Jenkins'], highlights: ['Designed the data flow to make data retrieval more efficient and maintainable.', 'Used Redis caching to support data computation and improve response performance.'] },
      { name: 'Backend Development for 618 Shopping Day', description: 'Developed backend services for a promotional website supporting the e-commerce shop. Visitors could collect coupons, join interactive activities, and participate in gift promotions as part of the 618 shopping campaign.', stack: ['Java 8', 'Play Framework 1', 'Redis Cluster', 'MySQL', 'MongoDB', 'Notion Database API'], highlights: ['Integrated the Notion database API to manage and present campaign content.', 'Implemented Redis caching to reduce repeated calls to Notion and keep the campaign website responsive.'] },
    ],
  },
  {
    company: 'Cathay Financial Holdings Co., Ltd.', role: 'Software Engineer (Java, Python)', period: 'Sep 2018 — Jun 2022',
    intro: 'Developed MyRewards platform features, backend APIs, a content-management system, and a machine-learning proof of concept across web and desktop environments.',
    projects: [
      { name: 'MyRewards Administration Platform (CMS)', description: 'A content-management hub for the MyRewards app that coordinates data exchange between systems. It uses asynchronous distributed queues to handle long-running tasks without request timeouts, WebSockets to deliver live updates without page refreshes, configurable role-based permissions, and scheduled jobs whose status can be changed at runtime.', stack: ['Python 3', 'Flask', 'SQLAlchemy', 'JavaScript ES6', 'jQuery 3', 'Bootstrap 4', 'HTML / CSS', 'Celery', 'PostgreSQL', 'WebSockets', 'Gunicorn', 'Selenium', 'AWS EC2', 'Azure DevOps CI/CD', 'Docker', 'Linux'], images: Array.from({ length: 9 }, (_, i) => `/img/Compressed_and_resized_c_p${i + 1}.png`), imageCaptions: ['CMS: data list view from the database', 'CMS: data detail view from the database', 'CMS: platform function menu settings', 'CMS: scheduled task settings', 'CMS: asynchronous queue process results', 'CMS: Celery monitor view', 'CMS: data editor view', 'CMS: queue usage and WebSocket notifications', 'CMS: progress bar using queues and WebSockets'], highlights: ['Independently handled the end-to-end project lifecycle: planning, design, development, testing, deployment, and maintenance.', 'Used Gunicorn for multi-process request handling and Celery for asynchronous distributed task queues.', 'Delivered server-to-client updates through WebSockets, including task progress and queue results.', 'Implemented flexible account settings with role-based authorization.', 'Built a modular Flask structure, a shared data-audit flow using Flask signals, and maintainable Jinja templates.', 'Implemented multi-threaded request handling through Gunicorn.'] },
      { name: 'MyRewards Backend APIs', description: 'Provided backend APIs for the MyRewards Android, iOS, and web experiences. My main contributions included e-invoice APIs and push-notification APIs, helping users query e-invoices, register mobile devices, and manage notification messages. The backend also supported marketing teams running promotional campaigns through push notifications.', stack: ['Java', 'Spring Framework', 'Spring Boot', 'Spring Cloud', 'Hibernate', 'Maven', 'Oracle', 'Redis', 'Azure DevOps CI/CD', 'OpenShift', 'JUnit', 'Postman'], images: ['/img/Compressed_and_resized_a_p1.png', '/img/Compressed_and_resized_a_p2.png'], imageCaptions: ['Backend APIs Swagger: push-notification APIs', 'Backend APIs Swagger: e-invoice APIs'], highlights: ['Developed e-invoice APIs for querying invoices and registering mobile devices.', 'Created push-notification APIs for users to access and manage their message list.', 'Built backend support for marketing push campaigns.', 'Implemented scheduled jobs using the Spring Framework.'] },
      { name: 'Auto Tagging POC', description: 'Explored automatic tagging based on customer consumption details as a Natural Language Processing classification problem. Implemented a Bidirectional LSTM deep-learning model and wrapped prediction and training workflows in a Kivy desktop GUI. Also collected additional website data to improve dataset balance and model accuracy.', stack: ['Python', 'NLP', 'Deep Learning', 'Bidirectional LSTM', 'Kivy', 'Web Scraping'], images: Array.from({ length: 4 }, (_, i) => `/img/Compressed_and_resized_auto_tagging_p${i + 1}.png`), highlights: ['Implemented single-item and batch prediction workflows.', 'Built a GUI for model training and prediction.', 'Collected additional data from websites to help improve dataset balance and classification accuracy.'] },
      { name: 'CMS Desktop Application', description: 'A cross-platform desktop application providing Content Management System (CMS) capabilities through a powerful backend API. The desktop workflow includes checking push-message download status, choosing files, and reviewing process results.', stack: ['Java', 'Swing', 'Backend APIs', 'Content Management'], images: ['/img/Compressed_and_resized_xicms_p1.png', '/img/Compressed_and_resized_xicms_p2.png', '/img/Compressed_and_resized_xicms_p3.png'], imageCaptions: ['CMS Desktop App: download push-message status', 'CMS Desktop App: file chooser', 'CMS Desktop App: process result'], highlights: ['Introduced a desktop-based content-management workflow.', 'Developed a headless CMS solution using backend APIs for flexible content management.'] },
      { name: 'Machine Learning Lecturer', description: 'Prepared an introduction to classical machine learning and deep learning, enriched with practical coding examples, and shared the material with colleagues.', stack: ['Machine Learning', 'Deep Learning', 'Knowledge Sharing'], highlights: ['Explained machine-learning and deep-learning fundamentals.', 'Shared practical coding skills and examples with colleagues.'], link: 'https://docs.google.com/presentation/d/1oS5H5sg3oYR98hgekwHNnEdzx1C15k1g48NIZPSSdeU/edit?usp=sharing' },
    ],
  },
  {
    company: 'udnFunLife Co., Ltd.', role: 'Software Engineer (Java)', period: 'Mar 2017 — May 2018',
    intro: 'Worked on online retail and e-commerce experiences.',
    projects: [{ name: 'uDesign Online Shop', description: 'uDesign Online Shop is an e-commerce platform designed to showcase and promote products from talented designers.', stack: ['Spring 2.x / 4.x', 'Spring MVC', 'Struts 1.x', 'iBatis / MyBatis', 'Java', 'Servlet / JSP', 'Oracle', 'MySQL', 'JavaScript', 'CSS', 'HTML', 'JBoss', 'SVN', 'Git'], highlights: ['Improved frontend and backend program performance.', 'Built a cross-border sales module for international commerce.', 'Implemented data exchange with external systems.', 'Developed a dedicated membership-recruitment webpage.', 'Created business-logic documentation and coding guidelines.', 'Pioneered an administration website for the next generation of the platform.'] }],
  },
  {
    company: 'uitox Global E-commerce Group', role: 'Backend Engineer (PHP)', period: 'Apr 2014 — Sep 2016',
    intro: 'Built business applications for warehouse, logistics, and supplier administration.',
    projects: [
      { name: 'Warehouse & Logistics System', description: 'The warehouse/logistics system is the primary kernel of the e-commerce platform, managing suppliers’ stock and product logistics.', stack: ['PHP 5', 'Oracle SQL', 'Git', 'CodeIgniter'], highlights: ['Maintained, developed, and tested stock-processing modules, including inbound, outbound, and data exchange with logistics providers.', 'Maintained, developed, and tested backend APIs.', 'Improved inventory-replenishment job execution time from several hours to approximately half an hour.'] },
      { name: 'Supplier Administration Website', description: 'A website that enables suppliers to manage their stock and product information.', stack: ['PHP 5', 'MySQL', 'JavaScript', 'HTML', 'Git', 'CodeIgniter'], highlights: ['Developed inventory functions that let vendors control stock status.', 'Developed APIs for data exchange with supplier systems.'] },
    ],
  },
  {
    company: 'Evergreen International Corp.', role: 'Software Engineer (Java)', period: 'Sep 2010 — Sep 2013',
    intro: 'Developed systems and web experiences in the global logistics and shipping domain.',
    projects: [
      { name: 'Global Logistics System', description: 'A system used to manage the full flow of international business.', stack: ['Java', 'Servlet / JSP', 'JavaScript', 'HTML', 'Oracle SQL', 'PL/SQL', 'Tomcat', 'JBoss', 'POI', 'JFreeChart'], highlights: ['Developed booking, document, vessel-routing, and data-exchange subsystems.', 'Developed PDF and XLS report programs and scheduled jobs.', 'Researched potential side effects of library upgrades, including POI and JFreeChart.', 'Created a regular-expression-based tool to speed up resolution of IE8 security issues and reduce manual remediation effort.' ] },
      { name: 'Terminals Operating System', description: 'A system used to manage container status at terminals.', stack: ['Java', 'iReport', 'Spring Framework', 'Hibernate', 'Struts', 'JavaScript', 'HTML', 'Oracle SQL', 'Tomcat', 'JBoss'], highlights: ['Developed and tested system functions.', 'Developed and tested statistical reports.'] },
      { name: 'Evergreen Logistics Official Website', description: 'Maintained the official Evergreen Logistics website and improved its performance.', stack: ['Java', 'JavaScript', 'HTML', 'Oracle SQL', 'Tomcat', 'JBoss'], highlights: ['Maintained the corporate website.', 'Improved performance by modifying the database connection-pool mechanism.'] },
    ],
  },
]
const focusAreas = [
  { number: '01', title: 'Backend engineering', detail: 'Reliable APIs, service design, performance, and maintainable systems.' },
  { number: '02', title: 'Commerce & payments', detail: 'E-commerce operations, payment flows, inventory, and integrations.' },
  { number: '03', title: 'Distributed systems', detail: 'Event-driven services, asynchronous processing, and cloud deployment.' },
]

function ArrowUpRight() { return <span aria-hidden="true" className="arrow">↗</span> }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Language>(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('portfolio-language') : null
    const initial = saved === 'zh-TW' ? 'zh-TW' : 'en'
    if (typeof document !== 'undefined') {
      document.documentElement.lang = initial === 'zh-TW' ? 'zh-Hant' : 'en'
      document.title = initial === 'zh-TW' ? '廖善璽 — 軟體工程師' : 'Shan Xi Liao — Software Engineer'
    }
    return initial
  })
  const t = (value: string) => language === 'zh-TW' ? (translations[value] ?? value) : value
  const changeLanguage = (next: Language) => {
    setLanguage(next)
    window.localStorage.setItem('portfolio-language', next)
    document.documentElement.lang = next === 'zh-TW' ? 'zh-Hant' : 'en'
    document.title = next === 'zh-TW' ? '廖善璽 — 軟體工程師' : 'Shan Xi Liao — Software Engineer'
  }
  const [expanded, setExpanded] = useState<string[]>(['New E-commerce (EC) Backend Core System'])
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; caption: string } | null>(null)
  const toggleProject = (name: string) => setExpanded(current => current.includes(name) ? current.filter(item => item !== name) : [...current, name])

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label={t("Shan Xi home")}><span className="brand-mark">SX</span><span>SHAN XI LIAO<span className="brand-sub">{t("SOFTWARE ENGINEER")}</span></span></a>
        <div className="language-switch" role="group" aria-label="Language">
          <button type="button" className={language === 'en' ? 'language-option active' : 'language-option'} onClick={() => changeLanguage('en')} aria-pressed={language === 'en'}>EN</button>
          <span aria-hidden="true">/</span>
          <button type="button" className={language === 'zh-TW' ? 'language-option active' : 'language-option'} onClick={() => changeLanguage('zh-TW')} aria-pressed={language === 'zh-TW'}>繁體中文</button>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={t("Toggle navigation")}>{menuOpen ? 'Close −' : 'Menu +'}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
          <a href="#about">{t("About")}</a><a href="#experience">{t("Experience")}</a><a href="#skills">{t("Focus")}</a><a href="#contact" className="nav-contact">{t("Let’s connect")}<ArrowUpRight /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" />{t("OPEN TO BUILDING WHAT’S NEXT")}</p>
            <h1>{t("Turning complex")}<br />{t('problems into')}<em>{t("reliable")}</em><br />{t("software.")}</h1>
            <p className="hero-lede">{t("I’m Shan Xi Liao, a software engineer focused on backend systems, e-commerce platforms, and payment solutions that work at scale.")}</p>
            <div className="hero-actions"><a className="button button-primary" href="#experience">{t("Explore my work")}<ArrowUpRight /></a><a className="text-link" href="#about">{t("A little about me")}<span>↓</span></a></div>
            <div className="hero-meta"><span>{t("BASED IN TAIWAN")}</span><span className="meta-line" /><span>JAVA · SYSTEM DESIGN · CLOUD</span></div>
          </div>
          <div className="hero-visual">
            <div className="visual-grid" />
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="portrait-frame"><img src="/img/189752.jpg" alt="Portrait of Shan Xi Liao" /></div>
            <div className="floating-card card-top"><span className="card-label">{t("CURRENT FOCUS")}</span><strong>{t("Backend systems")}</strong><span className="card-sub">{t("Built for reliability")}</span></div>
            <div className="floating-card card-bottom"><span className="metric">10<span>+</span></span><span className="card-sub">{t("years around")}<br />{t("web applications")}</span></div>
            <div className="visual-caption">{t("ENGINEERING WITH PURPOSE")}<span>✳</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" />{t("SCROLL TO EXPLORE")}</a>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="section-kicker"><span>{t("01 / ABOUT")}</span><span className="kicker-rule" /></div>
          <div className="intro-grid">
            <h2>{t("Curious by nature.")}<br /><em>{t("Engineer")}</em> {t('by choice.')}</h2>
            <div className="intro-body"><p className="intro-lead">{t("I enjoy making complicated systems feel simple — for the people who use them and the teams who maintain them.")}</p><p>{t("My journey began with Java and an academic background in logistics management. Over the years, I’ve worked across payment gateways, e-commerce, warehousing, international logistics, and promotional platforms.")}</p><p>{t("I’m comfortable moving between architecture and implementation: from traditional web applications to separated frontend/backend systems and distributed services deployed on virtual machines or cloud platforms. I keep learning, currently exploring Go, Docker, cloud infrastructure, and practical AI applications.")}</p><div className="education-strip"><div><span className="small-label">{t("EDUCATION")}</span><strong>{t("National Dong Hwa University")}</strong><span>{t("Graduate Institute of Logistics Management")}</span></div><div><span className="small-label">{t("ALSO STUDIED")}</span><strong>{t("Tamkang University")}</strong><span>{t("International Business")}</span></div></div></div>
          </div>
        </section>

        <section className="focus-section">
          <div className="section-wrap"><div className="section-kicker light"><span>{t("02 / WHAT I DO")}</span><span className="kicker-rule" /></div><div className="focus-heading"><h2>{t("Where I bring")}<br /><em>{t("the most value.")}</em></h2><p>{t("Good engineering is more than writing code. It’s understanding the business, choosing the right trade-offs, and making systems easier to evolve.")}</p></div><div className="focus-grid">{focusAreas.map(area => <article className="focus-card" key={area.number}><span className="focus-number">{area.number}</span><div><h3>{t(area.title)}</h3><p>{t(area.detail)}</p></div><span className="focus-symbol">↗</span></article>)}</div></div>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="section-kicker"><span>{t("03 / EXPERIENCE")}</span><span className="kicker-rule" /></div>
          <div className="experience-heading"><div><h2>{t("A career built")}<br />{t('around')}<em>{t("solving things.")}</em></h2></div><p>{t("Across finance, commerce, logistics, and global shipping, I’ve helped teams deliver software for real operational needs.")}</p></div>
          <div className="timeline">{experiences.map((experience, index) => <article className="experience-item" key={t(experience.company)}><div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="experience-main"><div className="company-heading"><div><h3>{t(experience.company)}</h3><p className="job-title">{t(experience.role)}</p></div><span className="period">{experience.period}</span></div><p className="company-intro">{t(experience.intro)}</p><div className="project-list">{experience.projects.map(project => { const isExpanded = expanded.includes(project.name); return <div className={isExpanded ? 'project-card expanded' : 'project-card'} key={t(project.name)}><button className="project-trigger" onClick={() => toggleProject(project.name)} aria-expanded={isExpanded}><span className="project-trigger-left"><span className="project-label">{t("PROJECT")}</span><strong>{t(project.name)}</strong></span><span className="expand-icon">{isExpanded ? '−' : '+'}</span></button>{isExpanded && <div className="project-content">{project.images && <div className={project.images.length > 1 ? 'project-gallery' : 'project-gallery single'}>{project.images.map((image, imageIndex) => { const caption = project.imageCaptions?.[imageIndex] ?? `${t(project.name)} screenshot ${imageIndex + 1}`; return <figure className="project-figure" key={image}><button type="button" className="gallery-image-button" onClick={() => setLightbox({ src: image, alt: caption, caption })} aria-label={`Enlarge ${t(caption)}`}><img className="project-image" src={image} alt={t(caption)} loading="lazy" /><span className="zoom-hint">{t("View larger ↗")}</span></button><figcaption>{t(caption)}</figcaption></figure>})}</div>}<p>{t(project.description)}</p>{project.link && <p className="project-reference"><a href={project.link} target="_blank" rel="noreferrer">{t("View related resource ↗")}</a></p>}{project.highlights && <ul className="highlights">{project.highlights.map(item => <li key={t(item)}>{t(item)}</li>)}</ul>}<div className="tag-list">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div>}</div>})}</div></div></article>)}</div>
        </section>

        <section className="credentials section-wrap" id="skills"><div className="section-kicker"><span>{t("04 / CREDENTIALS")}</span><span className="kicker-rule" /></div><div className="credentials-grid"><div><h2>{t("Always learning.")}<br /><em>{t("Always building.")}</em></h2><p className="credentials-intro">{t("A mix of formal study, professional certifications, and hands-on curiosity keeps my perspective growing.")}</p><a className="text-link" href="https://docs.google.com/presentation/d/1oS5H5sg3oYR98hgekwHNnEdzx1C15k1g48NIZPSSdeU/edit?usp=sharing" target="_blank" rel="noreferrer">{t("ML / DL tutorial materials")}<ArrowUpRight /></a></div><div className="credential-list"><a className="credential" href="https://www.credly.com/badges/701d4e47-39e7-4c5c-8781-e280c430e595?source=linked_in_profile" target="_blank" rel="noreferrer"><span className="credential-icon">☼</span><span><strong>{t("Oracle Certified Professional")}</strong><small>{t("Java SE 11 Developer")}</small></span><ArrowUpRight /></a><a className="credential" href="https://www.credly.com/badges/b00f1e20-e368-4279-b8b4-7cfbfafeaf5d/public_url" target="_blank" rel="noreferrer"><span className="credential-icon">◈</span><span><strong>{t("AWS Certified")}</strong><small>{t("Cloud Practitioner")}</small></span><ArrowUpRight /></a><div className="credential"><span className="credential-icon">Aa</span><span><strong>{t('TOEIC 785')}</strong><small>{t("Tested April 2021")}</small></span><span className="credential-note">{t("LANGUAGE")}</span></div><div className="credential"><span className="credential-icon">✳</span><span><strong>{t('Taiwan AI Academy')}</strong><small>{t("Honorable Mention · 2019–2020 project")}</small></span><span className="credential-note">{t("AI / ML")}</span></div></div></div></section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="section-kicker light"><span>{t("05 / CONTACT")}</span><span className="kicker-rule" /></div><p className="eyebrow">{t("HAVE A GOOD PROBLEM TO SOLVE?")}</p><h2>{t("Let’s make")}<br /><em>{t("something matter.")}</em></h2><p className="contact-copy">{t("I’m always happy to connect with engineers and teams who care about building thoughtful, dependable software.")}</p><div className="contact-actions"><a className="button button-light" href="https://github.com/shan-xi" target="_blank" rel="noreferrer">{t("Find me on GitHub")}<ArrowUpRight /></a><a className="contact-url" href="https://shan-xi.github.io/">shan-xi.github.io <ArrowUpRight /></a></div><div className="contact-decoration">SX<span>✳</span></div></div></section>
      </main>
      <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">SX</span><span>SHAN XI LIAO<span className="brand-sub">{t("SOFTWARE ENGINEER")}</span></span></a><span>{t("Designed with care · Built with React")}</span><a href="#home" className="back-top">{t("BACK TO TOP ↑")}</a></footer>
      {lightbox && <div className="lightbox-backdrop" role="dialog" aria-modal="true" aria-label={t(lightbox.caption)} onClick={() => setLightbox(null)}><button type="button" className="lightbox-close" aria-label="Close image" onClick={() => setLightbox(null)}>×</button><figure className="lightbox-content" onClick={event => event.stopPropagation()}><img src={lightbox.src} alt={t(lightbox.alt)} /><figcaption>{t(lightbox.caption)}</figcaption></figure></div>}
    </div>
  )
}
