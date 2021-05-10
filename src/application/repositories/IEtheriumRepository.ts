import useEtherium from '@infraestructure/repositories/etherium/EtheriumRepository'
import { AbstractConnector } from '@web3-react/abstract-connector'

type IUseEtherium = () => [boolean, string, AbstractConnector,
    (connector: AbstractConnector, onError?:
        (error: Error) => void, throwErrors?: boolean) => Promise<void>,
    Error]
    
export default IUseEtherium;