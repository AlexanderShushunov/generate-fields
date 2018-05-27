// @flow
import type {TypeA} from './type-a';

export type TypeB = {|
  field1: Array<TypeA>,
  field2: boolean
|};
