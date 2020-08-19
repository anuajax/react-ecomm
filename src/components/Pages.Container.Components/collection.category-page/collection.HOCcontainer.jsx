import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {selectiscollectionsLoaded} from '../../../redux/selectors/shop.collection.selectors';
import withSpinner from '../../withSpinner/withSpinner.component';
import CollectionPage from './collection.Page.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectiscollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionPage);

export default CollectionPageContainer;