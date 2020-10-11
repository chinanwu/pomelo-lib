import { shallowMount } from "@vue/test-utils";

import ArrowNavMenu from "@/components/ArrowNavMenu";

describe("ArrowNavMenu", () => {
  describe("rendering", () => {
    it("renders ArrowNavMenu", () => {
      const wrapper = shallowMount(ArrowNavMenu, {
        props: {
          items: ["One", "Two"]
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-One");
    });

    it("renders ArrowNavMenu with non default active", () => {
      const wrapper = shallowMount(ArrowNavMenu, {
        props: {
          items: ["One", "Two"],
          active: "Two"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  describe("behaviour", () => {
    it("sets selected on click", () => {
      const wrapper = shallowMount(ArrowNavMenu, {
        props: {
          items: ["One", "Two"],
          active: "Two"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      wrapper.find("#aNM-btn-0").trigger("click");
      expect(wrapper.emitted()).toHaveProperty("selected");
      expect(wrapper.emitted().selected).toEqual([["One"]]);
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-One");
    });

    it("selects next item with arrow down", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowNavMenu, {
        props: {
          items: ["One", "Two"]
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-One");

      wrapper.find("#aNM-btn-0").trigger("keydown", {
        key: "ArrowDown",
        preventDefault
      });
      expect(wrapper.emitted()).toHaveProperty("selected");
      expect(wrapper.emitted().selected).toEqual([["Two"]]);
      expect(wrapper.vm.selected).toBe(1);
      expect(wrapper.vm.activeDescendant).toBe("aNM-1-Two");
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("selects next item with arrow right", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowNavMenu, {
        props: {
          items: ["One", "Two"],
          active: "Two"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.selected).toBe(1);
      expect(wrapper.vm.activeDescendant).toBe("aNM-1-Two");

      wrapper.find("#aNM-btn-1").trigger("keydown", {
        key: "ArrowRight",
        preventDefault
      });
      expect(wrapper.emitted()).toHaveProperty("selected");
      expect(wrapper.emitted().selected).toEqual([["One"]]);
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-One");
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("selects previous item with arrow up", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowNavMenu, {
        props: {
          items: ["One", "Two"],
          active: "Two"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.selected).toBe(1);
      expect(wrapper.vm.activeDescendant).toBe("aNM-1-Two");

      wrapper.find("#aNM-btn-1").trigger("keydown", {
        key: "ArrowUp",
        preventDefault
      });
      expect(wrapper.emitted()).toHaveProperty("selected");
      expect(wrapper.emitted().selected).toEqual([["One"]]);
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-One");
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("selects previous item with arrow left", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowNavMenu, {
        props: {
          items: ["One", "Two"]
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-One");

      wrapper.find("#aNM-btn-0").trigger("keydown", {
        key: "ArrowLeft",
        preventDefault
      });
      expect(wrapper.emitted()).toHaveProperty("selected");
      expect(wrapper.emitted().selected).toEqual([["Two"]]);
      expect(wrapper.vm.selected).toBe(1);
      expect(wrapper.vm.activeDescendant).toBe("aNM-1-Two");
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("selects first item in items with home", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowNavMenu, {
        props: {
          items: ["One", "Two"],
          active: "Two"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.selected).toBe(1);
      expect(wrapper.vm.activeDescendant).toBe("aNM-1-Two");

      wrapper.find("#aNM-btn-1").trigger("keydown", {
        key: "Home",
        preventDefault
      });
      expect(wrapper.emitted()).toHaveProperty("selected");
      expect(wrapper.emitted().selected).toEqual([["One"]]);
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-One");
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("selects last item in items with end", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowNavMenu, {
        props: {
          items: ["One", "Two"]
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-One");

      wrapper.find("#aNM-btn-0").trigger("keydown", {
        key: "End",
        preventDefault
      });
      expect(wrapper.emitted()).toHaveProperty("selected");
      expect(wrapper.emitted().selected).toEqual([["Two"]]);
      expect(wrapper.vm.selected).toBe(1);
      expect(wrapper.vm.activeDescendant).toBe("aNM-1-Two");
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("selects next item with letter starting with key pressed", () => {
      const wrapper = shallowMount(ArrowNavMenu, {
        props: {
          items: ["this", "That", "There"]
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-this");

      wrapper.find("#aNM-btn-0").trigger("keydown", {
        key: "t"
      });
      expect(wrapper.emitted()).toHaveProperty("selected");
      expect(wrapper.emitted().selected).toEqual([["That"]]);
      expect(wrapper.vm.selected).toBe(1);
      expect(wrapper.vm.activeDescendant).toBe("aNM-1-That");
    });

    it("selects next item with letter starting with key pressed circular", () => {
      const wrapper = shallowMount(ArrowNavMenu, {
        props: {
          items: ["this", "That", "There"],
          active: "There"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.selected).toBe(2);
      expect(wrapper.vm.activeDescendant).toBe("aNM-2-There");

      wrapper.find("#aNM-btn-2").trigger("keydown", {
        key: "T"
      });
      expect(wrapper.emitted()).toHaveProperty("selected");
      expect(wrapper.emitted().selected).toEqual([["this"]]);
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-this");
    });

    it("does nothing if extra keys are pressed", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowNavMenu, {
        props: {
          items: ["One", "Two"]
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-One");

      wrapper.find("#aNM-btn-0").trigger("keydown", {
        key: "ArrowLeft",
        shiftKey: true,
        preventDefault
      });
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-One");
      expect(preventDefault).not.toHaveBeenCalled();

      wrapper.find("#aNM-btn-0").trigger("keydown", {
        key: "ArrowLeft",
        ctrlKey: true,
        preventDefault
      });
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-One");
      expect(preventDefault).not.toHaveBeenCalled();

      wrapper.find("#aNM-btn-0").trigger("keydown", {
        key: "ArrowLeft",
        altKey: true,
        preventDefault
      });
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-One");
      expect(preventDefault).not.toHaveBeenCalled();

      wrapper.find("#aNM-btn-0").trigger("keydown", {
        key: "ArrowLeft",
        metaKey: true,
        preventDefault
      });
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-One");
      expect(preventDefault).not.toHaveBeenCalled();
    });

    it("does nothing if invalid event", () => {
      const wrapper = shallowMount(ArrowNavMenu, {
        props: {
          items: ["One", "Two"]
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-One");

      wrapper.find("#aNM-btn-0").trigger("keydown");
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-One");

      wrapper.find("#aNM-btn-0").trigger("keydown", {});
      expect(wrapper.vm.selected).toBe(0);
      expect(wrapper.vm.activeDescendant).toBe("aNM-0-One");
    });
  });

  describe("prop validation", () => {
    it("throws error if not valid items array", () => {
      const valid = ["test", "here", "loooong"];
      const invalid = [0];
      const validator = ArrowNavMenu.props.items.validator;
      expect(validator(valid)).toBe(true);
      expect(validator(invalid)).toBe(false);
    });
  });
});
