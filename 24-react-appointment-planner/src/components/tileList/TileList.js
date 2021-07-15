import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      {props.object.map((contact, index) => {
        return (
          <Tile value={contact} key={index} />
        )
      })}
    </div>
  );
};
