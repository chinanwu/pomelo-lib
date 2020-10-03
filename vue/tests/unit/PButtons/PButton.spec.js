import { shallowMount } from "@vue/test-utils";

import PButton from "@/components/PButtons/PButton";

describe("PButton", () => {
  describe("rendering", () => {
    it("renders PButton", () => {
      const wrapper = shallowMount(PButton);
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders PButton with props", () => {
      const wrapper = shallowMount(PButton, {
        props: {
          id: "test",
          class: "PButton--fake",
          ariaLabel: "Fake PButton",
          ariaLabelledBy: "buttonLabel",
          role: "link",
          ariaHasPopup: "dialog",
          ariaRoledescription: "this is unnecessary but test",
          disabled: true
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.find("#test").classes()).toEqual([
        "PButton",
        "PButton--fake"
      ]);
    });
  });

  describe("behaviour", () => {
    it("emits click", () => {
      const wrapper = shallowMount(PButton, {
        props: {
          id: "test"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      wrapper.find("#test").trigger("click");
      expect(wrapper.emitted()).toHaveProperty("click");
    });

    it("emits keydown", () => {
      const wrapper = shallowMount(PButton, {
        props: {
          id: "test"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      wrapper.find("#test").trigger("keydown");
      expect(wrapper.emitted()).toHaveProperty("keydown");
    });
  });

  describe("prop validation", () => {
    it("throws error if not valid role", () => {
      const validTypes = ["tab", "link"];
      const validator = PButton.props.role.validator;
      validTypes.forEach(valid => expect(validator(valid)).toBe(true));
      expect(validator("button")).toBe(false);
    });

    it("throws error if not valid aria-haspopup", () => {
      const validTypes = ["menu", "listbox", "tree", "grid", "dialog", "true"];
      const validator = PButton.props.ariaHasPopup.validator;
      validTypes.forEach(valid => expect(validator(valid)).toBe(true));
      expect(validator("fake")).toBe(false);
    });

    it("throws error if not valid aria-roledescription", () => {
      const validator = PButton.props.ariaRoledescription.validator;
      expect(validator("I am a real description but not a good one")).toBe(
        true
      );
      expect(validator("        ")).toBe(false);
    });
  });
});
