
const presets = [
  [
    '@babel/env',
    {
      targets: 'last 2 years, >1%'
      // useBuiltIns: "usage"
    }
  ]
];

module.exports = {
  presets
  // forceAllTransforms: true
  // useBuiltIns: "entry"
};
