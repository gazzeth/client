import News from "@domain/News/News";

export default interface INewsRepository {
    list(): Promise<News[]>
}
