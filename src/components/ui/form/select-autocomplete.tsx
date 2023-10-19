import { Combobox, Transition } from '@headlessui/react';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { HiChevronDown } from 'react-icons/hi';

export type TypeSelected = { label: string; value: string };
export const SelectAutoComplete = ({
  selected,
  // selectedLabel,
  setSelected,
  listOptions, // placeHolder, // disabled = false,
}: {
  selected: string;
  // selectedLabel: string | undefined;
  setSelected: Dispatch<SetStateAction<string>>;
  listOptions: TypeSelected[];
  // placeHolder?: string;
  // disabled?: boolean;
}) => {
  const [query, setQuery] = useState('');
  const filteredList =
    query === ''
      ? listOptions
      : listOptions.filter((item) => {
          return item.label.toLowerCase()?.includes(query.toLowerCase());
        });
  return (
    <div>
      <Combobox
        as="div"
        className="space-y-1"
        value={selected}
        onChange={setSelected}
      >
        {({ open }) => (
          <div className="relative">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(item: any) => item.label}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="focus:shadow-outline-blue absolute inset-y-0 right-0 flex w-full cursor-default items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 transition duration-150 ease-in-out focus:border-primary focus:outline-none sm:text-sm sm:leading-5">
              <span className="block truncate">{query || selected}</span>
              <HiChevronDown />
            </Combobox.Button>

            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
            >
              <Combobox.Options
                static
                className="shadow-xs z-20 max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              >
                {filteredList.map((item: TypeSelected, key) => (
                  <Combobox.Option key={key} value={item.value}>
                    {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
                    {({ selected, active }) => (
                      <div
                        className={`${
                          active ? 'bg-primary text-white' : 'text-gray-900'
                        } relative cursor-pointer select-none py-2 pl-3 pr-4`}
                      >
                        <span
                          className={`${
                            selected ? 'font-semibold' : 'font-normal'
                          } block truncate`}
                        >
                          {item.label}
                        </span>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Transition>
          </div>
        )}
      </Combobox>
    </div>
  );
};
