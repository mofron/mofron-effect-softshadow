# mofron-effect-dev
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

effect module template for developper


# Install
```
npm install mofron mofron-effect-dev
```

# Sample
```html
<setting>
    <tag load="mofron-comp-text">Text</tag>
    <tag load="mofron-effect-textshadow">Txtshadow</tag>
</setting>

<Text effect=Txtshadow>Text Shadow</Text>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | value | string | shadow size (css value) |
| | color | mixed (color) | string: shadow color name, #hex |
| | | | array: [red, green, blue, (alpha)] |

