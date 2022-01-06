const host = "http://127.0.0.1:8000/api/v1";

const requests = {
  allSets: `${host}/questions/all`,
  getQuestionPaper: `${host}/questions/questionpaper/<<SETCODE>>`,
};

module.exports = requests;
