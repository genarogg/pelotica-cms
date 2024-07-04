import type { Schema, Attribute } from '@strapi/strapi';

export interface RolRol extends Schema.Component {
  collectionName: 'components_rol_rols';
  info: {
    displayName: 'rol';
    icon: 'command';
    description: '';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'rol.rol': RolRol;
    }
  }
}
