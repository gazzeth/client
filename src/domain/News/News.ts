export default class News {
    verified: boolean;
    title: string;
    lede: string;
    body: string;
    image: string;

    constructor(verified: boolean, title: string, lede: string, body: string, image: string) {
        this.verified = verified;
        this.title = title;
        this.lede = lede;
        this.body = body;
        this.image = image;
    }
    
};
