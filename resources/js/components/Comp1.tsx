declare const window: any;

import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

export default class MakeX extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            // map: window.map,
            coordsList: "",
            visible: "none",
        };
    }

    render() {
        const { coordsList } = this.state;

        return (
            <React.Fragment>
                <div>
                    <p>
                        <b>Componentes 1</b>
                    </p>
                </div>
            </React.Fragment>
        );
    }
}
