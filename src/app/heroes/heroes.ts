export interface Hero {
    name: string;
    roles: string[];
    imgSrc: string;
}

export enum Role {
    Fighter = 'Fighter',
    Tank = 'Tank',
    Mage = 'Mage',
    Assassin = 'Assassin',
    Suporte = 'Suporte',
    Marksman = 'Marksman'
}

export function valueOf(roleName: string): Role | undefined {
    const roleKey = Object.keys(Role).find(key => Role[key as keyof typeof Role] === roleName);
    if (roleKey !== undefined) {
      return Role[roleKey as keyof typeof Role];;
    }
    return undefined;
}