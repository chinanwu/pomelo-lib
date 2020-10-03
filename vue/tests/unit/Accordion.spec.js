import { shallowMount } from "@vue/test-utils";
import Accordion from "@/components/Accordion.vue";

describe("Accordion.vue", () => {
  it("renders Accordion", () => {
    const wrapper = shallowMount(Accordion);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders expanded accordion with label", () => {
    const wrapper = shallowMount(Accordion, {
      props: {
        label: "Accordion Label",
        expand: true
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("expands on click", () => {
    const wrapper = shallowMount(Accordion);
    wrapper.find("#accordionBtn").trigger("click");
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.vm.expanded).toEqual(true);
  });
});
