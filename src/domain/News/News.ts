export default class News {
    verified?: boolean;
    title: string;
    lede: string;
    body: string;
    image: string;

    constructor(title: string, lede: string, body: string, image: string, verified?: boolean) {
        this.verified = verified;
        this.title = title;
        this.lede = lede;
        this.body = body;
        this.image = image;
    }

    setLede(lede: string) {
        return new News(this.title, lede, this.body, this.image, this.verified);
    }
    
};
