import { registerComponent } from "@reactioncommerce/reaction-components";
import React from "react";

/**
 *
 *
 * @export
 * @returns
 */
export default function HydraNotFound() {
  return <h1>404</h1>;
}

registerComponent("HydraNotFoundPage", HydraNotFound);
