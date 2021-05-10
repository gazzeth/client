import { useWeb3React } from '@web3-react/core'
import { AbstractConnector } from '@web3-react/abstract-connector'
import IUseEtherium from '@application/repositories/IEtheriumRepository';

const useEtherium: IUseEtherium = (): [boolean, string, AbstractConnector,
    (connector: AbstractConnector, onError?:
        (error: Error) => void, throwErrors?: boolean) => Promise<void>,
    Error] => {
    const { active, account, connector, activate, error } = useWeb3React();
    return [active, account, connector, activate, error];
}

export default useEtherium;
