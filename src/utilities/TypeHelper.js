import { CONTAINER_TYPES, MESSAGE_KEYS } from "./constants/constants";
import messages from "../assets/languages/defaultMessage";

const specificProjectTypeMessages = {
    [CONTAINER_TYPES.GRADE_DISTRIBUTION]: {
        [MESSAGE_KEYS.TITLE]: messages.gradeDistributionTitle,
        [MESSAGE_KEYS.DESCRIPTION]: messages.gradeDistributionDescription
    },

    [CONTAINER_TYPES.COURSE_CATALOG]: {
        [MESSAGE_KEYS.TITLE]: messages.courseCatalogTitle,
        [MESSAGE_KEYS.DESCRIPTION]: messages.courseCatalogDescription
    },

    [CONTAINER_TYPES.DEGREE_PLANNING]: {
        [MESSAGE_KEYS.TITLE]: messages.degreePlanningTitle,
        [MESSAGE_KEYS.DESCRIPTION]: messages.degreePlanningDescription
    },

    [CONTAINER_TYPES.SECRET_LIBRARY]: {
        [MESSAGE_KEYS.TITLE]: messages.secretLibraryTitle,
        [MESSAGE_KEYS.DESCRIPTION]: messages.secretLibraryDescription
    },

    [CONTAINER_TYPES.DEFAULT]: {
        [MESSAGE_KEYS.TITLE]: messages.gradeDistributionTitle,
        [MESSAGE_KEYS.DESCRIPTION]: messages.gradeDistributionDescription
    }
}

export const getMessageByTypes = (msgType, projectType) =>{
    let key = projectType;
    if(!specificProjectTypeMessages.hasOwnProperty(projectType)){
        key = CONTAINER_TYPES.DEFAULT;
    }

    if(specificProjectTypeMessages[key].hasOwnProperty(msgType)){
        return specificProjectTypeMessages[key][msgType];
    }else{
        console.error("no msg defined");
        return;
    }
} 