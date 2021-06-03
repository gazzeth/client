import { injectable, inject } from "inversify"
import { TYPES } from '@constants/types';
import IBlockchainRepository from "@application/repositories/IBlockchainRepository";
import BlockchainGetUseUsecase from "@application/usecases/blockchain/getUse/BlockchainGetUseUsecase";
import BlockchainGetAddressUsecase from "@application/usecases/blockchain/getAddress/BlockchainGetAddressUsecase";
import BlockchainGetLinkUsecase from "@application/usecases/blockchain/getLink/BlockchainGetUseUsecase";
import BlockchainGetBalanceOfUsecase from "@application/usecases/blockchain/getBalanceOf/BlockchainGetBalanceOfUsecase";
import ICurrencyRepository from "@application/repositories/ICurrencyRepository";

@injectable()
export default class BlockchainService {
    @inject(TYPES.IBlockchainRepository) private blockchainRepository: IBlockchainRepository;

    @inject(TYPES.IEthRepository) private ethRepository: ICurrencyRepository;
    @inject(TYPES.IDaiRepository) private daiRepository: ICurrencyRepository;
    @inject(TYPES.IGazzethRepository) private gazzethRepository: ICurrencyRepository;

    public getBlockchainGetUseUseCase() {
        return new BlockchainGetUseUsecase(this.blockchainRepository);
    }

    public getBlockchainGetAddressUsecase() {
        return new BlockchainGetAddressUsecase();
    }
    
    public getBlockchainGetLinkUsecase() {
        return new BlockchainGetLinkUsecase(this.blockchainRepository);
    }

    public getBlockchainGetBalanceOfUsecase() {
        return new BlockchainGetBalanceOfUsecase(this.ethRepository, this.daiRepository, this.gazzethRepository);
    }
}
