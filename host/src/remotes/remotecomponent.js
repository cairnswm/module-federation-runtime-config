import React, { useState } from "react";
import { loadComponent } from "./loadcomponent";

const remotes = {
  styleguide: process.env.STYLEGUIDE,
  components: "http://localhost:3062/remoteEntry.js",
};

export const useRemotes = () => {
  const [remoteList, setRemoteList] = useState(remotes);

  return { remotes: remoteList };
};

const RemoteComponent = (props) => {
  const { remote, component, scope = "default", fallback = null } = props;
  let remoteconfig = { ...remotes };
  let remoteUrl = remoteconfig[remote];
  if (localStorage.getItem(`devtools`) === "true") {
    if (localStorage.getItem(`mf-${remote}`)) {
      remoteUrl = localStorage.getItem(`mf-${remote}`);
    }
  }
  if (!remoteUrl) return <div>Unable to Fetch: {`${remote}/${component}`}</div>;
  const Component = React.lazy(
    loadComponent(remote, remoteUrl, `./${component}`, scope)
  );
  return (
    <React.Suspense fallback={fallback}>
      <Component {...props} />
    </React.Suspense>
  );
};

export default RemoteComponent;
