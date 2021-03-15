import MyPagination from './Pagination.vue'

export default {
  title: 'Example/Pagination',
  component: MyPagination,
  argTypes: {}
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    MyPagination
  },
  template: '<my-pagination v-bind="$props" />'
})

export const Primary = Template.bind({})
Primary.args = {
  perPage: 3,
  currentPage: 1
}
