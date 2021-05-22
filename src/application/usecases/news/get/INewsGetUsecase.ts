import News from "@domain/models/News/News";

export default interface INewsGetUsecase {
    get(id: number): Promise<News>
}
