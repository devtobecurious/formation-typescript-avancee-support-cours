type MainCharacterName = 'Fredo' | 'Sam' | 'Grand pas'
interface MainCharacterInformation  {
    age: number
    strength: number
}

const dataInfos: Record<MainCharacterName, MainCharacterInformation> = {
    'Grand pas': {age: 100, strength: 150},
    Fredo: {age: 100, strength: 150},
    Sam: {age: 100, strength: 150}
}


const dataInfosP: Partial<Record<MainCharacterName, MainCharacterInformation>> = {
    'Grand pas': {age: 100, strength: 150},
}


type Schema = {
    name: string,
    age: number
}

type Validator<T> = Record<keyof T, (value: T[keyof T]) => boolean>

const validators: Validator<Schema> = {
    age: value => typeof value === 'string',
    name: value => typeof value === 'number'
}

function validate<T>(schema: Validator<T>, data: { [K in keyof T]: T[K]}) {
    return (Object.entries(schema) as [keyof T, (value: T[keyof T]) => boolean][]).every(
        ([key, validator]) => validator(data[key])
      );
}


type Permissions = 'read' | 'write' | 'delete';
type Role = 'admin' | 'editor' | 'viewer';

// Chaque rôle peut avoir un ensemble de permissions spécifiques
type RolePermissions = Record<Role, Permissions[]>;

const rolePermissions: RolePermissions = {
  admin: ['read', 'write', 'delete'],
  editor: ['read', 'write'],
  viewer: ['read'],
};

// Vérification de permissions
function hasPermission(
  role: Role,
  permission: Permissions
): boolean {
  return rolePermissions[role]?.includes(permission) || false;
}

type Original = {
    name: string,
    age:number
}

type Transformed<T> = Record<keyof T, { origin: T[keyof T], transform: string}>
type ToOriginal = Transformed<Original>

const item: ToOriginal = {
    age: { origin: 30, transform: '30'},
    name: { origin: '30', transform: '30'},
}

type OriginalBis = {
    userId: number;
    userName: string;
    userAge: number;
  };
  
// Transformer les clés pour les rendre camelCase sans le préfixe "user"
type TransformKeys<T> = {
    [K in keyof T as K extends `user${infer R}` ? Uncapitalize<R> : K]: T[K]
  };

const test: TransformKeys<OriginalBis> = {
    id: 1,
    name: '',
    age: 1
}
  
function transformObject<T>(obj: T): TransformKeys<T> {
    const result: Partial<TransformKeys<T>> = {} 

    for(const key in obj) {
        const newKey = key.replace(/^user/, '') as keyof TransformKeys<T>
        const value = obj[key as keyof T];

        (result as Partial<TransformKeys<T>>)[newKey] = value as TransformKeys<T>[keyof TransformKeys<T>] | undefined
    }

    return result as unknown as TransformKeys<T>
}


type Locales = 'en' | 'fr' | 'es';
type Messages = 'greeting' | 'farewell' | 'thankYou';

type Trads<Lang extends string, Mess extends string> = Partial<Record<Lang, Partial<Record<Mess, string>>>>;
type Translations = Trads<Locales, Messages>;

const trads: Translations = { 
    en: {
        farewell: '',
        greeting: '', 
        thankYou: ''
    }
}