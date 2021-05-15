import { useWeb3React } from '@web3-react/core'
import IBlockchainRepository, { IUseBlockchain } from '@application/repositories/IBlockchainRepository';
import { injectable } from 'inversify';

@injectable()
export default class EthereumRepository implements IBlockchainRepository {

    public getUse(): IUseBlockchain {
        const useEthereum: IUseBlockchain = () => {
            const { active, account, connector, activate, error } = useWeb3React();
            return [active, account, connector, activate, error];
        }
        return useEthereum
    }
}
