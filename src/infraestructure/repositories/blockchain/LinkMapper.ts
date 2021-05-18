import ChainMapper from './ChainMapper';
import { LinkType } from '@application/repositories/IBlockchainRepository';

export default class LinkMapper {
    
    public static toEntity(chainId: number, data: string, type: LinkType): string {
        let mapType: string;
        switch(type) {
            case "transaction":
                mapType = "tx"; break;
            case "token":
                mapType = "token"; break;
            case "address":
                mapType = "address"; break;
            case "block":
                mapType = "block"; break;
        }
        const prefix = (chainId === 1) ? '' : `${ChainMapper.toEntity(chainId).name}.`
        return `https://${prefix}etherscan.io/${mapType}/${data}`
    }

}
