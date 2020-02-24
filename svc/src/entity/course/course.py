def from_request_object(req):
    r = req.request
    
    a = Course(r.get('code'), r.get('instructor_id'), r.get('location'), r.get('semester'), r.get('day_of_week'),
               r.get('start_time'), r.get('end_time'), r.get('room_number'), r.get('description'), r.get('topics'),
               r.get('prerequisites'), r.get('expected_knowledge'), r.get('assessment'), r.get('learning_objective'),
               r.get('required_text'))
    return a


class Course:
    def __init__(self, code, instructor_id, location, semester, day_of_week, start_time, end_time, room_number,
                 description, topics, prerequisites, expected_knowledge, assessment, learning_objective, required_text):
        self.code = code
        self.instructor_id = instructor_id
        self.location = location
        self.semester = semester
        self.day_of_week = day_of_week
        self.start_time = start_time
        self.end_time = end_time
        self.room_number = room_number
        self.description = description
        self.topics = topics
        self.prerequisites = prerequisites
        self.expected_knowledge = expected_knowledge
        self.assessment = assessment
        self.learning_objective = learning_objective
        self.required_text = required_text
