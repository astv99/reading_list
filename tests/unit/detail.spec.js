import { shallowMount } from '@vue/test-utils';
import Detail from '@/views/Detail.vue';

describe('Detail.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(Detail, {});
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
