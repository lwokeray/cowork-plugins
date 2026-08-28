import { z } from "zod";

export const environmentId = z.string().min(1).max(200);
export const flowId = z.string().min(1).max(200);
export const runId = z.string().min(1).max(300);
export const page = z.number().int().min(1).max(1000).optional();

export const listFlowsSchema = {
  environmentId,
  top: page,
  search: z.string().max(200).optional(),
  continuationUrl: z.string().url().max(2_000).optional(),
};

export const listRunsSchema = {
  environmentId,
  flowId,
  top: page,
  continuationUrl: z.string().url().max(2_000).optional(),
};

export const listActionsSchema = {
  environmentId,
  workflowId: flowId.optional(),
  connector: z.string().max(200).optional(),
  isTrigger: z.boolean().optional(),
  parameterName: z.string().max(200).optional(),
  parameterValue: z.string().max(500).optional(),
};

export const storeFlowSchema = {
  environmentId,
  flowId,
};

export const governanceUpdateSchema = {
  environmentId,
  flowId,
  description: z.string().max(2_000).optional(),
  ownerTeam: z.string().max(300).optional(),
  supportEmail: z.string().email().max(320).optional(),
  businessImpact: z.enum(["low", "medium", "high", "critical"]).optional(),
  critical: z.boolean().optional(),
  monitor: z.boolean().optional(),
  tags: z.array(z.string().max(100)).max(50).optional(),
  notificationRules: z.array(z.string().max(200)).max(20).optional(),
};
