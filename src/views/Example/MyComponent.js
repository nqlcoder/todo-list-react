import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            {
                id: "abcJob1",
                title: "Developer",
                salary: "500",
            },
            {
                id: "abcJob2",
                title: "Tester",
                salary: "400",
            },
        ],
    };

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
        });
    };

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter((item) => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs,
        });
    };

    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        );
    }
}

// function MyComponent({ state }) {
//     state = {
//         firstname: "",
//         lastname: "",
//     };

//     return (
//         <>
//             <form>
//                 <label>First name:</label>
//                 <br />
//                 <input type="text" value={state.firstname} />
//                 <br />
//                 <label>Last name:</label>
//                 <br />
//                 <input type="text" value="Doe" />
//                 <br />
//                 <br />
//                 <input type="submit" value="Submit" />
//             </form>
//         </>
//     );
// }

export default MyComponent;
