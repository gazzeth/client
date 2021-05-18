import { IUseBlockchain } from '@application/repositories/IBlockchainRepository';

export default interface IBlockchainGetAddressUsecase {
    shortenAddress(address: string, chars?: number): string
}
