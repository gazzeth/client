import toBuffer from 'it-to-buffer'

export default class IpfsMapper {
    public static async toEntity(dto: AsyncIterable<Uint8Array>): Promise<string> {
        return new TextDecoder().decode((await toBuffer(dto)));
    }
}