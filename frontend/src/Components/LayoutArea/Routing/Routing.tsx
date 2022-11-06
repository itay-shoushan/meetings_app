import { Routes, Route } from "react-router-dom";
import MeetingList from "../../Pages/MeetingList/MeetingList";
import MeetingNew from "../../Pages/NewMeeting/MeetingNew";
import Home from "../../Pages/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/meeting/list" element={<MeetingList/>}/>
                <Route path="/meeting/new" element={<MeetingNew/>}/>                
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
}

export default Routing;

//  