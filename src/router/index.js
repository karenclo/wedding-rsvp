import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Story from '@/components/Story'
import Rsvp from '@/components/Rsvp'
import WeddingDay from '@/components/WeddingDay'
import TravelInfo from '@/components/TravelInfo'
import Registry from '@/components/Registry'

Vue.use(Router)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash

      // specify offset of the element
      if (to.hash === '#anchor2') {
        position.offset = { y: 100 }
      }

      if (document.querySelector(to.hash)) {
        return position
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false
    }

    return new Promise(resolve => {
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // coords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0
        position.y = 0
      }

      // wait for the out transition to complete (if necessary)
      this.app.$root.$once('triggerScroll', () => {
        // if the resolved position is falsy or an empty object,
        // will retain current scroll position.
        resolve(position)
      })
    })
  }
}

export default new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { scrollToTop: true }
    },
    {
      path: '/story',
      name: 'Story',
      component: Story
    },
    {
      path: '/rsvp',
      name: 'Rsvp',
      component: Rsvp
    },
    {
      path: '/weddingday',
      name: 'WeddingDay',
      component: WeddingDay
    },
    {
      path: '/travelinfo',
      name: 'TravelInfo',
      component: TravelInfo
    },
    {
      path: '/registry',
      name: 'Registry',
      component: Registry
    }
  ]
})
