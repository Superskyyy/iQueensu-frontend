import { TYPES, MESSAGE_KEYS } from "./constants/constants";
import messages from "../assets/languages/defaultMessage";

const specificProjectTypeMessages = {
    [TYPES.GRADE_DISTRIBUTION]: {
        [MESSAGE_KEYS.DESCRIPTION]: messages.gradeDistributionDescription
    }
}

export const getMessageByTypes = (msgType, projectType) =>{
    let key = projectType;
    if(!specificProjectTypeMessages.hasOwnProperty(projectType)){
        key = TYPES.DEFAULT;
    }

    if(specificProjectTypeMessages[key].hasOwnProperty(msgType)){
        return specificProjectTypeMessages[key][msgType];
    }else{
        console.error("no msg defined");
        return;
    }
} 