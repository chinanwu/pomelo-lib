import Vue from "vue";
import Brackets from "@/components/Brackets";

const Components = {
  Brackets
};

Object.keys(Components).forEach(name => {
  Vue.components(name, Components[name]);
});

export default Components;
