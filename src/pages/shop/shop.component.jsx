import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'

import { updateCollections } from '../../redux/shop/shop.actions';

// ShopPage is a Route in App.js, so we get match automatically
class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount () {
    const collectionRef = firestore.collection('collections');
    const { updateCollections } = this.props;

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMaps = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMaps)
    })
  }

  componentWillUnmount () {

  }

  render () {
    const { match } = this.props
    return (
    <div className='shop-page'>
      <Route exact path={ `${ match.path }` } component={ CollectionsOverview } />
      {/* collectionId is passed as a parameter to CollectionPage ({ match.params.collectionId })*/}
      <Route path={ `${ match.path }/:collectionId` } component={ CollectionPage } />
    </div>
  )};
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(
    updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);