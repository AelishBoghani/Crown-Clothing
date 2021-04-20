import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Preview from '../Preview-Collections/Preview';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';

import './CollectionOverview.scss';

const CollectionOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <Preview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);