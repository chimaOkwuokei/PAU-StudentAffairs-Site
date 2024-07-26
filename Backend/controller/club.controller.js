import Club from "../model/club.model.js";

export const getClub = async(req, res) => {
    try {
        const club = await Club.find();
        res.status(200).json(club);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};