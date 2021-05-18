import IBlockchainGetAddressUsecase from "./IBlockchainGetAddressUsecase";
import { getAddress } from '@ethersproject/address'

export default class BlockchainGetAddressUsecase implements IBlockchainGetAddressUsecase {

    public shortenAddress(address: string, chars: number = 4): string {
        const parsed = this.isAddress(address)
        if (!parsed) {
            throw Error(`Invalid 'address' parameter '${address}'.`)
        }
        return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
    }

    public isAddress(value: any): string | false {
        try {
            return getAddress(value)
        } catch {
            return false
        }
    }
}
