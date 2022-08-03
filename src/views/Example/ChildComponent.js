import React from "react";
import "./demo.scss";

class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    };
    handleShowHide = () => {
        this.setState({ showJobs: !this.state.showJobs });
    };

    handleOnClickDelete = (job) => {
        console.log("Developer: ", job);
        this.props.deleteJob(job);
    };
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;

        return (
            <>
                {showJobs === false ? (
                    <div>
                        <button
                            className="btn-show"
                            onClick={() => this.handleShowHide()}
                        >
                            Show
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="job-list">
                            {arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} -{item.salary}
                                        <span
                                            onClick={() =>
                                                this.handleOnClickDelete(item)
                                            }
                                        >
                                            &nbsp; &times;
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>
                                Hide
                            </button>
                        </div>
                    </>
                )}
            </>
        );
    }
}

// const ChildComponent = (props) => {
//     let { arrJobs } = props;

//     return (
//         <>
//             <div className="job-list">
//                 {arrJobs.map((item, index) => {
//                     return (
//                         <div key={item.id}>
//                             {item.title} -{item.salary}
//                         </div>
//                     );
//                 })}
//             </div>
//         </>
//     );
// };
export default ChildComponent;
