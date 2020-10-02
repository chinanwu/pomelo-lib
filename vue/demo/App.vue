<template>
  <h1>Pomelo Demo!</h1>

  <section>
    <h2>Card:</h2>
    <p>* With custom styling</p>

    <Card c-class="CustomCard">
      <template v-slot:front>
        <h1>Front!</h1>
      </template>
      <template v-slot:back>
        <h1>Back!</h1>
      </template>
    </Card>

    <p>This is the custom styling used:</p>
    <pre class="Code">
.CustomCard {
  width: 10rem;
  height: 7rem;
  border: 1px solid black;
  &:focus {
    box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12),
      0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12),
      0 8px 10px -7px rgba(0, 0, 0, 0.2);
  }
}
    </pre>
    <p>
      The box-shadows are from
      <a
        href="https://boxshadows.com/presets"
        title="Box Shadows site with Materialize presets"
        >Materialize</a
      >
    </p>
  </section>

  <section>
    <h2>Button</h2>
    <p>* With custom styling</p>
    <Button
      c-class="CustomButton"
      label="I am a button"
      @click="btnClicks += 1"
      @keydown="btnKeydowns += 1"
    />
    <p>
      {{
        btnClicks === 0
          ? "I haven't been clicked!"
          : "I've been clicked " +
            btnClicks +
            " time" +
            (btnClicks > 1 ? "s" : "")
      }}
    </p>
    <p>
      {{
        btnKeydowns === 0
          ? "No keys have been downed yet!"
          : btnKeydowns +
            (btnKeydowns > 1 ? " keys" : " key") +
            " has been downed"
      }}
    </p>

    <p class="Note">
      Please note, when key down, the click is also triggered if the key is
      enter or space. This is expected.
    </p>

    <p>This is the custom styling used:</p>
    <pre class="Code">
.CustomButton {
  font-size: 1.6rem;
  border: 1px solid #dedede;
  border-radius: 1rem;
  padding: 1rem;
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
    </pre>
  </section>
</template>

<script>
import Button from "@/components/Button";
import Card from "@/components/Card";

export default {
  name: "App",
  components: {
    Button,
    Card
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

.CustomCard {
  width: 10rem;
  height: 7rem;
  border: 1px solid black;
  &:focus {
    box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);
  }
}

.Code {
  font-family: "Roboto Mono", monospace;
  width: 80%;
  white-space: pre-wrap;
  background: #dadada;
  border-radius: 1rem;
  padding-top: 1rem;
  padding-left: 1rem;
  color: black;
}

.CustomButton {
  font-size: 1.6rem;
  border: 1px solid #dedede;
  border-radius: 1rem;
  padding: 1rem;
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

.Note {
  // TODO
}
</style>
