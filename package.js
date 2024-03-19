Package.describe({
  name: 'lef:analytics',
  version: '2.0.2',
  summary: 'Google Analytics 4 Wrapper'
})

Package.onUse(function (api) {
  Npm.depends({
    'react-ga4': '2.1.0'
  })
  api.use(['ecmascript'])
  api.mainModule('client.js', 'client')
})
