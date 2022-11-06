import { SyntheticEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import MeetingModel from "../../../model/MeetingModel";
import MeetingsService from "../../../Util/MeetingsService";
import "./MeetingNew.css";

function MeetingNew(): JSX.Element {
  const [message, setMessage] = useState();
  const [newMeeting, setMeeting] = useState<MeetingModel>();
  const { register, handleSubmit } = useForm<MeetingModel>();
  const [userData, setData] = useState<MeetingModel>();

  const navigate = useNavigate();

  //hook form....
  async function send(meeting: MeetingModel) {
    try {
      //   console.log(meeting);
      await MeetingsService.addMeeting(meeting);
      //manual routing....
      navigate("/meeting/list");
    } catch (err: any) {
      console.log(err.message);
      setMessage(err.message);
      //   setError(err.message);
    }
  }

  useEffect(() => {}, []);

  return (
    <div className="MeetingNew">
      <h3>{message}</h3>
      <form onSubmit={handleSubmit(send)}>
        <h2>Add Meeting</h2>
        <label>meeting code:</label>
        <input
          type="text"
          {...register("meeting_code")}
          value={newMeeting?.meeting_code}
        />

        <label>Start meeting:</label>
        <input
          type="datetime-local"
          {...register("meeting_start_date")}
          value={newMeeting?.meeting_start_date?.toString()}
        />

        <label>End meeting</label>
        <input
          type="datetime-local"
          {...register("meeting_end_date")}
          value={newMeeting?.meeting_end_date?.toString()}
        />

        <label>Meeting description:</label>
        <input
          type="string"
          {...register("meeting_description")}
          value={newMeeting?.meeting_description}
        />

        <label>Meeting room:</label>
        <input
          type="string"
          {...register("meeting_room")}
          value={newMeeting?.meeting_room}
        />

        <button style={{ backgroundColor: "lightblue", color: "black" }}>
          Add meeting
        </button>
      </form>
    </div>
  );
}
export default MeetingNew;
