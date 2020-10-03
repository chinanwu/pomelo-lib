import { shallowMount } from "@vue/test-utils";
import PButton from "@/components/Buttons/PButton";

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

    it("throws error if not valid prop", () => {
      const validTypes = ["menu", "listbox", "tree", "grid", "dialog", "true"];
      const validator = PButton.props.ariaHasPopup.validator;
      validTypes.forEach(valid => expect(validator(valid)).toBe(true));
      expect(validator("fake")).toBe(false);
    });
  });
});
