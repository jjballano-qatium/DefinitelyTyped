import { DatasetCore, Term } from 'rdf-js';
import {
    Clownface,
    ClownfaceInit,
    ClownfaceInitWithTerms,
    ClownfaceInitWithValue,
    ClownfaceInitWithValues,
    AnyContext,
} from '..';

interface ClownfaceImpl<T extends AnyContext = AnyContext, D extends DatasetCore = DatasetCore> extends Clownface<T, D> {}

// tslint:disable-next-line no-unnecessary-class
declare class ClownfaceImpl<T extends AnyContext = AnyContext, D extends DatasetCore = DatasetCore> {
    constructor(options: ClownfaceInit<D> | ClownfaceInitWithTerms<T extends undefined ? Term | Term[] : T, D> | ClownfaceInitWithValue<D> | ClownfaceInitWithValues<D>);
}

export = ClownfaceImpl;
