
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "@entrypoint/presenters/web/components/Error/Error";
import withLayout from "@entrypoint/presenters/web/components/Layout/withLayout";
import NewsList from "@entrypoint/presenters/web/components/NewsList/NewsList";
import NewsPage from "@entrypoint/presenters/web/components/NewsPage/NewsPage";
import NewsForm from "@entrypoint/presenters/web/components/NewsForm/NewsForm";
import JuryForm from "@entrypoint/presenters/web/components/JuryForm/JuryForm";
import VoteForm from "@entrypoint/presenters/web/components/VoteForm/VoteForm";
import { URLS } from "@constants/urls";

export default function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={URLS.home} component={withLayout(NewsList)} />
          <Route exact path={URLS.revealForm} component={withLayout(() => <VoteForm isReveal={true}/>)}/>
          <Route exact path={URLS.voteForm} component={withLayout(() => <VoteForm isReveal={false}/>)}/>
          <Route exact path={URLS.juryForm} component={withLayout(JuryForm)}/>
          <Route exact path={URLS.newsForm} component={withLayout(NewsForm)}/>
          <Route exact path={URLS.news} component={withLayout(NewsPage)}/>
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
  );
}
