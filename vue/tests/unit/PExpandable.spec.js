import { mount, shallowMount } from "@vue/test-utils";

import PExpandable from "@/components/PExpandable/PExpandable";
import PButton from "@/components/PButtons/PButton";

describe("PExpandable", () => {
  describe("rendering", () => {
    it("renders PExpandable", () => {
      const wrapper = shallowMount(PExpandable);
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders all the props", () => {
      const wrapper = shallowMount(PExpandable, {
        props: {
          title: "Title",
          description: "Some words describing some things",
          maxLength: 4,
          expand: false,
          closedClass: "FakeClass"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders expanded", () => {
      const wrapper = mount(PExpandable, {
        props: {
          expand: true
        },
        slots: {
          content: "<div>I am the content</div>"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  describe("rendering", () => {
    it("expands when clicked on", () => {
      const wrapper = shallowMount(PExpandable);
      wrapper.findComponent(PButton).vm.$emit("click");
      expect(wrapper.vm.expanded).toEqual(true);
    });

    it("closes when clicked on", () => {
      const wrapper = shallowMount(PExpandable, {
        props: {
          expand: true
        }
      });
      wrapper.findComponent(PButton).vm.$emit("click");
      expect(wrapper.vm.expanded).toEqual(false);
    });

    it("expands when enter is pressed", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(PExpandable);
      wrapper.findComponent(PButton).vm.$emit("keydown", {
        preventDefault,
        keyCode: 13
      });
      expect(wrapper.vm.expanded).toEqual(true);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("closes when enter is pressed", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(PExpandable, {
        props: {
          expand: true
        }
      });
      wrapper.findComponent(PButton).vm.$emit("keydown", {
        preventDefault,
        keyCode: 13
      });
      expect(wrapper.vm.expanded).toEqual(false);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("expands when space is pressed", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(PExpandable);
      wrapper.findComponent(PButton).vm.$emit("keydown", {
        preventDefault,
        keyCode: 32
      });
      expect(wrapper.vm.expanded).toEqual(true);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("closes when space is pressed", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(PExpandable, {
        props: {
          expand: true
        }
      });
      wrapper.findComponent(PButton).vm.$emit("keydown", {
        preventDefault,
        keyCode: 32
      });
      expect(wrapper.vm.expanded).toEqual(false);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });
  });
});
