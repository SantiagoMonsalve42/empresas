export interface persona{
    id_tipo_documento: string;
    tipo_documento: string;
    id_persona: string;
    id_cargo: string;
    id_empresa: string;
    numero_documento: string;
    nombre1: string;
    nombre2: string;
    apellido1: string;
    apellido2: string;
    correo: string;
    fecha_nacimiento: string;
    descripcion_cargo: string;
    nombre_empresa: string;
}

export interface experiencia{
    id_experiencia_laboral: string;
    id_persona: string;
    descripcion: string;
    fecha_inicio: string;
    fecha_final: string;
}

export interface estudio{
    id_estudios: string;
    id_persona: string;
    id_institucion_educativa: string;
    descripcion: string;
    fecha_inicio: string;
    fecha_final: string;
}