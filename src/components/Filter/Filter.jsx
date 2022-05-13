import { nanoid } from 'nanoid';
import { Input, Label, Container } from './Filter.styled';
import PropTypes from 'prop-types';


const filterInputId = nanoid();

export const Filter = ({onFilterChange, value}) => (
    <Container>
        <Label htmlFor={filterInputId}>Find</Label> 
        <Input id={filterInputId} onChange={onFilterChange} type="text" value={value}/>
    </Container>
)

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}