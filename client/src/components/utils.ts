import type { PaymentRequirements } from "x402/types";

/**
 * Safely clones an object without prototype pollution
 *
 * @param obj - The object to clone
 * @returns A safe clone of the object
 */
function safeClone<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => safeClone(item)) as T;
  }

  const cloned: Record<string, unknown> = {};
  for (const key in obj as Record<string, unknown>) {
    // Skip __proto__ and other dangerous properties
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      continue;
    }
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = safeClone((obj as Record<string, unknown>)[key]);
    }
  }
  return cloned as T;
}

/**
 * Ensures a valid amount is set in payment requirements
 *
 * @param paymentRequirements - The payment requirements to validate and update
 * @param amount - The amount to set in the payment requirements
 * @returns Updated payment requirements with valid amount
 */
export function ensureValidAmount(paymentRequirements: PaymentRequirements, amount?: number): PaymentRequirements {
  const updatedRequirements = safeClone(paymentRequirements);

  if (amount) {
    try {
      const amountInBaseUnits = Math.round(amount * 1_000_000);
      updatedRequirements.maxAmountRequired = amountInBaseUnits.toString();
    } catch (error) {
      console.error("Failed to parse amount:", error);
    }
  }

  if (
    !updatedRequirements.maxAmountRequired ||
    !/^\d+$/.test(updatedRequirements.maxAmountRequired)
  ) {
    updatedRequirements.maxAmountRequired = "10000";
  }

  return updatedRequirements;
}

/**
 * Generates a session token for the user
 *
 * @param address - The user's connected wallet address
 * @returns The session token
 */
export const generateOnrampSessionToken = async (address: string): Promise<string | undefined> => {
  // For now, we'll return undefined since we don't have a session token endpoint
  // This can be implemented later when you have a proper session token endpoint
  return undefined;
};