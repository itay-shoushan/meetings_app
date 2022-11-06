class Config{
    //backend routes
    public baseURL = "http://localhost:3001";
    public newMeeting = this.baseURL+"/api/new_meeting";
    public getMeetingByTeam = this.baseURL+"/api/meetings-by-team-code/";
    public getTeams = this.baseURL+"/api/teams"

}

const appUrl = new Config();
export default appUrl;