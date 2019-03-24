import React from 'react';
import { useObservable } from "rxjs-hooks";
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

export const App = () => {
  const now = useObservable<Date>(
    _ => interval(1000).pipe(
      map(_ => new Date())
    ),
      new Date()
  );

  return (
    <div>
      {now.toLocaleString()}
    </div>
  );
}

export default App;
