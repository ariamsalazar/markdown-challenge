import React, { useState } from "react";
import Header from './components/Header';
import InputArea from './components/InputArea';
import OutputArea from './components/OutputArea';
import { Context } from "./context/Context";
import '../src/assets/styles.css';

export default function App() {
  const [context, setContext] = useState("");
		return (
			<Context.Provider value={[context, setContext]}>
				<Header />
				<div className="input-container">
					<InputArea />
					<OutputArea />
				</div>
			</Context.Provider>
		);
}
