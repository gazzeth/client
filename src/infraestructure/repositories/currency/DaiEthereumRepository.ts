import ICurrencyRepository from "@application/repositories/ICurrencyRepository";
import { Web3Provider } from '@ethersproject/providers'
import { injectable } from 'inversify';
import { ethers } from "ethers";
import Dai from '@assets/abis/IDai.json';
import ErrorMapper from '../ErrorMapper';

@injectable()
export default class DaiEthereumRepository implements ICurrencyRepository {

    private static readonly DAI_CONTRACT_ADDRESS: string = process.env.REACT_APP_DAI_CONTRACT_ADDRESS || "";

    public async getBalanceOf(library: Web3Provider): Promise<number> {
        try {
            const contract = new ethers.Contract(DaiEthereumRepository.DAI_CONTRACT_ADDRESS, Dai, library.getSigner());
            const sender = (await library.listAccounts())[0]
            return await contract.balanceOf(sender).then((result: any) => parseFloat(ethers.utils.formatUnits(result, 18)));
        } catch (e) {
            throw ErrorMapper.toEntity(e)
        }
    }
}
