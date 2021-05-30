import News from "@domain/models/News/News";

export default interface INewsPostUsecase {
    post(news: News): Promise<void>
}
