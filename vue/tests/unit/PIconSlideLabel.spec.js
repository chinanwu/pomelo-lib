import { shallowMount } from "@vue/test-utils";

import PIconSlideLabel from "@/components/PIconSlideLabel/PIconSlideLabel";

describe("PIconSlideLabel", () => {
  describe("rendering", () => {
    it("renders PIconSlideLabel", () => {
      const wrapper = shallowMount(PIconSlideLabel, {
        props: {
          iconUrl: "fake/picture.png",
          alt: "fake",
          label: "Label"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders linked PIconSlideLabel", () => {
      const wrapper = shallowMount(PIconSlideLabel, {
        props: {
          iconUrl: "fake/picture.png",
          alt: "fake",
          label: "Label",
          link: "fake.com",
          linkTitle: "Fake site"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders PIconSlideLabel with sizes", () => {
      const wrapper = shallowMount(PIconSlideLabel, {
        props: {
          iconUrl: "fake/picture.png",
          alt: "fake",
          label: "Label",
          iconHeight: 12,
          iconWidth: 12
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
