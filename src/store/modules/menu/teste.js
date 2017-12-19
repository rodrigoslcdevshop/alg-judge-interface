import lazyLoading from './lazyLoading'

export default {
  name: 'Teste',
  path: '/teste',
  component: lazyLoading('teste/Teste'),
  meta: {
    default: true,
    title: 'Teste',
    iconClass: 'vuestic-icon vuestic-icon-dashboard'
  }
}
