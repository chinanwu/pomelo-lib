import { shallowMount } from "@vue/test-utils";

import ArrowSelector from "@/components/ArrowSelector";

describe("ArrowSelector", () => {
  describe("rendering", () => {
    it("renders ArrowSelector", () => {
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          default: 1,
          total: 3
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(1);
    });
  });

  describe("behaviour", () => {
    it("selects next if click right arrow", () => {
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          default: 1,
          total: 3
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(1);

      wrapper.find("#arrowSelectorRight").trigger("click");
      expect(wrapper.emitted()).toHaveProperty("change");
      expect(wrapper.emitted().change).toEqual([[2]]);
      expect(wrapper.vm.current).toBe(2);
    });

    it("selects next if enter press right arrow", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          default: 3,
          total: 3
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(3);

      wrapper.find("#arrowSelectorRight").trigger("keydown", {
        key: "Enter",
        preventDefault
      });
      expect(wrapper.emitted()).toHaveProperty("change");
      expect(wrapper.emitted().change).toEqual([[1]]);
      expect(wrapper.vm.current).toBe(1);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("selects next if space press right arrow", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          default: 3,
          total: 3
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(3);

      wrapper.find("#arrowSelectorRight").trigger("keydown", {
        key: "Space",
        preventDefault
      });
      expect(wrapper.emitted()).toHaveProperty("change");
      expect(wrapper.emitted().change).toEqual([[1]]);
      expect(wrapper.vm.current).toBe(1);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("does nothing on invalid keydown on right arrow", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          default: 3,
          total: 3
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(3);

      wrapper.find("#arrowSelectorRight").trigger("keydown", {
        key: "A",
        preventDefault
      });
      expect(wrapper.vm.current).toBe(3);
      expect(preventDefault).toHaveBeenCalledTimes(0);

      wrapper.find("#arrowSelectorRight").trigger("keydown");
      expect(wrapper.vm.current).toBe(3);

      wrapper.find("#arrowSelectorRight").trigger("keydown", {
        key: "Enter",
        shiftKey: true,
        preventDefault
      });
      expect(wrapper.vm.current).toBe(3);
      expect(preventDefault).toHaveBeenCalledTimes(0);

      wrapper.find("#arrowSelectorRight").trigger("keydown", {
        key: "Enter",
        ctrlKey: true,
        preventDefault
      });
      expect(wrapper.vm.current).toBe(3);
      expect(preventDefault).toHaveBeenCalledTimes(0);

      wrapper.find("#arrowSelectorRight").trigger("keydown", {
        key: "Enter",
        altKey: true,
        preventDefault
      });
      expect(wrapper.vm.current).toBe(3);
      expect(preventDefault).toHaveBeenCalledTimes(0);

      wrapper.find("#arrowSelectorRight").trigger("keydown", {
        key: "Enter",
        metaKey: true,
        preventDefault
      });
      expect(wrapper.vm.current).toBe(3);
      expect(preventDefault).toHaveBeenCalledTimes(0);
    });

    it("selects prev if click left arrow", () => {
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          default: 2,
          total: 3
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(2);

      wrapper.find("#arrowSelectorLeft").trigger("click");
      expect(wrapper.emitted()).toHaveProperty("change");
      expect(wrapper.emitted().change).toEqual([[1]]);
      expect(wrapper.vm.current).toBe(1);
    });

    it("selects prev if enter press left arrow", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          default: 1,
          total: 3
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(1);

      wrapper.find("#arrowSelectorLeft").trigger("keydown", {
        key: "Enter",
        preventDefault
      });
      expect(wrapper.emitted()).toHaveProperty("change");
      expect(wrapper.emitted().change).toEqual([[3]]);
      expect(wrapper.vm.current).toBe(3);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("selects prev if space press left arrow", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          default: 1,
          total: 3
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(1);

      wrapper.find("#arrowSelectorLeft").trigger("keydown", {
        key: "Space",
        preventDefault
      });
      expect(wrapper.emitted()).toHaveProperty("change");
      expect(wrapper.emitted().change).toEqual([[3]]);
      expect(wrapper.vm.current).toBe(3);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("does nothing on invalid keydown on left arrow", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          default: 3,
          total: 3
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(3);

      wrapper.find("#arrowSelectorLeft").trigger("keydown", {
        key: "A",
        preventDefault
      });
      expect(wrapper.vm.current).toBe(3);
      expect(preventDefault).toHaveBeenCalledTimes(0);

      wrapper.find("#arrowSelectorLeft").trigger("keydown");
      expect(wrapper.vm.current).toBe(3);

      wrapper.find("#arrowSelectorLeft").trigger("keydown", {
        key: "Enter",
        shiftKey: true,
        preventDefault
      });
      expect(wrapper.vm.current).toBe(3);
      expect(preventDefault).toHaveBeenCalledTimes(0);

      wrapper.find("#arrowSelectorLeft").trigger("keydown", {
        key: "Enter",
        ctrlKey: true,
        preventDefault
      });
      expect(wrapper.vm.current).toBe(3);
      expect(preventDefault).toHaveBeenCalledTimes(0);

      wrapper.find("#arrowSelectorLeft").trigger("keydown", {
        key: "Enter",
        altKey: true,
        preventDefault
      });
      expect(wrapper.vm.current).toBe(3);
      expect(preventDefault).toHaveBeenCalledTimes(0);

      wrapper.find("#arrowSelectorLeft").trigger("keydown", {
        key: "Enter",
        metaKey: true,
        preventDefault
      });
      expect(wrapper.vm.current).toBe(3);
      expect(preventDefault).toHaveBeenCalledTimes(0);
    });
  });

  describe("prop validation", () => {
    it("throws error if not valid default", () => {
      const validator = ArrowSelector.props.default.validator;
      expect(validator(0)).toBe(false);
      expect(validator(1)).toBe(true);
    });
  });
});
