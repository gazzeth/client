export enum VOTE_VALUE {
    None = 0,
    True,
    False,
    Unqualified,
    Pending,
    Insufficient,
    NoConsent
}

const VOTE_VALUES: VOTE_VALUE[] = [VOTE_VALUE.None, VOTE_VALUE.True, VOTE_VALUE.False, 
    VOTE_VALUE.Unqualified, VOTE_VALUE.Pending, VOTE_VALUE.Insufficient, VOTE_VALUE.NoConsent];

export { VOTE_VALUES }