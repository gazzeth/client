import UserBlockchain from "@domain/user/UserBlockchain";

export default interface IUserConnectUsecase {
    connect(): Promise<UserBlockchain>
}
