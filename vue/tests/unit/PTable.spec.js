import { shallowMount } from "@vue/test-utils";

import PTable from "@/components/PTable/PTable";

describe("PTable", () => {
  describe("rendering", () => {
    it("renders PTable", () => {
      const wrapper = shallowMount(PTable);
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
