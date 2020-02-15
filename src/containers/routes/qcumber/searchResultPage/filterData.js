import { FILTERS_COMMON } from "../../../../utilities/constants/constants";

export const filterOptions = [
    { [FILTERS_COMMON.FIELD]: 'Field 1', [FILTERS_COMMON.CHOICES]: { [FILTERS_COMMON.CHECKBOX]: ['Option 1', 'Option 2', 'Option 3', 'Option 3']}},

    { [FILTERS_COMMON.FIELD]: 'Field 3', [FILTERS_COMMON.CHOICES]: { [FILTERS_COMMON.CHECKBOX]: ['Option 4', '400', 'Option 5']}},

    { [FILTERS_COMMON.FIELD]: 'Field 2', [FILTERS_COMMON.CHOICES]: { [FILTERS_COMMON.RANGESLIDER]: [100, 400]}},
    
    // can insert customized objs (filter type) as well
    // { field: 'Field 3', choices: {objType: [{obj},{obj}]}}
]