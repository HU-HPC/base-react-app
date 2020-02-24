from src.respository import ResearchPostgresRepository
from src.entity.research.research_proposal import from_query
from src.entity.research import ResearchProposal


keys = ['research_id','faculty_id', 'research_title', 'description', 'rationale', 'design', 'preliminary_data',
        'expected_results', 'time_schedule', 'qualifications', 'sponsors', 'consecutive_funding','detailed_funding',
        'proposal_title']


class ResearchUsecase:
    def __init__(self):
        self.repo = ResearchPostgresRepository()

    def create_research_proposal(self, rp):
        id = self.repo.create_research_proposal(rp)
        return id

    def get_all_research_proposals(self):
        results = self.repo.get_all_research_proposals()

        foo = from_query(results, keys)

        return foo

    def get_instructor(self, id):
        print("Not implemented yet", id)