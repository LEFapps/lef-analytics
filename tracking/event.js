import ReactGA from 'react-ga4'

const gaEvent = eventData => (!!ReactGA.event ? ReactGA.event(eventData) : null)

export default gaEvent
