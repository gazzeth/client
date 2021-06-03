import { injectable } from 'inversify';
import INewsRepository from "@application/repositories/INewsRepository";
import Filter from "@domain/models/Filter/NewsFilter";
import NewsPreview from "@domain/models/News/NewsPreview";
import News from "@domain/models/News/News";
import Pagination from "@domain/models/Pagination/Pagination";
import { VERIFIED_STATUS } from '@constants/verifiedStatus';
import { ethers } from "ethers";
import Protocol from '@assets/abis/Protocol.json';
import { Web3Provider } from '@ethersproject/providers'
import { signDaiPermit } from 'eth-permit';
import IpfsHttpClient from "ipfs-http-client"
import ErrorMapper from '../ErrorMapper';

@injectable()
export default class NewsHardcodeRepository implements INewsRepository {

    private static readonly PROTOCOL_CONTRACT_ADDRESS: string = process.env.REACT_APP_PROTOCOL_CONTRACT_ADDRESS || "";
    private static readonly DAI_CONTRACT_ADDRESS: string = process.env.REACT_APP_DAI_CONTRACT_ADDRESS || "";

    private newsList = [
        new NewsPreview(1, "Peso digital: el proyecto de las provincias para financiarse digitalmente",
            "Las provincias del norte argentino quieren atraer inversores con la creación de una criptomoneda. De qué se trata.",
            "https://www.infotechnology.com/files/image/94/94817/6023e1219a36e.jpg", undefined),
        new NewsPreview(2, "La misión de la NASA llegó a Marte", "La nave espacial Mars 2020 de la NASA, con el rover Perseverance y el Helicóptero Ingenuity Mars dentro, se posó en marte a las 17.56 de Argentina y de inmediato emitió señales de que comenzó a funcionar en la superficie del planeta rojo.", "https://images.pagina12.com.ar/styles/focal_3_2_960x640/public/2021-02/142159-whatsapp-20image-202021-02-18-20at-2018-33-21.jpeg?itok=f5APTCfe", true),
        new NewsPreview(3, "Tesla compra 1.5B en bitcoins", "La empresa de autos electricos dirigida por Elon Musk compra bitcoins", "https://www.diario26.com/media/image/2021/02/10/468072.jpg", true),
        new NewsPreview(4, "Sputnik V genera cancer", "Los expertos afirman que la vacuna rusa tiene 37% de probabilidad de generar cancer", "https://ichef.bbci.co.uk/news/640/cpsprodpb/E0BA/production/_113903575_tv062871761.jpg", false),
        new NewsPreview(5, "La historia al descubierto de WallStreetBets, la comunidad de Reddit que ha hecho temblar a Wall Street", "Las acciones de GameStop, AMC y otras compañías se han disparado durante esta semana. Para brókeres y traders, estos saltos de precio tan masivos son toda una anomalía. Te contamos lo ocurrido.", "https://www.latercera.com/resizer/EE9y6w-NqGjDg2-HrTvIKz9DkHM=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/WECIEQOO46HQUDHNPKE5CGX4CU.jpg", true),
        new NewsPreview(6, "Grupo de adolescentes rompen el mercado", "Se trata de jovenes de entre 16 y 19 años, pertenecientes a r/wallstreebets en Reddit, manipulan el mercado.", "https://cnet2.cbsistatic.com/img/1ngKiToVevZS2XUj_wAWt8ZiSGI=/1200x675/2020/04/14/904dbbcb-8c07-499b-81ba-a0e9fafd2ba1/reddit-logo-0893.jpg", false),
        new NewsPreview(7, "El bitcoin llegó a su precio récord: quién es Craig Wright, el presunto creador de la criptomoneda", "Craig Wright es un empresario y científico australiano que, en 2015, reconoció que él es Satoshi Nakamoto, el alias del creador de la moneda digital bitcoin. Mucho se debatió sobre la veracidad de su afirmación pero allegados al grupo fundacional de la moneda confirmaron que él fue uno de los ideólogos princiaples.", "https://mk0criptonoticijjgfa.kinstacdn.com/wp-content/uploads/2019/05/craigh-wright.jpg", false),
        new NewsPreview(8, "Confirman a Jar Jar Binks como enemigo de la proxima saga", "La nueva saga de Star Wars estará disponible en Disney+ y estallaron las criticas con la noticia", "https://i.ytimg.com/vi/p8Djj2rZgrY/maxresdefault.jpg", undefined),
        new NewsPreview(9, "Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
            "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
            "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg")
    ]

    public async list(pagination: Pagination, filter: Filter): Promise<NewsPreview[]> {
        const filterNews = (news: NewsPreview) => {
            if (filter.verified) {
                if ((filter.verified === VERIFIED_STATUS.pending && news.verified === undefined) ||
                    (filter.verified === VERIFIED_STATUS.false && news.verified === false) ||
                    (filter.verified === VERIFIED_STATUS.true && news.verified === true)) {
                    return true;
                }
                return false;
            }
            return true;
        }
        const responce = this.newsList
            .filter(filterNews)
            .slice(pagination.getCurrentPage() * pagination.limit, (pagination.getCurrentPage() + 1) * pagination.limit);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(responce);
            }, 1 * 1000)
        });
    }

    public async get(id: number): Promise<News> {
        // const responce = this.newsList.filter(n => n.id === id).pop();
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(null);
            }, 1 * 1000)
        });
    }

    public async post(news: News, library: Web3Provider): Promise<void> {
        try {
            const client = IpfsHttpClient.create({ host: "ipfs.infura.io", port: 5001, protocol: "https" })
            const { path } = await client.add(news.content, { pin: true })

            const contract = new ethers.Contract(NewsHardcodeRepository.PROTOCOL_CONTRACT_ADDRESS, Protocol, library.getSigner());
            const senders = await library.listAccounts()
            const result = await signDaiPermit(window.ethereum, NewsHardcodeRepository.DAI_CONTRACT_ADDRESS, senders[0],
                NewsHardcodeRepository.PROTOCOL_CONTRACT_ADDRESS);
            const tx = contract.publish(path, "Worldwide/Ethereum/Airdrops", result.nonce, result.expiry, result.v, result.r, result.s)
            return await tx.wait();
        } catch (e) {
            throw ErrorMapper.toEntity(e)
        }
    }
}
