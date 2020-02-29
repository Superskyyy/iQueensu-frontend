import { FILTERS_COMMON } from "../../../../utilities/constants/constants";

export const filterOptions = [
    { // this has to be consistent with the attribute name in json 
      [FILTERS_COMMON.FIELD]: 'subject_code',
      [FILTERS_COMMON.DISPLAY_NAME]: 'Subject Code', 
      [FILTERS_COMMON.CHOICES]: { [FILTERS_COMMON.CHECKBOX]: ['AGHE', 'ELEC', 'ANAT']}},

    { // this has to be consistent with the attribute name in json 
      [FILTERS_COMMON.FIELD]: 'career',
      [FILTERS_COMMON.DISPLAY_NAME]: 'Career', 
      [FILTERS_COMMON.CHOICES]: { [FILTERS_COMMON.CHECKBOX]: ['Undergraduate', 'Undergraduate Online', 'Graduate']}},


      { // this has to be consistent with the attribute name in json 
        [FILTERS_COMMON.FIELD]: 'course_load',
        [FILTERS_COMMON.DISPLAY_NAME]: 'Course Load', 
        [FILTERS_COMMON.CHOICES]: { [FILTERS_COMMON.CHECKBOX]: ['Und', 'Unde Online', 'Grate']}},
  
    
    

    // { [FILTERS_COMMON.FIELD]: 'Field 2', [FILTERS_COMMON.CHOICES]: { [FILTERS_COMMON.RANGE_SLIDER]: [100, 400]}},
    
    // can insert customized objs (filter type) as well
    // { field: 'Field 3', choices: {objType: [{obj},{obj}]}}
]