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
                source: 'name',
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
            title: 'Project Technologies',
            type: 'array',
            of: [{type: 'reference', to: [{ type: 'technology',},]},],
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
    preview: {
        select: {
            title: 'name',
            media: 'image',
            technology0: 'projectTechnologies.0.name',
            technology1: 'projectTechnologies.1.name',
            technology2: 'projectTechnologies.2.name',
            technology3: 'projectTechnologies.3.name',
        },
        prepare: ({ title, media, ...projectTechnologies }) => {
            const techs = Object.values(projectTechnologies).filter(Boolean);
            return {
                title,
                media,
                subtitle: techs.join(', '),
            };
        },
    },
};