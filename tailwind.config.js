module.exports = {
  prefix: "",
  purge: {
    enabled: true,
    content: [
      "./src/**/**/**/*.{html,ts,scss}",
      "./projects/**/*.{html,ts,scss}",
    ],
    layers: ["components", "utilities", "base"],
  },
};
