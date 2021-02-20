import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

export default function Sidebar() {
    return S.list().title(`Fink Development`).items([
        S.listItem().title('Home Page').icon(() => 
        <strong>FINK</strong>).child(S.editor().schemaType('siteSettings').documentId('fink-development')),
        ...S.documentTypeListItems().filter(item => item.getId() !== 'siteSettings'),
    ]);
}