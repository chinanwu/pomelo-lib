import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("Button.vue", () => {
  it("renders Button", () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders Button with props", () => {
    const wrapper = shallowMount(Button, {
      props: {
        id: "test",
        class: "Button--fake",
        ariaLabel: "Fake Button",
        role: "link",
        ariaHasPopup: "dialog",
        ariaRoledescription: "this is unnecessary but test",
        disabled: false
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("emits click", () => {
    const wrapper = shallowMount(Button, {
      props: {
        id: "test"
      }
    });
    expect(wrapper.element).toMatchSnapshot();
    wrapper.find("#test").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });

  it("emits keydown", () => {
    const wrapper = shallowMount(Button, {
      props: {
        id: "test"
      }
    });
    expect(wrapper.element).toMatchSnapshot();
    wrapper.find("#test").trigger("keydown");
    expect(wrapper.emitted()).toHaveProperty("keydown");
  });
});
