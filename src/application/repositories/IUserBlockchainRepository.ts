import UserBlockchain from "@domain/user/UserBlockchain";

export default interface IUserBlockchainRepository {
    connect(): Promise<UserBlockchain>;
}
