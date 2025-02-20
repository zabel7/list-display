// assets
import SearchIcon from 'assets/search-icon.svg';
import { Input } from './Input';

export const SearchBar = (props) => {
    return (
        <Input
            icon={<img src={SearchIcon} alt="search" className="w-4 h-4" />}
            placeholder="Search..."
            {...props}
        />
    );
};
