import { CgWebsite as icon } from 'react-icons/cg';

export default {
    //computer name
    name: 'siteSettings',
    //visible title
    title: 'Settings',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Site Name',
            type: 'string',
            descriptions: 'Name of the Site',
        },
    ],
};