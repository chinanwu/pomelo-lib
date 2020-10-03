<template>
  <h1>Pomelo Demo!</h1>

  <section id="card">
    <h2>PCard:</h2>

    <PCard class="CustomCard">
      <template v-slot:front>
        <h1>Front!</h1>
      </template>
      <template v-slot:back>
        <h1>Back!</h1>
      </template>
    </PCard>

    <PAccordion class="customAccordion" label="Details">
      <template #content>
        <div class="codeContainer">
          <h3 class="Code__label">Component code:</h3>
          <pre class="Code">
&lt;Card class="CustomCard"&gt;
  &lt;template v-slot:front&gt;
    &lt;h1&gt;Front!&lt;/h1&gt;
  &lt;/template&gt;
  &lt;template v-slot:back&gt;
    &lt;h1&gt;Back!&lt;/h1&gt;
  &lt;/template&gt;
&lt;/Card&gt;
          </pre>

          <h3 class="Code__label">Styling:</h3>
          <pre class="Code">
.CustomCard {
  width: 10rem;
  height: 7rem;
  border: 1px solid black;
}
          </pre>
        </div>
      </template>
    </PAccordion>

    <p>
      The box-shadows are from
      <a
        href="https://boxshadows.com/presets"
        title="Box Shadows site with Materialize presets"
        >Materialize</a
      >
    </p>
  </section>

  <section id="button" aria-labelledby="buttonLabel">
    <h2 id="buttonLabel">PButton</h2>
    <section aria-label="The base PButtons">
      <div class="ButtonShowcase">
        <PButton @click="btnClicks += 1" @keydown="btnKeydowns += 1">
          <template #content>
            I am a button
          </template>
        </PButton>

        <PButton
          :disabled="true"
          @click="btnClicks += 1"
          @keydown="btnKeydowns += 1"
        >
          <template #content>
            Can't click on me!
          </template>
        </PButton>

        <PButton
          class="PButton--elevated"
          @click="btnClicks += 1"
          @keydown="btnKeydowns += 1"
        >
          <template #content>
            I'm an elevated button!
          </template>
        </PButton>

        <PButton
          class="PButton--solid-box-shadow"
          @click="btnClicks += 1"
          @keydown="btnKeydowns += 1"
        >
          <template #content>
            I've got a solid box shadow effect!
          </template>
        </PButton>

        <PButton
          class="PButton--stealth"
          @click="btnClicks += 1"
          @keydown="btnKeydowns += 1"
        >
          <template #content>
            I'm stealthy!
          </template>
        </PButton>
      </div>

      <p>
        {{
          btnClicks === 0
            ? "We haven't been clicked!"
            : "We've been clicked " +
              btnClicks +
              " time" +
              (btnClicks > 1 ? "s" : "")
        }}
        <br />
        {{
          btnKeydowns === 0
            ? "No keys have been downed yet!"
            : btnKeydowns +
              (btnKeydowns > 1 ? " keys" : " key") +
              " has been downed"
        }}
      </p>
    </section>

    <section aria-label="Showcase for different button sizes">
      <p>
        There are also sizes for buttons, they just wrap the base button PButton
        with predefined sizes
      </p>
      <div class="ButtonShowcase">
        <PLButton>
          <template #content>
            Large
          </template>
        </PLButton>
        <PMButton>
          <template #content>
            Medium
          </template>
        </PMButton>
        <PSButton>
          <template #content>
            Small
          </template>
        </PSButton>
      </div>
    </section>

    <section aria-label="Custom (user provided class) button showcase">
      <p>
        Additionally, it is also possible to pass in a class and custom style
        the PButtons
      </p>
      <PButton class="CustomButton">
        <template #content>
          I've got a custom class!
        </template>
      </PButton>
    </section>

    <p class="Note">
      Please note, when key down, the click is also triggered if the key is
      enter or space. This is expected.
    </p>
  </section>

  <section id="expandable">
    <h2>Expandable</h2>

    <Expandable
      p-class="customExpandable"
      title="Name"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />

    <PAccordion
      p-class="customAccordion"
      label="This is the custom styling used:"
    >
      <template #content>
        <pre class="Code">
.customExpandable {
  width: 30%;
  background-color: #3c3c3c;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem;
  color: white;
}
        </pre>
      </template>
    </PAccordion>
  </section>
</template>

<script>
import PAccordion from "@/components/PAccordion/PAccordion";
import PCard from "@/components/PCard/PCard";
import Expandable from "@/components/WIP/Expandable";
import PButton from "@/components/PButtons/PButton";
import PLButton from "@/components/PButtons/PLButton";
import PMButton from "@/components/PButtons/PMButton";
import PSButton from "@/components/PButtons/PSButton";

// import Dynoslot from "@/components/Dynoslot";

export default {
  name: "App",
  components: {
    PAccordion,
    PCard,
    // Dynoslot,
    Expandable,
    PButton,
    PLButton,
    PMButton,
    PSButton
  },
  data() {
    return {
      btnClicks: 0,
      btnKeydowns: 0
    };
  }
};
</script>

<style lang="less" scoped>
* {
  font-family: "Roboto", sans-serif;
}

html,
body {
  min-height: 100%;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.4rem;
  // https://stackoverflow.com/questions/3540194/how-to-make-a-grid-like-graph-paper-grid-with-just-css#32861765
  //background-size: 40px 40px;
  //background-image:
  //    linear-gradient(to right, grey 1px, transparent 1px),
  //    linear-gradient(to bottom, grey 1px, transparent 1px);
}

h1 {
  font-size: 2.4rem;
  margin: 0;
  padding: 1rem;
}

h2 {
  font-size: 2rem;
  margin: 0;
  padding: 1rem;
}

h3 {
  font-size: 1.8rem;
  margin: 0;
  padding: 1rem;
}

h4 {
  font-size: 1.6rem;
  margin: 0;
  padding: 1rem;
}

p {
  padding-left: 1rem;
  padding-right: 1rem;
}

.customAccordion {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.CustomCard {
  width: 10rem;
  height: 7rem;
  border: 1px solid black;
}

.codeContainer {
  width: 80%;
}

.Code__label {
  padding: 0.5rem;
  font-size: 1.4rem;
  text-align: center;
}

.Code {
  font-family: "Roboto Mono", monospace;
  white-space: pre-wrap;
  border-radius: 1rem;
  padding-top: 1rem;
  padding-left: 1rem;
  color: black;
  background-color: #f1f1f1;
  margin-top: 0;
  margin-bottom: 0;
}

.ButtonShowcase {
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  align-items: center;
  justify-items: center;
}

.CustomButton {
  transition: background-color 0.2s;
  background-color: #ffcaca;
  border: #deb0b0;

  &:focus,
  &:hover {
    background-color: #fdd6d6;
  }

  &:active {
    background-color: #eabbbb;
  }
}

.Note {
  // TODO
}

.customExpandable {
  width: 30%;
  background-color: #3c3c3c;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem;
  color: white;
}
</style>

<!--<section>-->
<!--<Dynoslot :num-slots="2">-->
<!--  <template #slot0>-->
<!--    test-->
<!--  </template>-->
<!--</Dynoslot>-->
<!--</section>-->
