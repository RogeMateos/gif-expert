import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en <AddCategory />', () => {
    
    test('debe de cambiar el valor de la caja de texto', () => {
        
        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Saitama' } });

        expect( input.value ).toBe('Saitama');

    });
    //https://chatgpt.com/c/b5a69eef-53f4-4068-bab0-26ed12836197//https://chatgpt.com/c/b5a69eef-53f4-4068-bab0-26ed12836197
//https://chatgpt.com/c/1aadab6a-934e-4dd9-8285-960985a1557f
    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue    = 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );
        // screen.debug();
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('no debe de llamar al onNewCategory si el input está vacío', () => {
        const onNewCategory = jest.fn();

        // Renderiza el componente con un input inicial vacío
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        // Cambia el valor del input a vacío antes de enviar el formulario
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: '' } });

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
    });

});