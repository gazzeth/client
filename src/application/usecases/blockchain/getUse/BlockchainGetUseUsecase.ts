import IBlockchainGetUseUsecase from "./IBlockchainGetUseUsecase";
import IBlockchainRepository, { IUseBlockchain } from '@application/repositories/IBlockchainRepository';

export default class BlockchainGetUseUsecase implements IBlockchainGetUseUsecase {

    private blockchainRepository: IBlockchainRepository;

    constructor(blockchainRepository: IBlockchainRepository) {
        this.blockchainRepository = blockchainRepository;
    }
    
    public getUse(): IUseBlockchain {
        return this.blockchainRepository.getUse()
    }
}
