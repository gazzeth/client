import { IUseBlockchain, IUseActiveBlockchain } from '@application/repositories/IBlockchainRepository';

export default interface IBlockchainGetUseUsecase {
    getUse(): IUseBlockchain;

    getUseActive(): IUseActiveBlockchain;
}
