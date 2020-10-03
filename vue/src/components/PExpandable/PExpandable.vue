<template>
  <section>
    <transition name="fade" mode="out-in">
      <div
        v-if="!expanded"
        class="pExpandable pExpandable--minimized"
        :class="closedClass"
      >
        <PButton
          class="pExpandable__icon"
          ariaLabel="Expand content button"
          @click="handleClick"
          @keydown="handleKeyDown"
        >
          <template #content>
            +
          </template>
        </PButton>
        <header>
          <h1>{{ title }}</h1>
        </header>
        <p>
          {{
            description &&
              (description.length > maxLength
                ? description.substring(0, maxLength - 3) + "..."
                : description)
          }}
        </p>
      </div>
      <div v-else class="pExpandable">
        <PButton
          class="pExpandable__icon pExpandable__icon--expanded"
          ariaLabel="Minmize content button"
          @click="handleClick"
          @keydown="handleKeyDown"
        >
          <template #content>
            -
          </template>
        </PButton>
        <slot name="content"></slot>
      </div>
    </transition>
  </section>
</template>

<script>
import PButton from "@/components/PButtons/PButton";

export default {
  name: "PExpandable",
  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    maxLength: {
      type: Number,
      default: 100,
      validator: function(value) {
        return value > 3;
      }
    },
    expand: {
      type: Boolean,
      default: false
    },
    closedClass: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      expanded: this.expand
    };
  },
  emits: ["change"],
  components: {
    PButton
  },
  methods: {
    handleClick() {
      this.expanded = !this.expanded;
      this.$emit("change");
    },
    handleKeyDown(event) {
      if (
        event &&
        event.keyCode &&
        !event.shiftKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey &&
        (event.keyCode === 13 || event.keyCode === 32) // if enter or space is pressed
      ) {
        event.preventDefault();
        this.handleClick();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.pExpandable {
  position: relative;
}

.pExpandable--minimized {
  width: 30%;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem;
  background-color: #f8f8f8;
}

.pExpandable__icon {
  position: absolute;
  border: none;
  background: #3ece53;
  padding: 0;
  top: 1rem;
  right: 1rem;
  width: 2.2rem;
  height: 2.2rem;
  font-size: 1.6rem;
  color: black;
  border-radius: 50%;
  transition: box-shadow 0.2s;

  &:focus,
  &:hover {
    box-shadow: 0 0 0 0.3rem rgba(62, 206, 83, 0.4);
  }

  &:active {
    box-shadow: 0 0 0 0.15rem rgba(62, 206, 83, 0.4);
  }
}

.pExpandable__icon--expanded {
  background: #fcbf49;

  &:focus,
  &:hover {
    box-shadow: 0 0 0 0.3rem rgba(252, 191, 73, 0.4);
  }

  &:active {
    box-shadow: 0 0 0 0.15rem rgba(252, 191, 73, 0.4);
  }
}
</style>
