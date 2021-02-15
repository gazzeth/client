import News from "@domain/News/News";

export default interface INewsGetUsecase {
    get(id: number): Promise<News>
}
