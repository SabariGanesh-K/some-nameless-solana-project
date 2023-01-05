import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import { ConnectionProvider,WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import  {GlowWalletAdapter,PhantomWalletAdapter,SlopeWalletAdapter} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";

import React from 'react'

export const WalletConnectProvider = ({children}) => {
    const network = WalletAdapterNetwork.Devnet;

    const endpoint = useMemo(()=>{
        if(network===WalletAdapterNetwork.Devnet){
            return 'https://distinguished-lingering-log.solana-devnet.discover.quiknode.pro/ee241c814e5d7d13f38879236c6f611cd42d3e5b/'

        }
        return clusterApiUrl(network)
    },[network])
    const wallets = useMemo(()=>[new PhantomWalletAdapter()],[network])

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets = {wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>

        </ConnectionProvider>
    )

}

