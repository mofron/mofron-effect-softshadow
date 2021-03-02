# mofron-effect-textshadow
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

text shadow effect modulw for mofron Text component


# Install
```
npm install mofron mofron-effect-textshadow
```

# Sample
```html
<setting>
    <tag load="mofron-comp-text">Text</tag>
    <tag load="mofron-effect-textshadow">TxtShw</tag>
</setting>

<Text effect=TxtShw>Text Shadow</Text>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | value | string | shadow size (css value) |
| ◯  | color | mixed (color) | string: shadow color name, #hex |
| | | | array: [red, green, blue, (alpha)] |

