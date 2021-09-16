module.exports = {
  presets: [
    ["@babel/env"]
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties"],
    ["@babel/plugin-transform-typescript"]
  ],
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-runtime"]
    }
  }
};