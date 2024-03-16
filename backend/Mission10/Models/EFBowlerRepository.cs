
namespace Mission10.Models
{
    public class EFBowlerRepository : IBowlerRepository
    {
        private BowlingLeagueContext _bowlingContext;

        public EFBowlerRepository(BowlingLeagueContext temp) {
            _bowlingContext = temp;
        }
        public IEnumerable<Bowler> Bowlers => _bowlingContext.Bowlers;
        public IEnumerable<Team> Teams => _bowlingContext.Teams;
    }
}
