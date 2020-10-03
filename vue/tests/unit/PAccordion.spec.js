import { mount, shallowMount } from "@vue/test-utils";

import PAccordion from "@/components/PAccordion/PAccordion.vue";
import PButton from "@/components/PButtons/PButton.vue";

describe("PAccordion", () => {
  describe("rendering", () => {
    it("renders PAccordion", () => {
      const wrapper = shallowMount(PAccordion);
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.props().expand).toBe(false);
    });

    it("renders expanded accordion with label", () => {
      const wrapper = mount(PAccordion, {
        props: {
          label: "Accordion Label",
          expand: true
        },
        slots: {
          content: "I am the innards of the accordion"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  describe("behaviour", () => {
    it("expands on click", () => {
      const wrapper = shallowMount(PAccordion, {
        props: {
          expand: false
        }
      });
      wrapper.findComponent(PButton).vm.$emit("click");
      expect(wrapper.vm.expanded).toEqual(true);
    });

    it("closes on click", () => {
      const wrapper = shallowMount(PAccordion, {
        props: {
          expand: true
        }
      });
      wrapper.findComponent(PButton).vm.$emit("click");
      expect(wrapper.vm.expanded).toEqual(false);
    });
  });
});
