export default class News {
    id: number;
    verified?: boolean;
    title: string;
    lede: string;
    body: string;
    image: string;

    constructor(id: number, title: string, lede: string, body: string, image: string, verified?: boolean) {
        this.id = id;
        this.verified = verified;
        this.title = title;
        this.lede = lede;
        this.body = body;
        this.image = image;
    }

    setLede(lede: string) {
        return new News(this.id, this.title, lede, this.body, this.image, this.verified);
    }
    
};
