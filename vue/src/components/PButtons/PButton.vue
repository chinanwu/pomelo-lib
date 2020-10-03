<template>
  <button
    :id="id"
    class="PButton"
    :ariaLabel="ariaLabel"
    :ariaLabelledby="ariaLabelledBy"
    :role="role"
    :ariaHaspopup="ariaHasPopup"
    :ariaRoledescription="ariaRoledescription"
    :disabled="disabled"
    @click="handleClick"
    @keydown="handleKeyDown"
  >
    <slot name="content"></slot>
  </button>
</template>

<script>
// Basic Pomelo Button Component

export default {
  name: "PButton",
  props: {
    id: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    },
    ariaLabelledBy: {
      type: String,
      default: null
    },
    role: {
      type: String,
      default: null,
      validator: function(value) {
        return ["tab", "link"].indexOf(value) !== -1;
      }
    },
    ariaHasPopup: {
      type: String,
      default: null,
      validator: function(value) {
        // Based on https://labs.levelaccess.com/index.php/ARIA_Haspopup_property
        return (
          ["menu", "listbox", "tree", "grid", "dialog", "true"].indexOf(
            value
          ) !== -1
        );
      }
    },
    ariaRoledescription: {
      type: String,
      default: null,
      validator: function(value) {
        // Based on https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription
        return value.replace(/\s/g, "").length > 0;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return "PButton " + this.cClass;
    }
  },
  emits: ["click", "keydown"],
  methods: {
    handleClick() {
      this.$emit("click");
    },
    handleKeyDown() {
      this.$emit("keydown");
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../stylesheets/shadows.less";

.PButton {
  background-color: inherit;
  border: 1px solid #dedede;
  cursor: pointer;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1rem;
}

.PButton:disabled,
.PButton[disabled] {
  background-color: #e0e0e0;
  box-shadow: none;
  cursor: not-allowed;
  color: #484747;
}

// Cool provided styling
.PButton--solid-box-shadow {
  transition: box-shadow 0.2s, background-color 0.2s;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 0.4rem rgba(0, 0, 0, 0.1);
  }

  &:active {
    background: #f8f8f8;
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.1);
  }
}

.PButton--elevated {
  transition: box-shadow 0.2s;
  box-shadow: @box-shadow-01;

  &:hover,
  &:focus {
    box-shadow: @box-shadow-02;
  }

  &:active {
    box-shadow: @box-shadow-01;
  }
}

.PButton--stealth {
  border: none;
  transition: background-color 0.2s;

  &:hover,
  &:focus {
    background-color: #f2f2f2;
  }

  &:active {
    background-color: #d9d9d9;
  }
}
</style>
