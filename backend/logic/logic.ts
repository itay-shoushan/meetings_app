import dal from "../utils/dal_mysql";
import { OkPacket } from "mysql";
import dal_mysql from "../utils/dal_mysql";
import Meeting from "../model/meetings";
import Team from "../model/teams";
import config from "../utils/config";
import { ValidationError } from "../model/client-errors";


//get All teams
async function getAllTeams(): Promise<Team[]> {
  const sql = `SELECT * FROM management_meetings.teams`
  const result = await dal.execute(sql);
  return result;
};

//get All meetings by team-code
async function getAllMeetings_byTeamCode(meeting_code: number): Promise<Meeting[]> {
  const sql = `SELECT meetings.* , teams.team_name
               FROM meetings JOIN teams
               ON meetings.meeting_code = teams.id  
               WHERE teams.id =${meeting_code}`;
  const result = await dal.execute(sql);
  return result;
}

//add new meeting
async function addNewMeeting(meeting: Meeting): Promise<Meeting>{
  const sql1 = `SELECT COUNT(*) AS CountDates FROM management_meetings.meetings
  WHERE (meeting_start_date <= '${meeting.meeting_start_date}' AND
  meeting_end_date > '${meeting.meeting_start_date}') OR
  (meeting_start_date < '${meeting.meeting_end_date}' AND 
  meeting_end_date >= '${meeting.meeting_end_date}' ) OR (
  '${meeting.meeting_start_date}' <= meeting_start_date AND 
  '${meeting.meeting_end_date}' >= meeting_end_date);`
  const result1 = await dal.execute(sql1);
  if (result1[0].CountDates !== 0) {
    throw new ValidationError("cannot add a meeting because have a collision");
  }
    const sql2 = `INSERT INTO meetings Values (
      DEFAULT,
      ${meeting.meeting_code},
      '${meeting.meeting_start_date}',
      '${meeting.meeting_end_date}',
      '${meeting.meeting_description}',
      '${meeting.meeting_room}'
      )`;
    const result2:OkPacket = await dal.execute(sql2);
  meeting.id = result2.insertId;
  console.log('result2 insert '+result2)
  return meeting;
  
  }

/*
INSERT INTO `management_meetings`.`meetings` (`meeting_code`, `meeting_start_date`, `meeting_end_date`, `meeting_description`, `meeting_room`) VALUES ('213123', '2022-10-28 10:03:42', '2022-10-28 15:03:42', 'lifestyle meeting', 'TLV room');

//add new donation
async function addDonation(donation:Donation):Promise<Donation>{
  const sql = `INSERT INTO donation Values(
      DEFAULT,
      '${donation.name}',
      '${donation.family}',
      '${donation.tel}',
      ${donation.sum},
      '${donation.auth_code}',
      '',
      ${donation.payment_code},
      '${donation.memo}'
    )`;
    const result:OkPacket = await dal.execute(sql);
    donation.id = result.insertId;
    return donation;
}


// async function updateStock():Promise<void>{
const updateStock = async (product_id: number, qty: number): Promise<void> => {
  const date = new Date().toISOString().slice(0, 19).replace("T", " ");
  const sql = `UPDATE products SET units = ${qty}, last_update='${date}' WHERE (id = ${product_id})`;
  const result: OkPacket = await dal.execute(sql);
};

const createData = async () => {
  const result: OkPacket = await dal.execute(config.db_init);
};

*/

export default {
  getAllTeams,
  getAllMeetings_byTeamCode,
  addNewMeeting,
};
