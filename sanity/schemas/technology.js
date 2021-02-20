import { GiCircuitry as icon } from 'react-icons/gi';

export default {
    //computer name
    name: 'technology',
    //visible title
    title: 'Technologies',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Technology Name',
            type: 'string',
            description: 'What is the name of the technology?',
        },
    ]
}