export default function InputField({
                                       label,
                                       name,
                                       type = 'text',
                                       value,
                                       onChange,
                                       required = false,
                                       disabled = false
                                   }) {
    return (
        <div className="flex flex-col space-y-1">
            {label && (
                <label htmlFor={name} className="text-sm font-medium text-gray-700">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed w-full"
            />
        </div>
    );
}