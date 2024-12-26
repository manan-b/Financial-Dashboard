import * as React from "react";
import { TabItem } from "./TabItem";

const tabItems = [
  { label: "Edit Profile", isActive: true },
  { label: "Preferences", isActive: false },
  { label: "Security", isActive: false },
];

const initialFormFields = [
  [
    { label: "Your Name", value: "Charlene Reed" },
    { label: "User Name", value: "Charlene Reed" },
  ],
  [
    { label: "Email", value: "charlenereed@gmail.com" },
    { label: "Password", value: "**********" },
  ],
  [
    {
      label: "Date of Birth",
      value: "25 January 1990",
      className: "flex gap-5 justify-between pr-5",
    },
    { label: "Present Address", value: "San Jose, California, USA" },
  ],
  [
    { label: "Permanent Address", value: "San Jose, California, USA" },
    { label: "City", value: "San Jose" },
  ],
  [
    { label: "Postal Code", value: "45962" },
    { label: "Country", value: "USA" },
  ],
];

export function ProfileEditor() {
  const [formFields, setFormFields] = React.useState(initialFormFields);

  const handleChange = (rowIndex, fieldIndex, newValue) => {
    const updatedFields = formFields.map((row, rIndex) =>
      row.map((field, fIndex) => {
        if (rIndex === rowIndex && fIndex === fieldIndex) {
          return { ...field, value: newValue };
        }
        return field;
      })
    );
    setFormFields(updatedFields);
  };

  const handleSave = () => {
    console.log("Saved Values:", formFields);
    alert("Values saved successfully!");
  };

  return (
    <div className="flex flex-col rounded-3xl">
      <div className="flex flex-col items-end px-8 py-9 w-full bg-white rounded-3xl min-h-[717px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full rounded-none max-w-[1050px] max-md:max-w-full">
          <div className="flex gap-10 items-center self-start ml-4 text-base font-medium text-slate-400 max-md:ml-2.5">
            {tabItems.map((tab, index) => (
              <TabItem key={index} {...tab} />
            ))}
          </div>
          <div className="flex mt-2 max-md:max-w-full">
            <div className="flex shrink-0 rounded-xl bg-neutral-800 h-[3px] w-[114px]" />
            <div className="flex grow shrink-0 self-start h-px bg-gray-100 basis-0 w-fit max-md:max-w-full" />
          </div>
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-10 ml-5 max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fab075884180448b3d5d077443f7fd17d6fc946cbf295386aa3a338753ee6488?placeholderIfAbsent=true&apiKey=57aa95f719fa401d92318a63fc9a1351"
            alt="Profile avatar"
            className="object-contain shrink-0 aspect-[1.08] w-[98px]"
          />
          <div className="flex flex-col rounded-none min-w-[240px] w-[865px] max-md:max-w-full ml-5 gap-8">
            {formFields.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap gap-28 mt-6 ml-8 max-md:max-w-full"
              >
                {row.map((field, fieldIndex) => (
                  <div key={fieldIndex} className="flex flex-col">
                    <label className="text-sm text-gray-500 mb-3 w-40 block">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      value={field.value}
                      onChange={(e) =>
                        handleChange(rowIndex, fieldIndex, e.target.value)
                      }
                      className="px-5 py-4 border rounded-xl text-gray-700 w-full"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleSave}
          className="flex flex-col mt-10 max-w-full text-lg font-medium text-center text-white whitespace-nowrap rounded-2xl w-[190px] max-md:mt-10"
        >
          <div className="px-5 py-3.5 rounded-2xl bg-neutral-800 max-md:px-5">
            Save
          </div>
        </button>
      </div>
    </div>
  );
}
