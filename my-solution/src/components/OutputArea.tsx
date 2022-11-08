import React, { useContext } from "react";
import { Context } from "../context/Context";
import { markdownParser } from '../utils/markDownParser';

export default function OutputArea() {
  const [context] = useContext(Context);

  return (
  <div className="input-area">
			<div
					className="output-container"
					dangerouslySetInnerHTML={{__html: markdownParser(context)}}
			></div>
	</div>
	);
}

