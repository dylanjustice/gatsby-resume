import * as React from "react";

interface ObjectivesProps {
    objectives: string;
}

const Objectives: React.FunctionComponent<ObjectivesProps> = (props) => {
    return (
        <div className="m-objectives">
                {props.objectives}
        </div>
    );
};

export default Objectives;
