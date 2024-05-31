const theme = {
  // any keys
  colors: {
    primary: "#F00",
  },
  components: {
    // any number of nesting
    button: {
      deepKey: {},
    },
  },
  utils: {
    // you can even use functions here
    hexToRGBA: () => {},
  },
  // or compute your themes with functions and spread operators
  // ...premiumFeatures,
  // ...getMyColors()
};

export default theme;
