class MeetingModel{
    public id: number=0;
    public meeting_code: number | undefined;
    public meeting_start_date: Date | undefined;
    public meeting_end_date: Date | undefined;
    public meeting_description: string | undefined;
    public team_id: number | undefined; 
    public meeting_room: string | undefined;
    public team_name: string | undefined;
    public diff: string | undefined;
}

export default MeetingModel;