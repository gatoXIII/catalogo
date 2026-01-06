import { c as create_ssr_component, a as validate_component } from "./ssr.js";
import { I as Icon } from "./Icon.js";
const Message_circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "message-circle" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Message_circle as M
};
