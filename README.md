# generate-fields
Script generates object with fields names by flow-type defenition

Convert 
```javascript
// @flow
import type {TypeA} from './type-a';

export type TypeB = {|
    field1: Array<TypeA>,
    field2: boolean
|};

```
to
```javascript
// @flow
import type {TypeA} from './type-a';

export type TypeB = {|
    field1: Array<TypeA>,
    field2: boolean
|};

export const typeBFields: {[$Keys<TypeB>]: string] = {
    field1: 'field1',
    field2: 'field2'
};

```
