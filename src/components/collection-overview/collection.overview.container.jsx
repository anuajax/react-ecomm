import {connect} from 'react-redux'; 
import {createStructuredSelector} from 'reselect';
import withSpinner from '../withSpinner/withSpinner.component';
import CollectionOverview from './collection-overview';
import {selectIsCollectionFetching} from '../../redux/selectors/shop.collection.selectors';
import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching,

})
export const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
//export const CollectionsOverviewContainer = connect(mapStateToProps)(withSpinner(CollectionOverview));