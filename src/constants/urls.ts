export const URLS = {
    home: process.env.REACT_APP_PUBLIC_URL + "/",
    news: process.env.REACT_APP_PUBLIC_URL + "/news/:id",
    newsForm: process.env.REACT_APP_PUBLIC_URL + "/news/publish",
    juryForm: process.env.REACT_APP_PUBLIC_URL + "/jurors/subscribe",
    voteForm: process.env.REACT_APP_PUBLIC_URL + "/news/:id/commit",
    revealForm: process.env.REACT_APP_PUBLIC_URL + "/news/:id/reveal",
}
