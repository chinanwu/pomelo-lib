<template>
  <h1>Pomelo Demo!</h1>

  <section id="card">
    <h2>PCard</h2>

    <PCard class="CustomCard">
      <template v-slot:front>
        <h1>Front!</h1>
      </template>
      <template v-slot:back>
        <h1>Back!</h1>
      </template>
    </PCard>

    <PAccordion class="CustomAccordion" label="Details">
      <template #content>
        <div class="CodeContainer">
          <h3 class="Code__label">Component example code:</h3>
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

          <h3 class="Code__label">Styling applied to Demo above:</h3>
          <pre class="Code">
.CustomCard {
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
            PButton
          </template>
        </PButton>

        <PButton
          :disabled="true"
          @click="btnClicks += 1"
          @keydown="btnKeydowns += 1"
        >
          <template #content>
            Disabled PButton
          </template>
        </PButton>

        <PButton
          class="PButton--elevated"
          @click="btnClicks += 1"
          @keydown="btnKeydowns += 1"
        >
          <template #content>
            PButton--elevated
          </template>
        </PButton>

        <PButton
          class="PButton--solid-box-shadow"
          @click="btnClicks += 1"
          @keydown="btnKeydowns += 1"
        >
          <template #content>
            PButton--solid-box-shadow
          </template>
        </PButton>

        <PButton
          class="PButton--stealth"
          @click="btnClicks += 1"
          @keydown="btnKeydowns += 1"
        >
          <template #content>
            PButton--stealth
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

    <PAccordion class="CustomAccordion" label="Details">
      <template #content>
        <div class="CodeContainer">
          <h3 class="Code__label">Component example code:</h3>
          <pre class="Code">
&lt;PButton @click="btnClicks += 1" @keydown="btnKeydowns += 1"&gt;
  &lt;template #content&gt;
    I am a button
  &lt;/template&gt;
&lt;/PButton&gt;
          </pre>
        </div>
      </template>
    </PAccordion>

    <p class="Note">
      Please note, when key down, the click is also triggered if the key is
      enter or space. This is expected.
    </p>
  </section>

  <section id="expandable">
    <h2>Expandable</h2>

    <PExpandable
      closedClass="CustomExpandable"
      title="Name"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    >
      <template #content>
        <h3>Name</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </template>
    </PExpandable>

    <PAccordion class="CustomAccordion" label="Details">
      <template #content>
        <div class="CodeContainer">
          <h3 class="Code__label">Component example code:</h3>
          <pre class="Code">
&lt;PExpandable
    closedClass="CustomExpandable"
    title="Name"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
&gt;
  &lt;template #content&gt;
    &lt;h3>Name&lt;/h3&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    &lt;/p&gt;
  &lt;/template&gt;
&lt;/PExpandable&gt;
          </pre>

          <h3 class="Code__label">Styling applied to Demo above:</h3>
          <pre class="Code">
::v-deep .CustomExpandable {
  background-color: #3c3c3c;
  color: white;
}
          </pre>

          <p class="Note">
            Note: The use of the deep selector for the closedClass
          </p>
        </div>
      </template>
    </PAccordion>
  </section>
</template>

<script>
import PAccordion from "@/components/PAccordion/PAccordion";
import PCard from "@/components/PCard/PCard";
import PExpandable from "@/components/PExpandable/PExpandable";
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
    PExpandable,
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

<style lang="less">
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
</style>

<style lang="less" scoped>
.CustomAccordion {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.CustomCard {
  border: 1px solid black;
}

.CodeContainer {
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
  //display: grid;
  //grid-gap: 0.5rem;
  //grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  //align-items: center;
  //justify-items: center;
  display: flex;
}

.ButtonShowcase > button {
  margin: 1rem;
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

::v-deep .CustomExpandable {
  //background-color: #3c3c3c;
  //color: white;
}
</style>

<!--<section>-->
<!--<Dynoslot :num-slots="2">-->
<!--  <template #slot0>-->
<!--    test-->
<!--  </template>-->
<!--</Dynoslot>-->
<!--</section>-->
