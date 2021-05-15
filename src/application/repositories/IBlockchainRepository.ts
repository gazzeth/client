import { AbstractConnector } from '@web3-react/abstract-connector'

export type IUseBlockchain = () => [boolean, string, AbstractConnector,
    (connector: AbstractConnector, onError?:
        (error: Error) => void, throwErrors?: boolean) => Promise<void>,
    Error]

export default interface IBlockchainRepository {
    getUse(): IUseBlockchain;
}
