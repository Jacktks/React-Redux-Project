import React from 'react';
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySection} from '../../redux/directory/directory.selectors';

const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map (({id, ...otherProps}) => (
        <MenuItem key={id} {...otherProps}/>
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);