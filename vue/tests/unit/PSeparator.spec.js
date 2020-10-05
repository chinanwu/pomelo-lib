import { shallowMount } from "@vue/test-utils";

import PSeparator from "@/components/PSeparator/PSeparator";

describe("PSeparator", () => {
  describe("rendering", () => {
    it("renders PSeparator", () => {
      const wrapper = shallowMount(PSeparator);
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
