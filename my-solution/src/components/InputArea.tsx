import React, { useContext } from "react";
import { Context } from "../context/Context";

export default function InputArea() {
  const [context, setContext] = useContext(Context);

  return (
    <div className="input-area">
			<textarea
				className="textarea"
				value={context}
				onChange={(e) => {
					setContext(e.target.value);
				}}
				>
			</textarea>
    </div>
  );
}