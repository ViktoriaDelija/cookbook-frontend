import React from "react";
import { createContext, useState } from "react";

const TokenContext = createContext({
  token: null,
  setToken: (token) => {},
});

export default TokenContext;
