import React from 'react';

import Header from './containers/Header/Header';
import Layout from './components/Layout/Layout';
import Form from "./containers/Form/Form";

function App() {

  return (
    <div className="App">
      <Header />
      <Layout>
        <Form />
      </Layout>
    </div>
  );
}

export default App;
