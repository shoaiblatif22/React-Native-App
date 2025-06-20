const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Safely extend assetExts and sourceExts
defaultConfig.resolver.assetExts = [
  ...defaultConfig.resolver.assetExts,
  'png', 'jpg', 'jpeg', 'gif', 'bmp', 'svg'
];

defaultConfig.resolver.sourceExts = [
  ...defaultConfig.resolver.sourceExts,
  'js', 'jsx', 'ts', 'tsx', 'cjs'
];

defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});

module.exports = defaultConfig;
