import toBuffer from 'it-to-buffer'

export default class IpfsMapper {
    public static async toEntity(dto: AsyncIterable<Uint8Array>): Promise<string> {
        const buffer = await toBuffer(dto);
        return new TextDecoder().decode(buffer);
    }
}