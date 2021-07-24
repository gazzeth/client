import ICurrencyRepository from "@application/repositories/ICurrencyRepository";
import { Web3Provider } from '@ethersproject/providers'
import { injectable } from 'inversify';
import { ethers } from "ethers";
import ErrorMapper from '../ErrorMapper';

@injectable()
export default class EthEthereumRepository implements ICurrencyRepository {

    public async getBalanceOf(library: Web3Provider): Promise<number> {
        try {
            const sender = (await library.listAccounts())[0]
            return await library.getBalance(sender).then((result: any) => parseFloat(ethers.utils.formatUnits(result, 18)));
        } catch (e) {
            throw ErrorMapper.toEntity(e)
        }
    }
}
