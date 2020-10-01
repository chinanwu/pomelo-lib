import { mount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("Card.vue", () => {
  it("renders card", () => {
    const wrapper = mount(Card);
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
    const wrapper = mount(Card, {
      props: {
        id: "test"
      }
    });
    expect(wrapper.element).toMatchSnapshot();
    wrapper.find("#test").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });
});
