import React from "react";

interface Props {
  line: string;
}
export default function Paragraph(props: Props) {
  return (
    <div>
      <p>{props.line}</p>
    </div>
  );
}
