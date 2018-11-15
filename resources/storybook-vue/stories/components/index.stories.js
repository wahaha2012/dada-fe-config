import { storiesOf } from "@storybook/vue";
// import { action } from "@storybook/addon-actions";

// import "normalize.css/normalize.css"; // A modern alternative to CSS reset
import "@/styles/index.scss";
import "@/icons";
import "@/plugins";

// import CustomForm from "@/components/custom-form";
// import store from "../store";
import Icons from "./examples/icons";

// storiesOf("Components|UI", module).add("CustomForm", () => ({
//   components: { CustomForm },
//   store,
//   template: '<custom-form @submit="showFormData" />',
//   methods: {
//     showFormData: action("CustomForm")
//   }
// }));

storiesOf("Components|UI", module).add("Icons", () => ({
  render: h => h(Icons)
}));
