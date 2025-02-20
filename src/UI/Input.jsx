import PropTypes from 'prop-types';

export const Input = ({ icon, ...props }) => {
    return (
        <div className="flex items-center w-full rounded-lg shadow bg-white pl-3 border border-gray-200 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-200">
            <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                {icon}
            </div>
            <input
                {...props}
                className="block min-w-0 grow py-2 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
        </div>
    );
};

Input.propTypes = {
    icon: PropTypes.node.isRequired,
};
