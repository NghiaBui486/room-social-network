import axiosClient from "./axiosClient";

const evaluationService = {
    evaluationRoom: () => {
        const url = "/evaluation";
        return axiosClient.get(url);
    }
};

export default evaluationService;