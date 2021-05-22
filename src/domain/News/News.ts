export default class News {
    id: number;
    verified?: boolean;
    content: File

    constructor(id: number, content: File, verified?: boolean) {
        this.id = id;
        this.verified = verified;
        this.content = content;
    }
}
