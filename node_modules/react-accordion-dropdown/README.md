# React Accordion [demo](https://raff-r.github.io/accordion-dropdown/)

[![Build Status](https://travis-ci.org/raff-r/accordion-dropdown.svg?branch=master)](https://travis-ci.org/raff-r/accordion-dropdown)
[![Coverage Status](https://coveralls.io/accordion-dropdowns/github/raff-r/accordion-dropdown/badge.svg?branch=master)](https://coveralls.io/github/raff-r/accordion-dropdown?branch=master)

## Implementation Guide

##### 1. Installation

`npm install --save react-accordion`

##### 2. Import `Accordion` and `AccordionPanel` and styles to your component.

```
import {Accordion, AccordionPanel, styles} from 'react-accordion';
```


##### 3. Add the `Accordion` and `AccordionPanel` component to your component (see available props below).

```
<Accordion accordionId="demo1" arrow="left">
    <AccordionPanel header={Header} content={Content}/>
    <AccordionPanel header={Header} content={Content}/>
</Accordion>
```


## Props 

### Accordion

Property            | Description                                   | Default | Type                                |
------------------- | --------------------------------------------- | ------- |------------------------------------ |
accordionId         | Unique identifier for the accordion (required)|  -      | String                              |
arrow               | Hide close button or not                      | left    | String oneOf('left',right','none')  |

### AccordionPanel

Property            | Description                                   | Default | Type                                |
------------------- | --------------------------------------------- | ------- |------------------------------------ |
header              | Component or HTML for the accordion trigger   |  -      | React Element or String             |
content             | Component or HTML for the accordion content   |  -      | React Element or String             |
