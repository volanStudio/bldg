# bldg
PostCSS base for building and prototyping quickly. 

Runs entirely with npm modules - there is no need for other build tools. The goal is to make this less fragile over time.

#### To setup and run
```
npm install
npm start
```

#### PostCSS plugins (all npm modules):
- [postcss-import](https://www.npmjs.com/package/postcss-import)
- [postcss-css-variables](https://www.npmjs.com/package/postcss-css-variables)
- [postcss-nested](https://www.npmjs.com/package/postcss-nested)
- [postcss-conditionals](https://www.npmjs.com/package/postcss-conditionals)
- [postcss-custom-media](https://www.npmjs.com/package/postcss-custom-media)

These PostCSS plugins accomplish a lot of what I want in a framework for writing DRY CSS. There are plugins that could better suit keeping sass-y-er, but I chose to only adopt plugins that fit my needs.

---
Much credit to [mrmrs](https://github.com/mrmrs) and [jongold](https://github.com/jongold) for influencing the direction.
