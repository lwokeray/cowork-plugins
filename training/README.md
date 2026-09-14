# Cowork Plugins 完整圖解實作教材

每課沿用同一案件，從原始需求、資料整理與任務委派，走到異動、審核、交接及結業例外。每一步都提供操作圖、完整提示、實際來源檔名、輸出檔名、原簡報頁碼與具體檢查方式。

**本版練習資料：49 份 Word 來源文件，包含 83 份完整原始紀錄；16 份 CSV，共 322 筆明細。** 來源包括客戶郵件、逐字訪談、提案、工作範圍、三份履歷與作品、獨立面試紀錄、總帳、報名與出席、查詢時間及設備與工單狀態。全部為合成企業案例。

| 課程 | 圖解操作手冊 | 可直接使用的原始資料 |
|---|---|---|
| sales-cowork | [完整實作手冊](./sales-cowork/完整實作手冊.md) | [Word＋CSV 練習資料.zip](./sales-cowork/練習資料.zip) |
| marketing-cowork | [完整實作手冊](./marketing-cowork/完整實作手冊.md) | [Word＋CSV 練習資料.zip](./marketing-cowork/練習資料.zip) |
| finance-cowork | [完整實作手冊](./finance-cowork/完整實作手冊.md) | [Word＋CSV 練習資料.zip](./finance-cowork/練習資料.zip) |
| hr-cowork | [完整實作手冊](./hr-cowork/完整實作手冊.md) | [Word＋CSV 練習資料.zip](./hr-cowork/練習資料.zip) |
| pm-cowork | [完整實作手冊](./pm-cowork/完整實作手冊.md) | [Word＋CSV 練習資料.zip](./pm-cowork/練習資料.zip) |
| it-operations-cowork | [完整實作手冊](./it-operations-cowork/完整實作手冊.md) | [Word＋CSV 練習資料.zip](./it-operations-cowork/練習資料.zip) |
| it-helpdesk-cowork | [完整實作手冊](./it-helpdesk-cowork/完整實作手冊.md) | [Word＋CSV 練習資料.zip](./it-helpdesk-cowork/練習資料.zip) |

## 開始上課

1. 開啟本課手冊，先看工作角色與簡報對照表。
2. 下載並解壓本課「練習資料.zip」。DOCX 保留來源 ID、時間、寄件／建立人、收件／參與人及完整正文；CSV 保留逐筆資料。
3. 第一步只上傳 data/S01 中的來源。到了下一步才加該步資料夾的新附件；沒有新附件的步驟沿用原任務。
4. 在同一 Cowork 任務依序貼上 prompts/S01.txt 至 S08.txt，輸出每步指定的完整文件。
5. 依手冊圖示開來源、開成果，比對文件 ID、日期、數值、版本與狀態，使用具體修訂指令補正。
6. instructor 資料夾是講師驗收對照，不上傳作為學員輸入。手冊參考成果也應在完成後才展開。

## 操作圖與簡報對齊

- 七份手冊共 56 個步驟；對應各課原簡報第 4、5、6、7、9、10、11、12 頁。
- 第 2 頁對應 Customize／Plugins，第 3 頁對應建立任務與附件，第 8 頁對應修改原檔核准。
- 四張共用操作圖以 Microsoft 官方實際產品畫面加註：插件入口、建立任務、原任務接續與來源成果、修改核准。每步放入適用的圖與案例專屬檢查表。
- GitHub 來源連結提供完整原文預覽；Word 原件保存在各課練習資料 ZIP。交付的完整教材包另含原簡報與可展開對應投影片的離線 HTML 手冊。

## 驗收口徑

Finance：42 筆總帳合計 660,000，預算 600,000，差額 60,000；待審未入帳 AP 不混入 GL。Marketing：48 報名列去重為 46 人，33 出席工作階段去重為 30 人，5 筆諮詢中 3 筆具本次聯繫同意。PM：前期與試行各 20 件，平均 18 與 11 小時，兩批是不同案件。IT Operations：60 台保留完整母體，8 台更新、2 台回復、50 台未執行。

上述數值已由附表重算；這不等於 Cowork 租戶操作實測。課堂產出草稿，實際寄送、正式系統寫入或 IT 執行仍須對應工具、帳戶權限及具體授權。

## 維護資訊

教材版本：2026-09-14。案例時間依各步台北時間；依序提供後續事件，避免提前用到批准或完成證據。原簡報故事、步驟順序及結業情境維持對應。

產品畫面來自 [Microsoft Cowork in progress](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/cowork-in-progress/4511672)，操作依據為 [Cowork 使用指南](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/use-cowork)及 [Customize 指南](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-customize)。操作圖保留官方示例資料，不是假造本案例在租戶中的執行截圖。
