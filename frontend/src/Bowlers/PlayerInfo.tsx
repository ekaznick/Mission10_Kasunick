import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';
import { Team } from '../types/Team';

function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);
  const [teamData, setTeamData] = useState<Team[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5185/BowlingLeague');
      const b = await rsp.json();
      setBowlerData(b);
    };

    const fetchTeamData = async () => {
      const rsp = await fetch('http://localhost:5185/Team');
      const t = await rsp.json();
      setTeamData(t);
    };

    fetchBowlerData();
    fetchTeamData();
  }, []);

  //Function to get team name by team ID
  const getTeamName = (teamId: number): string => {
    const team = teamData.find((team) => team.teamId === teamId);
    return team && (team.teamName === 'Sharks' || team.teamName === 'Marlins')
      ? team.teamName
      : '';
  };

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowler Data</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Initial</th>
            <th>Last Name</th>
            <th>Team</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData
            .filter((b) => getTeamName(b.teamId) !== '')
            .map((b) => (
              <tr key={b.bowlerId}>
                <td>{b.bowlerFirstName}</td>
                <td>{b.bowlerMiddleInit ? b.bowlerMiddleInit : '-'}</td>
                <td>{b.bowlerLastName}</td>
                <td>{getTeamName(b.teamId)}</td>
                <td>{b.bowlerAddress}</td>
                <td>{b.bowlerCity}</td>
                <td>{b.bowlerState}</td>
                <td>{b.bowlerZip}</td>
                <td>{b.bowlerPhoneNumber}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
