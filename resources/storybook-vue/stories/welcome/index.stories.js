import { storiesOf } from "@storybook/vue";
import { doc } from "storybook-readme";
import Readme from "../../README.md";

storiesOf("Welcome", module).add("README", doc(Readme));
