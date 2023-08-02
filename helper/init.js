import ReactGA from 'react-ga4'

const gaInit = ({ trackingId, options, optIn }) => {
  if (trackingId) {
    if (optIn) window[`ga-disable-${trackingId}`] = true
    else ReactGA.initialize(trackingId, options)
  }
}

export default gaInit
