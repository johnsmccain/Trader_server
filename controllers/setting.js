import Setting from "../models/Setting.js";

export const get_settings = async (req, res) => {

    try {
        const settings = await Setting.findById(req.params.settings_id);
        const {_id, __v, ...just_settings} = settings._doc;
        res.status(200).json({_id, __v, setting: {...just_settings}});
    } catch (error) {
        throw error;
    }
}
export const update_settings = async (req, res) => {
    try {
        const settings = await Setting.findByIdAndUpdate(
            req.params.settings_id,
            {$set: req.body},
            {new: true}
            );

        res.status(200).json(settings);
    } catch (error) {
        throw error;
    }
}