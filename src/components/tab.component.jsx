const CustomTab = ({ name, options, selectedValue, onChange }) => {
  return (
    <div className="tab flex border-b my-5">
      {options.map((item, idx) => (
        <div
          key={idx}
          className={` text-base w-1/3 text-center  pb-2 ${
            item === selectedValue
              ? "border-b-2  border-primary-light text-primary-light font-medium"
              : "text-secondary-light"
          }`}
        >
          <input
            type="radio"
            id={name + "-" + idx}
            name={name}
            value={item}
            onChange={onChange}
            hidden
           
          />
          <label htmlFor={name + "-" + idx} className="capitalize cursor-pointer" >
            {item.replace("-", " ")}
          </label>
        </div>
      ))}
      <hr />
    </div>
  );
};
export default CustomTab;
