import React from 'react'
import { withRouter } from 'react-router'
import ReactGA from 'react-ga4'

class PageView extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    !!ReactGA.send &&
      ReactGA.send({ hitType: 'pageview', page: this.props.location.pathname })
  }
  componentWillReceiveProps ({ location: { pathname } }) {
    const currentLocation = this.props.location
    if (location !== currentLocation)
      !!ReactGA.send && ReactGA.send({ hitType: 'pageview', page: pathname })
  }
  render () {
    return this.props.children
  }
}

export default withRouter(PageView)
