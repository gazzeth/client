import { TYPES } from '@entrypoint/presenters/web/actions/errorActions';

export type ErrorState = {
    code?: string
}

type Action = {
    type: string,
    code?: string
}

const ErrorReducer = (state: ErrorState  = { code: undefined }, action: Action) => {
    switch (action.type) {
        case TYPES.SET_CODE:
            return { ...state, code: action.code }
            case TYPES.RESET_CODE:
                return { ...state, code: undefined }
        default:
            return state
    }
}

export default ErrorReducer