import React from "react";

interface DateFormatProps {
  date: string;
}

export const DateFormat = ({ date }: DateFormatProps) => {
  const dateFormatted = date.split("T");
  return <p>{dateFormatted[0]}</p>;
};
