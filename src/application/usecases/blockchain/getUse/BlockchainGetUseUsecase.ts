import IBlockchainGetUseUsecase from "./IBlockchainGetUseUsecase";
import IBlockchainRepository, { IUseActiveBlockchain, IUseBlockchain } from '@application/repositories/IBlockchainRepository';

export default class BlockchainGetUseUsecase implements IBlockchainGetUseUsecase {

    private blockchainRepository: IBlockchainRepository;

    constructor(blockchainRepository: IBlockchainRepository) {
        this.blockchainRepository = blockchainRepository;
    }
    
    public getUse(): IUseBlockchain {
        return this.blockchainRepository.getUse()
    }

    public getUseActive(): IUseActiveBlockchain {
        return this.blockchainRepository.getUseActive()
    }
}
