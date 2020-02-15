import { FILTERS_COMMON } from "../../../../utilities/constants/constants";

export const filterOptions = [
    { // this has to be consistent with the attribute name in json 
      [FILTERS_COMMON.FIELD]: 'subject_code',
      [FILTERS_COMMON.DISPLAY_NAME]: 'Subject Code', 
      [FILTERS_COMMON.CHOICES]: { [FILTERS_COMMON.CHECKBOX]: ['AGHE', 'ELEC', 'COMP', 'Option 3']}},

    { // this has to be consistent with the attribute name in json 
      [FILTERS_COMMON.FIELD]: 'diffculty_level',  
      [FILTERS_COMMON.DISPLAY_NAME]: 'Diffculty Level', 
      [FILTERS_COMMON.CHOICES]: { [FILTERS_COMMON.CHECKBOX]: ['Easy', 'Medium', 'Hard']}},
    
    

    // { [FILTERS_COMMON.FIELD]: 'Field 2', [FILTERS_COMMON.CHOICES]: { [FILTERS_COMMON.RANGE_SLIDER]: [100, 400]}},
    
    // can insert customized objs (filter type) as well
    // { field: 'Field 3', choices: {objType: [{obj},{obj}]}}
]