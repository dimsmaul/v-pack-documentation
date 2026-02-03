---
sidebar_position: 1
---

# Introduction

Welcome to **V-Pack** - a beautiful, accessible React Native component library styled with [twrnc](https://github.com/jaredh159/tailwind-react-native-classnames).

## What is V-Pack?

V-Pack is a React Native component library that provides production-ready components with Tailwind CSS styling through twrnc. All components are built with TypeScript, accessibility in mind, and support for dark mode out of the box.

## Features

- **🎨 Tailwind CSS**: Full Tailwind utility classes in React Native via twrnc
- **♿ Accessible**: Built with accessibility best practices
- **🌙 Dark Mode**: Every component supports dark mode automatically
- **📱 Cross Platform**: Works seamlessly on iOS, Android, and Web
- **📦 TypeScript**: Full TypeScript support with type definitions
- **🎯 Customizable**: Easy to customize with props and twrnc classes

## Installation

Install V-Pack and its peer dependency twrnc:

```bash
npm install v-pack twrnc
```
Or with other package managers:
```bash
# Yarn
yarn add v-pack twrnc

# pnpm
pnpm add v-pack twrnc
```

## Quick Start
### 1. Setup twrnc
First, create a tw.js file in your project root:

```js
import { create } from 'twrnc';

const tw = create(require(`./tailwind.config.js`));

export default tw;
```
### 2. Import and Use Components
```tsx
import React from 'react';
import { View } from 'react-native';
import { VButton, VInput, useTheme } from 'v-pack';
import tw from './tw';

export default function App() {
  const { tw } = useTheme()
  return (
    <View style={tw`flex-1 items-center justify-center p-4`}>
      <VInput 
        placeholder="Enter your email"
        style={tw`mb-4`}
      />
      <VButton 
        title="Submit"
        onPress={() => console.log('Pressed!')}
      />
    </View>
  );
}
```
### 3. Configure Tailwind (Optional)
Create tailwind.config.js for custom theming:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#006e79',
        // Add your custom colors
      },
    },
  },
};
```
## Dark Mode Support
All V-Pack components automatically support dark mode using twrnc's dark: prefix:

```tsx
<VButton 
  style={tw`bg-white dark:bg-gray-900`}
  title="Dark Mode Ready"
/>
```
## Customization
Every component accepts a style prop for custom styling:

```tsx
<VButton 
  title="Custom Button"
  style={tw`bg-blue-500 rounded-full px-8`}
  textStyle={tw`text-white font-bold`}
/>
```
## Requirements
- React Native 0.64 or higher

- Expo SDK 43 or higher (if using Expo)

- twrnc 3.0 or higher

- TypeScript
V-Pack is written in TypeScript and includes type definitions. You'll get full IntelliSense support in VS Code and other editors.

```tsx
import type { VButtonProps } from 'v-pack';

const MyButton: React.FC<VButtonProps> = (props) => {
  return <VButton {...props} />;
};
```
<!-- ## Browser Components
Browse all available components in the Components section.

## Example Projects
Check out example implementations: -->

Contributing
Contributions are welcome! Please read our contributing guide to get started.

License
MIT © Venturo

Ready to build? Explore the components!