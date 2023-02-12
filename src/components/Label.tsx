import './label.css'

type sizes = 'normal' | 'h1' | 'h2' | 'h3';

type colors = 'primary' | 'secondary' | 'tertiary';

export interface LabelProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta
    */
    label: string,
    /**
     * Este es el tamaño de la etiqueta
    */
    size: sizes,
    /**
     * Convierte a mayuscula el contenido de la etiqueta
    */
    allCaps?: boolean,
    /**
     * Este es el color de la etiqueta
    */
    color?: colors,
    /**
     * Este es el color de fondo
    */
    fontColor?: string,
}

export const Label = ({
    label    = 'No Text',
    size     = 'h1',
    allCaps  = false,
    color    = 'primary',
    fontColor= 'primary',
}: LabelProps) => {
    return (
        <span className={`label ${ size } text-${ color }`}
              style={{ color:fontColor }}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}