import { MdWork as icon } from 'react-icons/md';

export default {
    //computer name
    name: 'work',
    //visible title
    title: 'Projects',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'projectUrl',
            title: 'Project URL',
            type: 'url',
        },
        {
            name: 'projectOrganization',
            title: 'Project Organization',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'description',
                maxLength: 100,
            },
        },
        {
            name: 'projectDescription',
            title: 'Project Description',
            type: 'text',
            description: 'Tell us about them!',
        },
        {
            name: 'projectTechnologies',
            title: 'Project Description',
            type: 'text',
            description: 'Tell us about them!',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
};