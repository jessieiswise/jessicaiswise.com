import { SimplrRouter } from "@simplr-wc/router";

const routes = [
    { path: "", component: "app" },
    { path: "example", component: "example-view" },
    { path: "dynamic/:id", component: "dynamic-view" },
];

new SimplrRouter({ routes }).init();
