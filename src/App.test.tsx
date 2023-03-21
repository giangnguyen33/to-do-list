import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App test', () => {
    it('should render Header',()=>{
        render(<App />);
        expect(screen.getByText("Todo List")).toBeInTheDocument();
    })
});
