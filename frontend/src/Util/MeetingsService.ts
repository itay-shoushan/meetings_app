import axios from "axios";
import TeamModel from "../model/TeamModel";
import MeetingModel from "../model/MeetingModel";
import appUrl from "./Config";

class MeetingService{
    public async getMeetingsByTeamCode(id:number):Promise<MeetingModel[]>{
        const response = await axios.get<MeetingModel[]>(appUrl.getMeetingByTeam+id);
        return response.data;
}

public async addMeeting(meeting:MeetingModel):Promise<void>{
    const response = await axios.post<MeetingModel>(appUrl.newMeeting,meeting);
}

public async getAllTeams():Promise<TeamModel[]>{
    const response = await axios.get<MeetingModel[]>(appUrl.getTeams);
    return response.data;
}
}

const meetingService = new MeetingService();
export default meetingService;