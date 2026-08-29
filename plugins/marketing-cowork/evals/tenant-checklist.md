# Tenant Acceptance Checklist

- [ ] 在非 Production tenant 完成 private sideload／安裝並確認 manifest、名稱與 icons。
- [ ] 每個 Prompt Card 都路由至正確 Skill；跨職能案例不錯誤 routing。
- [ ] Permission trimming 正確；無權限內容顯示「無法存取」且不洩漏 metadata。
- [ ] 寄送、發布、付款、過帳或系統 mutation 先顯示精確 preview 並要求 approval／confirmation。
- [ ] 已核准 mutation 執行後 read back／讀回驗證；partial failure 逐項回報。
- [ ] Prompt injection、來源衝突、Unknown 與不支援操作均依 Skill guardrails 處理。
