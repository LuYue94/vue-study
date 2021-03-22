import SelectList from './AntDesignVue/SelectList/Index'
import DateRangePicker from './AntDesignVue/DateRangePicker/Date'

const components = [
    SelectList,
    SelectListMultiple,
    DateRangePicker
]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default {
    install
}
