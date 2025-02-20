import PropTypes from 'prop-types';

// assets
import GridIcon from 'assets/grid-icon.svg';
import ListIcon from 'assets/list-icon.svg';

const LayoutButtons = ({ view, onChange }) => {
    return (
        <div className="inline-flex rounded-md shadow-xs" role="group">
            <button
                type="button"
                onClick={() => onChange('grid')}
                className={`px-4 cursor-pointer py-1.5 text-sm font-medium text-gray-900 border-r border-y rounded-s-lg border-gray-200 hover:bg-gray-100 ${
                    view === 'grid' ? 'bg-gray-200' : 'bg-white'
                }`}
            >
                <img src={GridIcon} alt="grid" className="w-6 h-6" />
            </button>
            <button
                type="button"
                onClick={() => onChange('list')}
                className={`px-4 cursor-pointer py-1.5 text-sm font-medium text-gray-900  border-y rounded-e-lg border-gray-200 hover:bg-gray-100 ${
                    view === 'list' ? 'bg-gray-200' : 'bg-white'
                }`}
            >
                <img src={ListIcon} alt="list" className="w-6 h-6 flex-none" />
            </button>
        </div>
    );
};

LayoutButtons.propTypes = {
    view: PropTypes.oneOf(['grid', 'list']).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default LayoutButtons;
