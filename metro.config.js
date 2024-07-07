// Learn more https://docs.expo.io/guides/customizing-metro

const { getDefaultConfig } = require('expo/metro-config');
/** @type {import('expo/metro-config').MetroConfig} */

// [Web-only]: Enables CSS support in Metro.

/* eslint-disable */
const config = getDefaultConfig(__dirname, {isCSSEnabled: true,})
/* eslint-enable */

// add nice web support with optimizing compiler + CSS extraction
const { withTamagui } = require('@tamagui/metro-plugin');

module.exports = withTamagui(config, {
	components: ['tamagui'],
	config: './tamagui.config.ts',
	outputCSS: './tamagui-web.css',
});
