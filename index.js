const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addVariant, e }) => {
    addVariant('expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
            const selector = e(`expanded${separator}${className}`);

            return `.${selector}:target, .${selector}[aria-expanded="true"]`;
        });
    });
});
