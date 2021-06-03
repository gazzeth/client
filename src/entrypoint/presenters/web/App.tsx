
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "@entrypoint/presenters/web/components/Error/Error";
import withLayout from "@entrypoint/presenters/web/components/Layout/withLayout";
import withAuthorization from "@entrypoint/presenters/web/components/Authorization/withAuthorization";
import NewsList from "@entrypoint/presenters/web/components/NewsList/NewsList";
import NewsPage from "@entrypoint/presenters/web/components/NewsPage/NewsPage";
import NewsForm from "@entrypoint/presenters/web/components/NewsForm/NewsForm";
import JuryForm from "@entrypoint/presenters/web/components/JuryForm/JuryForm";
import VoteForm from "@entrypoint/presenters/web/components/VoteForm/VoteForm";
import { URLS } from "@constants/urls";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  toast: {
    borderRadius: "20px"
  },
}));

export default function App() {

  const classes = useStyles();

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={URLS.home} component={withLayout(NewsList)} />
          <Route exact path={URLS.revealForm} component={withAuthorization(withLayout(() => <VoteForm isReveal={true} />))} />
          <Route exact path={URLS.voteForm} component={withAuthorization(withLayout(() => <VoteForm isReveal={false} />))} />
          <Route exact path={URLS.juryForm} component={withAuthorization(withLayout(JuryForm))} />
          <Route exact path={URLS.newsForm} component={withAuthorization(withLayout(NewsForm))} />
          <Route exact path={URLS.news} component={withLayout(NewsPage)} />
          <Route component={() => <Error code={"404"}/>} />
        </Switch>
      </BrowserRouter>
      <ToastContainer toastClassName={classes.toast} position="bottom-center" />
    </>
  );
}

//TODO image logo and validate dai balanceOf
