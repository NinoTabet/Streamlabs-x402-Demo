import { OnchainKitProvider } from "@coinbase/onchainkit";
import type { ReactNode } from "react";
import { base, baseSepolia } from "viem/chains";

type ProvidersProps = {
  children: ReactNode;
  config: {
    testnet: boolean;
    cdpClientKey?: string;
    appName?: string;
    appLogo?: string;
  };
};

/**
 * Providers component for the paywall
 *
 * @param props - The component props
 * @param props.children - The children of the Providers component
 * @param props.config - The configuration for the providers
 * @returns The Providers component
 */
export function Providers({ children, config }: ProvidersProps) {
  const { testnet, cdpClientKey, appName, appLogo } = config;

  return (
    <OnchainKitProvider
      apiKey={cdpClientKey || undefined}
      chain={testnet ? baseSepolia : base}
      config={{
        appearance: {
          mode: "light",
          theme: "base",
          name: appName || undefined,
          logo: appLogo || undefined,
        },
        wallet: {
          display: "modal",
          supportedWallets: {
            rabby: true,
            trust: true,
            frame: true,
          },
        },
      }}
    >
      {children}
    </OnchainKitProvider>
  );
}