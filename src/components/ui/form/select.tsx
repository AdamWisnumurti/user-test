import { Listbox, Transition } from '@headlessui/react';
import type { Dispatch, SetStateAction } from 'react';
import { HiChevronDown } from 'react-icons/hi';

export type TypeSelected = { label: string | number; value: string | number };
export const Select = ({
  selected,
  selectedLabel,
  setSelected,
  listOptions,
  placeHolder, // disabled = false,
}: {
  selected: string;
  selectedLabel: string | undefined;
  setSelected:
    | Dispatch<SetStateAction<number | string>>
    | ((e: number | string) => void);
  listOptions: TypeSelected[];
  placeHolder?: string;
  // disabled?: boolean;
}) => {
  return (
    <div>
      <Listbox
        as="div"
        className="space-y-1"
        value={selected}
        onChange={setSelected}
      >
        {({ open }) => (
          <div className="relative">
            <span className="inline-block w-full rounded-md">
              <Listbox.Button className="focus:shadow-outline-blue relative flex h-10 w-full cursor-default items-center justify-between rounded-md border border-neutral-40 bg-transparent px-3 py-2 transition duration-150 ease-in-out focus:border-primary focus:outline-none sm:text-sm sm:leading-5">
                <span className="block truncate">
                  {selectedLabel || placeHolder}
                </span>
                <HiChevronDown />
              </Listbox.Button>
            </span>

            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
            >
              <Listbox.Options
                static
                className="shadow-xs z-20 max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              >
                {listOptions.map((item: TypeSelected, key) => (
                  <Listbox.Option key={key} value={item.value}>
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
                        {/* {selected && (
                          <span
                            className={`${
                              active ? 'text-white' : 'text-primary'
                            } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                          >
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        )} */}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
      {/* <Listbox
        value={selected?.value || ""}
        onChange={(val: string) => {
          setSelected(listOptions?.find((item) => item.value === val));
        }}
        disabled={disabled}>
        <Listbox.Button className='flex w-full items-center justify-between rounded-md border border-gray-300 bg-gray-50 p-2.5 text-start text-sm  text-neutral-80 outline-none focus:border-neutral-40'>
          <span>{selected?.label || placeHolder}</span>
          <HiChevronDown />
        </Listbox.Button>
        <Listbox.Options className=' mt-0.5 max-h-36 w-full overflow-y-auto rounded-md border border-neutral-20 bg-gray-50 py-2 text-xs shadow-sm '>
          {listOptions.map((item: TypeSelected, key: number) => (
            <Listbox.Option
              key={key}
              value={item.value}
              className='flex w-auto cursor-pointer p-2 hover:bg-white'>
              {item.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox> */}
    </div>
  );
};
