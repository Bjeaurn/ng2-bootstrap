// #docregion
module.exports = function(config) {
  config.set({

    baseUrl: "/base",
    frameworks: ["jasmine", "karma-typescript"],

    files: [
        { pattern: "node_modules/reflect-metadata/Reflect.js" },
        { pattern: "node_modules/zone.js/dist/zone.js" },
        { pattern: "node_modules/zone.js/dist/long-stack-trace-zone.js" },
        { pattern: "node_modules/zone.js/dist/proxy.js" },
        { pattern: "node_modules/zone.js/dist/sync-test.js" },
        { pattern: "node_modules/zone.js/dist/jasmine-patch.js" },
        { pattern: "node_modules/zone.js/dist/async-test.js" },
        { pattern: "node_modules/zone.js/dist/fake-async-test.js" },

        { pattern: "app/**/*.ts" },
    ],

    preprocessors: {
        "app/**/*.ts": ["karma-typescript"]
    },

    reporters: ["progress", "karma-typescript"],

    browsers: ["Chrome"]
  })
}