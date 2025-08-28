import React from "react";

interface ValidationMessageProps {
  message?: string;
}

function ValidationMessage({ message }: ValidationMessageProps) {
  if (!message) return null;
  return <p className="text-sm text-red-600">{message}</p>;
}

export default ValidationMessage;
