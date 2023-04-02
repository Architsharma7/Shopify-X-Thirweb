import { useEffect, useState } from "react";
import { Tokengate } from "@shopify/tokengate";
import {
  ConnectButton,
  ConnectWalletProvider,
  useConnectWallet,
} from "@shopify/connect-wallet";
import { buildConnectors } from "@shopify/connect-wallet";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const _App = () => {
  const { wallet } = useConnectWallet();
  const { requirements, reaction } = getGate();

  return (
    <Tokengate
      isConnected={Boolean(wallet)}
      connectButton={<ConnectButton />}
      isLoading={false}
      requirements={requirements}
      reaction={reaction}
      isLocked={true}
      unlockingTokens={[]}
    />
  );
};

export const App = () => {
  return (
    <WagmiConfig client={client}>
      <ConnectWalletProvider
        chains={chains}
        connectors={connectors}
        wallet={undefined}
      >
        <_App />
      </ConnectWalletProvider>
    </WagmiConfig>
  );
};

const getGate = () => ({});

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

const { connectors, wagmiConnectors } = buildConnectors({
  chains,
});

const client = createClient({
  autoConnect: true,
  connectors: wagmiConnectors,
  provider,
  webSocketProvider,
});
