import React, { useEffect, useState } from "react";
import WalletModal from "../WalletModal/WalletModal";
import AccountStatus from "../AccountStatus/AccountStatus";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import BlockchainService from "@configuration/usecases/BlockchainService";
import WalletService from "@configuration/usecases/WalletService";
import useAuthorization from "../../hooks/useAuthorization";

const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);
const walletService = container.get<WalletService>(TYPES.WalletService);

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
