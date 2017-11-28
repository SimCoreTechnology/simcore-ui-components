import Vue from 'vue'
import Router from 'vue-router'

// Docs: Components
import DocAutocomplete from '../pages/components/Autocomplete'
import DocBadges from '../pages/components/Badge'
import DocBulkCheck from '../pages/components/BulkCheck'
import DocCalendar from '../pages/components/Calendar'
import DocDatalist from '../pages/components/Datalist'
import DocDatepicker from '../pages/components/Datepicker'
import DocFilterBy from '../pages/components/FilterBy'
import DocIconText from '../pages/components/IconText'
import DocLoader from '../pages/components/Loader'
import DocModal from '../pages/components/Modal'
import DocOverlay from '../pages/components/Overlay'
import DocPanel from '../pages/components/Panel'
import DocProgress from '../pages/components/Progress'
import DocSelection from '../pages/components/Selection'
import DocSwitch from '../pages/components/Switch'
import DocTag from '../pages/components/Tag'
import DocTimePicker from '../pages/components/TimePicker'
import DocTooltip from '../pages/components/Tooltip'

// Nav
import Hello from '../Hello'
import GettingStarted from '../GettingStarted'
import ComponentLibrary from '../ComponentLibrary'
import StyleLibrary from '../StyleLibrary'
import Extras from '../Extras'

// Docs: Styles
import GuideIntro from '../pages/styles/Intro'
import GuideButtons from '../pages/styles/Buttons'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      label: 'Home',
      icon: 'fa-home fa-fw',
      component: Hello,
    },
    {
      path: '/getting-started',
      name: 'getting-started',
      label: 'Getting Started',
      icon: 'fa-star fa-fw',
      component: GettingStarted,
    },
    {
      path: '/components',
      label: 'Component Library',
      icon: 'fa-cubes fa-fw',
      component: ComponentLibrary,
      children: [
        {
          path: '',
          redirect: 'icon-text',
        },
        {
          path: 'autocomplete',
          name: 'autocomplete',
          label: 'Autocomplete',
          components: {
            details: DocAutocomplete,
          },
        },
        {
          path: 'badge',
          name: 'badge',
          label: 'Badge',
          components: {
            details: DocBadges,
          },
        },
        {
          path: 'bulkcheck',
          name: 'bulkcheck',
          label: 'Bulk Check',
          components: {
            details: DocBulkCheck,
          },
        },
        {
          path: 'calendar',
          name: 'calendar',
          label: 'Calendar',
          components: {
            details: DocCalendar,
          },
        },
        {
          path: 'datalist',
          name: 'datalist',
          label: 'Datalist',
          components: {
            details: DocDatalist,
          },
        },
        {
          path: 'datepicker',
          name: 'datepicker',
          label: 'Datepicker',
          components: {
            details: DocDatepicker,
          },
        },
        {
          path: 'filter-by',
          name: 'filter-by',
          label: 'FilterBy',
          components: {
            details: DocFilterBy,
          },
        },
        {
          path: 'icon-text',
          name: 'icon-text',
          label: 'Icon + Text',
          components: {
            details: DocIconText,
          },
        },
        {
          path: 'loader',
          name: 'loader',
          label: 'Loader',
          components: {
            details: DocLoader,
          },
        },
        {
          path: 'modal',
          name: 'modal',
          label: 'Modal',
          components: {
            details: DocModal,
          },
        },
        {
          path: 'overlay',
          name: 'overlay',
          label: 'Overlay',
          components: {
            details: DocOverlay,
          },
        },
        {
          path: 'panel',
          name: 'panel',
          label: 'Panel',
          components: {
            details: DocPanel,
          },
        },
        {
          path: 'progress',
          name: 'progress',
          label: 'Progress',
          components: {
            details: DocProgress,
          },
        },
        {
          path: 'selection',
          name: 'selection',
          label: 'Selection',
          components: {
            details: DocSelection,
          },
        },
        {
          path: 'switch',
          name: 'switch',
          label: 'Toggle Switch',
          components: {
            details: DocSwitch,
          },
        },
        {
          path: 'tag',
          name: 'tag',
          label: 'Tag',
          components: {
            details: DocTag,
          },
        },
        {
          path: 'time-picker',
          name: 'timepicker',
          label: 'Time Picker',
          components: {
            details: DocTimePicker,
          },
        },
        {
          path: 'tooltip',
          name: 'tooltip',
          label: 'Tooltip',
          components: {
            details: DocTooltip,
          },
        },
      ],
    },
    {
      path: '/styles',
      label: 'Style Guide',
      icon: 'fa-paint-brush fa-fw',
      component: StyleLibrary,
      children: [
        {
          path: '',
          redirect: 'intro',
        },
        {
          path: 'intro',
          name: 'intro',
          label: 'Intro',
          components: {
            details: GuideIntro,
          },
        },
        {
          path: 'buttons',
          name: 'buttons',
          label: 'Buttons',
          components: {
            details: GuideButtons,
          },
        },
      ],
    },
    {
      path: '/extras',
      name: 'extras',
      icon: 'fa-code fa-fw',
      label: 'Other Things',
      component: Extras,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
})
