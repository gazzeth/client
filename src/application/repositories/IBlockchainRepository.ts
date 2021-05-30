import Chain from '@domain/models/Chain/Chain'
import { AbstractConnector } from '@web3-react/abstract-connector'
import { Web3Provider } from '@ethersproject/providers'

export type IUseBlockchain = () => [boolean, string, AbstractConnector,
    (connector: AbstractConnector, onError?:
        (error: Error) => void, throwErrors?: boolean) => Promise<void>,
    Error]

export type IUseActiveBlockchain = () => [Chain, string, AbstractConnector, Web3Provider]

export type LinkType = ('transaction' | 'token' | 'address' | 'block')

export default interface IBlockchainRepository {
    getUse(): IUseBlockchain;

    getUseActive(): IUseActiveBlockchain;

    getLink(chainId: number, data: string, type: LinkType): string;
}
