import { LinkType } from '@application/repositories/IBlockchainRepository';

export default interface IBlockchainGetLinkUsecase {
    getLink(chainId: number, data: string, type: LinkType): string;
}
