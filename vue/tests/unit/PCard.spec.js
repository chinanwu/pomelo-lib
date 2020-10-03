import { mount, shallowMount } from "@vue/test-utils";

import PCard from "@/components/PCard/PCard";

describe("PCard", () => {
  describe("rendering", () => {
    it("renders card", () => {
      const wrapper = shallowMount(PCard);
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders flipped card", () => {
      const wrapper = shallowMount(PCard, {
        props: {
          id: "test",
          class: "CustomCardClass",
          flipped: true
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders card with front and back slots", () => {
      const wrapper = mount(PCard, {
        slots: {
          front: "<div class='test'>front</div>",
          back: "<div class='test'>front</div>"
        }
      });
      expect(wrapper.findAll(".test").length).toBe(2);
    });
  });

  describe("behaviour", () => {
    it("flips when clicked", () => {
      const wrapper = shallowMount(PCard, {
        props: {
          id: "test"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      wrapper.find("#test").trigger("click");
      expect(wrapper.emitted()).toHaveProperty("click");
    });

    it("flips when the enter or space button is pressed", () => {
      const wrapper = shallowMount(PCard, {
        props: {
          id: "test"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      wrapper.find("#test").trigger("keydown", {
        keyCode: 13
      });
      wrapper.find("#test").trigger("keydown", {
        keyCode: 32
      });
      expect(wrapper.emitted()).toHaveProperty("click");
      expect(wrapper.emitted("click").length).toBe(2);
    });
  });
});
