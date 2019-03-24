import React from 'react';
import { useObservable } from "rxjs-hooks";
import { interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { tag } from "rxjs-spy/operators/tag";
import { create } from "rxjs-spy";

const spy = create();

const now$ = interval(1000).pipe(
  map(_ => new Date()),
  startWith(new Date()),
  tag("now")
);

const App = () => {
  const now = useObservable<Date>(_ => now$);
  return <div>{now && now.toLocaleString()}</div>;
}

export default App;

spy.log("now");