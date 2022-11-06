class Meeting{
    public id: number | undefined;
    public meeting_code: number | undefined;
    public meeting_start_date: Date | undefined;
    public meeting_end_date: Date | undefined;
    public meeting_description: string | undefined;
    public team_id: number | undefined;
    public meeting_room: string | undefined;
    public team_name: string | undefined;

    constructor(meeting: Meeting){
        this.meeting_code=meeting.meeting_code;
        this.meeting_start_date=meeting.meeting_start_date;
        this.meeting_end_date=meeting.meeting_end_date;
        this.meeting_description=meeting.meeting_description;
        this.team_id=meeting.team_id;
        this.meeting_room=meeting.meeting_room
        this.team_name=meeting.team_name;
      }
   
}

export default Meeting;