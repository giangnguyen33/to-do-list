import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import TodoItem from './TodoItem'

describe('TodoItem test',()=>{
    const mockOnChange = jest.fn();

    const setupTodoItem = () =>  render(<TodoItem label="Item label" checked={true} onChange={mockOnChange}></TodoItem>)
   
    it('should render item label',()=>{
        setupTodoItem();
        expect(screen.getByText('Item label')).toBeInTheDocument();
    })

    it('should render checkbox with default value',()=>{
        setupTodoItem()
        expect(screen.getByRole('checkbox')).toBeChecked()
    })
    
    it('should call onChange function when click on checkbox',()=>{
        setupTodoItem();
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(mockOnChange).toBeCalledWith(false);
    })
})