import { shallowMount } from "@vue/test-utils";
import PLButton from "@/components/Buttons/PLButton";

describe("PLButton", () => {
  describe("rendering", () => {
    it("renders PLButton", () => {
      const wrapper = shallowMount(PLButton, {
        slots: {
          content: "Test"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
