import React, { useState } from "react";
import { PaywallAppSolana } from "./PaywallAppSolana";
import { SolanaProviders } from "./SolanaProviders";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { API_BASE_URL } from "../config";

export function SolanaPaywallDemo() {
  const [payWall, setPayWall] = useState<any | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const dollarAmounts: number[] = [1, 5, 10];

  const handleSubmit = async (amount: number): Promise<void> => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // For demo purposes, we'll create a mock paywall config
      // In a real app, you'd fetch this from your server
      const payWallValue = {
        amount: amount,
        currentUrl: `${API_BASE_URL}/solana/${amount}-dollar`,
        testnet: true, // Always use devnet for testing
        appName: "Solana x402 Demo",
        appLogo: "https://solana.com/favicon.ico",
      };

      setPayWall(payWallValue);
      console.log("payWall: ", payWallValue);
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("Error connecting to server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentComplete = (response: Response) => {
    setSelectedAmount(null);
    setPayWall(null);
    setSubmitMessage("Payment successful! Thank you.");

    setTimeout(() => {
      setSubmitMessage("");
    }, 5000);
  };

  const handlePaymentError = (error: Error) => {
    setSubmitMessage(`Payment failed: ${error.message}`);
  };

  return (
    <div className="relative">
      {/* Demo content */}
      <div
        className={`min-h-screen bg-gradient-to-br from-purple-500 via-pink-600 to-purple-700 p-5 ${
          payWall ? "pointer-events-none" : ""
        }`}
      >
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <header
            className="text-white p-10 text-center relative"
            style={{
              background: "linear-gradient(to right, #9333ea, #db2777)",
            }}
          >
            <div className="relative z-10">
              <h1 className="text-4xl font-bold mb-3">
                Solana x402 Payment Demo
              </h1>
              <p className="text-xl opacity-90">
                Test the x402-solana payment integration
              </p>
            </div>
          </header>

          <div className="p-10">
            <div className="mb-8 text-center">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  🧪 Testing Instructions
                </h3>
                <div className="text-left space-y-2 text-sm text-blue-800">
                  <p>1. Make sure you have a Solana wallet (Phantom/Solflare)</p>
                  <p>2. Switch your wallet to Devnet</p>
                  <p>
                    3. Get Devnet USDC from{" "}
                    <a
                      href="https://faucet.circle.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-semibold"
                    >
                      Circle's faucet
                    </a>
                  </p>
                  <p>4. Select an amount and proceed with payment</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
                Select Amount:
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {dollarAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className={`py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                      selectedAmount === amount
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-400 hover:bg-purple-50"
                    }`}
                    onClick={() => setSelectedAmount(amount)}
                    disabled={isSubmitting}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>

            {selectedAmount && (
              <div className="text-center">
                <button
                  type="button"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  onClick={() => handleSubmit(selectedAmount)}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : `Pay $${selectedAmount}`}
                </button>
              </div>
            )}

            {submitMessage && (
              <div
                className={`mt-6 p-4 rounded-xl text-center font-medium ${
                  submitMessage.includes("Error") || submitMessage.includes("failed")
                    ? "bg-red-100 text-red-800 border border-red-200"
                    : "bg-green-100 text-green-800 border border-green-200"
                }`}
              >
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Paywall overlay */}
      {payWall && (
        <div className="fixed inset-0 bg-gradient-to-br from-purple-500/90 via-pink-600/90 to-purple-700/90 backdrop-blur-sm z-40">
          <div className="bg-white shadow-sm border-b">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
              <button
                onClick={() => setPayWall(null)}
                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Demo
              </button>
              <div className="text-sm text-gray-500">
                Amount: ${selectedAmount}
              </div>
            </div>
          </div>
          <SolanaProviders network={WalletAdapterNetwork.Devnet}>
            <PaywallAppSolana
              config={payWall}
              bodyData={{ amount: selectedAmount }}
              onPaymentComplete={handlePaymentComplete}
              onPaymentError={handlePaymentError}
            />
          </SolanaProviders>
        </div>
      )}
    </div>
  );
}

