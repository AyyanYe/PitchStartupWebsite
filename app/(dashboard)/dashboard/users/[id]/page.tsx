"use client";

import { useParams } from "next/navigation";
import React from "react";

function User() {
  const { id } = useParams();

  return <h1 className="text-3xl">User Profile: {id}</h1>;
}

export default User;
