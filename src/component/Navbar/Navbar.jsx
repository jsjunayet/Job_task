import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between max-w-7xl mx-auto mt-4">
            <h1 className="text-xl font-semibold">Task</h1>
            <div className="text-xl flex gap-4">
                <Link to={"/"}>Task_1</Link>
                <Link to={"/task"}>Task_2</Link>
            </div>
        </div>
    );
};

export default Navbar;