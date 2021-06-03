import React from "react";
import Error from "@entrypoint/presenters/web/components/Error/Error";
import { container } from "@container-inversify";
import { TYPES } from "@constants/types";
import BlockchainService from "@configuration/usecases/BlockchainService";

const blockchainService = container.get<BlockchainService>(TYPES.BlockchainService);

export default function withAuthorization(Component: React.ComponentType) {
    return function ComponentWithAuthorization() {

        const useActiveBlockchain = blockchainService.getBlockchainGetUseUseCase().getUseActive()
        const [, account, ,] = useActiveBlockchain();

        if (!!account) {
            return (
                <Component />
            )
        }

        return (
            <Error code={"401"}/>
        );
    }
}
