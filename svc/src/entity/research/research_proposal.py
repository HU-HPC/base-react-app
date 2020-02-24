import json
from src.util.snakeify import snakeify

def from_request(json_request):
    # d = json.loads(json_request)
    d = json_request
    proposal = dict()
    for key, value in d.items():
        corrected_key = snakeify(key)
        proposal[corrected_key] = d[key]
    return ResearchProposal(proposal)

def from_query(result_set, keys):
    results = []
    for result in result_set:
        x =dict(zip(keys, result))
        results.append(x)
    return results


class ResearchProposal:
    # def __init__(self, faculty_id, research_title, description, rationale, design, preliminary_data, expected_results,
    #              time_schedule, qualifications, sponsors, consecutive_funding, detailed_funding, proposal_title):
    #     self.faculty_id = faculty_id
    #     self.research_title = research_title
    #     self.description = description
    #     self.rationale = rationale
    #     self.design = design
    #     self.preliminary_data = preliminary_data
    #     self.expected_results = expected_results
    #     self.time_schedule = time_schedule
    #     self.qualifications = qualifications
    #     self.sponsors = sponsors
    #     self.consecutive_funding = consecutive_funding
    #     self.detailed_funding = detailed_funding
    #     self.proposal_title = proposal_title
    keys = ['faculty_id', 'research_title', 'description', 'rationale', 'design', 'preliminary_data',
            'expected_results', 'time_schedule', 'qualifications', 'sponsors', 'consecutive_funding',
            'detailed_funding', 'proposal_title']
    def __init__(self, dictionary):
        for key in dictionary:
            setattr(self, key, dictionary[key])