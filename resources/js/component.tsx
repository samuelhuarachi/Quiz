import React from "react";
import ReactDOM from "react-dom/client";
import Comp1 from "./components/Comp1";

const comp1 = document.getElementById("comp1")!;

const root = ReactDOM.createRoot(comp1);

setTimeout(() => {
    root.render(<Comp1 />);
}, 2333);
