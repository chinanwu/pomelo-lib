import { shallowMount } from "@vue/test-utils";
import PMButton from "@/components/Buttons/PMButton";

describe("PMButton", () => {
  describe("rendering", () => {
    it("renders PMButton", () => {
      const wrapper = shallowMount(PMButton, {
        slots: {
          content: "Test"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
