from flask import request
from src.http.controller import json_response
from src import app
from src.entity.research import from_request
from src.usecase.research_usecase import ResearchUsecase


@app.route("/research", methods=["POST"])
def create_research_proposal():
    j = request.get_json()
    research_proposal = from_request(j)
    research_usecase = ResearchUsecase()
    rp_id = research_usecase.create_research_proposal(research_proposal)
    return json_response({"reasearchId": rp_id})

@app.route("/research", methods=["GET"])
def get_research_proposals():
    handler = ResearchUsecase()
    if len(request.args) != 0:
        params = request.args.to_dict()
        data = handler.get_all_research_proposals(params['id'])
    else:
        data = handler.get_all_research_proposals()

    return json_response(data)