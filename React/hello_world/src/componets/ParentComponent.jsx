// import React, { useState } from "react";
// import ChildComponent from "./ChildComponent"; // importing ChildComponent file
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [parentName, setParentName] = useState("Parent");

  const great_Parent = (ChildName) => {
    alert(`Hi, this is ${parentName} method from ${ChildName}`);
  };

  return (
    <div>
      <ChildComponent gr_parent={great_Parent} />
    </div>
  );
}

export default ParentComponent;

// class ParentComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       parentName: "Parent",
//     };
//     this.great_Parent = this.great_Parent.bind(this); //binding
//   }
//   great_Parent(ChildName) {
//     // function
//     alert(`Hi, this is ${this.state.parentName} method from ${ChildName}`); // alert message
//   }
//   render() {
//     return (
//       <div>
//         <ChildComponent gr_parent={this.great_Parent} />
//         {/* in above gr_parent is a prop. It reference to the great_Parent function
//         By using this prop ChildComponent access the great_Parent function from
//         ChildComponent */}
//       </div>
//     );
//   }
// }

// export default ParentComponent;
