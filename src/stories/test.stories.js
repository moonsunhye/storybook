import MyTest from './test.vue';

export default {
  title: 'Example/test',
  component: MyTest,
  argTypes: {
    pageType: { control: { type: 'select', options: ['type1', 'type3'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyTest },
  template: '<my-test v-bind="$props" />',
});

export const Defualt = Template.bind({});
Defualt.args = {
  itemTitle: '두줄까지 출력됩니다.',
};