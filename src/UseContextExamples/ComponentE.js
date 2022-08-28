import React from "react";
import { UserContext, ChannelContext } from "../App";

function ComponentE() {
  return (
    <div>
      <UserContext.Consumer>
        {(userName) => {
          return (
            <ChannelContext.Consumer>
              {(channelName) => {
                return (
                  <h2>
                    Username is {userName} and channel is {channelName}
                  </h2>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentE;
