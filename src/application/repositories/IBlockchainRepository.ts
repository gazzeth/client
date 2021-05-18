import Chain from '@domain/Chain/Chain'
import { AbstractConnector } from '@web3-react/abstract-connector'

export type IUseBlockchain = () => [boolean, string, AbstractConnector,
    (connector: AbstractConnector, onError?:
        (error: Error) => void, throwErrors?: boolean) => Promise<void>,
    Error]

export type IUseActiveBlockchain = () => [Chain, string, AbstractConnector]

export type LinkType = ('transaction' | 'token' | 'address' | 'block')

export default interface IBlockchainRepository {
    getUse(): IUseBlockchain;

    getUseActive(): IUseActiveBlockchain;

    getLink(chainId: number, data: string, type: LinkType): string;
}
