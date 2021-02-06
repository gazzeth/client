import News from "@domain/News/News";

export default interface INewsListUsecase {
    list(): Promise<News[]>
}
