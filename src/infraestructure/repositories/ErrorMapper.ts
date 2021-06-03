export default class ErrorMapper {
    public static toEntity(e: Error): Error {
        const messageParse = e.message.match(/"message":"(\w|:|\s)+"/)

        let newMessage;
        if (messageParse) {
            const message = messageParse[0].substring(31, messageParse[0].length - 1)
            switch (message) {
                case "Publication does not exist":
                    newMessage = "publication-not-exist-error"; break;
                case "You are not a juror for this publication":
                    newMessage = "not-juror-of-publication"; break;
                case "Topic does not exists":
                case "Unexistent topic":
                    newMessage = "topic-not-exist-error"; break;
                case "Closed topic":
                    newMessage = "close-topic-error"; break;
                case "Insuficient selectable jurors in the topic":
                    newMessage = "insufficient-jurors-in-topic-error"; break;
                case "Vote commit phase has already finished":
                    newMessage = "commit-already-finished-error"; break;
                case "Invalid nonce": //TODO check
                    newMessage = "invalid-nonce"; break;
                case "You must be registered in Proof of Humanity":
                case "To be a juror you must be registered on Proof of Humanity":
                    newMessage = "poh-error"; break;
                case "Reveal already done":
                    newMessage = "already-reveal-error"; break;
                case "Penalized juror":
                    newMessage = "penalized-juror-error"; break;
                case "Missing vote commitment":
                    newMessage = "missing-commitment-error"; break;
                case "Vote reveal phase has already finished":
                    newMessage = "reveal-already-finished-error"; break;
                case "Invalid vote value": //TODO check
                    newMessage = "invalid-vote-error"; break;
                case "Invalid vote reveal: invalid signature":
                    newMessage = "invalid-signature-error"; break;
                case "Publication rewards already withdrawn":
                    newMessage = "arlready-withdrawn-error"; break;
                case "Times must be less than current juror votings":
                    newMessage = "times-juror-error"; break;
                default:
                    newMessage = "unknown-error";
            }
        }
        else {
            console.log(e.message)
            switch (e.message) {
                case "MetaMask Message Signature: User denied message signature.":
                    newMessage = "signature-denied-error"; break;
                case "MetaMask Tx Signature: User denied transaction signature.":
                    newMessage = "transaction-denied-error"; break;
                default:
                    newMessage = "unknown-error";
            }
        }
        return new Error(newMessage)
    }
}
