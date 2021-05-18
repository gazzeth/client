import { injectable, inject } from "inversify"
import { TYPES } from '@constants/types';
import IBlockchainRepository from "@application/repositories/IBlockchainRepository";
import BlockchainGetUseUsecase from "@application/usecases/blockchain/getUse/BlockchainGetUseUsecase";
import BlockchainGetAddressUsecase from "@application/usecases/blockchain/getAddress/BlockchainGetAddressUsecase";
import BlockchainGetLinkUsecase from "@application/usecases/blockchain/getLink/BlockchainGetUseUsecase";

@injectable()
export default class BlockchainService {
    @inject(TYPES.IBlockchainRepository) private blockchainRepository: IBlockchainRepository;

    public getBlockchainGetUseUseCase() {
        return new BlockchainGetUseUsecase(this.blockchainRepository);
    }

    public getBlockchainGetAddressUsecase() {
        return new BlockchainGetAddressUsecase();
    }
    
    public getBlockchainGetLinkUsecase() {
        return new BlockchainGetLinkUsecase(this.blockchainRepository);
    }
}
