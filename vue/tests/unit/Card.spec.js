import { mount, shallowMount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("Card.vue", () => {
  it("renders card", () => {
    const wrapper = shallowMount(Card);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders flipped card", () => {
    const wrapper = shallowMount(Card, {
      props: {
        flipped: true
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders card with front and back slots", () => {
    const wrapper = mount(Card, {
      slots: {
        front: "<div class='test'>front</div>",
        back: "<div class='test'>front</div>"
      }
    });
    expect(wrapper.findAll(".test").length).toBe(2);
  });

  it("flips when clicked", () => {
    const wrapper = shallowMount(Card, {
      props: {
        id: "test"
      }
    });
    expect(wrapper.element).toMatchSnapshot();
    wrapper.find("#test").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });

  it("flips when the enter or space button is pressed", () => {
    const wrapper = shallowMount(Card, {
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
