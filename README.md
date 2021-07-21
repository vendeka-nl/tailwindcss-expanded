# Expanded elements for TailwindCSS 

## Installation

Install the plugin from GitHub:

```sh
npm install git+https://github.com/vendeka-nl/tailwindcss-expanded.git
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@vendeka/tailwindcss-expanded'),
    // ...
  ],
}
```

## Usage

Create a link to the target using a good ol' anchor link.

```html
<a href="#navigation" aria-label="Open menu" class="inline-block lg:hidden">
  <span class="sr-only">Open menu</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" class="h-8 w-8 fill-current">
    <path d="M4 10h24a2 2 0 000-4H4a2 2 0 000 4zm24 4H4a2 2 0 000 4h24a2 2 0 000-4zm0 8H4a2 2 0 000 4h24a2 2 0 000-4z" />
  </svg>
</a>
```

Add a target element using the anchor defined before and set `aria-expanded` to `false`.

```html
<nav id="navigation" aria-expanded="false" class="fixed left-0 top-0 min-w-full min-h-screen bg-white bg-opacity-90 shadow-lg transform -translate-y-full transition-transform duration-300 lg:static lg:translate-y-0 lg:bg-transparent lg-min-w-0 lg:min-h-0 lg:px-0 lg:shadow-none z-50">
  <!-- The close button unset the current target -->
  <a href="#" id="navigation-close" aria-label="Close menu" class="absolute top-0 right-0 z-50 p-4 lg:hidden">
      <span class="sr-only">Close menu</span>
      <span aria-hidden="true">&times;</span>
  </a>
  <ul>
    <!-- Actual navigation goes here... -->
  </ul>
</nav>
```

You will find a JavaScript file in the js folder that aids in hiding the anchor from the URL.

## Configuration

This plugin requires no configuration.
