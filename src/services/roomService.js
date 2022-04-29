import axiosClient from "./axiosClient";

const roomService = {
    authentroom: () => {
        const url = "/room";
        return axiosClient.get(url);
    }
};

export default roomService;