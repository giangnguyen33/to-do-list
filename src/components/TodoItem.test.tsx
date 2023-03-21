import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import TodoItem from './TodoItem'

describe('TodoItem test',()=>{
    const mockOnChange = jest.fn();
    const itemId = 'item id';
    const itemlabel = 'item label';

    const setupTodoItem = () =>  render(<TodoItem id={itemId} label={itemlabel} checked={true} onChange={mockOnChange}></TodoItem>)
   
    it('should render item label',()=>{
        setupTodoItem();
        expect(screen.getByText(itemlabel)).toBeInTheDocument();
    })

    it('should render checkbox with default value',()=>{
        setupTodoItem()
        expect(screen.getByRole('checkbox')).toBeChecked()
    })
    
    it('should call onChange function when click on checkbox',()=>{
        setupTodoItem();
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(mockOnChange).toBeCalledWith(false, itemId);
    })
})