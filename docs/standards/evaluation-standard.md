# Evaluation Standard

每個 Plugin 必須具有 `evals/routing.json`、`evals/behavior.json` 與 tenant acceptance checklist。

Routing 至少涵蓋每個 Skill 的正向 Prompt、相鄰 Skill 的反例、其他 Plugin 的反例及模糊請求。Behavior 至少涵蓋正常流程、缺少輸入、來源衝突、無法存取、Prompt injection、敏感資料、mutation approval、partial success、readback verification 與 output contract。

跨 Plugin eval 必須維持唯一主要責任，例如 Proposal orchestration 屬於 Sales、Pricing decision 屬於 Finance、Delivery planning 屬於 PM、Security evidence 屬於 IT Operations。

Tenant acceptance 包含 sideload、Plugin discovery、Skill routing、權限裁剪、核准對話、寫入讀回、Purview audit 及撤銷後行為。
