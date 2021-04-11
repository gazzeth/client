import { injectable } from 'inversify';
import IUserBlockchainRepository from '@application/repositories/IUserBlockchainRepository';
import UserBlockchain from '@domain/user/UserBlockchain';
import MetaMaskRepository from '../MetaMaskRepository';
import { Contract } from "web3-eth-contract";
import GazzethTest from '@assets/contracts/ProtocolTest.json';

@injectable()
export default class UserMetaMaskRepository implements IUserBlockchainRepository {

 //Gazetgtest decimal, balnceOf(0x28af365578586eD5Fd500A1Dc0a3E20Fc7b2Cffa)
    public async connect(): Promise<UserBlockchain> {
        await MetaMaskRepository.validateMetaMask();
        
        let contractAddress = '0x28af365578586eD5Fd500A1Dc0a3E20Fc7b2Cffa';
        let abi: any = GazzethTest.abi;
        let contract: Contract  = new MetaMaskRepository.web3.eth.Contract(abi, contractAddress);

        contract.methods.unstake("1000000000000000000").send({'from': "0x4b546D68A70E4D09F27827CD8a3b02A35A012964"});

        console.log(MetaMaskRepository.web3.eth.accounts)

        return new UserBlockchain();
    }
}