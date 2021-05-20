import IBlockchainGetLinkUsecase from "./IBlockchainGetLinkUsecase";
import IBlockchainRepository, { LinkType } from '@application/repositories/IBlockchainRepository';

export default class BlockchainGetLinkUsecase implements IBlockchainGetLinkUsecase {

    private blockchainRepository: IBlockchainRepository;

    constructor(blockchainRepository: IBlockchainRepository) {
        this.blockchainRepository = blockchainRepository;
    }
    
    public getLink(chainId: number, data: string, type: LinkType): string {
        return this.blockchainRepository.getLink(chainId, data, type);
    }
}
