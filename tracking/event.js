import ReactGA from 'react-ga4'

const gaEvent = eventData => (ReactGA.ga() ? ReactGA.event(eventData) : null)

export default gaEvent
