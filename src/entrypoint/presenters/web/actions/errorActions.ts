
export const TYPES = {
    SET_CODE: "SET_CODE",
    RESET_CODE: "RESET_CODE"
}

const setCode = (code: string) => {
    return {
        type: TYPES.SET_CODE,
        code: code
    }
}

const resetCode = () => {
    return {
        type: TYPES.RESET_CODE,
    }
}

const errorActions = { setCode, resetCode }

export default errorActions
