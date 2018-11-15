import { sampleData } from "stories/mock/";

class CommonService {
  getSampleData() {
    return new Promise(resolve => {
      const total = sampleData.total;
      const start = Math.floor(Math.random() * (total - 3)) + 3;
      const sampleData = sampleData.data.slice(total - start);
      resolve({
        sampleData,
        total: start
      });
    });
  }
}

export default new CommonService();
