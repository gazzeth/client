import { IUseBlockchain } from '@application/repositories/IBlockchainRepository';

export default interface IBlockchainGetUseUsecase {
    getUse(): IUseBlockchain;
}
