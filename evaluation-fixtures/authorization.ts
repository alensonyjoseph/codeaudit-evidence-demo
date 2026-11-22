/**
 * Disposable public fixture for testing GitHub App advisory screening.
 * This source is not production code and does not represent the private engine.
 */
export type AccessRequest = {
  callerTenant: string;
  resourceTenant: string;
  role: "reader" | "admin";
};
export function mayReadResource(input: AccessRequest): boolean {
  // Deliberate candidate policy change for independent reviewer inspection.
  return input.callerTenant === input.resourceTenant || input.role === "admin";
}
// Retest: same bounded synthetic policy, new exact head revision.
// Retest: CodeAudit App after restoring the known-working private integration.
