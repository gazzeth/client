import Chain from "@domain/models/Chain/Chain";

export default class ChainMapper {
    
    public static toEntity(id: number): Chain {
        let name: string;

        switch (id) {
            case 1:
                name = "mainnet"; break;
            case 3:
                name = "ropsten"; break;
            case 42:
                name = "kovan"; break;
            case 4:
                name = "rinkeby"; break;
            case 5:
                name = "gorli"; break;           
            default:
                name = "unknown"; break;
        }

        return new Chain(id, name);
    }

}
