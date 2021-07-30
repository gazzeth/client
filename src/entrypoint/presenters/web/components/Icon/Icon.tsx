import React, { useRef, useEffect } from "react";
import { useSelector } from 'react-redux';
import { RootState } from "@entrypoint/presenters/web/reducers/allReducers";
import Jazzicon from 'jazzicon'
import { SUPPORTED_WALLETS } from "@constants/supported_wallets";

type Props = {
    account: string,
    size: number,
    className: string
}

export default function Icon({ account, size, className }: Props) {
    let wallet = useSelector((state: RootState) => state.wallet.wallet);

    if (wallet === undefined) {
        wallet = SUPPORTED_WALLETS["METAMASK"]
    }

    switch(wallet.type) {
        case "metamask":
            return <MetamaskIcon account={account} size={size} className={className}/>
        default:
            return null;
    }
}

function MetamaskIcon({ account, size, className }: Props) {
    const ref = useRef<HTMLDivElement>()

    useEffect(() => {
      if (account && ref.current) {
        ref.current.innerHTML = ''
        ref.current.appendChild(Jazzicon(size, parseInt(account.slice(2, 10), 16)))
      }
    }, [account, size])
  
    return <div className={className} ref={ref as any} />
}
