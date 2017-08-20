import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import style from './Loading.css'

const LOADING_ICON = '/loading.gif'

const renderLoading = () => (
    <div className={classNames(style['loaderBox'])}>
        <img className='loader' src={LOADING_ICON} />
    </div>
)

class Loading extends Component {
  render () {
    const { isLoading } = this.props
    return (isLoading) ? renderLoading() : null
  }
}

Loading.propTypes = {
  isLoading: PropTypes.bool
}

export default Loading
