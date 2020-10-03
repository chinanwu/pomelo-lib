import { shallowMount } from "@vue/test-utils";
import PSButton from "@/components/PButtons/PSButton";

describe("PSButton", () => {
  describe("rendering", () => {
    it("renders PSButton", () => {
      const wrapper = shallowMount(PSButton, {
        slots: {
          content: "Test"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});