import { injectable, inject } from "inversify"
import { TYPES } from '@constants/types';
import IBlockchainRepository from "@application/repositories/IBlockchainRepository";
import BlockchainGetUseUsecase from "@application/usecases/blockchain/getUse/BlockchainGetUseUsecase";

@injectable()
export default class BlockchainService {
    @inject(TYPES.IBlockchainRepository) private blockchainRepository: IBlockchainRepository;

    public getBlockchainGetUseUseCase() {
        return new BlockchainGetUseUsecase(this.blockchainRepository);
    }
}
