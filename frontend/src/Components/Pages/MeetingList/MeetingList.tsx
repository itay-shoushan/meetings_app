import { useEffect, useState } from "react";
import MeetingModel from "../../../model/MeetingModel";
import TeamModel from "../../../model/TeamModel";
import meetingsService from "../../../Util/MeetingsService";
import "./MeetingList.css";

function MeetingList(): JSX.Element {
  const [meeting, setData] = useState<MeetingModel[]>([]);
  const [teams, setTeams] = useState<TeamModel[]>([]);

  const getMeetingsByTeamCode = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = +event.target.value;
    // console.log(value);

    meetingsService
      .getMeetingsByTeamCode(value)
      .then((response) => {
        response.map((item) => {
          
          if(item.meeting_start_date !== undefined && item.meeting_end_date !== undefined) {
            const end= new Date(item.meeting_end_date)
            const start= new Date(item.meeting_start_date)
            const diff = end.valueOf()-start.valueOf()
            const minute = Math.floor(diff/60000)%60;
            const hour = Math.floor(diff/3600000)%24;
            const second = Math.floor(diff/1000)%60;
            const day = Math.floor(diff/86400000)
            item.diff= 
            (day>0? day+" days ,": "")+
            (hour>0? hour+" hours " : "")+
            (minute>0? ", "+minute+" minute/s": "");
            
          } 
        })
        setData(response)
      })
      // .then(() => console.log(meeting))
      .catch((err) => alert(err.message));
  }; 

  useEffect(() => {
    meetingsService
      .getAllTeams()
      .then((response) => {
        setTeams(response);
      })
      // .then(() => console.log(teams))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div className="MeetingList">
      <select defaultValue="" onChange={getMeetingsByTeamCode}>
        <option disabled value="">
          Select Team
        </option>
        {teams.map((item) => (
          <option key={item.id} value={item.id}>
            {item.team_name}
          </option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>meeting code</th>
            <th>meeting start date</th>
            <th>meeting end date</th>
            <th>meeting description</th>
            <th>meeting room</th>
            <th>team name</th>
            <th>meeting duration</th>
          </tr>
        </thead>
        <tbody>
          {meeting.map((item) => 
            
          (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.meeting_code}</td>
              <td>{item.meeting_start_date?.toLocaleString().split("T")[0]}</td>
              <td>{item.meeting_end_date?.toLocaleString().split("T")[0]}</td>
              <td>{item.meeting_description}</td>
              <td>{item.meeting_room}</td>
              <td>{item.team_name}</td>
              <td>{item.diff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MeetingList;
