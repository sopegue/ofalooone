import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import TDatepicker from 'vue-tailwind/dist/t-datepicker'
import French from 'vue-tailwind/dist/l10n/fr'

const settings = {
  't-datepicker': {
    component: TDatepicker,
    props: {
      locales: {
        fr: French,
      },
      lang: 'fr',
      fixedClasses: {
        navigator: 'flex',
        navigatorViewButton: 'flex items-center',
        navigatorViewButtonIcon: 'flex-shrink-0 h-5 w-5',
        navigatorViewButtonBackIcon: 'flex-shrink-0 h-5 w-5',
        navigatorLabel: 'flex items-center py-1',
        navigatorPrevButtonIcon: 'h-6 w-6 inline-flex',
        navigatorNextButtonIcon: 'h-6 w-6 inline-flex',
        inputWrapper: 'relative flex align-center',
        viewGroup: 'inline-flex flex-wrap',
        view: 'w-64',
        calendarDaysWrapper: 'grid grid-cols-7',
        calendarHeaderWrapper: 'grid grid-cols-7',
        monthWrapper: 'grid grid-cols-4',
        yearWrapper: 'grid grid-cols-4',
        input:
          'block w-full form-input px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
        clearButton: 'absolute right-0 mr-2',
        clearButtonIcon: 'fill-current h-3 w-3',
      },
      classes: {
        wrapper: 'relative',
        dropdownWrapper: 'absolute',
        dropdown: 'absolute rounded shadow bg-white overflow-hidden mt-1',
        enterClass: 'opacity-0 scale-95',
        enterActiveClass: 'transition transform ease-out duration-100',
        enterToClass: 'opacity-100 scale-100',
        leaveClass: 'opacity-100 scale-100',
        leaveActiveClass: 'transition transform ease-in duration-75',
        leaveToClass: 'opacity-0 scale-95',
        inlineWrapper: '',
        inlineViews: 'rounded bg-white border mt-1 inline-flex',
        inputWrapper: '',
        input: 'text-black placeholder-gray-400 border-gray-300',
        clearButton:
          'hover:bg-gray-100 rounded transition duration-100 ease-in-out text-gray-600',
        clearButtonIcon: '',
        viewGroup: '',
        view: '',
        navigator: 'pt-2 px-3',
        navigatorViewButton:
          'transition ease-in-out duration-100 inline-flex cursor-pointer rounded-full px-2 py-1 -ml-1 hover:bg-gray-100',
        navigatorViewButtonIcon: 'fill-current text-gray-400',
        navigatorViewButtonBackIcon: 'fill-current text-gray-400',
        navigatorViewButtonMonth: 'text-gray-700 font-semibold',
        navigatorViewButtonYear: 'text-gray-500 ml-1',
        navigatorViewButtonYearRange: 'text-gray-500 ml-1',
        navigatorLabel: 'py-1',
        navigatorLabelMonth: 'text-gray-700 font-semibold',
        navigatorLabelYear: 'text-gray-500 ml-1',
        navigatorPrevButton:
          'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 ml-2 ml-auto disabled:opacity-50 disabled:cursor-not-allowed',
        navigatorNextButton:
          'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 -mr-1 disabled:opacity-50 disabled:cursor-not-allowed',
        navigatorPrevButtonIcon: 'text-gray-400',
        navigatorNextButtonIcon: 'text-gray-400',
        calendarWrapper: 'px-3 pt-2',
        calendarHeaderWrapper: '',
        calendarHeaderWeekDay:
          'uppercase text-xs text-gray-500 w-8 h-8 flex items-center justify-center',
        calendarDaysWrapper: '',
        calendarDaysDayWrapper: 'w-full h-8 flex flex-shrink-0 items-center',
        otherMonthDay:
          'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed',
        emptyDay: '',
        inRangeFirstDay:
          'text-sm bg-blue-500 text-white w-full h-8 rounded-l-full',
        inRangeLastDay:
          'text-sm bg-blue-500 text-white w-full h-8 rounded-r-full',
        inRangeDay:
          'text-sm bg-blue-200 w-full h-8 disabled:opacity-50 disabled:cursor-not-allowed',
        selectedDay:
          'text-sm rounded-full w-8 h-8 mx-auto bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed',
        activeDay:
          'text-sm rounded-full bg-blue-100 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed',
        highlightedDay:
          'text-sm rounded-full bg-blue-200 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed',
        day:
          'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed',
        today:
          'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-500',
        monthWrapper: 'px-3 pt-2',
        selectedMonth:
          'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
        activeMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-100',
        month: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',
        yearWrapper: 'px-3 pt-2',
        year: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',
        selectedYear:
          'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
        activeYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-100',
      },
      variants: {
        danger: {
          input: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
          clearButton: 'hover:bg-red-200 text-red-500',
        },
      },
    },
  },
}

Vue.use(VueTailwind, settings)
