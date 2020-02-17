def from_request(r):
    return CreateCourseRequest(
        r.json.get("code"),
        r.json.get("instructor_id"),
        r.json.get("location"),
        r.json.get("semester"),
        r.json.get("dayOfWeek"),
        r.json.get("startTime"),
        r.json.get("endTime"),
        r.json.get("roomNumber"),
        r.json.get("description"),
        r.json.get("topics"),
        r.json.get("prerequisites"),
        r.json.get("expectedKnowledge"),
        r.json.get("assessment"),
        r.json.get("learningObjectives"),
        r.json.get("requiredText"),
    )


class CreateCourseRequest:
    def __init__(self, code, instructor_id, location, semester,
                 day_of_week, start_time, end_time, room_number,
                 description, topics, prerequisites, expected_knowledge,
                 assessment, learning_objectives, required_text):
        self.request = {
                            "code": code,
                            "location": location,
                            "instructor_id": instructor_id,
                            "semester": semester,
                            "day_of_week": day_of_week,
                            "start_time": start_time,
                            "end_time": end_time,
                            "room_number": room_number,
                            "description": description,
                            "topics": topics,
                            "prerequisites": prerequisites,
                            "expected_knowledge": expected_knowledge,
                            "assessment": assessment,
                            "learning_objectives": learning_objectives,
                            "required_text": required_text
                        }
