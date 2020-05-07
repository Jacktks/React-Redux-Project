import React from 'react';
import {Route} from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {connect} from 'react-redux';

import {updateCollections} from '../../redux/shop/shop.action';

import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';


//High order Component bao boc collectionView and CollectionPage trong WithSnipper, 
//render components WithSnipper xong roi doi call API xong moi render 2 component kia
const CollectionOverviewWithSnipper = WithSpinner(CollectionOverview);
const CollectionPageWithSnipper = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

        state = {
            loading: true
        }


    unsubscribeSnapshot = null;

    componentDidMount() {

        const {updateCollections} = this.props;

        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionsMap);

            //call Api xong thi set lai state loading = false va in ra component CollectionOverview va collectionpage
            this.setState({loading: false});
        })
    }

    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSnipper isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSnipper isLoading={loading} {...props}/>}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(ShopPage);