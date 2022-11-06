import express, { NextFunction, Request, Response } from "express";
import logic from "../logic/logic";
import Meeting from "../model/meetings";

const router = express.Router();
// get all teams
router.get(
  "/api/teams",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const teams = await logic.getAllTeams();
      response.status(200).json(teams);
    } catch (err: any) {
      next(err);
    }
  }
);

// get meetings by team code
router.get(
  "/api/meetings-by-team-code/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    try{
      const id = +request.params.id;
      const meetingsByTeamCode = await logic.getAllMeetings_byTeamCode(id);
      response.status(200).json(meetingsByTeamCode);
    } catch (err: any) {
      next(err);
  }
}
);

// add new meetings
router.post(
  "/api/new_meeting",
   async (request:Request, response:Response, next:NextFunction) => {
    try {
      const meeting = new Meeting(request.body);
      const newMeeting = await logic.addNewMeeting(meeting);
      response.status(201).json(newMeeting);
    } catch (err: any) {
      next(err);
  }
})
/*
router.post("/api/new_donation", async (request:Request, response:Response, next:NextFunction) => {
  try{
    let donation = new Donation(request.body);
    //donation.sum=18;
    const newDonation = await logic.addDonation(donation);
    response.status(201).json(newDonation);

  } catch (err:any){
    next(err);
  }
});

/////////////////////////
router.post(
  "/api/products/:id/:units",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = +request.params.id;
      const units = +request.params.units;
      logic.updateStock(id, units);
      response.status(202).json("{status:'ok'}");
    } catch (err: any) {
      next(err);
    }
  }
);
*/


export default router;
