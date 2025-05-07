import { Component1 } from "./component/component1";

export default function Home() {
  const data = "100 component";

  return (
    <div>
      <Component1 props={data} />
    </div>
  );
}
