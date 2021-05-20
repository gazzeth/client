import React, { useRef, useEffect } from "react";
import useStyles from "./styles";
import { useSelector } from 'react-redux';
import { RootState } from "@entrypoint/presenters/web/reducers/allReducers";
import Jazzicon from 'jazzicon'

type Props = {
    account: string
}

export default function Icon({ account }: Props) {
    const wallet = useSelector((state: RootState) => state.wallet.wallet);

    switch(wallet.type) {
        case "metamask":
            return <MetamaskIcon account={account}/>
        default:
            return null;
    }
}

function MetamaskIcon({ account }: Props) {
    const ref = useRef<HTMLDivElement>()
    const classes = useStyles();

    useEffect(() => {
      if (account && ref.current) {
        ref.current.innerHTML = ''
        ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)))
      }
    }, [account])
  
    return <div className={classes.metamask} ref={ref as any} />
}
