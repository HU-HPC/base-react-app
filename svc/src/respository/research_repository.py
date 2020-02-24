from src.respository import engine, connection, metadata, db, sessionmaker


class ResearchPostgresRepository(object):
    def __init__(self):
        self.research_proposal_table = db.Table('research_proposal', metadata, autoload=True, autoload_with=engine)
        Session = sessionmaker()
        Session.configure(bind=engine)
        self.session = Session()

    def create_research_proposal(self, rp):
        query = db.insert(self.research_proposal_table).values(faculty_id=rp.faculty_id, research_title=rp.research_title,
                                                               description=rp.description, rationale=rp.rationale,
                                                               design=rp.design, preliminary_data=rp.preliminary_data,
                                                               expected_results=rp.expected_results,
                                                               time_schedule=rp.time_schedule,
                                                               qualifications=rp.qualifications, sponsors=rp.sponsors,
                                                               consecutive_funding=rp.consecutive_funding,
                                                               detailed_funding=rp.detailed_funding,
                                                               proposal_title=rp.proposal_title)
        result_research_proposla = connection.execute(query)
        return result_research_proposla.inserted_primary_key[0]

    def get_all_research_proposals(self):
        query = db.select([self.research_proposal_table]).where(self.research_proposal_table.columns.deleted == False)
        ResultProxy = connection.execute(query)
        ResultSet = ResultProxy.fetchall()
        return ResultSet