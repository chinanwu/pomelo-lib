<template>
  <header class="AppHeader">
    <img
      class="AppLogo"
      :src="require('./assets/pomelo_logo.png')"
      alt="Pomelo Lib Icon, which is just a slightly tilted Pomelo with a black outline"
    />
    <h1>Pomelo Vue Component Lib</h1>

    <a
      class="AppLogo__link"
      href="https://github.com/chinanwu/pomelo-lib"
      title="Pomelo's Github Repository"
    >
      <img
        class="AppLogo"
        :src="require('./assets/github.png')"
        alt="Github Icon"
      />
    </a>
  </header>

  <div class="AppContent">
    <div class="Sidebar">
      <ul class="Sidebar__list">
        <li
          class="Sidebar__listItem"
          v-for="(component, index) in availableComponents"
          :key="'availableComponents-' + index"
        >
          <a
            class="Sidebar__listItemLink"
            :href="'#' + component.toLowerCase()"
            tabindex="0"
            >{{ component }}</a
          >
        </li>
      </ul>
    </div>

    <div class="Components">
      <section id="paccordion">
        <h2 class="Showcase__label">
          <a class="Showcase__labelLink" href="#paccordion" tabindex="0"
            >PAccordion</a
          >
        </h2>

        <PAccordion label="Lorem Ipsum">
          <template #content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </template>
        </PAccordion>

        <h3>Component Code:</h3>
        <PAccordion label="Show">
          <template #content>
            <pre class="Showcase__code">
// Takes in one slot named "content"

&lt;PAccordion label="Accordion Label"&gt;
  &lt;template #content&gt;
    Some content
  &lt;/template&gt;
&lt;/PAccordion&gt;
              </pre
            >
          </template>
        </PAccordion>

        <h3>Props:</h3>
        <PAccordion label="Show">
          <template #content>
            <PTable
              :headers="[
                'prop',
                'type',
                'default',
                'description',
                'validation'
              ]"
              :data="[
                {
                  prop: 'label',
                  type: 'String',
                  default: 'null',
                  description:
                    'The string that will be displayed on the Accordion header',
                  validation: 'None'
                },
                {
                  prop: 'pClass',
                  type: 'String',
                  default: 'null',
                  description: 'Adds an additional class onto the accordion',
                  validation: 'None'
                },
                {
                  prop: 'expand',
                  type: 'String',
                  default: 'null',
                  description: 'Sets if the accordion is opened by default',
                  validation: 'None'
                }
              ]"
            />
          </template>
        </PAccordion>
      </section>
      <div class="Components--middle">
        <PSeparator class="CustomPSeparator" />
      </div>
      <section id="pbutton">
        <h2 class="Showcase__label">
          <a class="Showcase__labelLink" href="#pbutton" tabindex="0"
            >PButton</a
          >
        </h2>

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
        <div class="ButtonShowcase__emitContainer">
          <p class="ButtonShowcase__emit">
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
        </div>

        <h3>Sizes</h3>
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

        <h3>Available Classes</h3>
        <p class="--no-margin">
          Simply just add one of these to the class passed in to PButton and the
          pre-created style will be applied. See above for examples.
        </p>
        <ul class="ButtonShowcase__styleList">
          <li
            v-for="(style, index) in pButtonStyles"
            :key="'buttonStyles-' + index"
          >
            PButton--{{ style }}
          </li>
        </ul>

        <h3>Component Code:</h3>
        <PAccordion label="Show">
          <template #content>
            <pre class="Showcase__code">
// Takes in one slot named "content"

// Regular
&lt;PButton @click="someClickFn" @keydown="someKeydownFn"&gt;
  &lt;template #content&gt;
    Button Content
  &lt;/template&gt;
&lt;/PButton&gt;

// Large
&lt;PLButton @click="someClickFn" @keydown="someKeydownFn"&gt;
  &lt;template #content&gt;
    Large Button Content
  &lt;/template&gt;
&lt;/PLButton&gt;

// Medium
&lt;PMButton @click="someClickFn" @keydown="someKeydownFn"&gt;
  &lt;template #content&gt;
    Medium Button Content
  &lt;/template&gt;
&lt;/PMButton&gt;

// Small
&lt;PSButton @click="someClickFn" @keydown="someKeydownFn"&gt;
  &lt;template #content&gt;
    Small Button Content
  &lt;/template&gt;
&lt;/PSButton&gt;
            </pre>
          </template>
        </PAccordion>

        <h3>Props:</h3>
        <PAccordion label="Show">
          <template #content>
            <PTable
              :headers="[
                'prop',
                'type',
                'default',
                'description',
                'validation'
              ]"
              :data="[
                {
                  prop: 'id',
                  type: 'String',
                  default: 'null',
                  description: 'Sets the inner &lt;button&gt;\'s id.',
                  validation: 'None'
                },
                {
                  prop: 'ariaLabel',
                  type: 'String',
                  default: 'null',
                  description: 'Sets the aria-label on the button',
                  validation: 'None'
                },
                {
                  prop: 'ariaLabelledBy',
                  type: 'String',
                  default: 'null',
                  description: 'Sets the aria-labelledby on the button',
                  validation: 'None'
                },
                {
                  prop: 'role',
                  type: 'String',
                  default: 'null',
                  description: 'Sets the role on the button',
                  validation: 'Must be one of \'tab\' or \'link\''
                },
                {
                  prop: 'ariaHasPopup',
                  type: 'String',
                  default: 'null',
                  description: 'Sets the aria-haspopup on the button',
                  validation:
                    'Must be one of \'menu\', \'listbox\', \'tree\', \'grid\', \'dialog\', or \'true\''
                },
                {
                  prop: 'ariaRoledescription',
                  type: 'String',
                  default: 'null',
                  description: 'Sets the aria-description on the button',
                  validation: 'Cannot contain only whitespace characters'
                },
                {
                  prop: 'disabled',
                  type: 'Boolean',
                  default: 'false',
                  description: 'Sets the button as disabled or not',
                  validation: 'None'
                }
              ]"
            />
          </template>
        </PAccordion>
      </section>
      <div class="Components--middle">
        <PSeparator class="CustomPSeparator" />
      </div>
      <section id="pcard">
        <h2 class="Showcase__label">
          <a class="Showcase__labelLink" href="#pcard" tabindex="0">PCard</a>
        </h2>

        <PCard
          class="CustomCard"
          front-class="CustomCard__side"
          back-class="CustomCard__side"
        >
          <template #front>
            Front
          </template>
          <template #back>
            Back
          </template>
        </PCard>

        <h3>Component Code:</h3>
        <PAccordion label="Show">
          <template #content>
            <pre class="Showcase__code">
// Takes in one slot named "front", and one slot named "back".

&lt;PCard&gt;
  &lt;template #front&gt;
    Front content
  &lt;/template&gt;
  &lt;template #back&gt;
    Back content
  &lt;/template&gt;
&lt;/PCard&gt;
            </pre>
          </template>
        </PAccordion>

        <h3>Props:</h3>
        <PAccordion label="Show">
          <template #content>
            <PTable
              :headers="[
                'prop',
                'type',
                'default',
                'description',
                'validation'
              ]"
              :data="[
                {
                  prop: 'id',
                  type: 'String',
                  default: 'null',
                  description: 'Sets the id of the card container div',
                  validation: 'None'
                },
                {
                  prop: 'flipped',
                  type: 'Boolean',
                  default: 'false',
                  description: 'Sets the default flipped state of the card',
                  validation: 'None'
                },
                {
                  prop: 'frontClass',
                  type: 'String',
                  default: 'null',
                  description: 'Adds a custom class to front of card',
                  validation: 'None'
                },
                {
                  prop: 'backClass',
                  type: 'String',
                  default: 'null',
                  description: 'Adds a custom class to back of card',
                  validation: 'None'
                }
              ]"
            />
          </template>
        </PAccordion>
      </section>
      <div class="Components--middle">
        <PSeparator class="CustomPSeparator" />
      </div>
      <section id="pexpandable">
        <h2 class="Showcase__label">
          <a class="Showcase__labelLink" href="#pexpandable" tabindex="0">
            PExpandable
          </a>
        </h2>

        <PExpandable
          title="Lorem"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        >
          <template #content>
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </template>
        </PExpandable>

        <h3>Component Code:</h3>
        <PAccordion label="Show">
          <template #content>
            <pre class="Showcase__code">
// Takes in one slot named "content"

&lt;PExpandable
    title="Lorem"
    description="Lorem ..."
&gt;
  &lt;template #content&gt;
    &lt;h3&gt;Lorem Ipsum&lt;/h3&gt;
    &lt;p&gt;
      Lorem ...
    &lt;/p&gt;
  &lt;/template&gt;
&lt;/PExpandable&gt;
            </pre>
          </template>
        </PAccordion>

        <h3>Props:</h3>
        <PAccordion label="Show">
          <template #content>
            <PTable
              :headers="[
                'prop',
                'type',
                'default',
                'description',
                'validation'
              ]"
              :data="[
                {
                  prop: 'title',
                  type: 'String',
                  default: 'null',
                  description: 'The label when minimized',
                  validation: 'None'
                },
                {
                  prop: 'description',
                  type: 'String',
                  default: 'null',
                  description: 'The blurb that is presented when minimized',
                  validation: 'None'
                },
                {
                  prop: 'maxLength',
                  type: 'Number',
                  default: '100',
                  description: 'Maximum length of blurb allowed',
                  validation: 'Must be greater than 3'
                },
                {
                  prop: 'expand',
                  type: 'Boolean',
                  default: 'false',
                  description: 'Default expanded state of component',
                  validation: 'None'
                },
                {
                  prop: 'closedClass',
                  type: 'String',
                  default: 'null',
                  description:
                    'Allows for inner styling of minimized component',
                  validation: 'None'
                }
              ]"
            />
          </template>
        </PAccordion>
      </section>
    </div>
  </div>
</template>

<script>
import PAccordion from "@/components/PAccordion/PAccordion";
import PButton from "@/components/PButtons/PButton";
import PLButton from "@/components/PButtons/PLButton";
import PMButton from "@/components/PButtons/PMButton";
import PSButton from "@/components/PButtons/PSButton";
import PCard from "@/components/PCard/PCard";
import PExpandable from "@/components/PExpandable/PExpandable";
import PSeparator from "@/components/PSeparator/PSeparator";
import PTable from "@/components/PTable/PTable";

export default {
  name: "App",
  components: {
    PAccordion,
    PButton,
    PLButton,
    PMButton,
    PSButton,
    PCard,
    PExpandable,
    PSeparator,
    PTable
  },
  data() {
    return {
      dark: false,
      btnClicks: 0,
      btnKeydowns: 0,
      availableComponents: ["PAccordion", "PButton", "PCard", "PExpandable"],
      pButtonStyles: ["elevated", "solid-box-shadow", "stealth"]
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

.--no-margin {
  margin: 0;
}
</style>

<style lang="less" scoped>
@import "../src/stylesheets/shadows.less";
@import "../src/stylesheets/colours.less";

// Official pomelo colours? :o
@green: #d0e398;
@lightgreen: #edf5d7;
@yellow: #fdf2bb;
@olive: #b8af8d;
@lightolive: #e7e1cb;

.AppHeader {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: @lightgreen;
  box-shadow: @box-shadow-01;
}

.AppLogo {
  width: 32px;
}

.AppLogo__link {
  border: none;
  padding: 0;
  position: absolute;
  right: 1rem;
  border-radius: 50%;
  display: flex;
  transition: all 0.2s;

  &:hover,
  &:focus {
    background-color: white;
    box-shadow: 0 0 0 0.4rem rgba(0, 0, 0, 0.1);
  }

  &:active {
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.1);
  }
}

.AppContent {
  display: flex;
}

.Sidebar {
  position: sticky;
  width: 20%;
  margin-right: 2rem;
  border-right: 1px solid @olive;
}

.Sidebar__list {
  list-style: none;
  padding: 0;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.8rem;
}

.Sidebar__listItem {
  position: relative;
  margin-bottom: 1rem;
  display: flex;
}

.Sidebar__listItemLink {
  color: black;
  text-decoration: none;
}

// https://stackoverflow.com/questions/40242378/underline-from-left-to-right-on-hover-in-and-out
.Sidebar__listItemLink {
  position: relative;
  text-decoration: none;
  display: inline-block;

  &::after {
    display: block;
    content: "";
    border-bottom: solid 3px @green;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 100% 50%;
  }

  &:active::after,
  &:focus::after,
  &:hover::after {
    transform: scaleX(1);
    transform-origin: 0 50%;
  }
}

.Components {
  width: 75%;
  margin-top: 1.8rem;
}

.Components--middle {
  display: flex;
  justify-content: center;
}

.Showcase__label {
  margin-bottom: 1rem;
  padding-left: 0;
}

.Showcase__labelLink {
  text-decoration: none;
  color: black;
  padding: 1rem;

  box-shadow: rgba(208, 227, 152, 0.3) 0px -0.5rem 0px inset;
  transition: box-shadow 0.2s;

  &:focus,
  &:hover {
    box-shadow: @yellow 0px -4.5rem 0px inset;

    &::before {
      content: "# ";
    }
  }

  &:active {
    box-shadow: rgb(253, 228, 131) 0px -4.5rem 0px inset,
      0 0 0 0.4rem rgba(245, 230, 149, 0.4);
  }
}

.Showcase__code {
  margin-top: 1rem;
  font-family: "Roboto Mono", monospace;
  white-space: pre-wrap;
  border-radius: 1rem;
  padding-top: 1rem;
  padding-left: 1rem;
  color: black;
  background-color: @grey-06;
  margin-bottom: 0;
}

.CustomPSeparator {
  border-bottom: 1px solid @lightolive;
}

.ButtonShowcase > button {
  margin-right: 1rem;
  margin-top: 1rem;
}

.ButtonShowcase__emitContainer {
  display: flex;
  justify-content: center;
}

.ButtonShowcase__emit {
  border: 1px solid @grey-06;
  border-radius: 1rem;
  padding: 1rem;
  line-height: 2rem;
  font-size: 1.6rem;
}

.ButtonShowcase__styleList {
  font-size: 1.6rem;
  line-height: 2rem;
}

.CustomCard {
  border: 1px solid @grey-06;
}

::v-deep .CustomCard__side {
  display: flex;
  justify-content: center;
}
</style>
