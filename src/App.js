import React, { Suspense, useEffect } from "react";
import {withTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import SearchLayout from "./components/layouts/search/SearchLayout";
import Simulator from './components/pages/Simulator/Simulator';


const store = configureStore();

const withSearchLayout = (SubComponent) => (props) => (
	<SearchLayout>
		<Suspense fallback={
				<div>Loading...</div>
		} >
			<SubComponent {...props} />
		</Suspense>
	</SearchLayout>
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={withSearchLayout(Simulator)}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default withTranslation() (App);
