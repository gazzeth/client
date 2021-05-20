import { useWeb3React } from '@web3-react/core'
import IBlockchainRepository, { IUseBlockchain, IUseActiveBlockchain, LinkType } from '@application/repositories/IBlockchainRepository';
import { injectable } from 'inversify';
import { Web3Provider } from '@ethersproject/providers'
import ChainMapper from './ChainMapper';
import LinkMapper from './LinkMapper';

@injectable()
export default class EthereumRepository implements IBlockchainRepository {

    public getUse(): IUseBlockchain {
        const useEthereum: IUseBlockchain = () => {
            const { active, account, connector, activate, error } = useWeb3React();
            return [active, account, connector, activate, error];
        }
        return useEthereum
    }

    public getUseActive(): IUseActiveBlockchain { 
        const useEthereum: IUseActiveBlockchain = () => {
            const context = useWeb3React<Web3Provider>()
            const contextNetwork = useWeb3React<Web3Provider>('NETWORK')
            const { chainId, account, connector } = context.active ? context : contextNetwork;
            const chain = ChainMapper.toEntity(chainId);
            return [chain, account, connector];
        }
        return useEthereum
    }

    public getLink(chainId: number, data: string, type: LinkType): string {
        return LinkMapper.toEntity(chainId, data, type)
    }
}
