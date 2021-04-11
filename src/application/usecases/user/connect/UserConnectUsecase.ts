
import IUserBlockchainRepository from "@application/repositories/IUserBlockchainRepository";
import UserBlockchain from "@domain/user/UserBlockchain";
import IUserConnectUsecase from "./IUserConnectUsecase";

export default class UserConnectUsecase implements IUserConnectUsecase{ 

    private userRepository: IUserBlockchainRepository;

    constructor(userRepository: IUserBlockchainRepository) {
        this.userRepository = userRepository;
    }
    
    public async connect(): Promise<UserBlockchain> {
        return this.userRepository.connect();
    }
}
