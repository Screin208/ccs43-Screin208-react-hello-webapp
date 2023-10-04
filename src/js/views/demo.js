import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { PeopleDetails } from "../component/peopleDetails.jsx";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return <PeopleDetails />;
};
