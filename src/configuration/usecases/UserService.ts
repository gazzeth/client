import { injectable, inject } from "inversify"
import { TYPES } from '@constants/types';
import IUserBlockchainRepository from "@application/repositories/IUserBlockchainRepository";
import UserConnectUsecase from "@application/usecases/user/connect/UserConnectUsecase";

@injectable()
export default class UserService {
    @inject(TYPES.IUserBlockchainRepository) private userBlockchainRepository: IUserBlockchainRepository;

    public getUserConnectUseCase() {
        return new UserConnectUsecase(this.userBlockchainRepository);
    }
}
