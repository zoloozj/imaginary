import React, { FunctionComponent } from "react";

interface Props {
  params: { id: string };
}

const TransformationsPage: FunctionComponent<Props> = ({ params: { id } }) => {
  return <div>TransformationsPage</div>;
};

export default TransformationsPage;
