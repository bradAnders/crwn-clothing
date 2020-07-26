import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'

import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// ShopPage is a Route in App.js, so we get match automatically
class ShopPage extends Component {
  state = { loading: true }
  
  componentDidMount () {
    const collectionRef = firestore.collection('collections');
    const { updateCollections } = this.props;

    // https://firebase.google.com/docs/firestore/use-rest-api
    fetch('https://firestore.googleapis.com/v1/projects/crwn-clothing-db-4dd27/databases/(default)/documents/collections')
      .then(response => response.json())
      .then(collections => console.log(collections) /* Map through the very-nested collection */)
  }

  render () {
    const { match } = this.props
    const { loading } = this.state
    return (
    <div className='shop-page'>
      <Route
        exact path={ `${ match.path }` }
        render={ (props) =>
          <CollectionsOverviewWithSpinner
            isLoading={ loading }
            { ...props }
          />
        }
      />
      {/* collectionId is passed as a parameter to CollectionPage ({ match.params.collectionId })*/}
      <Route
        path={ `${ match.path }/:collectionId` }
        render={ (props) =>
          <CollectionPageWithSpinner
            isLoading={ loading }
            { ...props }  
          />
        }  
      />
    </div>
  )};
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(
    updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);