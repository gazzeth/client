export default class NewsPreview {
    id: number;
    verified?: boolean;
    title: string;
    lede: string;
    image: string;

    constructor(id: number, title: string, lede: string, image: string, verified?: boolean) {
        this.id = id;
        this.verified = verified;
        this.title = title;
        this.lede = lede;
        this.image = image;
    }

    setLede(lede: string) {
        return new NewsPreview(this.id, this.title, lede, this.image, this.verified);
    }  
}
