import React, { useState } from "react";
import WalletModal from "../WalletModal/WalletModal";
import AccountStatus from "../AccountStatus/AccountStatus";
import useAuthorization from "../../hooks/useAuthorization";


export default function Wallet() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const changeIsModalOpen = () => setIsModalOpen((isModalOpen: boolean) => !isModalOpen);
    const onOpen = () => setIsModalOpen(true);
    const OnClose = () => setIsModalOpen(false);

    useAuthorization();

    return (
        <div>
            <AccountStatus onClick={changeIsModalOpen} />
            <WalletModal isOpen={isModalOpen} onOpen={onOpen} onClose={OnClose} />
        </div>
    )
}
