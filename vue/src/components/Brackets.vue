<template>
  <div class="Brackets">
    <div class="Bracket Bracket__upper" role="presentation"></div>
    <slot name="content"></slot>
    <div class="Bracket Bracket__lower" role="presentation"></div>
  </div>
</template>

<script>
export default {
  name: "Brackets"
};
</script>

<style lang="less" scoped>
@import "../styling/colours";
@bracket-width: 5px;

.Brackets {
  display: flex;
  width: 80%;
  justify-content: center;
}

.Bracket {
  width: 3rem;
}

.Bracket__upper {
  box-shadow: 5px 5px 0 0 @grey-06 inset, 0 -5px 0 0 @grey-06 inset;
}

.Bracket__lower {
  box-shadow: 0 5px 0 0 @grey-06 inset, -5px -5px 0 0 @grey-06 inset;
}

@media only screen and (max-width: 625px) {
  .Brackets {
    display: initial;
  }

  .Bracket {
    height: 3rem;
    width: 100%;
  }

  .Bracket__upper {
    box-shadow: 5px 5px 0 0 @grey-06 inset, -5px 0 0 0 @grey-06 inset;
  }

  .Bracket__content {
    font-size: 1.8rem;
    width: 100%;
    text-align: center;
  }

  .Bracket__lower {
    box-shadow: 5px 0 0 0 @grey-06 inset, -5px -5px 0 0 @grey-06 inset;
  }
}
</style>
