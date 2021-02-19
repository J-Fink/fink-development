import { GiCircuitry as icon } from 'react-icons/gi';

export default {
    //computer name
    name: 'technologies',
    //visible title
    title: 'Technologies',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Technology Used',
            type: 'string',
            description: 'Description of technology',
        },
    ]
}