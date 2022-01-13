const host = "http://127.0.0.1:8000/api/v1";

const requests = {
  allSets: `${host}/questions/paperMetadata`,
  getQuestionPaper: `${host}/questions/questionpaper/<<SETCODE>>`,
  getDashboardData: `${host}/user/dashboard`,
  checkInfo: `${host}/user/info/papers/<<SETCODE>>`,
};

module.exports = requests;
