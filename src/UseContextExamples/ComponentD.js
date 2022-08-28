import React, { useContext } from "react";
import ComponentE from "./ComponentE";
import { UserContext, ChannelContext } from "../App";
function ComponentD() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <h2>
        From ComponentD using useContextHook {user} {channel}
      </h2>
      <ComponentE />
    </div>
  );
}

export default ComponentD;
